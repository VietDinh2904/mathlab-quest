import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const html = fs.readFileSync(path.join(root, "public/math/index.html"), "utf8");
const scripts = [...html.matchAll(/<script\s+src="([^"]+\.js)"/g)].map((match) => match[1]);
const context = {
  console,
  document: { documentElement: { lang: "vi" } },
  location: { search: "?book=junior1" },
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

const book = context.window.MQ_BOOK_DATA.junior1;
const visuals = context.window.PILOT_ILLUSTRATIONS;
const chapter = book.chapters[8];
const questions = book.exercises[8];
const extra = book.extra[8];
const solutionMap = book.solutions[8];
const issues = [];

if (!chapter?.available) issues.push("chapter 8 is not available");
if (questions.length !== 34) issues.push(`expected 34 source exercise cards, found ${questions.length}`);
if (extra.length !== 5) issues.push(`expected 5 extra-practice cards, found ${extra.length}`);
if (chapter.check.length !== 5) issues.push(`expected 5 review questions, found ${chapter.check.length}`);

const ids = new Set();
for (const question of [...questions, ...extra]) {
  if (ids.has(question.id)) issues.push(`duplicate id ${question.id}`);
  ids.add(question.id);
  const solution = question.source === "pdf" ? solutionMap[question.id] : question;
  if (!solution) issues.push(`${question.id}: missing solution`);
  const answers = solution?.answers || [];
  const labels = question.labels?.vi || question.labels?.en || [];
  if (labels.length > 1 && labels.every((label) => /^\(?[a-z]\)?(?:\s|$)/i.test(String(label)))) {
    issues.push(`${question.id}: answer labels would be mistaken for lettered subquestions`);
  }
  if (labels.length && labels.length !== answers.length) {
    issues.push(`${question.id}: ${labels.length} labels but ${answers.length} answer groups`);
  }
  if (!question.visual || typeof visuals[question.visual] !== "function") {
    issues.push(`${question.id}: missing illustration ${question.visual || "(none)"}`);
    continue;
  }
  try {
    const output = String(visuals[question.visual]());
    if (!output.includes("book-visual")) issues.push(`${question.id}: illustration wrapper missing`);
    const requiredUnknowns = ["A", "B", "C"].filter((token) => new RegExp(`\\b${token}\\b`).test(question.q.vi));
    if (question.q.vi.includes("__") && !output.includes("?")) issues.push(`${question.id}: illustration does not visibly preserve a blank`);
    for (const token of requiredUnknowns) {
      if (!output.includes(`>${token}<`)) issues.push(`${question.id}: illustration does not preserve unknown ${token}`);
    }
  } catch (error) {
    issues.push(`${question.id}: illustration throws ${error.message}`);
  }
}

for (const [index, example] of chapter.examples.entries()) {
  if (!example.visual || typeof visuals[example.visual] !== "function") {
    issues.push(`example ${index + 1}: missing illustration`);
    continue;
  }
  try {
    visuals[example.visual]();
  } catch (error) {
    issues.push(`example ${index + 1}: illustration throws ${error.message}`);
  }
}

console.log(JSON.stringify({ sourceExercises: questions.length, extraExercises: extra.length, reviewQuestions: chapter.check.length, illustrationsChecked: questions.length + extra.length + chapter.examples.length, issues }, null, 2));
if (issues.length) process.exitCode = 1;
