(function registerAdvancedIllustrations() {
  "use strict";
  const art = window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {};
  const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);
  const numbers = (value) => [...String(value).matchAll(/\d+(?:[.,]\d+)?/g)].map((m) => m[0]);
  const svg = (label, body, view = "0 0 760 270") => `<svg viewBox="${view}" role="img" aria-label="${esc(label)}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
  const text = (x, y, value, size = 20, color = "#17365d") => `<text x="${x}" y="${y}" text-anchor="middle" font-family="Nunito,Arial,sans-serif" font-size="${size}" font-weight="800" fill="${color}">${esc(value)}</text>`;
  const title = (question) => `<div class="method-visual-title visual-question">${esc(question.vi)}</div>`;
  const card = (x, y, w, h, label, fill = "#eef5ff") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${fill}" stroke="#17365d" stroke-width="3"/>${text(x+w/2,y+h/2+7,label,18)}`;

  function algebra(question, pair) {
    const lines = question.vi.split(/[;.]/).map((s) => s.trim()).filter((s) => /[=<>]/.test(s)).slice(0, pair ? 2 : 1);
    if (!lines.length) lines.push(question.vi);
    return `<div class="equation-board method-equations">${lines.map((line) => `<div>${esc(line)}</div>`).join("")}<hr/><div><strong>${pair ? "Khử một ẩn → thế ngược" : "Giữ hai vế cân bằng"}</strong></div></div>`;
  }

  function venn(question, three) {
    const ns = numbers(question.vi);
    const circles = three
      ? `<circle cx="320" cy="115" r="78" fill="#ffcf6677"/><circle cx="440" cy="115" r="78" fill="#72c7ff77"/><circle cx="380" cy="185" r="78" fill="#80ddb777"/>`
      : `<circle cx="325" cy="135" r="95" fill="#ffcf6677"/><circle cx="435" cy="135" r="95" fill="#72c7ff77"/>`;
    return svg("Venn diagram matching the question", `${circles}<g fill="none" stroke="#17365d" stroke-width="4">${three?`<circle cx="320" cy="115" r="78"/><circle cx="440" cy="115" r="78"/><circle cx="380" cy="185" r="78"/>`:`<circle cx="325" cy="135" r="95"/><circle cx="435" cy="135" r="95"/>`}</g>${text(250,45,"A")}${text(510,45,"B")}${ns.slice(0,4).map((n,i)=>text(290+i*60,145+(i%2)*45,n,18)).join("")}`);
  }

  function pattern(question) {
    const ns = numbers(question.vi).slice(0,6);
    return svg("number pattern from the question", `${ns.map((n,i)=>`${card(38+i*118,85,96,65,n,i%2?"#e5f8f2":"#fff0d8")}${i<ns.length-1?text(145+i*118,124,"→",24):""}`).join("")}${text(380,220,"Tìm cấu trúc trước khi tính trực tiếp",18,"#397ee8")}`);
  }

  function fraction(question) {
    const ns = numbers(question.vi);
    const parts = Math.max(2, Math.min(10, Number(ns[1] || 6)));
    const filled = Math.max(1, Math.min(parts, Number(ns[0] || 1)));
    return svg("fraction bar matching the question", `${Array.from({length:parts},(_,i)=>`<rect x="${80+i*600/parts}" y="85" width="${600/parts}" height="82" fill="${i<filled?"#ffd56a":"#edf4ff"}" stroke="#17365d" stroke-width="2"/>`).join("")}${text(380,220,`${filled} / ${parts}`,25)}`);
  }

  function choices(question, combination) {
    const ns = numbers(question.vi);
    const count = Math.max(3, Math.min(7, Number(ns[0] || 5)));
    const pts = Array.from({length:count},(_,i)=>({x:110+i*540/(count-1),y:75+(i%2)*55}));
    const edges = combination ? pts.map((p,i)=>pts.slice(i+1).map((q)=>`<line x1="${p.x}" y1="${p.y}" x2="${q.x}" y2="${q.y}" stroke="#a9bfdc" stroke-width="2"/>`).join("")).join("") : pts.slice(0,-1).map((p,i)=>`<path d="M${p.x} ${p.y+25} Q${(p.x+pts[i+1].x)/2} 220 ${pts[i+1].x} ${pts[i+1].y+25}" fill="none" stroke="#79b89f" stroke-width="3"/>`).join("");
    return svg("selection diagram matching the question", `${edges}${pts.map((p,i)=>`<circle cx="${p.x}" cy="${p.y}" r="25" fill="${i%2?"#78d9c5":"#ffd56a"}" stroke="#17365d" stroke-width="3"/>${text(p.x,p.y+7,String(i+1),17)}`).join("")}${text(380,245,combination?"Chọn nhóm: không xét thứ tự":"Sắp xếp: có xét thứ tự",18)}`);
  }

  function fibonacci(_question) {
    const seq = [1,1,2,3,5,8];
    return svg("Fibonacci sequence built from two previous terms", `${seq.map((n,i)=>`${card(35+i*118,80,92,72,String(n),i%2?"#e3f7f1":"#fff0d7")}${i>1?text(22+i*118,125,"=",18):""}`).join("")}${text(380,215,"Mỗi số = tổng hai số đứng trước",18,"#397ee8")}`);
  }

  window.MQ_ADVANCED_VISUAL_FACTORY = (key, type, question) => {
    const body = type === "algebra-pair" ? algebra(question, true)
      : type === "algebra" ? algebra(question, false)
      : type === "venn-three" ? venn(question, true)
      : type === "venn" ? venn(question, false)
      : type === "pattern" ? pattern(question)
      : type === "fraction" ? fraction(question)
      : type === "combination" ? choices(question, true)
      : type === "permutation" ? choices(question, false)
      : fibonacci(question);
    art[key] = () => `<div class="method-visual exact-question-visual">${title(question)}${body}</div>`;
  };
})();
