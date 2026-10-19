(function registerPdfIllustrations() {
  "use strict";

  const illustrations = (window.PILOT_ILLUSTRATIONS =
    window.PILOT_ILLUSTRATIONS || {});

  const wrap = (body, label, viewBox = "0 0 640 250") =>
    `<div class="math-visual"><svg viewBox="${viewBox}" role="img" aria-label="${label}">${body}</svg></div>`;

  function numberSquare(x, values, label) {
    const size = 66;
    return `<g transform="translate(${x} 48)"><text class="diagram-title" x="${size}" y="-16">${label}</text><rect class="diagram-shape" x="0" y="0" width="${size * 2}" height="${size * 2}" rx="9"/><path class="diagram-shape" d="M${size} 0V${size * 2} M0 ${size}H${size * 2}"/>${values
      .map((value, index) => {
        const column = index % 2;
        const row = Math.floor(index / 2);
        return `<text class="diagram-number" x="${size / 2 + column * size}" y="${size / 2 + row * size + 7}">${value}</text>`;
      })
      .join("")}</g>`;
  }

  function numberCircle({ left, right, middle, bottom }) {
    return wrap(
      `<circle class="diagram-shape" cx="320" cy="120" r="88"/><path class="diagram-shape soft" d="M245 120H395 M320 32V208"/><circle class="diagram-value" cx="245" cy="120" r="29"/><circle class="diagram-value blue" cx="395" cy="120" r="29"/><circle class="diagram-value gold" cx="320" cy="196" r="29"/><circle class="diagram-value center" cx="320" cy="120" r="33"/><text class="diagram-number light" x="245" y="127">${left}</text><text class="diagram-number light" x="395" y="127">${right}</text><text class="diagram-number" x="320" y="203">${bottom}</text><text class="diagram-number light" x="320" y="127">${middle}</text>`,
      "Number circle with four values in their exact positions",
    );
  }

  function interleavedPattern(values, oddRule, evenRule) {
    const gap = 82;
    const start = 72;
    return wrap(
      `${values.map((value, index) => `<circle class="diagram-value ${index % 2 ? "blue" : "gold"}" cx="${start + index * gap}" cy="125" r="27"/><text class="diagram-number${index % 2 ? " light" : ""}" x="${start + index * gap}" y="132">${value}</text>`).join("")}` +
      `<path class="diagram-shape soft" d="M${start} 88 Q${start+gap} 32 ${start+2*gap} 88 M${start+2*gap} 88 Q${start+3*gap} 32 ${start+4*gap} 88 M${start+4*gap} 88 Q${start+5*gap} 32 ${start+6*gap} 88"/>` +
      `<path class="diagram-shape" d="M${start+gap} 165 Q${start+2*gap} 220 ${start+3*gap} 165 M${start+3*gap} 165 Q${start+4*gap} 220 ${start+5*gap} 165"/>` +
      `<text class="visual-note" x="320" y="38">${oddRule}</text><text class="visual-note" x="320" y="235">${evenRule}</text>`,
      "Two interleaved number sequences shown in their exact positions",
      "0 0 640 250",
    );
  }

  function threeSectorCircle(cx, topLeft, topRight, bottom, label) {
    return `<g><text class="diagram-title" x="${cx}" y="24">${label}</text><circle class="diagram-shape" cx="${cx}" cy="120" r="74"/><path class="diagram-shape soft" d="M${cx} 120V46M${cx} 120L${cx-64} 157M${cx} 120L${cx+64} 157"/><text class="diagram-number" x="${cx-30}" y="102">${topLeft}</text><text class="diagram-number" x="${cx+30}" y="102">${topRight}</text><text class="diagram-number" x="${cx}" y="168">${bottom}</text></g>`;
  }

  illustrations["example-pattern-2a"] = () => interleavedPattern([24,3,21,6,18,"?","?"], "−3", "+3");
  illustrations["example-pattern-2b"] = () => interleavedPattern([8,1,10,2,12,"?","?"], "+2", "+1");
  illustrations["example-pattern-2c"] = () => interleavedPattern([28,2,24,4,20,"?","?"], "−4", "+2");
  illustrations["example-pattern-2d"] = () => interleavedPattern([1,8,3,10,5,12,"?","?"], "+2", "+2");
  illustrations["example-circle-3a"] = () => wrap(
    threeSectorCircle(110,5,12,10,"1") + threeSectorCircle(320,8,18,16,"2") + threeSectorCircle(530,"A","B",40,"3"),
    "Three exact number circles for Example 3(a)",
    "0 0 640 220",
  );
  illustrations["example-circle-3b"] = () => wrap(
    threeSectorCircle(110,18,12,15,"1") + threeSectorCircle(320,24,16,20,"2") + threeSectorCircle(530,"A","B",10,"3"),
    "Three exact number circles for Example 3(b)",
    "0 0 640 220",
  );

  illustrations.pascal = () => {
    const rows = [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      ["?", "?", "?", "?", "?", "?"],
    ];
    const nodes = rows
      .flatMap((row, rowIndex) =>
        row.map((value, columnIndex) => {
          const gap = 65;
          const x = 320 + (columnIndex - (row.length - 1) / 2) * gap;
          const y = 27 + rowIndex * 42;
          return `<circle class="pascal-node ${rowIndex === 5 ? "missing" : ""}" cx="${x}" cy="${y}" r="18"/><text class="pascal-text" x="${x}" y="${y + 6}">${value}</text>`;
        }),
      )
      .join("");
    return wrap(nodes, "Pascal triangle through row five with six blanks in the next row");
  };

  illustrations.squareA = () =>
    wrap(
      `${numberSquare(48, [3, 12, 11, 6], "1")}${numberSquare(254, [7, 28, 14, 9], "2")}${numberSquare(460, [6, "A", 12, "B"], "3")}`,
      "Three two-by-two number squares: 3 12 11 6; 7 28 14 9; and 6 A 12 B",
      "0 0 640 230",
    );

  illustrations.squareB = () =>
    wrap(
      `${numberSquare(48, [4, 11, 1, 8], "1")}${numberSquare(254, [8, 6, 9, "A"], "2")}${numberSquare(460, [10, 6, "B", 12], "3")}`,
      "Three two-by-two number squares: 4 11 1 8; 8 6 9 A; and 10 6 B 12",
      "0 0 640 230",
    );

  illustrations.circleA = () =>
    numberCircle({ left: 4, right: 6, middle: "?", bottom: 3 });

  illustrations.circleB = () =>
    numberCircle({ left: 4, right: "?", middle: 5, bottom: 6 });

  illustrations.numtri = () => {
    const rows = [
      [1],
      [2, 4],
      [3, 6, 9],
      [4, "?", "?", 16],
      [5, "?", 15, "?", 25],
      [6, "?", "?", 24, "?", "?"],
    ];
    return wrap(
      rows
        .map(
          (row, rowIndex) =>
            `<g transform="translate(0 ${12 + rowIndex * 39})">${row
              .map((value, columnIndex) => {
                const x = 320 + (columnIndex - (row.length - 1) / 2) * 68;
                return `<rect class="number-triangle-cell ${value === "?" ? "missing" : ""}" x="${x - 23}" y="0" width="46" height="31" rx="9"/><text class="number-triangle-text" x="${x}" y="22">${value}</text>`;
              })
              .join("")}</g>`,
        )
        .join(""),
      "Number triangle with six rows and eight missing entries",
      "0 0 640 255",
    );
  };

  illustrations.triangle = () =>
    wrap(
      `<path class="diagram-shape" d="M320 20L100 220H540Z M210 120H430 M210 120L320 220 M430 120L320 220"/><circle class="diagram-value blue" cx="320" cy="49" r="27"/><circle class="diagram-value center" cx="320" cy="145" r="29"/><circle class="diagram-value gold" cx="163" cy="195" r="27"/><circle class="diagram-value" cx="477" cy="195" r="27"/><text class="diagram-number light" x="320" y="56">6</text><text class="diagram-number light" x="320" y="152">18</text><text class="diagram-number" x="163" y="202">?</text><text class="diagram-number light" x="477" y="202">24</text>`,
      "Third number triangle with top 6, centre 18, bottom-right 24 and missing bottom-left value",
    );
})();
