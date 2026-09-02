(function registerChapter() {
  "use strict";

  window.BOOK_DATA = window.BOOK_DATA || {};
  window.BOOK_DATA["6"] = {
  "title": "Counting",
  "emoji": "🔺",
  "pages": "51–57",
  "theory": [
    [
      "Count systematically",
      "The chapter warns that counting must be done systematically and recorded in detail to avoid missing or repeating items."
    ],
    [
      "Count by size",
      "For squares, triangles and rectangles, separate 1-unit shapes, larger combined shapes, and the largest whole shape."
    ],
    [
      "Count line segments",
      "With marked points on one straight line, list all possible segments systematically."
    ],
    [
      "Record subtotals",
      "Write a subtotal for each size/type and add them only after the categories are complete."
    ]
  ],
  "examples": [
    {
      "q": "How many lines of different lengths are formed by five marked points A–E?",
      "steps": [
        "List segments starting at A, then B, then C, then D.",
        "Add 4+3+2+1."
      ],
      "a": "10"
    },
    {
      "q": "How many squares are in 2×2 and 2×3 grids?",
      "steps": [
        "Count 1-unit squares first.",
        "Then count larger 2×2 squares."
      ],
      "a": "5 and 14"
    },
    {
      "q": "How many triangles are in the shown fan and triangular grid?",
      "steps": [
        "Count smallest triangles.",
        "Then count triangles made from 2, 3, … small triangles."
      ],
      "a": "10 and 13"
    },
    {
      "q": "How many rectangles are in the sample grid?",
      "steps": [
        "Count rectangles by width/size.",
        "Record each subtotal before adding."
      ],
      "a": "36"
    }
  ],
  "practice": [
    {
      "id": "6-1",
      "n": "1",
      "q": "How many squares are there altogether?",
      "ans": [
        [
          "6"
        ]
      ],
      "hint": "Count squares by size, not just by visible compartments.",
      "guide": "There are 2 small squares, 2 medium squares and 2 large squares: 6 altogether.",
      "visual": "counting-nested-squares"
    },
    {
      "id": "6-2",
      "n": "2",
      "q": "How many lines of different lengths are there altogether from points A, B, C, D and E?",
      "ans": [
        [
          "10"
        ]
      ],
      "hint": "Start at A and list every endpoint to its right, then move to B, C and D.",
      "guide": "4+3+2+1=10 line segments.",
      "visual": "counting-five-points"
    },
    {
      "id": "6-3",
      "n": "3",
      "q": "How many triangles are there altogether in each figure?",
      "ans": [
        [
          "5"
        ],
        [
          "27"
        ]
      ],
      "hint": "Count triangles by size in each triangular grid.",
      "guide": "(a) 3 small upward +1 inverted +1 whole =5. (b) Counting systematically by size gives 27.",
      "labels": [
        "(a)",
        "(b)"
      ],
      "visual": "counting-triangle-grids"
    },
    {
      "id": "6-4",
      "n": "4",
      "q": "How many triangles are there altogether?",
      "ans": [
        [
          "24"
        ]
      ],
      "hint": "Use the centre vertical line and count left-half, right-half and full-width triangles separately.",
      "guide": "10 triangles use the left side, 10 use the right side, and 4 span the whole base: 24.",
      "visual": "counting-triangle-fan-24"
    },
    {
      "id": "6-5",
      "n": "5",
      "q": "How many lines of different lengths are there altogether?",
      "ans": [
        [
          "15"
        ],
        [
          "21"
        ]
      ],
      "hint": "For n marked points, list segments by starting point: (n−1)+(n−2)+…+1.",
      "guide": "(a) 5+4+3+2+1=15. (b) 6+5+4+3+2+1=21.",
      "labels": [
        "(a)",
        "(b)"
      ],
      "visual": "counting-six-seven-points"
    },
    {
      "id": "6-6",
      "n": "6",
      "q": "How many squares are there altogether in the cross-shaped figure?",
      "ans": [
        [
          "18"
        ]
      ],
      "hint": "Count the 13 unit squares, then look for complete 2-by-2 and 3-by-3 squares.",
      "guide": "There are 13 unit squares, four 2-by-2 squares and one central 3-by-3 square: 13+4+1=18.",
      "visual": "counting-cross-squares"
    },
    {
      "id": "6-7",
      "n": "7",
      "q": "How many squares are there altogether in the square-with-diagonals figure?",
      "ans": [
        [
          "10"
        ]
      ],
      "hint": "Count axis-aligned squares first, then the tilted squares.",
      "guide": "There are 5 axis-aligned squares and 5 tilted squares, giving 10.",
      "visual": "counting-diagonal-squares"
    },
    {
      "id": "6-8",
      "n": "8",
      "q": "How many rectangles are there altogether in the stepped figure?",
      "ans": [
        [
          "50"
        ]
      ],
      "hint": "Count rectangles by height: bottom row, two-row spans, three-row spans, and rectangles starting above the bottom.",
      "guide": "Systematic counting by each pair of horizontal levels gives 50 rectangles.",
      "visual": "counting-stepped-rectangles"
    },
    {
      "id": "6-9",
      "n": "9",
      "q": "How many triangles are there altogether in each figure?",
      "ans": [
        [
          "20"
        ],
        [
          "16"
        ]
      ],
      "hint": "For (a), count triangles with bases on each horizontal level. For (b), list triangles by the three main cevians and the outer sides.",
      "guide": "(a) 10 triangles use the bottom base and 10 use the middle horizontal: 20. (b) Systematic listing gives 16.",
      "labels": [
        "(a)",
        "(b)"
      ],
      "visual": "counting-triangle-pairs"
    },
    {
      "id": "6-10",
      "n": "10",
      "q": "How many rectangles are there altogether in the strip of 7 equal boxes?",
      "ans": [
        [
          "28"
        ]
      ],
      "hint": "A rectangle can span 1,2,…,7 boxes.",
      "guide": "7+6+5+4+3+2+1=28.",
      "visual": "counting-seven-boxes"
    }
  ],
  "check": [
    "6-1",
    "6-3",
    "6-4",
    "6-8",
    "6-9"
  ]
};
})();
