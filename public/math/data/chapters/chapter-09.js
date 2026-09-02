(function registerChapter() {
  "use strict";

  window.BOOK_DATA = window.BOOK_DATA || {};
  window.BOOK_DATA["9"] = {
  "title": "Age Problems",
  "emoji": "👨‍👧",
  "pages": "76–87",
  "theory": [
    [
      "Age difference stays the same",
      "The difference between two people’s ages does not change with time."
    ],
    [
      "Age multiple changes",
      "The multiple of one person’s age to another can change as time passes."
    ],
    [
      "Use a model",
      "Bar models can represent age difference and a multiple relationship."
    ],
    [
      "Make a list or reason directly",
      "The examples use both a year-by-year list and direct reasoning depending on the information given."
    ]
  ],
  "examples": [
    {
      "q": "Kevin is 8 and his father is 34. When will the father be three times Kevin’s age?",
      "steps": [
        "The age difference is 26 and stays constant.",
        "When father is 3 units and Kevin 1 unit, the difference is 2 units=26.",
        "Kevin is then 13."
      ],
      "a": "In 5 years"
    },
    {
      "q": "Melissa is 13 and her brother is 9. When will their ages sum to 42?",
      "steps": [
        "Their difference is 4.",
        "Use the total and difference, or note that their total rises by 2 each year."
      ],
      "a": "Melissa will be 23"
    },
    {
      "q": "Four years ago Patrick’s mother was four times his age; she is now 44.",
      "steps": [
        "Mother was 40 four years ago.",
        "40÷4=10 was Patrick’s age then.",
        "Add four years."
      ],
      "a": "Patrick is 14"
    },
    {
      "q": "Andy and his parents have a total age of 72. When will the total be 90?",
      "steps": [
        "Three people gain 3 years of total age every year.",
        "The increase needed is 18."
      ],
      "a": "6 years"
    }
  ],
  "practice": [
    {
      "id": "9-1",
      "n": "1",
      "q": "I am 8 years old. My father’s age is five times my age. How old is my father?",
      "ans": [
        [
          "40"
        ]
      ],
      "hint": "Multiply the child’s age by 5.",
      "guide": "8×5=40."
    },
    {
      "id": "9-2",
      "n": "2",
      "q": "Ashley is 10 years old. Three years ago, she was 2 years older than her brother. How old is Ashley’s brother?",
      "ans": [
        [
          "8"
        ]
      ],
      "hint": "The age difference stays the same.",
      "guide": "Three years ago Ashley was 7, so her brother was 5; now he is 8."
    },
    {
      "id": "9-3",
      "n": "3",
      "q": "The sum of my parents’ ages is 70. In 4 years’ time, my dad will be 6 years older than my mum. How old is my dad now?",
      "ans": [
        [
          "38"
        ]
      ],
      "hint": "The 6-year difference is the same now.",
      "guide": "Current sum 70 and difference 6: dad=(70+6)÷2=38."
    },
    {
      "id": "9-4",
      "n": "4",
      "q": "Shane is 8 years old. His mother is 38. How many years ago was his mother’s age 6 times his age?",
      "ans": [
        [
          "2"
        ]
      ],
      "hint": "Let x years ago; subtract x from both ages.",
      "guide": "38−x=6(8−x), so x=2."
    },
    {
      "id": "9-5",
      "n": "5",
      "q": "Megan is 11 years old. Her father is 43. How many years ago was her father’s age 5 times her age?",
      "ans": [
        [
          "3"
        ]
      ],
      "hint": "Subtract the same number of years from both ages.",
      "guide": "43−x=5(11−x), giving x=3."
    },
    {
      "id": "9-6",
      "n": "6",
      "q": "Colin is 10 years old. His granny is 62. In how many years’ time will his granny’s age be 5 times his age?",
      "ans": [
        [
          "3"
        ]
      ],
      "hint": "Add the same number of years to both ages.",
      "guide": "62+x=5(10+x), giving x=3."
    },
    {
      "id": "9-7",
      "n": "7",
      "q": "Julie is 25 years younger than her mother. Her mother’s age is 6 times her age. How old is each of them?",
      "ans": [
        [
          "5"
        ],
        [
          "30"
        ]
      ],
      "hint": "The difference equals 5 equal Julie-units.",
      "guide": "5 units=25, so Julie=5 and mother=30.",
      "labels": [
        "Julie",
        "Mother"
      ]
    },
    {
      "id": "9-8",
      "n": "8",
      "q": "Laura is 13 years old. Her sister is 10. How old will each of them be when the sum of their ages is 63?",
      "ans": [
        [
          "33"
        ],
        [
          "30"
        ]
      ],
      "hint": "Their current sum is 23 and rises by 2 each year.",
      "guide": "63−23=40, so 20 years later: Laura 33, sister 30.",
      "labels": [
        "Laura",
        "Sister"
      ]
    },
    {
      "id": "9-9",
      "n": "9",
      "q": "The sum of a father’s age and his son’s age is 60. Eight years ago, the father’s age was 3 times that of his son. How old is each of them?",
      "ans": [
        [
          "41"
        ],
        [
          "19"
        ]
      ],
      "hint": "Move both ages back 8 years while keeping the current total in mind.",
      "guide": "F+S=60 and F−8=3(S−8), so S=19 and F=41.",
      "labels": [
        "Father",
        "Son"
      ]
    },
    {
      "id": "9-10",
      "n": "10",
      "q": "Jack is 14 years old. His mother is 50. How many years ago was his mother’s age 5 times his age?",
      "ans": [
        [
          "5"
        ]
      ],
      "hint": "Subtract x years from both ages.",
      "guide": "50−x=5(14−x), so x=5."
    },
    {
      "id": "9-11",
      "n": "11",
      "q": "The sum of Geoff’s age and his sister’s age is 22. When will the sum of their ages be 40?",
      "ans": [
        [
          "9"
        ]
      ],
      "hint": "Two people increase the combined age by 2 per year.",
      "guide": "40−22=18; 18÷2=9 years."
    },
    {
      "id": "9-12",
      "n": "12",
      "q": "The sum of Tanya’s age and her parents’ ages is 76. When will the sum of their ages be 100?",
      "ans": [
        [
          "8"
        ]
      ],
      "hint": "Three people increase the combined age by 3 per year.",
      "guide": "100−76=24; 24÷3=8 years."
    },
    {
      "id": "9-13",
      "n": "13",
      "q": "Three years ago, the sum of Mark’s age and his mother’s age was 49. His mother’s age is 4 times Mark’s age now. How old is each of them?",
      "ans": [
        [
          "11"
        ],
        [
          "44"
        ]
      ],
      "hint": "First bring the total to the present.",
      "guide": "The present total is 55. Five equal units=55, so Mark=11 and mother=44.",
      "labels": [
        "Mark",
        "Mother"
      ]
    },
    {
      "id": "9-14",
      "n": "14",
      "q": "The sum of Melvin’s age and his mother’s age is 58. His mother is 23 years older than his brother. Melvin’s brother is 5 years his senior. How old is each of them?",
      "ans": [
        [
          "15"
        ],
        [
          "20"
        ],
        [
          "43"
        ]
      ],
      "hint": "Translate “5 years senior” and the 23-year difference into one difference from Melvin to mother.",
      "guide": "Brother=Melvin+5; mother=brother+23=Melvin+28. Then 2Melvin+28=58.",
      "labels": [
        "Melvin",
        "Brother",
        "Mother"
      ]
    },
    {
      "id": "9-15",
      "n": "15",
      "q": "Ronnie is 9 years old. His cousin said, “When you reach my age, I will be 33 years old.” How old is his cousin?",
      "ans": [
        [
          "21"
        ]
      ],
      "hint": "The time Ronnie needs to reach the cousin’s current age equals their age difference.",
      "guide": "If cousin is C, then C+(C−9)=33; C=21."
    },
    {
      "id": "9-16",
      "n": "16",
      "q": "Melanie is 8 years old. Her uncle said, “When you reach my age, I will be 38 years old.” How old is her uncle?",
      "ans": [
        [
          "23"
        ]
      ],
      "hint": "Use the same age-difference reasoning as the previous question.",
      "guide": "If uncle is U, then U+(U−8)=38; U=23."
    },
    {
      "id": "9-17",
      "n": "17",
      "q": "In three years’ time, the sum of Justin’s age and Stanley’s age will be 33. Justin’s age is also the difference between his own age and Stanley’s age. How old are Justin and Stanley?",
      "ans": [
        [
          "27"
        ],
        [
          "0"
        ]
      ],
      "hint": "Use the wording exactly as printed: current sum is 27 and Justin equals the difference between the two ages.",
      "guide": "Current sum=33−6=27. If Justin is older, J=J−S implies S=0, so J=27. (This unusual result follows the printed wording.)",
      "labels": [
        "Justin",
        "Stanley"
      ]
    }
  ],
  "check": [
    "9-3",
    "9-7",
    "9-9",
    "9-13",
    "9-17"
  ]
};
})();
