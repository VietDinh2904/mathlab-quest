(function startBookLibrary() {
  "use strict";
  const books = window.MQ_BOOK_DATA = window.MQ_BOOK_DATA || {};
  books.junior2 = {
    chapters: window.PILOT_CHAPTERS,
    exercises: window.PILOT_PDF_EXERCISES,
    solutions: window.PILOT_PDF_SOLUTIONS,
    extra: window.PILOT_EXTRA_EXERCISES,
  };
  window.PILOT_BOOK_CATALOG = {
    junior1: { label: "Junior 1", grades: { vi: "Lớp 1–2", en: "Grades 1–2" }, icon: "🌱", accent: "green" },
    junior2: { label: "Junior 2", grades: { vi: "Lớp 2–3", en: "Grades 2–3" }, icon: "🚀", accent: "blue" },
    beginner: { label: "Beginner", grades: { vi: "Lớp 3–4", en: "Grades 3–4" }, icon: "🏆", accent: "purple" },
    methods1: { label: "Phương pháp 1", grades: { vi: "7 phương pháp", en: "7 methods" }, icon: "🧭", accent: "orange" },
    methods2: { label: "Phương pháp 2", grades: { vi: "6 phương pháp", en: "6 methods" }, icon: "🧩", accent: "teal" },
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
  localStorage.setItem("math-quest-active-book", active);
})();
