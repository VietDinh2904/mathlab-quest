(function registerChapterElevenIllustrations() {
  "use strict";

  const illustrations = (window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {});
  const tables = {
    "11-1": ["Comic books", "Cost", "Science magazines", "Cost", "Total cost"],
    "11-2": ["Chickens", "Chicken legs", "Rabbits", "Rabbit legs", "Total legs"],
    "11-3": ["Chickens", "Chicken legs", "Rabbits", "Rabbit legs", "Total legs"],
    "11-4": ["Tricycles", "Tricycle wheels", "Bicycles", "Bicycle wheels", "Total wheels"],
    "11-5": ["Spiders", "Spider legs", "Dragonflies", "Dragonfly legs", "Total legs"],
    "11-6": ["Cars", "Car wheels", "Motorcycles", "Motorcycle wheels", "Total wheels"],
    "11-7": ["$1 coins", "Value", "50¢ coins", "Value", "Total value"],
    "11-8": ["2-litre bottles", "Volume", "1-litre bottles", "Volume", "Total volume"],
    "11-9": ["Adult tickets", "Cost", "Concession tickets", "Cost", "Total cost"],
    "11-10": ["Basketballs", "Cost", "Volleyballs", "Cost", "Total cost"],
    "11-11": ["Correct", "Marks earned", "Wrong", "Marks deducted", "Final score"],
    "11-12": ["Correct", "Marks earned", "Wrong", "Marks deducted", "Final score"],
  };

  const render = (headers, label) =>
    `<figure class="math-visual assumption-visual" role="img" aria-label="${label}"><div class="assumption-caption">Method 1 · Make a table</div><div class="assumption-table" style="--columns:${headers.length}">${headers.map((header) => `<strong>${header}</strong>`).join("")}${Array.from({ length: headers.length * 2 }, () => "<span></span>").join("")}</div><figcaption>Fill one guess per row, compare the total, then adjust.</figcaption></figure>`;

  Object.entries(tables).forEach(([id, headers]) => {
    illustrations[`assumption-table-${id}`] = () => render(headers, `Blank comparison table for Chapter 11 Practice ${id.split("-")[1]}`);
  });
})();
