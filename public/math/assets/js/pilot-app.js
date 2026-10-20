(function startMathQuestLab() {
  "use strict";

  const ACTIVE_BOOK = window.PILOT_ACTIVE_BOOK || "junior2";
  const STORAGE_KEY = `math-quest-${ACTIVE_BOOK}-v2`;
  const TABS = [
    ["learn", "📘", "learn"],
    ["pdf", "✍️", "pdfPractice"],
    ["extra", "✨", "extraPractice"],
    ["review", "🏆", "review"],
  ];
  const CHAPTER_NUMBERS = Object.keys(window.PILOT_CHAPTERS)
    .map(Number)
    .sort((a, b) => a - b);
  const HERO_MASCOTS = { 1: "🕵️", 2: "🧠", 3: "📏" };
  const HERO_COLORS = {
    1: "linear-gradient(125deg, #3d78df, #6fa7ff)",
    2: "linear-gradient(125deg, #e76458, #ff9a73)",
    3: "linear-gradient(125deg, #6350c8, #9a82ee)",
    4: "linear-gradient(125deg, #2d8a62, #73c993)",
    5: "linear-gradient(125deg, #d17922, #f4b85a)",
    6: "linear-gradient(125deg, #b94773, #ea82aa)",
    7: "linear-gradient(125deg, #267d9d, #64b9d3)",
    8: "linear-gradient(125deg, #7a4cb7, #b18adf)",
    9: "linear-gradient(125deg, #d05c4c, #ee907c)",
    10: "linear-gradient(125deg, #405b8d, #7690be)",
  };

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  }

  const saved = loadState();
  const state = {
    lang: saved.lang === "en" ? "en" : "vi",
    chapter: CHAPTER_NUMBERS.includes(saved.chapter) ? saved.chapter : 1,
    tab: TABS.some(([key]) => key === saved.tab) ? saved.tab : "learn",
    answers: saved.answers || {},
    completed: saved.completed || {},
  };

  const byId = (id) => document.getElementById(id);
  const escapeHTML = (value) =>
    String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  const safeId = (value) => String(value).replace(/[^a-zA-Z0-9_-]/g, "_");
  const t = (key) => window.PILOT_I18N.ui[state.lang][key] || key;

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function chapterText(number) {
    const source = window.PILOT_CHAPTERS[number];
    if (ACTIVE_BOOK !== "junior2") {
      return {
        ...source,
        title: localValue(source.title),
        tagline: localValue(source.tagline),
        theory: (source.theory || []).map(([title, description]) => [localValue(title), localValue(description)]),
      };
    }
    const translated = window.PILOT_I18N.chapters[number] || {};
    return {
      ...source,
      title: translated.title?.[state.lang] || source.title,
      tagline: translated.tagline?.[state.lang] || "Explore, practise and master the strategy",
      theory: state.lang === "vi" && translated.theoryVi ? translated.theoryVi : source.theory,
    };
  }

  function localQuestion(question) {
    if (typeof question.q === "object") return question.q[state.lang];
    if (state.lang === "vi") {
      return window.PILOT_I18N.questionsVi[question.id] || question.q;
    }
    return question.q;
  }

  function localValue(value) {
    if (value && !Array.isArray(value) && typeof value === "object") {
      return value[state.lang];
    }
    return value;
  }

  function solutionFor(question) {
    const partIndex = Number.isInteger(question.partIndex)
      ? question.partIndex
      : null;
    if (question.source === "ai") {
      const rawSteps = localValue(question.steps);
      const steps = Array.isArray(rawSteps)
        ? rawSteps
        : String(rawSteps || "")
            .split(/(?<=[.!?])\s+|\s*;\s*/)
            .map((step) => step.trim())
            .filter(Boolean);
      return {
        answers:
          partIndex === null
            ? question.answers
            : [question.answers[partIndex]],
        method: localValue(question.hint),
        steps,
      };
    }
    const sourceId = question.parentId || question.id;
    const solution = window.PILOT_PDF_SOLUTIONS[state.chapter][sourceId];
    const guide = localValue(solution.guide);
    const guideSteps = Array.isArray(guide)
      ? guide
      : String(guide || "")
          .split(/(?<=[.!?])\s+|\s*;\s*/)
          .map((step) => step.trim())
          .filter(Boolean);
    return {
      ...solution,
      method: localValue(solution.hint),
      answers:
        partIndex === null
          ? solution.answers
          : [solution.answers[partIndex]],
      steps: guideSteps,
    };
  }

  function isLetteredQuestion(question) {
    const labels = localValue(question.labels);
    return (
      Array.isArray(labels) &&
      labels.length > 1 &&
      labels.every((label) => /^\(?[a-z]\)?(?:\s|$)/i.test(String(label)))
    );
  }

  function splitPartPrompt(prompt, partIndex, partCount) {
    const text = String(prompt || "");
    const markers = [...text.matchAll(/\(([a-z])\)/gi)];
    if (markers.length < partCount) return text;
    const prefix = text.slice(0, markers[0].index).trim().replace(/:\s*$/, "");
    const start = markers[partIndex].index;
    const end = markers[partIndex + 1]?.index ?? text.length;
    const part = text.slice(start, end).trim();
    return prefix ? `${prefix}: ${part}` : part;
  }

  function completePartPrompt(prompt, label, partIndex, partCount, language) {
    const split = splitPartPrompt(prompt, partIndex, partCount);
    if (split !== String(prompt || "")) return split;
    const labelText = String(label || "").replace(/^\(?[a-z]\)?\s*/i, "").trim();
    if (!labelText) return split;
    const generic = /^(compute|calculate|find|tính)(\s+the\s+following|\s+các\s+(?:phép|biểu thức)\s+sau)?[.:]?$/i.test(String(prompt || "").trim());
    if (!generic) return `${split} (${String.fromCharCode(97 + partIndex)}) ${labelText}`;
    return `${language === "vi" ? "Tính" : "Compute"}: (${String.fromCharCode(97 + partIndex)}) ${labelText}`;
  }

  function expandQuestion(question) {
    if (!isLetteredQuestion(question)) return [question];
    const labels = localValue(question.labels);
    const english =
      typeof question.q === "object" ? question.q.en : question.q;
    let vietnamese =
      typeof question.q === "object"
        ? question.q.vi
        : window.PILOT_I18N.questionsVi[question.id] || question.q;
    if (vietnamese === english && /^Compute the following\.?$/i.test(String(english).trim())) {
      vietnamese = "Tính các biểu thức sau.";
    }
    return labels.map((label, partIndex) => {
      const letter = String(label).replace(/[^a-z]/gi, "").toLowerCase();
      const partVisual = `${question.visual || ""}-${letter}`;
      return {
        ...question,
        id: `${question.id}--${letter}`,
        parentId: question.id,
        partIndex,
        n: `${question.n}(${letter})`,
        q: {
          en: completePartPrompt(english, label, partIndex, labels.length, "en"),
          vi: completePartPrompt(vietnamese, label, partIndex, labels.length, "vi"),
        },
        visual: window.PILOT_ILLUSTRATIONS[partVisual] ? partVisual : question.visual,
        labels: undefined,
      };
    });
  }

  function expandQuestions(questions) {
    return questions.flatMap(expandQuestion);
  }

  function allQuestions() {
    return expandQuestions(
      Object.values(window.PILOT_PDF_EXERCISES)
        .flat()
        .concat(Object.values(window.PILOT_EXTRA_EXERCISES).flat()),
    );
  }

  function renderStaticTranslations() {
    document.documentElement.lang = state.lang;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.classList.toggle("active", button.dataset.lang === state.lang);
    });
  }

  function renderBookSwitcher() {
    const catalog = window.PILOT_BOOK_CATALOG || {};
    byId("bookSwitcher").innerHTML = Object.entries(catalog).map(([key, book]) => {
      const active = key === ACTIVE_BOOK ? "active" : "";
      const href = book.href || `?book=${key}`;
      return `<a class="book-tab ${active} ${book.accent}" href="${href}" data-book="${key}"><span>${book.icon}</span><strong>${book.label}</strong><small>${escapeHTML(book.grades[state.lang])}</small></a>`;
    }).join("");
  }

  function renderNavigation() {
    byId("chapterNav").innerHTML = CHAPTER_NUMBERS
      .map((number) => {
        const chapter = chapterText(number);
        const chapterQuestions = expandQuestions(
          window.PILOT_PDF_EXERCISES[number],
        );
        const done = chapterQuestions.filter((question) => state.completed[question.id]).length;
        const unavailable = chapter.available === false;
        return `<button class="chapter-button ${number === state.chapter ? "active" : ""} ${unavailable ? "coming-soon" : ""}" type="button" data-chapter="${number}" ${unavailable ? "disabled" : ""}><span class="chapter-emoji">${chapter.emoji}</span><span class="chapter-copy"><strong>${state.lang === "vi" ? "Chương" : "Chapter"} ${number}</strong><small>${escapeHTML(chapter.title)}</small>${unavailable ? `<em>${state.lang === "vi" ? "Đang dựng hình" : "Illustrating"}</em>` : ""}</span>${chapterQuestions.length > 0 && done === chapterQuestions.length ? '<span class="chapter-check">●</span>' : ""}</button>`;
      })
      .join("");
  }

  function renderProgress() {
    const questions = allQuestions();
    const done = questions.filter((question) => state.completed[question.id]).length;
    const percent = questions.length ? Math.round((done / questions.length) * 100) : 0;
    byId("globalProgress").style.width = `${percent}%`;
    byId("globalProgressText").textContent = `${done}/${questions.length} ${t("questions")} · ${percent}% ${t("completed")}`;
  }

  function renderHero() {
    const chapter = chapterText(state.chapter);
    const total = window.PILOT_PDF_EXERCISES[state.chapter].length + window.PILOT_EXTRA_EXERCISES[state.chapter].length;
    const hero = byId("chapterHero");
    hero.style.background = HERO_COLORS[state.chapter] || "linear-gradient(125deg, #278b86, #65c8bd)";
    hero.innerHTML = `<div class="hero-content"><span class="eyebrow">${chapter.emoji} ${state.lang === "vi" ? "Chương" : "Chapter"} ${state.chapter} · ${chapter.pages}</span><h1>${escapeHTML(chapter.title)}</h1><p>${escapeHTML(chapter.tagline)} · ${total} ${t("questions")}</p></div><div class="hero-mascot" aria-hidden="true">${HERO_MASCOTS[state.chapter] || chapter.emoji}</div>`;
  }

  function renderTabs() {
    byId("lessonTabs").innerHTML = TABS.map(
      ([key, icon, label]) =>
        `<button class="lesson-tab ${state.tab === key ? "active" : ""}" type="button" data-tab="${key}">${icon} ${t(label)}</button>`,
    ).join("");
  }

  function renderLearn() {
    const chapter = chapterText(state.chapter);
    const ideas = chapter.theory
      .map(
        ([title, description], index) =>
          `<article class="idea-card"><span class="idea-number">${index + 1}</span><h3>${escapeHTML(title)}</h3><p>${escapeHTML(description)}</p></article>`,
      )
      .join("");
    const examples = chapter.examples
      .map(
        (example, index) => {
          const illustration = example.visual && window.PILOT_ILLUSTRATIONS[example.visual]
            ? window.PILOT_ILLUSTRATIONS[example.visual]()
            : "";
          return `<article class="example-card" data-example="${index}"><h3>🔎 ${state.lang === "vi" ? "Ví dụ" : "Example"} ${index + 1}</h3><p class="example-question">${escapeHTML(localValue(example.q))}</p>${illustration}<div class="step-list" id="exampleSteps-${index}"></div><button class="soft-button" type="button" data-next-example="${index}">${t("revealStep")}</button><div class="step-answer" id="exampleAnswer-${index}" hidden>⭐ ${escapeHTML(localValue(example.a))}</div></article>`;
        },
      )
      .join("");
    return `<div class="section-heading"><div><h2>${t("theoryTitle")}</h2><p>${t("theoryIntro")}</p></div></div><div class="theory-grid">${ideas}</div><div class="section-heading"><div><h2>${t("workedExamples")}</h2></div></div><div class="example-stack">${examples}</div>`;
  }

  function questionLabels(question, count) {
    const labels = localValue(question.labels);
    if (Array.isArray(labels) && labels.length === count) return labels;
    if (count > 1) return Array.from({ length: count }, (_, index) => `(${String.fromCharCode(97 + index)})`);
    return [t("answer")];
  }

  function questionCard(question, index) {
    const solution = solutionFor(question);
    const labels = questionLabels(question, solution.answers.length);
    const legacyValues = question.parentId
      ? [state.answers[question.parentId]?.[question.partIndex] || ""]
      : [];
    const values = state.answers[question.id] || legacyValues;
    const sourceLabel = question.review ? t("review") : question.source === "ai" ? t("sourceAi") : t("sourcePdf");
    const level = question.level ? `<span class="badge ${question.level}">${t(question.level)}</span>` : "";
    const illustration =
      question.visual && window.PILOT_ILLUSTRATIONS[question.visual]
        ? window.PILOT_ILLUSTRATIONS[question.visual]()
        : "";
    const illustrationIsGuidance = question.visualPlacement === "solution" ||
      (question.source === "ai" && question.visualPlacement !== "question");
    const questionIllustration = illustrationIsGuidance ? "" : illustration;
    const solutionIllustration = illustrationIsGuidance ? illustration : "";
    const fields = solution.answers
      .map(
        (_, answerIndex) =>
          `<label class="answer-field">${escapeHTML(labels[answerIndex])}<input inputmode="text" autocomplete="off" data-answer-id="${escapeHTML(question.id)}" data-answer-index="${answerIndex}" value="${escapeHTML(values[answerIndex] || "")}" /></label>`,
      )
      .join("");
    const steps = solution.steps
      .map((step, stepIndex) => `<div class="step-row"><span class="step-dot">${stepIndex + 1}</span><span>${escapeHTML(step)}</span></div>`)
      .join("");
    const answerText = solution.answers.map((answer) => escapeHTML(answer[0])).join(" · ");
    const methodLabel = state.lang === "vi" ? "Phương pháp" : "Method";
    const stepsLabel = state.lang === "vi" ? "Các bước thực hiện" : "Steps";
    return `<article class="question-card" data-question-card="${escapeHTML(question.id)}"><div class="question-head"><span class="question-number">${escapeHTML(question.n || index + 1)}</span><div class="question-copy"><div class="badges"><span class="badge ${question.source === "ai" ? "ai" : ""}">${sourceLabel}</span>${level}</div><p>${escapeHTML(localQuestion(question))}</p></div></div><div class="question-body">${questionIllustration}<div class="answer-grid">${fields}</div><div class="question-actions"><button class="primary-button" type="button" data-check="${escapeHTML(question.id)}">✓ ${t("check")}</button><button class="ghost-button" type="button" data-solution="${escapeHTML(question.id)}">🪄 ${t("solution")}</button><button class="ghost-button" type="button" data-question-tool="drawing">✏️</button><button class="ghost-button" type="button" data-question-tool="calculator">🧮</button></div><div class="feedback" id="feedback-${safeId(question.id)}"></div><div class="reveal-panel" id="solution-${safeId(question.id)}"><strong>🪄 ${t("solution")}</strong>${solutionIllustration}<div class="solution-method"><strong>🧭 ${methodLabel}:</strong> ${escapeHTML(solution.method || "")}</div><strong class="solution-steps-title">${stepsLabel}</strong><div class="step-list">${steps}</div><div class="step-answer">⭐ ${t("answer")}: ${answerText}</div></div></div></article>`;
  }

  function renderQuestions(questions, heading, intro = "") {
    const expanded = expandQuestions(questions);
    return `<div class="section-heading"><div><h2>${heading}</h2>${intro ? `<p>${intro}</p>` : ""}</div></div><div class="question-stack">${expanded.map(questionCard).join("")}</div>`;
  }

  function renderReview() {
    const chapter = window.PILOT_CHAPTERS[state.chapter];
    const dedicatedReview = window.PILOT_REVIEW_EXERCISES?.[state.chapter] || [];
    const questions = dedicatedReview.length
      ? dedicatedReview
      : chapter.check
          .map((id) => window.PILOT_PDF_EXERCISES[state.chapter].find((question) => question.id === id))
          .filter(Boolean);
    return `<div class="review-banner"><span>🏆</span><div><h2>${t("reviewTitle")}</h2><p>${t("reviewIntro")}</p></div></div><div class="question-stack">${expandQuestions(questions).slice(0, 5).map(questionCard).join("")}</div>`;
  }

  function renderContent() {
    if (state.tab === "learn") return renderLearn();
    if (state.tab === "pdf") return renderQuestions(window.PILOT_PDF_EXERCISES[state.chapter], t("pdfPractice"));
    if (state.tab === "extra") return renderQuestions(window.PILOT_EXTRA_EXERCISES[state.chapter], t("extraPractice"));
    return renderReview();
  }

  function render() {
    renderStaticTranslations();
    renderBookSwitcher();
    renderNavigation();
    renderProgress();
    renderHero();
    renderTabs();
    byId("lessonContent").innerHTML = renderContent();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function normalize(value) {
    return String(value ?? "").toLowerCase().replace(/[,.$]/g, "").replace(/\s+/g, " ").trim();
  }

  function findQuestion(id) {
    return allQuestions().find((question) => question.id === id);
  }

  function checkQuestion(id) {
    const question = findQuestion(id);
    const solution = solutionFor(question);
    const inputs = [...document.querySelectorAll(`[data-answer-id="${CSS.escape(id)}"]`)];
    let correct = 0;
    inputs.forEach((input) => {
      const index = Number(input.dataset.answerIndex);
      const accepted = solution.answers[index].some((answer) => normalize(answer) === normalize(input.value));
      input.classList.toggle("correct", accepted);
      input.classList.toggle("wrong", !accepted);
      if (accepted) correct += 1;
    });
    const success = correct === solution.answers.length;
    state.completed[id] = success;
    saveState();
    renderProgress();
    renderNavigation();
    const feedback = byId(`feedback-${safeId(id)}`);
    feedback.textContent = success ? `🎉 ${t("correct")}` : `🌱 ${t("incorrect")} (${correct}/${solution.answers.length})`;
    feedback.className = `feedback show ${success ? "good" : "try"}`;
  }

  function togglePanel(prefix, id) {
    byId(`${prefix}-${safeId(id)}`)?.classList.toggle("show");
  }

  function handleExampleStep(button) {
    const index = Number(button.dataset.nextExample);
    const example = window.PILOT_CHAPTERS[state.chapter].examples[index];
    const current = Number(button.dataset.currentStep || 0);
    const next = Math.min(current + 1, example.steps.length);
    button.dataset.currentStep = next;
    byId(`exampleSteps-${index}`).innerHTML = example.steps
      .slice(0, next)
      .map((step, stepIndex) => `<div class="step-row"><span class="step-dot">${stepIndex + 1}</span><span>${escapeHTML(localValue(step))}</span></div>`)
      .join("");
    if (next === example.steps.length) {
      button.textContent = t("allSteps");
      button.disabled = true;
      byId(`exampleAnswer-${index}`).hidden = false;
    }
  }

  function calculatorHTML() {
    const keys = ["C", "(", ")", "√", "÷", "7", "8", "9", "^", "×", "4", "5", "6", "%", "−", "1", "2", "3", ".", "+", "0", "00", "⌫", "±", "="];
    return `<div class="calculator"><input class="calc-display" id="calcDisplay" value="" readonly aria-label="Calculator display"/><div class="calc-grid">${keys.map((key) => `<button type="button" class="${"÷×−+^%√".includes(key) ? "operator" : key === "=" ? "equals" : ""}" data-calc-key="${key}">${key}</button>`).join("")}</div></div>`;
  }

  function evaluateExpression(expression) {
    let safe = expression.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-").replace(/\^/g, "**").replace(/√\s*(\d+(?:\.\d+)?|\([^()]+\))/g, "Math.sqrt($1)");
    if (!/^[0-9+\-*/().%\sMathsqrt]+$/.test(safe)) throw new Error("Invalid expression");
    const value = Function(`"use strict"; return (${safe})`)();
    if (!Number.isFinite(value)) throw new Error("Invalid result");
    return Math.round((value + Number.EPSILON) * 1e10) / 1e10;
  }

  function bindCalculator() {
    let expression = "";
    const display = byId("calcDisplay");
    document.querySelectorAll("[data-calc-key]").forEach((button) => {
      button.onclick = () => {
        const key = button.dataset.calcKey;
        if (key === "C") expression = "";
        else if (key === "⌫") expression = expression.slice(0, -1);
        else if (key === "±") expression = expression.startsWith("-") ? expression.slice(1) : `-${expression}`;
        else if (key === "=") {
          try { expression = String(evaluateExpression(expression)); } catch { expression = "Error"; }
        } else {
          if (expression === "Error") expression = "";
          expression += key;
        }
        display.value = expression;
      };
    });
  }

  let screenDrawing;

  function ensureScreenDrawing() {
    if (screenDrawing) return screenDrawing;
    const layer = document.createElement("div");
    layer.className = "screen-drawing";
    layer.id = "screenDrawing";
    layer.setAttribute("aria-hidden", "true");
    layer.innerHTML = `<canvas class="screen-drawing-canvas" aria-label="${state.lang === "vi" ? "Vùng viết trực tiếp trên màn hình" : "Draw directly on screen"}"></canvas><div class="screen-drawing-toolbar" role="toolbar" aria-label="${state.lang === "vi" ? "Công cụ viết" : "Drawing tools"}"><button type="button" class="active" data-screen-mode="pencil">✏️ ${t("pencil")}</button><button type="button" data-screen-mode="eraser">🧽 ${t("eraser")}</button><button type="button" data-screen-undo>↩ ${t("undo")}</button><button type="button" data-screen-clear>🗑 ${t("clear")}</button><label class="screen-color"><span>🎨</span><input type="color" value="#183153" aria-label="${state.lang === "vi" ? "Màu bút" : "Pen colour"}"/></label><button type="button" class="screen-drawing-done" data-screen-close>✓ ${state.lang === "vi" ? "Xong" : "Done"}</button></div>`;
    document.body.appendChild(layer);
    const canvas = layer.querySelector("canvas");
    const color = layer.querySelector('input[type="color"]');
    const strokes = [];
    let current = null;
    let mode = "pencil";
    let context;
    let width = 0;
    let height = 0;

    function drawStroke(stroke) {
      if (!context || stroke.points.length < 2) return;
      context.globalCompositeOperation = stroke.mode === "eraser" ? "destination-out" : "source-over";
      context.strokeStyle = stroke.color;
      context.lineWidth = stroke.mode === "eraser" ? 30 : 4;
      context.lineCap = "round";
      context.lineJoin = "round";
      context.beginPath();
      stroke.points.forEach(([x, y], index) => index ? context.lineTo(x, y) : context.moveTo(x, y));
      context.stroke();
      context.globalCompositeOperation = "source-over";
    }

    function redraw() {
      if (!context) return;
      context.clearRect(0, 0, width, height);
      strokes.forEach(drawStroke);
      if (current) drawStroke(current);
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context = canvas.getContext("2d");
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      redraw();
    }

    const point = (event) => [event.clientX, event.clientY];
    canvas.onpointerdown = (event) => {
      event.preventDefault();
      current = { mode, color: color.value, points: [point(event)] };
      canvas.setPointerCapture(event.pointerId);
    };
    canvas.onpointermove = (event) => {
      if (!current) return;
      event.preventDefault();
      current.points.push(point(event));
      redraw();
    };
    canvas.onpointerup = () => {
      if (!current) return;
      strokes.push(current);
      current = null;
      redraw();
    };
    layer.querySelectorAll("[data-screen-mode]").forEach((button) => {
      button.onclick = () => {
        mode = button.dataset.screenMode;
        layer.querySelectorAll("[data-screen-mode]").forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        canvas.classList.toggle("eraser", mode === "eraser");
      };
    });
    layer.querySelector("[data-screen-undo]").onclick = () => { strokes.pop(); redraw(); };
    layer.querySelector("[data-screen-clear]").onclick = () => { strokes.length = 0; current = null; redraw(); };
    layer.querySelector("[data-screen-close]").onclick = () => toggleScreenDrawing(false);
    window.addEventListener("resize", resize);
    screenDrawing = { layer, resize };
    return screenDrawing;
  }

  function toggleScreenDrawing(force) {
    const drawing = ensureScreenDrawing();
    const open = typeof force === "boolean" ? force : !drawing.layer.classList.contains("open");
    drawing.layer.classList.toggle("open", open);
    drawing.layer.setAttribute("aria-hidden", String(!open));
    if (open) drawing.resize();
  }

  function openTool(tool) {
    if (tool === "drawing") {
      toggleScreenDrawing();
      return;
    }
    document.querySelector(".tool-dialog").classList.remove("drawing-dialog");
    byId("toolModal").classList.add("open");
    byId("toolModal").setAttribute("aria-hidden", "false");
    byId("toolTitle").textContent = `🧮 ${t("calculator")}`;
    byId("toolBody").innerHTML = calculatorHTML();
    bindCalculator();
  }

  function closeTool() {
    byId("toolModal").classList.remove("open");
    byId("toolModal").setAttribute("aria-hidden", "true");
  }

  document.addEventListener("click", (event) => {
    const chapterButton = event.target.closest("[data-chapter]");
    const tabButton = event.target.closest("[data-tab]");
    const languageButton = event.target.closest("[data-lang]");
    const toolButton = event.target.closest("[data-open-tool], [data-question-tool]");
    const checkButton = event.target.closest("[data-check]");
    const solutionButton = event.target.closest("[data-solution]");
    const exampleButton = event.target.closest("[data-next-example]");
    if (chapterButton) { state.chapter = Number(chapterButton.dataset.chapter); state.tab = "learn"; saveState(); render(); }
    else if (tabButton) { state.tab = tabButton.dataset.tab; saveState(); render(); }
    else if (languageButton) { state.lang = languageButton.dataset.lang; saveState(); render(); }
    else if (toolButton) openTool(toolButton.dataset.openTool || toolButton.dataset.questionTool);
    else if (checkButton) checkQuestion(checkButton.dataset.check);
    else if (solutionButton) togglePanel("solution", solutionButton.dataset.solution);
    else if (exampleButton) handleExampleStep(exampleButton);
  });

  document.addEventListener("input", (event) => {
    if (event.target.matches("[data-answer-id]")) {
      const id = event.target.dataset.answerId;
      const index = Number(event.target.dataset.answerIndex);
      if (!state.answers[id]) state.answers[id] = [];
      state.answers[id][index] = event.target.value;
      event.target.classList.remove("correct", "wrong");
      saveState();
    }
  });

  byId("closeTool").onclick = closeTool;
  byId("toolModal").onclick = (event) => { if (event.target === byId("toolModal")) closeTool(); };
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeTool();
    if (screenDrawing?.layer.classList.contains("open")) toggleScreenDrawing(false);
  });

  render();
})();
