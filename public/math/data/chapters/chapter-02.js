(function registerChapter() {
  "use strict";

  window.BOOK_DATA = window.BOOK_DATA || {};
  window.BOOK_DATA["2"] = {
  "title": "The Story of Gauss",
  "emoji": "➕",
  "pages": "10–18",
  "theory": [
    [
      "Gauss story",
      "The chapter introduces Carl Gauss as a German scientist and mathematician and uses the famous 1+2+…+100 challenge to motivate fast summation."
    ],
    [
      "Pair first and last terms",
      "Ghép số đầu với số cuối. Nếu mỗi cặp có cùng tổng, ta chỉ cần đếm số cặp rồi nhân."
    ],
    [
      "Use equal pairs",
      "Với một dãy cách đều, tổng của cặp ngoài cùng giúp tính nhanh toàn bộ dãy."
    ],
    [
      "Compare two series",
      "Khi hai dãy gần giống nhau, có thể trừ từng hạng tương ứng để biến bài dài thành nhiều số nhỏ giống nhau."
    ],
    [
      "Look for repeated blocks",
      "Một dãy lặp lại có thể được chia thành các block giống nhau rồi cộng theo block."
    ]
  ],
  "examples": [
    {
      "q": "Compute 2 + 6 + 10 + 8 + 12 + 14.",
      "steps": [
        "Ghép 2 với 14, 6 với 10; còn 8 và 12 tạo thêm 20.",
        "Các nhóm được sắp lại để tạo tổng tròn."
      ],
      "a": "52"
    },
    {
      "q": "Compute 1 + 2 + 3 + 4 + 5.",
      "steps": [
        "Ghép 1+4 và 2+3, rồi cộng 5.",
        "Hai cặp bằng 5 và còn một số 5."
      ],
      "a": "15"
    },
    {
      "q": "Compute 1 + 3 + 5 + … + 17 + 19.",
      "steps": [
        "Ghép số đầu và cuối: 1+19=20, 3+17=20, …",
        "Có 5 cặp 20."
      ],
      "a": "100"
    },
    {
      "q": "Compute 1 + 2 + 3 + … + 49 + 50.",
      "steps": [
        "Ghép 1+50, 2+49, … được các cặp 51.",
        "Có 25 cặp."
      ],
      "a": "1275"
    },
    {
      "q": "Charlotte reads 10 pages on day 1, 15 on day 2, 20 on day 3, and so on. She finishes on day 8. How many pages are in the book?",
      "steps": [
        "Dãy là 10,15,20,25,30,35,40,45.",
        "Ghép ngoài vào trong để được 55; có 4 cặp."
      ],
      "a": "220 pages"
    },
    {
      "q": "Compute (2+4+…+30) − (1+3+…+29).",
      "steps": [
        "Ghép từng số chẵn với số lẻ ngay trước nó.",
        "Mỗi hiệu bằng 1; có 15 cặp."
      ],
      "a": "15"
    }
  ],
  "practice": [
    {
      "n": "1",
      "q": "Compute the following series: (a) 2+3+4+5+6+7+8  (b) 6+7+8+9+10+11  (c) 4+6+8+10+12+14  (d) 1+3+5+7+9+11",
      "labels": [
        "a",
        "b",
        "c",
        "d"
      ],
      "ans": [
        [
          "35"
        ],
        [
          "51"
        ],
        [
          "54"
        ],
        [
          "36"
        ]
      ],
      "hint": "Ghép số đầu với số cuối hoặc dùng số trung bình × số hạng.",
      "guide": "(a) 7×5=35. (b) 6×8.5=51. (c) 6×9=54. (d) 6×6=36.",
      "id": "2-1"
    },
    {
      "n": "2",
      "q": "John saves 5 fifty-cent coins in the first week, 6 in the second, 7 in the third and so on. How many fifty-cent coins can he save by the end of 10 weeks?",
      "ans": [
        [
          "95"
        ]
      ],
      "hint": "Số coin theo tuần là 5 đến 14.",
      "guide": "Ghép 5+14=19, 6+13=19,… có 5 cặp: 5×19=95.",
      "id": "2-2"
    },
    {
      "n": "3",
      "q": "Compute: (a) 100−99+98−97+…+4−3+2−1  (b) 200−199+198−197+…+4−3+2−1",
      "labels": [
        "a",
        "b"
      ],
      "ans": [
        [
          "50"
        ],
        [
          "100"
        ]
      ],
      "hint": "Ghép thành từng cặp liên tiếp.",
      "guide": "Mỗi cặp cho 1. Có 50 cặp ở (a), 100 cặp ở (b).",
      "id": "2-3"
    },
    {
      "n": "4",
      "q": "Compute: (a) 17+18+19+20+21+22+23  (b) 100+102+104+106+108+110  (c) 996+997+998+999+995  (d) 754+750+742+746+758",
      "labels": [
        "a",
        "b",
        "c",
        "d"
      ],
      "ans": [
        [
          "140"
        ],
        [
          "630"
        ],
        [
          "4985"
        ],
        [
          "3750"
        ]
      ],
      "hint": "Sắp xếp lại để ghép quanh một số trung tâm.",
      "guide": "(a) 7×20=140. (b) 6×105=630. (c) 995+996+997+998+999=4985. (d) ghép quanh 750 được 3750.",
      "id": "2-4"
    },
    {
      "n": "5",
      "q": "There are 10 rows of seats in a school hall. The first row has 30 seats, the second 34, the third 38 and so on. How many seats are there?",
      "ans": [
        [
          "480"
        ]
      ],
      "hint": "Hàng 10 có 66 ghế. Ghép hàng 1 với hàng 10.",
      "guide": "30+66=96; có 5 cặp như vậy, nên 5×96=480.",
      "id": "2-5"
    },
    {
      "n": "6",
      "q": "How can you put 55 balls into 10 boxes so that each box contains a different number of balls?",
      "ans": [
        [
          "1,2,3,4,5,6,7,8,9,10",
          "1 2 3 4 5 6 7 8 9 10"
        ]
      ],
      "hint": "Tổng 10 số tự nhiên đầu tiên là bao nhiêu?",
      "guide": "1+2+…+10=55, nên dùng 1,2,3,…,10 balls.",
      "id": "2-6"
    },
    {
      "n": "7",
      "q": "Compute 1+2+3+4+…+48+49+50.",
      "ans": [
        [
          "1275"
        ]
      ],
      "hint": "Ghép 1+50, 2+49,…",
      "guide": "25 cặp × 51 = 1275.",
      "id": "2-7"
    },
    {
      "n": "8",
      "q": "Compute 2+4+6+8+…+46+48+50.",
      "ans": [
        [
          "650"
        ]
      ],
      "hint": "Có 25 số chẵn; số trung bình là 26.",
      "guide": "25×26=650.",
      "id": "2-8"
    },
    {
      "n": "9",
      "q": "Compute 1+3+5+7+…+45+47+49.",
      "ans": [
        [
          "625"
        ]
      ],
      "hint": "Có 25 số lẻ đầu tiên.",
      "guide": "Tổng 25 số lẻ đầu tiên = 25² = 625; cũng có thể ghép ngoài vào trong.",
      "id": "2-9"
    },
    {
      "n": "10",
      "q": "There are 20 teams in a league. Each team must play exactly one match with every other team. How many matches are played altogether?",
      "ans": [
        [
          "190"
        ]
      ],
      "hint": "Team 1 có 19 trận mới; team 2 còn 18 trận mới; tiếp tục như vậy.",
      "guide": "19+18+…+1 = 190.",
      "id": "2-10"
    },
    {
      "n": "11",
      "q": "What is the sum of the first 30 numbers in: 1,2,3,4,5, 2,3,4,5,6, 3,4,5,6,7, 4,5,6,7,8, … ?",
      "ans": [
        [
          "165"
        ]
      ],
      "hint": "Chia thành các block 5 số.",
      "guide": "6 block đầu có tổng 15,20,25,30,35,40. Tổng =165.",
      "id": "2-11"
    },
    {
      "n": "12",
      "q": "Compute 1+2−3+4+5−6+7+8−9+…+28+29−30.",
      "ans": [
        [
          "135"
        ]
      ],
      "hint": "Nhóm 3 số một lần.",
      "guide": "Mỗi block: (3k−2)+(3k−1)−3k = 3(k−1). Cộng 0+3+…+27=135.",
      "id": "2-12"
    },
    {
      "n": "13",
      "q": "In the series 1,2,5,7,1,2,5,7,… what is the 28th number? What is the sum of the first 42 numbers?",
      "labels": [
        "28th number",
        "sum first 42"
      ],
      "ans": [
        [
          "7"
        ],
        [
          "153"
        ]
      ],
      "hint": "Chu kỳ gồm 4 số và có tổng 15.",
      "guide": "28=7×4 nên số thứ 28 là 7. 42=10×4+2 nên tổng =10×15+1+2=153.",
      "id": "2-13"
    },
    {
      "n": "14",
      "q": "A 66-seater bus picks up 1 passenger at the 1st bus stop, 2 at the 2nd, 3 at the 3rd and so on. When will all the seats be taken up?",
      "ans": [
        [
          "11",
          "11th",
          "11th stop"
        ]
      ],
      "hint": "Tìm n sao cho 1+2+…+n=66.",
      "guide": "11×12÷2=66, nên xe đầy ở trạm thứ 11.",
      "id": "2-14"
    },
    {
      "n": "15",
      "q": "Find the sum of all multiples of 4 that are smaller than or equal to 40.",
      "ans": [
        [
          "220"
        ]
      ],
      "hint": "4+8+…+40 = 4(1+2+…+10).",
      "guide": "4×55=220.",
      "id": "2-15"
    }
  ],
  "check": [
    "2-3",
    "2-5",
    "2-10",
    "2-13",
    "2-15"
  ]
};
})();
