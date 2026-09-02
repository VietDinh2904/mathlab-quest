(function registerChapterTwelveIllustrations() {
  "use strict";

  const illustrations = (window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {});
  const wrap = (body, label, caption = "Arrange the given clues before solving.") =>
    `<figure class="math-visual logic-visual" role="img" aria-label="${label}"><div style="display:grid;gap:14px;justify-items:center;width:100%;color:#17345c">${body}</div><figcaption>${caption}</figcaption></figure>`;
  const pills = (items) => `<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:10px">${items.map((x) => `<span style="min-width:46px;padding:9px 13px;border:2px solid #17345c;border-radius:14px;background:#fff7df;text-align:center;font-weight:800">${x}</span>`).join("")}</div>`;
  const equations = (rows) => rows.map((row) => `<div style="font-size:clamp(1.15rem,3vw,1.7rem);font-weight:900;letter-spacing:.08em">${row}</div>`).join("");
  const table = (cols, rows) => `<div class="assumption-table" style="--columns:${cols.length};max-width:720px;width:100%">${cols.map((x) => `<strong>${x}</strong>`).join("")}${rows.flatMap((row) => row.map((x) => `<span>${x}</span>`)).join("")}</div>`;

  illustrations["logic-12-1"] = () => wrap(`<div style="display:grid;grid-template-columns:repeat(2,auto);gap:12px 34px;align-items:center">${pills(["Jeff", "Clive"])}${pills(["Tom", "Joseph"])}<strong style="grid-column:1/-1">Jeff → father of Tom → brother of Joseph</strong></div>`, "Family relationship clues for Tom, Joseph, Jeff and Clive");
  illustrations["logic-12-2"] = () => wrap(table(["", "Apple", "Peach", "Orange"], [["Paul", "", "", ""], ["Daddy", "", "", "×"], ["Granny", "×", "", "×"]]), "Fruit preference elimination table");
  [3, 4, 5, 9, 11, 12, 14, 16].forEach((n) => {
    const rows = {
      3: ["○ + ◆ = 24", "◆ = ○ + ○"],
      4: ["○ + ○ + ○ + □ + □ = 41", "○ + □ = 16"],
      5: ["◆ + □ = 48", "□ = ◆ + ◆ + ◆"],
      9: ["□ + ✳ + ✳ = 16", "□ + □ + ✳ = 14"],
      11: ["□ + ○ = 20", "□ + □ + □ = ○ + ○"],
      12: ["○ + △ = 26", "△ + □ = 30", "○ + □ = 28"],
      14: ["○ + ◆ = 28", "○ + ○ + ◆ + ◆ + ◆ = 62"],
      16: ["✳ + ✳ = □ + □ + □", "□ + □ + □ = ○ + ○ + ○ + ○", "✳ + □ + ○ + ○ = 32"],
    }[n];
    illustrations[`logic-12-${n}`] = () => wrap(equations(rows), `Symbol equations for Chapter 12 Practice ${n}`, "Use only the equations shown in the question.");
  });
  illustrations["logic-12-6"] = () => wrap(table(["", "India", "Vietnam", "Malaysia"], [["Kurt", "×", "", ""], ["Teddy", "×", "", "×"], ["Carson", "", "", ""]]), "Birthplace elimination table");
  illustrations["logic-12-7"] = () => wrap(`<div style="position:relative;width:min(760px,92%);padding:34px 0 8px"><div style="height:4px;background:#17345c"></div><div style="display:flex;justify-content:space-between;margin-top:-15px">${["Kelly 0 m", "Jolene 3 m", "Justin 5 m", "Patrick 9 m", "Colin 15 m"].map((x) => `<span style="display:grid;justify-items:center;gap:7px;font-weight:800"><i style="width:25px;height:25px;border-radius:50%;background:#ffbd4a;border:3px solid #17345c"></i>${x}</span>`).join("")}</div></div>`, "Straight queue distances from Kelly");
  illustrations["logic-12-8"] = () => wrap(pills([2, 4, 6, 8, 10, 12, 14]), "Seven numbered cards", "Choose two different cards for each child; do not reuse a card.");
  illustrations["logic-12-10"] = () => wrap(`<div style="display:grid;grid-template-columns:repeat(3,minmax(150px,1fr));gap:10px;width:100%">${["If Robert ate it", "If Sarah ate it", "If Tony ate it"].map((title) => `<div>${table([title, "Lie", "Truth"], [["Robert", "", ""], ["Sarah", "", ""], ["Tony", "", ""]])}</div>`).join("")}</div>`, "Three truth and lie tables for the cheesecake suspects", "Exactly one statement must be true.");
  illustrations["logic-12-13"] = () => wrap(`${pills(["C", "A", "D", "B"])}<div style="font-weight:800">C is left of A · A is left of B · C is left of D · D is left of B</div>`, "Four seats for A B C and D", "Move A and D while keeping every stated left-right relation.");
  illustrations["logic-12-15"] = () => wrap(table(["", "Dentist", "Teacher", "Driver"], [["William", "", "×", ""], ["Frederick", "", "", "×"], ["Jeffrey", "", "×", ""]]), "Occupation elimination table");
})();
