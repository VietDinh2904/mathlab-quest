(function registerJuniorOneChapterNine() {
  "use strict";

  const book = window.MQ_BOOK_DATA && window.MQ_BOOK_DATA.junior1;
  if (!book) return;

  const { chapters, exercises, solutions, extra } = book;
  chapters[9] = {
    id: 9,
    emoji: "🧮",
    pages: "72–79",
    available: true,
    title: { en: "Counting", vi: "Phép đếm" },
    tagline: {
      en: "Count small parts first, then combine them without omissions",
      vi: "Đếm hình nhỏ trước rồi ghép thành hình lớn, không bỏ sót và không đếm lặp",
    },
    theory: [
      [
        { en: "Count by size", vi: "Đếm theo kích thước" },
        { en: "List the smallest shapes first, then shapes made from two, three or more parts.", vi: "Liệt kê hình nhỏ nhất trước, sau đó đếm các hình ghép từ hai, ba hoặc nhiều phần." },
      ],
      [
        { en: "Count systematically", vi: "Đếm có hệ thống" },
        { en: "Move from left to right or layer by layer so that every object is counted once.", vi: "Đi từ trái sang phải hoặc theo từng lớp để mỗi hình chỉ được đếm một lần." },
      ],
      [
        { en: "Hidden cubes", vi: "Khối lập phương bị che" },
        { en: "A cube on a higher layer must be supported by cubes underneath it.", vi: "Một khối ở tầng trên phải có các khối đỡ bên dưới, kể cả khi các khối đó bị che." },
      ],
    ],
    examples: [
      {
        q: { en: "Count the squares in a 2 by 2 grid.", vi: "Đếm số hình vuông trong lưới 2 × 2." },
        steps: [
          { en: "There are four 1 by 1 squares.", vi: "Có 4 hình vuông 1 × 1." },
          { en: "The whole grid is one more square, so 4 + 1 = 5.", vi: "Cả lưới tạo thêm 1 hình vuông lớn, nên 4 + 1 = 5." },
        ],
        a: "5",
        visual: "j1-count-example-grid",
      },
      {
        q: { en: "Count triangles by their size.", vi: "Đếm tam giác theo từng kích thước." },
        steps: [
          { en: "Mark every small triangle, then combine adjacent ones.", vi: "Đánh dấu từng tam giác nhỏ rồi ghép các tam giác liền nhau." },
          { en: "Check the whole outer triangle last.", vi: "Cuối cùng kiểm tra tam giác lớn bao ngoài." },
        ],
        a: { en: "Count each size once", vi: "Mỗi kích thước chỉ đếm một lần" },
        visual: "j1-count-example-triangle",
      },
      {
        q: { en: "Count a stepped stack of cubes.", vi: "Đếm một chồng khối lập phương theo bậc." },
        steps: [
          { en: "Count the bottom layer, then the middle and top layers.", vi: "Đếm tầng dưới, rồi tầng giữa và tầng trên." },
          { en: "Add all layer totals.", vi: "Cộng số khối của tất cả các tầng." },
        ],
        a: { en: "bottom + middle + top", vi: "tầng dưới + tầng giữa + tầng trên" },
        visual: "j1-count-example-cubes",
      },
    ],
    check: ["j1-c9-1a", "j1-c9-2b", "j1-c9-5", "j1-c9-7d", "j1-c9-8d"],
  };

  exercises[9] = [];
  solutions[9] = {};

  const add = (number, suffix, en, vi, answers, guideEn, guideVi, visual, labels) => {
    const id = `j1-c9-${suffix}`;
    exercises[9].push({
      n: number,
      id,
      source: "pdf",
      q: { en, vi },
      visual,
      visualPlacement: "question",
      ...(labels ? { labels } : {}),
    });
    solutions[9][id] = {
      answers: answers.map((answer) => Array.isArray(answer) ? answer : [String(answer)]),
      hint: {
        en: "Count in a fixed order and group shapes by size.",
        vi: "Đếm theo một thứ tự cố định và chia hình theo kích thước.",
      },
      guide: { en: guideEn, vi: guideVi },
    };
  };

  add("1(a)", "1a", "How many squares are there in figure (a)?", "Có bao nhiêu hình vuông trong hình (a)?", ["8"], ["There are six small squares and two 2 by 2 squares.", "6 + 2 = 8."], ["Có 6 hình vuông nhỏ và 2 hình vuông 2 × 2.", "6 + 2 = 8."], "j1-count-1a");
  add("1(b)", "1b", "How many squares are there in figure (b)?", "Có bao nhiêu hình vuông trong hình (b)?", ["10"], ["Count four outer quarter-squares, four inner quarter-squares, the outer square and the inner square.", "4 + 4 + 1 + 1 = 10."], ["Đếm 4 ô ở bốn phần ngoài, 4 ô trong hình vuông giữa, hình vuông ngoài và hình vuông giữa.", "4 + 4 + 1 + 1 = 10."], "j1-count-1b");

  add("2(a)", "2a", "How many triangles are there in figure (a)?", "Có bao nhiêu tam giác trong hình (a)?", ["5"], ["There are four small triangles and one whole triangle.", "4 + 1 = 5."], ["Có 4 tam giác nhỏ và 1 tam giác lớn bao ngoài.", "4 + 1 = 5."], "j1-count-2a");
  add("2(b)", "2b", "How many triangles are there in figure (b)?", "Có bao nhiêu tam giác trong hình (b)?", ["5"], ["Count three smallest triangles, one triangle made from two parts and the whole triangle.", "3 + 1 + 1 = 5."], ["Đếm 3 tam giác nhỏ nhất, 1 tam giác ghép từ hai phần và 1 tam giác lớn bao ngoài.", "3 + 1 + 1 = 5."], "j1-count-2b");

  add("3", "3", "How many rectangles are there in the figure?", "Có bao nhiêu hình chữ nhật trong hình?", ["36"], ["The figure is a 3 by 3 grid.", "Count 9 one-cell, 12 two-cell, 6 three-cell, 4 four-cell, 4 six-cell and 1 nine-cell rectangle.", "9 + 12 + 6 + 4 + 4 + 1 = 36."], ["Hình là một lưới 3 × 3.", "Đếm 9 hình một ô, 12 hình hai ô, 6 hình ba ô, 4 hình bốn ô, 4 hình sáu ô và 1 hình chín ô.", "9 + 12 + 6 + 4 + 4 + 1 = 36."], "j1-count-3");

  add("4(a)", "4a", "How many triangles are there in figure (a)?", "Có bao nhiêu tam giác trong hình (a)?", ["7"], ["There are four large upright triangles and three small inverted triangles.", "4 + 3 = 7."], ["Có 4 tam giác lớn hướng lên và 3 tam giác nhỏ hướng xuống.", "4 + 3 = 7."], "j1-count-4a");
  add("4(b)", "4b", "How many triangles are there in figure (b)?", "Có bao nhiêu tam giác trong hình (b)?", ["14"], ["Group the triangles by the number of component triangles they contain: 5 + 4 + 2 + 2 + 1.", "The total is 14."], ["Chia các tam giác theo số phần tạo thành: 5 + 4 + 2 + 2 + 1.", "Tổng cộng có 14 tam giác."], "j1-count-4b");

  add("5", "5", "How many squares and how many triangles are there in the figure?", "Trong hình có bao nhiêu hình vuông và bao nhiêu tam giác?", ["7", "15"], ["Squares: six small squares and one 2 by 2 square, giving 7.", "Triangles: count by size to get 6 + 1 + 1 + 4 + 2 + 1 = 15."], ["Hình vuông: 6 hình nhỏ và 1 hình 2 × 2, được 7.", "Tam giác: đếm theo kích thước được 6 + 1 + 1 + 4 + 2 + 1 = 15."], "j1-count-5", { en: ["squares", "triangles"], vi: ["hình vuông", "tam giác"] });

  [
    ["6(a)", "6a", "16", ["Count rectangles made from 1, 2 and 3 cells: 7 + 6 + 3 = 16."], ["Đếm hình chữ nhật gồm 1, 2 và 3 ô: 7 + 6 + 3 = 16."]],
    ["6(b)", "6b", "19", ["Count by length: 7 + 6 + 3 + 2 + 1 = 19."], ["Đếm theo chiều dài: 7 + 6 + 3 + 2 + 1 = 19."]],
    ["6(c)", "6c", "19", ["Count by length: 7 + 6 + 3 + 2 + 1 = 19."], ["Đếm theo chiều dài: 7 + 6 + 3 + 2 + 1 = 19."]],
    ["6(d)", "6d", "17", ["Count by length: 7 + 6 + 3 + 1 = 17."], ["Đếm theo chiều dài: 7 + 6 + 3 + 1 = 17."]],
  ].forEach(([number, suffix, answer, enGuide, viGuide]) => add(number, suffix, `How many rectangles are there in figure (${suffix.at(-1)})?`, `Có bao nhiêu hình chữ nhật trong hình (${suffix.at(-1)})?`, [answer], enGuide, viGuide, `j1-count-${suffix}`));

  [
    ["7(a)", "7a", "4", ["Count one top cube and three cubes on the lower layer: 1 + 3 = 4."], ["Đếm 1 khối ở trên và 3 khối ở tầng dưới: 1 + 3 = 4."]],
    ["7(b)", "7b", "12", ["Count the three layers: 2 + 4 + 6 = 12."], ["Đếm ba tầng: 2 + 4 + 6 = 12."]],
    ["7(c)", "7c", "9", ["Count the three layers: 1 + 3 + 5 = 9."], ["Đếm ba tầng: 1 + 3 + 5 = 9."]],
    ["7(d)", "7d", "14", ["Count the three layers: 1 + 4 + 9 = 14."], ["Đếm ba tầng: 1 + 4 + 9 = 14."]],
    ["7(e)", "7e", "24", ["Count the three horizontal layers: 7 + 8 + 9 = 24."], ["Đếm ba tầng ngang: 7 + 8 + 9 = 24."]],
    ["7(f)", "7f", "19", ["Count the four visible height groups: 1 + 4 + 5 + 9 = 19."], ["Đếm bốn nhóm theo độ cao: 1 + 4 + 5 + 9 = 19."]],
  ].forEach(([number, suffix, answer, enGuide, viGuide]) => add(number, suffix, `How many cubes are there in object (${suffix.at(-1)})?`, `Có bao nhiêu khối lập phương trong vật thể (${suffix.at(-1)})?`, [answer], enGuide, viGuide, `j1-count-${suffix}`));

  [
    ["8(a)", "8a", "3", ["The segments are AB, BC and AC."], ["Các đoạn thẳng là AB, BC và AC."]],
    ["8(b)", "8b", "6", ["The segments are AB, BC, CD, AC, BD and AD."], ["Các đoạn thẳng là AB, BC, CD, AC, BD và AD."]],
    ["8(c)", "8c", "10", ["Five marked points determine 4 + 3 + 2 + 1 = 10 segments."], ["Năm điểm đã đánh dấu tạo 4 + 3 + 2 + 1 = 10 đoạn thẳng."]],
    ["8(d)", "8d", "15", ["Six marked points determine 5 + 4 + 3 + 2 + 1 = 15 segments."], ["Sáu điểm đã đánh dấu tạo 5 + 4 + 3 + 2 + 1 = 15 đoạn thẳng."]],
  ].forEach(([number, suffix, answer, enGuide, viGuide]) => add(number, suffix, `How many line segments of different lengths are shown in figure (${suffix.at(-1)})?`, `Có bao nhiêu đoạn thẳng có độ dài khác nhau trong hình (${suffix.at(-1)})?`, [answer], enGuide, viGuide, `j1-count-${suffix}`));

  extra[9] = [
    { id: "j1-c9-extra-1", source: "ai", level: "warmup", q: { en: "How many squares are in a 3 by 3 grid?", vi: "Lưới 3 × 3 có bao nhiêu hình vuông?" }, answers: [["14"]], hint: { en: "Count 1 by 1, 2 by 2 and 3 by 3 squares.", vi: "Đếm hình 1 × 1, 2 × 2 và 3 × 3." }, steps: { en: ["9 + 4 + 1 = 14."], vi: ["9 + 4 + 1 = 14."] }, visual: "j1-count-extra-1", visualPlacement: "question" },
    { id: "j1-c9-extra-2", source: "ai", level: "warmup", q: { en: "Four points lie on one line. How many different segments do they determine?", vi: "Bốn điểm nằm trên một đường thẳng tạo bao nhiêu đoạn thẳng khác nhau?" }, answers: [["6"]], hint: { en: "Choose any two endpoints.", vi: "Chọn hai điểm làm hai đầu mút." }, steps: { en: ["3 + 2 + 1 = 6."], vi: ["3 + 2 + 1 = 6."] }, visual: "j1-count-extra-2", visualPlacement: "question" },
    { id: "j1-c9-extra-3", source: "ai", level: "core", q: { en: "A cube staircase has layers of 1, 4 and 9 cubes. How many cubes are there?", vi: "Một tháp khối có các tầng gồm 1, 4 và 9 khối. Có tất cả bao nhiêu khối?" }, answers: [["14"]], hint: { en: "Add the layers.", vi: "Cộng số khối ở các tầng." }, steps: { en: ["1 + 4 + 9 = 14."], vi: ["1 + 4 + 9 = 14."] }, visual: "j1-count-extra-3", visualPlacement: "question" },
    { id: "j1-c9-extra-4", source: "ai", level: "core", q: { en: "How many rectangles are in a 2 by 3 grid?", vi: "Lưới 2 × 3 có bao nhiêu hình chữ nhật?" }, answers: [["18"]], hint: { en: "Choose two of the three horizontal and two of the four vertical grid lines.", vi: "Chọn 2 trong 3 đường ngang và 2 trong 4 đường dọc." }, steps: { en: ["3 × 6 = 18."], vi: ["3 × 6 = 18."] }, visual: "j1-count-extra-4", visualPlacement: "question" },
    { id: "j1-c9-extra-5", source: "ai", level: "challenge", q: { en: "How many triangles are in a triangle divided into nine equal small triangles?", vi: "Một tam giác được chia thành 9 tam giác nhỏ bằng nhau có tất cả bao nhiêu tam giác?" }, answers: [["13"]], hint: { en: "Count triangles of side lengths 1, 2 and 3.", vi: "Đếm tam giác có cạnh dài 1, 2 và 3 đơn vị." }, steps: { en: ["Nine small, three medium and one whole triangle: 9 + 3 + 1 = 13."], vi: ["9 tam giác nhỏ, 3 tam giác vừa và 1 tam giác lớn: 9 + 3 + 1 = 13."] }, visual: "j1-count-extra-5", visualPlacement: "question" },
  ];
})();
