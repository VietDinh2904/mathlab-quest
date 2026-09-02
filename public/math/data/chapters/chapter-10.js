(function registerChapter() {
  "use strict";

  window.BOOK_DATA = window.BOOK_DATA || {};
  window.BOOK_DATA["10"] = {
  "title": "Working Backwards",
  "emoji": "↩️",
  "pages": "88–96",
  "theory": [
    [
      "Reverse each operation",
      "When working backwards, + becomes −, − becomes +, × becomes ÷, and ÷ becomes ×."
    ],
    [
      "Start from the known end result",
      "This chapter focuses on questions where the starting value is unknown but the end result is given."
    ],
    [
      "Undo in reverse order",
      "The last forward operation must be undone first, then continue step by step toward the start."
    ],
    [
      "Use a chain or diagram",
      "The examples draw a sequence of boxes/arrows so each reverse step is visible."
    ]
  ],
  "examples": [
    {
      "q": "Work backwards through operation chains to find A and B.",
      "steps": [
        "Start at the final box.",
        "Reverse the last operation, then the one before it, until you reach the unknown."
      ],
      "a": "Use inverse operations in reverse order."
    },
    {
      "q": "20 sparrows move between two lamp posts and finish with equal numbers.",
      "steps": [
        "Begin with the equal final numbers.",
        "Reverse the second movement, then the first movement."
      ],
      "a": "12 and 8 at first"
    },
    {
      "q": "Heather spends $4, then half the remaining money, then $4 and finishes with $2.",
      "steps": [
        "Start with $2 and add back the final $4.",
        "Undo “half remaining” by doubling.",
        "Add back the first $4."
      ],
      "a": "$16"
    },
    {
      "q": "Tara moves between floors and ends on the 9th floor.",
      "steps": [
        "Start at floor 9.",
        "Reverse each up/down move in the opposite direction."
      ],
      "a": "8th floor"
    }
  ],
  "practice": [
    {
      "id": "10-1",
      "n": "1",
      "q": "Find the value for each chain by working backwards. Forward operations are: (a) ÷3, +4, ×5 → 30; (b) ÷2, −2, +6 → 12; (c) ÷3, +2, ×7 → 35; (d) ×7, −8, ÷3 → 9.",
      "ans": [
        [
          "6"
        ],
        [
          "16"
        ],
        [
          "9"
        ],
        [
          "5"
        ]
      ],
      "hint": "Begin at the final number and undo the arrows from right to left.",
      "guide": "(a) 30÷5=6, 6−4=2, 2×3=6. (b) 12−6=6, +2=8, ×2=16. (c) 35÷7=5, −2=3, ×3=9. (d) 9×3=27, +8=35, ÷7=5.",
      "labels": [
        "(a)",
        "(b)",
        "(c)",
        "(d)"
      ],
      "visual": "reverse1"
    },
    {
      "id": "10-2",
      "n": "2",
      "q": "Find the value for each chain. Forward operations are: (a) +10, ×10, −10, ÷10 → 10; (b) ×3, +8, −3, ÷5 → 4; (c) −2, ×9, +3, ÷4 → 12; (d) ÷2, ÷2, ÷2, ÷2 → 1.",
      "ans": [
        [
          "1"
        ],
        [
          "5"
        ],
        [
          "7"
        ],
        [
          "16"
        ]
      ],
      "hint": "Undo the last operation first.",
      "guide": "Reverse each chain: (a) ×10,+10,÷10,−10; (b) ×5,+3,−8,÷3; (c) ×4,−3,÷9,+2; (d) ×2 four times.",
      "labels": [
        "(a)",
        "(b)",
        "(c)",
        "(d)"
      ],
      "visual": "reverse2"
    },
    {
      "id": "10-3",
      "n": "3",
      "q": "A number is first subtracted by 8. The difference is then multiplied by 8. The product is divided by 8. The final result is 8. What is the number?",
      "ans": [
        [
          "16"
        ]
      ],
      "hint": "Reverse ÷8, then ×8, then −8.",
      "guide": "8×8=64; 64÷8=8; 8+8=16."
    },
    {
      "id": "10-4",
      "n": "4",
      "q": "A ribbon is cut in half. Each half is then cut in half again. The smallest piece measures 30 cm. How long is the ribbon at first?",
      "ans": [
        [
          "120"
        ]
      ],
      "hint": "Undo the cuts by doubling twice.",
      "guide": "30×2×2=120 cm."
    },
    {
      "id": "10-5",
      "n": "5",
      "q": "Matthew spent $5 on a storybook. He spent half of his remaining money on a toy. He was left with $3 after buying some marbles that cost $4. How much did he have at first?",
      "ans": [
        [
          "19"
        ]
      ],
      "hint": "Start from the final $3 and add back the marbles first.",
      "guide": "3+4=7; before spending half he had 14; add back the storybook $5 → $19."
    },
    {
      "id": "10-6",
      "n": "6",
      "q": "Shane read 10 pages more than half of a storybook on the first day. He read 10 pages more than half of the remaining pages on the second day. He had 20 pages more to go. How many pages did the storybook have?",
      "ans": [
        [
          "140"
        ]
      ],
      "hint": "Work backwards from the 20 pages remaining, undoing “half plus 10” twice.",
      "guide": "Before day 2 there were 60 pages; before day 1 there were 140 pages."
    },
    {
      "id": "10-7",
      "n": "7",
      "q": "Darrell spent half of his money on a dictionary. He spent half of the remaining money on storybooks. After spending $6 on a fast food meal, he was left with $10. How much did Darrell have at first?",
      "ans": [
        [
          "64"
        ]
      ],
      "hint": "Start with $10, add back $6, then double twice.",
      "guide": "10+6=16; 16×2=32; 32×2=64."
    },
    {
      "id": "10-8",
      "n": "8",
      "q": "There are 420 books on the first and second shelves altogether. 60 books from the first shelf are transferred to the second. 80 books are rearranged from the second shelf to the first. The first shelf then has twice as many as the second. How many were on each shelf at first?",
      "ans": [
        [
          "260"
        ],
        [
          "160"
        ]
      ],
      "hint": "Find the final 2:1 split first, then reverse the transfers.",
      "guide": "Final shelves are 280 and 140. Reverse 80 second→first, then 60 first→second: initial 260 and 160.",
      "labels": [
        "First shelf",
        "Second shelf"
      ]
    },
    {
      "id": "10-9",
      "n": "9",
      "q": "63 sparrows were perching on two trees altogether. 16 flew from the first tree to the second; 24 then flew from the second to the first. The first tree then had twice as many as the second. How many were on each tree at first?",
      "ans": [
        [
          "34"
        ],
        [
          "29"
        ]
      ],
      "hint": "Find the final 2:1 split, then undo the two movements in reverse order.",
      "guide": "Final 42 and 21. Undo +24/−24, then −16/+16, giving 34 and 29 initially.",
      "labels": [
        "First tree",
        "Second tree"
      ]
    },
    {
      "id": "10-10",
      "n": "10",
      "q": "Jennifer and Tamara have $120 altogether. Jennifer gives $36 to Tamara and Tamara gives $48 to Jennifer. Jennifer then has 2 times Tamara’s amount. How much did each girl have at first?",
      "ans": [
        [
          "68"
        ],
        [
          "52"
        ]
      ],
      "hint": "Find the final 2:1 split, then reverse the transfers.",
      "guide": "Final 80 and 40. Reverse the net transfer: initial Jennifer 68, Tamara 52.",
      "labels": [
        "Jennifer",
        "Tamara"
      ]
    },
    {
      "id": "10-11",
      "n": "11",
      "q": "There were 210 cars in car parks A and B. 36 cars went from A to B; 45 cars went from B to A. The number in A then became twice the number in B plus 6. How many cars were in each car park at first?",
      "ans": [
        [
          "133"
        ],
        [
          "77"
        ]
      ],
      "hint": "Find the final values using the total and relation, then reverse the car movements.",
      "guide": "Final A=142, B=68. Net movement gave A +9, B −9, so initial A=133, B=77.",
      "labels": [
        "Car park A",
        "Car park B"
      ]
    },
    {
      "id": "10-12",
      "n": "12",
      "q": "Mark had a bag of sweets. He gave 4 sweets to Alison, 8 sweets to his cousin and ate half of the remaining sweets. He was then left with 10 sweets. How many sweets did Mark have at first?",
      "ans": [
        [
          "32"
        ]
      ],
      "hint": "Undo “ate half” by doubling, then add back the sweets given away.",
      "guide": "10×2=20; 20+8+4=32."
    },
    {
      "id": "10-13",
      "n": "13",
      "q": "Ashley had a basket of apples. She took one apple in the morning. Her family took half of the remaining apples after dinner. She took another apple the next morning. Her family took half of the remaining apples after dinner. There were 2 apples left. How many apples were there at first?",
      "ans": [
        [
          "11"
        ]
      ],
      "hint": "Start from 2 and undo: double, add 1, double, add 1.",
      "guide": "2×2=4; +1=5; ×2=10; +1=11."
    },
    {
      "id": "10-14",
      "n": "14",
      "q": "Sophia went up 4 floors, then down 6 floors, then up 5 floors and finally reached the 10th floor. On which floor was Sophia’s place?",
      "ans": [
        [
          "7"
        ]
      ],
      "hint": "Reverse the movements from floor 10.",
      "guide": "10−5=5; +6=11; −4=7."
    }
  ],
  "check": [
    "10-1",
    "10-3",
    "10-6",
    "10-9",
    "10-14"
  ]
};
})();
