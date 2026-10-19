(function registerChapter14Illustrations() {
  "use strict";
  const art = window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {};
  const isVi = () => document.documentElement.lang !== "en";
  const local = (vi, en) => isVi() ? vi : en;
  const rows = {
    1: [["Mỗi bạn 8 · thiếu 6", "Mỗi bạn 10 · dư 8 chỗ"], ["8 each · short 6", "10 each · 8 spaces"]],
    2: [["Mỗi ngày 10 · còn 24", "Mỗi ngày 12 · thiếu 14"], ["10 each · 24 left", "12 each · short 14"]],
    3: [["Mỗi lớp 35 · lớp cuối 20", "Mỗi lớp 30 · còn 15 bạn"], ["35 each · last class 20", "30 each · 15 without class"]],
    4: [["Mỗi người 4 cây · dư 5", "Mỗi người 7 cây · 1 người không có"], ["4 trees each · 5 left", "7 trees each · 1 person idle"]],
    5: [["Mỗi phần 10 · dư 8", "Mỗi phần 14 · thiếu 12"], ["10 each · 8 left", "14 each · short 12"]],
    6: [["Mỗi người 4 · dư 8", "Mỗi người 6 · 1 người không có"], ["4 each · 8 left", "6 each · 1 person gets none"]],
    7: [["40 m/phút · muộn 5 phút", "60 m/phút · sớm 3 phút"], ["40 m/min · 5 min late", "60 m/min · 3 min early"]],
    8: [["30 trang/ngày · muộn 2 ngày", "39 trang/ngày · sớm 4 ngày"], ["30 pages/day · 2 days late", "39 pages/day · 4 days early"]]
  };
  Object.entries(rows).forEach(([number, variants]) => {
    art[`excess-14-${number}`] = () => {
      const row = isVi() ? variants[0] : variants[1];
      return `<figure class="math-visual" role="img" aria-label="${local(`So sánh thừa thiếu ở câu ${number} chương 14`, `Excess and shortage comparison for Chapter 14 Practice ${number}`)}"><div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:14px;width:min(760px,95%)"><strong style="padding:18px;border-radius:16px;background:#ffe7df;border:2px solid #17345c;text-align:center">${row[0]}</strong><b style="font-size:1.6rem">↔</b><strong style="padding:18px;border-radius:16px;background:#e3f5ef;border:2px solid #17345c;text-align:center">${row[1]}</strong></div><div style="font-weight:900;color:#245ea9">${local("tổng chênh lệch ÷ chênh lệch mỗi nhóm", "total difference ÷ difference per group")}</div><figcaption>${local("So sánh hai phương án bằng đúng số thừa và thiếu trong đề.", "Compare the two plans using the exact excess and shortage in the question.")}</figcaption></figure>`;
    };
  });
})();
