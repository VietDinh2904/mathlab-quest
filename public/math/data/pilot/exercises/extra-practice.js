(function registerExtraPractice() {
  "use strict";

  window.PILOT_EXTRA_EXERCISES = {
    1: [
      {
        id: "extra-1-1",
        source: "ai",
        level: "warmup",
        q: {
          en: "Continue the pattern: 4, 7, 13, 22, 34, …",
          vi: "Điền số tiếp theo: 4, 7, 13, 22, 34, …",
        },
        answers: [["49"]],
        hint: {
          en: "Look at how the differences change.",
          vi: "Hãy quan sát sự thay đổi của các hiệu.",
        },
        steps: {
          en: ["Differences are 3, 6, 9, 12.", "The next difference is 15.", "34 + 15 = 49."],
          vi: ["Các hiệu là 3, 6, 9, 12.", "Hiệu tiếp theo là 15.", "34 + 15 = 49."],
        },
        visual: "growing-differences",
      },
      {
        id: "extra-1-2",
        source: "ai",
        level: "core",
        q: {
          en: "Find the next two terms: 2, 5, 4, 10, 6, 15, 8, …",
          vi: "Tìm hai số tiếp theo: 2, 5, 4, 10, 6, 15, 8, …",
        },
        answers: [["20"], ["10"]],
        labels: { en: ["next term", "following term"], vi: ["số tiếp theo", "số kế tiếp nữa"] },
        hint: {
          en: "Separate odd and even positions.",
          vi: "Tách các vị trí lẻ và chẵn.",
        },
        steps: {
          en: ["Odd positions: 2, 4, 6, 8, 10.", "Even positions: 5, 10, 15, 20."],
          vi: ["Vị trí lẻ: 2, 4, 6, 8, 10.", "Vị trí chẵn: 5, 10, 15, 20."],
        },
        visual: "two-lane-pattern",
      },
      {
        id: "extra-1-3",
        source: "ai",
        level: "challenge",
        q: {
          en: "A pattern starts 3, 8, 18, 38, … What is the sixth term?",
          vi: "Dãy bắt đầu 3, 8, 18, 38, … Số hạng thứ sáu là bao nhiêu?",
        },
        answers: [["158"]],
        hint: { en: "Double, then add 2.", vi: "Nhân đôi rồi cộng 2." },
        steps: {
          en: ["38 × 2 + 2 = 78.", "78 × 2 + 2 = 158."],
          vi: ["38 × 2 + 2 = 78.", "78 × 2 + 2 = 158."],
        },
        visual: "pattern-machine",
      },
      {
        id: "extra-1-4",
        source: "ai",
        level: "core",
        q: {
          en: "Find the next term: 6, 11, 18, 27, …",
          vi: "Tìm số tiếp theo: 6, 11, 18, 27, …",
        },
        answers: [["38"]],
        hint: {
          en: "Compare the differences between consecutive terms.",
          vi: "So sánh hiệu giữa hai số hạng liên tiếp.",
        },
        steps: {
          en: ["The differences are 5, 7, 9.", "The next difference is 11.", "27 + 11 = 38."],
          vi: ["Các hiệu là 5, 7, 9.", "Hiệu tiếp theo là 11.", "27 + 11 = 38."],
        },
      },
      {
        id: "extra-1-5",
        source: "ai",
        level: "challenge",
        q: {
          en: "Find the next two terms: 3, 10, 6, 20, 9, 30, 12, …",
          vi: "Tìm hai số tiếp theo: 3, 10, 6, 20, 9, 30, 12, …",
        },
        answers: [["40"], ["15"]],
        labels: { en: ["next term", "following term"], vi: ["số tiếp theo", "số kế tiếp nữa"] },
        hint: {
          en: "Separate the terms in odd and even positions.",
          vi: "Tách các số ở vị trí lẻ và vị trí chẵn.",
        },
        steps: {
          en: ["Odd positions are 3, 6, 9, 12, 15.", "Even positions are 10, 20, 30, 40."],
          vi: ["Vị trí lẻ là 3, 6, 9, 12, 15.", "Vị trí chẵn là 10, 20, 30, 40."],
        },
      },
    ],
    2: [
      {
        id: "extra-2-1",
        source: "ai",
        level: "warmup",
        q: { en: "Find 12 + 13 + … + 28.", vi: "Tính 12 + 13 + … + 28." },
        answers: [["340"]],
        hint: { en: "Pair the first and last terms.", vi: "Ghép số đầu với số cuối." },
        steps: {
          en: ["There are 17 terms.", "Average = (12 + 28) ÷ 2 = 20.", "17 × 20 = 340."],
          vi: ["Có 17 số hạng.", "Trung bình = (12 + 28) ÷ 2 = 20.", "17 × 20 = 340."],
        },
        visual: "sum-12-to-28",
        visualPlacement: "solution",
      },
      {
        id: "extra-2-2",
        source: "ai",
        level: "core",
        q: { en: "Find 5 + 10 + 15 + … + 100.", vi: "Tính 5 + 10 + 15 + … + 100." },
        answers: [["1050"]],
        hint: { en: "Factor out 5.", vi: "Đặt 5 làm thừa số chung." },
        steps: {
          en: ["The sum is 5 × (1 + 2 + … + 20).", "1 + … + 20 = 210.", "5 × 210 = 1050."],
          vi: ["Tổng bằng 5 × (1 + 2 + … + 20).", "1 + … + 20 = 210.", "5 × 210 = 1050."],
        },
        visual: "multiples-5-to-100",
        visualPlacement: "solution",
      },
      {
        id: "extra-2-3",
        source: "ai",
        level: "challenge",
        q: {
          en: "A staircase has 25 rows. Row 1 has 3 blocks, row 2 has 5, then 7, and so on. How many blocks are used?",
          vi: "Một cầu thang có 25 hàng. Hàng 1 có 3 khối, hàng 2 có 5 khối, rồi 7 khối,... Có tất cả bao nhiêu khối?",
        },
        answers: [["675"]],
        hint: { en: "This is an arithmetic sequence of odd numbers.", vi: "Đây là một cấp số cộng gồm các số lẻ." },
        steps: {
          en: ["The last row has 3 + 24 × 2 = 51 blocks.", "Average = (3 + 51) ÷ 2 = 27.", "25 × 27 = 675."],
          vi: ["Hàng cuối có 3 + 24 × 2 = 51 khối.", "Trung bình = (3 + 51) ÷ 2 = 27.", "25 × 27 = 675."],
        },
        visual: "staircase-25-rows",
        visualPlacement: "solution",
      },
      {
        id: "extra-2-4",
        source: "ai",
        level: "warmup",
        q: { en: "Find 21 + 22 + … + 39.", vi: "Tính 21 + 22 + … + 39." },
        answers: [["570"]],
        hint: { en: "Pair the first and last terms.", vi: "Ghép số đầu với số cuối." },
        steps: {
          en: ["There are 19 terms.", "Average = (21 + 39) ÷ 2 = 30.", "19 × 30 = 570."],
          vi: ["Có 19 số hạng.", "Trung bình = (21 + 39) ÷ 2 = 30.", "19 × 30 = 570."],
        },
      },
      {
        id: "extra-2-5",
        source: "ai",
        level: "core",
        q: { en: "Find 2 + 4 + 6 + … + 60.", vi: "Tính 2 + 4 + 6 + … + 60." },
        answers: [["930"]],
        hint: { en: "Factor out 2.", vi: "Đặt 2 làm thừa số chung." },
        steps: {
          en: ["The sum is 2 × (1 + 2 + … + 30).", "1 + 2 + … + 30 = 465.", "2 × 465 = 930."],
          vi: ["Tổng bằng 2 × (1 + 2 + … + 30).", "1 + 2 + … + 30 = 465.", "2 × 465 = 930."],
        },
      },
    ],
    3: [
      {
        id: "extra-3-1",
        source: "ai",
        level: "warmup",
        q: {
          en: "Mai and An have 96 stickers. Mai has 18 more than An. How many does each have?",
          vi: "Mai và An có 96 nhãn dán. Mai nhiều hơn An 18 nhãn. Mỗi bạn có bao nhiêu?",
        },
        answers: [["57"], ["39"]],
        labels: { en: ["Mai", "An"], vi: ["Mai", "An"] },
        hint: { en: "Remove the difference, then split equally.", vi: "Bớt phần chênh lệch rồi chia đều." },
        steps: {
          en: ["96 − 18 = 78.", "An: 78 ÷ 2 = 39.", "Mai: 39 + 18 = 57."],
          vi: ["96 − 18 = 78.", "An: 78 ÷ 2 = 39.", "Mai: 39 + 18 = 57."],
        },
        visual: "bar-difference",
      },
      {
        id: "extra-3-2",
        source: "ai",
        level: "core",
        q: {
          en: "A red ribbon is 3 times as long as a blue ribbon. Together they are 84 cm. Find both lengths.",
          vi: "Dây đỏ dài gấp 3 lần dây xanh. Tổng chiều dài là 84 cm. Tìm độ dài mỗi dây.",
        },
        answers: [["63"], ["21"]],
        labels: { en: ["red", "blue"], vi: ["đỏ", "xanh"] },
        hint: { en: "The total contains 4 equal units.", vi: "Tổng gồm 4 phần bằng nhau." },
        steps: {
          en: ["4 units = 84 cm.", "1 unit = 21 cm.", "Red = 63 cm; blue = 21 cm."],
          vi: ["4 phần = 84 cm.", "1 phần = 21 cm.", "Đỏ = 63 cm; xanh = 21 cm."],
        },
        visual: "bar-ratio",
      },
      {
        id: "extra-3-3",
        source: "ai",
        level: "challenge",
        q: {
          en: "There are 240 pupils in three clubs. Art has twice as many as Chess; Music has three times as many as Chess. How many are in each club?",
          vi: "Ba câu lạc bộ có 240 học sinh. Mỹ thuật gấp 2 lần Cờ vua; Âm nhạc gấp 3 lần Cờ vua. Mỗi câu lạc bộ có bao nhiêu học sinh?",
        },
        answers: [["80"], ["40"], ["120"]],
        labels: { en: ["Art", "Chess", "Music"], vi: ["Mỹ thuật", "Cờ vua", "Âm nhạc"] },
        hint: { en: "Use 2 + 1 + 3 equal units.", vi: "Dùng 2 + 1 + 3 phần bằng nhau." },
        steps: {
          en: ["6 units = 240.", "1 unit = 40.", "Art = 80, Chess = 40, Music = 120."],
          vi: ["6 phần = 240.", "1 phần = 40.", "Mỹ thuật = 80, Cờ vua = 40, Âm nhạc = 120."],
        },
        visual: "bar-three-groups",
      },
      {
        id: "extra-3-4",
        source: "ai",
        level: "core",
        q: {
          en: "Two boxes contain 134 marbles altogether. The first has 26 more marbles than the second. How many are in each box?",
          vi: "Hai hộp có tất cả 134 viên bi. Hộp thứ nhất nhiều hơn hộp thứ hai 26 viên. Mỗi hộp có bao nhiêu viên?",
        },
        answers: [["80"], ["54"]],
        labels: { en: ["first box", "second box"], vi: ["hộp thứ nhất", "hộp thứ hai"] },
        hint: { en: "Remove the difference, then divide equally.", vi: "Bớt phần chênh lệch rồi chia đều." },
        steps: {
          en: ["134 − 26 = 108.", "The second box has 108 ÷ 2 = 54.", "The first box has 54 + 26 = 80."],
          vi: ["134 − 26 = 108.", "Hộp thứ hai có 108 ÷ 2 = 54 viên.", "Hộp thứ nhất có 54 + 26 = 80 viên."],
        },
      },
      {
        id: "extra-3-5",
        source: "ai",
        level: "challenge",
        q: {
          en: "A large basket has 4 times as many oranges as a small basket. Together they have 175 oranges. How many are in each basket?",
          vi: "Giỏ lớn có số cam gấp 4 lần giỏ nhỏ. Cả hai giỏ có 175 quả cam. Mỗi giỏ có bao nhiêu quả?",
        },
        answers: [["140"], ["35"]],
        labels: { en: ["large basket", "small basket"], vi: ["giỏ lớn", "giỏ nhỏ"] },
        hint: { en: "The total contains 5 equal units.", vi: "Tổng gồm 5 phần bằng nhau." },
        steps: {
          en: ["5 units = 175.", "1 unit = 175 ÷ 5 = 35.", "The large basket has 4 × 35 = 140."],
          vi: ["5 phần = 175.", "1 phần = 175 ÷ 5 = 35.", "Giỏ lớn có 4 × 35 = 140 quả."],
        },
      },
    ],
  };
})();
