(function registerChapterFiveIllustrations() {
  "use strict";

  const out = (window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {});
  const names = { mango: "mango", apple: "apple", orange: "orange", watermelon: "watermelon", lemon: "lemon", pineapple: "pineapple", pear: "pear", banana: "banana", chicken: "chicken", rabbit: "rabbit", chick: "chick" };
  const emoji = { mango: "🥭", apple: "🍎", orange: "🍊", watermelon: "🍉", lemon: "🍋", pineapple: "🍍", pear: "🍐", banana: "🍌", chicken: "🐔", rabbit: "🐇", chick: "🐤" };
  const symbols = { circle: "○", triangle: "△", square: "□", inset: "▣", diamond: "❖" };

  const repeated = (type, count) => {
    const typeClass = /^[a-z]+$/.test(type) ? ` ${type}` : "";
    return Array.from({ length: count }, () => `<span class="object-token${typeClass}" title="${names[type] || type}">${emoji[type] || symbols[type] || type}</span>`).join("");
  };
  const group = (...groups) => groups.map(([type, count]) => repeated(type, count)).join("");
  const mass = (value) => `<span class="mass-token">${value}</span>`;
  const unknown = (label) => `<span class="unknown-token">? <small>${label}</small></span>`;
  const balance = (left, right, aria) => `<div class="picture-balance" role="img" aria-label="${aria}"><div class="balance-pans"><div class="balance-pan">${left}</div><div class="balance-pan">${right}</div></div><div class="balance-beam"></div><div class="balance-fulcrum"></div></div>`;
  const balances = (rows, label) => `<figure class="math-visual comparison-visual" aria-label="${label}"><div class="balance-grid">${rows.join("")}</div></figure>`;
  const equation = (lines, label) => `<figure class="math-visual comparison-visual" role="img" aria-label="${label}"><div class="symbol-equations">${lines.map((line) => `<div>${line}</div>`).join("")}</div></figure>`;
  const s = (type) => `<span class="shape-token ${type}">${symbols[type]}</span>`;

  out["compare-5-1"] = () => equation([
    `${s("circle")} = ${s("triangle")} + ${s("triangle")} + ${s("triangle")}`,
    `${s("triangle")} + ${s("circle")} = 12`,
    `${s("circle")} = ? &nbsp;&nbsp;&nbsp; ${s("triangle")} = ?`,
  ], "Circle equals three triangles; triangle plus circle equals twelve");

  out["compare-5-2"] = () => balances([
    balance(group(["mango", 1]), group(["apple", 6]), "One mango balances six apples"),
    balance(group(["apple", 2]), group(["orange", 3]), "Two apples balance three oranges"),
    balance(group(["orange", 2]), mass("60 g"), "Two oranges balance sixty grams"),
  ], "The three balanced scales from Chapter 5 Question 2");

  out["compare-5-3"] = () => balances([
    balance(group(["watermelon", 1]), group(["lemon", 10]), "One watermelon balances ten lemons"),
    balance(group(["lemon", 2]), group(["apple", 5]), "Two lemons balance five apples"),
    balance(group(["apple", 2]), mass("50 g"), "Two apples balance fifty grams"),
  ], "The three balanced scales from Chapter 5 Question 3");

  out["compare-5-4"] = () => balances([
    balance(group(["pineapple", 1]), group(["pear", 2]), "One pineapple balances two pears"),
    balance(group(["pear", 3]), group(["apple", 5]), "Three pears balance five apples"),
    balance(group(["pineapple", 3]), unknown("apples"), "Three pineapples balance an unknown number of apples"),
  ], "The three balanced scales from Chapter 5 Question 4");

  out["compare-5-5"] = () => equation([
    `${s("inset")} = ${Array.from({ length: 6 }, () => s("circle")).join(" + ")}`,
    `${s("inset")} × ${s("circle")} = 54`,
    `${s("circle")} = ? &nbsp;&nbsp;&nbsp; ${s("inset")} = ?`,
  ], "Inset square equals six circles and inset square times circle equals fifty-four");

  out["compare-5-6"] = () => balances([
    balance(group(["chicken", 1]), group(["rabbit", 3]), "One chicken balances three rabbits"),
    balance(group(["rabbit", 1]), group(["chick", 3]), "One rabbit balances three chicks"),
    balance(group(["chicken", 1]), unknown("chicks"), "One chicken balances an unknown number of chicks"),
  ], "The three balanced scales from Chapter 5 Question 6");

  out["compare-5-7"] = () => equation([
    `${s("diamond")} × ${s("circle")} = 45`,
    `${s("diamond")} = ${Array.from({ length: 5 }, () => s("circle")).join(" + ")}`,
    `${s("diamond")} = ? &nbsp;&nbsp;&nbsp; ${s("circle")} = ?`,
  ], "Diamond times circle equals forty-five and diamond equals five circles");

  out["compare-5-8"] = () => balances([
    balance(group(["pineapple", 1]), group(["pear", 2]), "One pineapple balances two pears"),
    balance(group(["pear", 3]), group(["apple", 5]), "Three pears balance five apples"),
    balance(group(["apple", 2]), group(["banana", 6]), "Two apples balance six bananas"),
    balance(group(["pineapple", 1]), unknown("bananas"), "One pineapple balances an unknown number of bananas"),
  ], "The four balanced scales from Chapter 5 Question 8");

  out["compare-5-9"] = () => equation([
    `${s("square")} × ${s("circle")} = 27`,
    `${s("circle")} = ${s("square")} + ${s("square")} + ${s("square")}`,
    `${s("circle")} = ? &nbsp;&nbsp;&nbsp; ${s("square")} = ?`,
  ], "Square times circle equals twenty-seven and circle equals three squares");

  out["compare-5-10"] = () => balances([
    balance(group(["apple", 3], ["orange", 5]), mass("270 g"), "Three apples and five oranges balance two hundred seventy grams"),
    balance(group(["apple", 3], ["orange", 7]), mass("342 g"), "Three apples and seven oranges balance three hundred forty-two grams"),
  ], "Two mass comparisons from Chapter 5 Question 10");

  out["compare-5-11"] = () => equation([
    `${s("square")} + ${s("square")} + ${s("square")} + ${s("circle")} + ${s("circle")} = 23`,
    `${s("square")} + ${s("circle")} = 9`,
    `${s("square")} = ? &nbsp;&nbsp;&nbsp; ${s("circle")} = ?`,
  ], "The exact two symbol equations from Question 11");
  out["compare-5-12"] = () => equation([
    `${s("circle")} + ${s("circle")} + ${s("square")} + ${s("square")} = 18`,
    `${s("circle")} + ${s("circle")} + ${s("circle")} + ${s("square")} = 19`,
    `${s("square")} = ? &nbsp;&nbsp;&nbsp; ${s("circle")} = ?`,
  ], "The exact two symbol equations from Question 12");
  out["compare-5-13"] = () => equation([
    `${s("diamond")} + ${s("circle")} = 46`,
    `${s("diamond")} + ${s("inset")} = 52`,
    `${s("circle")} + ${s("inset")} = 54`,
    `${s("inset")} = ? &nbsp;&nbsp; ${s("circle")} = ? &nbsp;&nbsp; ${s("diamond")} = ?`,
  ], "The exact three symbol equations from Question 13");
  out["compare-5-14"] = () => equation([
    `${s("circle")} + ${s("triangle")} = 65`,
    `${s("triangle")} + ${s("square")} = 75`,
    `${s("circle")} + ${s("square")} = 70`,
    `${s("circle")} = ? &nbsp;&nbsp; ${s("square")} = ? &nbsp;&nbsp; ${s("triangle")} = ?`,
  ], "The exact three symbol equations from Question 14");
  out["compare-5-15"] = () => balances([
    balance(`<span class="object-token furniture">▰</span><span class="object-token furniture">▰</span>${repeated("🪑", 5)}`, mass("$550"), "Two tables and five chairs cost five hundred fifty dollars"),
    balance(`<span class="object-token furniture">▰</span>`, repeated("🪑", 3), "One table costs the same as three chairs"),
  ], "Table and chair cost comparisons from Chapter 5 Question 15");
})();
