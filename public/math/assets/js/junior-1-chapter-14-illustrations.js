(function registerJuniorOneChapterFourteenIllustrations() {
  "use strict";
  const art = window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {};
  const isVi = () => document.documentElement.lang !== "en";
  const t = (vi, en) => isVi() ? vi : en;
  const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const navy = "#17365d", blue = "#75b8f3", coral = "#ff765f", mint = "#bdebdc", cream = "#fff4d6", grey = "#aebaca";

  function frame(vi, en, body, noteVi = "", noteEn = "") {
    const note = noteVi || noteEn ? `<p style="margin:10px 0 0;text-align:center;color:#386087;font-weight:800">${esc(t(noteVi, noteEn))}</p>` : "";
    return `<div class="book-visual"><div class="book-visual-title">${esc(t(vi, en))}</div>${body}${note}</div>`;
  }
  const svg = (content, viewBox = "0 0 900 320", label = "") => `<svg viewBox="${viewBox}" role="img" aria-label="${esc(label)}" style="display:block;width:min(100%,980px);height:auto;margin:auto">${content}</svg>`;
  const panel = (x, y, w, h, label = "") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="#fffdfa" stroke="#c9daf1" stroke-width="3" stroke-dasharray="8 7"/>${label ? `<text x="${x + w / 2}" y="${y + h + 25}" text-anchor="middle" fill="${navy}" font-size="18" font-weight="900">${label}</text>` : ""}`;
  const question = (x, y) => `<text x="${x}" y="${y}" text-anchor="middle" fill="${navy}" font-size="44" font-weight="900">?</text>`;

  function xSquare(x, y, shade, circle) {
    const cx = x + 55, cy = y + 55;
    const points = { top: `${x},${y} ${x + 110},${y} ${cx},${cy}`, right: `${x + 110},${y} ${x + 110},${y + 110} ${cx},${cy}`, bottom: `${x},${y + 110} ${x + 110},${y + 110} ${cx},${cy}`, left: `${x},${y} ${x},${y + 110} ${cx},${cy}` };
    const dots = { top: [cx, y + 15], right: [x + 95, cy], bottom: [cx, y + 95], left: [x + 15, cy] };
    return `<polygon points="${points[shade]}" fill="${coral}" opacity=".88"/><rect x="${x}" y="${y}" width="110" height="110" fill="none" stroke="${navy}" stroke-width="4"/><path d="M${x} ${y}L${x + 110} ${y + 110}M${x + 110} ${y}L${x} ${y + 110}" stroke="${navy}" stroke-width="3"/><circle cx="${dots[circle][0]}" cy="${dots[circle][1]}" r="8" fill="white" stroke="${navy}" stroke-width="3"/>`;
  }
  function sequencePanels(drawings, blankLabel = "4") {
    return drawings.map((drawing, i) => `${panel(40 + i * 215, 45, 170, 180, i === drawings.length - 1 && !drawing ? `${blankLabel}${isVi() ? "" : "th"}` : `${i + 1}${isVi() ? "" : i === 0 ? "st" : i === 1 ? "nd" : i === 2 ? "rd" : "th"}`)}${drawing ? `<g transform="translate(${70 + i * 215},75)">${drawing}</g>` : question(125 + i * 215, 150)}`).join("");
  }

  art["j1-next-example-1"] = () => frame("Mỗi lần quay một phần tư vòng", "A quarter-turn each time", svg(`<text x="160" y="165" font-size="65" text-anchor="middle" fill="${navy}">↑</text><text x="350" y="165" font-size="65" text-anchor="middle" fill="${navy}">→</text><text x="540" y="165" font-size="65" text-anchor="middle" fill="${navy}">↓</text>${question(730, 165)}`, "0 0 900 250", t("Mũi tên quay theo chiều kim đồng hồ", "Arrows rotate clockwise")));
  art["j1-next-example-2"] = () => frame("Mỗi hình thêm một chấm", "Add one dot each time", svg([1,2,3].map((n,i) => Array.from({length:n},(_,j)=>`<circle cx="${170+i*230+(j-(n-1)/2)*30}" cy="130" r="11" fill="${[blue,coral,mint][i]}" stroke="${navy}" stroke-width="3"/>`).join("")).join("")+question(830,145), "0 0 950 240"));
  art["j1-next-example-3"] = () => frame("Hai hình đổi chỗ", "The two shapes swap places", svg(`<g transform="translate(130 80)"><circle cx="40" cy="50" r="30" fill="${blue}" stroke="${navy}" stroke-width="4"/><rect x="120" y="20" width="60" height="60" rx="8" fill="${cream}" stroke="${navy}" stroke-width="4"/></g><text x="400" y="145" font-size="45" fill="${navy}">→</text><g transform="translate(500 80)"><rect x="10" y="20" width="60" height="60" rx="8" fill="${cream}" stroke="${navy}" stroke-width="4"/><circle cx="150" cy="50" r="30" fill="${blue}" stroke="${navy}" stroke-width="4"/></g>`, "0 0 800 240"));

  art["j1-next-1a"] = () => frame("Dãy hình 1(a)", "Pattern 1(a)", svg(sequencePanels([xSquare(0,0,"right","top"), xSquare(0,0,"bottom","left"), xSquare(0,0,"left","bottom"), null])));

  function sectorSquare(shade, marker) {
    const dirs = [[55,55,55,0],[55,55,110,0],[55,55,110,55],[55,55,110,110],[55,55,55,110],[55,55,0,110],[55,55,0,55],[55,55,0,0]];
    const names = ["top","tr","right","br","bottom","bl","left","tl"];
    const idx = names.indexOf(shade), d = dirs[idx], next = dirs[(idx+1)%8];
    const marks = { bl:[25,83], tl:[26,27], tr:[84,27], right:[88,63], br:[82,84] };
    return `<polygon points="55,55 ${d[2]},${d[3]} ${next[2]},${next[3]}" fill="${coral}"/><rect width="110" height="110" fill="none" stroke="${navy}" stroke-width="4"/>${dirs.map(a=>`<line x1="55" y1="55" x2="${a[2]}" y2="${a[3]}" stroke="${navy}" stroke-width="2"/>`).join("")}<path d="M${marks[marker][0]-8} ${marks[marker][1]+6}l8-14 8 14z" fill="white" stroke="${navy}" stroke-width="2"/>`;
  }
  art["j1-next-1b"] = () => frame("Dãy hình 1(b)", "Pattern 1(b)", svg(sequencePanels([sectorSquare("tl","bl"),sectorSquare("tr","tl"),sectorSquare("br","tr"),null])));

  function splitCircle(topKind, topN, bottomKind, bottomN) {
    const shapes = (kind,n,y) => Array.from({length:n},(_,i)=>{const x=55+(i-(n-1)/2)*15; return kind==="rect"?`<rect x="${x-5}" y="${y-7}" width="10" height="14" fill="${navy}"/>`:`<path d="M${x-6} ${y+5}L${x} ${y-7}L${x+6} ${y+5}Z" fill="white" stroke="${navy}" stroke-width="2"/>`;}).join("");
    return `<circle cx="55" cy="55" r="51" fill="white" stroke="${navy}" stroke-width="4"/><line x1="5" y1="55" x2="105" y2="55" stroke="${navy}" stroke-width="3"/>${shapes(topKind,topN,32)}${shapes(bottomKind,bottomN,79)}`;
  }
  art["j1-next-1c"] = () => frame("Dãy hình 1(c)", "Pattern 1(c)", svg(sequencePanels([splitCircle("rect",1,"tri",2),splitCircle("tri",4,"rect",2),splitCircle("rect",3,"tri",6),null])));

  function symbolGrid(values) {
    const cell = 55;
    return `<rect width="110" height="110" fill="white" stroke="${navy}" stroke-width="4"/><line x1="55" y1="0" x2="55" y2="110" stroke="${navy}" stroke-width="3"/><line x1="0" y1="55" x2="110" y2="55" stroke="${navy}" stroke-width="3"/>${values.map((v,i)=>`<text x="${(i%2)*cell+27.5}" y="${Math.floor(i/2)*cell+38}" text-anchor="middle" fill="${navy}" font-size="31" font-weight="900">${v}</text>`).join("")}`;
  }
  art["j1-next-1d"] = () => frame("Dãy hình 1(d)", "Pattern 1(d)", svg(sequencePanels([symbolGrid(["○","▬","□","◁"]),symbolGrid(["▮","▽","○","□"]),symbolGrid(["▷","□","▬","○"]),null])));

  art["j1-next-2"] = () => {
    const cell=(x,y,body)=>`${panel(x,y,145,90)}<g transform="translate(${x+26} ${y+12})">${body}</g>`;
    const halfL=`<path d="M45 5L5 33L45 66" fill="none" stroke="${navy}" stroke-width="5"/>`, halfR=`<path d="M45 5L85 33L45 66" fill="none" stroke="${navy}" stroke-width="5"/>`, diamond=`<path d="M45 5L85 33L45 66L5 33Z M45 5V66" fill="none" stroke="${navy}" stroke-width="4"/>`;
    const rectV=`<rect x="5" y="5" width="80" height="60" fill="none" stroke="${navy}" stroke-width="4"/><line x1="45" y1="5" x2="45" y2="65" stroke="${navy}" stroke-width="4"/>`,rectH=`<rect x="5" y="5" width="80" height="60" fill="none" stroke="${navy}" stroke-width="4"/><line x1="5" y1="35" x2="85" y2="35" stroke="${navy}" stroke-width="4"/>`,grid=`<rect x="5" y="5" width="80" height="60" fill="none" stroke="${navy}" stroke-width="4"/><path d="M45 5V65M5 35H85" stroke="${navy}" stroke-width="4"/>`;
    const tri1=`<path d="M5 65L45 5L85 65M5 65L66 30" fill="none" stroke="${navy}" stroke-width="4"/>`,tri2=`<path d="M5 65L45 5L85 65M85 65L24 30" fill="none" stroke="${navy}" stroke-width="4"/>`;
    return frame("Ba phép ghép hình", "Three figure combinations", svg(`${cell(50,25,halfL)}<text x="225" y="82" font-size="32">+</text>${cell(260,25,halfR)}<text x="435" y="82" font-size="32">=</text>${cell(470,25,diamond)}${cell(50,130,rectV)}<text x="225" y="187" font-size="32">+</text>${cell(260,130,rectH)}<text x="435" y="187" font-size="32">=</text>${cell(470,130,grid)}${cell(50,235,tri1)}<text x="225" y="292" font-size="32">+</text>${cell(260,235,tri2)}<text x="435" y="292" font-size="32">=</text>${panel(470,235,145,90)}${question(542,297)}`, "0 0 680 350"));
  };

  function nested(outer,middle,inner,x) {
    const outerShape=outer==="diamond"?`<path d="M${x+70} 30L${x+130} 90L${x+70} 150L${x+10} 90Z"/>`:outer==="circle"?`<circle cx="${x+70}" cy="90" r="60"/>`:`<rect x="${x+10}" y="30" width="120" height="120"/>`;
    const midShape=middle==="diamond"?`<path d="M${x+70} 52L${x+108} 90L${x+70} 128L${x+32} 90Z"/>`:middle==="circle"?`<circle cx="${x+70}" cy="90" r="40"/>`:`<rect x="${x+32}" y="52" width="76" height="76"/>`;
    const inShape=inner==="diamond"?`<path d="M${x+70} 68L${x+92} 90L${x+70} 112L${x+48} 90Z"/>`:inner==="circle"?`<circle cx="${x+70}" cy="90" r="22"/>`:`<rect x="${x+48}" y="68" width="44" height="44"/>`;
    return `<g fill="white" stroke="${navy}" stroke-width="4">${outerShape}${midShape}${inShape}</g>`;
  }
  art["j1-next-3"] = () => frame("Hình 1, 2, 3 và ô trống thứ 4", "Drawings 1, 2, 3 and the blank 4th", svg(`${panel(35,25,180,195,"1")}${nested("diamond","square","circle",55)}${panel(250,25,180,195,"2")}${nested("circle","diamond","square",270)}${panel(465,25,180,195,"3")}${nested("square","circle","diamond",485)}${panel(680,25,180,195,"4")}${question(770,130)}`, "0 0 900 270"));

  const star="✳", diamond="◆", phi="ϕ";
  function tallGrid(x,items) { return `<g transform="translate(${x} 24)"><rect width="140" height="210" rx="8" fill="white" stroke="${navy}" stroke-width="4"/><path d="M70 0V210M0 70H140M0 140H140" stroke="${navy}" stroke-width="3"/>${items.map((v,i)=>`<text x="${i%2?105:35}" y="${Math.floor(i/2)*70+47}" text-anchor="middle" font-size="29" font-weight="900" fill="${navy}">${v}</text>`).join("")}</g>`; }
  art["j1-next-4"] = () => frame("Ba bảng đã cho và bảng thứ tư", "The three given grids and the fourth grid", svg(`${tallGrid(55,[star,"○","△",diamond,phi,"□"])}${tallGrid(270,["△",star,phi,"○","□",diamond])}${tallGrid(485,[phi,"△","□",star,diamond,"○"])}${panel(700,24,140,210)}${question(770,140)}`, "0 0 900 280"));

  function symbolRow(y,vals) { return vals.map((v,i)=>`<g><rect x="${170+i*105}" y="${y}" width="72" height="58" rx="12" fill="${v==="?"?"#f7f9fc":i%2?"#e8f6ff":"#fff4d6"}" stroke="${v==="?"?"#9cb5d4":navy}" stroke-width="3" ${v==="?"?'stroke-dasharray="7 6"':""}/><text x="${206+i*105}" y="${y+39}" text-anchor="middle" font-size="28" font-weight="900" fill="${navy}">${v}</text></g>`).join(""); }
  art["j1-next-5"] = () => frame("Điền bốn ô trống", "Fill the four blanks", svg(`${symbolRow(20,["+","○","▲","▣","Ω"])}${symbolRow(90,["Ω","+","○","▲","▣"])}${symbolRow(160,["▣","Ω","?","?","▲"])}${symbolRow(230,["?","?","Ω","+","○"])}`, "0 0 900 320"));

  function capsule(x,mode) {
    const base=`<rect x="${x}" y="40" width="135" height="205" rx="67" fill="${mode===2?navy:"white"}" stroke="${navy}" stroke-width="5"/>`;
    if(mode===1) return base+`<rect x="${x+3}" y="102" width="129" height="80" fill="${navy}"/>`;
    if(mode===2) return base+`<circle cx="${x+67.5}" cy="142" r="42" fill="white"/>`;
    return base+`<path d="M${x+18} 40H${x+117}A67 67 0 0 1 ${x+135} 102H${x}A67 67 0 0 1 ${x+18} 40ZM${x} 182H${x+135}V200A67 67 0 0 1 ${x} 200Z" fill="${navy}"/>`;
  }
  art["j1-next-6"] = () => frame("Ba viên nang đã cho", "The three given capsules", svg(`${capsule(80,1)}${capsule(300,2)}${capsule(520,3)}${panel(740,40,135,205)}${question(807,160)}`, "0 0 930 290"));

  function stripedPolygon(cx,sides,flip) {
    const r=70, start=sides===4?-3*Math.PI/4:-Math.PI/2, pts=Array.from({length:sides},(_,i)=>{const a=start+i*2*Math.PI/sides;return [cx+Math.cos(a)*r,120+Math.sin(a)*r];});
    const clip=`p${cx}`;
    return `<defs><clipPath id="${clip}"><polygon points="${pts.map(p=>p.join(",")).join(" ")}"/></clipPath></defs><g clip-path="url(#${clip})"><rect x="${cx-75}" y="45" width="150" height="150" fill="white"/><rect x="${cx-75}" y="48" width="150" height="25" fill="${flip?grey:navy}"/><rect x="${cx-75}" y="108" width="150" height="25" fill="${flip?navy:grey}"/><rect x="${cx-75}" y="168" width="150" height="25" fill="${flip?grey:navy}"/></g><polygon points="${pts.map(p=>p.join(",")).join(" ")}" fill="none" stroke="${navy}" stroke-width="5"/>`;
  }
  art["j1-next-7"] = () => frame("Ba hình đã cho", "The three given figures", svg(`${stripedPolygon(140,6,false)}${stripedPolygon(360,5,true)}${stripedPolygon(580,4,false)}${panel(710,30,170,180)}${question(795,130)}`, "0 0 920 250"));

  function person(x,y,body,arms,shoes) {
    const torso=body==="triangle"?`<path d="M${x} ${y+24}L${x-28} ${y+75}H${x+28}Z" fill="${cream}"/>`:body==="round"?`<rect x="${x-24}" y="${y+20}" width="48" height="56" rx="18" fill="${mint}"/>`:`<rect x="${x-23}" y="${y+20}" width="46" height="56" fill="#e7f1ff"/>`;
    const armPath=arms==="up"?`M${x-18} ${y+38}L${x-42} ${y+10}M${x+18} ${y+38}L${x+42} ${y+10}`:arms==="side"?`M${x-18} ${y+42}H${x-48}M${x+18} ${y+42}H${x+48}`:`M${x-18} ${y+42}L${x-38} ${y+68}M${x+18} ${y+42}L${x+38} ${y+68}`;
    return `<g stroke="${navy}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><circle cx="${x}" cy="${y}" r="15" fill="#ffd6bd"/>${torso}<path d="${armPath}M${x-12} ${y+74}L${x-12} ${y+96}M${x+12} ${y+74}L${x+12} ${y+96}" fill="none"/>${shoes?`<rect x="${x-24}" y="${y+93}" width="16" height="8" fill="${coral}"/><rect x="${x+8}" y="${y+93}" width="16" height="8" fill="${coral}"/>`:""}</g>`;
  }
  art["j1-next-8"] = () => {
    const xs=[190,450,710],ys=[35,145,255];
    const specs=[["triangle","side",false],["rect","up",true],["round","down",false],["round","up",true],["triangle","down",false],["rect","side",false],["rect","down",false],["round","side",false],null];
    return frame("Bảng 3 × 3 còn thiếu một hình", "A 3-by-3 grid with one missing figure", svg(`${[0,1,2].map(r=>[0,1,2].map(c=>panel(100+c*260,15+r*110,180,102)).join("")).join("")}${specs.map((s,i)=>s?person(xs[i%3],ys[Math.floor(i/3)],...s):question(xs[i%3],ys[Math.floor(i/3)]+55)).join("")}`, "0 0 900 360"));
  };

  function sourceTree(x,stage) {
    const trunk=`<path d="M${x} 220V55"/>`;
    if(stage===1) return trunk;
    const main=`M${x} 185L${x-52} 132M${x} 185L${x+52} 132`;
    if(stage===2) return trunk+`<path d="${main}"/>`;
    const twigs=`M${x-28} 158L${x-48} 139M${x-28} 158L${x-12} 138M${x+28} 158L${x+48} 139M${x+28} 158L${x+12} 138M${x} 105L${x-24} 82M${x} 105L${x+24} 82`;
    return trunk+`<path d="${main}${twigs}"/>`;
  }
  art["j1-next-9"] = () => frame("Ba hình đầu và ô trống thứ tư", "The first three patterns and the blank fourth", svg(`${[1,2,3].map((stage,i)=>`${panel(30+i*220,25,190,225,`${i+1}${isVi()?"":i===0?"st":i===1?"nd":"rd"}`)}<g stroke="${navy}" stroke-width="5" stroke-linecap="round" fill="none">${sourceTree(125+i*220,stage)}</g>`).join("")}${panel(690,25,180,225,`4${isVi()?"":"th"}`)}${question(780,145)}`, "0 0 900 300"));

  function tunnel(x,outer,inner) {
    const coords={top:`${x+10},25 ${x+150},25 ${x+120},60 ${x+40},60`,right:`${x+150},25 ${x+150},165 ${x+115},135 ${x+115},60`,bottom:`${x+10},165 ${x+150},165 ${x+115},135 ${x+45},135`,left:`${x+10},25 ${x+45},60 ${x+45},135 ${x+10},165`};
    const innerPts={top:`${x+45},60 ${x+115},60 ${x+80},95`,right:`${x+115},60 ${x+115},135 ${x+80},95`,bottom:`${x+45},135 ${x+115},135 ${x+80},95`,left:`${x+45},60 ${x+45},135 ${x+80},95`};
    return `<polygon points="${coords[outer]}" fill="${blue}"/><polygon points="${innerPts[inner]}" fill="${coral}"/><rect x="${x+10}" y="25" width="140" height="140" fill="none" stroke="${navy}" stroke-width="4"/><rect x="${x+45}" y="60" width="70" height="75" fill="none" stroke="${navy}" stroke-width="4"/><path d="M${x+10} 25L${x+45} 60M${x+150} 25L${x+115} 60M${x+10} 165L${x+45} 135M${x+150} 165L${x+115} 135M${x+45} 60L${x+80} 95L${x+115} 60M${x+45} 135L${x+80} 95L${x+115} 135" stroke="${navy}" stroke-width="3" fill="none"/>`;
  }
  art["j1-next-10"] = () => frame("Hình thứ hai chưa được tô", "The second drawing is not shaded", svg(`${tunnel(25,"right","left")}${panel(225,25,160,165,"2")}${question(305,120)}${tunnel(425,"left","right")}${tunnel(625,"top","bottom")}`, "0 0 820 240"));

  art["j1-next-11"] = () => {
    const a=`<circle cx="80" cy="88" r="58"/><path d="M80 15V162M30 53H130M23 72H137M22 91H138M26 110H134M36 129H124"/>`;
    const b=`<rect x="20" y="25" width="120" height="126"/><path d="M5 88H155M20 25L55 88L20 151M140 25L105 88L140 151M55 25L80 88L105 25M55 151L80 88L105 151"/>`;
    const c=`<path d="M80 20L18 150H142Z M80 0V170M80 78L49 49M80 78L111 49M80 132L45 94M80 132L115 94"/>`;
    const d=`<path d="M30 58L80 20L132 58L120 151H40Z M30 58H132M34 82H128M36 106H125M38 130H122M25 165L115 8"/>`;
    const shapes=[a,b,c,d];
    return frame("Bốn hình A, B, C và D", "Figures A, B, C and D", svg(shapes.map((shape,i)=>`${panel(45+i*210,25,170,200,String.fromCharCode(65+i))}<g transform="translate(${50+i*210} 36)" fill="none" stroke="${navy}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${shape}</g>`).join(""), "0 0 900 275"));
  };

  function koch(iter,cx,cy,r) {
    let pts=Array.from({length:3},(_,i)=>{const a=-Math.PI/2+i*2*Math.PI/3;return [cx+Math.cos(a)*r,cy+Math.sin(a)*r];}); pts.push(pts[0]);
    for(let k=0;k<iter;k++){const next=[];for(let i=0;i<pts.length-1;i++){const [ax,ay]=pts[i],[bx,by]=pts[i+1],dx=(bx-ax)/3,dy=(by-ay)/3;const p1=[ax,ay],p2=[ax+dx,ay+dy],p4=[ax+2*dx,ay+2*dy];const mx=p2[0]+dx/2,my=p2[1]+dy/2,ang=Math.atan2(dy,dx)-Math.PI/2,ln=Math.hypot(dx,dy)*Math.sqrt(3)/2;const p3=[mx+Math.cos(ang)*ln,my+Math.sin(ang)*ln];next.push(p1,p2,p3,p4);}next.push(next[0]);pts=next;} return `<polyline points="${pts.map(p=>p.map(n=>n.toFixed(1)).join(",")).join(" ")}" fill="none" stroke="${navy}" stroke-width="3" stroke-linejoin="round"/>`;
  }
  art["j1-next-12"] = () => frame("Ba hình đầu và ô trống thứ tư", "The first three patterns and the blank fourth", svg(`${panel(25,35,190,190,"1")}${koch(0,120,130,72)}${panel(240,35,190,190,"2")}${koch(1,335,130,72)}${panel(455,35,190,190,"3")}${koch(2,550,130,72)}${panel(670,35,190,190,"4")}${question(765,145)}`, "0 0 900 270"));

  function mirroredNumberPattern(x,n) {
    const paths={
      1:`M${x-38} 55V145H${x+38}V55M${x-38} 55L${x} 95L${x+38} 55M${x-52} 145H${x+52}`,
      2:`M${x-50} 70Q${x-28} 35 ${x} 70Q${x+28} 35 ${x+50} 70L${x} 142Z M${x-58} 142H${x+58}`,
      3:`M${x} 80C${x-10} 38 ${x-62} 42 ${x-48} 88C${x-62} 134 ${x-10} 138 ${x} 96C${x+10} 138 ${x+62} 134 ${x+48} 88C${x+62} 42 ${x+10} 38 ${x} 80Z`,
      4:`M${x-40} 50V165M${x+40} 50V165M${x-40} 50L${x} 92L${x+40} 50M${x-55} 92H${x+55}`,
    };
    return `<path d="${paths[n]}" fill="none" stroke="${navy}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`;
  }
  art["j1-next-13"] = () => frame("Bốn hình đầu; vẽ hình thứ 5 và thứ 6", "The first four patterns; draw the 5th and 6th", svg(`${[1,2,3,4].map((n,i)=>`${panel(10+i*145,15,130,180,`${n}${isVi()?"":n===1?"st":n===2?"nd":n===3?"rd":"th"}`)}${mirroredNumberPattern(75+i*145,n)}`).join("")}${panel(590,15,130,180,`5${isVi()?"":"th"}`)}${question(655,115)}${panel(735,15,130,180,`6${isVi()?"":"th"}`)}${question(800,115)}`, "0 0 880 245"));
  art["j1-next-14"] = () => {
    const forms=[
      "M20 18H86M20 18V82H86V150H20M20 150H86",
      "M20 18H86M20 18V150M20 82H80M20 150H86",
      "M20 18V150M20 82H86M86 18V82",
      "M20 18H86M86 18V82H20V150H86",
    ];
    return frame("Dãy nét trong đề bài", "The stroke sequence in the question", svg(forms.map((d,i)=>`${panel(25+i*190,20,155,180)}<g transform="translate(${48+i*190} 32)" fill="none" stroke="${navy}" stroke-width="6" stroke-linecap="square" stroke-linejoin="miter"><path d="${d}"/></g>`).join("")+`<text x="810" y="125" font-size="42" font-weight="900" fill="${navy}">→ ?</text>`, "0 0 900 240"));
  };

  art["j1-next-extra-1"] = art["j1-next-example-1"];
  art["j1-next-extra-2"] = () => frame("Tìm hình tiếp theo", "Find the next shape", svg(`<circle cx="120" cy="110" r="35" fill="${blue}" stroke="${navy}" stroke-width="4"/><rect x="260" y="75" width="70" height="70" rx="10" fill="${coral}" stroke="${navy}" stroke-width="4"/><circle cx="470" cy="110" r="35" fill="${blue}" stroke="${navy}" stroke-width="4"/><rect x="610" y="75" width="70" height="70" rx="10" fill="${coral}" stroke="${navy}" stroke-width="4"/>${question(820,125)}`, "0 0 900 220"));
  art["j1-next-extra-3"] = () => frame("Số khối tăng đều", "The number of blocks grows evenly", svg([1,3,5].map((n,i)=>Array.from({length:n},(_,j)=>`<rect x="${100+i*250+(j-(n-1)/2)*31}" y="95" width="28" height="28" rx="4" fill="${i%2?mint:cream}" stroke="${navy}" stroke-width="3"/>`).join("")).join("")+question(845,120), "0 0 920 210"));
  art["j1-next-extra-4"] = () => frame("Chấm tròn đi quanh bốn góc", "The dot moves around the four corners", svg([0,1,2].map((pos,i)=>{const x=90+i*245,y=40,coords=[[x+18,y+18],[x+102,y+18],[x+102,y+102],[x+18,y+102]];return `<rect x="${x}" y="${y}" width="120" height="120" rx="10" fill="white" stroke="${navy}" stroke-width="4"/><circle cx="${coords[pos][0]}" cy="${coords[pos][1]}" r="11" fill="${coral}" stroke="${navy}" stroke-width="3"/>`;}).join("")+panel(790,40,120,120)+question(850,115), "0 0 960 220"));
  art["j1-next-extra-5"] = () => frame("Hai kí hiệu chuyển động ngược chiều", "The two symbols move in opposite directions", svg(`<g transform="translate(130 35)">${symbolGrid(["○","△",""," "])}</g><text x="390" y="105" font-size="40" fill="${navy}">→</text><g transform="translate(470 35)">${symbolGrid(["○","△",""," "])}</g><text x="730" y="105" font-size="40" fill="${navy}">→ ?</text>`, "0 0 850 210"));
})();
