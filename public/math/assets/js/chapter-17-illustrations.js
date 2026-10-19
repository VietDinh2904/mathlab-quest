(function registerChapter17Illustrations() {
  "use strict";
  const art = window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {};
  const isVi = () => document.documentElement.lang !== "en";
  const local = (vi, en) => isVi() ? vi : en;
  const rows = {
    1: [["🏠","Shaun 65 → 5 phút ← 75 Anh trai","📚"],["🏠","Shaun 65 → 5 min ← 75 Brother","📚"]],
    2: [["🐌 0,5","14 m → ← 3","🐜"],["🐌 0.5","14 m → ← 3","🐜"]],
    3: [["A","55 → 4 giờ ← 60","B"],["A","55 → 4 h ← 60","B"]],
    4: [["🚆 80","5 giờ → ← 60","🚆"],["🚆 80","5 h → ← 60","🚆"]],
    5: [["← 70","cùng điểm xuất phát","90 →"],["← 70","same start","90 →"]],
    6: [["🪐 30","5 phút trước va chạm","40 🪐"],["🪐 30","5 min before collision","40 🪐"]],
    7: [["🏠 Don 60","360 m | gặp | 420 m","Danny 📚"],["🏠 Don 60","360 m | meet | 420 m","Danny 📚"]],
    8: [["A · 80","1000 km · gặp sau 5 giờ","? · B"],["A · 80","1000 km · meet after 5 h","? · B"]],
    9: [["800 km/giờ · sớm 1 giờ","cùng quãng đường","700 km/giờ · muộn 1 giờ"],["800 km/h · 1 h early","same distance","700 km/h · 1 h late"]],
    10: [["tổng: 200 km/giờ","ngược chiều / cùng chiều","hiệu: 40 km/giờ"],["sum: 200 km/h","opposite / same direction","difference: 40 km/h"]],
    11: [["A · 80","800 km; cách 50 km","70 · B"],["A · 80","800 km; gap 50 km","70 · B"]],
    12: [["Edward","hiệu 12 · tổng 122","Randy"],["Edward","difference 12 · sum 122","Randy"]]
  };
  Object.entries(rows).forEach(([number, variants]) => {
    art[`encounter-17-${number}`] = () => {
      const row = isVi() ? variants[0] : variants[1];
      return `<figure class="math-visual" role="img" aria-label="${local(`Sơ đồ gặp nhau câu ${number} chương 17`, `Encounter diagram for Chapter 17 Practice ${number}`)}"><div style="display:grid;grid-template-columns:minmax(80px,auto) 1fr minmax(80px,auto);align-items:center;gap:12px;width:min(780px,96%);font-weight:900"><span>${row[0]}</span><span style="border-bottom:5px solid #17345c;text-align:center;padding:12px;color:#245ea9">${row[1]}</span><span>${row[2]}</span></div><figcaption>${local("Theo các mũi tên và dùng đúng vận tốc, quãng đường, thời gian trong đề.", "Follow the arrows and use the exact speeds, distance and time from the question.")}</figcaption></figure>`;
    };
  });
})();
