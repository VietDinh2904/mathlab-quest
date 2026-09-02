"use strict";

      const BOOK_DATA = window.BOOK_DATA;
      const TABS = [
        ["theory", "📘 Theory"],
        ["examples", "🔎 Examples"],
        ["practice", "✍️ Practice"],
        ["check", "⭐ Chapter Check"],
        ["guide", "💡 Solution Guide"],
      ];
      const STORAGE_KEYS = Object.freeze({
        chapter: "moj2_1_10_chapter",
        tab: "moj2_1_10_tab",
        state: "moj2_1_10_state",
      });
      const PROGRESS_SECTIONS = TABS.map(([key]) => key);
      const CALCULATOR_LOCKED_CHAPTERS = new Set([2, 7, 8]);
      const SPECIAL_TOOL_NAMES = Object.freeze({
        1: "🔎 Pattern helper",
        2: "🧩 Pairing",
        3: "🟦 Bar model",
        4: "🌳 Intervals",
        5: "⚖️ Replacement",
        6: "🔺 Counter",
        7: "🎯 Make 10/100",
        8: "✖️ Factor helper",
        9: "👨‍👧 Age model",
        10: "↩ Reverse machine",
      });

      function loadSavedState() {
        try {
          return JSON.parse(localStorage.getItem(STORAGE_KEYS.state) || "{}");
        } catch {
          return {};
        }
      }

      function byId(id) {
        return document.getElementById(id);
      }

      let chapter = Number(localStorage.getItem(STORAGE_KEYS.chapter) || 1);
      if (!BOOK_DATA[chapter]) chapter = 1;
      let tab = localStorage.getItem(STORAGE_KEYS.tab) || "theory";
      if (!PROGRESS_SECTIONS.includes(tab)) tab = "theory";

      const saved = loadSavedState();
      const answers = saved.answers || {};
      const notes = saved.notes || {};
      const progress = saved.progress || {};
      const drawStates = new Map();

      function save() {
        localStorage.setItem(STORAGE_KEYS.chapter, chapter);
        localStorage.setItem(STORAGE_KEYS.tab, tab);
        localStorage.setItem(
          STORAGE_KEYS.state,
          JSON.stringify({ answers, notes, progress }),
        );
      }
      function esc(s) {
        return String(s ?? "")
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;");
      }
      function norm(s) {
        return String(s ?? "")
          .toLowerCase()
          .replace(/[,.$]/g, "")
          .replace(/\s+/g, " ")
          .trim();
      }
      function accepted(v, arr) {
        return arr.some((a) => norm(v) === norm(a));
      }
      function getP() {
        if (!progress[chapter]) progress[chapter] = {};
        return progress[chapter];
      }
      function card(icon, title, sub, body, actions = "") {
        return `<section class="card"><div class="card-head"><h2>${icon} ${title}</h2>${sub ? `<p>${sub}</p>` : ""}</div><div class="card-body">${body}</div>${actions ? `<div class="actions">${actions}</div>` : ""}</section>`;
      }

      function initNav() {
        const c = BOOK_DATA[chapter];
        byId("subtitle").innerHTML =
          `Chapter ${chapter} — <b>${esc(c.title)}</b> · mỗi câu có vùng làm bài và toolbox riêng.`;
        byId("chapterList").innerHTML = Object.keys(BOOK_DATA)
          .map((k) => {
            const d = BOOK_DATA[k];
            return `<button class="chapter-pill ${Number(k) === chapter ? "active" : ""}" data-ch="${k}">${d.emoji} Chapter ${k}<small>${esc(d.title)}</small></button>`;
          })
          .join("");
        byId("tabs").innerHTML = TABS.map(
          ([k, l]) =>
            `<button class="tab" data-tab="${k}" aria-selected="${k === tab}">${l}</button>`,
        ).join("");
        document.querySelectorAll("[data-ch]").forEach(
          (b) =>
            (b.onclick = () => {
              chapter = Number(b.dataset.ch);
              tab = "theory";
              save();
              render();
            }),
        );
        document.querySelectorAll("[data-tab]").forEach(
          (b) =>
            (b.onclick = () => {
              tab = b.dataset.tab;
              save();
              render();
            }),
        );
      }
      function updateProgress() {
        const p = getP();
        const done = PROGRESS_SECTIONS.filter((key) => p[key]).length;
        byId("progressBar").style.width =
          (done / PROGRESS_SECTIONS.length) * 100 + "%";
        byId("progressText").textContent =
          `Tiến độ Chapter ${chapter}: ${done}/5 phần${p.checkScore ? ` · Check ${p.checkScore.got}/${p.checkScore.total}` : ""}`;
      }
      function theoryHTML() {
        const c = BOOK_DATA[chapter];
        return card(
          "📘",
          `Chapter ${chapter} Theory`,
          c.title,
          `<div class="theory-grid">${c.theory.map((x, i) => `<div class="theory"><span class="n">${i + 1}</span><h3>${esc(x[0])}</h3><p>${esc(x[1])}</p></div>`).join("")}</div><div class="source-note">Theory is reorganized from the chapter’s own explanations and worked examples (book pages ${c.pages}).</div>`,
          `<button class="btn" data-complete="theory">Đã học xong Theory</button>`,
        );
      }
      function exampleWorkZone(i) {
        const id = `ex-${chapter}-${i}`,
          note = (notes[id] || [])[0] || "";
        return `<div class="work-zone"><div class="work-head"><span class="part-label">Try it</span><span class="mini-note">Nháp trước khi mở lời giải</span></div><div class="work-paper"><textarea data-note-q="${id}" data-note-i="0" placeholder="Thử cách làm của em ở đây…">${esc(note)}</textarea></div><div class="mini-tools"><button class="toolbtn ghost" data-tool-open="scratch" data-work="${id}">✏️ Pencil</button><button class="toolbtn ghost" data-tool-open="calc" data-work="${id}">🔢 Calculator</button><button class="toolbtn ghost" data-tool-open="special" data-work="${id}">${specialName(chapter)}</button></div><div class="toolpanel" id="panel-${id}"></div></div>`;
      }
      function examplesHTML() {
        const c = BOOK_DATA[chapter];
        return card(
          "🔎",
          "Examples",
          "Mở từng bước theo đúng hướng giải của chương. Mỗi Example cũng có toolbox riêng để thử trước.",
          c.examples
            .map(
              (e, i) =>
                `<div class="example"><div class="qtitle">Example ${i + 1}. ${esc(e.q)}</div>${exampleWorkZone(i)}<div class="qrow"><button class="btn gold" data-exstep="${i}">💡 Show next step</button><button class="btn ghost" data-exans="${i}">👁 Answer</button></div><div class="hintbox" id="exstep-${i}"></div><div class="solutionbox" id="exans-${i}"><b>Answer:</b> ${esc(e.a)}</div></div>`,
            )
            .join(""),
          `<button class="btn" data-complete="examples">Đã xem xong Examples</button>`,
        );
      }

      function visualHTML(q) {
        const t = q.visual;
        if (!t) return "";
        const dedicatedIllustration = window.BOOK_ILLUSTRATIONS?.[t];
        if (dedicatedIllustration) return dedicatedIllustration();

        const svg = (body, v = "0 0 520 220") =>
          `<div class="visual"><svg class="shape-svg" viewBox="${v}" aria-label="diagram">${body}</svg></div>`;
        if (t === "pascal")
          return `<div class="visual"><div style="text-align:center;font-weight:800;line-height:2">1<br>1&nbsp;&nbsp;1<br>1&nbsp;&nbsp;2&nbsp;&nbsp;1<br>1&nbsp;&nbsp;3&nbsp;&nbsp;3&nbsp;&nbsp;1<br>1&nbsp;&nbsp;4&nbsp;&nbsp;6&nbsp;&nbsp;4&nbsp;&nbsp;1<br>↓ next row</div></div>`;
        if (t === "squareA")
          return `<div class="visual">[3 12 / 11 6] &nbsp; [7 28 / 14 9] &nbsp; [6 A / 12 B]</div>`;
        if (t === "squareB")
          return `<div class="visual">[4 11 / 1 8] &nbsp; [8 6 / 9 A] &nbsp; [10 6 / B 12]</div>`;
        if (t === "circleA" || t === "circleB")
          return `<div class="visual">Number-circle pattern from the practice page. Use the same relation shown by the completed circles.</div>`;
        if (t === "numtri")
          return `<div class="visual" style="text-align:center;line-height:2">1<br>2&nbsp;&nbsp;4<br>3&nbsp;&nbsp;6&nbsp;&nbsp;9<br>4&nbsp;&nbsp;?&nbsp;&nbsp;?&nbsp;&nbsp;16<br>5&nbsp;&nbsp;?&nbsp;&nbsp;15&nbsp;&nbsp;?&nbsp;&nbsp;25<br>6&nbsp;&nbsp;?&nbsp;&nbsp;?&nbsp;&nbsp;24&nbsp;&nbsp;?&nbsp;&nbsp;?</div>`;
        if (t === "triangle")
          return svg(
            `<path d="M260 15 L80 195 L440 195 Z M170 105 L350 105 M170 105 L260 195 M350 105 L260 195" fill="none" stroke="#e85b45" stroke-width="3"/><text x="255" y="44">6</text><text x="250" y="135">18</text><text x="110" y="190">?</text><text x="390" y="190">24</text>`,
          );
        if (t === "table")
          return `<div class="visual">Columns A–E repeat in the arrangement shown in the chapter table; use the row/column pattern to locate 30 and 41.</div>`;
        if (t === "reverse1" || t === "reverse2")
          return `<div class="visual">Operation-chain diagram: use the arrows printed in the question and reverse them from the final value back to the start.</div>`;
        return "";
      }

      function partLabels(q) {
        if (q.labels && q.labels.length === q.ans.length) return q.labels;
        if (q.ans.length > 1)
          return q.ans.map((_, i) => `(${String.fromCharCode(97 + i)})`);
        return ["Answer"];
      }
      function workZone(q, i, label) {
        const id = `w-${q.id.replace(/[^a-zA-Z0-9_-]/g, "_")}-${i}`;
        const vals = answers[q.id] || [];
        const note = (notes[q.id] || [])[i] || "";
        return `<div class="work-zone"><div class="work-head"><span class="part-label">${esc(label)}</span><label>Answer <input class="answer-input" data-q="${esc(q.id)}" data-i="${i}" value="${esc(vals[i] || "")}"></label></div><div class="work-paper"><textarea data-note-q="${esc(q.id)}" data-note-i="${i}" placeholder="Không gian làm bài / ghi nháp cho ${esc(label)}…">${esc(note)}</textarea></div><div class="mini-tools"><button class="toolbtn ghost" data-tool-open="scratch" data-work="${id}">✏️ Pencil</button><button class="toolbtn ghost" data-tool-open="calc" data-work="${id}">🔢 Calculator</button><button class="toolbtn ghost" data-tool-open="special" data-work="${id}">${specialName(chapter)}</button></div><div class="toolpanel" id="panel-${id}"></div></div>`;
      }
      function specialName(ch) {
        return SPECIAL_TOOL_NAMES[ch] || "🧰 Tool";
      }
      function questionHTML(q, showGuide = false, level = "") {
        const labels = partLabels(q);
        return `<div class="question" data-question="${esc(q.id)}"><div class="qtitle">${level ? `<span class="levelbadge">${level}</span>` : ""}<span class="levelbadge">${esc(q.n)}</span> ${esc(q.q)}</div>${visualHTML(q)}<div class="subparts">${q.ans.map((_, i) => workZone(q, i, labels[i])).join("")}</div><div class="qrow"><button class="btn gold" data-hint="${esc(q.id)}">💡 Hint</button>${showGuide ? `<button class="btn ghost" data-sol="${esc(q.id)}">🧭 Guide</button>` : ""}</div><div class="hintbox" id="hint-${safeId(q.id)}">${esc(q.hint)}</div><div class="solutionbox" id="sol-${safeId(q.id)}"><b>Hướng dẫn theo Chapter ${chapter}:</b> ${esc(q.guide)}</div></div>`;
      }
      function safeId(x) {
        return String(x).replace(/[^a-zA-Z0-9_-]/g, "_");
      }
      function practiceHTML() {
        const c = BOOK_DATA[chapter];
        return card(
          "✍️",
          "Practice — exercises from the chapter",
          "Mỗi câu/ý có vùng làm bài và toolbox riêng.",
          c.practice.map((q) => questionHTML(q)).join(""),
          `<button class="btn" data-checkset="practice">Kiểm tra toàn bộ</button><button class="btn ghost" data-resetset="practice">Làm lại</button><span class="score" id="practiceScore"></span>`,
        );
      }
      function checkHTML() {
        const c = BOOK_DATA[chapter];
        return card(
          "⭐",
          "Chapter Check",
          "5 câu lấy lại từ chính Practice để kiểm tra trọng tâm.",
          c.check
            .map((id, i) => {
              const q = c.practice.find((x) => x.id === id);
              return q
                ? questionHTML(
                    q,
                    false,
                    i < 2 ? "EASY" : i < 4 ? "MEDIUM" : "CHALLENGE",
                  )
                : "";
            })
            .join(""),
          `<button class="btn" data-checkset="check">Chấm Chapter Check</button><button class="btn ghost" data-resetset="check">Làm lại</button><span class="score" id="checkScore"></span>`,
        );
      }
      function guideHTML() {
        const c = BOOK_DATA[chapter];
        return card(
          "💡",
          "Solution Guide",
          "Hướng dẫn quay về đúng chiến lược của chương.",
          c.practice
            .map(
              (q) =>
                `<div class="example"><div class="qtitle"><span class="levelbadge">${esc(q.n)}</span> ${esc(q.q)}</div><div class="qrow"><button class="btn gold" data-ghint="${esc(q.id)}">💡 Gợi ý</button><button class="btn ghost" data-gsol="${esc(q.id)}">👁 Mở hướng dẫn</button></div><div class="hintbox" id="ghint-${safeId(q.id)}">${esc(q.hint)}</div><div class="solutionbox" id="gsol-${safeId(q.id)}"><b>Hướng dẫn:</b> ${esc(q.guide)}<br><span class="mini-note">Đáp án: ${q.ans.map((a) => esc(a[0])).join(" · ")}</span></div></div>`,
            )
            .join(""),
          `<button class="btn" data-complete="guide">Đã xem xong Solution Guide</button>`,
        );
      }
      function render() {
        const renderers = {
          theory: theoryHTML,
          examples: examplesHTML,
          practice: practiceHTML,
          check: checkHTML,
          guide: guideHTML,
        };

        initNav();
        byId("content").innerHTML = renderers[tab]();
        bind();
        updateProgress();
      }

      function bindToggle(selector, idPrefix, dataKey) {
        document.querySelectorAll(selector).forEach((button) => {
          button.onclick = () =>
            byId(idPrefix + safeId(button.dataset[dataKey]))?.classList.toggle(
              "show",
            );
        });
      }

      function bind() {
        document.querySelectorAll("[data-complete]").forEach(
          (b) =>
            (b.onclick = () => {
              getP()[b.dataset.complete] = true;
              save();
              updateProgress();
            }),
        );
        bindToggle("[data-hint]", "hint-", "hint");
        bindToggle("[data-sol]", "sol-", "sol");
        bindToggle("[data-ghint]", "ghint-", "ghint");
        bindToggle("[data-gsol]", "gsol-", "gsol");
        document.querySelectorAll("[data-q]").forEach(
          (inp) =>
            (inp.oninput = () => {
              const id = inp.dataset.q,
                i = Number(inp.dataset.i);
              if (!answers[id]) answers[id] = [];
              answers[id][i] = inp.value;
              inp.classList.remove("right", "wrong");
              save();
            }),
        );
        document.querySelectorAll("[data-note-q]").forEach(
          (t) =>
            (t.oninput = () => {
              const id = t.dataset.noteQ,
                i = Number(t.dataset.noteI);
              if (!notes[id]) notes[id] = [];
              notes[id][i] = t.value;
              save();
            }),
        );
        document
          .querySelectorAll("[data-tool-open]")
          .forEach(
            (b) =>
              (b.onclick = () =>
                openTool(b.dataset.work, b.dataset.toolOpen, b)),
          );
        document
          .querySelectorAll("[data-checkset]")
          .forEach((b) => (b.onclick = () => checkSet(b.dataset.checkset)));
        document
          .querySelectorAll("[data-resetset]")
          .forEach((b) => (b.onclick = () => resetSet(b.dataset.resetset)));
        document.querySelectorAll("[data-exstep]").forEach((b) => {
          let step = 0;
          b.onclick = () => {
            const e = BOOK_DATA[chapter].examples[Number(b.dataset.exstep)];
            const box = byId("exstep-" + b.dataset.exstep);
            step = Math.min(step + 1, e.steps.length);
            box.innerHTML = e.steps
              .slice(0, step)
              .map((s, i) => `<div><b>Step ${i + 1}:</b> ${esc(s)}</div>`)
              .join("");
            box.classList.add("show");
            if (step === e.steps.length) b.disabled = true;
          };
        });
        document.querySelectorAll("[data-exans]").forEach((button) => {
          button.onclick = () =>
            byId("exans-" + button.dataset.exans)?.classList.toggle("show");
        });
      }
      function gradeQ(q) {
        const ins = [
          ...document.querySelectorAll(`[data-q="${CSS.escape(q.id)}"]`),
        ];
        let got = 0;
        ins.forEach((inp) => {
          const i = Number(inp.dataset.i),
            yes = accepted(inp.value, q.ans[i]);
          inp.classList.toggle("right", yes);
          inp.classList.toggle("wrong", !yes);
          if (yes) got++;
        });
        return [got, q.ans.length];
      }
      function checkSet(which) {
        const c = BOOK_DATA[chapter],
          qs =
            which === "check"
              ? c.check
                  .map((id) => c.practice.find((q) => q.id === id))
                  .filter(Boolean)
              : c.practice;
        let got = 0,
          total = 0;
        qs.forEach((q) => {
          const r = gradeQ(q);
          got += r[0];
          total += r[1];
        });
        const s = byId(
          which === "check" ? "checkScore" : "practiceScore",
        );
        if (s) {
          s.textContent = `${got}/${total}`;
          s.className = "score " + (got === total ? "good" : "");
        }
        const p = getP();
        if (which === "practice" && got === total) p.practice = true;
        if (which === "check") {
          p.check = got === total;
          p.checkScore = { got, total };
        }
        save();
        updateProgress();
      }
      function resetSet(which) {
        const c = BOOK_DATA[chapter],
          ids = which === "check" ? c.check : c.practice.map((q) => q.id);
        ids.forEach((id) => {
          delete answers[id];
          delete notes[id];
        });
        render();
      }

      function openTool(work, kind, button) {
        const panel = byId("panel-" + work);
        if (!panel) return;
        if (panel.dataset.kind === kind && panel.classList.contains("open")) {
          panel.classList.remove("open");
          return;
        }
        panel.dataset.kind = kind;
        panel.classList.add("open");
        if (kind === "scratch") {
          panel.innerHTML = scratchHTML(work);
          initScratch(work);
        } else if (kind === "calc") {
          const locked =
            CALCULATOR_LOCKED_CHAPTERS.has(chapter) &&
            tab !== "examples" &&
            !attemptedWork(button);
          panel.innerHTML = locked
            ? `<div class="calc-lock">🔒 Hãy nhập một đáp án trước. Calculator chỉ dùng để kiểm tra sau khi em đã thử chiến lược của chương.</div>`
            : calcHTML(work);
          if (!locked) bindCalc(work);
        } else {
          panel.innerHTML = specialHTML(work);
          bindSpecial(work);
        }
      }
      function attemptedWork(button) {
        const wz = button.closest(".work-zone");
        const inp = wz?.querySelector("[data-q]");
        return !!(inp && inp.value.trim());
      }
      function scratchHTML(work) {
        return `<div class="scratch-shell"><div class="scratch-actions"><button class="toolbtn" data-drawmode="pencil" data-work="${work}">✏️ Pencil</button><button class="toolbtn ghost" data-drawmode="line" data-work="${work}">📏 Line</button><button class="toolbtn ghost" data-drawmode="eraser" data-work="${work}">🩹 Eraser</button><button class="toolbtn ghost" data-undo="${work}">↩ Undo</button><button class="toolbtn ghost" data-clear="${work}">🗑 Clear</button></div><canvas class="scratch" id="canvas-${work}"></canvas></div>`;
      }
      function initScratch(work) {
        const cv = document.getElementById("canvas-" + work);
        if (!cv) return;
        let st = drawStates.get(work) || {
          mode: "pencil",
          strokes: [],
          current: null,
          drawing: false,
          start: null,
        };
        drawStates.set(work, st);
        const w = Math.max(260, cv.clientWidth),
          h = 180;
        cv.width = w;
        cv.height = h;
        const ctx = cv.getContext("2d");
        function redraw() {
          ctx.clearRect(0, 0, w, h);
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          for (const s of st.strokes) drawStroke(s);
          if (st.current) drawStroke(st.current);
        }
        function drawStroke(s) {
          ctx.globalCompositeOperation = s.erase
            ? "destination-out"
            : "source-over";
          ctx.strokeStyle = "#3c3a37";
          ctx.lineWidth = s.erase ? 18 : 2.3;
          ctx.beginPath();
          if (s.line) {
            ctx.moveTo(...s.pts[0]);
            ctx.lineTo(...s.pts[1]);
          } else
            s.pts.forEach((p, i) => (i ? ctx.lineTo(...p) : ctx.moveTo(...p)));
          ctx.stroke();
          ctx.globalCompositeOperation = "source-over";
        }
        function pt(e) {
          const r = cv.getBoundingClientRect();
          return [
            ((e.clientX - r.left) * cv.width) / r.width,
            ((e.clientY - r.top) * cv.height) / r.height,
          ];
        }
        cv.onpointerdown = (e) => {
          st.drawing = true;
          st.start = pt(e);
          st.current = {
            pts: [st.start],
            erase: st.mode === "eraser",
            line: st.mode === "line",
          };
          cv.setPointerCapture(e.pointerId);
        };
        cv.onpointermove = (e) => {
          if (!st.drawing) return;
          const p = pt(e);
          if (st.current.line) st.current.pts = [st.start, p];
          else st.current.pts.push(p);
          redraw();
        };
        cv.onpointerup = () => {
          if (!st.drawing) return;
          st.drawing = false;
          st.strokes.push(st.current);
          st.current = null;
          redraw();
        };
        document
          .querySelectorAll(`[data-drawmode][data-work="${work}"]`)
          .forEach(
            (b) =>
              (b.onclick = () => {
                st.mode = b.dataset.drawmode;
                document
                  .querySelectorAll(`[data-drawmode][data-work="${work}"]`)
                  .forEach((x) => x.classList.add("ghost"));
                b.classList.remove("ghost");
              }),
          );
        document.querySelector(`[data-undo="${work}"]`).onclick = () => {
          st.strokes.pop();
          redraw();
        };
        document.querySelector(`[data-clear="${work}"]`).onclick = () => {
          st.strokes = [];
          redraw();
        };
        redraw();
      }
      function calcHTML(work) {
        return `<div class="calc"><input id="calc-${work}" readonly><div class="calc-grid">${["C", "(", ")", "÷", "7", "8", "9", "×", "4", "5", "6", "−", "1", "2", "3", "+", "0", ".", "⌫", "="].map((x) => `<button class="${["÷", "×", "−", "+", "="].includes(x) ? "op" : ""}" data-calc="${x}" data-work="${work}">${x}</button>`).join("")}</div></div>`;
      }
      function bindCalc(work) {
        let expr = "";
        const d = document.getElementById("calc-" + work);
        document.querySelectorAll(`[data-calc][data-work="${work}"]`).forEach(
          (b) =>
            (b.onclick = () => {
              const x = b.dataset.calc;
              if (x === "C") expr = "";
              else if (x === "⌫") expr = expr.slice(0, -1);
              else if (x === "=") {
                try {
                  const safe = expr
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/")
                    .replace(/−/g, "-");
                  if (!/^[0-9+\-*/().\s]+$/.test(safe)) throw 0;
                  const v = Function('"use strict";return (' + safe + ")")();
                  expr = Number.isFinite(v) ? String(v) : "Error";
                } catch (e) {
                  expr = "Error";
                }
              } else {
                if (expr === "Error") expr = "";
                expr += x;
              }
              d.value = expr;
            }),
        );
      }
      function specialHTML(work) {
        if (chapter === 1)
          return `<div class="special-tool"><b>🔎 Pattern helper</b><p>Check in order: same operation → differences → odd/even positions → previous terms → diagram relation.</p></div>`;
        if (chapter === 2)
          return `<div class="special-tool"><b>🧩 Pairing Lab</b><div><label>Last number <input id="pair-${work}" type="number" min="2" max="50" value="10"></label> <button class="toolbtn ghost" id="pairgo-${work}">Pair</button></div><div id="pairout-${work}"></div></div>`;
        if (chapter === 3)
          return `<div class="special-tool"><b>🟦 Bar Model</b><div><label>A units <input id="bara-${work}" type="number" min="1" max="8" value="4"></label> <label>B units <input id="barb-${work}" type="number" min="1" max="8" value="1"></label> <button class="toolbtn ghost" id="bargo-${work}">Draw</button></div><div class="bars" id="barout-${work}"></div></div>`;
        if (chapter === 4)
          return `<div class="special-tool"><b>🌳 Interval Visualizer</b><select id="treemode-${work}"><option value="both">Both ends</option><option value="one">One end</option><option value="none">Neither end</option></select> <label>Intervals <input id="treen-${work}" type="number" min="1" max="12" value="5"></label> <button class="toolbtn ghost" id="treego-${work}">Show</button><div class="tree-line" id="treeout-${work}"></div><div class="special-output" id="treestat-${work}"></div></div>`;
        if (chapter === 5)
          return `<div class="special-tool"><b>⚖️ Replacement</b><label>1 A = <input id="repn-${work}" type="number" min="1" max="10" value="3"> B</label> <label>A count <input id="repa-${work}" type="number" min="1" max="10" value="2"></label> <button class="toolbtn ghost" id="repgo-${work}">Replace</button><div class="special-output" id="repout-${work}"></div></div>`;
        if (chapter === 6)
          return `<div class="special-tool"><b>🔺 Shape Counter</b><p class="mini-note">Tally by size/type, then add only at the end.</p><div class="counter-grid"><button data-count="small" data-work="${work}">Small: <span>0</span></button><button data-count="medium" data-work="${work}">Medium: <span>0</span></button><button data-count="large" data-work="${work}">Large: <span>0</span></button></div><div class="special-output" id="countout-${work}">Total: 0</div></div>`;
        if (chapter === 7)
          return `<div class="special-tool"><b>🎯 Make 10 / 100</b><label>A <input id="sumA-${work}" type="number" value="24"></label> <label>B <input id="sumB-${work}" type="number" value="76"></label> <button class="toolbtn ghost" id="sumgo-${work}">Check pair</button><div class="special-output" id="sumout-${work}"></div></div>`;
        if (chapter === 8)
          return `<div class="special-tool"><b>✖️ Factor Helper</b><select id="factor-${work}"><option value="25">×25</option><option value="125">×125</option><option value="99">×99</option><option value="999">×999</option><option value="11">×11</option><option value="101">×101</option></select><button class="toolbtn ghost" id="factgo-${work}">Show strategy</button><div class="special-output" id="factout-${work}"></div></div>`;
        if (chapter === 9)
          return `<div class="special-tool"><b>👨‍👧 Age Model</b><label>Age A <input id="agea-${work}" type="number" value="10"></label> <label>Age B <input id="ageb-${work}" type="number" value="30"></label> <label>Years <input id="agey-${work}" type="number" value="0"></label><button class="toolbtn ghost" id="agego-${work}">Update</button><div class="special-output" id="ageout-${work}"></div></div>`;
        return `<div class="special-tool"><b>↩ Reverse Machine</b><label>End <input id="revend-${work}" type="number" value="30"></label><div class="reverse-row">${[1, 2, 3].map((i) => `<select id="revop${i}-${work}"><option>+</option><option>−</option><option>×</option><option>÷</option></select><input id="revn${i}-${work}" type="number" value="${i === 1 ? 3 : i === 2 ? 4 : 5}">`).join("")}</div><button class="toolbtn ghost" id="revgo-${work}">Work backwards</button><div class="special-output" id="revout-${work}"></div></div>`;
      }
      function bindSpecial(work) {
        if (chapter === 2) {
          const go = document.getElementById("pairgo-" + work);
          go.onclick = () => {
            const n = Math.max(
                2,
                Math.min(
                  50,
                  +document.getElementById("pair-" + work).value || 10,
                ),
              ),
              arr = [];
            for (let i = 1; i <= Math.floor(n / 2); i++)
              arr.push(
                `<span class="pair-chip">${i}+${n + 1 - i}=${n + 1}</span>`,
              );
            if (n % 2)
              arr.push(`<span class="pair-chip">middle ${(n + 1) / 2}</span>`);
            document.getElementById("pairout-" + work).innerHTML = arr.join("");
          };
          go.onclick();
        } else if (chapter === 3) {
          const go = document.getElementById("bargo-" + work);
          go.onclick = () => {
            const a = Math.max(
                1,
                Math.min(
                  8,
                  +document.getElementById("bara-" + work).value || 4,
                ),
              ),
              b = Math.max(
                1,
                Math.min(
                  8,
                  +document.getElementById("barb-" + work).value || 1,
                ),
              );
            const row = (name, n) =>
              `<div class="barline"><b>${name}</b><div class="units">${Array.from({ length: n }, () => '<span class="unit"></span>').join("")}</div></div>`;
            document.getElementById("barout-" + work).innerHTML =
              row("A", a) + row("B", b);
          };
          go.onclick();
        } else if (chapter === 4) {
          const go = document.getElementById("treego-" + work);
          go.onclick = () => {
            const mode = document.getElementById("treemode-" + work).value,
              n = Math.max(
                1,
                Math.min(
                  12,
                  +document.getElementById("treen-" + work).value || 5,
                ),
              );
            let trees =
              mode === "both" ? n + 1 : mode === "one" ? n : Math.max(0, n - 1);
            document.getElementById("treeout-" + work).innerHTML = Array.from(
              { length: trees },
              (_, i) =>
                `<span class="tree-node">🌳</span>${i < trees - 1 ? '<span class="tree-gap"></span>' : ""}`,
            ).join("");
            document.getElementById("treestat-" + work).textContent =
              `Intervals: ${n} · Trees: ${trees}`;
          };
          go.onclick();
        } else if (chapter === 5) {
          const go = document.getElementById("repgo-" + work);
          go.onclick = () => {
            const n = Math.max(
                1,
                +document.getElementById("repn-" + work).value || 3,
              ),
              a = Math.max(
                1,
                +document.getElementById("repa-" + work).value || 2,
              );
            document.getElementById("repout-" + work).textContent =
              `${a} A = ${a * n} B`;
          };
          go.onclick();
        } else if (chapter === 6) {
          const vals = { small: 0, medium: 0, large: 0 };
          document
            .querySelectorAll(`[data-count][data-work="${work}"]`)
            .forEach(
              (b) =>
                (b.onclick = () => {
                  vals[b.dataset.count]++;
                  b.querySelector("span").textContent = vals[b.dataset.count];
                  document.getElementById("countout-" + work).textContent =
                    "Total: " + Object.values(vals).reduce((a, b) => a + b, 0);
                }),
            );
        } else if (chapter === 7) {
          const go = document.getElementById("sumgo-" + work);
          go.onclick = () => {
            const a = +document.getElementById("sumA-" + work).value || 0,
              b = +document.getElementById("sumB-" + work).value || 0,
              s = a + b;
            document.getElementById("sumout-" + work).textContent =
              `${a}+${b}=${s}${[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200].includes(s) ? " ✓ convenient total" : ""}`;
          };
          go.onclick();
        } else if (chapter === 8) {
          const go = document.getElementById("factgo-" + work);
          go.onclick = () => {
            const v = document.getElementById("factor-" + work).value,
              m = {
                25: "Use ×100 ÷4 or pair 25 with 4.",
                125: "Pair 125 with 8 to make 1000.",
                99: "Use ×(100−1).",
                999: "Use ×(1000−1).",
                11: "Use the ×11 pattern shown in Example 6.",
                101: "A two-digit number ×101 repeats the two digits.",
              };
            document.getElementById("factout-" + work).textContent = m[v];
          };
          go.onclick();
        } else if (chapter === 9) {
          const go = document.getElementById("agego-" + work);
          go.onclick = () => {
            const a = +document.getElementById("agea-" + work).value || 0,
              b = +document.getElementById("ageb-" + work).value || 0,
              y = +document.getElementById("agey-" + work).value || 0;
            document.getElementById("ageout-" + work).textContent =
              `After ${y} year(s): ${a + y} and ${b + y}. Difference stays ${Math.abs(a - b)}.`;
          };
          go.onclick();
        } else if (chapter === 10) {
          const go = document.getElementById("revgo-" + work);
          go.onclick = () => {
            let v = +document.getElementById("revend-" + work).value || 0,
              steps = [];
            for (let i = 3; i >= 1; i--) {
              const op = document.getElementById(`revop${i}-${work}`).value,
                n = +document.getElementById(`revn${i}-${work}`).value || 0;
              if (op === "+") {
                v -= n;
                steps.push(`−${n}`);
              } else if (op === "−") {
                v += n;
                steps.push(`+${n}`);
              } else if (op === "×") {
                v /= n;
                steps.push(`÷${n}`);
              } else {
                v *= n;
                steps.push(`×${n}`);
              }
            }
            document.getElementById("revout-" + work).textContent =
              `Reverse: ${steps.join(" → ")} → start = ${v}`;
          };
          go.onclick();
        }
      }
      render();
