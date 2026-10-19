(function registerChapter() {
  "use strict";

  window.BOOK_DATA = window.BOOK_DATA || {};
  window.BOOK_DATA["7"] = {
  "title": "Tricks in Addition and Subtraction",
  "emoji": "➕",
  "pages": "58–65",
  "theory": [
    [
      "Make tens or hundreds",
      "Pair or regroup numbers to make convenient totals such as 10, 100 or 200."
    ],
    [
      "Break up a number",
      "Split one addend so that part of it completes a ten or hundred with another addend."
    ],
    [
      "Add subtrahends in brackets",
      "a−b−c can be rewritten as a−(b+c)."
    ],
    [
      "Remove brackets carefully",
      "a−(b+c)=a−b−c and a−(b−c)=a−b+c."
    ]
  ],
  "examples": [
    {
      "q": "35+64+65; 99+101+18; 22+58+78; 128+72+14",
      "steps": [
        "Look for a pair making 100 or 200.",
        "Add the remaining number."
      ],
      "a": "164; 218; 158; 214"
    },
    {
      "q": "Compute 64 + 27 + 29.",
      "steps": [
        "Break one number into tens and ones.",
        "Regroup to complete tens."
      ],
      "a": "120"
    },
    {
      "q": "166+575; 788+546; 999+802; 1234+768",
      "steps": [
        "Compensate one number to a round value.",
        "Apply the opposite adjustment to keep the sum unchanged."
      ],
      "a": "741; 1334; 1801; 2002"
    },
    {
      "q": "Compute 900 − 384 − 116.",
      "steps": [
        "Combine multiple subtrahends when useful.",
        "When removing brackets, change signs as shown in the chapter."
      ],
      "a": "400"
    }
  ],
  "practice": [
    {
      "id": "7-1",
      "n": "1",
      "q": "Compute the following.",
      "ans": [
        [
          "100"
        ],
        [
          "100"
        ],
        [
          "100"
        ],
        [
          "100"
        ],
        [
          "100"
        ],
        [
          "80"
        ],
        [
          "80"
        ],
        [
          "60"
        ]
      ],
      "hint": "Look for pairs that complete 10 or 100.",
      "guide": "Each expression can be completed directly to a convenient ten or hundred.",
      "labels": [
        "(a) 22+78",
        "(b) 15+85",
        "(c) 17+83",
        "(d) 54+46",
        "(e) 64+36",
        "(f) 33+47",
        "(g) 56+24",
        "(h) 25+35"
      ]
    },
    {
      "id": "7-2",
      "n": "2",
      "q": "Compute the following.",
      "ans": [
        [
          "155"
        ],
        [
          "166"
        ],
        [
          "134"
        ],
        [
          "152"
        ]
      ],
      "hint": "Pair the two numbers that make a round total first.",
      "guide": "Regroup using commutativity: for example 24+76=100.",
      "labels": [
        "(a) 24+55+76",
        "(b) 56+66+44",
        "(c) 86+34+14",
        "(d) 78+52+22"
      ]
    },
    {
      "id": "7-3",
      "n": "3",
      "q": "Compute the following.",
      "ans": [
        [
          "100"
        ],
        [
          "160"
        ],
        [
          "160"
        ],
        [
          "180"
        ]
      ],
      "hint": "Make two convenient pairs.",
      "guide": "Reorder the four addends so each pair makes a ten/hundred-friendly total.",
      "labels": [
        "(a) 24+37+23+16",
        "(b) 55+33+45+27",
        "(c) 48+64+22+26",
        "(d) 84+37+26+33"
      ]
    },
    {
      "id": "7-4",
      "n": "4",
      "q": "Compute the following.",
      "ans": [
        [
          "110"
        ],
        [
          "140"
        ],
        [
          "120"
        ],
        [
          "150"
        ]
      ],
      "hint": "Break one number to complete a ten with another.",
      "guide": "Use the chapter method of splitting an addend and regrouping.",
      "labels": [
        "(a) 24+47+39",
        "(b) 33+48+59",
        "(c) 55+38+27",
        "(d) 88+28+34"
      ]
    },
    {
      "id": "7-5",
      "n": "5",
      "q": "Compute the following.",
      "ans": [
        [
          "402"
        ],
        [
          "700"
        ],
        [
          "501"
        ],
        [
          "500"
        ]
      ],
      "hint": "Compensate toward a round hundred.",
      "guide": "Adjust one addend to a round value and compensate the other.",
      "labels": [
        "(a) 284+118",
        "(b) 514+186",
        "(c) 333+168",
        "(d) 257+243"
      ]
    },
    {
      "id": "7-6",
      "n": "6",
      "q": "Compute the following.",
      "ans": [
        [
          "1388"
        ],
        [
          "362"
        ],
        [
          "1603"
        ],
        [
          "1711"
        ]
      ],
      "hint": "Break 1005 or 1038 into 1000 plus the remainder.",
      "guide": "Add the round thousand first, then the remainder.",
      "labels": [
        "(a) 383+1005",
        "(b) 294+68",
        "(c) 565+1038",
        "(d) 673+1038"
      ]
    },
    {
      "id": "7-7",
      "n": "7",
      "q": "Compute the following.",
      "ans": [
        [
          "130"
        ],
        [
          "170"
        ],
        [
          "170"
        ],
        [
          "230"
        ]
      ],
      "hint": "Search for two pairs that make round totals.",
      "guide": "Regroup into two convenient pairs, then add the pair totals.",
      "labels": [
        "(a) 28+57+23+22",
        "(b) 34+55+46+35",
        "(c) 63+28+27+52",
        "(d) 72+66+18+74"
      ]
    },
    {
      "id": "7-8",
      "n": "8",
      "q": "Compute the following.",
      "ans": [
        [
          "900"
        ],
        [
          "600"
        ],
        [
          "600"
        ],
        [
          "1800"
        ]
      ],
      "hint": "Pair numbers that complement each other to hundreds.",
      "guide": "For example 175+225=400 and 246+254=500.",
      "labels": [
        "(a) 175+246+225+254",
        "(b) 196+154+104+146",
        "(c) 123+182+177+118",
        "(d) 248+275+752+525"
      ]
    },
    {
      "id": "7-9",
      "n": "9",
      "q": "Compute the following.",
      "ans": [
        [
          "100"
        ],
        [
          "250"
        ],
        [
          "338"
        ],
        [
          "112"
        ]
      ],
      "hint": "Combine subtrahends where useful.",
      "guide": "Use a−b−c=a−(b+c), and evaluate bracketed sums first.",
      "labels": [
        "(a) 438−132−206",
        "(b) 650−238−162",
        "(c) 738−(238+162)",
        "(d) 573−(188+273)"
      ]
    },
    {
      "id": "7-10",
      "n": "10",
      "q": "Compute the following.",
      "ans": [
        [
          "300"
        ],
        [
          "200"
        ],
        [
          "218"
        ],
        [
          "340"
        ]
      ],
      "hint": "Regroup the subtractions to make a convenient combined subtrahend.",
      "guide": "Use the bracket rules given at the start of the chapter.",
      "labels": [
        "(a) 567−134−133",
        "(b) 388−144−44",
        "(c) 673−(273+182)",
        "(d) 937−(337+260)"
      ]
    }
  ],
  "check": [
    "7-1",
    "7-3",
    "7-5",
    "7-8",
    "7-10"
  ]
};
})();
