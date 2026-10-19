(function registerPilotIllustrations() {
  "use strict";

  const wrap = (body, label) =>
    `<div class="math-visual"><svg viewBox="0 0 560 190" role="img" aria-label="${label}">${body}</svg></div>`;
  const line = (path) => `<path class="math-line" d="${path}"/>`;
  const unit = (x, y, color = "coral") =>
    `<rect class="bar-unit ${color}" x="${x}" y="${y}" width="58" height="42" rx="8"/>`;
  const isVi = () => document.documentElement.lang === "vi";
  const local = (vi, en) => isVi() ? vi : en;
  const labelledSvg = (body, label, viewBox = "0 0 800 340") =>
    `<figure class="math-visual image-illustration"><svg viewBox="${viewBox}" role="img" aria-label="${label}" style="font-family:Nunito,Arial,sans-serif">${body}</svg></figure>`;
  const svgText = (x, y, value, size = 17, anchor = "middle") => `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" font-weight="800" fill="#183153">${value}</text>`;

  const sumPairsVisual = () => {
    const pairs = [[12,28],[13,27],[14,26],[15,25],[16,24],[17,23],[18,22],[19,21]];
    return labelledSvg(
      `<rect width="800" height="310" rx="22" fill="#fffdf8"/>${svgText(400,32,local("Ghép số đầu với số cuối","Pair first and last"),18)}` +
      pairs.map(([a,b],i)=>{const x=36+(i%4)*190,y=52+Math.floor(i/4)*52;return `<rect x="${x}" y="${y}" width="160" height="40" rx="13" fill="${i%2?"#e9f1ff":"#fff0ec"}"/>${svgText(x+80,y+26,`${a} + ${b} = 40`,16)}`}).join("") +
      Array.from({length:17},(_,i)=>{const n=12+i,x=64+i*42;return `<circle cx="${x}" cy="205" r="20" fill="${n===20?"#ffc857":i%2?"#4d8cf5":"#5ac8a8"}" stroke="#183153" stroke-width="2"/>${svgText(x,211,n,14)}`}).join("") +
      `<path d="M64 245Q400 292 736 245" fill="none" stroke="#183153" stroke-width="2.5"/>${svgText(400,282,local("8 cặp × 40 + 20","8 pairs × 40 + 20"),15)}`,
      local("Ghép các số từ 12 đến 28", "Pairing the integers from 12 to 28"),
      "0 0 800 310",
    );
  };

  const multiplesVisual = () => {
    const pairs = Array.from({length:10},(_,i)=>[5*(i+1),100-5*i]);
    return labelledSvg(
      `<rect width="800" height="360" rx="22" fill="#fffdf8"/>${svgText(400,30,"5 + 10 + 15 + … + 100",18)}` +
      pairs.map(([a,b],i)=>{const x=i%2?425:55,y=53+Math.floor(i/2)*52;return `<rect x="${x}" y="${y}" width="320" height="43" rx="13" fill="${i%2?"#e9f1ff":"#fff0ec"}" stroke="#183153" stroke-width="2"/>${svgText(x+160,y+28,`${a} + ${b} = 105`,17)}`}).join("") +
      `<rect x="235" y="316" width="330" height="32" rx="12" fill="#eafaf4" stroke="#5ac8a8" stroke-width="2"/>${svgText(400,338,local("10 cặp × 105 = 1050","10 pairs × 105 = 1050"),15)}`,
      local("Ghép các bội của 5 từ 5 đến 100", "Pairing multiples of five from 5 to 100"),
    );
  };

  const staircaseVisual = () => {
    const rows = [3,5,7,9];
    return labelledSvg(
      `<rect width="800" height="340" rx="22" fill="#fffdf8"/>${svgText(400,30,local("25 hàng","25 rows"),18)}` +
      rows.map((count,index)=>{const y=54+index*40,start=400-count*16;return `${svgText(130,y+17,`${local("Hàng","Row")} ${index+1}`,14,"end")}${Array.from({length:count},(_,i)=>`<rect x="${start+i*32}" y="${y}" width="28" height="24" rx="5" fill="#ffc857" stroke="#183153" stroke-width="1.7"/>`).join("")}${svgText(620,y+17,`${count} ${local("khối","blocks")}`,13,"start")}`}).join("") +
      svgText(400,230,"⋮",25) + svgText(130,270,`${local("Hàng","Row")} 25`,14,"end") +
      Array.from({length:51},(_,i)=>`<rect x="${145+i*10}" y="250" width="9" height="18" fill="#78adff" stroke="#183153" stroke-width="1"/>`).join("") +
      svgText(700,270,`51 ${local("khối","blocks")}`,13,"start") +
      `<rect x="220" y="293" width="360" height="34" rx="13" fill="#eafaf4" stroke="#5ac8a8" stroke-width="2"/>${svgText(400,315,local("3, 5, 7, …, 51 · số hạng thứ 25","3, 5, 7, …, 51 · 25th term"),15)}`,
      local("Cầu thang 25 hàng bắt đầu với 3, 5, 7 khối", "A 25-row staircase beginning with 3, 5 and 7 blocks"),
    );
  };

  window.PILOT_ILLUSTRATIONS = {
    "sum-12-to-28": sumPairsVisual,
    "multiples-5-to-100": multiplesVisual,
    "staircase-25-rows": staircaseVisual,
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
