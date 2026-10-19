import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const html = fs.readFileSync(path.join(root, "public/math/index.html"), "utf8");
const scripts = [...html.matchAll(/<script\s+src="([^"]+\.js)"/g)].map((match) => match[1]);
const context = {
  console,
  document: { documentElement: { lang: "vi" } },
  location: { search: "?book=junior2" },
  localStorage: { getItem: () => null, setItem: () => {} },
  URLSearchParams,
  window: {},
};
context.window.document = context.document;
context.window.location = context.location;
context.window.localStorage = context.localStorage;
vm.createContext(context);

for (const source of scripts) {
  if (source.endsWith("pilot-app.js") || source.endsWith("app.js")) continue;
  const filename = path.join(root, "public/math", source.replaceAll("/", path.sep));
  vm.runInContext(fs.readFileSync(filename, "utf8"), context, { filename });
}

const questionText = (question, language = "vi") =>
  typeof question.q === "object" ? question.q[language] : question.q;
const visualRegistry = context.window.PILOT_ILLUSTRATIONS || {};
const books = context.window.MQ_BOOK_DATA || {};
const findings = [];
let visualCount = 0;
let questionCount = 0;

for (const [bookKey, book] of Object.entries(books)) {
  for (const [chapter, questions] of Object.entries(book.exercises || {})) {
    for (const question of questions) {
      questionCount += 1;
      const prompt = questionText(question);
      if (!prompt || String(prompt).trim().length < 4) {
        findings.push(`${bookKey} chapter ${chapter} ${question.id}: empty or incomplete prompt`);
      }
      if (question.visual) {
        visualCount += 1;
        if (typeof visualRegistry[question.visual] !== "function") {
          findings.push(`${bookKey} chapter ${chapter} ${question.id}: missing visual ${question.visual}`);
        }
      }
    }
  }
}

for (const [chapter, questions] of Object.entries(context.window.PILOT_PDF_EXERCISES || {})) {
  for (const question of questions) {
    questionCount += 1;
    if (question.visual) {
      visualCount += 1;
      if (typeof visualRegistry[question.visual] !== "function") {
        findings.push(`junior2 chapter ${chapter} ${question.id}: missing visual ${question.visual}`);
      }
    }
  }
}

const visibleEnglish = /\b(straight|curved|moves|odd|even|how many|which is|group|start|think|answer|method|make a table|total cost|total legs|total wheels|arrange|apple|peach|orange|father|brother|choose|truth|lie|dentist|teacher|driver|guests|matches|teams|marbles|students|roles|science|maths|english|row|blocks|pairs|pages|same distance|head start)\b/i;
for (const [key, render] of Object.entries(visualRegistry)) {
  if (typeof render !== "function") continue;
  let output;
  try {
    output = String(render());
  } catch {
    continue;
  }
  const visibleText = [...output.matchAll(/>([^<>]+)</g)].map((match) => match[1]).join(" ");
  if (visibleEnglish.test(visibleText)) findings.push(`visual ${key}: English text remains in Vietnamese mode: ${visibleText.match(visibleEnglish)?.[0]}`);
}

console.log(JSON.stringify({ questionCount, visualCount, findings }, null, 2));
if (findings.length) process.exitCode = 1;
