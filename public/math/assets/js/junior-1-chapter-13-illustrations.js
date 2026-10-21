(function registerJuniorOneChapterThirteenIllustrations() {
  "use strict";
  const art = window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {};
  const isVi = () => document.documentElement.lang !== "en";
  const t = (vi, en) => isVi() ? vi : en;
  const esc = (value) => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);

  function numberRow(title, values, center = null, note = "") {
    const cells = values.map((value, index) => `<div style="display:grid;place-items:center;min-width:54px;height:54px;padding:0 10px;border:3px solid ${index === center ? "#ff765f" : "#17365d"};border-radius:14px;background:${index === center ? "#fff0c9" : index % 2 ? "#dff7ef" : "#e7f1ff"};color:#17365d;font-size:1.08rem;font-weight:900">${esc(value)}</div>`).join("");
    return `<div class="book-visual"><div class="book-visual-title">${esc(title)}</div><div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap">${cells}</div>${note ? `<p style="margin:14px 0 0;text-align:center;color:#386087;font-weight:800">${esc(note)}</p>` : ""}</div>`;
  }

  function pairRow(values, pairSum, result, middle = null) {
    const pairs = [];
    for (let left = 0, right = values.length - 1; left < right; left += 1, right -= 1) pairs.push(`${values[left]} + ${values[right]} = ${pairSum}`);
    return `<div class="book-visual"><div class="book-visual-title">${esc(t("Ghép các số ở hai đầu", "Pair terms from the two ends"))}</div>${numberRow("", values, middle, "")}<div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:14px">${pairs.map((pair) => `<span style="padding:8px 12px;border-radius:999px;background:#dff7ef;color:#17365d;font-weight:900">${esc(pair)}</span>`).join("")}</div>${middle !== null ? `<p style="text-align:center;font-weight:900;color:#17365d">${esc(t("Giữ lại số giữa", "Keep the middle term"))}: ${esc(values[middle])}</p>` : ""}<p style="text-align:center;font-weight:900;color:#4c55c4">${esc(t("Kết quả", "Result"))}: ${esc(result)}</p></div>`;
  }

  function balanced(total, values) {
    const average = total / values.length;
    return numberRow(`${total} ÷ ${values.length} = ${average}`, values, values.length % 2 ? Math.floor(values.length / 2) : null, t("Các số cách đều quanh điểm cân bằng", "The numbers are equally spaced around the balance point"));
  }

  function dotSvg(kind, shown = [1, 2, 3]) {
    const width = 720;
    const panels = shown.map((n, panelIndex) => {
      const originX = 110 + panelIndex * 245;
      const originY = 150;
      const points = [];
      if (kind === "triangle") {
        for (let row = 0; row < n; row += 1) for (let col = 0; col <= row; col += 1) points.push([originX + (col - row / 2) * 34, originY - (n - 1 - row) * 34]);
      } else {
        for (let row = 0; row < n; row += 1) for (let col = 0; col < n; col += 1) points.push([originX + (col - (n - 1) / 2) * 31, originY - (row - (n - 1) / 2) * 31]);
      }
      return `${points.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="8" fill="#17365d"/>`).join("")}<text x="${originX}" y="218" text-anchor="middle" font-weight="900" fill="#17365d">${n}${isVi() ? "" : n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th"}</text>`;
    }).join("");
    return `<div class="book-visual"><div class="book-visual-title">${esc(kind === "triangle" ? t("Dãy hình chấm tam giác", "Triangular dot patterns") : t("Dãy hình chấm vuông", "Square dot patterns"))}</div><svg viewBox="0 0 ${width} 240" role="img" aria-label="${esc(kind === "triangle" ? t("Ba hình đầu có 1, 3 và 6 chấm", "The first three patterns have 1, 3 and 6 dots") : t("Ba hình đầu có 1, 4 và 9 chấm", "The first three patterns have 1, 4 and 9 dots"))}" style="display:block;width:min(100%,760px);margin:auto">${panels}</svg></div>`;
  }

  art["j1-series-example-1"] = () => pairRow([1, 2, 3, 4, 5], 6, 15, 2);
  art["j1-series-example-2"] = () => pairRow([2, 4, 6, 8, 10], 12, 30, 2);
  art["j1-series-example-3"] = () => balanced(45, [7, 8, 9, 10, 11]);
  art["j1-series-example-4"] = () => balanced(40, [7, 9, 11, 13]);

  const pairArt = (id, values, pairSum, result, middle = null) => { art[id] = () => pairRow(values, pairSum, result, middle); };
  pairArt("j1-series-1a", [1, 3, 5, 7, 9], 10, 25, 2);
  pairArt("j1-series-1b", [7, 10, 13, 16, 19], 26, 65, 2);
  pairArt("j1-series-1c", [3, 6, 9, 12, 15, 18], 21, 63);
  pairArt("j1-series-1d", [3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 15, 75);
  pairArt("j1-series-2a", [1, 4, 7, 10, 13, 16], 17, 51);
  pairArt("j1-series-2b", [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 14, 77, 5);
  pairArt("j1-series-2c", [10, 20, 30, 40, 50], 60, 150, 2);
  pairArt("j1-series-2d", [1, 2, 3, 4, "…", 17, 18, 19, 20], 21, 210);
  pairArt("j1-series-7a", [20, 30, 40, 50, 60, 70, 80], 100, 350, 3);
  pairArt("j1-series-7b", [3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 24, 120);
  pairArt("j1-series-7c", [17, 16, 15, 14, "…", 6, 5, 4, 3], 20, 150, 4);
  pairArt("j1-series-7d", [11, 12, 13, 14, "…", 27, 28, 29, 30], 41, 410);
  pairArt("j1-series-12", [4, 7, 10, 13, 16, 19, 22, 25, 28, 31], 35, 175);
  pairArt("j1-series-extra-1", [6, 9, 12, 15, 18], 24, 60, 2);
  pairArt("j1-series-extra-3", [5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 55, 275);
  pairArt("j1-series-extra-5", [15, 18, 21, 24, 27, 30, 33, 36], 51, 204);

  const balancedArt = (id, total, values) => { art[id] = () => balanced(total, values); };
  balancedArt("j1-series-3", 24, [7, 8, 9]);
  balancedArt("j1-series-4", 50, [8, 9, 10, 11, 12]);
  balancedArt("j1-series-5", 54, [2, 3, 4, 5, 6, 7, 8, 9, 10]);
  balancedArt("j1-series-6", 63, [6, 7, 8, 9, 10, 11, 12]);
  balancedArt("j1-series-8", 27, [7, 9, 11]);
  balancedArt("j1-series-9", 45, [5, 7, 9, 11, 13]);
  balancedArt("j1-series-10", 63, [3, 5, 7, 9, 11, 13, 15]);
  balancedArt("j1-series-15", 56, [2, 4, 6, 8, 10, 12, 14]);
  balancedArt("j1-series-16", 64, [1, 3, 5, 7, 9, 11, 13, 15]);
  balancedArt("j1-series-17", 40, [7, 9, 11, 13]);
  balancedArt("j1-series-18", 40, [4, 6, 8, 10, 12]);
  balancedArt("j1-series-extra-2", 42, [13, 14, 15]);
  balancedArt("j1-series-extra-4", 70, [10, 12, 14, 16, 18]);

  art["j1-series-11"] = () => numberRow(t("Số ghế theo từng hàng", "Seats in each row"), [10, 12, 14, 16, 18, 20, 22, 24, 26, 28], 9, t("Mỗi hàng thêm 2 ghế", "Add 2 seats in each new row"));
  art["j1-series-13"] = () => dotSvg("triangle");
  art["j1-series-14"] = () => dotSvg("square");
})();
