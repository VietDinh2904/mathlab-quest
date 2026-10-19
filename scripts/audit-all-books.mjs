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

const books = context.window.MQ_BOOK_DATA || {};
const visuals = context.window.PILOT_ILLUSTRATIONS || {};
const englishSignal = /\b(the|and|or|is|are|find|which|what|how|use|first|next|number|total|each|same|from|with|into|step|square|circle|triangle|row|column|chapter|method|goal|look|compare|calculate|answer)\b/i;
const get = (value, lang) => typeof value === "object" && value !== null ? value[lang] : value;
const untranslated = (value) => {
  const vi = get(value, "vi");
  const en = get(value, "en");
  if (Array.isArray(vi)) {
    const enItems = Array.isArray(en) ? en : [];
    return vi.some((item, index) => untranslated({ vi: item, en: enItems[index] }));
  }
  return typeof vi !== "string" || !vi.trim() || (vi === en && englishSignal.test(vi)) || (typeof value === "string" && englishSignal.test(value));
};
const report = {};

for (const [bookKey, book] of Object.entries(books)) {
  const issues = [];
  let questions = 0;
  let available = 0;
  for (const [chapterId, chapter] of Object.entries(book.chapters || {})) {
    if (chapter.available !== false) available += 1;
    if (chapter.available === false) continue;
    if (untranslated(chapter.title)) issues.push(`chapter ${chapterId}: untranslated title ${JSON.stringify(chapter.title)}`);
    if (untranslated(chapter.tagline)) issues.push(`chapter ${chapterId}: untranslated tagline`);
    for (const [index, entry] of (chapter.theory || []).entries()) {
      if (untranslated(entry[0]) || untranslated(entry[1])) issues.push(`chapter ${chapterId}: untranslated theory ${index + 1}`);
    }
    for (const [index, example] of (chapter.examples || []).entries()) {
      if (untranslated(example.q)) issues.push(`chapter ${chapterId}: untranslated example ${index + 1} question`);
      for (const [stepIndex, step] of (example.steps || []).entries()) {
        if (untranslated(step)) issues.push(`chapter ${chapterId}: untranslated example ${index + 1} step ${stepIndex + 1}`);
      }
    }
  }
  for (const collection of ["exercises", "extra", "review"]) {
    for (const [chapterId, items] of Object.entries(book[collection] || {})) {
      for (const item of items) {
        questions += 1;
        if (untranslated(item.q)) issues.push(`${collection} ${chapterId}/${item.id}: untranslated question ${JSON.stringify(item.q)}`);
        if (item.visual && typeof visuals[item.visual] !== "function") issues.push(`${collection} ${chapterId}/${item.id}: missing visual ${item.visual}`);
        for (const field of ["hint", "steps"]) {
          if (item[field] && untranslated(item[field])) issues.push(`${collection} ${chapterId}/${item.id}: untranslated ${field}`);
        }
      }
    }
  }
  for (const [chapterId, solutionMap] of Object.entries(book.solutions || {})) {
    for (const [questionId, solution] of Object.entries(solutionMap)) {
      for (const field of ["hint", "guide"]) {
        if (solution[field] && untranslated(solution[field])) issues.push(`solution ${chapterId}/${questionId}: untranslated ${field}`);
      }
    }
  }
  report[bookKey] = { availableChapters: available, questions, issueCount: issues.length, issues };
}

console.log(JSON.stringify(report, null, 2));
if (Object.values(report).some((entry) => entry.issueCount)) process.exitCode = 1;
