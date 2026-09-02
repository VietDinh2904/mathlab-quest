(function registerRemainingBookChapters() {
  "use strict";

  const source = window.BOOK_DATA || {};

  for (let chapter = 4; chapter <= 22; chapter += 1) {
    const bookChapter = source[chapter];
    if (!bookChapter) continue;

    window.PILOT_CHAPTERS[chapter] = {
      id: chapter,
      title: bookChapter.title,
      emoji: bookChapter.emoji,
      pages: bookChapter.pages,
      theory: bookChapter.theory,
      examples: bookChapter.examples,
      check: bookChapter.check,
    };

    window.PILOT_PDF_EXERCISES[chapter] = bookChapter.practice.map((question) => ({
      id: question.id,
      n: question.n,
      q: question.q,
      labels: question.labels,
      visual: question.visual,
      source: "pdf",
    }));

    window.PILOT_PDF_SOLUTIONS[chapter] = Object.fromEntries(
      bookChapter.practice.map((question) => [
        question.id,
        {
          answers: question.ans,
          hint: question.hint,
          guide: question.guide,
        },
      ]),
    );
  }
})();
