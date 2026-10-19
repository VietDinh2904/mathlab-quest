(function startBookLibrary() {
  "use strict";
  function ensureReview(book, bookKey) {
    book.review = book.review || {};
    Object.entries(book.chapters || {}).forEach(([chapterId, chapter]) => {
      if (chapter.available === false || (book.review[chapterId] || []).length === 5) return;
      const sourceQuestions = book.exercises?.[chapterId] || [];
      const sourceSolutions = book.solutions?.[chapterId] || {};
      const chosen = sourceQuestions.length <= 5
        ? sourceQuestions.slice(0, 5)
        : [0, .25, .5, .75, 1].map((ratio) => sourceQuestions[Math.round((sourceQuestions.length - 1) * ratio)]);
      book.review[chapterId] = chosen.map((question, index) => {
        const solution = sourceSolutions[question.id] || {};
        return {
          id: `${bookKey}-c${chapterId}-review-${index + 1}`,
          source: "ai",
          level: index < 2 ? "warmup" : index < 4 ? "core" : "challenge",
          q: question.q,
          answers: solution.answers || [[""]],
          hint: solution.hint || { vi: "Đọc kỹ dữ kiện rồi chọn phép tính phù hợp.", en: "Read the givens carefully and choose a suitable operation." },
          steps: solution.guide || solution.steps || { vi: ["Giải từng bước, kiểm tra rồi ghi đáp án."], en: ["Solve step by step, check, then state the answer."] },
          ...(question.visual ? { visual: question.visual } : {}),
          ...(question.visualPlacement ? { visualPlacement: question.visualPlacement } : {}),
          ...(question.labels ? { labels: question.labels } : {}),
        };
      });
    });
  }
  const books = window.MQ_BOOK_DATA = window.MQ_BOOK_DATA || {};
  books.junior2 = {
    chapters: window.PILOT_CHAPTERS,
    exercises: window.PILOT_PDF_EXERCISES,
    solutions: window.PILOT_PDF_SOLUTIONS,
    extra: window.PILOT_EXTRA_EXERCISES,
  };
  Object.entries(books).forEach(([bookKey, book]) => ensureReview(book, bookKey));
  window.PILOT_BOOK_CATALOG = {
    junior1: { label: "Junior 1", grades: { vi: "Lớp 1–2", en: "Grades 1–2" }, icon: "🌱", accent: "green" },
    junior2: { label: "Junior 2", grades: { vi: "Lớp 2–3", en: "Grades 2–3" }, icon: "🚀", accent: "blue" },
    beginner: { label: "Beginner", grades: { vi: "Lớp 3–4", en: "Grades 3–4" }, icon: "🏆", accent: "purple" },
    methods1: { label: "Phương pháp giải toán · Tập 1", grades: { vi: "Đỗ Trung Hiệu · Vũ Dương Thụy", en: "Primary problem-solving methods" }, icon: "🧭", accent: "orange" },
    methods2: { label: "Phương pháp giải toán · Tập 2", grades: { vi: "Đỗ Trung Hiệu · Vũ Dương Thụy", en: "Primary problem-solving methods" }, icon: "🧩", accent: "teal" },
    advanced: { label: "Maths Olympiad · Advanced", grades: { vi: "6 chuyên đề từ bản PDF", en: "6 topics from the supplied PDF" }, icon: "🎓", accent: "red" },
  };
  const requested = new URLSearchParams(location.search).get("book");
  const saved = localStorage.getItem("math-quest-active-book");
  const active = books[requested] ? requested : (books[saved] ? saved : "junior2");
  const selected = books[active];
  window.PILOT_ACTIVE_BOOK = active;
  window.PILOT_CHAPTERS = selected.chapters;
  window.PILOT_PDF_EXERCISES = selected.exercises;
  window.PILOT_PDF_SOLUTIONS = selected.solutions;
  window.PILOT_EXTRA_EXERCISES = selected.extra;
  window.PILOT_REVIEW_EXERCISES = selected.review || {};
  localStorage.setItem("math-quest-active-book", active);
})();
