(function startBookLibrary() {
  "use strict";
  const pairText = (value, language) => typeof value === "object" && value !== null ? (value[language] ?? value.vi ?? value.en ?? "") : String(value ?? "");
  const makeAnswers = (vi, en) => [[String(vi), String(en)]];
  function ensureReview(book, bookKey) {
    book.review = book.review || {};
    Object.entries(book.chapters || {}).forEach(([chapterId, chapter]) => {
      if (chapter.available === false || (book.review[chapterId] || []).length === 5) return;
      const concepts = (chapter.theory || []).slice(0, 3).map((entry) => ({
        titleVi: pairText(entry[0], "vi"), titleEn: pairText(entry[0], "en"),
        bodyVi: pairText(entry[1], "vi"), bodyEn: pairText(entry[1], "en"),
      }));
      while (concepts.length < 3) {
        concepts.push({
          titleVi: "Kiểm tra lại dữ kiện", titleEn: "Check the given information",
          bodyVi: "Đọc đủ dữ kiện, thực hiện từng bước rồi thử lại kết quả.",
          bodyEn: "Read every condition, work step by step, then verify the result.",
        });
      }
      const titleVi = pairText(chapter.title, "vi");
      const titleEn = pairText(chapter.title, "en");
      const taglineVi = pairText(chapter.tagline, "vi");
      const taglineEn = pairText(chapter.tagline, "en");
      book.review[chapterId] = concepts.map((concept, index) => ({
        id: `${bookKey}-c${chapterId}-review-${index + 1}`, source: "ai", level: index ? "core" : "warmup",
        q: { vi: `Ý tưởng “${concept.titleVi}” được dùng như thế nào?`, en: `How is “${concept.titleEn}” used?` },
        answers: makeAnswers(concept.bodyVi, concept.bodyEn),
        hint: { vi: "Xem lại phần tóm tắt lý thuyết.", en: "Review the theory summary." },
        steps: { vi: [concept.bodyVi], en: [concept.bodyEn] },
      }));
      book.review[chapterId].push({
        id: `${bookKey}-c${chapterId}-review-4`, source: "ai", level: "core",
        q: { vi: "Tên chủ đề của chương này là gì?", en: "What is this chapter topic called?" },
        answers: makeAnswers(titleVi, titleEn),
        hint: { vi: "Đọc tiêu đề chương.", en: "Read the chapter title." },
        steps: { vi: [titleVi], en: [titleEn] },
      }, {
        id: `${bookKey}-c${chapterId}-review-5`, source: "ai", level: "challenge",
        q: { vi: "Viết ngắn gọn mục tiêu chính của chương.", en: "State the chapter's main goal briefly." },
        answers: makeAnswers(taglineVi, taglineEn),
        hint: { vi: "Đọc dòng mô tả dưới tiêu đề.", en: "Read the line below the title." },
        steps: { vi: [taglineVi], en: [taglineEn] },
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
