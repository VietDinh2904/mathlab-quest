(function registerPrimaryMethodsFactory() {
  "use strict";

  const pair = (vi, en) => ({ vi, en });
  const answerSet = (answer, aliases = []) => [[String(answer), ...aliases.map(String)]];

  function normalizeProblem(raw, prefix, index, source) {
    const [vi, en, answer, methodVi, methodEn, stepsVi, stepsEn, visual, aliases] = raw;
    const id = `${prefix}-${source}-${index + 1}`;
    const visualType = visual?.id || visual;
    const visualKey = visualType ? `${id}-visual` : null;
    if (visualKey && typeof window.MQ_METHOD_VISUAL_FACTORY === "function") {
      window.MQ_METHOD_VISUAL_FACTORY(visualKey, visualType, pair(vi, en));
    }
    if (source === "pdf") {
      return {
        question: { n: String(index + 1), id, source, q: pair(vi, en), ...(visualKey ? { visual: visualKey } : {}), ...(visual?.solution ? { visualPlacement: "solution" } : {}) },
        solution: { answers: answerSet(answer, aliases), hint: pair(methodVi, methodEn), guide: pair(stepsVi, stepsEn) },
      };
    }
    return {
      id, source: "ai", level: index < 2 ? "warmup" : index < 4 ? "core" : "challenge",
      q: pair(vi, en), answers: answerSet(answer, aliases), hint: pair(methodVi, methodEn),
      steps: pair(stepsVi, stepsEn), ...(visualKey ? { visual: visualKey } : {}), ...(visual?.solution ? { visualPlacement: "solution" } : {}),
    };
  }

  window.MQ_REGISTER_METHOD_BOOK = function registerMethodBook(bookKey, chapterSpecs) {
    const chapters = {};
    const exercises = {};
    const solutions = {};
    const extra = {};
    const review = {};

    chapterSpecs.forEach((spec, chapterIndex) => {
      const chapterId = chapterIndex + 1;
      const prefix = `${bookKey}-c${chapterId}`;
      const sourceItems = spec.problems.map((item, index) => normalizeProblem(item, prefix, index, "pdf"));
      chapters[chapterId] = {
        id: chapterId, emoji: spec.emoji, pages: spec.pages, available: true,
        title: pair(spec.titleVi, spec.titleEn), tagline: pair(spec.taglineVi, spec.taglineEn),
        theory: spec.theory.map(([titleVi, titleEn, bodyVi, bodyEn]) => [pair(titleVi, titleEn), pair(bodyVi, bodyEn)]),
        examples: spec.examples.map((example) => ({
          q: pair(example.vi, example.en),
          steps: example.stepsVi.map((step, index) => pair(step, example.stepsEn[index])),
          a: pair(example.answerVi, example.answerEn),
          ...(example.visual ? { visual: example.visual } : {}),
        })),
        check: sourceItems.map(({ question }) => question.id).slice(0, 5),
      };
      exercises[chapterId] = sourceItems.map(({ question }) => question);
      solutions[chapterId] = Object.fromEntries(sourceItems.map(({ question, solution }) => [question.id, solution]));
      extra[chapterId] = spec.extra.map((item, index) => normalizeProblem(item, prefix, index, "ai"));
      review[chapterId] = extra[chapterId].map((item, index) => ({
        ...item,
        id: `${prefix}-review-${index + 1}`,
        q: pair(`Ôn tập tổng hợp: ${item.q.vi}`, `Review challenge: ${item.q.en}`),
        level: index < 2 ? "core" : "challenge",
      }));
    });

    window.MQ_BOOK_DATA = window.MQ_BOOK_DATA || {};
    window.MQ_BOOK_DATA[bookKey] = { chapters, exercises, solutions, extra, review };
  };
})();
