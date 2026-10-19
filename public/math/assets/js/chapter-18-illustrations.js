(function registerChapter18Illustrations() {
  "use strict";
  const art = window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {};
  const isVi = () => document.documentElement.lang !== "en";
  const local = (vi, en) => isVi() ? vi : en;
  const rows = {
    1: ["4, 8, 12, …, 800","4, 8, 12, …, 800"],
    2: ["5, 10, 15, …, 1000","5, 10, 15, …, 1000"],
    3: ["1-9: 9 chữ số | 10-99: 180 | 100-175: ?","1-9: 9 digits | 10-99: 180 | 100-175: ?"],
    4: ["432 chữ số → ? trang","432 digits → pages?"],
    5: ["0 · 3 · 5 · 8 → số nhỏ nhất + số lớn nhất","0 · 3 · 5 · 8 → smallest + greatest"],
    6: ["Trăm · Chục · Đơn vị → 3 | 8 | 9","H T O → 3 | 8 | 9"],
    7: ["10, 20-21, 30-32, …, 90-98","10, 20-21, 30-32, …, 90-98"],
    8: ["450 chữ số → ? trang","450 digits → pages?"],
    9: ["chữ số 5 ở hàng đơn vị + hàng chục","5 in ones + 5 in tens"],
    10: ["chữ số 1 ở hàng đơn vị + hàng chục","1 in ones + 1 in tens"],
    11: ["Trăm | Trăm + Đơn vị | 3 × Trăm","H | H+O | 3×H"],
    12: ["chữ số 2 ở hàng đơn vị + chục + trăm","2 in ones + tens + hundreds"],
    13: ["9+8+8=25 · 9+9+7=25","9+8+8=25 · 9+9+7=25"],
    14: ["A B C D · A=4D · A-C=2","A B C D · A=4D · A-C=2"],
    15: ["31-13 · 42-24 · … · 97-79","31-13 · 42-24 · … · 97-79"]
  };
  Object.entries(rows).forEach(([number, values]) => {
    art[`digits-18-${number}`] = () => `<figure class="math-visual" role="img" aria-label="${local(`Sơ đồ chữ số câu ${number} chương 18`, `Digit and number diagram for Chapter 18 Practice ${number}`)}"><div style="display:flex;justify-content:center;align-items:center;min-height:110px;width:min(820px,96%);padding:18px;border:3px solid #17345c;border-radius:18px;background:linear-gradient(135deg,#eef6ff,#fff5d7);font-size:clamp(1.1rem,3vw,1.8rem);font-weight:950;letter-spacing:.04em;text-align:center">${isVi() ? values[0] : values[1]}</div><figcaption>${local("Sắp xếp các hàng hoặc nhóm số đúng như đề bài.", "Organise the place values or number groups exactly as shown in the question.")}</figcaption></figure>`;
  });
})();
