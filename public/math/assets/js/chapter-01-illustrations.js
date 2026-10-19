(function registerChapterOneIllustrations() {
  "use strict";

  const out = (window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {});
  const ink = "#17345c";
  const isVi = () => document.documentElement.lang !== "en";
  const local = (vi, en) => isVi() ? vi : en;
  const wrap = (body, label, viewBox = "0 0 760 300") =>
    `<figure class="math-visual chapter-source-visual"><svg viewBox="${viewBox}" role="img" aria-label="${label}" style="font-family:Nunito,Arial,sans-serif">${body}</svg></figure>`;
  const text = (x, y, value, size = 22, weight = 900, fill = ink) =>
    `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" font-size="${size}" font-weight="${weight}" fill="${fill}">${value}</text>`;

  function numberSquare(x, values) {
    return `<g transform="translate(${x} 45)"><rect x="0" y="0" width="150" height="150" rx="8" fill="#fff" stroke="${ink}" stroke-width="5"/><path d="M75 0V150M0 75H150" stroke="${ink}" stroke-width="4"/>${values.map((value, index) => text(index % 2 * 75 + 37.5, Math.floor(index / 2) * 75 + 37.5, value)).join("")}</g>`;
  }

  function boxRows(rows, label) {
    const cells = rows.map((row, r) => row.map((value, c) => {
      const x = 145 + c * 122;
      const y = 30 + r * 72;
      return `<rect x="${x}" y="${y}" width="92" height="52" rx="7" fill="${c === 3 ? "#fff1b8" : "#edf6ff"}" stroke="${ink}" stroke-width="4"/>${text(x + 46, y + 28, value)}`;
    }).join("")).join("");
    return wrap(`${cells}<path d="M566 56h45" stroke="${ink}" stroke-width="4" stroke-linecap="round"/><path d="M566 128h45M566 200h45" stroke="${ink}" stroke-width="4" stroke-linecap="round"/>`, label, "0 0 760 255");
  }

  function circleDiagram(x, values) {
    const [tl, tr, bl, br] = values;
    return `<g transform="translate(${x} 126)"><circle r="84" fill="#fffdf6" stroke="${ink}" stroke-width="5"/><path d="M-84 0H84M0-84V84" stroke="${ink}" stroke-width="4"/>${text(-39, -38, tl)}${text(39, -38, tr)}${text(-39, 39, bl)}${text(39, 39, br, 24, 900, br === "?" ? "#d65050" : ink)}</g>`;
  }

  function rowTriangle(highlightRow) {
    const rows = [
      ["1"], ["2", "3"], ["4", "5", "6"], ["7", "8", "9", "10"],
      ["•", "•", "•", "•", "•"], ["•", "•", "•", "•", "•", "•"],
      ["•", "•", "•", "•", "•", "•", "•"], ["?", "?", "?", "?", "?", "?", "?", "?"],
    ];
    return wrap(rows.map((row, r) => {
      const y = 24 + r * 36;
      const active = r + 1 === highlightRow;
      const nodes = row.map((value, c) => {
        const x = 385 + (c - (row.length - 1) / 2) * 48;
        return `<circle cx="${x}" cy="${y}" r="14" fill="${active ? "#ffd36c" : "#eef6ff"}" stroke="${ink}" stroke-width="2"/>${text(x, y + 1, value, 14, 900)}`;
      }).join("");
      return `${text(88, y, `${local("Hàng", "Row")} ${r + 1}`, 15, 800, active ? "#c25c00" : "#61748f")}${nodes}`;
    }).join(""), `Consecutive numbers arranged in triangular rows, with row ${highlightRow} marked`, "0 0 760 305");
  }

  function patternTable() {
    const headers = ["A", "B", "C", "D", "E"];
    const rows = [
      ["1", "", "2", "", "3"],
      ["", "5", "", "4", ""],
      ["6", "", "7", "", "8"],
      ["", "10", "", "9", ""],
      ["11", "", "12", "", "13"],
      ["", "15", "", "14", ""],
    ];
    const startX = 170;
    const header = headers.map((h, c) => text(startX + c * 92, 30, h, 21)).join("");
    const cells = rows.map((row, r) => row.map((value, c) => {
      const x = startX - 36 + c * 92;
      const y = 50 + r * 38;
      return `<rect x="${x}" y="${y}" width="72" height="34" fill="${value ? "#fff5cf" : "#fff"}" stroke="#9eb2ce" stroke-width="2"/>${value ? text(x + 36, y + 18, value, 17, 900) : ""}`;
    }).join("")).join("");
    return wrap(`${header}${cells}${text(92, 68, `${local("Hàng", "Row")} 1`, 14, 800, "#61748f")}${text(92, 258, "⋮", 28, 900, "#61748f")}`, "Number table with columns A to E and the first six rows exactly as printed", "0 0 760 285");
  }

  out["pattern-1-pascal"] = () => {
    const rows = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], ["?", "?", "?", "?", "?", "?"]];
    return wrap(rows.map((row, r) => row.map((value, c) => {
      const x = 380 + (c - (row.length - 1) / 2) * 74;
      const y = 27 + r * 47;
      return `<circle cx="${x}" cy="${y}" r="20" fill="${r === 5 ? "#fff0ba" : "#e5f1ff"}" stroke="${ink}" stroke-width="3"/>${text(x, y + 1, value, 16)}`;
    }).join("")).join(""), "Pascal triangle with the complete first five rows and six blanks in the next row");
  };
  out["pattern-1-square-a"] = () => wrap(numberSquare(70, [3, 12, 11, 6]) + numberSquare(305, [7, 28, 14, 9]) + numberSquare(540, [6, "A", 12, "B"]), "Three two-by-two number squares copied from Question 3a", "0 0 760 240");
  out["pattern-1-square-b"] = () => wrap(numberSquare(70, [4, 11, 1, 8]) + numberSquare(305, [8, 6, 9, "A"]) + numberSquare(540, [10, 6, "B", 12]), "Three two-by-two number squares copied from Question 3b", "0 0 760 240");
  out["pattern-1-box-a"] = () => boxRows([[1, 2, 3, 6], [4, 5, 6, 15], [7, 8, 9, "?"]], "Three four-box rows for Question 4a");
  out["pattern-1-box-b"] = () => boxRows([[7, 4, 5, 15], [8, 6, 10, 20], [9, 5, 8, "?"]], "Three four-box rows for Question 4b");
  out["pattern-1-circle-a"] = () => wrap(circleDiagram(130, [2, 4, 3, 18]) + circleDiagram(380, [3, 2, 5, 25]) + circleDiagram(630, [4, 6, 3, "?"]), "The three quartered number circles from Question 5a", "0 0 760 255");
  out["pattern-1-circle-b"] = () => wrap(circleDiagram(130, [1, 16, 4, 3]) + circleDiagram(380, [2, 21, 3, 5]) + circleDiagram(630, [4, "?", 5, 6]), "The three quartered number circles from Question 5b", "0 0 760 255");
  out["pattern-1-number-triangle"] = () => {
    const rows = [[1], [2, 4], [3, 6, 9], [4, "?", "?", 16], [5, "?", 15, "?", 25], [6, "?", "?", 24, "?", "?"]];
    return wrap(rows.map((row, r) => row.map((value, c) => {
      const x = 380 + (c - (row.length - 1) / 2) * 78;
      const y = 28 + r * 46;
      return `<rect x="${x - 27}" y="${y - 18}" width="54" height="36" rx="8" fill="${value === "?" ? "#fff0ba" : "#e7f4ff"}" stroke="${ink}" stroke-width="3"/>${text(x, y + 1, value, 17)}`;
    }).join("")).join(""), "Six-row number triangle with all eight printed blanks");
  };
  out["pattern-1-row-triangle"] = () => rowTriangle(6);
  out["pattern-1-row-triangle-a"] = () => rowTriangle(6);
  out["pattern-1-row-triangle-b"] = () => rowTriangle(8);
  out["pattern-1-nine-times"] = () => wrap([["21", "189"], ["321", "2889"], ["4321", "38889"], ["54321", "?"], ["654321", "?"]].map((row, r) => `${text(275, 42 + r * 48, row[0], 23)}${text(380, 42 + r * 48, "× 9 =", 23)}${text(510, 42 + r * 48, row[1], 23, 900, row[1] === "?" ? "#d65050" : ink)}`).join(""), "The full multiplication pattern beginning with 21 times 9", "0 0 760 275");
  out["pattern-1-triangles"] = () => {
    const triangle = (x, values) => `<g transform="translate(${x} 22)"><path d="M95 0L0 180H190Z M48 90H142M48 90L95 180M142 90L95 180" fill="#fffdf7" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>${text(95, 31, values[0], 20)}${text(95, 112, values[3], 20)}${text(38, 154, values[1], 20)}${text(152, 154, values[2], 20)}</g>`;
    return wrap(triangle(45, [2, 5, 6, 4]) + triangle(285, [4, 7, 12, 16]) + triangle(525, [6, "?", 24, 18]), "All three number triangles from Question 12", "0 0 760 230");
  };
  out["pattern-1-table"] = patternTable;
  out["pattern-1-table-a"] = patternTable;
  out["pattern-1-table-b"] = patternTable;
})();
