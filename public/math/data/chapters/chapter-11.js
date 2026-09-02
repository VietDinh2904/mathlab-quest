(function registerChapter() {
  "use strict";

  const bilingual = (en, vi) => ({ en, vi });
  const question = (id, n, en, vi, labels, answers, hintEn, hintVi, guideEn, guideVi) => ({
    id,
    n: String(n),
    q: bilingual(en, vi),
    labels: bilingual(labels.en, labels.vi),
    ans: answers.map((answer) => [String(answer)]),
    hint: bilingual(hintEn, hintVi),
    guide: bilingual(guideEn, guideVi),
    visual: `assumption-table-${id}`,
  });

  window.BOOK_DATA = window.BOOK_DATA || {};
  window.BOOK_DATA["11"] = {
    title: "Chicken-and-Rabbit Problems",
    emoji: "🐔",
    pages: "97–105",
    theory: [
      ["Make a table", "List a sensible first guess, calculate its total, then adjust the guess systematically."],
      ["Assume all are one type", "Pretend every item is the same type and calculate the resulting total."],
      ["Measure the difference", "Compare the assumed total with the actual total, then divide by the difference made by replacing one item."],
      ["Find the other group", "Subtract the group already found from the total number of items."],
    ],
    examples: [
      { q: "80 chickens and rabbits have 250 legs altogether.", steps: ["Assume all 80 are chickens: 80×2=160 legs.", "The shortage is 90 legs; each rabbit adds 2 legs.", "90÷2=45 rabbits, leaving 35 chickens."], a: "35 chickens and 45 rabbits" },
      { q: "36 cars and motorcycles have 122 wheels altogether.", steps: ["Assume all are cars: 36×4=144 wheels.", "The excess is 22 wheels; replacing a car by a motorcycle removes 2.", "22÷2=11 motorcycles and 25 cars."], a: "25 cars and 11 motorcycles" },
      { q: "Mary has 40 fifty-cent and twenty-cent coins worth $11.", steps: ["Assume all are fifty-cent coins: value $20.", "The excess is $9; replacing one coin reduces the value by 30 cents.", "$9÷$0.30=30 twenty-cent coins and 10 fifty-cent coins."], a: "10 fifty-cent and 30 twenty-cent coins" },
      { q: "11 volleyballs and basketballs cost $445; prices are $35 and $45.", steps: ["Assume all are basketballs: 11×45=$495.", "The excess is $50; each replacement saves $10.", "There are 5 volleyballs and 6 basketballs."], a: "6 basketballs and 5 volleyballs" },
      { q: "A 20-question quiz awards 5 marks for correct and deducts 2 for wrong; Andy scores 72.", steps: ["All correct would score 100.", "The loss is 28; each wrong answer changes the score by 7.", "28÷7=4 wrong answers."], a: "4 wrong answers" },
    ],
    practice: [
      question("11-1", 1, "A comic book costs $4 and a science magazine costs $2. A teacher pays $28 for 10 comic books and science magazines. How many of each does he buy?", "Một truyện tranh giá 4 đô và một tạp chí khoa học giá 2 đô. Giáo viên trả 28 đô cho 10 quyển. Thầy mua bao nhiêu quyển mỗi loại?", { en: ["comic books", "science magazines"], vi: ["truyện tranh", "tạp chí khoa học"] }, [4, 6], "Assume all 10 are comic books.", "Giả sử cả 10 quyển đều là truyện tranh.", "10×4=40; the excess is 40−28=12. Each magazine saves 2, so there are 12÷2=6 magazines and 4 comic books.", "10×4=40; thừa 40−28=12. Mỗi tạp chí giảm 2 đô nên có 12÷2=6 tạp chí và 4 truyện tranh."),
      question("11-2", 2, "A farmer has 40 chickens and rabbits. There are 112 legs. How many chickens and rabbits are there?", "Một nông dân có 40 con gà và thỏ với tổng cộng 112 chân. Có bao nhiêu con mỗi loại?", { en: ["chickens", "rabbits"], vi: ["gà", "thỏ"] }, [24, 16], "Assume all 40 animals are chickens.", "Giả sử cả 40 con đều là gà.", "40×2=80; the shortage is 32 legs. Each rabbit adds 2 legs, so 16 rabbits and 24 chickens.", "40×2=80; thiếu 32 chân. Mỗi con thỏ thêm 2 chân nên có 16 thỏ và 24 gà."),
      question("11-3", 3, "A farmer has 60 chickens and rabbits. There are 200 legs. How many chickens and rabbits are there?", "Một nông dân có 60 con gà và thỏ với tổng cộng 200 chân. Có bao nhiêu con mỗi loại?", { en: ["chickens", "rabbits"], vi: ["gà", "thỏ"] }, [20, 40], "Assume all 60 animals are chickens.", "Giả sử cả 60 con đều là gà.", "60×2=120; the shortage is 80. Each rabbit adds 2 legs, so 40 rabbits and 20 chickens.", "60×2=120; thiếu 80 chân. Mỗi con thỏ thêm 2 chân nên có 40 thỏ và 20 gà."),
      question("11-4", 4, "There are 40 tricycles and bicycles in a park. There are 106 wheels. How many tricycles and bicycles are there?", "Trong công viên có 40 xe ba bánh và xe đạp với tổng cộng 106 bánh xe. Có bao nhiêu xe mỗi loại?", { en: ["tricycles", "bicycles"], vi: ["xe ba bánh", "xe đạp"] }, [26, 14], "Assume all 40 are tricycles.", "Giả sử cả 40 xe đều là xe ba bánh.", "40×3=120; the excess is 14 wheels. Each bicycle removes 1 wheel, so 14 bicycles and 26 tricycles.", "40×3=120; thừa 14 bánh. Mỗi xe đạp giảm 1 bánh nên có 14 xe đạp và 26 xe ba bánh."),
      question("11-5", 5, "A spider has 8 legs and a dragonfly has 6 legs. Eighteen spiders and dragonflies have 128 legs. How many of each are there?", "Nhện có 8 chân và chuồn chuồn có 6 chân. Có 18 con với tổng cộng 128 chân. Có bao nhiêu con mỗi loại?", { en: ["spiders", "dragonflies"], vi: ["nhện", "chuồn chuồn"] }, [10, 8], "Assume all 18 are spiders.", "Giả sử cả 18 con đều là nhện.", "18×8=144; the excess is 16. Each dragonfly removes 2 legs, so 8 dragonflies and 10 spiders.", "18×8=144; thừa 16 chân. Mỗi chuồn chuồn giảm 2 chân nên có 8 chuồn chuồn và 10 nhện."),
      question("11-6", 6, "There are 24 cars and motorcycles in a car park. There are 80 wheels altogether. How many cars and motorcycles are there?", "Bãi xe có 24 ô tô và xe máy với tổng cộng 80 bánh. Có bao nhiêu xe mỗi loại?", { en: ["cars", "motorcycles"], vi: ["ô tô", "xe máy"] }, [16, 8], "Assume all 24 are cars.", "Giả sử cả 24 xe đều là ô tô.", "24×4=96; the excess is 16 wheels. Each motorcycle removes 2, so 8 motorcycles and 16 cars.", "24×4=96; thừa 16 bánh. Mỗi xe máy giảm 2 bánh nên có 8 xe máy và 16 ô tô."),
      question("11-7", 7, "Dorothy has 50 fifty-cent and one-dollar coins worth $35. How many coins of each type are there?", "Dorothy có 50 đồng xu loại 50 xu và 1 đô, tổng trị giá 35 đô. Có bao nhiêu đồng mỗi loại?", { en: ["one-dollar coins", "fifty-cent coins"], vi: ["đồng 1 đô", "đồng 50 xu"] }, [20, 30], "Assume all 50 are one-dollar coins.", "Giả sử cả 50 đồng đều là loại 1 đô.", "The assumed value is $50, which is $15 too high. Each replacement saves $0.50, so 30 fifty-cent coins and 20 one-dollar coins.", "Giá trị giả sử là 50 đô, thừa 15 đô. Mỗi lần thay giảm 0,50 đô nên có 30 đồng 50 xu và 20 đồng 1 đô."),
      question("11-8", 8, "Forty litres of fruit juice are bottled in 30 two-litre and one-litre bottles. How many two-litre bottles are needed?", "40 lít nước trái cây được đóng vào 30 chai loại 2 lít và 1 lít. Cần bao nhiêu chai 2 lít?", { en: ["two-litre bottles", "one-litre bottles"], vi: ["chai 2 lít", "chai 1 lít"] }, [10, 20], "Assume all 30 bottles hold one litre.", "Giả sử cả 30 chai đều chứa 1 lít.", "Thirty one-litre bottles hold 30 L, leaving a shortage of 10 L. Each two-litre bottle adds 1 L, so 10 are needed.", "Ba mươi chai 1 lít chứa 30 lít, thiếu 10 lít. Mỗi chai 2 lít thêm 1 lít nên cần 10 chai."),
      question("11-9", 9, "An adult movie ticket costs $7 and a concession ticket costs $4. Patsy pays $63 for 12 tickets. How many adult tickets does she buy?", "Vé người lớn giá 7 đô và vé ưu đãi giá 4 đô. Patsy trả 63 đô cho 12 vé. Cô mua bao nhiêu vé người lớn?", { en: ["adult tickets"], vi: ["vé người lớn"] }, [5], "Assume all 12 are adult tickets.", "Giả sử cả 12 vé đều là vé người lớn.", "12×7=84; the excess is 21. Replacing one ticket saves 3, so 7 are concession tickets and 5 are adult tickets.", "12×7=84; thừa 21. Mỗi lần thay giảm 3 đô nên có 7 vé ưu đãi và 5 vé người lớn."),
      question("11-10", 10, "A school buys 12 volleyballs and basketballs for $340. Each basketball costs $30 and each volleyball costs $25. How many basketballs are bought?", "Trường mua 12 quả bóng chuyền và bóng rổ với giá 340 đô. Bóng rổ giá 30 đô, bóng chuyền giá 25 đô. Trường mua bao nhiêu bóng rổ?", { en: ["basketballs"], vi: ["bóng rổ"] }, [8], "Assume all 12 are basketballs.", "Giả sử cả 12 quả đều là bóng rổ.", "12×30=360; the excess is 20. Each volleyball saves 5, so 4 volleyballs and 8 basketballs.", "12×30=360; thừa 20. Mỗi bóng chuyền giảm 5 đô nên có 4 bóng chuyền và 8 bóng rổ."),
      question("11-11", 11, "A science test has 50 questions. Three marks are given for each correct answer and two marks are deducted for each wrong answer. Andrew scores 125. How many questions does he answer correctly?", "Bài kiểm tra có 50 câu. Mỗi câu đúng được 3 điểm và mỗi câu sai bị trừ 2 điểm. Andrew được 125 điểm. Bạn ấy trả lời đúng bao nhiêu câu?", { en: ["correct answers"], vi: ["câu đúng"] }, [45], "Compare with the score if all answers were correct.", "So sánh với điểm số nếu tất cả câu đều đúng.", "All correct gives 150. The loss is 25, and each wrong answer loses 5 relative marks. Thus 5 are wrong and 45 are correct.", "Đúng hết được 150 điểm. Thiếu 25 điểm; mỗi câu sai làm giảm 5 điểm so với giả sử. Vậy sai 5 và đúng 45 câu."),
      question("11-12", 12, "A mathematics quiz has 20 questions. Five marks are awarded for each correct answer and two marks are deducted for each wrong answer. Kathy scores 79. How many questions does she answer correctly?", "Bài toán có 20 câu. Mỗi câu đúng được 5 điểm và mỗi câu sai bị trừ 2 điểm. Kathy được 79 điểm. Bạn ấy trả lời đúng bao nhiêu câu?", { en: ["correct answers"], vi: ["câu đúng"] }, [17], "Compare with the score if all answers were correct.", "So sánh với điểm số nếu tất cả câu đều đúng.", "All correct gives 100. The loss is 21, and each wrong answer changes the score by 7. Thus 3 are wrong and 17 are correct.", "Đúng hết được 100 điểm. Thiếu 21 điểm; mỗi câu sai làm giảm 7 điểm. Vậy sai 3 và đúng 17 câu."),
    ],
    check: ["11-2", "11-4", "11-6", "11-10", "11-12"],
  };
})();
