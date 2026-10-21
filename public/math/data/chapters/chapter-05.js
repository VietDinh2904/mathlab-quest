(function registerChapter() {
  "use strict";

  window.BOOK_DATA = window.BOOK_DATA || {};
  window.BOOK_DATA["5"] = {
  "title": "Solve by Comparison and Replacement",
  "emoji": "⚖️",
  "pages": "41–50",
  "theory": [
    [
      "Replace equal quantities",
      "If one symbol/object is equal to several of another, replace it so both statements use the same unit."
    ],
    [
      "Compare two statements",
      "Scale or align equations, then subtract to isolate the remaining object."
    ],
    [
      "Use balance relationships",
      "In picture balances, every balanced line represents equal mass on both sides."
    ],
    [
      "Check by substitution",
      "Put the found value back into the original relationship to verify it."
    ]
  ],
  "examples": [
    {
      "q": "2 triangles = 6 circles, and 3 triangles = 3 squares. How many circles equal 1 square?",
      "steps": [
        "From 2 triangles=6 circles, 1 triangle=3 circles.",
        "From 3 triangles=3 squares, 1 triangle=1 square."
      ],
      "a": "1 square = 3 circles"
    },
    {
      "q": "❖+❖+○+○=32 and ○=❖+❖+❖. Find ❖ and ○.",
      "steps": [
        "Replace each circle by 3 diamonds.",
        "The first line becomes 8 diamonds=32.",
        "One diamond=4, then one circle=12."
      ],
      "a": "❖=4; ○=12"
    },
    {
      "q": "2 basketballs +3 volleyballs cost $195; 4 basketballs +5 volleyballs cost $355. Find one volleyball.",
      "steps": [
        "Double the first equation: 4 basketballs+6 volleyballs=$390.",
        "Compare with 4 basketballs+5 volleyballs=$355.",
        "The difference is one volleyball."
      ],
      "a": "$35"
    }
  ],
  "practice": [
    {
      "n": "1",
      "q": "○ = △+△+△ and △+○=12. Find ○ and △.",
      "labels": [
        "○",
        "△"
      ],
      "ans": [
        [
          "9"
        ],
        [
          "3"
        ]
      ],
      "hint": "Replace ○ by 3 triangles.",
      "guide": "△+3△=12 ⇒4△=12 ⇒△=3, ○=9.",
      "id": "5-1",
      "visual": "compare-5-1"
    },
    {
      "n": "2",
      "q": {"en":"Study the three balanced scales. Find the mass of the mango.","vi":"Quan sát ba chiếc cân thăng bằng. Tìm khối lượng của quả xoài."},
      "ans": [
        [
          "270"
        ]
      ],
      "hint": "Work from oranges → apples → mango.",
      "guide": "Orange=30 g. 3 oranges=90 g=2 apples, so apple=45 g. Mango=6×45=270 g.",
      "id": "5-2",
      "visual": "compare-5-2"
    },
    {
      "n": "3",
      "q": {"en":"Study the three balanced scales. What is the mass of the watermelon?","vi":"Quan sát ba chiếc cân thăng bằng. Quả dưa hấu nặng bao nhiêu?"},
      "ans": [
        [
          "625"
        ]
      ],
      "hint": "Find apple mass first, then lemon mass.",
      "guide": "Apple=25 g. 2 lemons=5 apples=125 g, so one lemon=62.5 g. Watermelon=10×62.5=625 g.",
      "id": "5-3",
      "visual": "compare-5-3"
    },
    {
      "n": "4",
      "q": {"en":"Study the balanced scales. Three pineapples have the same mass as how many apples?","vi":"Quan sát các cân thăng bằng. Ba quả dứa nặng bằng bao nhiêu quả táo?"},
      "ans": [
        [
          "10"
        ]
      ],
      "hint": "3 pineapples =6 pears.",
      "guide": "6 pears is twice 3 pears, so it equals 10 apples.",
      "id": "5-4",
      "visual": "compare-5-4"
    },
    {
      "n": "5",
      "q": "▣ = ○+○+○+○+○+○ and ▣×○=54. Find ○ and ▣.",
      "labels": [
        "○",
        "▣"
      ],
      "ans": [
        [
          "3"
        ],
        [
          "18"
        ]
      ],
      "hint": "Replace ▣ with 6 circles.",
      "guide": "6 × ○ × ○ = 54 nên ○ × ○ = 9. Thử 3 × 3 = 9, vậy ○ = 3 và ▣ = 18.",
      "id": "5-5",
      "visual": "compare-5-5"
    },
    {
      "n": "6",
      "q": {"en":"Study the balanced scales. One chicken has the same mass as how many chicks?","vi":"Quan sát các cân thăng bằng. Một con gà nặng bằng bao nhiêu gà con?"},
      "ans": [
        [
          "9"
        ]
      ],
      "hint": "Replace each rabbit with chicks.",
      "guide": "Chicken=3 rabbits=3×3=9 chicks.",
      "id": "5-6",
      "visual": "compare-5-6"
    },
    {
      "n": "7",
      "q": "❖×○=45 and ❖=○+○+○+○+○. Find ❖ and ○.",
      "labels": [
        "❖",
        "○"
      ],
      "ans": [
        [
          "15"
        ],
        [
          "3"
        ]
      ],
      "hint": "Replace ❖ by 5 circles.",
      "guide": "5 × ○ × ○ = 45 nên ○ × ○ = 9. Vì 3 × 3 = 9 nên ○ = 3 và ❖ = 15.",
      "id": "5-7",
      "visual": "compare-5-7"
    },
    {
      "n": "8",
      "q": {"en":"Study the four balanced scales. One pineapple has the same mass as how many bananas?","vi":"Quan sát bốn chiếc cân thăng bằng. Một quả dứa nặng bằng bao nhiêu quả chuối?"},
      "ans": [
        [
          "10"
        ]
      ],
      "hint": "Convert pineapple → pears → apples → bananas.",
      "guide": "2 pears=(2/3)×5 apples=10/3 apples. Each apple=3 bananas, so pineapple=10 bananas.",
      "id": "5-8",
      "visual": "compare-5-8"
    },
    {
      "n": "9",
      "q": "□×○=27 and ○=□+□+□. Find ○ and □.",
      "labels": [
        "○",
        "□"
      ],
      "ans": [
        [
          "9"
        ],
        [
          "3"
        ]
      ],
      "hint": "Replace ○ with 3 squares.",
      "guide": "□ × 3 × □ = 27 nên □ × □ = 9. Vì 3 × 3 = 9 nên □ = 3 và ○ = 9.",
      "id": "5-9",
      "visual": "compare-5-9"
    },
    {
      "n": "10",
      "q": "3 apples +5 oranges have mass 270 g. 3 apples +7 oranges have mass 342 g. Find one orange.",
      "ans": [
        [
          "36"
        ]
      ],
      "hint": "Compare the two statements directly.",
      "guide": "The difference is 2 oranges=72 g, so one orange=36 g.",
      "id": "5-10",
      "visual": "compare-5-10"
    },
    {
      "n": "11",
      "q": "□+□+□+○+○=23 and □+○=9. Find □ and ○.",
      "labels": [
        "□",
        "○"
      ],
      "ans": [
        [
          "5"
        ],
        [
          "4"
        ]
      ],
      "hint": "Two copies of □+○ account for 18.",
      "guide": "3□+2○ −2(□+○)=23−18 ⇒□=5; ○=4.",
      "id": "5-11",
      "visual": "compare-5-11"
    },
    {
      "n": "12",
      "q": "○+○+□+□=18 and ○+○+○+□=19. Find □ and ○.",
      "labels": [
        "□",
        "○"
      ],
      "ans": [
        [
          "4"
        ],
        [
          "5"
        ]
      ],
      "hint": "Subtract the first equation from the second.",
      "guide": "○−□=1 and ○+□=9, so ○=5, □=4.",
      "id": "5-12",
      "visual": "compare-5-12"
    },
    {
      "n": "13",
      "q": "❖+○=46, ❖+▣=52, ○+▣=54. Find ▣, ○, ❖.",
      "labels": [
        "▣",
        "○",
        "❖"
      ],
      "ans": [
        [
          "30"
        ],
        [
          "24"
        ],
        [
          "22"
        ]
      ],
      "hint": "Add the first two equations, then subtract the third.",
      "guide": "2❖=46+52−54=44 ⇒❖=22. Then ○=24 and ▣=30.",
      "id": "5-13",
      "visual": "compare-5-13"
    },
    {
      "n": "14",
      "q": "○+△=65, △+□=75, ○+□=70. Find ○, □, △.",
      "labels": [
        "○",
        "□",
        "△"
      ],
      "ans": [
        [
          "30"
        ],
        [
          "40"
        ],
        [
          "35"
        ]
      ],
      "hint": "Add two equations and subtract the third to isolate one symbol.",
      "guide": "2○=65+70−75=60 ⇒○=30. △=35; □=40.",
      "id": "5-14",
      "visual": "compare-5-14"
    },
    {
      "n": "15",
      "q": "2 identical tables and 5 similar chairs cost $550. One table costs the same as 3 chairs. What is the cost of each table?",
      "ans": [
        [
          "150"
        ]
      ],
      "hint": "Replace each table with 3 chairs.",
      "guide": "2 tables=6 chairs; total equivalent=11 chairs=$550 ⇒ chair=$50 ⇒ table=$150.",
      "id": "5-15",
      "visual": "compare-5-15"
    }
  ],
  "check": [
    "5-2",
    "5-5",
    "5-10",
    "5-13",
    "5-15"
  ]
};
})();
