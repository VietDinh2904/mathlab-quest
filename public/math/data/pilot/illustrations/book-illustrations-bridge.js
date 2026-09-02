(function bridgeBookIllustrations() {
  "use strict";

  const pilot = window.PILOT_ILLUSTRATIONS || {};
  Object.entries(window.BOOK_ILLUSTRATIONS || {}).forEach(([key, render]) => {
    pilot[key] = () => `<div class="math-visual legacy-illustration">${render()}</div>`;
  });

  const chain = (items, label) =>
    `<div class="math-visual"><div class="operation-chain" role="img" aria-label="${label}">${items
      .map((item, index) => `<span class="chain-box">${item}</span>${index < items.length - 1 ? '<span class="chain-arrow">→</span>' : ""}`)
      .join("")}</div></div>`;

  const chains = {
    "reverse1-a": [["?", "÷3", "+4", "×5", "30"], "Divide by 3, add 4, multiply by 5, ending at 30"],
    "reverse1-b": [["?", "÷2", "−2", "+6", "12"], "Divide by 2, subtract 2, add 6, ending at 12"],
    "reverse1-c": [["?", "÷3", "+2", "×7", "35"], "Divide by 3, add 2, multiply by 7, ending at 35"],
    "reverse1-d": [["?", "×7", "−8", "÷3", "9"], "Multiply by 7, subtract 8, divide by 3, ending at 9"],
    "reverse2-a": [["?", "+10", "×10", "−10", "÷10", "10"], "Add 10, multiply by 10, subtract 10, divide by 10, ending at 10"],
    "reverse2-b": [["?", "×3", "+8", "−3", "÷5", "4"], "Multiply by 3, add 8, subtract 3, divide by 5, ending at 4"],
    "reverse2-c": [["?", "−2", "×9", "+3", "÷4", "12"], "Subtract 2, multiply by 9, add 3, divide by 4, ending at 12"],
    "reverse2-d": [["?", "÷2", "÷2", "÷2", "÷2", "1"], "Divide by 2 four times, ending at 1"],
  };

  Object.entries(chains).forEach(([key, [items, label]]) => {
    pilot[key] = () => chain(items, label);
  });
  pilot.reverse1 = pilot["reverse1-a"];
  pilot.reverse2 = pilot["reverse2-a"];
})();
