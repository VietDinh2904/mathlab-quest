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
      {
        "q": "1, 2, 4, 8, 16, …; 1, 4, 9, 16, 25, …; 2, 6, 12, 20, 30, …",
        "steps": [
          "Test a repeated operation first.",
          "If that fails, inspect the differences or familiar number families."
        ],
        "a": "32, 64; 36; 42, 56"
      },
      {
        "q": "24, 3, 21, 6, 18, … and similar interleaved sequences.",
        "steps": [
          "Read positions 1,3,5,… as one sequence.",
          "Read positions 2,4,6,… as another sequence."
        ],
        "a": "Use two interleaved rules."
      },
      {
        "q": "Number diagrams with A and B.",
        "steps": [
          "Compare the same positions across the completed diagrams.",
          "Apply the same relationship to the diagram with missing values."
        ],
        "a": "Use one consistent positional relationship."
      },
      {
        "q": "Which pattern is not the same as the rest?",
        "steps": [
          "Check whether each term comes from the two preceding terms.",
          "Compare with a simple constant-difference sequence."
        ],
        "a": "The +3 sequence is different."
      }
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
