(function registerJuniorOneChapterSeventeenIllustrations() {
  "use strict";
  const art = window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {};
  const isVi = () => document.documentElement.lang !== "en";
  const t = (vi, en) => isVi() ? vi : en;
  const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const navy = "#17365d", blue = "#78b7ff", coral = "#ff806f", green = "#59c9a8", ink = "#23314d";
  const svg = (body, viewBox = "0 0 900 340", label = "") => `<svg viewBox="${viewBox}" role="img" aria-label="${esc(label)}" style="display:block;width:min(100%,980px);height:auto;margin:auto">${body}</svg>`;
  const frame = (vi, en, body) => `<div class="book-visual"><div class="book-visual-title">${esc(t(vi, en))}</div>${body}</div>`;
  const text = (x, y, value, size = 24, weight = 800, anchor = "middle", fill = ink) => `<text x="${x}" y="${y}" text-anchor="${anchor}" fill="${fill}" font-size="${size}" font-weight="${weight}">${esc(value)}</text>`;
  const line = (x1, y1, x2, y2, color = navy, width = 4, dash = "") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}"${dash ? ` stroke-dasharray="${dash}"` : ""}/>`;
  const rect = (x, y, w, h, fill = "#fffdfa", stroke = navy, width = 3, rx = 0) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${width}"/>`;
  const circle = (x, y, r, fill = "#fffdfa", stroke = navy, width = 3) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${width}"/>`;

  function chips(items, labels = []) {
    const start = (900 - items.length * 96) / 2;
    return items.map((value, i) => `${circle(start + i * 96 + 38, 92, 34, i % 2 ? "#e7f7f2" : "#e7f1ff")}${text(start + i * 96 + 38, 101, value, 22)}${labels[i] ? text(start + i * 96 + 38, 155, labels[i], 18, 700, "middle", i % 2 ? "#17846a" : "#306fb5") : ""}`).join("");
  }

  art["j1-parity-example-rules"] = () => frame("Quy tắc chẵn lẻ", "Parity rules", svg(`${text(450,55,"3 + 8 = 11",30)}${text(450,105,t("lẻ + chẵn = lẻ","odd + even = odd"),22,800,"middle",coral)}${text(450,190,"4 + 6 = 10",30)}${text(450,240,t("chẵn + chẵn = chẵn","even + even = even"),22,800,"middle",green)}`, "0 0 900 290"));
  art["j1-parity-example-baskets"] = () => frame("Ba cặp số lẻ có tổng 12", "Three odd pairs totalling 12", svg(`${text(450,65,"1 + 11",28)}${text(450,135,"3 + 9",28)}${text(450,205,"5 + 7",28)}`, "0 0 900 260"));
  art["j1-parity-example-beads"] = () => frame("Vị trí lẻ và vị trí chẵn", "Odd and even positions", svg(chips([1,2,3,4,5,6],[t("lam","blue"),t("lục","green"),t("lam","blue"),t("lục","green"),t("lam","blue"),t("lục","green")]), "0 0 900 200"));

  function splitVisual(total, groups, solution = false, color = blue) {
    let body = `${text(450,42,t(`${total} đồ vật`,`${total} objects`),24)}`;
    for (let i = 0; i < groups; i += 1) {
      const x = 450 - (groups - 1) * 150 + i * 300;
      body += `${rect(x - 100,80,200,110,"#fffdfa",navy,4,24)}${text(x,145,"?",42,900)}`;
    }
    if (solution) {
      const rows = color === green ? ["2 + 12","4 + 10","6 + 8"] : groups === 3 ? ["8 + 2 + 2","6 + 4 + 2","4 + 4 + 4"] : ["1 + 15","3 + 13","5 + 11","7 + 9"];
      body = `${text(450,44,t("Các cách không kể thứ tự","Unordered ways"),23)}${rows.map((row,i)=>text(450,95+i*56,row,25,850)).join("")}`;
    }
    return svg(body, "0 0 900 340");
  }
  art["j1-parity-2"] = () => frame("Chia 16 viên bi vào hai phần lẻ", "Split 16 marbles into two odd parts", splitVisual(16,2,false));
  art["j1-parity-2-solution"] = () => frame("Bốn cách chia", "Four splits", splitVisual(16,2,true));
  art["j1-parity-3"] = () => frame("Chia 14 quả cam vào hai phần chẵn", "Split 14 oranges into two even parts", splitVisual(14,2,false,green));
  art["j1-parity-3-solution"] = () => frame("Ba cách chia", "Three splits", splitVisual(14,2,true,green));
  art["j1-parity-8"] = () => frame("Chia 12 quả táo vào ba phần chẵn", "Split 12 apples into three even parts", splitVisual(12,3,false));
  art["j1-parity-8-solution"] = () => frame("Ba cách chia", "Three splits", splitVisual(12,3,true));

  function sequenceVisual(values, pattern, targets, solution = false) {
    const labels = solution ? pattern.map((kind) => kind === "O" ? t("lẻ","odd") : t("chẵn","even")) : [];
    let body = chips(values, labels);
    body += `${text(300,235,t(`Vị trí ${targets[0]}`,`Position ${targets[0]}`),22)}${text(600,235,t(`Vị trí ${targets[1]}`,`Position ${targets[1]}`),22)}`;
    body += solution ? `${text(300,285,targets[2],25,900,"middle",targets[2]===t("lẻ","odd")?coral:green)}${text(600,285,targets[3],25,900,"middle",targets[3]===t("lẻ","odd")?coral:green)}` : `${text(300,290,"?",42,900)}${text(600,290,"?",42,900)}`;
    return svg(body, "0 0 900 330");
  }
  art["j1-parity-4"] = () => frame("Dãy số tam giác", "Triangular-number sequence", sequenceVisual([1,3,6,10,15,21,28],["O","O","E","E","O","O","E"],[15,23,"",""]));
  art["j1-parity-4-solution"] = () => frame("Quy luật lẻ, lẻ, chẵn, chẵn", "Odd, odd, even, even pattern", sequenceVisual([1,3,6,10,15,21,28],["O","O","E","E","O","O","E"],[15,23,t("chẵn","even"),t("chẵn","even")],true));
  art["j1-parity-5"] = () => frame("Dãy số chính phương", "Square-number sequence", sequenceVisual([1,4,9,16,25,36],["O","E","O","E","O","E"],[10,15,"",""]));
  art["j1-parity-5-solution"] = () => frame("Chẵn lẻ luân phiên", "Alternating parity", sequenceVisual([1,4,9,16,25,36],["O","E","O","E","O","E"],[10,15,t("chẵn","even"),t("lẻ","odd")],true));
  art["j1-parity-11"] = () => frame("Dãy cộng hai số đứng trước", "Add-the-previous-two sequence", sequenceVisual([1,1,2,3,5,8,13],["O","O","E","O","O","E","O"],[16,27,"",""]));
  art["j1-parity-11-solution"] = () => frame("Quy luật lẻ, lẻ, chẵn", "Odd, odd, even pattern", sequenceVisual([1,1,2,3,5,8,13],["O","O","E","O","O","E","O"],[16,27,t("lẻ","odd"),t("chẵn","even")],true));

  function sumStrip(values, solution = false) {
    const body = chips(values) + (solution ? `${text(450,220,`${values.join(" + ")} = ${values.reduce((a,b)=>a+b,0)}`,25)}${text(450,275,values.reduce((a,b)=>a+b,0)%2?t("số lẻ","odd number"):t("số chẵn","even number"),24,900,"middle",values.reduce((a,b)=>a+b,0)%2?coral:green)}` : text(450,255,"?",44,900));
    return svg(body,"0 0 900 310");
  }
  art["j1-parity-6"] = () => frame("Tổng từ 1 đến 10", "Sum from 1 to 10", sumStrip([1,2,3,4,5,6,7,8,9,10],false));
  art["j1-parity-6-solution"] = () => frame("Tổng bằng 55", "Sum is 55", sumStrip([1,2,3,4,5,6,7,8,9,10],true));
  art["j1-parity-9"] = () => frame("Năm số lẻ đầu tiên", "First five odd numbers", sumStrip([1,3,5,7,9],false));
  art["j1-parity-9-solution"] = () => frame("Tổng bằng 25", "Sum is 25", sumStrip([1,3,5,7,9],true));
  art["j1-parity-10"] = () => frame("Năm số chẵn đầu tiên", "First five even numbers", sumStrip([2,4,6,8,10],false));
  art["j1-parity-10-solution"] = () => frame("Tổng bằng 30", "Sum is 30", sumStrip([2,4,6,8,10],true));

  function threeOdd(solution = false) {
    return svg(`${circle(300,130,55,solution?"#ffe8df":"#fffdfa")}${circle(450,130,55,solution?"#fff1bf":"#fffdfa")}${circle(600,130,55,solution?"#e7f7f2":"#fffdfa")}${text(300,142,solution?5:"?",34)}${text(450,142,solution?7:"?",34)}${text(600,142,solution?9:"?",34)}${text(450,245,"= 21",30)}`,"0 0 900 290");
  }
  art["j1-parity-7"] = () => frame("Ba số lẻ có tổng 21", "Three odd numbers total 21", threeOdd(false));
  art["j1-parity-7-solution"] = () => frame("Ba số lẻ liên tiếp", "Three consecutive odd numbers", threeOdd(true));

  function grid(cells, x, y, size, fills = []) {
    const fillMap = new Map(fills.flatMap((group, i) => group.map(([r,c]) => [`${r},${c}`, ["#ffdca0","#bfe8ff","#c9f1df","#ffc6bb","#ddd0ff"][i]])));
    return cells.map(([r,c]) => rect(x+c*size,y+r*size,size,size,fillMap.get(`${r},${c}`)||"#fffdfa",navy,3)).join("");
  }
  const lBoard = [[0,0],[0,1],[0,2],[0,3],[0,4],[1,0],[1,1],[1,2],[1,3],[2,0],[2,1],[2,2],[3,0],[3,1],[3,2]];
  const lGroups = [[[0,0],[1,0],[1,1]],[[0,1],[0,2],[1,2]],[[0,3],[0,4],[1,3]],[[2,0],[3,0],[3,1]],[[2,1],[2,2],[3,2]]];
  function lTileFigure(solution=false){const tile=[[0,0],[1,0],[1,1]];return svg(`${text(270,35,t("Hình (a)","Figure (a)"),22)}${grid(lBoard,110,55,62,solution?lGroups:[])}${text(690,35,t("Viên gạch","Tile"),22)}${grid(tile,620,95,70,solution?[tile]:[])}${solution?text(270,335,"15 ÷ 3 = 5",28,900):text(270,335,"?",42,900)}`,"0 0 900 380");}
  art["j1-parity-12a"] = () => frame("Hình bậc thang và viên gạch chữ L", "Stepped board and L tile", lTileFigure(false));
  art["j1-parity-12a-solution"] = () => frame("Năm viên gạch phủ kín hình", "Five tiles cover the board", lTileFigure(true));

  const squareBoard = Array.from({length:4},(_,r)=>Array.from({length:4},(_,c)=>[r,c])).flat();
  const tGroups=[[[0,0],[0,1],[0,2],[1,1]],[[0,3],[1,3],[2,3],[1,2]],[[1,0],[2,0],[3,0],[2,1]],[[3,1],[3,2],[3,3],[2,2]]];
  function tTileFigure(solution=false){const tile=[[0,1],[1,0],[1,1],[1,2]];return svg(`${text(280,35,t("Hình (b)","Figure (b)"),22)}${grid(squareBoard,140,55,72,solution?tGroups:[])}${text(690,35,t("Viên gạch","Tile"),22)}${grid(tile,590,105,64,solution?[tile]:[])}${solution?text(285,380,"16 ÷ 4 = 4",28,900):text(285,380,"?",42,900)}`,"0 0 900 420");}
  art["j1-parity-12b"] = () => frame("Bảng 4 × 4 và viên gạch chữ T", "4 × 4 board and T tile", tTileFigure(false));
  art["j1-parity-12b-solution"] = () => frame("Bốn viên chữ T phủ kín bảng", "Four T tiles cover the board", tTileFigure(true));

  const quarterGroups=[[[0,0],[0,1],[1,0],[1,1]],[[0,2],[0,3],[1,2],[1,3]],[[2,0],[2,1],[3,0],[3,1]],[[2,2],[2,3],[3,2],[3,3]]];
  function ringTileFigure(solution=false){const board=grid(squareBoard,140,55,72,solution?quarterGroups:[]);const tile=`${rect(620,105,150,150,"#fffdfa",navy,4)}${line(695,105,695,255)}${line(620,180,770,180)}${rect(660,145,70,70,"none",coral,4)}`;return svg(`${text(280,35,t("Hình (c)","Figure (c)"),22)}${board}${text(695,35,t("Viên gạch","Tile"),22)}${tile}${solution?text(285,380,"16 ÷ 4 = 4",28,900):text(285,380,"?",42,900)}`,"0 0 900 420");}
  art["j1-parity-12c"] = () => frame("Bảng 4 × 4 và viên gạch khung vuông", "4 × 4 board and square-ring tile", ringTileFigure(false));
  art["j1-parity-12c-solution"] = () => frame("Bốn viên phủ bốn phần tư", "Four tiles cover four quarters", ringTileFigure(true));
})();
