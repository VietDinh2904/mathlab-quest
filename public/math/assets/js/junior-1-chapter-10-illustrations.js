(function registerJuniorOneChapterTenIllustrations() {
  "use strict";
  const art = window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {};
  const isVi = () => document.documentElement.lang !== "en";
  const local = (vi, en) => isVi() ? vi : en;
  const wrap = (title, body) => `<div class="book-visual"><div class="book-visual-title">${title}</div>${body}</div>`;
  const matrix = (rows, cols) => wrap(local("Bảng suy luận trong đề", "Logic table in the question"), `<div style="display:grid;grid-template-columns:minmax(110px,1.2fr) repeat(${cols.length},minmax(90px,1fr));max-width:760px;margin:auto;border:3px solid #17365d;border-radius:14px;overflow:hidden">${["",...cols].map((x)=>`<b style="padding:12px;text-align:center;background:#eaf4ff;border:1px solid #b9cde5;color:#17365d">${x}</b>`).join("")}${rows.map((row)=>`<b style="padding:12px;background:#fff6df;border:1px solid #d8c79b;color:#17365d">${row}</b>${cols.map(()=>`<span style="min-height:48px;border:1px solid #d5e2f1;background:white"></span>`).join("")}`).join("")}</div>`);
  const order = (labels) => wrap(local("Trục sắp xếp", "Ordering line"), `<div style="display:flex;align-items:center;gap:10px;justify-content:center;flex-wrap:wrap;padding:26px">${labels.map((label,index)=>`<span style="min-width:110px;padding:14px 18px;text-align:center;border:3px solid #17365d;border-radius:14px;background:#eef6ff;color:#17365d;font-weight:900">${label}</span>${index<labels.length-1?"<b style='font-size:1.6rem;color:#4c8df6'>→</b>":""}`).join("")}</div>`);
  const truth = (names) => matrix(names, [local("Nói dối", "Lie"), local("Nói thật", "Truth")]);

  art["j1-logic-example-table"] = () => matrix(["A","B","C"],["1","2","3"]);
  art["j1-logic-example-order"] = () => order([local("Chậm nhất", "Slowest"),"?","?",local("Nhanh nhất", "Fastest")]);
  art["j1-logic-example-truth"] = () => truth(["A","B","C"]);

  const configs = {
    "1": [["Harry","Bill","Anthony"],[local("Trắng","White"),local("Vàng","Yellow"),local("Đỏ","Red")]],
    "2": [["Wilfred","Kim","Shirley"],[local("Cam","Orange"),local("Táo","Apple"),local("Đào","Peach")]],
    "3": [["Jolene","Jay","Jaclyn"],[local("Nhỏ nhất","Youngest"),local("Thứ hai","Second"),local("Lớn nhất","Oldest")]],
    "4": [["Rosemary","Melissa","Wendy"],["Golden Retriever","Poodle","Dalmatian"]],
    "5": [[local("Giỏ","Basket"),local("Tô thép","Steel bowl"),local("Tô nhựa","Plastic bowl")],[local("Cam","Oranges"),local("Táo","Apples"),local("Đào","Peaches")]],
    "6": [["Jolene","Betty","David"],[local("Đỏ","Red"),local("Xanh lá","Green"),local("Cam","Orange")]],
    "8": [["Edward","Peter","Leon"],[local("Nha sĩ","Dentist"),local("Giáo viên","Teacher"),local("Người lính","Soldier")]],
  };
  Object.entries(configs).forEach(([id,[rows,cols]])=>{ art[`j1-logic-${id}`]=()=>matrix(rows,cols); });
  art["j1-logic-7"] = () => order([local("Nhanh nhất","Fastest"),"?","?",local("Chậm nhất","Slowest")]);
  art["j1-logic-9-truth"] = () => truth(["Andrew","Billy","Tommy"]);
  art["j1-logic-10-order"] = () => order([local("Nhanh nhất","Fastest"),"?","?",local("Chậm nhất","Slowest")]);
  art["j1-logic-11-truth"] = () => truth(["Jimmy","Randy","Peter"]);
  art["j1-logic-12-order"] = () => order([local("Nhỏ nhất","Smallest"),"?","?","?",local("Lớn nhất","Biggest")]);

  art["j1-logic-extra-1"] = () => matrix(["An","Bảo","Chi"],[local("Sữa","Milk"),local("Nước trái cây","Juice"),local("Nước lọc","Water")]);
  art["j1-logic-extra-2"] = () => order([local("Cao nhất","Tallest"),"?",local("Thấp nhất","Shortest")]);
  art["j1-logic-extra-3"] = () => matrix(["A","B","C"],[local("Đỏ","Red"),local("Xanh dương","Blue"),local("Xanh lá","Green")]);
  art["j1-logic-extra-4"] = () => order([local("Thứ nhất","First"),local("Thứ hai","Second"),local("Thứ ba","Third")]);
  art["j1-logic-extra-5"] = () => truth(["An","Bình","Cường"]);
})();
