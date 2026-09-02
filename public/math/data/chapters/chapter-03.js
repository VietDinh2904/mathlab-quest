(function registerChapter() {
  "use strict";

  window.BOOK_DATA = window.BOOK_DATA || {};
  window.BOOK_DATA["3"] = {
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
  "practice": [
    {
      "n": "1",
      "q": "There are 150 apple and peach trees altogether. Peach trees are 30 more than apple trees. How many of each?",
      "labels": [
        "apple",
        "peach"
      ],
      "ans": [
        [
          "60"
        ],
        [
          "90"
        ]
      ],
      "hint": "Remove the extra 30, then split the remainder into 2 equal units.",
      "guide": "150−30=120; 120÷2=60 apples; peaches=60+30=90.",
      "id": "3-1"
    },
    {
      "n": "2",
      "q": "Nelson is 8 years old. His father is 36. How old will they be when the sum of their ages is 62?",
      "labels": [
        "Nelson",
        "father"
      ],
      "ans": [
        [
          "17"
        ],
        [
          "45"
        ]
      ],
      "hint": "Their current sum is 44 and rises by 2 each year.",
      "guide": "62−44=18; 18÷2=9 years later. Nelson 17, father 45.",
      "id": "3-2"
    },
    {
      "n": "3",
      "q": "Rona and Karen had $380 altogether. After Rona spent $26 and Karen spent $35, Rona had $59 more than Karen. How much did each have at first?",
      "labels": [
        "Rona",
        "Karen"
      ],
      "ans": [
        [
          "215"
        ],
        [
          "165"
        ]
      ],
      "hint": "The spending changes their difference by 9.",
      "guide": "(R−26)−(K−35)=59 ⇒ R−K=50. With R+K=380: R=215, K=165.",
      "id": "3-3"
    },
    {
      "n": "4",
      "q": "Canterbury and Russels schools had 900 students altogether. After 35 students moved from Canterbury to Russels, Canterbury had 20 more students. How many students did each school have at first?",
      "labels": [
        "Canterbury",
        "Russels"
      ],
      "ans": [
        [
          "495"
        ],
        [
          "405"
        ]
      ],
      "hint": "After transfer, the difference is 20; before transfer the difference was 20+70.",
      "guide": "Original difference=90. Total=900. Smaller=(900−90)÷2=405; larger=495.",
      "id": "3-4"
    },
    {
      "n": "5",
      "q": "Geoff and Gina bought 200 books altogether. If Geoff gave 6 books to Gina, Geoff would have 2 fewer books than Gina. How many books did each have at first?",
      "labels": [
        "Geoff",
        "Gina"
      ],
      "ans": [
        [
          "105"
        ],
        [
          "95"
        ]
      ],
      "hint": "After transfer, Geoff is 2 fewer; reverse the transfer to recover original difference.",
      "guide": "G−6=(N+6)−2 ⇒ G−N=10. With total 200: 105 and 95.",
      "id": "3-5"
    },
    {
      "n": "6",
      "q": "The sum of two numbers is 80. Their difference is 12. Find the two numbers.",
      "labels": [
        "larger",
        "smaller"
      ],
      "ans": [
        [
          "46"
        ],
        [
          "34"
        ]
      ],
      "hint": "Remove the difference from the total, then split.",
      "guide": "80−12=68; 68÷2=34; larger=46.",
      "id": "3-6"
    },
    {
      "n": "7",
      "q": "If one student moves from Class 3A to 3B, the two classes become equal. If one student moves from 3B to 3C, then 3C has 2 more students than 3B. Which class, 3A or 3C, had more students at first? By how many?",
      "labels": [
        "class",
        "difference"
      ],
      "ans": [
        [
          "3A",
          "class 3A"
        ],
        [
          "2"
        ]
      ],
      "hint": "Translate each transfer into a before-transfer difference.",
      "guide": "First condition gives A=B+2. Second gives C=B. Therefore A is 2 more than C.",
      "id": "3-7"
    },
    {
      "n": "8",
      "q": "The sum of the ages of Lucas and his grandmother is 64. Grandmother is 7 times Lucas’s age. How old is Lucas?",
      "ans": [
        [
          "8"
        ]
      ],
      "hint": "Use 1 unit for Lucas and 7 units for grandmother.",
      "guide": "8 units=64, so Lucas=8.",
      "id": "3-8"
    },
    {
      "n": "9",
      "q": "A farmer has 63 chickens and ducks. The number of chickens is 6 times the number of ducks. How many chickens?",
      "ans": [
        [
          "54"
        ]
      ],
      "hint": "6 units +1 unit =63.",
      "guide": "1 unit=9 ducks; chickens=6×9=54.",
      "id": "3-9"
    },
    {
      "n": "10",
      "q": "The sum of two numbers is 150. One number is 4 times the other. What are the two numbers?",
      "labels": [
        "larger",
        "smaller"
      ],
      "ans": [
        [
          "120"
        ],
        [
          "30"
        ]
      ],
      "hint": "5 equal units total 150.",
      "guide": "1 unit=30; numbers are 120 and 30.",
      "id": "3-10"
    },
    {
      "n": "11",
      "q": "The first basket contains 48 peaches; the second contains 50. How many peaches must be transferred from the first to the second so the second has 6 times the first?",
      "ans": [
        [
          "34"
        ]
      ],
      "hint": "Total stays 98. Target ratio is 1:6.",
      "guide": "7 units=98, so first must end with 14 and second 84. Transfer 48−14=34.",
      "id": "3-11"
    },
    {
      "n": "12",
      "q": "Jonathan has 80 stamps and Melvin 60. How many stamps must Melvin give Jonathan so Jonathan has 4 times Melvin’s amount?",
      "ans": [
        [
          "32"
        ]
      ],
      "hint": "Total stays 140; target ratio is 4:1.",
      "guide": "5 units=140 ⇒ Melvin ends with 28. He gives 60−28=32.",
      "id": "3-12"
    },
    {
      "n": "13",
      "q": "Dave has $160. His sister has $340. How much must Dave give his sister so she has 4 times as much as he has?",
      "ans": [
        [
          "60"
        ]
      ],
      "hint": "Total stays $500; target ratio sister:Dave=4:1.",
      "guide": "5 units=$500 ⇒ Dave ends with $100. He gives $60.",
      "id": "3-13"
    },
    {
      "n": "14",
      "q": "$210 is shared among Alice, Beatrice and Charmaine. Alice receives 2 times Beatrice; Beatrice receives 2 times Charmaine. How much does each receive?",
      "labels": [
        "Alice",
        "Beatrice",
        "Charmaine"
      ],
      "ans": [
        [
          "120"
        ],
        [
          "60"
        ],
        [
          "30"
        ]
      ],
      "hint": "Use 4:2:1 units.",
      "guide": "7 units=210 ⇒ 1 unit=30. A=120, B=60, C=30.",
      "id": "3-14"
    },
    {
      "n": "15",
      "q": "120 apples are divided into 3 groups. The first group has 3 times as many as the second. The third has 2 times as many as the second. Find each group.",
      "labels": [
        "1st",
        "2nd",
        "3rd"
      ],
      "ans": [
        [
          "60"
        ],
        [
          "20"
        ],
        [
          "40"
        ]
      ],
      "hint": "Use 3:1:2 units.",
      "guide": "6 units=120 ⇒ 1 unit=20.",
      "id": "3-15"
    },
    {
      "n": "16",
      "q": "There are 720 apple, peach and lemon trees. Apple trees are 2 times lemon trees. Peach trees are half the number of apple trees. Find each type.",
      "labels": [
        "apple",
        "peach",
        "lemon"
      ],
      "ans": [
        [
          "360"
        ],
        [
          "180"
        ],
        [
          "180"
        ]
      ],
      "hint": "If lemon=1 unit, apple=2 units and peach=1 unit.",
      "guide": "4 units=720 ⇒ 1 unit=180.",
      "id": "3-16"
    },
    {
      "n": "17",
      "q": "The sum of A, B and C is 840. A is 2 times B and C is half of A. Find A, B and C.",
      "labels": [
        "A",
        "B",
        "C"
      ],
      "ans": [
        [
          "420"
        ],
        [
          "210"
        ],
        [
          "210"
        ]
      ],
      "hint": "A=2B and C=B.",
      "guide": "Total=4B=840 ⇒ B=210, A=420, C=210.",
      "id": "3-17"
    }
  ],
  "check": [
    "3-1",
    "3-6",
    "3-11",
    "3-14",
    "3-17"
  ]
};
})();
