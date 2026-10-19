(function registerChapter16Illustrations() {
  "use strict";
  const art = window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {};
  const isVi = () => document.documentElement.lang !== "en";
  const local = (vi, en) => isVi() ? vi : en;
  const rows = {
    1: [["🏠","55 m/phút · 6 phút","🏫"],["🏠","55 m/min · 6 min","🏫"]],
    2: [["🏠","480 m · 60 m/phút","📚"],["🏠","480 m · 60 m/min","📚"]],
    3: [["A","640 km · 80 km/giờ","B"],["A","640 km · 80 km/h","B"]],
    4: [["A","480 km · 6 giờ","B"],["A","480 km · 6 h","B"]],
    5: [["George","65 m/phút · 8 phút","Tom"],["George","65 m/min · 8 min","Tom"]],
    6: [["🏠","275 m · 5 phút","📚"],["🏠","275 m · 5 min","📚"]],
    7: [["🦅","cách 60 m · gần thêm 20 m/8 giây","🐇"],["🦅","60 m gap · gains 20 m/8 s","🐇"]],
    8: [["Barbara 60","cách 60 m","Catherine 45"],["Barbara 60","gap 60 m","Catherine 45"]],
    9: [["Xe A 100","cách nhau 100 km khi về đích","Xe B 80"],["Car A 100","gap at finish 100 km","Car B 80"]],
    10: [["🐆","cách 100 m · gần thêm 20 m/5 giây","🦌"],["🐆","100 m gap · gains 20 m/5 s","🦌"]],
    11: [["Dora 60","cách 150 m","Jilly 45"],["Dora 60","150 m gap","Jilly 45"]],
    12: [["Xe tải 80","xuất phát trước 3 giờ","Ô tô 120"],["Van 80","3-hour head start","Car 120"]]
  };
  Object.entries(rows).forEach(([number, variants]) => {
    art[`motion-16-${number}`] = () => {
      const row = isVi() ? variants[0] : variants[1];
      return `<figure class="math-visual" role="img" aria-label="${local(`Sơ đồ chuyển động câu ${number} chương 16`, `Motion diagram for Chapter 16 Practice ${number}`)}"><div style="display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:12px;width:min(760px,94%);font-weight:900"><span>${row[0]}</span><span style="border-bottom:5px solid #17345c;text-align:center;padding:12px;color:#245ea9">→ ${row[1]} →</span><span>${row[2]}</span></div><figcaption>${local("Đánh dấu quãng đường, thời gian và vận tốc đúng theo đề trước khi tính.", "Mark the distance, time and speed from the question before calculating.")}</figcaption></figure>`;
    };
  });
})();
