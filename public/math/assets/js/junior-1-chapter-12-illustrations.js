(function registerJuniorOneChapterTwelveIllustrations() {
  "use strict";
  const art = window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {};
  const isVi = () => document.documentElement.lang !== "en";
  const t = (vi, en) => isVi() ? vi : en;
  const esc = (value) => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
  const palette = ["#b9dcff", "#ffd87a", "#92dfca", "#ffaaa0", "#d8c2ff", "#bce8a9"];

  function model(title, rows, total, note = "") {
    const lines = rows.map((row, rowIndex) => {
      const parts = row.parts.map((part, partIndex) => {
        const fill = part.fill || palette[(rowIndex + partIndex) % palette.length];
        return `<span style="flex:${part.units || 1};min-width:${part.min || 42}px;display:grid;place-items:center;padding:12px 8px;border-right:2px solid #17365d;background:${fill};font-weight:900;color:#17365d">${esc(part.text)}</span>`;
      }).join("");
      return `<div style="display:grid;grid-template-columns:minmax(76px,130px) minmax(0,1fr);align-items:center;gap:12px"><strong style="text-align:right;color:#17365d">${esc(row.label)}</strong><div style="display:flex;min-height:52px;border:3px solid #17365d;border-radius:12px;overflow:hidden;background:#fff">${parts}</div></div>`;
    }).join("");
    return `<div class="book-visual"><div class="book-visual-title">${esc(title)}</div><div style="display:grid;gap:14px;max-width:760px;margin:auto">${lines}</div>${total ? `<div style="margin:16px auto 0;width:max-content;max-width:100%;padding:8px 18px;border:2px dashed #17365d;border-radius:999px;color:#17365d;font-weight:900">${esc(total)}</div>` : ""}${note ? `<p style="margin:12px 0 0;text-align:center;color:#386087;font-weight:800">${esc(note)}</p>` : ""}</div>`;
  }

  function sumDifference(labels, smaller, difference, total) {
    return model(t("Sơ đồ tổng và hiệu", "Sum-and-difference model"), [
      { label: labels[0], parts: [{ text: smaller, units: 4, fill: "#b9dcff" }, { text: `+${difference}`, units: 1, fill: "#ffd87a" }] },
      { label: labels[1], parts: [{ text: smaller, units: 4, fill: "#b9dcff" }] },
    ], `${t("Tổng", "Total")}: ${total}`, `${total} − ${difference} → ${t("hai phần bằng nhau", "two equal parts")}`);
  }

  function ratio(labels, units, unitValue, total) {
    return model(t("Sơ đồ phần bằng nhau", "Equal-unit model"), labels.map((label, index) => ({
      label,
      parts: Array.from({ length: units[index] }, () => ({ text: unitValue, units: 1, fill: "#b9dcff" })),
    })), total ? `${t("Tổng", "Total")}: ${total}` : "", `${t("Một phần", "One unit")}: ${unitValue}`);
  }

  function threeBars(labels, bases, extras, total) {
    return model(t("Sơ đồ ba đại lượng", "Three-quantity model"), labels.map((label, index) => ({
      label,
      parts: [{ text: bases[index], units: 4, fill: "#b9dcff" }, ...(extras[index] ? [{ text: `+${extras[index]}`, units: 1, fill: "#ffd87a" }] : [])],
    })), `${t("Tổng", "Total")}: ${total}`, t("Bớt các phần hơn rồi chia đều", "Remove the extra parts, then divide equally"));
  }

  function transfer(title, beforeRows, afterRows, moveText) {
    return `<div class="book-visual"><div class="book-visual-title">${esc(title)}</div><div style="display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap"><div style="flex:1 1 320px;min-width:min(100%,320px)">${model(t("Lúc đầu", "Before"), beforeRows, "", "")}</div><div style="flex:0 0 90px;display:grid;place-items:center;color:#17365d;font-size:2rem;font-weight:900">→<small style="font-size:.8rem;max-width:110px;text-align:center">${esc(moveText)}</small></div><div style="flex:1 1 320px;min-width:min(100%,320px)">${model(t("Sau khi chuyển", "After"), afterRows, "", "")}</div></div></div>`;
  }

  const row = (label, value, units = 4) => ({ label, parts: [{ text: value, units, fill: "#b9dcff" }] });

  art["j1-model-example-1"] = () => sumDifference(["Amanda", "Nancy"], "$25", "$10", "$60");
  art["j1-model-example-2"] = () => sumDifference([t("Số thứ nhất", "First"), t("Số thứ hai", "Second")], "40", "20", "100");
  art["j1-model-example-3"] = () => ratio(["Natalie", "Anne"], [1, 3], "15", "");
  art["j1-model-example-4"] = () => ratio(["David", "John"], [4, 1], "20", "100");
  art["j1-model-example-5"] = () => threeBars([t("Gà", "Chickens"), t("Ngỗng", "Geese"), t("Vịt", "Ducks")], [6, 6, 6], [0, 2, 4], "24");
  art["j1-model-example-6"] = () => transfer(t("Chuyển để bằng nhau", "Transfer to make equal"), [row("Sheena", "26", 5), row("Anne", "14", 3)], [row("Sheena", "20"), row("Anne", "20")], t("Chuyển 6 thiệp", "Move 6 cards"));

  art["j1-model-1"] = () => sumDifference([t("Túi lớn", "Larger bag"), t("Túi nhỏ", "Smaller bag")], "50", "10", "110");
  art["j1-model-2"] = () => sumDifference([t("Số lớn", "Larger"), t("Số bé", "Smaller")], "90", "20", "200");
  art["j1-model-3"] = () => sumDifference(["Edward", "Melvin"], "$35", "$10", "$80");
  art["j1-model-4"] = () => ratio(["Alison", "Anna"], [1, 4], "$20", "");
  art["j1-model-5"] = () => ratio(["Sherry", "Louisa"], [3, 1], "15", "60");
  art["j1-model-6"] = () => ratio([t("Nông dân A", "Farmer A"), t("Nông dân B", "Farmer B")], [6, 1], "20", "140");
  art["j1-model-7"] = () => threeBars([t("Đào", "Peaches"), t("Lê", "Pears"), t("Táo", "Apples")], [16, 16, 16], [0, 3, 6], "57");
  art["j1-model-8"] = () => threeBars(["Wilfred", "Peter", "Bobbie"], [17, 17, 17], [0, 5, 4], "$60");
  art["j1-model-9"] = () => transfer(t("Suy ngược phép chuyển", "Reverse the transfer"), [row("Bill", "30", 5), row("Jack", "22", 4)], [row("Bill", "26"), row("Jack", "26")], t("Bill cho 4 quyển", "Bill gives 4 books"));
  art["j1-model-10"] = () => transfer(t("Hai bể cá", "Two fish tanks"), [row(t("Bể 1", "Tank 1"), "23", 5), row(t("Bể 2", "Tank 2"), "17", 4)], [row(t("Bể 1", "Tank 1"), "20"), row(t("Bể 2", "Tank 2"), "20")], t("Chuyển 3 con", "Move 3 fish"));
  art["j1-model-11"] = () => transfer(t("Hai rạp chiếu", "Two theatres"), [row(t("Rạp 1", "Theatre 1"), "120", 5), row(t("Rạp 2", "Theatre 2"), "98", 4)], [row(t("Rạp 1", "Theatre 1"), "109"), row(t("Rạp 2", "Theatre 2"), "109")], t("Chuyển 11 người", "Move 11 patrons"));
  art["j1-model-12"] = () => model(t("Chia đều học sinh", "Equalise the students"), [row("A", "42 → 30"), row("B", "34 → 30"), row("C", "14 → 30")], `${t("Mỗi xe", "Each bus")}: 30`, t("A chuyển 12 và B chuyển 4 sang C", "A moves 12 and B moves 4 to C"));
  art["j1-model-13"] = () => model(t("Chia đều số vẹt", "Equalise the parrots"), [row("A", "12 → 14"), row("B", "19 → 14"), row("C", "11 → 14")], `${t("Mỗi lồng", "Each cage")}: 14`, t("B chuyển 2 sang A và 3 sang C", "B moves 2 to A and 3 to C"));
  art["j1-model-14"] = () => model(t("Chia đều số cam", "Equalise the oranges"), [row("A", "25 → 27"), row("B", "33 → 27"), row("C", "23 → 27")], `${t("Mỗi giỏ", "Each basket")}: 27`, t("B chuyển 2 sang A và 4 sang C", "B moves 2 to A and 4 to C"));
  art["j1-model-15"] = () => transfer(t("Suy ngược số trứng", "Reverse the egg transfer"), [row(t("Giỏ 1", "Basket 1"), "26", 5), row(t("Giỏ 2", "Basket 2"), "14", 3)], [row(t("Giỏ 1", "Basket 1"), "21", 5), row(t("Giỏ 2", "Basket 2"), "19", 4)], t("Chuyển 5 quả", "Move 5 eggs"));
  art["j1-model-16"] = () => transfer(t("Chim sẻ trên hai cành", "Sparrows on two branches"), [row(t("Cành 1", "Branch 1"), t("nhiều hơn 5", "5 more"), 5), row(t("Cành 2", "Branch 2"), t("mốc", "base"), 4)], [row(t("Cành 1", "Branch 1"), t("ít hơn 3", "3 fewer"), 4), row(t("Cành 2", "Branch 2"), t("nhiều hơn 3", "3 more"), 5)], t("4 con bay sang", "4 birds move"));

  art["j1-model-extra-1"] = () => sumDifference([t("Hộp lớn", "Larger box"), t("Hộp nhỏ", "Smaller box")], "33", "8", "74");
  art["j1-model-extra-2"] = () => ratio(["Mai", "Linh"], [1, 5], "12", "");
  art["j1-model-extra-3"] = () => threeBars([t("Lọ A", "Jar A"), t("Lọ B", "Jar B"), t("Lọ C", "Jar C")], [21, 21, 21], [0, 3, 6], "72");
  art["j1-model-extra-4"] = () => transfer(t("Chuyển để bằng nhau", "Transfer to make equal"), [row("Lan", "46", 5), row("Minh", "30", 3)], [row("Lan", "38"), row("Minh", "38")], t("Chuyển 8 thẻ", "Move 8 cards"));
  art["j1-model-extra-5"] = () => transfer(t("Suy ngược phép chuyển", "Reverse the transfer"), [row(t("Kệ trên", "Top shelf"), "43", 5), row(t("Kệ dưới", "Bottom shelf"), "25", 3)], [row(t("Kệ trên", "Top shelf"), "36", 5), row(t("Kệ dưới", "Bottom shelf"), "32", 4)], t("Chuyển 7 quyển", "Move 7 books"));
})();
