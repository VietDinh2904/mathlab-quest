(function registerChapterSixIllustrations() {
  "use strict";

  const illustrations = (window.BOOK_ILLUSTRATIONS =
    window.BOOK_ILLUSTRATIONS || {});
  const isVi = () => document.documentElement.lang !== "en";

  function figure(svgBody, label, caption, viewBox = "0 0 680 300") {
    const visibleCaption = isVi()
      ? "Hình được dựng theo đúng vị trí và dữ kiện của đề; hãy đếm theo từng kích thước."
      : caption;
    return `<figure class="visual counting-illustration"><svg viewBox="${viewBox}" role="img" aria-label="${label}">${svgBody}</svg><figcaption>${visibleCaption}</figcaption></figure>`;
  }

  function pointLine(count, x, y, width, panelLabel = "") {
    const gap = width / (count - 1);
    const points = Array.from({ length: count }, (_, index) => {
      const pointX = x + gap * index;
      const letter = String.fromCharCode(65 + index);
      return `<circle class="diagram-point" cx="${pointX}" cy="${y}" r="6"/><text class="diagram-label" x="${pointX}" y="${y + 30}">${letter}</text>`;
    }).join("");
    const label = panelLabel
      ? `<text class="diagram-panel-label" x="${x - 36}" y="${y + 6}">${panelLabel}</text>`
      : "";
    return `${label}<path class="diagram-line" d="M${x} ${y}H${x + width}"/>${points}`;
  }

  function unevenPointLine(points, y, panelLabel = "") {
    const start = points[0];
    const end = points[points.length - 1];
    const marks = points
      .map((x, index) => `<path class="diagram-line" d="M${x} ${y - 13}V${y + 13}"/><text class="diagram-label" x="${x}" y="${y + 42}">${String.fromCharCode(65 + index)}</text>`)
      .join("");
    const label = panelLabel ? `<text class="diagram-panel-label" x="${start - 48}" y="${y + 7}">${panelLabel}</text>` : "";
    return `${label}<path class="diagram-line" d="M${start} ${y}H${end}"/>${marks}`;
  }

  function triangleGrid(order, centerX, topY, step) {
    const rowHeight = (step * Math.sqrt(3)) / 2;
    const point = (row, column) => [
      centerX + (column - row / 2) * step,
      topY + row * rowHeight,
    ];
    const segments = [];

    for (let row = 0; row <= order; row += 1) {
      for (let column = 0; column <= row; column += 1) {
        const [x, y] = point(row, column);
        if (column < row) {
          const [nextX, nextY] = point(row, column + 1);
          segments.push(`M${x} ${y}L${nextX} ${nextY}`);
        }
        if (row < order) {
          const [leftX, leftY] = point(row + 1, column);
          const [rightX, rightY] = point(row + 1, column + 1);
          segments.push(
            `M${x} ${y}L${leftX} ${leftY}`,
            `M${x} ${y}L${rightX} ${rightY}`,
          );
        }
      }
    }

    return `<path class="diagram-line" d="${segments.join(" ")}"/>`;
  }

  function steppedCells() {
    const heights = [1, 2, 3, 3, 2, 1];
    const cellSize = 64;
    const baseY = 258;
    return heights
      .flatMap((height, column) =>
        Array.from({ length: height }, (_, row) => {
          const x = 148 + column * cellSize;
          const y = baseY - (row + 1) * cellSize;
          return `<rect class="diagram-cell" x="${x}" y="${y}" width="${cellSize}" height="${cellSize}"/>`;
        }),
      )
      .join("");
  }

  illustrations["counting-example-five-points"] = () =>
    figure(unevenPointLine([90, 205, 395, 535, 615], 120), "Five marked points A to E on one straight line", "Example 1 from page 51.", "0 0 680 220");

  illustrations["counting-example-square-grids"] = () =>
    figure(`<text class="diagram-panel-label" x="150" y="34">(a)</text><g transform="translate(90 55)">${Array.from({length:4},(_,i)=>`<rect class="diagram-cell" x="${(i%2)*72}" y="${Math.floor(i/2)*72}" width="72" height="72"/>`).join("")}</g><text class="diagram-panel-label" x="480" y="34">(b)</text><g transform="translate(372 45)">${Array.from({length:9},(_,i)=>`<rect class="diagram-cell" x="${(i%3)*58}" y="${Math.floor(i/3)*58}" width="58" height="58"/>`).join("")}</g>`, "A 2 by 2 square grid and a 3 by 3 square grid", "Example 2 from page 51.");

  illustrations["counting-example-triangles"] = () =>
    figure(`<text class="diagram-panel-label" x="175" y="28">(a)</text><g transform="translate(45 42)"><path class="diagram-line" d="M130 0L15 210H245Z M130 0L72 210 M130 0V210 M130 0L188 210"/></g><text class="diagram-panel-label" x="500" y="28">(b)</text>${triangleGrid(3, 500, 40, 70)}`, "A triangle fan and a triangular grid", "Example 3 from page 52.");

  illustrations["counting-example-rectangles"] = () =>
    figure(`<g transform="translate(205 28)">${Array.from({length:9},(_,i)=>`<rect class="diagram-cell" x="${(i%3)*90}" y="${Math.floor(i/3)*72}" width="90" height="72"/>`).join("")}</g>`, "A rectangle divided into three rows and three columns", "Example 4 from page 52.");

  illustrations["counting-nested-squares"] = () =>
    figure(
      `<path class="diagram-line" d="M90 35H590V255H90Z M340 35V255 M160 35V175H520V35 M235 35V110H445V35"/>`,
      "Three nested rectangular frames divided by one central vertical line",
      "The drawing matches Practice 1: three nested levels sharing the same top edge and centre line.",
    );

  illustrations["counting-five-points"] = () =>
    figure(
      unevenPointLine([90, 205, 395, 535, 615], 120),
      "Five collinear points A through E with unequal gaps",
      "Every pair of marked points determines one line segment.",
      "0 0 680 220",
    );

  illustrations["counting-triangle-grids"] = () =>
    figure(
      `<text class="diagram-panel-label" x="175" y="30">(a)</text>${triangleGrid(2, 175, 52, 108)}<text class="diagram-panel-label" x="485" y="30">(b)</text>${triangleGrid(4, 485, 42, 52)}`,
      "A triangular grid of order two and a triangular grid of order four",
      "Count triangles by size in each figure.",
    );

  illustrations["counting-triangle-fan-24"] = () =>
    figure(
      `<path class="diagram-line" d="M340 20L55 265H625Z M340 20V265 M55 265L340 75L625 265 M55 265L340 125L625 265 M55 265L340 175L625 265 M55 265L340 220L625 265"/>`,
      "Large triangle with a centre line and four nested chevrons from the base corners",
      "Count left-half, right-half, then full-width triangles.",
    );

  illustrations["counting-six-seven-points"] = () =>
    figure(
      `${unevenPointLine([105, 175, 255, 370, 510, 620], 80, "(a)")}${unevenPointLine([105, 175, 255, 370, 485, 575, 650], 205, "(b)")}`,
      "Two lines containing six and seven labelled points with the exact unequal gaps",
      "Choose any two points on each line to form a segment.",
    );

  illustrations["counting-cross-squares"] = () =>
    figure(
      `<g transform="translate(190 2)">${[[2,0],[1,1],[2,1],[3,1],[0,2],[1,2],[2,2],[3,2],[4,2],[1,3],[2,3],[3,3],[2,4]].map(([column,row]) => `<rect class="diagram-cell" x="${column * 58}" y="${row * 58}" width="58" height="58"/>`).join("")}</g>`,
      "A thirteen-cell cross with row widths one, three, five, three and one",
      "Count 1-by-1 squares, then the four 2-by-2 squares and the central 3-by-3 square.",
    );

  illustrations["counting-diagonal-squares"] = () =>
    figure(
      `<g transform="translate(220 15)"><rect class="diagram-line" x="0" y="0" width="240" height="240"/><path class="diagram-line" d="M120 0V240 M0 120H240 M0 0L120 120 M0 120L120 0 M120 0L240 120 M120 120L240 0 M0 120L120 240 M0 240L120 120 M120 120L240 240 M120 240L240 120"/></g>`,
      "A two by two square grid with both diagonals in every unit square",
      "Count upright squares first, then tilted squares.",
    );

  illustrations["counting-stepped-rectangles"] = () =>
    figure(
      steppedCells(),
      "A symmetric six-column stepped grid with heights one, two, three, three, two, one",
      "The six column heights are 1–2–3–3–2–1, exactly as in Practice 8.",
    );

  illustrations["counting-triangle-pairs"] = () =>
    figure(
      `<text class="diagram-panel-label" x="175" y="28">(a)</text><g transform="translate(40 42)"><path class="diagram-line" d="M135 0L15 210H255Z M135 0L75 210 M135 0V210 M135 0L195 210 M60 130H210"/></g><text class="diagram-panel-label" x="505" y="28">(b)</text><g transform="translate(370 40)"><path class="diagram-line" d="M135 0L15 215H270Z M135 0V215 M15 215L210 82 M68 120L270 215"/></g>`,
      "Two subdivided triangular figures",
      "For (a), use each horizontal base; for (b), follow every complete side through the intersections.",
    );

  illustrations["counting-triangle-grids-a"] = () =>
    figure(triangleGrid(2, 340, 40, 145), "A triangular grid of order two", "Practice 3(a).", "0 0 680 310");
  illustrations["counting-triangle-grids-b"] = () =>
    figure(triangleGrid(4, 340, 25, 68), "A triangular grid of order four", "Practice 3(b).", "0 0 680 310");
  illustrations["counting-six-seven-points-a"] = () =>
    figure(unevenPointLine([80, 155, 240, 365, 520, 640], 120), "Six points A through F with unequal gaps", "Practice 5(a).", "0 0 720 220");
  illustrations["counting-six-seven-points-b"] = () =>
    figure(unevenPointLine([70, 145, 225, 345, 465, 560, 650], 120), "Seven points A through G with unequal gaps", "Practice 5(b).", "0 0 720 220");
  illustrations["counting-triangle-pairs-a"] = () =>
    figure(`<g transform="translate(125 20)"><path class="diagram-line" d="M215 0L20 245H410Z M215 0L120 245 M215 0V245 M215 0L310 245 M75 175H355"/></g>`, "Triangle with three internal rays and one horizontal segment", "Practice 9(a).", "0 0 680 300");
  illustrations["counting-triangle-pairs-b"] = () =>
    figure(`<g transform="translate(120 18)"><path class="diagram-line" d="M220 0L25 250H435Z M220 0V250 M25 250L320 82 M95 92L435 250"/></g>`, "Triangle with a vertical and two crossing diagonals", "Practice 9(b).", "0 0 680 300");

  illustrations["counting-seven-boxes"] = () =>
    figure(
      `<g transform="translate(60 85)">${Array.from({ length: 7 }, (_, index) => `<rect class="diagram-cell" x="${index * 80}" y="0" width="80" height="80"/>`).join("")}</g>`,
      "A horizontal strip of seven equal boxes",
      "A rectangle may span 1, 2, …, or all 7 boxes.",
      "0 0 680 250",
    );
})();
