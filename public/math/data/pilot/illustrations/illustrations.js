(function registerPilotIllustrations() {
  "use strict";

  const wrap = (body, label) =>
    `<div class="math-visual"><svg viewBox="0 0 560 190" role="img" aria-label="${label}">${body}</svg></div>`;
  const line = (path) => `<path class="math-line" d="${path}"/>`;
  const unit = (x, y, color = "coral") =>
    `<rect class="bar-unit ${color}" x="${x}" y="${y}" width="58" height="42" rx="8"/>`;

  window.PILOT_ILLUSTRATIONS = {
    "sum-12-to-28": () =>
      '<figure class="math-visual image-illustration"><img src="data/pilot/illustrations/images/sum-12-to-28.svg" alt="Pairing the exact terms from 12 through 28" /></figure>',
    "multiples-5-to-100": () =>
      '<figure class="math-visual image-illustration"><img src="data/pilot/illustrations/images/multiples-5-to-100.svg" alt="The exact multiples of 5 from 5 through 100 paired to make 105" /></figure>',
    "staircase-25-rows": () =>
      '<figure class="math-visual image-illustration"><img src="data/pilot/illustrations/images/staircase-25-rows.svg" alt="A 25-row staircase beginning with 3, 5, 7 and ending with 51 blocks" /></figure>',
    "growing-differences": () =>
      wrap(
        `${line("M55 145H505")}${[4, 7, 13, 22, 34, "?"].map((value, index) => `<circle class="number-node" cx="${65 + index * 86}" cy="105" r="27"/><text class="number-text" x="${65 + index * 86}" y="112">${value}</text>${index < 5 ? `<text class="jump-text" x="${108 + index * 86}" y="60">+${3 + index * 3}</text><path class="jump-arrow" d="M88 ${92 - index * 2} Q108 40 128 ${92 - index * 2}" transform="translate(${index * 86} 0)"/>` : ""}`).join("")}`,
        "A number pattern with growing differences",
      ),
    "two-lane-pattern": () =>
      wrap(
        `<text class="lane-label" x="38" y="62">${document.documentElement.lang === "vi" ? "VỊ TRÍ LẺ" : "ODD"}</text><text class="lane-label" x="38" y="140">${document.documentElement.lang === "vi" ? "VỊ TRÍ CHẴN" : "EVEN"}</text>${[2, 4, 6, 8, 10].map((n, i) => `<circle class="number-node blue" cx="${150 + i * 82}" cy="55" r="24"/><text class="number-text" x="${150 + i * 82}" y="62">${n}</text>`).join("")}${[5, 10, 15, 20].map((n, i) => `<circle class="number-node" cx="${150 + i * 82}" cy="135" r="24"/><text class="number-text" x="${150 + i * 82}" y="142">${n}</text>`).join("")}`,
        "Odd and even positions separated into two lanes",
      ),
    "pattern-machine": () =>
      wrap(
        `${[3, 8, 18, 38, 78, 158].map((n, i) => `<rect class="machine-box" x="${20 + i * 90}" y="70" width="60" height="50" rx="12"/><text class="number-text" x="${50 + i * 90}" y="101">${n}</text>${i < 5 ? `<text class="jump-text" x="${95 + i * 90}" y="55">×2+2</text>` : ""}`).join("")}`,
        "A multiply by two then add two pattern machine",
      ),
    "gauss-pairs": () =>
      wrap(
        `${[1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => `<circle class="number-node ${i > 3 ? "blue" : ""}" cx="${55 + i * 64}" cy="95" r="23"/><text class="number-text" x="${55 + i * 64}" y="102">${n}</text>`).join("")}${line("M55 55Q280 5 503 55 M119 65Q280 28 439 65 M183 75Q280 50 375 75 M247 82Q280 70 311 82")}`,
        "Numbers paired from the outside toward the middle",
      ),
    "sum-staircase": () =>
      wrap(
        `${Array.from({ length: 8 }, (_, row) => Array.from({ length: row + 1 }, (_, col) => `<rect class="stair-block" x="${45 + col * 38}" y="${145 - row * 18}" width="34" height="16" rx="3"/>`).join("")).join("")}<text class="visual-note" x="410" y="95">3, 5, 7, …</text>`,
        "A growing staircase of blocks",
      ),
    "bar-difference": () =>
      wrap(`${unit(120, 45, "blue")}${unit(178, 45, "blue")}${unit(236, 45, "coral")}${unit(120, 115, "blue")}${unit(178, 115, "blue")}<text class="bar-label" x="70" y="72">Mai</text><text class="bar-label" x="70" y="142">An</text><text class="visual-note" x="280" y="72">+18</text>`, "A bar model showing a difference of 18"),
    "bar-ratio": () =>
      wrap(`${[0, 1, 2].map((i) => unit(155 + i * 58, 45, "coral")).join("")}${unit(155, 115, "blue")}<text class="bar-label" x="95" y="72">RED</text><text class="bar-label" x="95" y="142">BLUE</text>`, "A three-to-one bar model"),
    "bar-three-groups": () =>
      wrap(`${[0, 1].map((i) => unit(175 + i * 58, 25, "coral")).join("")}${unit(175, 80, "blue")}${[0, 1, 2].map((i) => unit(175 + i * 58, 135, "gold")).join("")}<text class="bar-label" x="105" y="52">ART</text><text class="bar-label" x="105" y="107">CHESS</text><text class="bar-label" x="105" y="162">MUSIC</text>`, "A two-to-one-to-three bar model"),
  };
})();
