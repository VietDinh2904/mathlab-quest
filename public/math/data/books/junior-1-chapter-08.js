(function registerJuniorOneChapterEight() {
  "use strict";

  const book = window.MQ_BOOK_DATA && window.MQ_BOOK_DATA.junior1;
  if (!book) return;

  const { chapters, exercises, solutions, extra } = book;
  chapters[8] = {
    id: 8,
    emoji: "🔎",
    pages: "64–71",
    available: true,
    title: { en: "Looking for a Pattern", vi: "Tìm quy luật" },
    tagline: {
      en: "Compare positions, test a rule and use it consistently",
      vi: "So sánh các vị trí, kiểm tra quy luật rồi áp dụng nhất quán",
    },
    theory: [
      [
        { en: "Study the change", vi: "Quan sát sự thay đổi" },
        { en: "Check differences, multiplication, alternating terms and sums of earlier terms.", vi: "Kiểm tra hiệu, phép nhân, các vị trí xen kẽ và tổng của các số đứng trước." },
      ],
      [
        { en: "Compare matching positions", vi: "So sánh các vị trí tương ứng" },
        { en: "In boxes, circles and trees, compare numbers that occupy the same place.", vi: "Trong ô, hình tròn và sơ đồ cây, hãy so sánh các số nằm ở cùng một vị trí." },
      ],
      [
        { en: "Test every example", vi: "Kiểm tra mọi hình mẫu" },
        { en: "A correct rule must work for every completed row or figure before it is used on a blank.", vi: "Quy luật đúng phải phù hợp với mọi hàng hoặc hình đã hoàn chỉnh trước khi dùng cho ô trống." },
      ],
    ],
    examples: [
      {
        q: { en: "Complete the number patterns shown.", vi: "Hoàn thành các dãy số đã cho." },
        steps: [
          { en: "Check addition, multiplication and square numbers separately.", vi: "Lần lượt kiểm tra phép cộng, phép nhân và các số chính phương." },
          { en: "The missing pairs are 9, 11; 12, 17; 25, 36; and 47, 95.", vi: "Các cặp số còn thiếu là 9, 11; 12, 17; 25, 36; và 47, 95." },
        ],
        a: { en: "9, 11; 12, 17; 25, 36; 47, 95", vi: "9, 11; 12, 17; 25, 36; 47, 95" },
        visual: "j1-pattern-example-1",
      },
      {
        q: { en: "Find the missing number in the three tree diagrams.", vi: "Tìm số còn thiếu trong ba sơ đồ cây." },
        steps: [
          { en: "In each tree, bottom-left + top = centre + bottom-right.", vi: "Trong mỗi cây: số dưới trái + số trên = số giữa + số dưới phải." },
          { en: "4 + 7 = 8 + 3, so the missing number is 8.", vi: "4 + 7 = 8 + 3 nên số còn thiếu là 8." },
        ],
        a: "8",
        visual: "j1-pattern-example-2",
      },
      {
        q: { en: "Find A, B and C in the square patterns.", vi: "Tìm A, B và C trong các mẫu hình vuông." },
        steps: [
          { en: "Compare the two diagonal sums in each square.", vi: "So sánh tổng của hai đường chéo trong từng hình vuông." },
          { en: "This gives A = 12, B = 10 and C = 6.", vi: "Ta được A = 12, B = 10 và C = 6." },
        ],
        a: "A = 12; B = 10; C = 6",
        visual: "j1-pattern-example-3",
      },
      {
        q: { en: "Find A and B in the two row patterns.", vi: "Tìm A và B trong hai mẫu theo hàng." },
        steps: [
          { en: "In (a), add the first two numbers and multiply by 2. In (b), subtract the second from the first and multiply by 2.", vi: "Ở (a), cộng hai số đầu rồi nhân 2. Ở (b), lấy số đầu trừ số thứ hai rồi nhân 2." },
          { en: "A = 16 and B = 14.", vi: "A = 16 và B = 14." },
        ],
        a: "A = 16; B = 14",
        visual: "j1-pattern-example-4",
      },
      {
        q: { en: "Complete the triangular array of consecutive numbers.", vi: "Hoàn thành bảng tam giác gồm các số tự nhiên liên tiếp." },
        steps: [
          { en: "Read from left to right, one row at a time.", vi: "Đọc từ trái sang phải, lần lượt theo từng hàng." },
          { en: "The blanks are 7, 8, 14 and 15.", vi: "Các số còn thiếu là 7, 8, 14 và 15." },
        ],
        a: "7, 8, 14, 15",
        visual: "j1-pattern-example-5",
      },
    ],
    check: ["j1-c8-1a", "j1-c8-2a", "j1-c8-4a", "j1-c8-9a", "j1-c8-11a"],
  };

  exercises[8] = [];
  solutions[8] = {};

  const add = (number, suffix, en, vi, answerValues, guideEn, guideVi, labels, visual = `j1-pattern-${suffix}`) => {
    const id = `j1-c8-${suffix}`;
    exercises[8].push({
      n: number,
      id,
      source: "pdf",
      q: { en, vi },
      ...(labels ? { labels } : {}),
      visual,
      visualPlacement: "question",
    });
    solutions[8][id] = {
      answers: answerValues.map((value) => Array.isArray(value) ? value : [String(value)]),
      hint: {
        en: "Compare the same positions in every completed example.",
        vi: "So sánh các vị trí tương ứng trong mọi mẫu đã hoàn chỉnh.",
      },
      guide: { en: guideEn, vi: guideVi },
    };
  };

  [
    ["1(a)", "1a", "4, 8, 12, 16, 20, __, __", "4, 8, 12, 16, 20, __, __", ["24", "28"], ["Each term increases by 4.", "20 + 4 = 24; 24 + 4 = 28."], ["Mỗi số tăng thêm 4.", "20 + 4 = 24; 24 + 4 = 28."]],
    ["1(b)", "1b", "1, 2, 4, __, 16, __, 64", "1, 2, 4, __, 16, __, 64", ["8", "32"], ["Multiply each term by 2."], ["Mỗi số được nhân 2."]],
    ["1(c)", "1c", "1, 1, 2, 3, 5, __, __", "1, 1, 2, 3, 5, __, __", ["8", "13"], ["Each term is the sum of the previous two terms."], ["Mỗi số bằng tổng của hai số đứng trước."]],
    ["1(d)", "1d", "2, 3, 5, 8, 13, __, __", "2, 3, 5, 8, 13, __, __", ["21", "34"], ["Each term is the sum of the previous two terms."], ["Mỗi số bằng tổng của hai số đứng trước."]],
    ["1(e)", "1e", "3, 6, 9, __, 15, __, __", "3, 6, 9, __, 15, __, __", ["12", "18", "21"], ["These are consecutive multiples of 3."], ["Đây là các bội liên tiếp của 3."]],
    ["1(f)", "1f", "1, 4, 5, __, 14, 23, __", "1, 4, 5, __, 14, 23, __", ["9", "37"], ["Each term is the sum of the previous two terms."], ["Mỗi số bằng tổng của hai số đứng trước."]],
    ["1(g)", "1g", "2, 3, 4, 6, __, __", "2, 3, 4, 6, __, __", ["9", "14"], ["Add the previous two terms and subtract 1: 4 + 6 − 1 = 9; 6 + 9 − 1 = 14."], ["Cộng hai số đứng trước rồi trừ 1: 4 + 6 − 1 = 9; 6 + 9 − 1 = 14."]],
    ["1(h)", "1h", "3, 2, 5, 4, __, __", "3, 2, 5, 4, __, __", ["7", "6"], ["Odd positions are 3, 5, 7; even positions are 2, 4, 6."], ["Vị trí lẻ là 3, 5, 7; vị trí chẵn là 2, 4, 6."]],
    ["1(i)", "1i", "4, 5, 8, 13, __, __", "4, 5, 8, 13, __, __", ["20", "29"], ["Add 1, 3, 5, 7 and 9 in order."], ["Lần lượt cộng 1, 3, 5, 7 và 9."]],
    ["1(j)", "1j", "2, 4, 8, 14, __, __", "2, 4, 8, 14, __, __", ["22", "32"], ["Add 2, 4, 6, 8 and 10 in order."], ["Lần lượt cộng 2, 4, 6, 8 và 10."]],
  ].forEach(([number, suffix, en, vi, answers, guideEn, guideVi]) => add(number, suffix, `Complete the pattern: ${en}.`, `Hoàn thành dãy số: ${vi}.`, answers, guideEn, guideVi, { en: answers.map((_, i) => `blank ${i + 1}`), vi: answers.map((_, i) => `ô trống ${i + 1}`) }));

  add("2(a)", "2a", "Find the missing number in tree pattern (a).", "Tìm số còn thiếu trong sơ đồ cây (a).", ["12"], ["10 − 2 = 3 + 5 and 8 − 2 = 2 + 4.", "For the third tree, ? − 6 = 3 + 3 = 6, so ? = 12."], ["10 − 2 = 3 + 5 và 8 − 2 = 2 + 4.", "Ở cây thứ ba, ? − 6 = 3 + 3 = 6 nên ? = 12."]);
  add("2(b)", "2b", "Find the missing number in tree pattern (b).", "Tìm số còn thiếu trong sơ đồ cây (b).", ["1"], ["14 − 2 = 7 + 5 and 15 − 6 = 5 + 4.", "11 − ? = 8 + 2 = 10, so ? = 1."], ["14 − 2 = 7 + 5 và 15 − 6 = 5 + 4.", "11 − ? = 8 + 2 = 10 nên ? = 1."]);
  add("2(c)", "2c", "Find the missing number in tree pattern (c).", "Tìm số còn thiếu trong sơ đồ cây (c).", ["5"], ["17 − 2 = 3 × 5 and 28 − 4 = 4 × 6.", "40 − 5 = 7 × ?, so ? = 5."], ["17 − 2 = 3 × 5 và 28 − 4 = 4 × 6.", "40 − 5 = 7 × ? nên ? = 5."]);

  add("3", "3", "Which number pattern is not the same as the other two: (a) 2, 4, 6, 10, 16, …; (b) 1, 2, 4, 8, 16, …; (c) 1, 3, 4, 7, 11, 18, …?", "Dãy nào không cùng quy luật với hai dãy còn lại: (a) 2, 4, 6, 10, 16, …; (b) 1, 2, 4, 8, 16, …; (c) 1, 3, 4, 7, 11, 18, …?", [["b", "(b)"]], ["In (a) and (c), each term is the sum of the previous two. Pattern (b) doubles each time."], ["Ở (a) và (c), mỗi số bằng tổng hai số trước. Dãy (b) lại nhân đôi sau mỗi bước."], { en: ["pattern"], vi: ["dãy"] });

  add("4(a)", "4a", "Find A and B in square pattern (a).", "Tìm A và B trong mẫu hình vuông (a).", ["8", "15"], ["Opposite-corner sums are equal.", "11 + A = 10 + 9, so A = 8. 12 + 8 = B + 5, so B = 15."], ["Tổng hai góc đối diện bằng nhau.", "11 + A = 10 + 9 nên A = 8. 12 + 8 = B + 5 nên B = 15."], { en: ["A", "B"], vi: ["A", "B"] });
  add("4(b)", "4b", "Find A and B in square pattern (b).", "Tìm A và B trong mẫu hình vuông (b).", ["14", "11"], ["Subtract the upper-right number from the upper-left, then add 10 for the lower pair.", "A − 5 = 9, so A = 14. B + 10 = 21, so B = 11."], ["Lấy số trên trái trừ số trên phải, rồi cộng 10 để được cặp phía dưới.", "A − 5 = 9 nên A = 14. B + 10 = 21 nên B = 11."], { en: ["A", "B"], vi: ["A", "B"] });
  add("4(c)", "4c", "Find A and B in square pattern (c).", "Tìm A và B trong mẫu hình vuông (c).", ["22", "12"], ["Read each corresponding position across the three squares.", "The top-left numbers are 20, 22, 24 and the bottom-right numbers are 8, 10, 12."], ["Đọc từng vị trí tương ứng qua ba hình vuông.", "Các số góc trên trái là 20, 22, 24 và các số góc dưới phải là 8, 10, 12."], { en: ["A", "B"], vi: ["A", "B"] });

  add("5", "5", "Fill the four blanks in the multiplication triangle.", "Điền bốn ô trống trong tam giác phép nhân.", ["12", "5", "10", "25"], ["Row 4 contains multiples of 4 and row 5 contains multiples of 5.", "The blanks in reading order are 12, 5, 10 and 25."], ["Hàng 4 gồm các bội của 4 và hàng 5 gồm các bội của 5.", "Các ô trống theo thứ tự đọc là 12, 5, 10 và 25."], { en: ["row 4", "row 5 first", "row 5 second", "row 5 last"], vi: ["hàng 4", "hàng 5 ô đầu", "hàng 5 ô thứ hai", "hàng 5 ô cuối"] });
  add("6", "6", "Fill the four blanks in the triangular number path.", "Điền bốn ô trống trong đường số hình tam giác.", ["8", "9", "13", "12"], ["The numbers 1 through 15 continue in a back-and-forth path.", "The blanks in reading order are 8, 9, 13 and 12."], ["Các số từ 1 đến 15 đi liên tiếp theo đường zíc zắc.", "Các ô trống theo thứ tự đọc là 8, 9, 13 và 12."], { en: ["row 4 first", "row 4 second", "row 5 first", "row 5 second"], vi: ["hàng 4 ô thứ nhất", "hàng 4 ô thứ hai", "hàng 5 ô thứ nhất", "hàng 5 ô thứ hai"] });

  add("7(a)", "7a", "Find the missing number in row pattern (a).", "Tìm số còn thiếu trong mẫu theo hàng (a).", ["4"], ["Multiply the first two numbers, then subtract 2.", "7 × ? − 2 = 26, so ? = 4."], ["Nhân hai số đầu rồi trừ 2.", "7 × ? − 2 = 26 nên ? = 4."]);
  add("7(b)", "7b", "Find the missing number in row pattern (b).", "Tìm số còn thiếu trong mẫu theo hàng (b).", ["4"], ["Add the first two numbers, then multiply by 3.", "(? + 5) × 3 = 27, so ? = 4."], ["Cộng hai số đầu rồi nhân 3.", "(? + 5) × 3 = 27 nên ? = 4."]);

  add("8(a)", "8a", "Fill both blanks: 1, 7, 19, __, 61, __.", "Điền hai ô trống: 1, 7, 19, __, 61, __.", ["37", "91"], ["Add consecutive multiples of 6: +6, +12, +18, +24, +30."], ["Lần lượt cộng các bội liên tiếp của 6: +6, +12, +18, +24, +30."], { en: ["first blank", "second blank"], vi: ["ô trống thứ nhất", "ô trống thứ hai"] });
  add("8(b)", "8b", "Fill four blanks: __, __, 18, __, 30, __.", "Điền bốn ô trống: __, __, 18, __, 30, __.", ["6", "12", "24", "36"], ["Every term is a multiple of 6: 6, 12, 18, 24, 30, 36."], ["Mỗi số là một bội của 6: 6, 12, 18, 24, 30, 36."], { en: ["blank 1", "blank 2", "blank 3", "blank 4"], vi: ["ô 1", "ô 2", "ô 3", "ô 4"] });

  add("9(a)", "9a", "Find the missing number in the four-part circles (a).", "Tìm số còn thiếu trong các hình tròn bốn phần (a).", ["4"], ["Every circle has total 25.", "5 + 6 + 10 = 21, so the missing number is 25 − 21 = 4."], ["Tổng các số trong mỗi hình tròn là 25.", "5 + 6 + 10 = 21 nên số còn thiếu là 25 − 21 = 4."]);
  add("9(b)", "9b", "Find the missing number in the three-part circles (b).", "Tìm số còn thiếu trong các hình tròn ba phần (b).", ["9"], ["Every circle has total 20.", "8 + 3 + ? = 20, so ? = 9."], ["Tổng các số trong mỗi hình tròn là 20.", "8 + 3 + ? = 20 nên ? = 9."]);
  add("9(c)", "9c", "Find the missing number in the four-part circles (c).", "Tìm số còn thiếu trong các hình tròn bốn phần (c).", ["14"], ["Every circle has total 45.", "18 + 10 + 3 + ? = 45, so ? = 14."], ["Tổng các số trong mỗi hình tròn là 45.", "18 + 10 + 3 + ? = 45 nên ? = 14."]);

  add("10(a)", "10a", "Find A and B in the three vertical columns (a).", "Tìm A và B trong ba cột dọc (a).", ["12", "23"], ["Across the top add 3, across the middle add 4 and across the bottom add 5.", "A = 12 and B = 23."], ["Hàng trên tăng 3, hàng giữa tăng 4 và hàng dưới tăng 5.", "A = 12 và B = 23."], { en: ["A", "B"], vi: ["A", "B"] });
  add("10(b)", "10b", "Find A and B in the three vertical columns (b).", "Tìm A và B trong ba cột dọc (b).", ["18", "30"], ["Across the rows add 5, 6 and 7 respectively.", "A = 18 and B = 30."], ["Ba hàng lần lượt tăng 5, 6 và 7.", "A = 18 và B = 30."], { en: ["A", "B"], vi: ["A", "B"] });

  add("11(a)", "11a", "Find A and B in wheel (a).", "Tìm A và B trong bánh xe (a).", ["12", "9"], ["Opposite sectors form ×4 pairs: 5 × 4 = 20 and 7 × 4 = 28.", "3 × 4 = A, so A = 12. B × 4 = 36, so B = 9."], ["Hai ô đối diện tạo thành cặp nhân 4: 5 × 4 = 20 và 7 × 4 = 28.", "3 × 4 = A nên A = 12. B × 4 = 36 nên B = 9."], { en: ["A", "B"], vi: ["A", "B"] });
  add("11(b)", "11b", "Find A and B in wheel (b).", "Tìm A và B trong bánh xe (b).", ["31", "36"], ["Opposite sectors differ by 24: 6 + 24 = 30 and 18 + 24 = 42.", "7 + 24 = A and 12 + 24 = B."], ["Hai ô đối diện hơn kém nhau 24: 6 + 24 = 30 và 18 + 24 = 42.", "7 + 24 = A và 12 + 24 = B."], { en: ["A", "B"], vi: ["A", "B"] });
  add("11(c)", "11c", "Find A and B in wheel (c).", "Tìm A và B trong bánh xe (c).", ["6", "5"], ["Opposite sectors form ×3 pairs: 9 × 3 = 27 and 4 × 3 = 12.", "A × 3 = 18 and B × 3 = 15."], ["Hai ô đối diện tạo thành cặp nhân 3: 9 × 3 = 27 và 4 × 3 = 12.", "A × 3 = 18 và B × 3 = 15."], { en: ["A", "B"], vi: ["A", "B"] });
  add("11(d)", "11d", "Find A, B and C in wheel (d).", "Tìm A, B và C trong bánh xe (d).", ["14", "32", "44"], ["Each sector is 6 more than its opposite: 8 + 6 = A, 26 + 6 = B and 38 + 6 = C."], ["Mỗi ô lớn hơn ô đối diện 6 đơn vị: 8 + 6 = A, 26 + 6 = B và 38 + 6 = C."], { en: ["A", "B", "C"], vi: ["A", "B", "C"] });

  add("12(a)", "12a", "Find A in row pattern (a): 6, 4, 8; 7, 4, 12; A, 3, 24.", "Tìm A trong mẫu theo hàng (a): 6, 4, 8; 7, 4, 12; A, 3, 24.", ["9"], ["Subtract the second number from the first, then multiply by 4.", "(A − 3) × 4 = 24, so A = 9."], ["Lấy số đầu trừ số thứ hai rồi nhân 4.", "(A − 3) × 4 = 24 nên A = 9."]);
  add("12(b)", "12b", "Find B in row pattern (b): 2, 6, 14; 3, 5, 19; 4, B, 34.", "Tìm B trong mẫu theo hàng (b): 2, 6, 14; 3, 5, 19; 4, B, 34.", ["7"], ["Use first × second + consecutive even numbers 2, 4, 6.", "4 × B + 6 = 34, so B = 7."], ["Lấy số đầu nhân số thứ hai rồi lần lượt cộng 2, 4, 6.", "4 × B + 6 = 34 nên B = 7."]);

  extra[8] = [
    { id: "j1-c8-extra-1", source: "ai", level: "warmup", q: { en: "Complete 5, 10, 15, 20, __, __.", vi: "Hoàn thành dãy 5, 10, 15, 20, __, __." }, answers: [["25"], ["30"]], labels: { en: ["blank 1", "blank 2"], vi: ["ô 1", "ô 2"] }, hint: { en: "Use a constant difference.", vi: "Tìm hiệu không đổi." }, steps: { en: ["Add 5 each time: 25, 30."], vi: ["Mỗi lần cộng 5: 25, 30."] }, visual: "j1-pattern-extra-1", visualPlacement: "question" },
    { id: "j1-c8-extra-2", source: "ai", level: "warmup", q: { en: "Complete 2, 6, 18, __, __.", vi: "Hoàn thành dãy 2, 6, 18, __, __." }, answers: [["54"], ["162"]], labels: { en: ["blank 1", "blank 2"], vi: ["ô 1", "ô 2"] }, hint: { en: "Check multiplication.", vi: "Kiểm tra phép nhân." }, steps: { en: ["Multiply by 3 each time."], vi: ["Mỗi lần nhân 3."] }, visual: "j1-pattern-extra-2", visualPlacement: "question" },
    { id: "j1-c8-extra-3", source: "ai", level: "core", q: { en: "Complete 1, 3, 6, 10, 15, __.", vi: "Hoàn thành dãy 1, 3, 6, 10, 15, __." }, answers: [["21"]], hint: { en: "The differences increase by 1.", vi: "Các hiệu tăng dần 1 đơn vị." }, steps: { en: ["Add 2, 3, 4, 5, then 6: 15 + 6 = 21."], vi: ["Lần lượt cộng 2, 3, 4, 5 rồi 6: 15 + 6 = 21."] }, visual: "j1-pattern-extra-3", visualPlacement: "question" },
    { id: "j1-c8-extra-4", source: "ai", level: "core", q: { en: "Each completed circle has total 30. Find ?: 8, 7, 6 and ?.", vi: "Mỗi hình tròn hoàn chỉnh có tổng 30. Tìm ?: 8, 7, 6 và ?." }, answers: [["9"]], hint: { en: "Add the known sectors first.", vi: "Cộng các ô đã biết trước." }, steps: { en: ["8 + 7 + 6 = 21; 30 − 21 = 9."], vi: ["8 + 7 + 6 = 21; 30 − 21 = 9."] }, visual: "j1-pattern-extra-4", visualPlacement: "question" },
    { id: "j1-c8-extra-5", source: "ai", level: "challenge", q: { en: "Complete the interleaved pattern 2, 10, 4, 20, 6, __, __.", vi: "Hoàn thành dãy xen kẽ 2, 10, 4, 20, 6, __, __." }, answers: [["30"], ["8"]], labels: { en: ["sixth term", "seventh term"], vi: ["số thứ sáu", "số thứ bảy"] }, hint: { en: "Separate odd and even positions.", vi: "Tách vị trí lẻ và vị trí chẵn." }, steps: { en: ["Odd positions: 2, 4, 6, 8. Even positions: 10, 20, 30."], vi: ["Vị trí lẻ: 2, 4, 6, 8. Vị trí chẵn: 10, 20, 30."] }, visual: "j1-pattern-extra-5", visualPlacement: "question" },
  ];
})();
