(function registerChapter() {
  "use strict";

  window.BOOK_DATA = window.BOOK_DATA || {};
  window.BOOK_DATA["8"] = {
  "title": "Tricks in Multiplication",
  "emoji": "✖️",
  "pages": "66–75",
  "theory": [
    [
      "Useful products",
      "2×5=10, 4×25=100, 8×125=1000, and 4×125=500 are used to form round products."
    ],
    [
      "Distributive property",
      "a×(b+c)=a×b+a×c allows convenient regrouping."
    ],
    [
      "Commutative property",
      "a×b=b×a lets you rearrange factors."
    ],
    [
      "Near round numbers",
      "×99 and ×999 can be treated as ×(100−1) or ×(1000−1)."
    ],
    [
      "×11 and ×101 patterns",
      "The chapter demonstrates quick patterns for multiplying two-digit numbers by 11 and 101."
    ]
  ],
  "examples": [
    {
      "q": "25×16×4; 12×4×25; 24×25; 28×25",
      "steps": [
        "Rearrange factors so 25×4=100.",
        "Multiply the remaining factor by the round product."
      ],
      "a": "1600; 1200; 600; 700"
    },
    {
      "q": "16×125; 24×125; 8×125×4×25; 32×125×25",
      "steps": [
        "Use 8×125=1000.",
        "Split or rearrange the other factor to create groups of 8 and 4."
      ],
      "a": "2000; 3000; 100000; 100000"
    },
    {
      "q": "12×4+8×4 and similar expressions",
      "steps": [
        "Factor the common multiplier.",
        "Add inside the bracket first."
      ],
      "a": "80 and related results"
    },
    {
      "q": "55×99; 65×999; ×11; ×101",
      "steps": [
        "Use 100−1 or 1000−1 for 99/999.",
        "Use the repeated-digit patterns demonstrated for 11 and 101."
      ],
      "a": "5445; 64935; pattern-based products"
    }
  ],
  "practice": [
    {
      "id": "8-1",
      "n": "1",
      "q": "Compute the following.",
      "ans": [
        [
          "500"
        ],
        [
          "3200"
        ],
        [
          "1600"
        ],
        [
          "700"
        ]
      ],
      "hint": "Rearrange to make 25×4=100.",
      "guide": "Use commutativity to place 25 next to 4.",
      "labels": [
        "(a) 4×5×25",
        "(b) 25×32×4",
        "(c) 16×4×25",
        "(d) 25×7×4"
      ]
    },
    {
      "id": "8-2",
      "n": "2",
      "q": "Compute the following.",
      "ans": [
        [
          "600"
        ],
        [
          "700"
        ],
        [
          "900"
        ],
        [
          "400"
        ]
      ],
      "hint": "Turn ×25 into ×100÷4.",
      "guide": "Because 4×25=100, group each multiple of 4 with 25.",
      "labels": [
        "(a) 24×25",
        "(b) 28×25",
        "(c) 36×25",
        "(d) 16×25"
      ]
    },
    {
      "id": "8-3",
      "n": "3",
      "q": "Compute the following.",
      "ans": [
        [
          "10000"
        ],
        [
          "1500"
        ],
        [
          "100000"
        ],
        [
          "10000"
        ]
      ],
      "hint": "Make 8×125=1000 and 4×25=100.",
      "guide": "Rearrange factors to create the round products from the chapter notes.",
      "labels": [
        "(a) 2×125×8×5",
        "(b) 15×25×4",
        "(c) 25×32×125",
        "(d) 125×16×5"
      ]
    },
    {
      "id": "8-4",
      "n": "4",
      "q": "Compute the following.",
      "ans": [
        [
          "6000"
        ],
        [
          "1600"
        ],
        [
          "8000"
        ],
        [
          "300"
        ]
      ],
      "hint": "Split the first factor into multiples of 8 or 4.",
      "guide": "48×125=6×(8×125); 64×25=16×100; and so on.",
      "labels": [
        "(a) 48×125",
        "(b) 64×25",
        "(c) 64×125",
        "(d) 25×12"
      ]
    },
    {
      "id": "8-5",
      "n": "5",
      "q": "Compute the following.",
      "ans": [
        [
          "400"
        ],
        [
          "450"
        ],
        [
          "960"
        ],
        [
          "1400"
        ]
      ],
      "hint": "Factor the common multiplier.",
      "guide": "Use a×c+b×c=(a+b)×c.",
      "labels": [
        "(a) 80×4+20×4",
        "(b) 50×5+40×5",
        "(c) 60×12+20×12",
        "(d) 70×14+30×14"
      ]
    },
    {
      "id": "8-6",
      "n": "6",
      "q": "Compute the following.",
      "ans": [
        [
          "1100"
        ],
        [
          "11000"
        ],
        [
          "10125"
        ],
        [
          "1025"
        ]
      ],
      "hint": "Use a nearby convenient multiple, then adjust.",
      "guide": "For example 81×125=(80+1)×125.",
      "labels": [
        "(a) 44×25",
        "(b) 88×125",
        "(c) 81×125",
        "(d) 41×25"
      ]
    },
    {
      "id": "8-7",
      "n": "7",
      "q": "Compute the following.",
      "ans": [
        [
          "3960"
        ],
        [
          "49950"
        ],
        [
          "4455"
        ],
        [
          "54945"
        ]
      ],
      "hint": "Replace 99 with 100−1 and 999 with 1000−1.",
      "guide": "Multiply by the round number, then subtract one copy of the original factor.",
      "labels": [
        "(a) 40×99",
        "(b) 50×999",
        "(c) 45×99",
        "(d) 55×999"
      ]
    },
    {
      "id": "8-8",
      "n": "8",
      "q": "Compute the following.",
      "ans": [
        [
          "693"
        ],
        [
          "297"
        ],
        [
          "352"
        ],
        [
          "506"
        ]
      ],
      "hint": "Use the ×11 pattern shown in Example 6.",
      "guide": "For a two-digit number ab, the middle digit comes from a+b when no carrying is needed; ordinary multiplication also confirms it.",
      "labels": [
        "(a) 63×11",
        "(b) 27×11",
        "(c) 32×11",
        "(d) 46×11"
      ]
    },
    {
      "id": "8-9",
      "n": "9",
      "q": "Compute the following.",
      "ans": [
        [
          "3333"
        ],
        [
          "4646"
        ],
        [
          "8585"
        ],
        [
          "9393"
        ]
      ],
      "hint": "The chapter notes that multiplying a two-digit number by 101 repeats the two-digit number.",
      "guide": "ab×101 gives abab.",
      "labels": [
        "(a) 33×101",
        "(b) 46×101",
        "(c) 85×101",
        "(d) 93×101"
      ]
    },
    {
      "id": "8-10",
      "n": "10",
      "q": "Compute the following.",
      "ans": [
        [
          "1000"
        ],
        [
          "100000"
        ],
        [
          "1050"
        ],
        [
          "10250"
        ]
      ],
      "hint": "Create 25×4=100 and 8×125=1000 where possible.",
      "guide": "Rearrange/split factors to create the chapter’s round products.",
      "labels": [
        "(a) 2×25×4×5",
        "(b) 32×25×125",
        "(c) 42×25",
        "(d) 82×125"
      ]
    },
    {
      "id": "8-11",
      "n": "11",
      "q": "Compute the following.",
      "ans": [
        [
          "700"
        ],
        [
          "600"
        ],
        [
          "5940"
        ],
        [
          "69930"
        ]
      ],
      "hint": "Factor common multipliers or use near-round multiplication.",
      "guide": "(53+47)×7=700; (27+73)×6=600; then use 100−1 / 1000−1.",
      "labels": [
        "(a) 53×7+47×7",
        "(b) 27×6+73×6",
        "(c) 60×99",
        "(d) 70×999"
      ]
    },
    {
      "id": "8-12",
      "n": "12",
      "q": "Compute the following.",
      "ans": [
        [
          "209"
        ],
        [
          "264"
        ],
        [
          "7676"
        ],
        [
          "5353"
        ]
      ],
      "hint": "Apply the ×11 and ×101 patterns from the examples.",
      "guide": "Compute using the patterns demonstrated in the chapter.",
      "labels": [
        "(a) 19×11",
        "(b) 24×11",
        "(c) 76×101",
        "(d) 53×101"
      ]
    }
  ],
  "check": [
    "8-1",
    "8-4",
    "8-7",
    "8-9",
    "8-11"
  ]
};
})();
