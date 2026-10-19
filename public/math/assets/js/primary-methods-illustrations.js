(function registerPrimaryMethodIllustrations() {
  "use strict";
  const art = window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {};
  const isVi = () => document.documentElement.lang !== "en";
  const local = (vi, en) => isVi() ? vi : en;
  const bilingual = (value) => {
    const parts = String(value).split(" · ");
    return parts.length === 2 ? local(parts[0], parts[1]) : value;
  };
  const wrap = (title, body) => `<div class="method-visual"><div class="method-visual-title">${bilingual(title)}</div>${body}</div>`;
  const svg = (label, body, view = "0 0 760 260") => `<svg viewBox="${view}" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
  const txt = (x,y,s,extra="") => `<text x="${x}" y="${y}" text-anchor="middle" font-family="Nunito,Arial,sans-serif" font-size="18" font-weight="800" fill="#17365d" ${extra}>${bilingual(s)}</text>`;
  const bar = (x,y,w,label,fill="#75b8ff") => `<rect x="${x}" y="${y}" width="${w}" height="44" rx="10" fill="${fill}" stroke="#17365d" stroke-width="3"/>${txt(x+w/2,y+29,label)}`;
  const box = (x,y,w,h,label,fill="#fff7de") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${fill}" stroke="#17365d" stroke-width="3"/>${txt(x+w/2,y+h/2+6,label)}`;

  art["method-bar-ratio"] = () => wrap("Sơ đồ tổng – tỉ · Sum–ratio model", svg("one part and three equal parts", `${bar(90,55,130,"1 phần","#ffd56a")}${bar(90,135,390,"3 phần","#78d9c5")}<path d="M90 210H480" stroke="#17365d" stroke-width="3"/><path d="M90 202v16M480 202v16" stroke="#17365d" stroke-width="3"/>${txt(285,245,"Tổng · Total")}`));
  art["method-bar-difference"] = () => wrap("Sơ đồ tổng – hiệu · Sum–difference model", svg("two bars with a difference", `${bar(95,55,420,"A","#ff9b89")}${bar(95,135,330,"B","#86c5ff")}<path d="M425 188H515" stroke="#17365d" stroke-width="3"/><path d="M425 180v16M515 180v16" stroke="#17365d" stroke-width="3"/>${txt(470,220,"Hiệu · Difference")}`));
  art["method-bar-age"] = art["method-bar-difference"];
  art["method-unitary"] = () => wrap("Rút về một đơn vị · Find one unit", svg("unitary method", `${box(70,70,190,85,"9 bộ = 45 m","#e6f2ff")}<path d="M275 112H355" stroke="#17365d" stroke-width="4" marker-end="url(#u)"/><defs><marker id="u" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8Z" fill="#17365d"/></marker></defs>${box(370,70,140,85,"1 bộ = 5 m","#e6fff4")}${box(555,70,140,85,"7 bộ = ?","#fff1d8")}${txt(440,205,"45 ÷ 9 × 7")}`));
  art["method-unitary-inverse"] = () => wrap("Tỉ lệ nghịch · Inverse proportion", svg("workers and days balance", `${box(95,70,220,90,"8 người × 6 ngày","#e8f1ff")}${txt(380,125,"=")}${box(445,70,220,90,"12 người × ? ngày","#fff0dc")}${txt(380,215,"Khối lượng công việc không đổi")}`));
  art["method-ratio-split"] = () => wrap("Chia theo tỉ lệ · Proportional division", svg("ratio bars", `${bar(65,85,240,"3 phần","#ffbd73")}${bar(305,85,400,"5 phần","#7fdcc7")}${txt(185,165,"300")}${txt(505,165,"500")}${txt(385,220,"8 phần = 800")}`));
  art["method-ratio-three"] = () => wrap("Ba phần chia · Three shares", svg("three ratio shares", `${bar(65,88,140,"2 phần","#ffd56a")}${bar(205,88,210,"3 phần","#7fdcc7")}${bar(415,88,280,"4 phần","#91bfff")}${txt(380,205,"2 : 3 : 4")}`));
  art["method-ratio-rectangle"] = () => wrap("Nửa chu vi · Semiperimeter", svg("rectangle ratio", `<rect x="190" y="45" width="380" height="170" rx="8" fill="#eef7ff" stroke="#17365d" stroke-width="4"/>${txt(380,35,"4 phần")}${txt(610,135,"3 phần",'transform="rotate(90 610 135)"')}${txt(380,250,"Dài + rộng = nửa chu vi")}`));
  art["method-substitution"] = () => wrap("Thay thế tương đương · Equivalent replacement", svg("notebooks replaced by pens", `${box(85,55,220,75,"2 vở","#e8f1ff")}${txt(365,102,"=")}${box(425,55,250,75,"3 bút","#fff0dc")}<path d="M190 165C260 230 500 230 570 165" fill="none" stroke="#397ee8" stroke-width="4" marker-end="url(#s)"/><defs><marker id="s" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8Z" fill="#397ee8"/></marker></defs>${txt(380,245,"Đổi mọi vật về cùng một loại")}`));
  art["method-false-assumption"] = () => wrap("Giả sử tất cả là gà · Assume all are chickens", svg("chickens and dogs legs table", `${box(70,50,190,70,"36 con","#fff3d7")}${box(285,50,190,70,"36 × 2 = 72 chân","#e7f4ff")}${box(500,50,190,70,"Thực tế 100 chân","#ffe5e0")}<path d="M595 135V190H400" fill="none" stroke="#17365d" stroke-width="3"/>${txt(350,205,"Thiếu 28 chân → 28 ÷ 2 = 14 chó")}`));
  art["method-false-wheels"] = art["method-false-assumption"];
  art["method-false-score"] = art["method-false-assumption"];
  art["method-false-tickets"] = art["method-false-assumption"];
  art["method-false-coins"] = art["method-false-assumption"];
  art["method-logic-grid"] = () => wrap("Bảng loại trừ · Logic grid", `<div class="logic-mini"><table><thead><tr><th></th><th>⚽</th><th>♟️</th><th>🏊</th></tr></thead><tbody><tr><th>An</th><td>×</td><td>×</td><td class="yes">✓</td></tr><tr><th>Bình</th><td class="yes">✓</td><td>×</td><td>×</td></tr><tr><th>Chi</th><td>×</td><td class="yes">✓</td><td>×</td></tr></tbody></table></div>`);
  art["method-logic-order"] = () => wrap("Chuỗi thứ tự · Ordering chain", `<div class="method-flow"><span>Bình</span><b>›</b><span>Dũng</span><b>›</b><span>An</span></div>`);
  art["method-pigeonhole"] = () => wrap("13 bạn vào 12 tháng · 13 pupils into 12 months", svg("pigeonhole months", `${Array.from({length:12},(_,i)=>`<rect x="${35+i*58}" y="120" width="44" height="58" rx="8" fill="${i===4?'#ffd56a':'#e8f1ff'}" stroke="#17365d" stroke-width="2"/>`).join("")}${Array.from({length:13},(_,i)=>`<circle cx="${57+(i%12)*58}" cy="${i===12?150:80}" r="15" fill="${i===12?'#ff786c':'#5a9cf5'}"/>`).join("")}${txt(380,225,"Một tháng chắc chắn có ít nhất 2 bạn")}`));
  art["method-pigeonhole-socks"] = art["method-pigeonhole"];
  art["method-pigeonhole-boxes"] = art["method-pigeonhole"];
  art["method-pigeonhole-parity"] = art["method-pigeonhole"];
  art["method-pigeonhole-calendar"] = art["method-pigeonhole"];
  art["method-elimination"] = () => wrap("Khử đại lượng giống nhau · Eliminate equal terms", `<div class="equation-board method-equations"><div>10A + <mark>8B</mark> = 64 000</div><div>− &nbsp;7A + <mark>8B</mark> = 52 000</div><hr/><div><strong>3A = 12 000</strong></div></div>`);
  art["method-working-backwards"] = () => wrap("Đi ngược bằng phép tính đảo · Reverse with inverse operations", `<div class="method-flow"><span>?</span><b>+1</b><span>×2</span><b>÷3</b><span>−4</span><b>→</b><span>5</span></div><div class="method-flow backwards"><span>5</span><b>+4</b><span>×3</span><b>÷2</b><span>−1</span><b>→</b><span>12,5</span></div>`);
  art["method-selection-table"] = () => wrap("Lập bảng lựa chọn · Candidate table", `<div class="logic-mini choice-table"><table><thead><tr><th>Ứng viên</th><th>12</th><th>24</th><th>36</th><th>48</th></tr></thead><tbody><tr><th>+ 7</th><td>19</td><td>31</td><td>43</td><td class="yes">55 ✓</td></tr></tbody></table></div>`);
  art["method-graph"] = () => wrap("Mỗi cạnh là một cái bắt tay · Each edge is a handshake", svg("complete graph with five vertices", `${[0,1,2,3,4].map((i)=>{const a=-Math.PI/2+i*2*Math.PI/5; return {x:380+125*Math.cos(a),y:125+100*Math.sin(a)}}).map((p,i,arr)=>arr.slice(i+1).map(q=>`<line x1="${p.x}" y1="${p.y}" x2="${q.x}" y2="${q.y}" stroke="#82a7d5" stroke-width="3"/>`).join("")).join("")}${[0,1,2,3,4].map((i)=>{const a=-Math.PI/2+i*2*Math.PI/5,x=380+125*Math.cos(a),y=125+100*Math.sin(a);return `<circle cx="${x}" cy="${y}" r="24" fill="#ffd56a" stroke="#17365d" stroke-width="3"/>${txt(x,y+6,String(i+1))}`}).join("")}`));
  art["method-area"] = () => wrap("Hình lớn trừ phần khuyết · Large area minus cut-out", svg("rectangle with corner removed", `<path d="M170 35H590V205H170V35M450 35V100H590" fill="#8edbc9" fill-rule="evenodd" stroke="#17365d" stroke-width="4"/><rect x="450" y="35" width="140" height="65" fill="#fff" stroke="#ff786c" stroke-width="4" stroke-dasharray="8 6"/>${txt(380,240,"12 × 8 − 4 × 3")}`));
  art["method-area-l"] = art["method-area"];
  art["method-area-triangle"] = () => wrap("Tam giác · Triangle", svg("triangle area", `<path d="M180 210L380 35L620 210Z" fill="#a9d4ff" stroke="#17365d" stroke-width="4"/><path d="M380 35V210" stroke="#ff786c" stroke-width="3" stroke-dasharray="7 6"/>${txt(400,135,"h")}${txt(400,245,"đáy · base")}`));
  art["method-area-square"] = () => wrap("Hình vuông · Square", svg("square area", `<rect x="270" y="25" width="220" height="220" rx="8" fill="#ffe59a" stroke="#17365d" stroke-width="4"/>${txt(380,140,"S = a × a")}`));
  art["method-letter-digits"] = () => wrap("Giá trị hàng · Place value", `<div class="equation-board method-equations"><div>AB = 10A + B</div><div>BA = 10B + A</div><hr/><div><strong>AB + BA = 11(A + B)</strong></div></div>`);
  art["method-letter-addition"] = () => wrap("Cộng theo cột · Column addition", `<div class="digit-column"><span>A 7</span><span>+ 2 B</span><hr/><strong>6 4</strong></div>`);
  art["method-letter-multiply"] = () => wrap("Thử chữ số · Test digits", `<div class="method-flow"><span>3 × A</span><b>=</b><span>2B</span><b>→</b><span>A = 7, 8, 9?</span></div>`);

  const numberWords = { "một":1, "hai":2, "ba":3, "bốn":4, "năm":5, "sáu":6, "bảy":7, "tám":8, "chín":9 };
  const numbersIn = (value) => [...String(value).matchAll(/\d+(?:[ .]\d+)*/g)].map((match) => match[0].trim());
  const firstCount = (value, fallback = 5) => {
    const digit = String(value).match(/\b(1[0-2]|[3-9])\b/);
    if (digit) return Number(digit[1]);
    const lower = String(value).toLowerCase();
    return Object.entries(numberWords).find(([word]) => lower.includes(word))?.[1] || fallback;
  };
  const exactTitle = (question) => `<div class="method-visual-title visual-question">${isVi() ? question.vi : question.en}</div>`;
  const iconStrip = (icons, labels = []) => `<div class="exact-icon-strip">${icons.map((icon,index)=>`<span><b>${icon}</b>${labels[index] ? `<small>${labels[index]}</small>` : ""}</span>`).join("")}</div>`;
  const exactGraph = (count) => {
    const points = Array.from({length:count},(_,i)=>{const a=-Math.PI/2+i*2*Math.PI/count;return{x:380+125*Math.cos(a),y:130+95*Math.sin(a)}});
    return svg(`graph with ${count} vertices`, `${points.map((p,i)=>points.slice(i+1).map(q=>`<line x1="${p.x}" y1="${p.y}" x2="${q.x}" y2="${q.y}" stroke="#a9bfdc" stroke-width="2.5"/>`).join("")).join("")}${points.map((p,i)=>`<circle cx="${p.x}" cy="${p.y}" r="22" fill="#ffd56a" stroke="#17365d" stroke-width="3"/>${txt(p.x,p.y+6,String(i+1))}`).join("")}`);
  };
  const exactArea = (type, question) => {
    const ns = numbersIn(question.vi).slice(0,4);
    if (type.includes("triangle") && /cùng chiều cao|same height/i.test(`${question.vi} ${question.en}`)) {
      const baseSmall = ns[0] || "6";
      const baseLarge = ns[1] || "10";
      return svg("two triangles with equal heights and bases in the ratio stated in the question", `<path d="M65 205L155 45L245 205Z" fill="#ffd98a" stroke="#17365d" stroke-width="4"/><path d="M155 45V205" stroke="#ff786c" stroke-width="3" stroke-dasharray="7 6"/><path d="M365 205L515 45L665 205Z" fill="#9dccff" stroke="#17365d" stroke-width="4"/><path d="M515 45V205" stroke="#ff786c" stroke-width="3" stroke-dasharray="7 6"/>${txt(155,238,`đáy ${baseSmall} cm`,17)}${txt(515,238,`đáy ${baseLarge} cm`,17)}${txt(335,80,"cùng chiều cao",16)}`);
    }
    if (type.includes("triangle")) return svg("triangle with the dimensions stated in the question", `<path d="M170 215L380 35L620 215Z" fill="#a9d4ff" stroke="#17365d" stroke-width="4"/><path d="M380 35V215" stroke="#ff786c" stroke-width="3" stroke-dasharray="7 6"/>${txt(400,250,`Số đo: ${ns.join(" · ")}`)}`);
    if (type.includes("square")) return svg("square matching the question", `<rect x="270" y="25" width="220" height="220" rx="8" fill="#ffe59a" stroke="#17365d" stroke-width="4"/>${txt(380,140,ns.length ? `Dữ kiện: ${ns.join(" · ")}` : "S = a × a")}`);
    return svg("area diagram matching the stated dimensions", `<path d="M150 35H610V215H150Z" fill="#9de2ce" stroke="#17365d" stroke-width="4"/><rect x="470" y="35" width="140" height="75" fill="#fff" stroke="#ff786c" stroke-width="4" stroke-dasharray="8 6"/>${txt(380,250,ns.length ? `Các số đo: ${ns.join(" · ")}` : "Tách hình thành các phần quen thuộc")}`);
  };
  const exactPigeonhole = (type, question) => {
    const ns = numbersIn(question.vi);
    if (type.includes("socks")) return iconStrip(["🧦","🧦","🧦","🧦"],["màu 1","màu 2","màu 3","chiếc buộc trùng màu"]);
    if (type.includes("parity")) return iconStrip(["2, 4, 6, …","1, 3, 5, …"],["ngăn số chẵn","ngăn số lẻ"]);
    if (type.includes("calendar")) return iconStrip(["T2","T3","T4","T5","T6","T7","CN"],["7 ngăn là 7 thứ"]);
    const boxes = Math.min(Number(ns[1] || ns[0] || 6),12);
    return `${iconStrip(Array.from({length:boxes},(_,i)=>`□ ${i+1}`))}<p class="exact-visual-note">${ns[0] || "Các"} vật được phân đều vào ${ns[1] || boxes} ngăn.</p>`;
  };
  const exactTypeBody = (type, question) => {
    const vi = question.vi;
    if (type.startsWith("method-pigeonhole")) return exactPigeonhole(type, question);
    if (type === "method-graph") {
      if (/tổng bậc|degree/i.test(`${vi} ${question.en}`)) return iconStrip(["●──●","mỗi cạnh có 2 đầu"],["1 cạnh","tổng bậc tăng 2"]);
      return exactGraph(Math.min(firstCount(vi),8));
    }
    if (type.startsWith("method-area")) return exactArea(type, question);
    if (type.includes("logic")) return `<div class="logic-mini"><table><tbody><tr><th>Đối tượng</th><td>?</td><td>?</td><td>?</td></tr><tr><th>Dữ kiện</th><td>×</td><td class="yes">✓</td><td>×</td></tr></tbody></table></div>`;
    if (type.startsWith("method-false")) return iconStrip(["① Giả sử tất cả cùng loại","② So với dữ kiện thật","③ Chia phần chênh lệch"]);
    if (type === "method-working-backwards") return `<div class="method-flow backwards"><span>Kết quả</span><b>←</b><span>Đảo phép cuối</span><b>←</b><span>Đảo từng bước</span><b>←</b><span>Số ban đầu</span></div>`;
    if (type === "method-selection-table") return `<div class="logic-mini choice-table"><table><thead><tr><th>Ứng viên</th><th>1</th><th>2</th><th>3</th><th>…</th></tr></thead><tbody><tr><th>Kiểm tra dữ kiện</th><td>×</td><td>×</td><td class="yes">✓</td><td>×</td></tr></tbody></table></div>`;
    if (type.startsWith("method-letter")) return iconStrip(["Hàng trăm","Hàng chục","Hàng đơn vị"],["xét từ phải sang trái"]);
    if (type === "method-elimination") return iconStrip(["Quan hệ 1","−  Quan hệ 2","Đại lượng còn lại"],["làm bằng nhau","khử","tìm giá trị"]);
    if (type.includes("ratio") || type.includes("bar")) {
      const ratio = vi.match(/(\d+)\s*:\s*(\d+)/) || question.en.match(/(\d+)\s*:\s*(\d+)/);
      const times = vi.match(/gấp\s+(\d+)/i) || question.en.match(/(\d+)\s+times/i);
      const left = ratio ? Number(ratio[1]) : 1;
      const right = ratio ? Number(ratio[2]) : (times ? Number(times[1]) : 2);
      const scale = Math.min(75, 520 / Math.max(left + right, 1));
      return svg(local("Sơ đồ đoạn thẳng theo đúng tỉ lệ trong đề", "Bar model matching the ratio in the question"), `${bar(70,55,Math.max(70,left*scale),local(`${left} phần`,`${left} part${left===1?"":"s"}`),"#ffd56a")}${bar(70,135,Math.max(70,right*scale),local(`${right} phần`,`${right} part${right===1?"":"s"}`),"#86dcca")}${txt(650,92,`${left} : ${right}`)}`);
    }
    if (type.includes("unitary")) return iconStrip(["Nhiều đơn vị","÷","1 đơn vị","×","Số đơn vị mới"]);
    if (type === "method-substitution") return iconStrip(["Đại lượng A","=","Đại lượng B","→","Cùng một loại"]);
    return iconStrip(["Dữ kiện 1","Dữ kiện 2","?"],["đọc đề","lập quan hệ","tìm đáp án"]);
  };

  window.MQ_METHOD_VISUAL_FACTORY = (key, type, question) => {
    art[key] = () => `<div class="method-visual exact-question-visual">${exactTitle(question)}${exactTypeBody(type, question)}</div>`;
  };
})();
