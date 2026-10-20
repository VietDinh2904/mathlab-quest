(function registerChapter() {
  "use strict";

  window.BOOK_DATA = window.BOOK_DATA || {};
  window.BOOK_DATA["4"] = {
  "title": "Problems with Planting Trees",
  "emoji": "🌳",
  "pages": "30–40",
  "theory": [
    [
      "Both ends have objects",
      "number of trees = number of intervals + 1; number of intervals = number of trees − 1."
    ],
    [
      "Only one end has an object",
      "number of trees = number of intervals."
    ],
    [
      "Neither end has an object",
      "number of trees = number of intervals − 1; number of intervals = number of trees + 1."
    ],
    [
      "Same idea beyond trees",
      "The chapter applies the interval idea to lamp posts, knots, cuts, clock chimes, stairs, flags and other equally spaced objects."
    ]
  ],
  "examples": [
    {
      "q": "Trees are planted along a 40 m road, 8 m apart, with trees at both ends.",
      "steps": [
        "40÷8=5 intervals.",
        "Both ends have trees, so trees=intervals+1."
      ],
      "a": "6 trees"
    },
    {
      "q": "16 lamp posts are placed 10 m apart along a road, including both ends.",
      "steps": [
        "Both ends: intervals=16−1=15.",
        "Length=15×10."
      ],
      "a": "150 m"
    },
    {
      "q": "A 120 m road has 16 trees at regular intervals, including both ends.",
      "steps": [
        "Intervals=16−1=15.",
        "Interval size=120÷15."
      ],
      "a": "8 m"
    },
    {
      "q": "A clock takes 12 seconds to chime 4 times. How long to chime 7 times?",
      "steps": [
        "4 chimes create 3 time intervals, so each interval is 4 s.",
        "7 chimes create 6 intervals."
      ],
      "a": "24 seconds"
    }
  ],
  "practice": [
    {
      "n": "1",
      "q": "Joe puts 5 matchsticks on a table. Each matchstick is 10 cm away from another. How far is the fifth matchstick from the first one?",
      "ans": [
        [
          "40"
        ]
      ],
      "hint": "5 matchsticks create 4 intervals.",
      "guide": "4×10=40 cm.",
      "visual": "interval-4-1",
      "visualPlacement": "question",
      "id": "4-1"
    },
    {
      "n": "2",
      "q": "A sailor ties 7 knots on a rope at regular intervals. The distance from the first knot to the seventh is 18 m. What is the distance between two knots?",
      "ans": [
        [
          "3"
        ]
      ],
      "hint": "7 knots from first to seventh create 6 intervals.",
      "guide": "18÷6=3 m.",
      "id": "4-2"
    },
    {
      "n": "3",
      "q": "A 500 m road is planted with trees at an interval of 5 m. How many trees if both ends are planted?",
      "ans": [
        [
          "101"
        ]
      ],
      "hint": "First find intervals; then add 1.",
      "guide": "500÷5=100 intervals; trees=101.",
      "id": "4-3"
    },
    {
      "n": "4",
      "q": "It takes John 8 minutes to saw a log into 3 equal lengths. How long to saw it into 9 equal lengths?",
      "ans": [
        [
          "32"
        ]
      ],
      "hint": "3 pieces need 2 cuts; 9 pieces need 8 cuts.",
      "guide": "8÷2=4 minutes per cut; 8×4=32 minutes.",
      "id": "4-4"
    },
    {
      "n": "5",
      "q": "David uses coins to form a triangle. There is a coin at every corner. How many coins are used if there are 6 coins on each side?",
      "ans": [
        [
          "15"
        ]
      ],
      "hint": "3 sides ×6 counts each corner twice.",
      "guide": "18−3=15 coins.",
      "visual": "interval-4-5",
      "visualPlacement": "question",
      "id": "4-5"
    },
    {
      "n": "6",
      "q": "25 trees are planted at regular intervals from the beginning of a road to the end. Distance between every two trees is 5 m. How long is the road?",
      "ans": [
        [
          "120"
        ]
      ],
      "hint": "Both ends: 25 trees create 24 intervals.",
      "guide": "24×5=120 m.",
      "id": "4-6"
    },
    {
      "n": "7",
      "q": "16 lamp posts are placed at regular intervals along a 300 m road, at both ends as well. How far is one lamp post from another?",
      "ans": [
        [
          "20"
        ]
      ],
      "hint": "16 posts →15 intervals.",
      "guide": "300÷15=20 m.",
      "id": "4-7"
    },
    {
      "n": "8",
      "q": "21 trees are planted along an 800 m road at regular intervals, with trees at both ends. How far is one tree from another?",
      "ans": [
        [
          "40"
        ]
      ],
      "hint": "21 trees →20 intervals.",
      "guide": "800÷20=40 m.",
      "id": "4-8"
    },
    {
      "n": "9",
      "q": "Melvin stays on the 5th floor. Nick stays on the next floor. The staircases leading to Melvin’s house have 80 steps. How many steps lead to Nick’s house?",
      "ans": [
        [
          "100"
        ]
      ],
      "hint": "From the 1st floor to the 5th are 4 equal floor intervals; Nick is on the 6th.",
      "guide": "80÷4=20 steps per floor interval; 5 intervals to 6th floor =100.",
      "id": "4-9"
    },
    {
      "n": "10",
      "q": "A clock takes 6 seconds to chime 3 times. How long does it take to chime 6 times?",
      "ans": [
        [
          "15"
        ]
      ],
      "hint": "3 chimes make 2 intervals.",
      "guide": "6÷2=3 s per interval; 6 chimes make 5 intervals: 15 s.",
      "visual": "interval-4-10",
      "visualPlacement": "question",
      "id": "4-10"
    },
    {
      "n": "11",
      "q": "It takes Uncle Sam 50 seconds to cycle from the first lamp post to the eleventh lamp post. How many lamp posts will he cycle past after 80 seconds?",
      "ans": [
        [
          "17"
        ]
      ],
      "hint": "1st to 11th means 10 intervals in 50 s.",
      "guide": "5 s per interval. In 80 s he covers 16 intervals, reaching the 17th post.",
      "id": "4-11"
    },
    {
      "n": "12",
      "q": "Each side of a football field is planted with 16 flags. There is one flag at each corner. How many flags are planted altogether?",
      "ans": [
        [
          "60"
        ]
      ],
      "hint": "Four sides ×16, then correct for corners counted twice.",
      "guide": "64−4=60 flags.",
      "visual": "interval-4-12",
      "visualPlacement": "question",
      "id": "4-12"
    },
    {
      "n": "13",
      "q": "Flower pots decorate the edges of a square garden. Distance between every two pots is 3 m. Side length is 24 m. How many pots altogether?",
      "ans": [
        [
          "32"
        ]
      ],
      "hint": "Each side has 24÷3=8 intervals; a closed square has as many pots as intervals around the loop.",
      "guide": "4×8=32 pots.",
      "visual": "interval-4-13",
      "visualPlacement": "question",
      "id": "4-13"
    },
    {
      "n": "14",
      "q": "Stella tied 6 knots on a piece of ribbon. The length between the second and fifth knots is 60 cm. What was the length between the first and sixth knots?",
      "ans": [
        [
          "100"
        ]
      ],
      "hint": "2nd to 5th spans 3 intervals; 1st to 6th spans 5.",
      "guide": "60÷3=20 cm per interval; 5×20=100 cm.",
      "id": "4-14"
    },
    {
      "n": "15",
      "q": "A Greyhound coach leaves the station every 10 minutes. How many coaches will leave the station in 60 minutes?",
      "ans": [
        [
          "7"
        ]
      ],
      "hint": "Include the coach at time 0 and at 60 minutes.",
      "guide": "Times: 0,10,20,30,40,50,60 ⇒ 7 coaches.",
      "id": "4-15"
    },
    {
      "n": "16",
      "q": "It takes Professor Sullivan 11 minutes to stroll past the twelfth lamp post along a quiet road. How many lamp posts will he stroll past after 30 minutes?",
      "ans": [
        [
          "31"
        ]
      ],
      "hint": "From the 1st to 12th lamp post there are 11 intervals.",
      "guide": "11 min for 11 intervals ⇒1 min per interval. After 30 min: 30 intervals from the first, reaching the 31st post.",
      "id": "4-16"
    }
  ],
  "check": [
    "4-3",
    "4-4",
    "4-10",
    "4-13",
    "4-16"
  ]
};
})();
