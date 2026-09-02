(function registerChapter() {
  "use strict";

  window.BOOK_DATA = window.BOOK_DATA || {};
  window.BOOK_DATA["1"] = {
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
  "practice": [
    {
      "n": "1(a)",
      "q": "5, 6, 10, 12, 15, 18, ( ), ( )",
      "ans": [
        [
          "20"
        ],
        [
          "24"
        ]
      ],
      "hint": "Separate odd and even positions.",
      "guide": "Odd positions: 5,10,15,20. Even positions: 6,12,18,24.",
      "id": "1-1(a)",
      "labels": [
        "first blank",
        "second blank"
      ]
    },
    {
      "n": "1(b)",
      "q": "6, 9, 13, 18, 24, ( ), ( )",
      "ans": [
        [
          "31"
        ],
        [
          "39"
        ]
      ],
      "hint": "Look at the consecutive differences.",
      "guide": "Differences are +3,+4,+5,+6, then +7,+8.",
      "id": "1-1(b)",
      "labels": [
        "first blank",
        "second blank"
      ]
    },
    {
      "n": "1(c)",
      "q": "1, 3, 9, 27, ( ), ( )",
      "ans": [
        [
          "81"
        ],
        [
          "243"
        ]
      ],
      "hint": "Try one repeated multiplication.",
      "guide": "Multiply by 3 each time.",
      "id": "1-1(c)",
      "labels": [
        "first blank",
        "second blank"
      ]
    },
    {
      "n": "1(d)",
      "q": "1, 3, 6, 8, 16, 18, ( ), ( )",
      "ans": [
        [
          "36"
        ],
        [
          "38"
        ]
      ],
      "hint": "Look for two alternating operations.",
      "guide": "+2, ×2, +2, ×2, +2, ×2, +2.",
      "id": "1-1(d)",
      "labels": [
        "first blank",
        "second blank"
      ]
    },
    {
      "n": "2",
      "q": "Complete the next row of the Pascal Triangle.",
      "ans": [
        [
          "1"
        ],
        [
          "5"
        ],
        [
          "10"
        ],
        [
          "10"
        ],
        [
          "5"
        ],
        [
          "1"
        ]
      ],
      "hint": "Add two adjacent numbers in the row above.",
      "guide": "The next row after 1,4,6,4,1 is 1,5,10,10,5,1.",
      "id": "1-2",
      "labels": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6"
      ],
      "visual": "pascal"
    },
    {
      "n": "3(a)",
      "q": "Find A and B in the third 2×2 square.",
      "ans": [
        [
          "24"
        ],
        [
          "7"
        ]
      ],
      "hint": "Compare the top row and bottom row separately.",
      "guide": "Top-right = top-left ×4; bottom-right = bottom-left −5.",
      "id": "1-3(a)",
      "labels": [
        "A",
        "B"
      ],
      "visual": "squareA"
    },
    {
      "n": "3(b)",
      "q": "Find A and B in the 2×2 squares.",
      "ans": [
        [
          "7"
        ],
        [
          "16"
        ]
      ],
      "hint": "Compare the two diagonals.",
      "guide": "The diagonal sums are equal. A=7 and B=16.",
      "id": "1-3(b)",
      "labels": [
        "A",
        "B"
      ],
      "visual": "squareB"
    },
    {
      "n": "4(a)",
      "q": "7, 8, 9, ( )",
      "ans": [
        [
          "24"
        ]
      ],
      "hint": "Use the same relationship as the two completed rows.",
      "guide": "Add the first three numbers: 7+8+9=24.",
      "id": "1-4(a)"
    },
    {
      "n": "4(b)",
      "q": "9, 5, 8, ( )",
      "ans": [
        [
          "32"
        ]
      ],
      "hint": "Use subtraction first, then multiplication.",
      "guide": "(9−5)×8=32.",
      "id": "1-4(b)"
    },
    {
      "n": "5(a)",
      "q": "Circle pattern: 4, 6, 3, ( ? )",
      "ans": [
        [
          "30"
        ]
      ],
      "hint": "Compare the completed circles.",
      "guide": "(4+6)×3=30.",
      "id": "1-5(a)",
      "visual": "circleA"
    },
    {
      "n": "5(b)",
      "q": "Circle pattern: 4, ( ? ), 5, 6",
      "ans": [
        [
          "50"
        ]
      ],
      "hint": "The top-right number is made from the other three.",
      "guide": "(4+6)×5=50.",
      "id": "1-5(b)",
      "visual": "circleB"
    },
    {
      "n": "6(a)",
      "q": "2, 2, 4, 8, 14, ( ), ( )",
      "ans": [
        [
          "22"
        ],
        [
          "32"
        ]
      ],
      "hint": "Look at the differences.",
      "guide": "Differences are 0,2,4,6, then 8,10.",
      "id": "1-6(a)",
      "labels": [
        "first blank",
        "second blank"
      ]
    },
    {
      "n": "6(b)",
      "q": "2, 2, 4, 6, 10, ( ), ( )",
      "ans": [
        [
          "16"
        ],
        [
          "26"
        ]
      ],
      "hint": "Try adding the two previous terms.",
      "guide": "Each term is the sum of the previous two.",
      "id": "1-6(b)",
      "labels": [
        "first blank",
        "second blank"
      ]
    },
    {
      "n": "6(c)",
      "q": "2, 4, 12, 48, ( ), ( )",
      "ans": [
        [
          "240"
        ],
        [
          "1440"
        ]
      ],
      "hint": "The multiplication factor changes.",
      "guide": "×2, ×3, ×4, ×5, ×6.",
      "id": "1-6(c)",
      "labels": [
        "first blank",
        "second blank"
      ]
    },
    {
      "n": "6(d)",
      "q": "5, 3, 10, 4, 15, ( ), ( ), ( )",
      "ans": [
        [
          "5"
        ],
        [
          "20"
        ],
        [
          "6"
        ]
      ],
      "hint": "Separate odd and even positions.",
      "guide": "Odd: +5. Even: +1.",
      "id": "1-6(d)",
      "labels": [
        "blank 1",
        "blank 2",
        "blank 3"
      ]
    },
    {
      "n": "7",
      "q": "Complete the Number Triangle.",
      "ans": [
        [
          "8"
        ],
        [
          "12"
        ],
        [
          "10"
        ],
        [
          "20"
        ],
        [
          "12"
        ],
        [
          "18"
        ],
        [
          "30"
        ],
        [
          "36"
        ]
      ],
      "hint": "Each row contains multiples of its first number.",
      "guide": "Row 4: 4,8,12,16; Row 5: 5,10,15,20,25; Row 6: 6,12,18,24,30,36.",
      "id": "1-7",
      "labels": [
        "blank 1",
        "blank 2",
        "blank 3",
        "blank 4",
        "blank 5",
        "blank 6",
        "blank 7",
        "blank 8"
      ],
      "visual": "numtri"
    },
    {
      "n": "8",
      "q": "(a) How many numbers are there in the 6th row? (b) What is the second number from the left in the 8th row?",
      "ans": [
        [
          "6"
        ],
        [
          "30"
        ]
      ],
      "hint": "Row n has n numbers. Count how many numbers come before row 8.",
      "guide": "There are 6 numbers in row 6. The first 7 rows contain 28 numbers, so row 8 starts at 29 and its second number is 30.",
      "id": "1-8",
      "labels": [
        "(a)",
        "(b)"
      ]
    },
    {
      "n": "9(a)",
      "q": "1, 3, 6, 18, 21, ( ), ( )",
      "ans": [
        [
          "63"
        ],
        [
          "66"
        ]
      ],
      "hint": "Look for alternating operations.",
      "guide": "×3, +3, ×3, +3, ×3, +3.",
      "id": "1-9(a)",
      "labels": [
        "first blank",
        "second blank"
      ]
    },
    {
      "n": "9(b)",
      "q": "1, 3, 9, ( ), ( ), 243",
      "ans": [
        [
          "27"
        ],
        [
          "81"
        ]
      ],
      "hint": "Use a fixed multiplication.",
      "guide": "×3 each step.",
      "id": "1-9(b)",
      "labels": [
        "first blank",
        "second blank"
      ]
    },
    {
      "n": "9(c)",
      "q": "1, 5, 17, 53, ( ), 485",
      "ans": [
        [
          "161"
        ]
      ],
      "hint": "Try ×3 followed by the same adjustment.",
      "guide": "×3+2 gives 161, then 485.",
      "id": "1-9(c)"
    },
    {
      "n": "9(d)",
      "q": "2, 7, 27, 107, ( )",
      "ans": [
        [
          "427"
        ]
      ],
      "hint": "Try ×4 and adjust by 1.",
      "guide": "×4−1 gives 427.",
      "id": "1-9(d)"
    },
    {
      "n": "10",
      "q": "1, 2, 6, 15, 31, 56, ( ), ( )",
      "ans": [
        [
          "92"
        ],
        [
          "141"
        ]
      ],
      "hint": "Inspect the differences.",
      "guide": "Differences are 1²,2²,3²,4²,5²; then +6² and +7².",
      "id": "1-10",
      "labels": [
        "first blank",
        "second blank"
      ]
    },
    {
      "n": "11",
      "q": "54321 × 9 = ( ) ; 654321 × 9 = ( )",
      "ans": [
        [
          "488889"
        ],
        [
          "5888889"
        ]
      ],
      "hint": "Continue the pattern in 21×9, 321×9, 4321×9.",
      "guide": "The products are 488889 and 5888889.",
      "id": "1-11",
      "labels": [
        "54321 × 9",
        "654321 × 9"
      ]
    },
    {
      "n": "12",
      "q": "Find the missing number in the third triangle.",
      "ans": [
        [
          "7"
        ]
      ],
      "hint": "Use the same relationship among top, bottom-left, bottom-right and centre.",
      "guide": "top × bottom-left − bottom-right = centre, so 6×7−24=18.",
      "id": "1-12",
      "visual": "triangle"
    },
    {
      "n": "13",
      "q": "What is the sum of the numbers in the 20th term? (1,3,6), (2,6,9), (3,9,12), (4,12,15), …",
      "ans": [
        [
          "143"
        ]
      ],
      "hint": "Express the three numbers in term n.",
      "guide": "Term n=(n,3n,3n+3); term 20=(20,60,63), sum 143.",
      "id": "1-13"
    },
    {
      "n": "14",
      "q": "(a) In which row is the number 30? (b) In which column is the number 41?",
      "ans": [
        [
          "12"
        ],
        [
          "A"
        ]
      ],
      "hint": "The columns repeat in a cycle A → C → E → D → B.",
      "guide": "30 is in Row 12; 41 begins a new cycle in column A.",
      "id": "1-14",
      "labels": [
        "(a)",
        "(b)"
      ],
      "visual": "table"
    }
  ],
  "check": [
    "1-1(d)",
    "1-5(b)",
    "1-8",
    "1-10",
    "1-14"
  ]
};
})();
