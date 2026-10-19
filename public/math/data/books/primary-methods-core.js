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
      window.MQ_METHOD_VISUAL_FACTORY(visualKey, visualType, {
        vi,
        en,
        answer: String(answer),
        method: pair(methodVi, methodEn),
        steps: pair(stepsVi, stepsEn),
      });
    }
    if (source === "pdf") {
      return {
        question: { n: String(index + 1), id, source, q: pair(vi, en), ...(visualKey ? { visual: visualKey, visualPlacement: "solution" } : {}) },
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
      const reviewIdeas = spec.theory.slice(0, 3);
      review[chapterId] = [
        {
          id: `${prefix}-review-1`, source: "ai", level: "warmup",
          q: pair(`Bước đầu tiên của “${spec.titleVi}” là gì?`, `What is the first step of “${spec.titleEn}”?`),
          answers: answerSet(reviewIdeas[0][0], [reviewIdeas[0][1]]),
          hint: pair("Nhớ lại ô lý thuyết đầu tiên.", "Recall the first theory card."),
          steps: pair([`Bước đầu tiên là: ${reviewIdeas[0][0]}.`], [`The first step is: ${reviewIdeas[0][1]}.`]),
        },
        {
          id: `${prefix}-review-2`, source: "ai", level: "warmup",
          q: pair(`Sau bước đầu, em dùng ý tưởng nào tiếp theo trong “${spec.titleVi}”?`, `Which idea comes next in “${spec.titleEn}”?`),
          answers: answerSet(reviewIdeas[1][0], [reviewIdeas[1][1]]),
          hint: pair("Xem lại ô lý thuyết thứ hai.", "Recall the second theory card."),
          steps: pair([`Ý tưởng tiếp theo là: ${reviewIdeas[1][0]}.`], [`The next idea is: ${reviewIdeas[1][1]}.`]),
        },
        {
          id: `${prefix}-review-3`, source: "ai", level: "core",
          q: pair(`Bước kiểm tra hoặc hoàn tất của phương pháp này là gì?`, `What is the checking or finishing step for this method?`),
          answers: answerSet(reviewIdeas[2][0], [reviewIdeas[2][1]]),
          hint: pair("Xem lại ô lý thuyết thứ ba.", "Recall the third theory card."),
          steps: pair([`Bước hoàn tất là: ${reviewIdeas[2][0]}.`], [`The finishing step is: ${reviewIdeas[2][1]}.`]),
        },
        {
          id: `${prefix}-review-4`, source: "ai", level: "core",
          q: pair("Chương này giới thiệu phương pháp nào?", "Which method does this chapter teach?"),
          answers: answerSet(spec.titleVi.replace(/^§\d+\.\s*/, ""), [spec.titleEn.replace(/^§\d+\.\s*/, "")]),
          hint: pair("Đọc tên chương.", "Read the chapter title."),
          steps: pair([`Tên phương pháp là “${spec.titleVi.replace(/^§\d+\.\s*/, "")}”.`], [`The method is “${spec.titleEn.replace(/^§\d+\.\s*/, "")}”.`]),
        },
        {
          id: `${prefix}-review-5`, source: "ai", level: "challenge",
          q: pair(`Hãy viết ngắn gọn mục tiêu của phương pháp này.`, `State the goal of this method briefly.`),
          answers: answerSet(spec.taglineVi, [spec.taglineEn]),
          hint: pair("Dùng câu mô tả ngay dưới tên chương.", "Use the sentence below the chapter title."),
          steps: pair([spec.taglineVi], [spec.taglineEn]),
        },
      ];
    });

    window.MQ_BOOK_DATA = window.MQ_BOOK_DATA || {};
    window.MQ_BOOK_DATA[bookKey] = { chapters, exercises, solutions, extra, review };
  };
})();
