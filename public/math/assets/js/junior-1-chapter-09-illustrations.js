(function registerJuniorOneChapterNineIllustrations() {
  "use strict";

  const art = window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {};
  const vi = () => document.documentElement.lang !== "en";
  const t = (vn, en) => vi() ? vn : en;
  const wrap = (title, body) => `<div class="book-visual"><div class="book-visual-title">${title}</div>${body}</div>`;
  const line = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
  const svg = (body, label, view = "0 0 720 360") => wrap(t("Hình trong đề", "Figure in the question"), `<svg viewBox="${view}" role="img" aria-label="${label}" style="max-height:360px"><g fill="none" stroke="#17365d" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">${body}</g></svg>`);

  const grid = (cols, rows, x = 180, y = 55, cell = 90) => {
    let body = "";
    for (let c = 0; c <= cols; c += 1) body += line(x + c * cell, y, x + c * cell, y + rows * cell);
    for (let r = 0; r <= rows; r += 1) body += line(x, y + r * cell, x + cols * cell, y + r * cell);
    return body;
  };
  const polyomino = (cells) => {
    const size = 56, ox = 220, oy = 35;
    return svg(cells.map(([x, y]) => `<rect x="${ox + x * size}" y="${oy + y * size}" width="${size}" height="${size}"/>`).join(""), t("Hình ghép từ các hình chữ nhật", "A figure made of rectangles"));
  };
  const pointsLine = (positions, labels) => svg(`${line(120, 165, 600, 165)}${positions.map((x, i) => `${line(x, 145, x, 185)}<text x="${x}" y="220" text-anchor="middle" fill="#17365d" stroke="none" font-size="30" font-weight="900">${labels[i]}</text>`).join("")}`, t("Các điểm trên một đường thẳng", "Marked points on a line"));

  art["j1-count-example-grid"] = () => svg(grid(2, 2, 270, 70, 105), t("Lưới hai nhân hai", "Two by two grid"));
  art["j1-count-example-triangle"] = () => svg(`<path d="M360 45L180 310H540Z"/>${line(270, 178, 450, 178)}${line(270, 178, 360, 310)}${line(450, 178, 360, 310)}`, t("Tam giác chia thành bốn phần", "Triangle divided into four parts"));
  art["j1-count-example-cubes"] = () => svg(`<path d="M250 260h220M300 210h120M350 160h40"/>${grid(3,2,270,90,60)}`, t("Chồng khối theo tầng", "Layered cube stack"));

  art["j1-count-1a"] = () => svg(grid(3, 2, 225, 75, 90), t("Lưới ba cột hai hàng", "Three by two grid"));
  art["j1-count-1b"] = () => svg(`${grid(2, 2, 220, 55, 130)}<rect x="285" y="120" width="130" height="130"/>`, t("Hai hình vuông đồng tâm được chia bốn", "Two centred squares divided into four"));
  art["j1-count-2a"] = () => svg(`<path d="M360 45L170 315H550Z"/>${line(265, 180, 455, 180)}${line(265, 180, 360, 315)}${line(455, 180, 360, 315)}`, t("Tam giác lớn chia thành bốn tam giác", "Large triangle divided into four triangles"));
  art["j1-count-2b"] = () => svg(`<path d="M350 40L165 315H535Z"/>${line(165,315,440,180)}${line(320,315,440,180)}`, t("Tam giác có hai đoạn thẳng bên trong", "Triangle with two inner segments"));
  art["j1-count-3"] = () => svg(grid(3, 3, 225, 45, 90), t("Lưới ba nhân ba", "Three by three grid"));
  art["j1-count-4a"] = () => svg(`<path d="M90 300L190 120L290 300L390 120L490 300L590 120L690 300"/>${line(90,300,690,300)}${line(190,120,390,300)}${line(390,120,590,300)}`, t("Bốn tam giác chồng liên tiếp", "Four overlapping triangles"), "0 0 780 360");
  art["j1-count-4b"] = () => svg(`<path d="M90 300L205 115L640 300Z"/><path d="M90 300L390 70L640 300"/><path d="M90 300L535 120L640 300"/>`, t("Các tam giác chồng nhau chung đáy", "Overlapping triangles with a common base"));
  art["j1-count-5"] = () => svg(`<path d="M360 35L80 315H640Z"/>${line(220,175,500,175)}${line(150,245,570,245)}${line(360,35,360,315)}${line(220,175,220,315)}${line(500,175,500,315)}${line(150,245,150,315)}${line(570,245,570,315)}`, t("Tam giác bậc thang gồm ô vuông và tam giác", "Stepped triangle made of squares and triangles"));

  art["j1-count-6a"] = () => polyomino([[0,0],[1,0],[2,0],[0,1],[0,2],[1,2],[2,2]]);
  art["j1-count-6b"] = () => polyomino([[1,0],[1,1],[2,1],[1,2],[0,3],[1,3],[1,4]]);
  art["j1-count-6c"] = () => polyomino([[0,0],[0,1],[1,1],[2,1],[3,1],[4,1],[4,0]]);
  art["j1-count-6d"] = () => polyomino([[1,0],[0,1],[1,1],[2,1],[1,2],[1,3],[2,3]]);

  const isoCube = (x, y, s = 34) => `<path d="M${x} ${y}l${s} ${-s/2}l${s} ${s/2}l-${s} ${s/2}Z M${x} ${y}v${s}l${s} ${s/2}l${s}-${s/2}v-${s} M${x+s} ${y+s/2}v${s}"/>`;
  const cubeStack = (heights) => {
    const coords = [];
    heights.forEach((row, ry) => row.forEach((h, rx) => {
      for (let z = 0; z < h; z += 1) coords.push([rx, ry, z]);
    }));
    coords.sort((a,b)=>(a[0]+a[1]+a[2])-(b[0]+b[1]+b[2]));
    return svg(coords.map(([x,y,z]) => isoCube(320 + (x-y)*38, 230 + (x+y)*20 - z*40, 38)).join(""), t("Chồng khối lập phương", "Cube stack"));
  };
  art["j1-count-7a"] = () => cubeStack([[1,1],[2,0]]);
  art["j1-count-7b"] = () => cubeStack([[1,2],[2,3]]);
  art["j1-count-7c"] = () => cubeStack([[1,1,1],[1,2,0],[1,0,3]]);
  art["j1-count-7d"] = () => cubeStack([[1,1,1],[1,2,1],[1,1,3]]);
  art["j1-count-7e"] = () => cubeStack([[3,3,3],[3,0,3],[3,1,2]]);
  art["j1-count-7f"] = () => cubeStack([[1,1,2],[1,2,3],[1,1,3]]);

  art["j1-count-8a"] = () => pointsLine([120,460,600],["A","B","C"]);
  art["j1-count-8b"] = () => pointsLine([120,210,350,600],["A","B","C","D"]);
  art["j1-count-8c"] = () => pointsLine([120,250,310,510,600],["A","B","C","D","E"]);
  art["j1-count-8d"] = () => pointsLine([120,190,280,400,520,600],["A","B","C","D","E","F"]);

  art["j1-count-extra-1"] = art["j1-count-3"];
  art["j1-count-extra-2"] = () => pointsLine([120,280,440,600],["A","B","C","D"]);
  art["j1-count-extra-3"] = art["j1-count-7d"];
  art["j1-count-extra-4"] = () => svg(grid(3, 2, 225, 75, 90), t("Lưới hai nhân ba", "Two by three grid"));
  art["j1-count-extra-5"] = () => svg(`<path d="M360 35L110 315H610Z"/>${line(277,128,443,128)}${line(193,222,527,222)}${line(277,128,360,315)}${line(443,128,360,315)}${line(193,222,277,315)}${line(527,222,443,315)}`, t("Tam giác chia thành chín tam giác nhỏ", "Triangle divided into nine small triangles"));
})();
