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
    {"q":{"en":"1(a) A is multiplied by 2, then 2 is subtracted, then 4 is added; the result is 16. Find A.","vi":"1(a) Lấy A nhân 2, trừ 2 rồi cộng 4 thì được 16. Tìm A."},"steps":[{"en":"Work backwards: 16−4=12, 12+2=14, 14÷2=7.","vi":"Đi ngược: 16−4=12, 12+2=14, 14÷2=7."}],"a":{"en":"A = 7","vi":"A = 7"}},
    {"q":{"en":"1(b) B is divided by 3, then 5 is added, then 5 is subtracted; the result is 15. Find B.","vi":"1(b) Lấy B chia 3, cộng 5 rồi trừ 5 thì được 15. Tìm B."},"steps":[{"en":"Work backwards: 15+5=20, 20−5=15, 15×3=45.","vi":"Đi ngược: 15+5=20, 20−5=15, 15×3=45."}],"a":{"en":"B = 45","vi":"B = 45"}},
    {"q":{"en":"2(a) Add 6 to A, multiply by 3, then subtract 5; the result is 22. Find A.","vi":"2(a) Cộng A với 6, nhân 3 rồi trừ 5 thì được 22. Tìm A."},"steps":[{"en":"Work backwards: 22+5=27, 27÷3=9, 9−6=3.","vi":"Đi ngược: 22+5=27, 27÷3=9, 9−6=3."}],"a":{"en":"A = 3","vi":"A = 3"}},
    {"q":{"en":"2(b) Add 3 to B, multiply by 3, divide by 3, then subtract 3; the result is 3. Find B.","vi":"2(b) Cộng B với 3, nhân 3, chia 3 rồi trừ 3 thì được 3. Tìm B."},"steps":[{"en":"Work backwards: 3+3=6, 6×3=18, 18÷3=6, 6−3=3.","vi":"Đi ngược: 3+3=6, 6×3=18, 18÷3=6, 6−3=3."}],"a":{"en":"B = 3","vi":"B = 3"}},
    {"q":{"en":"3 Twenty sparrows were resting on two lamp posts. Four flew from the first post to the second, then two flew back from the second to the first. The two posts then had equal numbers. How many were on each post at first?","vi":"3 Có 20 con chim sẻ đậu trên hai cột đèn. 4 con bay từ cột thứ nhất sang cột thứ hai, rồi 2 con bay từ cột thứ hai về cột thứ nhất. Khi đó hai cột có số chim bằng nhau. Ban đầu mỗi cột có bao nhiêu con?"},"steps":[{"en":"The final numbers are 10 and 10. Reverse the last move, then the first move.","vi":"Cuối cùng mỗi cột có 10 con. Đi ngược lần chuyển cuối rồi lần chuyển đầu."}],"a":{"en":"12 on the first post and 8 on the second","vi":"Cột thứ nhất 12 con, cột thứ hai 8 con"}},
    {"q":{"en":"4 Heather spent $4 on a storybook, then half of the remaining money on six apples, then $2 on a hair clip. She had $4 left. How much money did she have at first?","vi":"4 Heather mua truyện hết 4 đô, dùng một nửa số tiền còn lại mua 6 quả táo, rồi mua kẹp tóc hết 2 đô. Cô còn 4 đô. Ban đầu cô có bao nhiêu tiền?"},"steps":[{"en":"Work backwards: 4+2=6, 6×2=12, 12+4=16.","vi":"Đi ngược: 4+2=6, 6×2=12, 12+4=16."}],"a":{"en":"$16","vi":"16 đô"}},
    {"q":{"en":"5 Tara went up 4 floors, down 6 floors, then up 3 floors and arrived at her friend's home on the 9th floor. On which floor was Tara staying?","vi":"5 Tara đi lên 4 tầng, xuống 6 tầng rồi lên 3 tầng và đến nhà bạn ở tầng 9. Tara đang ở tầng nào lúc đầu?"},"steps":[{"en":"Work backwards: 9−3=6, 6+6=12, 12−4=8.","vi":"Đi ngược: 9−3=6, 6+6=12, 12−4=8."}],"a":{"en":"8th floor","vi":"Tầng 8"}}
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
