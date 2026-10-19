(function registerPilotData() {
  "use strict";
  window.PILOT_CHAPTERS = {
  "1": {
    "id": 1,
    "title": "Looking for a Pattern",
    "emoji": "🔎",
    "pages": "1–9",
    "theory": [
      [
        "Repeated operation",
        "Check whether the same operation is repeated, such as ×2 or +3."
      ],
      [
        "Look at differences",
        "If the operation is not fixed, compare the differences between consecutive terms."
      ],
      [
        "Alternating patterns",
        "Separate odd-position and even-position terms when two patterns are interleaved."
      ],
      [
        "Use earlier terms",
        "Some patterns use previous terms, for example adding the two preceding terms."
      ],
      [
        "Relations in diagrams",
        "For number squares, circles and triangles, compare corresponding positions and test one consistent relationship."
      ],
      [
        "Odd-one-out pattern",
        "A task may ask which sequence follows a different rule from the others."
      ]
    ],
    "examples": [
      {"q":{"en":"1(a) Find the two missing numbers: 1, 2, 4, 8, 16, __, __, …","vi":"1(a) Tìm hai số còn thiếu: 1, 2, 4, 8, 16, __, __, …"},"steps":[{"en":"Each term is twice the preceding term.","vi":"Mỗi số gấp 2 lần số đứng ngay trước."},{"en":"16 × 2 = 32; 32 × 2 = 64.","vi":"16 × 2 = 32; 32 × 2 = 64."}],"a":{"en":"32, 64","vi":"32, 64"}},
      {"q":{"en":"1(b) Find the two missing numbers: 1, 4, 9, 16, __, __, …","vi":"1(b) Tìm hai số còn thiếu: 1, 4, 9, 16, __, __, …"},"steps":[{"en":"These are consecutive square numbers: 1², 2², 3², 4², …","vi":"Đây là các số chính phương liên tiếp: 1², 2², 3², 4², …"},{"en":"5² = 25 and 6² = 36.","vi":"5² = 25 và 6² = 36."}],"a":{"en":"25, 36","vi":"25, 36"}},
      {"q":{"en":"1(c) Find the two missing numbers: 2, 6, 12, 20, 30, __, __, …","vi":"1(c) Tìm hai số còn thiếu: 2, 6, 12, 20, 30, __, __, …"},"steps":[{"en":"The increases are +4, +6, +8, +10, then +12 and +14.","vi":"Các số tăng lần lượt +4, +6, +8, +10, rồi +12 và +14."}],"a":{"en":"42, 56","vi":"42, 56"}},
      {"q":{"en":"1(d) Find the two missing numbers: 1, 4, 7, 10, 13, __, __, …","vi":"1(d) Tìm hai số còn thiếu: 1, 4, 7, 10, 13, __, __, …"},"steps":[{"en":"Add 3 each time.","vi":"Mỗi lần cộng thêm 3."}],"a":{"en":"16, 19","vi":"16, 19"}},
      {"q":{"en":"2(a) Find the two missing numbers: 24, 3, 21, 6, 18, __, __, …","vi":"2(a) Tìm hai số còn thiếu: 24, 3, 21, 6, 18, __, __, …"},"steps":[{"en":"Odd positions decrease by 3: 24, 21, 18, 15.","vi":"Các vị trí lẻ giảm 3: 24, 21, 18, 15."},{"en":"Even positions increase by 3: 3, 6, 9.","vi":"Các vị trí chẵn tăng 3: 3, 6, 9."}],"a":{"en":"9, 15","vi":"9, 15"},"visual":"example-pattern-2a"},
      {"q":{"en":"2(b) Find the two missing numbers: 8, 1, 10, 2, 12, __, __, …","vi":"2(b) Tìm hai số còn thiếu: 8, 1, 10, 2, 12, __, __, …"},"steps":[{"en":"Odd positions increase by 2; even positions increase by 1.","vi":"Các vị trí lẻ tăng 2; các vị trí chẵn tăng 1."}],"a":{"en":"3, 14","vi":"3, 14"},"visual":"example-pattern-2b"},
      {"q":{"en":"2(c) Find the two missing numbers: 28, 2, 24, 4, 20, __, __, …","vi":"2(c) Tìm hai số còn thiếu: 28, 2, 24, 4, 20, __, __, …"},"steps":[{"en":"Odd positions decrease by 4; even positions increase by 2.","vi":"Các vị trí lẻ giảm 4; các vị trí chẵn tăng 2."}],"a":{"en":"6, 16","vi":"6, 16"},"visual":"example-pattern-2c"},
      {"q":{"en":"2(d) Find the two missing numbers: 1, 8, 3, 10, 5, 12, __, __, …","vi":"2(d) Tìm hai số còn thiếu: 1, 8, 3, 10, 5, 12, __, __, …"},"steps":[{"en":"Both interleaved sequences increase by 2.","vi":"Cả hai dãy xen kẽ đều tăng 2."}],"a":{"en":"7, 14","vi":"7, 14"},"visual":"example-pattern-2d"},
      {"q":{"en":"3(a) Find A and B in the third circle using the same rule as the first two circles.","vi":"3(a) Tìm A và B trong hình tròn thứ ba theo cùng quy luật của hai hình đầu."},"steps":[{"en":"The bottom number is twice the upper-left number.","vi":"Số phía dưới gấp 2 lần số phía trên bên trái."},{"en":"The upper-right number is 2 more than the bottom number.","vi":"Số phía trên bên phải lớn hơn số phía dưới 2 đơn vị."}],"a":{"en":"A = 20, B = 42","vi":"A = 20, B = 42"},"visual":"example-circle-3a"},
      {"q":{"en":"3(b) Find A and B in the third circle using the same rule as the first two circles.","vi":"3(b) Tìm A và B trong hình tròn thứ ba theo cùng quy luật của hai hình đầu."},"steps":[{"en":"In each circle, subtract the same amount moving from upper-left to bottom, then to upper-right.","vi":"Trong mỗi hình tròn, trừ cùng một số khi đi từ ô trên trái xuống ô dưới rồi sang ô trên phải."},{"en":"The amounts subtracted are 3, 4, then 5.","vi":"Các số lần lượt bị trừ là 3, 4 rồi 5."}],"a":{"en":"A = 15, B = 5","vi":"A = 15, B = 5"},"visual":"example-circle-3b"},
      {"q":{"en":"4 Which pattern is not the same as the rest? (a) 2, 2, 4, 6, 10, 16, 26, … (b) 1, 1, 2, 3, 5, 8, 13, … (c) 1, 4, 7, 10, 13, 16, 19, …","vi":"4 Dãy nào không cùng quy luật với các dãy còn lại? (a) 2, 2, 4, 6, 10, 16, 26, … (b) 1, 1, 2, 3, 5, 8, 13, … (c) 1, 4, 7, 10, 13, 16, 19, …"},"steps":[{"en":"In (a) and (b), each term is the sum of the two preceding terms.","vi":"Ở (a) và (b), mỗi số bằng tổng hai số đứng trước."},{"en":"In (c), each term is 3 more than the preceding term.","vi":"Ở (c), mỗi số lớn hơn số đứng trước 3 đơn vị."}],"a":{"en":"Pattern (c)","vi":"Dãy (c)"}}
    ],
    "check": [
      "1-1(d)",
      "1-5(b)",
      "1-7",
      "1-10",
      "1-13"
    ]
  },
  "2": {
    "id": 2,
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
    "check": [
      "2-2",
      "2-5",
      "2-10",
      "2-13",
      "2-15"
    ]
  },
  "3": {
    "id": 3,
    "title": "Using Model",
    "emoji": "🟦",
    "pages": "19–29",
    "theory": [
      [
        "When to use a model",
        "The chapter states that models are useful when the sum or difference is known, or when one quantity is a multiple of another."
      ],
      [
        "Equal units",
        "Represent equal quantities with equal-length bars. Find the value of one unit before finding the requested quantity."
      ],
      [
        "Difference strip",
        "When one quantity is “more than” another, mark the extra part separately."
      ],
      [
        "Transfer carefully",
        "When an amount moves from one person/group to another, both quantities change; draw the before/after relationship."
      ]
    ],
    "examples": [
      {
        "q": "A school choir has 72 members. There are 6 more girls than boys. How many girls?",
        "steps": [
          "Remove the extra 6 from the total: 72−6=66.",
          "The remaining 66 is 2 equal units, so 1 unit=33.",
          "Girls=33+6."
        ],
        "a": "39 girls"
      },
      {
        "q": "Andrew and Kevin had $350 altogether. Andrew spent $60 and Kevin spent $30; then they had the same amount. How much did each have at first?",
        "steps": [
          "After spending, total remaining =350−60−30=260.",
          "They then had equal amounts: 260÷2=130 each.",
          "Add back what each spent."
        ],
        "a": "Andrew $190; Kevin $160"
      },
      {
        "q": "Classes 3A and 3B have 200 books altogether. 3A has 4 times as many books as 3B.",
        "steps": [
          "Use 5 equal units for the total.",
          "1 unit=200÷5=40.",
          "3A=4 units."
        ],
        "a": "3A 160; 3B 40"
      },
      {
        "q": "Shawn has $50 and Eric has $110. How much must Shawn give Eric so Eric has 2 times Shawn’s amount?",
        "steps": [
          "Together they have $160.",
          "In the chapter solution, “2 times more” is represented as Eric having 3 equal units while Shawn has 1 unit, so 4 units=$160.",
          "1 unit=$40; Shawn has $50, so he gives $10."
        ],
        "a": "$10"
      }
    ],
    "check": [
      "3-1",
      "3-6",
      "3-11",
      "3-14",
      "3-17"
    ]
  }
};
})();
