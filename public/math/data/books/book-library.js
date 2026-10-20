(function startBookLibrary() {
  "use strict";
  const valueFor = (value, language) => {
    if (value && !Array.isArray(value) && typeof value === "object") return value[language] ?? value.vi ?? value.en ?? "";
    return value ?? "";
  };
  const promptFor = (question, language) => valueFor(question.q, language);
  const normalizedPrompt = (question) => String(promptFor(question, "vi"))
    .normalize("NFKC")
    .toLocaleLowerCase("vi")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
  const answerText = (answers) => (answers || [[""]])
    .map((group) => (Array.isArray(group) ? group[0] : group))
    .join(" · ");
  const wrongClaim = (answer) => {
    const text = String(answer || "").trim();
    const numeric = text.match(/-?\d+(?:[.,]\d+)?/);
    if (numeric) {
      const raw = numeric[0];
      const value = Number(raw.replace(",", "."));
      const replacement = Number.isFinite(value) ? String(value + 1).replace(".", raw.includes(",") ? "," : ".") : "0";
      return text.replace(raw, replacement);
    }
    return text.toLocaleLowerCase("vi") === "a" ? "B" : "một đáp án khác";
  };
  const stepList = (value, language) => {
    const localized = valueFor(value, language);
    if (Array.isArray(localized)) return localized;
    return String(localized || "")
      .split(/(?<=[.!?])\s+|\s*;\s*/)
      .map((step) => step.trim())
      .filter(Boolean);
  };
  const partPrompt = (prompt, label, partIndex, partCount, language) => {
    const text = String(prompt || "");
    const markers = [...text.matchAll(/\(([a-z])\)/gi)];
    if (markers.length >= partCount) {
      const prefix = text.slice(0, markers[0].index).trim().replace(/:\s*$/, "");
      const start = markers[partIndex].index;
      const end = markers[partIndex + 1]?.index ?? text.length;
      const part = text.slice(start, end).trim();
      return prefix ? `${prefix}: ${part}` : part;
    }
    let labelText = String(label || "")
      .replace(/^\([a-z]\)\s*/i, "")
      .replace(/^[a-z][.)]\s*/i, "")
      .trim();
    if (language === "vi") {
      labelText = labelText
        .replace(/^first blank$/i, "chỗ trống thứ nhất")
        .replace(/^second blank$/i, "chỗ trống thứ hai")
        .replace(/^third blank$/i, "chỗ trống thứ ba")
        .replace(/^row$/i, "hàng")
        .replace(/^column$/i, "cột");
    }
    const generic = /^(compute|calculate|find|tính)(\s+the\s+following|\s+các\s+(?:phép|biểu thức)\s+sau)?[.:]?$/i.test(text.trim());
    if (generic) return `${language === "vi" ? "Tính" : "Compute"}: (${String.fromCharCode(97 + partIndex)}) ${labelText}`;
    return `${text} (${String.fromCharCode(97 + partIndex)}) ${labelText}`.trim();
  };
  const reviewCandidates = (questions, solutions) => questions.flatMap((question) => {
    const solution = solutions[question.id] || {};
    const answers = solution.answers || question.answers || [[""]];
    const viLabels = valueFor(question.labels, "vi");
    const enLabels = valueFor(question.labels, "en");
    if (!Array.isArray(viLabels) || viLabels.length <= 1 || viLabels.length !== answers.length) {
      return [{ question, solution }];
    }
    return viLabels.map((viLabel, partIndex) => {
      const enLabel = Array.isArray(enLabels) ? enLabels[partIndex] : viLabel;
      const letter = String.fromCharCode(97 + partIndex);
      const partVisual = `${question.visual || ""}-${letter}`;
      return {
        question: {
          ...question,
          id: `${question.id}--${letter}`,
          q: {
            vi: partPrompt(promptFor(question, "vi"), viLabel, partIndex, viLabels.length, "vi"),
            en: partPrompt(promptFor(question, "en"), enLabel, partIndex, viLabels.length, "en"),
          },
          labels: undefined,
          visual: window.PILOT_ILLUSTRATIONS?.[partVisual] ? partVisual : question.visual,
        },
        solution: { ...solution, answers: [answers[partIndex]] },
      };
    });
  });

  function makeReviewQuestion(bookKey, chapterId, question, solution, index) {
    const answers = solution.answers || question.answers || [[""]];
    const actual = answerText(answers);
    const isCorrectClaim = index % 2 === 0;
    const claim = isCorrectClaim ? actual : wrongClaim(actual);
    const viPrompt = promptFor(question, "vi");
    const enPrompt = promptFor(question, "en");
    const viSteps = stepList(solution.guide || solution.steps || question.steps, "vi");
    const enSteps = stepList(solution.guide || solution.steps || question.steps, "en");
    return {
      id: `${bookKey}-c${chapterId}-review-${index + 1}`,
      n: String(index + 1),
      source: "ai",
      review: true,
      level: index < 2 ? "warmup" : index < 4 ? "core" : "challenge",
      q: {
        vi: `Một bạn giải bài sau và kết luận “${claim}”. Kết luận này đúng hay sai? ${viPrompt}`,
        en: `A pupil solved the problem below and concluded “${claim}”. Is the conclusion correct or incorrect? ${enPrompt}`,
      },
      answers: isCorrectClaim
        ? [["đúng", "dung", "correct", "true"]]
        : [["sai", "incorrect", "false"]],
      hint: {
        vi: "Tự giải bài toán trước, sau đó so sánh kết quả với kết luận đã cho.",
        en: "Solve the problem first, then compare your result with the stated conclusion.",
      },
      steps: {
        vi: [...viSteps, `Kết quả đúng là ${actual}; vì vậy kết luận đã cho ${isCorrectClaim ? "đúng" : "sai"}.`],
        en: [...enSteps, `The correct result is ${actual}, so the stated conclusion is ${isCorrectClaim ? "correct" : "incorrect"}.`],
      },
      ...(question.visual ? { visual: question.visual, visualPlacement: question.visualPlacement || "question" } : {}),
    };
  }

  function ensureReview(book, bookKey) {
    book.review = book.review || {};
    Object.entries(book.chapters || {}).forEach(([chapterId, chapter]) => {
      if (chapter.available === false) return;
      const sourceQuestions = book.exercises?.[chapterId] || [];
      const sourceSolutions = book.solutions?.[chapterId] || {};
      const existing = book.review[chapterId] || [];
      const forbidden = new Set([
        ...sourceQuestions.map(normalizedPrompt),
        ...(book.extra?.[chapterId] || []).map(normalizedPrompt),
      ]);
      if (existing.length === 5 && existing.every((question) => !forbidden.has(normalizedPrompt(question)))) {
        book.review[chapterId] = existing.map((question) => ({ ...question, review: true }));
        return;
      }
      const candidates = reviewCandidates(sourceQuestions, sourceSolutions);
      const chosen = candidates.length <= 5
        ? candidates.slice(0, 5)
        : [0, .25, .5, .75, 1].map((ratio) => candidates[Math.round((candidates.length - 1) * ratio)]);
      book.review[chapterId] = chosen.map(({ question, solution }, index) =>
        makeReviewQuestion(bookKey, chapterId, question, solution, index));
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
    smc: { label: "SMC", grades: { vi: "Đề thi quốc tế 2021–2024", en: "International papers 2021–2024" }, icon: "🌟", accent: "orange", href: "/contests/?contest=SMC" },
    timo: { label: "TIMO", grades: { vi: "10 bộ đề Preliminary & Heat", en: "10 Preliminary & Heat papers" }, icon: "🏅", accent: "teal", href: "/contests/?contest=TIMO" },
    sasmo: { label: "SASMO", grades: { vi: "2020 Grade 2 · 25 câu tương tác", en: "2020 Grade 2 · 25 interactive questions" }, icon: "🧠", accent: "teal", href: "/contests/?contest=SASMO&paper=SASMO-2020-G2" },
    kangaroo: { label: "Kangaroo", grades: { vi: "Écolier 2023–2025", en: "Écolier 2023–2025" }, icon: "🦘", accent: "purple", href: "/contests/?contest=KANGAROO" },
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
