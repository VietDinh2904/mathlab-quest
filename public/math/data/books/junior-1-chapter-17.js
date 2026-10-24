(function registerJuniorOneChapterSeventeen() {
  "use strict";
  const book = window.MQ_BOOK_DATA && window.MQ_BOOK_DATA.junior1;
  if (!book) return;
  const { chapters, exercises, solutions, extra } = book;

  chapters[17] = {
    id: 17, emoji: "🔢", pages: "141–147", available: true,
    title: { en: "Odd and Even Numbers", vi: "Số chẵn và số lẻ" },
    tagline: { en: "Recognise parity without doing unnecessary calculation", vi: "Nhận ra tính chẵn lẻ mà không cần tính dài" },
    theory: [
      [{ en: "Even with even", vi: "Chẵn với chẵn" }, { en: "Even + even and even − even are even.", vi: "Chẵn + chẵn và chẵn − chẵn đều cho số chẵn." }],
      [{ en: "Odd with odd", vi: "Lẻ với lẻ" }, { en: "Odd + odd and odd − odd are even.", vi: "Lẻ + lẻ và lẻ − lẻ đều cho số chẵn." }],
      [{ en: "One even, one odd", vi: "Một chẵn, một lẻ" }, { en: "Even + odd and even − odd are odd.", vi: "Chẵn + lẻ và chẵn − lẻ đều cho số lẻ." }],
      [{ en: "Look for a repeating pattern", vi: "Tìm quy luật lặp" }, { en: "For a long sequence, mark only odd or even and find the shortest repeating block.", vi: "Với dãy dài, chỉ đánh dấu chẵn hoặc lẻ rồi tìm khối lặp ngắn nhất." }],
    ],
    examples: [
      { q: { en: "Are 3 + 8 and 4 + 6 odd or even?", vi: "3 + 8 và 4 + 6 là số lẻ hay số chẵn?" }, steps: [{ en: "Odd + even is odd.", vi: "Lẻ + chẵn là lẻ." }, { en: "Even + even is even.", vi: "Chẵn + chẵn là chẵn." }], a: { en: "3 + 8 is odd; 4 + 6 is even", vi: "3 + 8 là lẻ; 4 + 6 là chẵn" }, visual: "j1-parity-example-rules" },
      { q: { en: "How many ways can 12 apples be split between two baskets so both amounts are odd?", vi: "Có bao nhiêu cách chia 12 quả táo vào hai giỏ để cả hai phần đều lẻ?" }, steps: [{ en: "List unordered positive odd pairs with sum 12.", vi: "Liệt kê các cặp số lẻ dương không kể thứ tự có tổng 12." }, { en: "They are 1+11, 3+9 and 5+7.", vi: "Các cặp là 1+11, 3+9 và 5+7." }], a: { en: "3 ways", vi: "3 cách" }, visual: "j1-parity-example-baskets" },
      { q: { en: "In blue, green, blue, green, …, what colours are positions 15 and 28?", vi: "Trong dãy xanh lam, xanh lục, xanh lam, xanh lục, …, vị trí 15 và 28 có màu gì?" }, steps: [{ en: "Odd positions are blue.", vi: "Vị trí lẻ có màu xanh lam." }, { en: "Even positions are green.", vi: "Vị trí chẵn có màu xanh lục." }], a: { en: "15th blue; 28th green", vi: "Vị trí 15 xanh lam; vị trí 28 xanh lục" }, visual: "j1-parity-example-beads" },
    ],
    check: ["j1-c17-1a", "j1-c17-2", "j1-c17-4", "j1-c17-8", "j1-c17-12c"],
  };

  exercises[17] = [];
  solutions[17] = {};
  const add = ({ n, en, vi, answers, methodEn, methodVi, guideEn, guideVi, visual, solutionVisual }) => {
    const id = `j1-c17-${n}`;
    exercises[17].push({ n: String(n), id, source: "pdf", q: { en, vi }, ...(visual ? { visual, visualPlacement: "question" } : {}) });
    solutions[17][id] = {
      answers: answers.map((answer) => Array.isArray(answer) ? answer : [String(answer)]),
      hint: { en: methodEn, vi: methodVi },
      guide: { en: guideEn, vi: guideVi },
      ...(solutionVisual ? { visual: solutionVisual } : {}),
    };
  };

  const parityItems = [
    ["1a", "4 + 7", "odd", "lẻ", "even + odd = odd", "chẵn + lẻ = lẻ"],
    ["1b", "8 + 5", "odd", "lẻ", "even + odd = odd", "chẵn + lẻ = lẻ"],
    ["1c", "11 − 7", "even", "chẵn", "odd − odd = even", "lẻ − lẻ = chẵn"],
    ["1d", "3 + 9", "even", "chẵn", "odd + odd = even", "lẻ + lẻ = chẵn"],
    ["1e", "10 + 2", "even", "chẵn", "even + even = even", "chẵn + chẵn = chẵn"],
    ["1f", "12 − 4", "even", "chẵn", "even − even = even", "chẵn − chẵn = chẵn"],
    ["1g", "5 + 9", "even", "chẵn", "odd + odd = even", "lẻ + lẻ = chẵn"],
    ["1h", "15 − 7", "even", "chẵn", "odd − odd = even", "lẻ − lẻ = chẵn"],
    ["1i", "6 + 12", "even", "chẵn", "even + even = even", "chẵn + chẵn = chẵn"],
    ["1j", "18 + 11", "odd", "lẻ", "even + odd = odd", "chẵn + lẻ = lẻ"],
    ["1k", "17 − 11", "even", "chẵn", "odd − odd = even", "lẻ − lẻ = chẵn"],
    ["1l", "19 − 7", "even", "chẵn", "odd − odd = even", "lẻ − lẻ = chẵn"],
  ];
  parityItems.forEach(([n, expression, answerEn, answerVi, ruleEn, ruleVi]) => add({
    n,
    en: `Is the result of ${expression} odd or even?`,
    vi: `Kết quả của ${expression} là số lẻ hay số chẵn?`,
    answers: [[answerEn, answerVi]],
    methodEn: "Classify each number before calculating.",
    methodVi: "Xác định tính chẵn lẻ của từng số trước khi tính.",
    guideEn: [`The two numbers have the parities shown in the expression.`, `Use the rule: ${ruleEn}.`, `Therefore the result is ${answerEn}.`],
    guideVi: ["Xác định số nào chẵn, số nào lẻ trong phép tính.", `Dùng quy tắc: ${ruleVi}.`, `Vậy kết quả là số ${answerVi}.`],
  }));

  add({ n: 2, en: "16 marbles are to be given to 2 children. How many ways are there to give the marbles away so that each child will receive an odd number of marbles?", vi: "Có 16 viên bi được chia cho 2 bạn nhỏ. Có bao nhiêu cách chia để mỗi bạn nhận được một số lẻ viên bi?", answers: [["4", "4 ways", "4 cách"]], methodEn: "List unordered positive odd pairs with sum 16.", methodVi: "Liệt kê các cặp số lẻ dương không kể thứ tự có tổng 16.", guideEn: ["Start with 1 + 15 and increase the smaller odd number by 2 each time.", "The pairs are 1+15, 3+13, 5+11 and 7+9.", "There are 4 ways."], guideVi: ["Bắt đầu với 1 + 15 rồi mỗi lần tăng số lẻ nhỏ hơn thêm 2.", "Các cặp là 1+15, 3+13, 5+11 và 7+9.", "Có 4 cách."], visual: "j1-parity-2", solutionVisual: "j1-parity-2-solution" });
  add({ n: 3, en: "14 oranges are to be placed in 2 baskets. How many ways are there to place the oranges so that each basket contains an even number of oranges?", vi: "Có 14 quả cam được đặt vào 2 giỏ. Có bao nhiêu cách để mỗi giỏ chứa một số chẵn quả cam?", answers: [["3", "3 ways", "3 cách"]], methodEn: "List unordered positive even pairs with sum 14.", methodVi: "Liệt kê các cặp số chẵn dương không kể thứ tự có tổng 14.", guideEn: ["Start with 2 + 12 and increase the smaller even number by 2.", "The pairs are 2+12, 4+10 and 6+8.", "There are 3 ways."], guideVi: ["Bắt đầu với 2 + 12 rồi tăng số chẵn nhỏ hơn thêm 2.", "Các cặp là 2+12, 4+10 và 6+8.", "Có 3 cách."], visual: "j1-parity-3", solutionVisual: "j1-parity-3-solution" });
  add({ n: 4, en: "In the number sequence 1, 3, 6, 10, 15, 21, 28, …, is the 15th term odd or even? How about the 23rd term?", vi: "Trong dãy số 1, 3, 6, 10, 15, 21, 28, …, số hạng thứ 15 là số lẻ hay số chẵn? Số hạng thứ 23 thì sao?", answers: [["both even", "15th even and 23rd even", "cả hai đều chẵn"]], methodEn: "Track only parity and use the four-term repeating block.", methodVi: "Chỉ theo dõi tính chẵn lẻ và dùng khối lặp bốn số.", guideEn: ["The parity pattern is odd, odd, even, even, then it repeats.", "15 leaves remainder 3 when divided by 4, so the 15th term matches the third position: even.", "23 also leaves remainder 3 when divided by 4, so the 23rd term is even."], guideVi: ["Quy luật chẵn lẻ là lẻ, lẻ, chẵn, chẵn rồi lặp lại.", "15 chia 4 dư 3 nên số hạng thứ 15 ứng với vị trí thứ ba: chẵn.", "23 cũng chia 4 dư 3 nên số hạng thứ 23 là chẵn."], visual: "j1-parity-4", solutionVisual: "j1-parity-4-solution" });
  add({ n: 5, en: "In the number sequence 1, 4, 9, 16, 25, 36, …, is the 10th term odd or even? Is the 15th term odd or even?", vi: "Trong dãy số 1, 4, 9, 16, 25, 36, …, số hạng thứ 10 là số lẻ hay số chẵn? Số hạng thứ 15 là số lẻ hay số chẵn?", answers: [["10th even; 15th odd", "số hạng thứ 10 chẵn; số hạng thứ 15 lẻ"]], methodEn: "A square number has the same parity as its position.", methodVi: "Số chính phương có cùng tính chẵn lẻ với vị trí của nó.", guideEn: ["The pattern alternates odd, even, odd, even, …", "The 10th position is even, so the 10th term is even.", "The 15th position is odd, so the 15th term is odd."], guideVi: ["Quy luật luân phiên lẻ, chẵn, lẻ, chẵn, …", "Vị trí 10 là chẵn nên số hạng thứ 10 chẵn.", "Vị trí 15 là lẻ nên số hạng thứ 15 lẻ."], visual: "j1-parity-5", solutionVisual: "j1-parity-5-solution" });
  add({ n: 6, en: "Is the result of the series 1 + 2 + 3 + … + 9 + 10 odd or even?", vi: "Kết quả của tổng 1 + 2 + 3 + … + 9 + 10 là số lẻ hay số chẵn?", answers: [["odd", "55", "lẻ"]], methodEn: "Pair the first and last terms.", methodVi: "Ghép số đầu với số cuối.", guideEn: ["Pair 1+10, 2+9, 3+8, 4+7 and 5+6.", "Each pair totals 11, and there are 5 pairs.", "5 × 11 = 55, which is odd."], guideVi: ["Ghép 1+10, 2+9, 3+8, 4+7 và 5+6.", "Mỗi cặp có tổng 11 và có 5 cặp.", "5 × 11 = 55 là số lẻ."], visual: "j1-parity-6", solutionVisual: "j1-parity-6-solution" });
  add({ n: 7, en: "The sum of 3 odd numbers is 21. Find the 3 numbers.", vi: "Tổng của 3 số lẻ là 21. Hãy tìm 3 số đó.", answers: [["5, 7, 9", "5; 7; 9"]], methodEn: "Use three consecutive odd numbers centred at the average.", methodVi: "Dùng ba số lẻ liên tiếp có số giữa bằng trung bình cộng.", guideEn: ["The middle number is 21 ÷ 3 = 7.", "The neighbouring odd numbers are 7−2=5 and 7+2=9.", "The three numbers are 5, 7 and 9."], guideVi: ["Số ở giữa là 21 ÷ 3 = 7.", "Hai số lẻ kề bên là 7−2=5 và 7+2=9.", "Ba số là 5, 7 và 9."], visual: "j1-parity-7", solutionVisual: "j1-parity-7-solution" });
  add({ n: 8, en: "How many ways are there to give 12 apples to 3 children so that each child will get an even number of apples?", vi: "Có bao nhiêu cách chia 12 quả táo cho 3 bạn nhỏ để mỗi bạn nhận được một số chẵn quả táo?", answers: [["3", "3 ways", "3 cách"]], methodEn: "List unordered triples of positive even numbers with sum 12.", methodVi: "Liệt kê các bộ ba số chẵn dương không kể thứ tự có tổng 12.", guideEn: ["Begin with the smallest even amount, 2.", "The triples are 8+2+2, 6+4+2 and 4+4+4.", "There are 3 ways."], guideVi: ["Bắt đầu với số chẵn dương nhỏ nhất là 2.", "Các bộ ba là 8+2+2, 6+4+2 và 4+4+4.", "Có 3 cách."], visual: "j1-parity-8", solutionVisual: "j1-parity-8-solution" });
  add({ n: 9, en: "Is the sum of the first 5 odd numbers odd or even?", vi: "Tổng của 5 số lẻ đầu tiên là số lẻ hay số chẵn?", answers: [["odd", "25", "lẻ"]], methodEn: "Write the five numbers or count how many odd addends there are.", methodVi: "Viết năm số hoặc đếm số lượng số hạng lẻ.", guideEn: ["The first five odd numbers are 1, 3, 5, 7 and 9.", "Their sum is 25.", "Therefore the sum is odd."], guideVi: ["Năm số lẻ đầu tiên là 1, 3, 5, 7 và 9.", "Tổng của chúng là 25.", "Vậy tổng là số lẻ."], visual: "j1-parity-9", solutionVisual: "j1-parity-9-solution" });
  add({ n: 10, en: "Is the sum of the first 5 even numbers odd or even?", vi: "Tổng của 5 số chẵn đầu tiên là số lẻ hay số chẵn?", answers: [["even", "30", "chẵn"]], methodEn: "Every addend is even.", methodVi: "Mọi số hạng đều là số chẵn.", guideEn: ["The first five positive even numbers are 2, 4, 6, 8 and 10.", "Their sum is 30.", "Therefore the sum is even."], guideVi: ["Năm số chẵn dương đầu tiên là 2, 4, 6, 8 và 10.", "Tổng của chúng là 30.", "Vậy tổng là số chẵn."], visual: "j1-parity-10", solutionVisual: "j1-parity-10-solution" });
  add({ n: 11, en: "In the number sequence 1, 1, 2, 3, 5, 8, 13, …, is the 16th term odd or even? Is the 27th term odd or even?", vi: "Trong dãy số 1, 1, 2, 3, 5, 8, 13, …, số hạng thứ 16 là số lẻ hay số chẵn? Số hạng thứ 27 là số lẻ hay số chẵn?", answers: [["16th odd; 27th even", "số hạng thứ 16 lẻ; số hạng thứ 27 chẵn"]], methodEn: "The parity pattern repeats odd, odd, even.", methodVi: "Quy luật chẵn lẻ lặp theo nhóm lẻ, lẻ, chẵn.", guideEn: ["Marking only parity gives odd, odd, even, then repeats every 3 terms.", "16 ÷ 3 leaves remainder 1, so the 16th term is odd.", "27 is divisible by 3, so the 27th term is even."], guideVi: ["Chỉ đánh dấu chẵn lẻ ta được lẻ, lẻ, chẵn rồi lặp theo chu kì 3.", "16 chia 3 dư 1 nên số hạng thứ 16 là lẻ.", "27 chia hết cho 3 nên số hạng thứ 27 là chẵn."], visual: "j1-parity-11", solutionVisual: "j1-parity-11-solution" });
  add({ n: "12a", en: "How many L-shaped tiles shown are needed to cover figure (a)?", vi: "Cần bao nhiêu viên gạch chữ L đã cho để phủ kín hình (a)?", answers: [["5", "5 tiles", "5 viên"]], methodEn: "Compare total area with the three-square tile.", methodVi: "So sánh diện tích toàn hình với viên gạch gồm ba ô vuông.", guideEn: ["Figure (a) contains 5+4+3+3=15 unit squares.", "Each L-shaped tile covers 3 unit squares.", "15 ÷ 3 = 5, and the tiling shown confirms that 5 tiles fit."], guideVi: ["Hình (a) có 5+4+3+3=15 ô vuông đơn vị.", "Mỗi viên chữ L phủ 3 ô vuông đơn vị.", "15 ÷ 3 = 5 và cách ghép trong lời giải xác nhận 5 viên phủ kín hình."], visual: "j1-parity-12a", solutionVisual: "j1-parity-12a-solution" });
  add({ n: "12b", en: "How many T-shaped tiles shown are needed to cover the 4 × 4 square in figure (b)?", vi: "Cần bao nhiêu viên gạch chữ T đã cho để phủ kín hình vuông 4 × 4 ở hình (b)?", answers: [["4", "4 tiles", "4 viên"]], methodEn: "Compare the 16-square board with the four-square tile.", methodVi: "So sánh bảng 16 ô với viên gạch gồm bốn ô vuông.", guideEn: ["The 4 × 4 board contains 16 unit squares.", "Each T-shaped tile covers 4 unit squares.", "16 ÷ 4 = 4, and four turned T tiles cover the board."], guideVi: ["Bảng 4 × 4 có 16 ô vuông đơn vị.", "Mỗi viên chữ T phủ 4 ô vuông đơn vị.", "16 ÷ 4 = 4 và bốn viên chữ T xoay theo các hướng sẽ phủ kín bảng."], visual: "j1-parity-12b", solutionVisual: "j1-parity-12b-solution" });
  add({ n: "12c", en: "How many square-ring tiles shown are needed to cover the 4 × 4 square in figure (c)?", vi: "Cần bao nhiêu viên gạch dạng khung vuông đã cho để phủ kín hình vuông 4 × 4 ở hình (c)?", answers: [["4", "4 tiles", "4 viên"]], methodEn: "Place one four-square tile in each quarter of the board.", methodVi: "Đặt một viên gạch bốn ô vào mỗi phần tư của bảng.", guideEn: ["The board contains 16 unit squares and each tile covers 4.", "Split the board into four 2 × 2 quarters.", "One tile covers each quarter, so 4 tiles are needed."], guideVi: ["Bảng có 16 ô vuông đơn vị và mỗi viên phủ 4 ô.", "Chia bảng thành bốn phần tư 2 × 2.", "Mỗi viên phủ một phần tư nên cần 4 viên."], visual: "j1-parity-12c", solutionVisual: "j1-parity-12c-solution" });

  extra[17] = [
    { id: "j1-c17-extra-1", source: "ai", level: "warmup", q: { en: "Without calculating fully, decide whether 24 + 17 is odd or even.", vi: "Không cần tính đầy đủ, hãy cho biết 24 + 17 là số lẻ hay số chẵn." }, answers: [["odd", "lẻ"]], hint: { en: "Even + odd is odd.", vi: "Chẵn + lẻ là lẻ." }, steps: { en: ["24 is even and 17 is odd.", "Even + odd is odd."], vi: ["24 là số chẵn và 17 là số lẻ.", "Chẵn + lẻ là lẻ."] } },
    { id: "j1-c17-extra-2", source: "ai", level: "warmup", q: { en: "How many unordered ways can 18 counters be split into two positive odd groups?", vi: "Có bao nhiêu cách không kể thứ tự để chia 18 quân tính thành hai nhóm số lẻ dương?" }, answers: [["4", "4 ways", "4 cách"]], hint: { en: "List odd pairs from the outside inward.", vi: "Liệt kê các cặp số lẻ từ ngoài vào trong." }, steps: { en: ["The pairs are 1+17, 3+15, 5+13 and 7+11.", "So there are 4 ways."], vi: ["Các cặp là 1+17, 3+15, 5+13 và 7+11.", "Vậy có 4 cách."] } },
    { id: "j1-c17-extra-3", source: "ai", level: "core", q: { en: "Is 1 + 2 + 3 + … + 12 odd or even?", vi: "Tổng 1 + 2 + 3 + … + 12 là số lẻ hay số chẵn?" }, answers: [["even", "78", "chẵn"]], hint: { en: "Pair the first and last terms.", vi: "Ghép số đầu với số cuối." }, steps: { en: ["There are 6 pairs, each totalling 13.", "6 × 13 = 78, which is even."], vi: ["Có 6 cặp, mỗi cặp có tổng 13.", "6 × 13 = 78 là số chẵn."] } },
    { id: "j1-c17-extra-4", source: "ai", level: "core", q: { en: "In the sequence 1, 1, 2, 3, 5, 8, …, is the 20th term odd or even?", vi: "Trong dãy 1, 1, 2, 3, 5, 8, …, số hạng thứ 20 là số lẻ hay số chẵn?" }, answers: [["odd", "lẻ"]], hint: { en: "Use the repeating pattern odd, odd, even.", vi: "Dùng quy luật lặp lẻ, lẻ, chẵn." }, steps: { en: ["Parity repeats every 3 terms.", "20 ÷ 3 leaves remainder 2, the second position of the block, so it is odd."], vi: ["Tính chẵn lẻ lặp theo chu kì 3.", "20 chia 3 dư 2, ứng với vị trí thứ hai trong khối nên là số lẻ."] } },
    { id: "j1-c17-extra-5", source: "ai", level: "challenge", q: { en: "How many unordered ways can 18 oranges be placed in 3 baskets so that each basket contains a positive even number?", vi: "Có bao nhiêu cách không kể thứ tự để đặt 18 quả cam vào 3 giỏ sao cho mỗi giỏ có một số chẵn dương quả cam?" }, answers: [["7", "7 ways", "7 cách"]], hint: { en: "List triples in increasing order.", vi: "Liệt kê các bộ ba theo thứ tự tăng dần." }, steps: { en: ["The triples are 2,2,14; 2,4,12; 2,6,10; 2,8,8; 4,4,10; 4,6,8; 6,6,6.", "There are 7 ways."], vi: ["Các bộ ba là 2,2,14; 2,4,12; 2,6,10; 2,8,8; 4,4,10; 4,6,8; 6,6,6.", "Có 7 cách."] } },
  ];
})();
