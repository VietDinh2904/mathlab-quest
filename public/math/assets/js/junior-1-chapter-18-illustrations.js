(function registerJuniorOneChapterEighteenIllustrations() {
  "use strict";
  const art = window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {};
  const isVi = () => document.documentElement.lang !== "en";
  const t = (vi, en) => isVi() ? vi : en;
  const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const navy = "#17365d", blue = "#78b7ff", coral = "#ff806f", green = "#59c9a8", gold = "#ffd57a", ink = "#23314d";
  const svg = (body, viewBox = "0 0 900 330", label = "") => `<svg viewBox="${viewBox}" role="img" aria-label="${esc(label)}" style="display:block;width:min(100%,980px);height:auto;margin:auto">${body}</svg>`;
  const frame = (vi, en, body) => `<div class="book-visual"><div class="book-visual-title">${esc(t(vi, en))}</div>${body}</div>`;
  const text = (x, y, value, size = 23, weight = 800, anchor = "middle", fill = ink) => `<text x="${x}" y="${y}" text-anchor="${anchor}" fill="${fill}" font-size="${size}" font-weight="${weight}">${esc(value)}</text>`;
  const line = (x1, y1, x2, y2, color = navy, width = 4, dash = "") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}"${dash ? ` stroke-dasharray="${dash}"` : ""}/>`;
  const rect = (x, y, w, h, fill = "#fffdfa", stroke = navy, width = 3, rx = 14) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${width}"/>`;
  const circle = (x, y, r, fill = "#fffdfa", stroke = navy, width = 3) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${width}"/>`;

  function queue(count, marked = {}, labels = {}, options = {}) {
    const left = 80, right = 820, y = 125;
    const step = count > 1 ? (right - left) / (count - 1) : 0;
    let body = `${text(75,55,t("đầu hàng","front"),18,800,"start",green)}${text(825,55,t("cuối hàng","back"),18,800,"end",coral)}${line(80,78,820,78,"#b8c8dc",3,"8 8")}`;
    for (let i = 1; i <= count; i += 1) {
      const x = left + (i - 1) * step;
      const fill = marked[i] || "#fffdfa";
      body += `${circle(x,y,count > 16 ? 16 : 21,fill,navy,3)}`;
      if (labels[i]) body += text(x,180,labels[i],17,800,"middle",fill === coral ? "#b33f32" : ink);
      if (options.numbered) body += text(x,132,i,13,800);
    }
    if (options.caption) body += text(450,245,options.caption,24,900,"middle",options.captionColor || navy);
    return svg(body,"0 0 900 280");
  }

  function sectionQueue(parts, solution = false, names = []) {
    const widths = parts.map((part) => Math.max(100, part * 30));
    const totalWidth = widths.reduce((a,b)=>a+b,0) + (parts.length - 1) * 12;
    let x = (900 - totalWidth) / 2;
    let body = "";
    parts.forEach((part, index) => {
      body += `${rect(x,90,widths[index],95,["#e8f3ff","#fff1bf","#e7f7f2"][index] || "#ffe8df",navy,3,18)}${text(x+widths[index]/2,135,solution ? part : "?",30,900)}${text(x+widths[index]/2,178,names[index] || "",17,800)}`;
      x += widths[index] + 12;
    });
    if (solution) body += text(450,245,`${parts.join(" + ")} = ${parts.reduce((a,b)=>a+b,0)}`,27,900,"middle",green);
    return svg(body,"0 0 900 285");
  }

  art["j1-queue-example-animals"] = () => frame("Đếm từ đầu hàng", "Count from the front", svg(`${["🦓","🦘","🦒","🐘","🐧","🐇"].map((a,i)=>text(150+i*120,120,a,44,700)).join("")}${[1,2,3,4,5,6].map((n,i)=>text(150+i*120,180,n,20)).join("")}`,"0 0 900 230"));
  art["j1-queue-example-anne"] = () => frame("Anne được đếm từ cả hai đầu", "Anne is counted from both ends", queue(9,{5:coral},{5:"Anne"},{caption:"5 + 5 − 1 = 9",captionColor:green}));
  art["j1-queue-example-sharon"] = () => frame("Năm trước, Sharon, sáu sau", "Five before, Sharon, six after", sectionQueue([5,1,6],true,[t("trước","before"),"Sharon",t("sau","after")]));
  art["j1-queue-example-priscilla"] = () => frame("Năm trước, Priscilla, tám sau", "Five before, Priscilla, eight after", sectionQueue([5,1,8],true,[t("trước","before"),"Priscilla",t("sau","after")]));
  art["j1-queue-example-laura-amanda"] = () => frame("Sáu đầu, ba giữa, sáu cuối", "Six first, three between, six last", sectionQueue([6,3,6],true,["Laura",t("ở giữa","between"),"Amanda"]));

  art["j1-queue-1"] = () => frame("Tám xe, xe đỏ thứ 5 từ đầu", "Eight cars, red car fifth from front", queue(8,{5:coral},{5:t("xe đỏ","red car")},{numbered:true}));
  art["j1-queue-1-solution"] = () => frame("Đếm ngược từ cuối", "Count back from the end", queue(8,{5:coral},{5:t("thứ 4 từ cuối","4th from back")},{caption:"8 − 5 + 1 = 4",captionColor:green}));
  art["j1-queue-2"] = () => frame("Ba trước, Melanie, bảy sau", "Three before, Melanie, seven after", sectionQueue([3,1,7],false,[t("trước","before"),"Melanie",t("sau","after")]));
  art["j1-queue-2-solution"] = () => frame("Tính Melanie một lần", "Count Melanie once", sectionQueue([3,1,7],true,[t("trước","before"),"Melanie",t("sau","after")]));
  art["j1-queue-3"] = () => frame("Bảy hạt trắng ở mỗi bên", "Seven white beads on each side", sectionQueue([7,1,7],false,[t("hạt trắng","white beads"),t("hạt đen","black bead"),t("hạt trắng","white beads")]));
  art["j1-queue-3-solution"] = () => frame("Tính cả hạt đen ở giữa", "Include the black bead", sectionQueue([7,1,7],true,[t("trái","left"),t("đen","black"),t("phải","right")]));
  art["j1-queue-4"] = () => frame("Ba bên trái, Tanya, năm bên phải", "Three left, Tanya, five right", sectionQueue([3,1,5],false,[t("bên trái","left"),"Tanya",t("bên phải","right")]));
  art["j1-queue-4-solution"] = () => frame("Tổng số thành viên", "Total members", sectionQueue([3,1,5],true,[t("bên trái","left"),"Tanya",t("bên phải","right")]));
  art["j1-queue-5"] = () => frame("Bruno đứng thứ 9 trong 15 người", "Bruno is ninth among 15", queue(15,{9:coral},{9:"Bruno"},{numbered:true}));
  art["j1-queue-5-solution"] = () => frame("Bruno đứng thứ 7 từ cuối", "Bruno is seventh from the back", queue(15,{9:coral},{9:t("thứ 7 từ cuối","7th from back")},{caption:"15 − 9 + 1 = 7",captionColor:green}));

  function clothesline(solution = false) {
    let body = `${line(100,80,800,80,navy,5)}`;
    for (let i=0;i<5;i+=1) body += `${rect(120+i*130,85,130,120,["#e8f3ff","#fff1bf","#e7f7f2","#ffe8df","#eee8ff"][i],navy,3,4)}`;
    for (let i=0;i<6;i+=1) body += `${circle(120+i*130,80,10,solution?gold:"#fffdfa",navy,3)}`;
    body += solution ? text(450,255,t("6 chiếc kẹp","6 pegs"),28,900,"middle",green) : text(450,255,"?",42,900);
    return svg(body,"0 0 900 300");
  }
  art["j1-queue-6"] = () => frame("Năm chiếc khăn dùng chung kẹp", "Five handkerchiefs share pegs", clothesline(false));
  art["j1-queue-6-solution"] = () => frame("Sáu điểm kẹp", "Six peg positions", clothesline(true));
  art["j1-queue-7"] = () => frame("Jolene, ba bạn ở giữa, Amy", "Jolene, three between, Amy", sectionQueue([6,3,8],false,["Jolene",t("ở giữa","between"),"Amy"]));
  art["j1-queue-7-solution"] = () => frame("Ghép ba đoạn của hàng", "Join the three queue sections", sectionQueue([6,3,8],true,["Jolene",t("ở giữa","between"),"Amy"]));
  art["j1-queue-8"] = () => frame("Robin và Rosalind cách nhau bốn bạn", "Four children between Robin and Rosalind", sectionQueue([6,4,6],false,["Robin",t("ở giữa","between"),"Rosalind"]));
  art["j1-queue-8-solution"] = () => frame("Kết quả đúng là 16 ghế", "The correct total is 16 seats", sectionQueue([6,4,6],true,["Robin",t("ở giữa","between"),"Rosalind"]));
  art["j1-queue-9"] = () => frame("Vanessa thứ 3, Andrea thứ 6 từ cuối", "Vanessa third, Andrea sixth from back", queue(18,{3:blue,13:coral},{3:"Vanessa",13:"Andrea"},{}));
  art["j1-queue-9-solution"] = () => frame("Chín bạn đứng giữa", "Nine children stand between", queue(18,{3:blue,13:coral},{3:"Vanessa",13:"Andrea"},{caption:"13 − 3 − 1 = 9",captionColor:green}));

  function planks(solution = false) {
    return svg(`${rect(120,95,410,45,"#e8f3ff",navy,3,3)}${rect(370,155,410,45,"#fff1bf",navy,3,3)}${line(370,75,530,75,coral,4)}${text(450,62,"10 cm",20)}${line(120,235,780,235,navy,3)}${text(450,275,"90 cm",22)}${solution?`${text(310,128,"50 cm",22)}${text(590,188,"50 cm",22)}${text(450,325,"(90 + 10) ÷ 2 = 50 cm",26,900,"middle",green)}`:text(450,325,t("Mỗi tấm dài ?","Each plank = ?"),28,900)}`,"0 0 900 360");
  }
  art["j1-queue-10"] = () => frame("Hai tấm ván chồng nhau 10 cm", "Two planks overlap by 10 cm", planks(false));
  art["j1-queue-10-solution"] = () => frame("Cộng lại phần chồng rồi chia đôi", "Restore the overlap and halve", planks(true));

  function ribbons(solution = false) {
    return svg(`${line(120,140,420,140,blue,12)}${line(480,140,780,140,coral,12)}${text(450,150,"🎀",42)}${line(120,90,780,90,navy,3)}${text(450,72,"60 cm",22)}${text(300,195,t("đã dùng 15 cm","15 cm used"),18,800,"middle",blue)}${text(600,195,t("đã dùng 15 cm","15 cm used"),18,800,"middle",coral)}${solution?text(450,270,"(60 + 15 + 15) ÷ 2 = 45 cm",26,900,"middle",green):text(450,270,t("Mỗi dải dài ?","Each ribbon = ?"),30,900)}`,"0 0 900 315");
  }
  art["j1-queue-11"] = () => frame("Hai dải ruy-băng thắt nơ", "Two ribbons tied in a bow", ribbons(false));
  art["j1-queue-11-solution"] = () => frame("Cộng lại phần đã dùng", "Restore the used lengths", ribbons(true));

  function swimmers(solution = false) {
    return svg(`${circle(380,150,105,"#dcecff",navy,4)}${circle(520,150,105,"#ffe4c7",navy,4)}${text(330,155,solution?25:"35",28,900)}${text(450,155,"10",28,900)}${text(570,155,solution?13:"23",28,900)}${text(300,55,t("bơi tự do","freestyle"),20)}${text(600,55,t("bơi ngửa","backstroke"),20)}${solution?text(450,300,"25 + 10 + 13 = 48",27,900,"middle",green):text(450,300,"35 + 23 − 10 = ?",27,900)}`,"0 0 900 340");
  }
  art["j1-queue-12"] = () => frame("Mười học sinh tham gia cả hai", "Ten students joined both", swimmers(false));
  art["j1-queue-12-solution"] = () => frame("Không tính trùng phần giao", "Do not double-count the overlap", swimmers(true));
})();
