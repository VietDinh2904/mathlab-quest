(function registerChapterElevenIllustrations() {
  "use strict";

  const illustrations = (window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {});
  const isVi = () => document.documentElement.lang !== "en";
  const local = (vi, en) => isVi() ? vi : en;
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
  const tablesVi = {
    "11-1": ["Truyện tranh", "Giá", "Tạp chí khoa học", "Giá", "Tổng tiền"],
    "11-2": ["Gà", "Chân gà", "Thỏ", "Chân thỏ", "Tổng số chân"],
    "11-3": ["Gà", "Chân gà", "Thỏ", "Chân thỏ", "Tổng số chân"],
    "11-4": ["Xe ba bánh", "Số bánh", "Xe đạp", "Số bánh", "Tổng số bánh"],
    "11-5": ["Nhện", "Chân nhện", "Chuồn chuồn", "Chân chuồn chuồn", "Tổng số chân"],
    "11-6": ["Ô tô", "Bánh ô tô", "Xe máy", "Bánh xe máy", "Tổng số bánh"],
    "11-7": ["Đồng $1", "Giá trị", "Đồng 50¢", "Giá trị", "Tổng giá trị"],
    "11-8": ["Chai 2 lít", "Thể tích", "Chai 1 lít", "Thể tích", "Tổng thể tích"],
    "11-9": ["Vé người lớn", "Giá", "Vé ưu đãi", "Giá", "Tổng tiền"],
    "11-10": ["Bóng rổ", "Giá", "Bóng chuyền", "Giá", "Tổng tiền"],
    "11-11": ["Câu đúng", "Điểm cộng", "Câu sai", "Điểm trừ", "Điểm cuối"],
    "11-12": ["Câu đúng", "Điểm cộng", "Câu sai", "Điểm trừ", "Điểm cuối"]
  };

  const render = (headers, label) =>
    `<figure class="math-visual assumption-visual" role="img" aria-label="${label}"><div class="assumption-caption">${local("Phương pháp 1 · Lập bảng", "Method 1 · Make a table")}</div><div class="assumption-table" style="--columns:${headers.length}">${headers.map((header) => `<strong>${header}</strong>`).join("")}${Array.from({ length: headers.length * 2 }, () => "<span></span>").join("")}</div><figcaption>${local("Điền một giả thiết vào mỗi hàng, so sánh tổng rồi điều chỉnh.", "Fill one guess per row, compare the total, then adjust.")}</figcaption></figure>`;

  Object.entries(tables).forEach(([id, headers]) => {
    illustrations[`assumption-table-${id}`] = () => render(isVi() ? tablesVi[id] : headers, local(`Bảng so sánh trống cho câu ${id.split("-")[1]} chương 11`, `Blank comparison table for Chapter 11 Practice ${id.split("-")[1]}`));
  });
})();
