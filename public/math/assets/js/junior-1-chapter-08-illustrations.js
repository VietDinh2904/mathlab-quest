(function registerJuniorOneChapterEightIllustrations() {
  "use strict";

  const art = window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {};
  const isVi = () => document.documentElement.lang !== "en";
  const local = (vi, en) => isVi() ? vi : en;
  const wrap = (title, body) => `<div class="book-visual"><div class="book-visual-title">${title}</div>${body}</div>`;
  const sequence = (items) => wrap(
    local("Dãy số trong đề", "Number pattern in the question"),
    `<div class="pattern-strip" style="justify-content:center;flex-wrap:wrap">${items.map((item, index) => `<span style="min-width:56px;${item === "?" ? "background:#fff0c9;color:#17365d;border:2px dashed #f0af32" : ""}">${item}</span>${index < items.length - 1 ? "<b>→</b>" : ""}`).join("")}</div>`,
  );
  const rowPatterns = (rows) => wrap(
    local("So sánh từng hàng", "Compare the rows"),
    `<div style="display:grid;gap:12px;justify-content:center">${rows.map((row) => `<div style="display:grid;grid-template-columns:repeat(${row.length},72px);gap:8px">${row.map((value) => `<span style="display:grid;place-items:center;min-height:56px;border:3px solid #1c3f6b;border-radius:14px;background:${value === "?" ? "#fff0c9" : "#eef6ff"};font-size:1.25rem;font-weight:900;color:#17365d">${value}</span>`).join("")}</div>`).join("")}</div>`,
  );
  const treePatterns = (trees) => wrap(
    local("Ba sơ đồ cây trong đề", "Three tree diagrams in the question"),
    `<svg viewBox="0 0 780 235" role="img" aria-label="${local("Ba sơ đồ cây có số còn thiếu", "Three tree diagrams with a missing number")}">${trees.map(([top, centre, left, right], index) => {
      const x = 130 + index * 260;
      const node = (cx, cy, value) => `<circle cx="${cx}" cy="${cy}" r="30" fill="${value === "?" ? "#fff0c9" : "#eef6ff"}" stroke="#1c3f6b" stroke-width="4"/><text x="${cx}" y="${cy + 8}" text-anchor="middle" font-size="23" font-weight="900" fill="#17365d">${value}</text>`;
      return `<path d="M${x} 50V94M${x} 120L${x - 54} 174M${x} 120L${x + 54} 174" fill="none" stroke="#78a66a" stroke-width="4"/>${node(x, 34, top)}${node(x, 106, centre)}${node(x - 58, 190, left)}${node(x + 58, 190, right)}`;
    }).join("")}</svg>`,
  );
  const squarePatterns = (squares) => wrap(
    local("Các ô vuông trong đề", "Square patterns in the question"),
    `<div style="display:flex;justify-content:center;gap:34px;flex-wrap:wrap">${squares.map((values) => `<div style="display:grid;grid-template-columns:repeat(2,70px);border:3px solid #1c3f6b;border-radius:10px;overflow:hidden">${values.map((value, index) => `<span style="display:grid;place-items:center;height:62px;background:${value === "A" || value === "B" || value === "C" || value === "?" ? "#fff0c9" : "#eef6ff"};border-${index % 2 === 0 ? "right" : "left"}:1px solid #1c3f6b;border-${index < 2 ? "bottom" : "top"}:1px solid #1c3f6b;font-size:1.25rem;font-weight:900;color:#17365d">${value}</span>`).join("")}</div>`).join("")}</div>`,
  );
  const pyramid = (rows) => wrap(
    local("Tam giác số trong đề", "Number triangle in the question"),
    `<div style="display:grid;gap:10px;justify-items:center">${rows.map((row) => `<div style="display:flex;gap:12px;justify-content:center">${row.map((value) => `<span style="display:grid;place-items:center;width:54px;height:45px;border-radius:12px;background:${value === "?" ? "#fff0c9" : "#eaf4ff"};border:2px solid ${value === "?" ? "#f0af32" : "#1c3f6b"};font-weight:900;color:#17365d">${value}</span>`).join("")}</div>`).join("")}</div>`,
  );
  const circleGrid = (groups, sectors = 4) => wrap(
    local("Các hình tròn trong đề", "Circle patterns in the question"),
    `<div style="display:flex;justify-content:center;gap:36px;flex-wrap:wrap">${groups.map((values) => sectors === 3
      ? `<svg viewBox="0 0 150 150" style="width:150px"><circle cx="75" cy="75" r="62" fill="#f8fbff" stroke="#1c3f6b" stroke-width="4"/><path d="M75 75V13M75 75L21 106M75 75L129 106" stroke="#1c3f6b" stroke-width="3"/><text x="47" y="58" text-anchor="middle" font-size="22" font-weight="900" fill="#17365d">${values[0]}</text><text x="103" y="58" text-anchor="middle" font-size="22" font-weight="900" fill="#17365d">${values[1]}</text><text x="75" y="116" text-anchor="middle" font-size="22" font-weight="900" fill="#17365d">${values[2]}</text></svg>`
      : `<svg viewBox="0 0 150 150" style="width:150px"><circle cx="75" cy="75" r="62" fill="#f8fbff" stroke="#1c3f6b" stroke-width="4"/><path d="M13 75H137M75 13V137" stroke="#1c3f6b" stroke-width="3"/>${[[47,57],[103,57],[47,107],[103,107]].map(([x,y],i)=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="22" font-weight="900" fill="#17365d">${values[i]}</text>`).join("")}</svg>`).join("")}</div>`,
  );
  const columns = (groups) => wrap(
    local("Ba cột số trong đề", "Three number columns in the question"),
    `<div style="display:flex;justify-content:center;gap:44px">${groups.map((values) => `<div style="display:grid;border:3px solid #1c3f6b;border-radius:10px;overflow:hidden">${values.map((value,index)=>`<span style="display:grid;place-items:center;width:82px;height:58px;background:${/[A-Z?]/.test(String(value)) ? "#fff0c9" : "#eef6ff"};border-top:${index ? "2px solid #1c3f6b" : "0"};font-size:1.25rem;font-weight:900;color:#17365d">${value}</span>`).join("")}</div>`).join("")}</div>`,
  );
  const wheel = (values) => wrap(
    local("Bánh xe tám phần trong đề", "Eight-part wheel in the question"),
    `<svg viewBox="0 0 360 360" role="img" aria-label="${local("Bánh xe tám phần", "Eight-part wheel")}" style="max-height:330px"><circle cx="180" cy="180" r="144" fill="#f8fbff" stroke="#1c3f6b" stroke-width="5"/>${Array.from({length:8},(_,i)=>{const angle=(-90+i*45)*Math.PI/180;const x=180+144*Math.cos(angle);const y=180+144*Math.sin(angle);return `<line x1="180" y1="180" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#1c3f6b" stroke-width="3"/>`;}).join("")}${values.map((value,i)=>{const angle=(-67.5+i*45)*Math.PI/180;const x=180+100*Math.cos(angle);const y=180+100*Math.sin(angle)+8;return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="middle" font-size="24" font-weight="900" fill="#17365d">${value}</text>`;}).join("")}<circle cx="180" cy="180" r="8" fill="#ff7568"/></svg>`,
  );

  const sequenceSets = {
    "1a":["4","8","12","16","20","?","?"], "1b":["1","2","4","?","16","?","64"],
    "1c":["1","1","2","3","5","?","?"], "1d":["2","3","5","8","13","?","?"],
    "1e":["3","6","9","?","15","?","?"], "1f":["1","4","5","?","14","23","?"],
    "1g":["2","3","4","6","?","?"], "1h":["3","2","5","4","?","?"],
    "1i":["4","5","8","13","?","?"], "1j":["2","4","8","14","?","?"],
    "8a":["1","7","19","?","61","?"], "8b":["?","?","18","?","30","?"],
  };
  Object.entries(sequenceSets).forEach(([id, values]) => { art[`j1-pattern-${id}`] = () => sequence(values); });

  art["j1-pattern-2a"] = () => treePatterns([[3,2,10,5],[2,2,8,4],[3,6,"?",3]]);
  art["j1-pattern-2b"] = () => treePatterns([[7,2,14,5],[5,6,15,4],[8,"?",11,2]]);
  art["j1-pattern-2c"] = () => treePatterns([[17,2,3,5],[28,4,4,6],[40,5,7,"?"]]);
  art["j1-pattern-3"] = () => wrap(local("Ba dãy cần so sánh", "Three patterns to compare"), `<div style="display:grid;gap:14px">${[["a","2, 4, 6, 10, 16, …"],["b","1, 2, 4, 8, 16, …"],["c","1, 3, 4, 7, 11, 18, …"]].map(([label,values])=>`<div style="display:flex;align-items:center;gap:14px;padding:12px 18px;border:2px solid #d5e2f1;border-radius:14px;background:#fff"><b style="display:grid;place-items:center;width:36px;height:36px;border-radius:50%;background:#4c8df6;color:white">${label}</b><span style="font-size:1.15rem;font-weight:800;color:#17365d">${values}</span></div>`).join("")}</div>`);

  art["j1-pattern-4a"] = () => squarePatterns([[8,4,6,2],[11,9,10,"A"],[12,5,"B",8]]);
  art["j1-pattern-4b"] = () => squarePatterns([[17,4,11,7],[19,5,"A",9],[21,4,15,"B"]]);
  art["j1-pattern-4c"] = () => squarePatterns([[20,5,3,8],["A",6,4,10],[24,7,5,"B"]]);
  art["j1-pattern-5"] = () => pyramid([[1],[2,4],[3,6,9],[4,8,"?",16],["?","?",15,20,"?"]]);
  art["j1-pattern-6"] = () => pyramid([[1],[2,3],[6,5,4],[7,"?","?",10],[15,14,"?","?",11]]);
  art["j1-pattern-7a"] = () => rowPatterns([[4,3,10],[5,2,8],[7,"?",26]]);
  art["j1-pattern-7b"] = () => rowPatterns([[1,2,9],[3,2,15],["?",5,27]]);
  art["j1-pattern-9a"] = () => circleGrid([[7,4,8,6],[9,3,7,6],[5,6,"?",10]]);
  art["j1-pattern-9b"] = () => circleGrid([[7,8,5],[6,12,2],[8,3,"?"]],3);
  art["j1-pattern-9c"] = () => circleGrid([[15,13,9,8],[17,6,9,13],[18,10,3,"?"]]);
  art["j1-pattern-10a"] = () => columns([[3,8,13],[6,"A",18],[9,16,"B"]]);
  art["j1-pattern-10b"] = () => columns([[8,12,16],[13,"A",23],[18,24,"B"]]);
  art["j1-pattern-11a"] = () => wheel(["A",7,36,20,3,28,"B",5]);
  art["j1-pattern-11b"] = () => wheel([12,18,7,30,"B",42,"A",6]);
  art["j1-pattern-11c"] = () => wheel([18,9,12,15,"B",27,4,"A"]);
  art["j1-pattern-11d"] = () => wheel([2,8,"A",20,26,"B",38,"C"]);
  art["j1-pattern-12a"] = () => rowPatterns([[6,4,8],[7,4,12],["A",3,24]]);
  art["j1-pattern-12b"] = () => rowPatterns([[2,6,14],[3,5,19],[4,"B",34]]);

  art["j1-pattern-example-1"] = () => wrap(local("Bốn kiểu quy luật khác nhau", "Four different pattern rules"), `<div style="display:grid;gap:10px">${[["1","3","5","7","?","?"],["2","3","5","8","?","?"],["1","4","9","16","?","?"],["2","5","11","23","?","?"]].map((row)=>`<div class="pattern-strip" style="justify-content:center">${row.map(x=>`<span>${x}</span>`).join("")}</div>`).join("")}</div>`);
  art["j1-pattern-example-2"] = () => treePatterns([[5,7,4,2],[6,1,3,8],[7,"?",4,3]]);
  art["j1-pattern-example-3"] = () => squarePatterns([[12,3,10,5],[8,3,6,5],[14,4,"A",6],[16,2,8,"B"],[13,4,7,2],[12,5,3,4],[18,8,"C",4],[22,3,12,"D"]]);
  art["j1-pattern-example-4"] = () => rowPatterns([[2,2,8],[3,2,10],[5,3,"A"],[6,4,4],[8,3,10],[10,3,"B"]]);
  art["j1-pattern-example-5"] = () => pyramid([[1],[2,3],[4,5,6],["?","?",9,10],[11,12,13,"?","?"]]);

  art["j1-pattern-extra-1"] = () => sequence(["5","10","15","20","?","?"]);
  art["j1-pattern-extra-2"] = () => sequence(["2","6","18","?","?"]);
  art["j1-pattern-extra-3"] = () => sequence(["1","3","6","10","15","?"]);
  art["j1-pattern-extra-4"] = () => circleGrid([[8,7,6,"?"]]);
  art["j1-pattern-extra-5"] = () => sequence(["2","10","4","20","6","?","?"]);
})();
