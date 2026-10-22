(function registerJuniorOneChapterFifteenIllustrations() {
  "use strict";
  const art = window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {};
  const isVi = () => document.documentElement.lang !== "en";
  const t = (vi, en) => isVi() ? vi : en;
  const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const navy = "#17365d", blue = "#75b8f3", coral = "#ff765f", cream = "#fff4d6", green = "#50c8a6";
  const svg = (body, viewBox = "0 0 900 320", label = "") => `<svg viewBox="${viewBox}" role="img" aria-label="${esc(label)}" style="display:block;width:min(100%,980px);height:auto;margin:auto">${body}</svg>`;
  const frame = (vi, en, body) => `<div class="book-visual"><div class="book-visual-title">${esc(t(vi, en))}</div>${body}</div>`;
  const text = (x, y, value, size = 24, weight = 800, anchor = "middle", fill = navy) => `<text x="${x}" y="${y}" text-anchor="${anchor}" fill="${fill}" font-size="${size}" font-weight="${weight}">${esc(value)}</text>`;
  const card = (x, y, w, h, fill = "#fffdfa") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="${fill}" stroke="${navy}" stroke-width="3"/>`;

  function boxes(values, y = 85) {
    return values.map((value, i) => `${card(85 + i * 145, y, 105, 82, i % 2 ? "#e9f8f2" : "#fff4d6")}${text(137 + i * 145, y + 53, value, 28, 900)}`).join("");
  }

  art["j1-iq-example-1"] = () => frame("Năm hộp có tổng 35", "Five boxes total 35", svg(`${boxes(["?", "?", "?", "?", "?"])}${text(450, 230, t("Tổng: 35 viên bi", "Total: 35 marbles"), 25)}`, "0 0 900 270"));
  art["j1-iq-example-2"] = () => frame("Mười hai vị trí quanh hình vuông", "Twelve positions around a square", svg(`<rect x="270" y="35" width="360" height="240" rx="8" fill="#eef9e8" stroke="${navy}" stroke-width="5"/>${[[270,35],[390,35],[510,35],[630,35],[270,115],[630,115],[270,195],[630,195],[270,275],[390,275],[510,275],[630,275]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="13" fill="${coral}" stroke="${navy}" stroke-width="3"/>`).join("")}`, "0 0 900 320"));
  art["j1-iq-example-3"] = () => frame("Ghép các số trên mặt đồng hồ", "Pair the clock numbers", clockVisual(false, true));

  art["j1-iq-1"] = () => frame("Năm hộp và 35 viên bi", "Five boxes and 35 marbles", svg(`${boxes(["?", "?", "?", "?", "?"])}${text(450, 230, t("Tổng 35 · mỗi hộp là một số lẻ khác nhau", "Total 35 · every box has a different odd number"), 22)}`, "0 0 900 270"));

  art["j1-iq-2"] = () => {
    const headers = ["A", "B", "C", "D", "E", "F"], prices = [25, 10, 5, 8, 12, 20];
    const cells = headers.map((h, i) => `<rect x="${220 + i * 92}" y="55" width="92" height="58" fill="#eaf3ff" stroke="${navy}" stroke-width="2"/>${text(266 + i * 92, 92, h, 24)}<rect x="${220 + i * 92}" y="113" width="92" height="58" fill="#fff7df" stroke="${navy}" stroke-width="2"/>${text(266 + i * 92, 150, `$${prices[i]}`, 22)}`).join("");
    return frame("Bảng giá sáu món hàng", "Price list for six items", svg(`${text(125, 92, t("Món", "Item"), 23)}${text(125, 150, t("Giá", "Price"), 23)}${cells}${text(450, 225, t("Calvin có $50", "Calvin has $50"), 25)}`, "0 0 900 270"));
  };

  art["j1-iq-3"] = () => frame("Các số từ 1 đến 50", "Numbers from 1 to 50", svg(`${Array.from({length:50},(_,i)=>{const col=i%10,row=Math.floor(i/10);return `${card(85+col*73,35+row*52,58,42,i>=9&&i<=18?"#fff4d6":"#f7fbff")}${text(114+col*73,63+row*52,String(i+1),17,800)}`;}).join("")}`, "0 0 900 315"));

  art["j1-iq-4"] = () => frame("42 người và chiếc xuồng chở tối đa 6 người", "42 people and a dinghy for at most 6", svg(`<path d="M0 210Q150 175 300 210T600 210T900 210V320H0Z" fill="#d9f2ff"/><path d="M360 170Q450 220 540 170L520 225H380Z" fill="${cream}" stroke="${navy}" stroke-width="4"/>${text(450, 205, "6", 30)}${text(185, 115, "42", 46, 900)}${Array.from({length:7},(_,i)=>`<circle cx="${95+i*30}" cy="155" r="10" fill="${i%2?coral:blue}" stroke="${navy}" stroke-width="2"/>`).join("")}${text(185, 55,t("Người thám hiểm","Adventurers"),22)}${text(450, 275,t("Sông","River"),22)}`, "0 0 900 320"));

  function balance(x, y, leftCount, rightCount) {
    const coin = (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="11" fill="#f7c948" stroke="${navy}" stroke-width="2"/>`;
    return `<g><path d="M${x} ${y}V${y+105}M${x-48} ${y+105}H${x+48}M${x-135} ${y+15}H${x+135}" stroke="${navy}" stroke-width="5" fill="none"/><path d="M${x-110} ${y+15}L${x-145} ${y+70}H${x-75}ZM${x+110} ${y+15}L${x+75} ${y+70}H${x+145}Z" fill="#edf4ff" stroke="${navy}" stroke-width="3"/>${Array.from({length:leftCount},(_,i)=>coin(x-125+i*30,y+52)).join("")}${Array.from({length:rightCount},(_,i)=>coin(x+95+i*30,y+52)).join("")}</g>`;
  }
  art["j1-iq-5"] = () => frame("Chín đồng tiền và cân thăng bằng", "Nine coins and a balance", svg(`${balance(450,45,3,3)}${Array.from({length:3},(_,i)=>`<circle cx="${420+i*30}" cy="250" r="11" fill="#f7c948" stroke="${navy}" stroke-width="2"/>`).join("")}${text(450, 295,t("Nhóm chưa cân","Unweighed group"),20)}`, "0 0 900 330"));

  art["j1-iq-6"] = () => frame("Sáu chìa khóa và sáu ổ khóa", "Six keys and six padlocks", svg(`${[0,1,2,3,4,5].map(i=>`<g transform="translate(${90+i*135} 45)"><circle cx="18" cy="18" r="14" fill="none" stroke="${navy}" stroke-width="6"/><path d="M30 30L85 85M62 62l14-14M72 72l14-14" stroke="${navy}" stroke-width="7" stroke-linecap="round"/><rect x="20" y="130" width="70" height="60" rx="10" fill="${i%2?"#e9f8f2":"#fff4d6"}" stroke="${navy}" stroke-width="4"/><path d="M38 130V112a17 17 0 0 1 34 0v18" fill="none" stroke="${navy}" stroke-width="4"/></g>`).join("")}`, "0 0 900 290"));

  art["j1-iq-7"] = () => frame("Một chiếc bánh và ba đường cắt", "One pizza and three cuts", svg(`<circle cx="450" cy="145" r="115" fill="#ffd98a" stroke="${navy}" stroke-width="5"/>${[[405,95],[490,85],[430,175],[510,185],[370,145]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="12" fill="${coral}"/>`).join("")}<g stroke="${navy}" stroke-width="4" stroke-dasharray="10 8" opacity=".42"><line x1="335" y1="145" x2="565" y2="145"/><line x1="385" y1="45" x2="515" y2="245"/><line x1="350" y1="215" x2="550" y2="70"/></g>`, "0 0 900 290"));

  function pagesVisual(operation, total) {
    return svg(`<path d="M170 50Q300 25 440 70V250Q300 205 170 235ZM440 70Q580 25 730 50V235Q580 205 440 250Z" fill="#fffdf4" stroke="${navy}" stroke-width="5"/><line x1="440" y1="70" x2="440" y2="250" stroke="${navy}" stroke-width="4"/>${text(330,155,"?",54,900)}${text(555,155,"?",54,900)}${text(440,295,`${operation} = ${total}`,26)}`, "0 0 900 330");
  }
  art["j1-iq-8"] = () => frame("Hai trang đối diện có tổng 35", "Two facing pages total 35", pagesVisual("? + ?", 35));
  art["j1-iq-9"] = () => frame("Hai trang đối diện có tích 132", "Two facing pages have product 132", pagesVisual("? × ?", 132));

  function clockVisual(withBreaks = false, showPairs = false) {
    const cx=450,cy=165,r=120;
    const nums=Array.from({length:12},(_,i)=>{const n=i+1,a=(n/6-.5)*Math.PI;return text(cx+Math.cos(a)*r*.79,cy+Math.sin(a)*r*.79+8,String(n),22,800);}).join("");
    const breaks = withBreaks ? `<g stroke="${coral}" stroke-width="5"><line x1="335" y1="95" x2="566" y2="132"/><line x1="335" y1="198" x2="565" y2="235"/></g>` : "";
    const pairs = showPairs ? `<g stroke="${green}" stroke-width="3" stroke-dasharray="7 6"><line x1="423" y1="58" x2="478" y2="58"/><line x1="370" y1="80" x2="525" y2="80"/><line x1="345" y1="115" x2="550" y2="115"/><line x1="345" y1="215" x2="550" y2="215"/><line x1="370" y1="250" x2="525" y2="250"/><line x1="423" y1="272" x2="478" y2="272"/></g>` : "";
    return svg(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fffdf7" stroke="${navy}" stroke-width="9"/>${nums}<circle cx="${cx}" cy="${cy}" r="7" fill="${navy}"/>${pairs}${breaks}`, "0 0 900 320");
  }
  art["j1-iq-10"] = () => frame("Mặt đồng hồ trước khi vỡ", "Clock face before it broke", clockVisual(false, false));
  art["j1-iq-10-solution"] = () => frame("Ba mảnh, mỗi mảnh có tổng 26", "Three pieces, each totalling 26", clockVisual(true, false));

  function stairShape(showCut = false) {
    const x0=120,y0=260,s=92;
    const verticals=Array.from({length:7},(_,i)=>{const x=x0+i*s, top=Math.max(55,168-i*18.8);return `<line x1="${x}" y1="${top}" x2="${x}" y2="${y0}"/>`;}).join("");
    return svg(`<g fill="none" stroke="${navy}" stroke-width="3"><path d="M${x0} ${y0}V168L${x0+6*s} 55V${y0}Z" fill="#fffdf8" stroke-width="5"/>${verticals}<line x1="${x0}" y1="${y0-s}" x2="${x0+6*s}" y2="${y0-s}"/><line x1="${x0}" y1="${y0-2*s}" x2="${x0+6*s}" y2="${y0-2*s}"/>${showCut?`<line x1="${x0+3*s}" y1="111" x2="${x0+3*s}" y2="${y0}" stroke="${coral}" stroke-width="7" stroke-dasharray="12 9"/>`:""}</g>`, "0 0 900 320");
  }
  art["j1-iq-11"] = () => frame("Hình cần chia", "Figure to divide", stairShape(false));
  art["j1-iq-11-solution"] = () => frame("Đường chia hai phần giống hệt", "Line dividing two identical parts", stairShape(true));
  art["j1-iq-12"] = () => frame("Mặt đồng hồ cần chia thành sáu vùng", "Clock to divide into six regions", clockVisual(false, false));
  art["j1-iq-12-solution"] = () => frame("Sáu cặp đều có tổng 13", "Six pairs each total 13", clockVisual(false, true));

  function fourPartShape(solution = false) {
    const base = `<path d="M120 260H760V60H440L120 260Z" fill="#fffdf8" stroke="${navy}" stroke-width="5"/><g stroke="${navy}" stroke-width="3"><line x1="280" y1="160" x2="760" y2="160"/><line x1="280" y1="160" x2="280" y2="260"/><line x1="440" y1="60" x2="440" y2="260"/><line x1="600" y1="60" x2="600" y2="260"/></g>`;
    const overlay = solution ? `<g opacity=".72"><path d="M120 260H280V160Z" fill="#ffd36d"/><path d="M280 260H440V60L280 160Z" fill="#8fdac6"/><path d="M440 60H600V260H440Z" fill="#8fc5ff"/><path d="M600 60H760V260L600 160Z" fill="#ff9f8d"/></g><line x1="600" y1="160" x2="760" y2="260" stroke="${navy}" stroke-width="4"/>` : "";
    return svg(`${base}${overlay}`, "0 0 900 320");
  }
  art["j1-iq-13"] = () => frame("Hình cần chia thành bốn phần", "Shape to divide into four parts", fourPartShape(false));
  art["j1-iq-13-solution"] = () => frame("Một cách tô bốn phần", "One four-part colouring", fourPartShape(true));

  const optionCells = {
    a: [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[1,1],[2,1],[3,1],[4,1],[5,1]],
    b: [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[1,1],[2,1],[3,1],[4,1],[5,1],[3,2]],
    c: [[2,0],[1,1],[2,1],[3,1],[4,1],[5,1],[0,2],[1,2],[2,2],[3,2],[4,2],[5,2]],
    d: [[4,0],[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[0,2],[1,2],[2,2],[3,2],[4,2]],
  };
  function tileOption(key, x, y, scale = 42, status = "") {
    const cells = optionCells[key].map(([cx,cy])=>`<rect x="${x+cx*scale}" y="${y+cy*scale}" width="${scale}" height="${scale}" fill="#fffdf8" stroke="${navy}" stroke-width="2"/>`).join("");
    const mark = status === "yes" ? `<circle cx="${x+285}" cy="${y+55}" r="21" fill="${green}"/>${text(x+285,y+64,"✓",26,900,"middle","white")}` : status === "no" ? `<circle cx="${x+285}" cy="${y+55}" r="21" fill="${coral}"/>${text(x+285,y+64,"×",28,900,"middle","white")}` : "";
    return `${text(x-25,y+30,`(${key})`,22,900,"middle")}${cells}${mark}`;
  }
  function tilePage(solution = false) {
    const tile = `<g transform="translate(365 20)"><rect x="0" y="42" width="42" height="42" fill="${cream}" stroke="${navy}" stroke-width="3"/><rect x="0" y="0" width="42" height="42" fill="${cream}" stroke="${navy}" stroke-width="3"/><rect x="42" y="42" width="42" height="42" fill="${cream}" stroke="${navy}" stroke-width="3"/></g>`;
    return svg(`${tile}${tileOption("a",85,125,34,solution?"yes":"")}${tileOption("b",500,125,34,solution?"yes":"")}${tileOption("c",85,270,34,solution?"no":"")}${tileOption("d",500,270,34,solution?"yes":"")}`, "0 0 900 430");
  }
  art["j1-iq-14"] = () => frame("Viên chữ L và bốn hình lựa chọn", "The L tile and four choices", tilePage(false));
  art["j1-iq-14-solution"] = () => frame("Các hình ghép được", "Figures that can be tiled", tilePage(true));

  function garden(solution = false, count = 12) {
    const positions = solution ? [[260,55],[390,55],[510,55],[640,55],[260,135],[640,135],[260,215],[640,215],[260,295],[390,295],[510,295],[640,295]] : Array.from({length:count},(_,i)=>[120+i*55,285]);
    return svg(`<rect x="260" y="55" width="380" height="240" rx="8" fill="#e9f8df" stroke="${navy}" stroke-width="5"/>${positions.map(([x,y],i)=>`<g transform="translate(${x} ${y})"><path d="M0 0C-16-18-25 8 0 18C25 8 16-18 0 0Z" fill="${i%2?coral:blue}" stroke="${navy}" stroke-width="2"/><rect x="-9" y="17" width="18" height="15" rx="3" fill="#d08a4b"/></g>`).join("")}`, "0 0 900 350");
  }
  art["j1-iq-15"] = () => frame("Khu vườn vuông và 12 chậu hoa", "A square garden and 12 flower pots", garden(false));
  art["j1-iq-15-solution"] = () => frame("Mỗi cạnh có bốn chậu", "Four pots on each side", garden(true));

  function magicGrid(values, target, solved = false) {
    const x=300,y=35,s=100;
    return svg(`${text(450,25,t(`Tổng mỗi đường: ${target}`,`Every line totals ${target}`),22)}${Array.from({length:9},(_,i)=>{const col=i%3,row=Math.floor(i/3),v=values[i];return `<rect x="${x+col*s}" y="${y+row*s}" width="${s}" height="${s}" fill="${solved?["#fff4d6","#e7f2ff","#e8f8f1"][row]:"#fffdf8"}" stroke="${navy}" stroke-width="3"/>${v!==null?text(x+col*s+50,y+row*s+63,String(v),30,900):""}`;}).join("")}`, "0 0 900 370");
  }
  art["j1-iq-16"] = () => frame("Bảng tổng 18", "Magic sum 18", magicGrid([7,null,null,null,6,null,null,10,null],18,false));
  art["j1-iq-16-solution"] = () => frame("Bảng hoàn chỉnh có tổng 18", "Completed grid with sum 18", magicGrid([7,2,9,8,6,4,3,10,5],18,true));
  art["j1-iq-17"] = () => frame("Bảng tổng 24", "Magic sum 24", magicGrid([null,null,5,null,8,null,null,null,9],24,false));
  art["j1-iq-17-solution"] = () => frame("Bảng hoàn chỉnh có tổng 24", "Completed grid with sum 24", magicGrid([7,12,5,6,8,10,11,4,9],24,true));

  art["j1-iq-extra-1"] = art["j1-iq-1"];
  art["j1-iq-extra-2"] = () => frame("Các số từ 1 đến 30", "Numbers from 1 to 30", svg(`${Array.from({length:30},(_,i)=>{const col=i%10,row=Math.floor(i/10);return `${card(85+col*73,45+row*65,58,48,"#f7fbff")}${text(114+col*73,77+row*65,String(i+1),18)}`;}).join("")}`, "0 0 900 270"));
  art["j1-iq-extra-3"] = () => frame("Một chiếc bánh và bốn đường cắt", "One cake and four cuts", svg(`<circle cx="450" cy="150" r="120" fill="#ffd98a" stroke="${navy}" stroke-width="5"/>${text(450,158,"4",42,900)}`, "0 0 900 300"));
  art["j1-iq-extra-4"] = () => frame("Hai trang đối diện có tổng 51", "Two facing pages total 51", pagesVisual("? + ?",51));
  art["j1-iq-extra-5"] = () => frame("Hình vuông và 16 chiếc đèn", "A square and 16 lamps", svg(`<rect x="260" y="45" width="380" height="240" fill="#eef7ff" stroke="${navy}" stroke-width="5"/>${Array.from({length:16},(_,i)=>`<circle cx="${85+i*48}" cy="325" r="12" fill="${i%2?coral:blue}" stroke="${navy}" stroke-width="2"/>`).join("")}`, "0 0 900 360"));
})();
