(function registerJuniorOneChapterSixteenIllustrations() {
  "use strict";
  const art = window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {};
  const isVi = () => document.documentElement.lang !== "en";
  const t = (vi, en) => isVi() ? vi : en;
  const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const navy = "#17365d", blue = "#8bc6ff", coral = "#ff806f", cream = "#fff2c9", green = "#5bc9a8", ink = "#23314d";
  const svg = (body, viewBox = "0 0 900 360", label = "") => `<svg viewBox="${viewBox}" role="img" aria-label="${esc(label)}" style="display:block;width:min(100%,980px);height:auto;margin:auto">${body}</svg>`;
  const frame = (vi, en, body) => `<div class="book-visual"><div class="book-visual-title">${esc(t(vi, en))}</div>${body}</div>`;
  const line = (x1, y1, x2, y2, color = navy, width = 4, dash = "") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}"${dash ? ` stroke-dasharray="${dash}"` : ""}/>`;
  const text = (x, y, value, size = 23, weight = 800, anchor = "middle", fill = ink) => `<text x="${x}" y="${y}" text-anchor="${anchor}" fill="${fill}" font-size="${size}" font-weight="${weight}">${esc(value)}</text>`;
  const rect = (x, y, w, h, fill = "#fffdfa", stroke = navy, width = 3) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${stroke}" stroke-width="${width}"/>`;

  function squareGrid(x, y, cols, rows, s, filled = [], extra = "") {
    const fillSet = new Set(filled.map(([r, c]) => `${r},${c}`));
    let body = "";
    for (let r = 0; r < rows; r += 1) for (let c = 0; c < cols; c += 1) body += rect(x + c * s, y + r * s, s, s, fillSet.has(`${r},${c}`) ? "#536273" : "#fffdfa", navy, 2);
    return `<g>${body}${extra}</g>`;
  }

  function polyomino(cells, x, y, s, cuts = "", fills = []) {
    const fillSet = new Set(fills.map(([r, c]) => `${r},${c}`));
    return `<g>${cells.map(([c, r]) => rect(x + c * s, y + r * s, s, s, fillSet.has(`${r},${c}`) ? cream : "#fffdfa", navy, 3)).join("")}${cuts}</g>`;
  }

  function triangle(x, y, size, inner = "") {
    const h = size * .866;
    return `<g><polygon points="${x},${y + h} ${x + size / 2},${y} ${x + size},${y + h}" fill="#fffdfa" stroke="${navy}" stroke-width="4"/>${inner}</g>`;
  }

  const lCells = [[0,1],[1,1],[2,1],[2,0]];
  function lShapes(solution = false) {
    const cuts = [
      (x, y, s) => `${line(x,y+s,x+3*s,y+2*s,coral,5)}${line(x+s,y+s,x+s,y+2*s,coral,5)}`,
      (x, y, s) => `${line(x,y+s,x+2*s,y+2*s,coral,5)}${line(x+2*s,y,x+3*s,y+2*s,coral,5)}`,
      (x, y, s) => `${line(x+s,y+s,x+2*s,y+2*s,coral,5)}${line(x+2*s,y,x+2*s,y+2*s,coral,5)}`,
    ];
    return svg([0,1,2].map((i) => { const x=80+i*275,y=75,s=68; return `${text(x+102,45,t(`Cách ${i+1}`,`Way ${i+1}`),20)}${polyomino(lCells,x,y,s,solution?cuts[i](x,y,s):"")}`; }).join(""), "0 0 900 300");
  }
  art["j1-geo-1"] = () => frame("Ba hình chữ L giống nhau", "Three identical L-shapes", lShapes(false));
  art["j1-geo-1-solution"] = () => frame("Ba cách chia thành bốn phần", "Three four-part divisions", lShapes(true));

  function fourSquares(solution = false) {
    const positions = [[90,45],[500,45],[90,265],[500,265]], s=48;
    return svg(positions.map(([x,y],i)=>{
      let cuts="";
      if(solution && i===0) cuts=`${line(x,y,x+4*s,y+4*s,coral,5)}${line(x+4*s,y,x,y+4*s,coral,5)}${line(x+2*s,y,x+2*s,y+4*s,coral,4)}${line(x,y+2*s,x+4*s,y+2*s,coral,4)}`;
      if(solution && i===1) cuts=`${line(x,y+s,x+4*s,y+3*s,coral,5)}${line(x,y+3*s,x+4*s,y+s,coral,5)}${line(x+s,y,x+3*s,y+4*s,coral,4)}${line(x+3*s,y,x+s,y+4*s,coral,4)}`;
      if(solution && i===2) cuts=`${line(x+s,y+4*s,x+2*s,y,coral,5)}${line(x+3*s,y+4*s,x+2*s,y,coral,5)}${line(x,y+2*s,x+4*s,y+2*s,coral,4)}`;
      if(solution && i===3) cuts=`${line(x+2*s,y,x+2*s,y+4*s,coral,6)}${line(x,y+2*s,x+4*s,y+2*s,coral,6)}`;
      return squareGrid(x,y,4,4,s,[],cuts);
    }).join(""),"0 0 900 500");
  }
  art["j1-geo-2"] = () => frame("Bốn lưới 4 × 4", "Four 4 × 4 grids", fourSquares(false));
  art["j1-geo-2-solution"] = () => frame("Bốn cách chia hợp lệ", "Four valid divisions", fourSquares(true));

  const sixCells=[[0,1],[1,1],[2,1],[3,1],[1,0],[3,0]];
  function sixCellShape(solution=false){const x=195,y=55,s=110;const cuts=solution?`${line(x+s,y+s,x+2*s,y+2*s,coral,6)}${line(x+3*s,y+s,x+4*s,y+2*s,coral,6)}`:"";return svg(polyomino(sixCells,x,y,s,cuts),"0 0 900 320");}
  art["j1-geo-3"] = () => frame("Hình gồm sáu ô vuông", "Six-square figure", sixCellShape(false));
  art["j1-geo-3-solution"] = () => frame("Bốn mảnh giống hệt nhau", "Four identical pieces", sixCellShape(true));

  const pyramid=[[0,2],[1,2],[2,2],[3,2],[4,2],[1,1],[2,1],[3,1],[2,0]];
  const step=[[0,2],[1,2],[2,2],[3,2],[4,2],[0,1],[1,1],[4,1],[0,0]];
  function cutPaste(cells, solution=false, variant="a") {
    const x=95,y=45,s=65;
    const cut=solution?line(x+(variant==="a"?3:2)*s,y,x+(variant==="a"?3:2)*s,y+3*s,coral,6,"10 8"):"";
    const final=solution?`${text(655,38,t("Ghép lại","Rearrange"),20)}${squareGrid(555,60,3,3,s,[],"")}${text(450,160,"→",40)}`:"";
    return svg(`${polyomino(cells,x,y,s,cut)}${final}`,"0 0 900 300");
  }
  art["j1-geo-4a"] = () => frame("Hình (a)", "Figure (a)", cutPaste(pyramid,false,"a"));
  art["j1-geo-4a-solution"] = () => frame("Cắt một lần và ghép thành 3 × 3", "One cut, then make a 3 × 3 square", cutPaste(pyramid,true,"a"));
  art["j1-geo-4b"] = () => frame("Hình (b)", "Figure (b)", cutPaste(step,false,"b"));
  art["j1-geo-4b-solution"] = () => frame("Cắt một lần và ghép thành 3 × 3", "One cut, then make a 3 × 3 square", cutPaste(step,true,"b"));

  function crossShape(x,y,s,solution="") {
    const cells=[[1,0],[0,1],[1,1],[2,1],[1,2]];
    const cx=x+1.5*s,cy=y+1.5*s;
    let cuts="";
    if(solution==="straight") cuts=`${line(cx,y,cx,y+3*s,coral,5)}${line(x,cy,x+3*s,cy,coral,5)}`;
    if(solution==="angled") cuts=`${line(cx,cy,x+s,y+s,coral,5)}${line(cx,cy,x+2*s,y+s,coral,5)}${line(cx,cy,x+s,y+2*s,coral,5)}${line(cx,cy,x+2*s,y+2*s,coral,5)}`;
    return `${polyomino(cells,x,y,s,cuts)}<circle cx="${cx}" cy="${cy}" r="7" fill="${navy}"/>`;
  }
  art["j1-geo-5"] = () => frame("Hai bản sao của hình dấu cộng", "Two copies of the cross", svg(`${crossShape(105,45,70)}${crossShape(535,45,70)}`,"0 0 900 310"));
  art["j1-geo-5-solution"] = () => frame("Hai cách chia thành bốn phần", "Two ways to make four equal parts", svg(`${crossShape(105,45,70,"angled")}${crossShape(535,45,70,"straight")}`,"0 0 900 310"));

  function paperGrid(showCut=true) {
    const x=90,y=55,s=70; const dotted=showCut?line(x+4*s,y,x+8*s,y+4*s,coral,5,"12 10"):"";
    return svg(squareGrid(x,y,8,4,s,[],dotted),"0 0 900 390");
  }
  art["j1-geo-6"] = () => frame("Hình lưới 8 × 4 và đường cắt", "8 × 4 grid and cut line", paperGrid(true));
  art["j1-geo-6a-solution"] = () => frame("Bản đồ lại đầy đủ", "Completed tracing", paperGrid(true));
  art["j1-geo-6b-solution"] = () => frame("Cắt đúng theo đường nét đứt", "Cut exactly along the dotted line", paperGrid(true));
  art["j1-geo-6c-solution"] = () => frame("Ba cách ghép hai mảnh", "Three shapes from the two pieces", svg(`<g fill="#fff8de" stroke="${navy}" stroke-width="4"><path d="M60 145H300L380 225H60Z"/><path d="M330 60H570L650 140H410L330 220Z"/><path d="M690 250V55L850 250Z"/></g>${text(220,285,t("Hình 1","Shape 1"),20)}${text(490,285,t("Hình 2","Shape 2"),20)}${text(770,285,t("Hình 3","Shape 3"),20)}`,"0 0 900 320"));

  function triangleDivision(parts, solution=false){const x=275,y=35,size=350,h=size*.866,cx=x+size/2,cy=y+h*2/3;let inner="";if(solution&&parts===3)inner=`${line(cx,cy,x,y+h,coral,5)}${line(cx,cy,x+size/2,y,coral,5)}${line(cx,cy,x+size,y+h,coral,5)}`;if(solution&&parts===4){const l=[x+size*.25,y+h/2],r=[x+size*.75,y+h/2],b=[x+size/2,y+h];inner=`${line(l[0],l[1],r[0],r[1],coral,5)}${line(l[0],l[1],b[0],b[1],coral,5)}${line(r[0],r[1],b[0],b[1],coral,5)}`;}if(solution&&parts===6)inner=`${line(cx,cy,x,y+h,coral,5)}${line(cx,cy,x+size/2,y,coral,5)}${line(cx,cy,x+size,y+h,coral,5)}${line(cx,cy,x+size*.25,y+h/2,coral,4)}${line(cx,cy,x+size*.75,y+h/2,coral,4)}${line(cx,cy,x+size/2,y+h,coral,4)}`;return svg(triangle(x,y,size,inner),"0 0 900 380");}
  for(const n of [3,4,6]){const key=n===3?"7a":n===4?"7b":"7c";art[`j1-geo-${key}`]=()=>frame(t(`Chia tam giác thành ${n} phần`,`Divide into ${n} parts`),`Divide into ${n} parts`,triangleDivision(n,false));art[`j1-geo-${key}-solution`]=()=>frame(t(`${n} phần bằng nhau`,`${n} equal parts`),`${n} equal parts`,triangleDivision(n,true));}

  function diamondOverlay(solution=false){const d=`<polygon points="450,45 625,190 450,335 275,190" fill="#fffdfa" stroke="${navy}" stroke-width="5"/>`;const a=`${line(450,45,450,335,solution?coral:navy,5)}${line(275,190,625,190,solution?coral:navy,5)}`;const circle=`<circle cx="450" cy="190" r="52" fill="none" stroke="${green}" stroke-width="6"/>`;if(solution)return svg(`${d}${a}${circle}`,"0 0 900 380");return svg(`${text(185,35,"A",24)}${line(185,70,185,280)}${line(65,175,305,175)}${text(450,185,"+",40)}<g transform="translate(360 55) scale(.52)">${d}${circle}</g>`,"0 0 900 340");}
  art["j1-geo-8"] = () => frame("Chồng hình A lên B", "Stack A on B", diamondOverlay(false));
  art["j1-geo-8-solution"] = () => frame("Hợp của mọi nét", "Union of all lines", diamondOverlay(true));

  function threeOverlay(solution=false){if(solution)return svg(`${rect(275,35,350,300)}<polygon points="450,35 625,185 450,335 275,185" fill="none" stroke="${coral}" stroke-width="6"/>${line(450,35,450,335)}${line(275,185,625,185)}`,"0 0 900 380");const mini=(x,label,paths)=>`${text(x+70,30,label,21)}${rect(x,45,140,140)}${paths}`;return svg(`${mini(60,"A",`${line(60,115,130,185)}${line(200,115,130,185)}`)}${text(235,120,"+",34)}${mini(300,"B",`${line(300,115,370,45)}${line(370,45,370,185)}`)}${text(475,120,"+",34)}${mini(540,"C",`${line(610,45,680,115)}${line(610,45,610,115)}`)}${text(740,120,"→",34)}${rect(770,45,110,140)}`,"0 0 900 240");}
  art["j1-geo-9"] = () => frame("Ba lớp A, B và C", "Layers A, B and C", threeOverlay(false));
  art["j1-geo-9-solution"] = () => frame("Hình thoi nằm trong hình vuông", "Diamond inside the square", threeOverlay(true));

  function patternGrid(solution=false){const x=220,y=30,s=150;let body="";for(let r=0;r<3;r++)for(let c=0;c<3;c++)body+=rect(x+c*s,y+r*s,s,s,c===2&&r===2&&!solution?"#fffdf8":"#fffdfa",navy,3);const path=(d)=>`<path d="${d}" fill="none" stroke="${navy}" stroke-width="6" stroke-linecap="square"/>`;body+=path(`M${x+35} ${y+35}V${y+115}L${x+115} ${y+35}V${y+115}`)+path(`M${x+s+35} ${y+35}H${x+s+115}L${x+s+35} ${y+115}H${x+s+115}`)+path(`M${x+2*s+28} ${y+28}H${x+2*s+122}V${y+122}H${x+2*s+28}ZM${x+2*s+28} ${y+28}L${x+2*s+122} ${y+122}M${x+2*s+122} ${y+28}L${x+2*s+28} ${y+122}`);body+=path(`M${x+35} ${y+s+30}V${y+s+120}H${x+120}Z`)+path(`M${x+s+30} ${y+s+120}H${x+s+120}V${y+s+30}Z`)+path(`M${x+2*s+30} ${y+s+30}V${y+s+120}H${x+2*s+120}M${x+2*s+30} ${y+s+30}L${x+2*s+120} ${y+s+120}M${x+2*s+120} ${y+s+30}L${x+2*s+30} ${y+s+120}`);body+=path(`M${x+35} ${y+2*s+35}H${x+75}V${y+2*s+75}H${x+120}V${y+2*s+115}H${x+80}`)+path(`M${x+s+35} ${y+2*s+115}H${x+s+75}V${y+2*s+35}H${x+s+120}V${y+2*s+75}`);if(solution)body+=`${rect(x+2*s+30,y+2*s+30,90,90,"none",coral,6)}${line(x+2*s+75,y+2*s+30,x+2*s+75,y+2*s+120,coral,5)}${line(x+2*s+30,y+2*s+75,x+2*s+120,y+2*s+75,coral,5)}`;else body+=text(x+2*s+75,y+2*s+92,"?",50,900);return svg(body,"0 0 900 520");}
  art["j1-geo-10"] = () => frame("Bảng quy luật 3 × 3", "3 × 3 pattern", patternGrid(false));
  art["j1-geo-10-solution"] = () => frame("Ô cuối là lưới 2 × 2", "Last box is a 2 × 2 grid", patternGrid(true));

  const q11a=[[0,0],[0,4],[2,2],[3,1],[3,3]], q11b=[[1,1],[1,3],[4,0],[4,4]], q11u=[...q11a,...q11b];
  const q12aa=[[1,3],[2,0],[3,3]], q12ab=[[0,2],[1,1],[2,4],[3,1],[4,2]], q12au=[...q12aa,...q12ab];
  function overlayGrids(a,b,result,solution=false){return svg(`${text(245,30,"A",22)}${squareGrid(120,45,5,5,50,a)}${text(450,180,"+",38)}${text(655,30,"B",22)}${squareGrid(530,45,5,5,50,b)}${text(450,340,"↓",38)}${squareGrid(325,365,5,5,50,solution?result:[])}${!solution?text(450,510,"?",42,900):""}`,"0 0 900 650");}
  art["j1-geo-11"] = () => frame("Chồng hai lưới 5 × 5", "Overlay two 5 × 5 grids", overlayGrids(q11a,q11b,q11u,false));
  art["j1-geo-11-solution"] = () => frame("Hợp của chín ô tô màu", "Union of nine shaded cells", overlayGrids(q11a,q11b,q11u,true));
  art["j1-geo-12a"] = () => frame("Hai mẫu ô vuông", "Two square patterns", overlayGrids(q12aa,q12ab,q12au,false));
  art["j1-geo-12a-solution"] = () => frame("Hợp của tám ô tô màu", "Union of eight shaded cells", overlayGrids(q12aa,q12ab,q12au,true));

  function triangularPattern(solution=false){const tri=(x,y,which)=>{const size=240,h=size*.866;let lattice="";for(let i=1;i<4;i++){const yy=y+h*i/4;lattice+=line(x+size*i/8,yy,x+size-size*i/8,yy,navy,2);lattice+=line(x+size*i/4,y+h,x+size/2,y,navy,2);lattice+=line(x+size*(1-i/4),y+h,x+size/2,y,navy,2);}const first=[[x+size/2,y,x+size*.375,y+h/4,x+size*.625,y+h/4],[x+size*.5,y+h/2,x+size*.375,y+3*h/4,x+size*.625,y+3*h/4],[x,y+h,x+size/8,y+3*h/4,x+size/4,y+h]],second=[[x+size*.375,y+h/2,x+size*.25,y+3*h/4,x+size*.5,y+3*h/4],[x+size*.5,y+3*h/4,x+size*.375,y+h,x+size*.625,y+h],[x+size,y+h,x+size*.75,y+h,x+size*.875,y+3*h/4]],fills=which===0?first:which===1?second:which===3?[...first,...second]:[];const polys=fills.map(p=>`<polygon points="${p.map((v,i)=>`${v}${i%2?',':' '}`).join("")}" fill="#596575"/>`).join("");return `${triangle(x,y,size,lattice)}${polys}`;};return svg(`${tri(80,40,0)}${text(450,175,"+",38)}${tri(580,40,1)}${text(450,315,"↓",38)}${tri(330,350,solution?3:2)}${solution?"":text(450,475,"?",42,900)}`,"0 0 900 620");}
  art["j1-geo-12b"] = () => frame("Hai mẫu tam giác", "Two triangular patterns", triangularPattern(false));
  art["j1-geo-12b-solution"] = () => frame("Hợp của các tam giác tô màu", "Union of shaded triangles", triangularPattern(true));

  art["j1-geo-example-cut"] = art["j1-geo-4a-solution"];
  art["j1-geo-example-lines"] = art["j1-geo-8-solution"];
  art["j1-geo-example-shade"] = art["j1-geo-11-solution"];
  art["j1-geo-extra-1"] = () => frame("Chia hình chữ nhật", "Divide the rectangle", svg(`${rect(120,65,280,180)}${line(190,65,190,245,coral,4)}${line(260,65,260,245,coral,4)}${line(330,65,330,245,coral,4)}${rect(500,65,280,180)}${line(500,110,780,110,coral,4)}${line(500,155,780,155,coral,4)}${line(500,200,780,200,coral,4)}`,"0 0 900 300"));
  art["j1-geo-extra-2"] = () => frame("Hai đường chéo khác hướng", "Opposite diagonals", svg(`${rect(310,45,280,250)}${line(310,45,590,295,coral,6)}${line(590,45,310,295,blue,6)}`,"0 0 900 340"));
  art["j1-geo-extra-3"] = () => frame("Tam giác chia theo ba phần trên mỗi cạnh", "Triangle trisected on every side", triangleDivision(6,true));
  art["j1-geo-extra-4"] = () => frame("Hai cặp ô góc đối diện", "Two pairs of opposite corners", svg(`${squareGrid(130,50,4,4,65,[[0,0],[3,3]])}${text(450,185,"+",38)}${squareGrid(510,50,4,4,65,[[0,3],[3,0]])}`,"0 0 900 360"));
  art["j1-geo-extra-5"] = () => frame("Hình vuông có tám tam giác nhỏ", "Square with eight small triangles", svg(`${rect(285,35,330,300)}${line(285,35,615,335,coral,5)}${line(615,35,285,335,coral,5)}${line(450,35,450,335,blue,5)}${line(285,185,615,185,blue,5)}`,"0 0 900 380"));
})();
