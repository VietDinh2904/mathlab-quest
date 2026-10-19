(function registerAdvancedIllustrations() {
  "use strict";
  const art = window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {};
  const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);
  const numbers = (value) => [...String(value).matchAll(/\d+(?:[.,]\d+)?/g)].map((m) => m[0]);
  const svg = (label, body, view = "0 0 760 270") => `<svg viewBox="${view}" role="img" aria-label="${esc(label)}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
  const text = (x, y, value, size = 20, color = "#17365d") => `<text x="${x}" y="${y}" text-anchor="middle" font-family="Nunito,Arial,sans-serif" font-size="${size}" font-weight="800" fill="${color}">${esc(value)}</text>`;
  const isVi = () => document.documentElement.lang !== "en";
  const local = (vi, en) => isVi() ? vi : en;
  const prompt = (question) => isVi() ? question.vi : question.en;
  const title = (question) => `<div class="method-visual-title visual-question">${esc(prompt(question))}</div>`;
  const card = (x, y, w, h, label, fill = "#eef5ff") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${fill}" stroke="#17365d" stroke-width="3"/>${text(x+w/2,y+h/2+7,label,18)}`;

  function algebra(question, pair) {
    const lines = question.vi.split(/[;.]/).map((s) => s.trim()).filter((s) => /[=<>]/.test(s)).slice(0, pair ? 2 : 1);
    if (!lines.length) lines.push(question.vi);
    return `<div class="equation-board method-equations">${lines.map((line) => `<div>${esc(line)}</div>`).join("")}<hr/><div><strong>${pair ? "Khử một ẩn → thế ngược" : "Giữ hai vế cân bằng"}</strong></div></div>`;
  }

  function venn(question, three) {
    const raw = prompt(question);
    const ns = numbers(raw).map(Number);
    if (three) {
      if (/tổng kích thước|total size/i.test(raw)) {
        const [sumSets, sumPairs, triple] = ns;
        return svg(local("Công thức hợp của ba tập", "Three-set union formula"),
          `${card(90,72,170,72,local(`Tổng 3 tập = ${sumSets}`, `Sum of sets = ${sumSets}`),"#fff0d8")}${text(300,116,"−",28)}${card(330,72,180,72,local(`Tổng giao đôi = ${sumPairs}`, `Pair overlaps = ${sumPairs}`),"#eef5ff")}${text(550,116,"+",28)}${card(580,72,110,72,local(`Giao ba = ${triple}`, `Triple = ${triple}`),"#e5f8f2")}${text(380,210,`${sumSets} − ${sumPairs} + ${triple} = ?`,25)}`);
      }
      const [a, b, c, ab, ac, bc, abc] = ns;
      return svg(local("Biểu đồ Venn ba tập theo đúng số liệu đề bài", "Three-set Venn diagram matching the question"),
        `<circle cx="315" cy="105" r="78" fill="#ffcf6677"/><circle cx="445" cy="105" r="78" fill="#72c7ff77"/><circle cx="380" cy="180" r="78" fill="#80ddb777"/>` +
        `<g fill="none" stroke="#17365d" stroke-width="4"><circle cx="315" cy="105" r="78"/><circle cx="445" cy="105" r="78"/><circle cx="380" cy="180" r="78"/></g>` +
        text(250,34,`A = ${a ?? "?"}`,18) + text(510,34,`B = ${b ?? "?"}`,18) + text(380,268,`C = ${c ?? "?"}`,18) +
        text(380,78,`A∩B = ${ab ?? "?"}`,15) + text(335,176,`A∩C = ${ac ?? "?"}`,15) + text(425,176,`B∩C = ${bc ?? "?"}`,15) + text(380,132,abc ?? "?",18));
    }

    let total = null;
    let a;
    let b;
    let both;
    let outside = null;
    const asksNeither = /không (?:học|thích|biết)|neither/i.test(raw);
    if (ns.length >= 4) {
      total = ns[0]; a = ns[1]; b = ns[2];
      if (asksNeither) {
        if (/không thích|neither/i.test(raw) && !/(cả hai|both)/i.test(raw)) {
          outside = ns[3];
          both = a + b - (total - outside);
        } else {
          both = ns[3];
          outside = total - (a + b - both);
        }
      } else {
        both = ns[3];
        outside = total - (a + b - both);
      }
    } else if (ns.length >= 3) {
      [a, b, both] = ns;
    } else {
      a = ns[0]; both = ns[1]; b = null;
    }
    const onlyA = Number.isFinite(a) && Number.isFinite(both) ? a - both : "?";
    const onlyB = Number.isFinite(b) && Number.isFinite(both) ? b - both : "?";
    const frame = total !== null ? `<rect x="95" y="22" width="570" height="225" rx="18" fill="none" stroke="#9bb4d2" stroke-width="3"/>${text(132,52,`N = ${total}`,16)}` : "";
    return svg(local("Biểu đồ Venn hai tập theo đúng số liệu đề bài", "Two-set Venn diagram matching the question"),
      `${frame}<circle cx="325" cy="138" r="95" fill="#ffcf6677"/><circle cx="435" cy="138" r="95" fill="#72c7ff77"/>` +
      `<g fill="none" stroke="#17365d" stroke-width="4"><circle cx="325" cy="138" r="95"/><circle cx="435" cy="138" r="95"/></g>` +
      text(250,43,`A = ${a ?? "?"}`,18) + text(510,43,`B = ${b ?? "?"}`,18) +
      text(285,145,onlyA,23) + text(380,145,both ?? "?",23) + text(475,145,onlyB,23) +
      (outside !== null ? text(610,225,local(`Ngoài = ${outside}`, `Outside = ${outside}`),17) : ""));
  }

  function pattern(question) {
    const ns = numbers(question.vi).slice(0,6);
    return svg("number pattern from the question", `${ns.map((n,i)=>`${card(38+i*118,85,96,65,n,i%2?"#e5f8f2":"#fff0d8")}${i<ns.length-1?text(145+i*118,124,"→",24):""}`).join("")}${text(380,220,"Tìm cấu trúc trước khi tính trực tiếp",18,"#397ee8")}`);
  }

  function fraction(question) {
    const raw = prompt(question);
    const fractions = [...raw.matchAll(/(\d+)\s*\/\s*(\d+)/g)].map((m) => [Number(m[1]), Number(m[2])]).slice(0, 4);
    if (!fractions.length) return pattern(question);
    const rowWidth = Math.min(620, 180 * fractions.length);
    const startX = (760 - rowWidth) / 2;
    const cellWidth = rowWidth / fractions.length;
    const bars = fractions.map(([num, den], index) => {
      const parts = Math.max(2, Math.min(16, den));
      const x = startX + index * cellWidth;
      const width = cellWidth - 26;
      return Array.from({length:parts}, (_, i) => `<rect x="${x+i*width/parts}" y="92" width="${width/parts}" height="68" fill="${i<num?"#ffd56a":"#edf4ff"}" stroke="#17365d" stroke-width="1.5"/>`).join("") + text(x+width/2,196,`${num}/${den}`,20);
    }).join("");
    return svg(local("Các thanh phân số theo đúng biểu thức", "Fraction bars matching the expression"), `${bars}${text(380,242,local("Mỗi thanh biểu diễn một phân số trong đề", "Each bar represents one fraction in the question"),16,"#397ee8")}`);
  }

  function choices(question, combination) {
    const raw = prompt(question);
    const ns = numbers(raw).map(Number);
    let count = ns[0] || 5;
    let choose = combination ? 2 : count;
    const chooseMatch = raw.match(/(?:chọn|choose)\s+(\d+)[^\d]+(?:từ|of|from)\s+(\d+)/i);
    if (chooseMatch) { choose = Number(chooseMatch[1]); count = Number(chooseMatch[2]); }
    else if (/tam giác|triangle/i.test(raw)) choose = 3;
    else if (/đoạn thẳng|dây cung|segment|chord/i.test(raw)) choose = 2;
    else if (/lớp trưởng|lớp phó|monitor|deputy/i.test(raw)) choose = 2;
    else if (/số có\s*(\d+)|(?:\d+)-digit/i.test(raw)) {
      choose = Number((raw.match(/số có\s*(\d+)|((?:\d+))-digit/i) || [])[1] || (raw.match(/((?:\d+))-digit/i) || [])[1] || count);
      const digitList = raw.match(/(?:từ|from)\s+((?:\d\s*[,،]\s*)+\d)/i);
      if (digitList) count = new Set(digitList[1].match(/\d/g)).size;
    }
    count = Math.max(3, Math.min(10, count));
    const pts = Array.from({length:count},(_,i)=>({x:110+i*540/(count-1),y:75+(i%2)*55}));
    const edges = combination ? pts.map((p,i)=>pts.slice(i+1).map((q)=>`<line x1="${p.x}" y1="${p.y}" x2="${q.x}" y2="${q.y}" stroke="#a9bfdc" stroke-width="2"/>`).join("")).join("") : pts.slice(0,-1).map((p,i)=>`<path d="M${p.x} ${p.y+25} Q${(p.x+pts[i+1].x)/2} 220 ${pts[i+1].x} ${pts[i+1].y+25}" fill="none" stroke="#79b89f" stroke-width="3"/>`).join("");
    const notation = combination ? `${count}C${choose}` : (choose === count ? `${count}!` : `${count}P${choose}`);
    return svg(local("Sơ đồ chọn theo đúng số lượng trong đề", "Selection diagram matching the question"), `${edges}${pts.map((p,i)=>`<circle cx="${p.x}" cy="${p.y}" r="25" fill="${i%2?"#78d9c5":"#ffd56a"}" stroke="#17365d" stroke-width="3"/>${text(p.x,p.y+7,String(i+1),17)}`).join("")}${text(380,224,notation,23)}${text(380,252,combination?local("Chọn nhóm: không xét thứ tự","Choose a group: order does not matter"):local("Sắp xếp: có xét thứ tự","Arrange: order matters"),16)}`);
  }

  function fibonacci(question) {
    const raw = prompt(question);
    let seq;
    const starts = raw.match(/(?:bắt đầu|starts?)\s*(?:với|with)?\s*(\d+)\s*[,;]\s*(\d+)/i);
    const explicit = raw.match(/(?:[:：]|dãy|sequence)\s*((?:\d+\s*[,;]\s*){1,}\d+)/i);
    const consecutive = raw.match(/(?:liên tiếp là|consecutive terms are)\s*(\d+)\s*(?:và|and|,)\s*(\d+)/i);
    if (starts) seq = [Number(starts[1]), Number(starts[2])];
    else if (consecutive) seq = [Number(consecutive[1]), Number(consecutive[2])];
    else if (explicit) seq = explicit[1].match(/\d+/g).map(Number).slice(0,6);
    else if (/cầu thang|staircase|lát dải|strip|thỏ|rabbit/i.test(raw)) seq = /thỏ|rabbit/i.test(raw) ? [1,1] : [1,2];
    else seq = [1,1];
    while (seq.length < 6) seq.push(seq[seq.length-1] + seq[seq.length-2]);
    return svg(local("Dãy số tạo từ tổng hai số liền trước", "Sequence built from the two previous terms"), `${seq.slice(0,6).map((n,i)=>`${card(35+i*118,80,92,72,String(n),i%2?"#e3f7f1":"#fff0d7")}${i>1?text(22+i*118,125,"=",18):""}`).join("")}${text(380,215,local("Mỗi số = tổng hai số đứng trước","Each term = the sum of the previous two"),18,"#397ee8")}`);
  }

  function tiling(question) {
    const raw = prompt(question);
    const lengthMatch = raw.match(/(?:gồm|dài|has|length)\s*(\d+)\s*(?:ô|unit|consecutive|square)/i);
    const length = Math.max(1, Math.min(7, Number(lengthMatch?.[1] || 6)));
    const layouts = [];
    const build = (remaining, pieces = []) => {
      if (remaining === 0) { layouts.push(pieces); return; }
      build(remaining - 1, [...pieces, 1]);
      if (remaining >= 2) build(remaining - 2, [...pieces, 2]);
    };
    build(length);

    const columns = layouts.length > 14 ? 3 : 2;
    const rows = Math.ceil(layouts.length / columns);
    const columnWidth = 248;
    const unit = columns === 3 ? 25 : 29;
    const startX = columns === 3 ? 12 : 95;
    const startY = 50;
    const rowHeight = 43;
    const cells = layouts.map((pieces, index) => {
      const column = Math.floor(index / rows);
      const row = index % rows;
      let x = startX + column * columnWidth + 34;
      const y = startY + row * rowHeight;
      const tiles = pieces.map((piece, pieceIndex) => {
        const width = piece * unit;
        const result = `<rect x="${x}" y="${y}" width="${width - 3}" height="25" rx="5" fill="${piece === 1 ? "#ffd56a" : "#78d9c5"}" stroke="#17365d" stroke-width="2"/>${text(x + (width - 3) / 2, y + 18, String(piece), 12)}`;
        x += width;
        return result;
      }).join("");
      return `${text(startX + column * columnWidth + 16, y + 18, String(index + 1), 12, "#61738c")}${tiles}`;
    }).join("");
    const height = startY + rows * rowHeight + 62;
    return svg(
      local(`Đủ ${layouts.length} cách lát dải ${length} ô`, `All ${layouts.length} tilings of a ${length}-square strip`),
      `${text(380,27,local(`Liệt kê đủ ${layouts.length} cách (1 = viên 1 ô, 2 = viên 2 ô)`, `All ${layouts.length} tilings (1 = one-square tile, 2 = two-square tile)`),17)}<g data-tiling-count="${layouts.length}">${cells}</g>${text(380,height-18,local("Nhóm theo viên cuối: 8 cách kết thúc bằng 1 + 5 cách kết thúc bằng 2", "Group by last tile: 8 ending in 1 + 5 ending in 2"),16,"#397ee8")}`,
      `0 0 760 ${height}`
    );
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
      : type === "tiling" ? tiling(question)
      : fibonacci(question);
    art[key] = () => `<div class="method-visual exact-question-visual">${title(question)}${body}</div>`;
  };
})();
