(function registerBeginner() {
  "use strict";
  const titles = [
    ["Looking for a Pattern", "Tìm quy luật", "🔎", "1–9"], ["The Story of Gauss", "Câu chuyện về Gauss", "➕", "10–17"],
    ["Working Backwards", "Suy ngược", "↩️", "18–28"], ["The Chicken-and-Rabbit Problem", "Bài toán gà và thỏ", "🐔", "29–40"],
    ["Problems from Planting Trees", "Bài toán trồng cây", "🌳", "41–50"], ["Tricks in Addition and Subtraction", "Mẹo cộng và trừ", "🎯", "51–58"],
    ["Tricks in Multiplication and Division", "Mẹo nhân và chia", "✖️", "59–69"], ["Logic", "Suy luận logic", "🧠", "70–84"],
    ["Counting", "Phép đếm", "🧮", "85–90"], ["Problem on Journey", "Bài toán hành trình", "🚌", "91–98"],
    ["The Age Problem", "Bài toán tuổi", "🎂", "99–110"], ["Solve Using Model", "Giải bằng sơ đồ", "📊", "111–123"],
    ["Solve by Comparison and Replacement", "So sánh và thay thế", "⚖️", "124–132"], ["The Excess-and-Shortage Problem", "Bài toán thừa và thiếu", "📦", "133–139"],
    ["Finding Cubes", "Tìm số khối lập phương", "🧊", "140–143"], ["The Shortest Path", "Đường đi ngắn nhất", "🛤️", "144–154"],
    ["Interesting Remainder Problems", "Bài toán số dư", "🔁", "155–163"], ["Finding Perimeter", "Tìm chu vi", "📐", "164–171"],
    ["The Page-Number Problem", "Bài toán số trang", "📖", "172–180"], ["Defining New Operations", "Định nghĩa phép toán mới", "⚙️", "181–187"],
    ["Value of Ones Digit", "Chữ số hàng đơn vị", "1️⃣", "188–198"], ["Pigeonhole Principle", "Nguyên lý chuồng bồ câu", "🕊️", "199–206"],
  ];
  const chapters = {}, exercises = {}, solutions = {}, extra = {};
  titles.forEach(([en, vi, emoji, pages], i) => {
    const id = i + 1;
    chapters[id] = { id, emoji, pages, available: id === 1, title: { en, vi },
      tagline: id === 1 ? { en: "Discover the rule, then test it", vi: "Khám phá quy luật rồi kiểm tra lại" } : { en: "This chapter is being illustrated from the original book", vi: "Chương này đang được dựng hình từ sách gốc" },
      theory: id === 1 ? [
        [{ en: "Difference patterns", vi: "Quy luật hiệu" }, { en: "Compare consecutive terms and look for a second pattern in the differences.", vi: "So sánh hai số liên tiếp và tìm quy luật mới trong các hiệu." }],
        [{ en: "Multiplicative patterns", vi: "Quy luật nhân" }, { en: "If differences do not help, test multiplying or alternating operations.", vi: "Nếu hiệu chưa rõ, thử phép nhân hoặc hai phép toán xen kẽ." }],
        [{ en: "Build from earlier terms", vi: "Tạo số từ các số trước" }, { en: "Some sequences add earlier terms, as in Fibonacci-type patterns.", vi: "Một số dãy cộng các số hạng trước, giống kiểu Fibonacci." }],
        [{ en: "Visual patterns", vi: "Quy luật bằng hình" }, { en: "For diagrams, compare the same position across the completed examples.", vi: "Với sơ đồ, hãy so sánh cùng một vị trí ở các ví dụ đã hoàn chỉnh." }],
      ] : [],
      examples: id === 1 ? [
        { q: { en: "2, 6, 18, __", vi: "2, 6, 18, __" }, steps: [{ en: "Each term is 3 times the previous term.", vi: "Mỗi số gấp 3 lần số trước." }], a: "54" },
        { q: { en: "44, 22, 20, 10, 8, __, __", vi: "44, 22, 20, 10, 8, __, __" }, steps: [{ en: "Alternate ÷2 and −2.", vi: "Luân phiên ÷2 và −2." }], a: "4, 2" },
      ] : [], check: id === 1 ? ["b1-1a", "b1-1f", "b1-2", "b1-3", "b1-5c"] : [] };
    exercises[id] = []; solutions[id] = {}; extra[id] = [];
  });
  const add = (n, id, qEn, qVi, answers, hintEn, hintVi, guideEn, guideVi, visual, labels) => {
    exercises[1].push({ n, id, source: "pdf", q: { en: qEn, vi: qVi }, ...(visual ? { visual } : {}), ...(labels ? { labels } : {}) });
    solutions[1][id] = { answers: answers.map(a => Array.isArray(a) ? a : [String(a)]), hint: { en: hintEn, vi: hintVi }, guide: { en: guideEn, vi: guideVi } };
  };
  const patterns = [
    ["1(a)", "b1-1a", "1, 1, 2, 3, 5, __, __", ["8", "13"], "Add the two previous terms.", "Cộng hai số đứng trước.", "5 + 3 = 8; 8 + 5 = 13."],
    ["1(b)", "b1-1b", "1, 1, 1, 1, 4, 7, 13, __", ["25"], "Add the previous four terms.", "Cộng bốn số đứng trước.", "1 + 4 + 7 + 13 = 25."],
    ["1(c)", "b1-1c", "3, 5, 9, 15, 23, 33, 45, __", ["59"], "The differences are consecutive even numbers.", "Các hiệu là những số chẵn liên tiếp.", "The next difference is 14, so 45 + 14 = 59."],
    ["1(d)", "b1-1d", "1, 3, 6, 10, __, 21, 28, 36", ["15"], "Add 2, 3, 4, 5, …", "Cộng lần lượt 2, 3, 4, 5,…", "10 + 5 = 15."],
    ["1(e)", "b1-1e", "0, 3, 8, 15, 24, __, 48, 63", ["35"], "Look at the odd-number differences.", "Quan sát các hiệu là số lẻ.", "Differences are 3, 5, 7, 9, 11, …; 24 + 11 = 35."],
    ["1(f)", "b1-1f", "1, 2, 6, 24, 120, __, 5040", ["720"], "Multiply by 2, 3, 4, 5, …", "Nhân lần lượt với 2, 3, 4, 5,…", "120 × 6 = 720."],
    ["1(g)", "b1-1g", "0, 1, 3, 8, 21, 55, __, __", ["144", "377"], "Three times the previous term, minus the term before it.", "Lấy 3 lần số trước rồi trừ số đứng trước nữa.", "3 × 55 − 21 = 144; 3 × 144 − 55 = 377."],
    ["1(h)", "b1-1h", "1, 3, 7, 15, 31, __, 127", ["63"], "Double, then add 1.", "Nhân đôi rồi cộng 1.", "31 × 2 + 1 = 63."],
    ["1(i)", "b1-1i", "1, 1, 3, 7, 13, __, 31", ["21"], "Add consecutive even numbers.", "Cộng các số chẵn liên tiếp.", "13 + 8 = 21."],
    ["1(j)", "b1-1j", "1, 2, 5, 13, 34, 89, __, __", ["233", "610"], "Multiply the previous term by 3, then subtract the term before it.", "Lấy 3 lần số trước rồi trừ số đứng trước nữa.", "3 × 89 − 34 = 233; 3 × 233 − 89 = 610."],
  ];
  patterns.forEach(([n,id,series,answers,hEn,hVi,guide]) => add(n,id,`Complete the pattern: ${series}`,`Hoàn thành dãy: ${series}`,answers,hEn,hVi,guide,guide,"number-pattern"));
  add("2", "b1-2", "Use the pattern to calculate the five products ending with 54,321 × 9 through 987,654,321 × 9.", "Dựa vào quy luật, tính năm tích từ 54 321 × 9 đến 987 654 321 × 9.", ["488889","5888889","68888889","788888889","8888888889"], "Watch the 8s grow while the outside digits change.", "Quan sát số chữ số 8 tăng dần, hai đầu thay đổi.", "Multiply each number by 9 and verify the digit pattern.", "Nhân từng số với 9 và kiểm tra quy luật chữ số.", "magic-nine", ["54 321 × 9", "654 321 × 9", "7 654 321 × 9", "87 654 321 × 9", "987 654 321 × 9"]);
  add("3", "b1-3", "Complete the next three rows of Pascal's Triangle.", "Hoàn thành ba hàng tiếp theo của tam giác Pascal.", ["5","10","10","5","6","15","20","15","6","7","21","35","35","21","7"], "Each inside number is the sum of the two numbers above it.", "Mỗi số bên trong bằng tổng hai số ngay phía trên.", "The rows are 1 5 10 10 5 1; 1 6 15 20 15 6 1; 1 7 21 35 35 21 7 1.", "Ba hàng là 1 5 10 10 5 1; 1 6 15 20 15 6 1; 1 7 21 35 35 21 7 1.", "pascal-beginner");
  add("4", "b1-4", "Complete: 101 × 44, 55, 66, 77, 88 and 99.", "Tính tiếp: 101 × 44, 55, 66, 77, 88 và 99.", ["4444","5555","6666","7777","8888","9999"], "The repeated two-digit factor becomes four repeated digits.", "Số có hai chữ số lặp lại trở thành số có bốn chữ số lặp lại.", "101 × 44 = 4444, and the same structure continues.", "101 × 44 = 4444 và quy luật tiếp tục tương tự.", "multiply-101", ["101 × 44","101 × 55","101 × 66","101 × 77","101 × 88","101 × 99"]);
  const boxes = [
    ["5(a)","b1-5a","25",["30","15"],"In the examples, right = 2 × bottom and left = bottom + 10."],
    ["5(b)","b1-5b","20",["19","38"],"The top difference decreases 3, 2, 1; bottom = 2 × top-right."],
    ["5(c)","b1-5c","17",["14","22"],"Top-right = left − 3; bottom = left + 5."],
    ["5(d)","b1-5d","7",["42","26"],"Across the three boxes, each row changes by 1, 6 and 6."],
    ["5(e)","b1-5e","20",["80","92"],"Top-right = 4 × left; bottom = top-right + 12."],
  ];
  boxes.forEach(([n,id,given,answers,rule],idx)=>add(n,id,`Find the two missing numbers when the top-left number is ${given}.`,`Tìm hai số còn thiếu khi số góc trên trái là ${given}.`,answers,rule,rule,rule,rule,`number-box-${idx+1}`, ["top-right","bottom"]));
  extra[1] = [
    { id:"b1-extra-1",source:"ai",level:"warmup",q:{en:"Continue: 4, 9, 16, 25, __.",vi:"Điền tiếp: 4, 9, 16, 25, __."},answers:[["36"]],hint:{en:"These are square numbers.",vi:"Đây là các số chính phương."},steps:{en:["2², 3², 4², 5², so next is 6²."],vi:["2², 3², 4², 5² nên tiếp theo là 6²."]}},
    { id:"b1-extra-2",source:"ai",level:"warmup",q:{en:"Continue: 2, 5, 10, 17, __.",vi:"Điền tiếp: 2, 5, 10, 17, __."},answers:[["26"]],hint:{en:"Add consecutive odd numbers.",vi:"Cộng các số lẻ liên tiếp."},steps:{en:["Differences are 3,5,7,9."],vi:["Các hiệu là 3,5,7,9."]}},
    { id:"b1-extra-3",source:"ai",level:"core",q:{en:"Find the next two terms: 3, 6, 5, 10, 9, 18, __, __.",vi:"Tìm hai số tiếp: 3, 6, 5, 10, 9, 18, __, __."},answers:[["17"],["34"]],hint:{en:"Alternate ×2 and −1.",vi:"Luân phiên ×2 và −1."},steps:{en:["18 − 1 = 17; 17 × 2 = 34."],vi:["18 − 1 = 17; 17 × 2 = 34."]}},
    { id:"b1-extra-4",source:"ai",level:"core",q:{en:"What is the seventh triangular number: 1, 3, 6, 10, …?",vi:"Số tam giác thứ bảy của dãy 1, 3, 6, 10,… là bao nhiêu?"},answers:[["28"]],hint:{en:"Keep adding 5, 6 and 7.",vi:"Tiếp tục cộng 5, 6 và 7."},steps:{en:["15, 21, 28."],vi:["15, 21, 28."]}},
    { id:"b1-extra-5",source:"ai",level:"challenge",q:{en:"Complete: 1, 4, 10, 22, 46, __.",vi:"Điền tiếp: 1, 4, 10, 22, 46, __."},answers:[["94"]],hint:{en:"Double, then add 2.",vi:"Nhân đôi rồi cộng 2."},steps:{en:["46 × 2 + 2 = 94."],vi:["46 × 2 + 2 = 94."]}},
  ];
  window.MQ_BOOK_DATA = window.MQ_BOOK_DATA || {};
  window.MQ_BOOK_DATA.beginner = { chapters, exercises, solutions, extra };
})();
