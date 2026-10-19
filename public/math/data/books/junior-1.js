(function registerJuniorOne() {
  "use strict";

  const titles = [
    ["Tell Me the Time!", "Mấy giờ rồi?", "🕰️", "1–9"],
    ["Problems from Planting Trees – Intervals", "Bài toán trồng cây – Khoảng cách", "🌳", "10–19"],
    ["Addition", "Phép cộng", "➕", "20–25"],
    ["Solve by Comparison and Replacement", "So sánh và thay thế", "⚖️", "26–34"],
    ["Age Problems", "Bài toán tuổi", "🎂", "35–43"],
    ["Division", "Phép chia", "➗", "44–54"],
    ["Chicken-and-Rabbit Problems", "Bài toán gà và thỏ", "🐔", "55–63"],
    ["Looking for a Pattern", "Tìm quy luật", "🔎", "64–71"],
    ["Counting", "Phép đếm", "🧮", "72–79"],
    ["Logic", "Suy luận logic", "🧠", "80–87"],
    ["Make a List, Make a Table", "Lập danh sách, lập bảng", "📋", "88–96"],
    ["Using Model", "Giải bằng sơ đồ", "📊", "97–104"],
    ["In Search of a Series", "Khám phá dãy số", "🔢", "105–116"],
    ["What Comes Next?", "Hình nào tiếp theo?", "🧩", "117–123"],
    ["IQ Maths", "Toán IQ", "💡", "124–131"],
    ["Geometry", "Hình học", "📐", "132–140"],
    ["Odd and Even Numbers", "Số chẵn và số lẻ", "🔵", "141–147"],
    ["Queuing Problems", "Bài toán xếp hàng", "🧍", "148–153"],
    ["Working Backwards", "Suy ngược", "↩️", "154–160"],
    ["Pigeonhole Principle", "Nguyên lý chuồng bồ câu", "🕊️", "161–166"],
    ["Simple Speed", "Bài toán vận tốc", "🚲", "167–173"],
    ["Observation", "Quan sát", "👀", "174–181"],
  ];

  const chapters = {};
  const exercises = {};
  const solutions = {};
  const extra = {};
  titles.forEach(([en, vi, emoji, pages], index) => {
    const id = index + 1;
    chapters[id] = {
      id, emoji, pages, available: id === 1,
      title: { en, vi },
      tagline: id === 1
        ? { en: "Read clocks and solve time intervals", vi: "Đọc đồng hồ và giải các khoảng thời gian" }
        : { en: "This chapter is being illustrated from the original book", vi: "Chương này đang được dựng hình từ sách gốc" },
      theory: id === 1 ? [
        [{ en: "Read an analogue clock", vi: "Đọc đồng hồ kim" }, { en: "The long hand shows minutes; the short hand shows hours.", vi: "Kim dài chỉ phút; kim ngắn chỉ giờ." }],
        [{ en: "Find elapsed time", vi: "Tìm thời gian đã trôi qua" }, { en: "Move from the start time to the end time in easy jumps.", vi: "Đi từ giờ bắt đầu đến giờ kết thúc bằng các bước tròn giờ, tròn phút." }],
        [{ en: "Count repeated events", vi: "Đếm các lần lặp lại" }, { en: "Count both the first and last event when they are included.", vi: "Nếu có cả lần đầu và lần cuối, số lần thường nhiều hơn số khoảng 1 đơn vị." }],
      ] : [],
      examples: id === 1 ? [
        { q: { en: "A concert starts at 8:30 pm and ends at 10:15 pm.", vi: "Buổi hòa nhạc bắt đầu lúc 8:30 tối và kết thúc lúc 10:15 tối." }, steps: [{ en: "8:30 → 9:30 is 1 hour.", vi: "8:30 → 9:30 là 1 giờ." }, { en: "9:30 → 10:15 is 45 minutes.", vi: "9:30 → 10:15 là 45 phút." }], a: { en: "1 hour 45 minutes", vi: "1 giờ 45 phút" } },
        { q: { en: "Trains leave every 5 minutes for 30 minutes.", vi: "Tàu rời ga mỗi 5 phút trong 30 phút." }, steps: [{ en: "30 ÷ 5 = 6 intervals.", vi: "30 ÷ 5 = 6 khoảng." }, { en: "Include the first train: 6 + 1.", vi: "Tính cả chuyến đầu tiên: 6 + 1." }], a: { en: "7 trains", vi: "7 chuyến tàu" } },
      ] : [],
      check: id === 1 ? ["j1-1a", "j1-2a", "j1-3", "j1-7", "j1-11"] : [],
    };
    exercises[id] = [];
    solutions[id] = {};
    extra[id] = [];
  });

  const clockParts = [
    ["1(a)", "j1-1a", "7:15 am", "clock-j1-0715"],
    ["1(b)", "j1-1b", "2:45 pm", "clock-j1-1445"],
    ["1(c)", "j1-1c", "5:55 am", "clock-j1-0555"],
    ["1(d)", "j1-1d", "11:40 pm", "clock-j1-2340"],
    ["1(e)", "j1-1e", "6:50 am", "clock-j1-0650"],
    ["1(f)", "j1-1f", "6:15 pm", "clock-j1-1815"],
  ];
  clockParts.forEach(([n, id, answer, visual]) => {
    exercises[1].push({ n, id, source: "pdf", visual, q: { en: "What time is shown on the clock?", vi: "Đồng hồ chỉ mấy giờ?" } });
    solutions[1][id] = { answers: [[answer, answer.replace("am", "a.m.").replace("pm", "p.m.")]], hint: { en: "Read the long minute hand first.", vi: "Đọc kim phút dài trước." }, guide: { en: `The clock shows ${answer}.`, vi: `Đồng hồ chỉ ${answer}.` } };
  });

  const add = (n, id, qEn, qVi, answers, hintEn, hintVi, guideEn, guideVi, visual) => {
    exercises[1].push({ n, id, source: "pdf", q: { en: qEn, vi: qVi }, ...(visual ? { visual } : {}) });
    solutions[1][id] = { answers: answers.map((a) => Array.isArray(a) ? a : [a]), hint: { en: hintEn, vi: hintVi }, guide: { en: guideEn, vi: guideVi } };
  };
  add("2(a)", "j1-2a", "Write the time 25 minutes after 2:00 pm.", "Viết thời gian sau 2 giờ chiều 25 phút.", ["2:25 pm"], "Add 25 minutes.", "Cộng thêm 25 phút.", "2:00 pm + 25 minutes = 2:25 pm.", "2:00 chiều + 25 phút = 2:25 chiều.", "timeline-j1-2a");
  add("2(b)", "j1-2b", "Write the time 40 minutes before 5:45 pm.", "Viết thời gian trước 5:45 chiều 40 phút.", ["5:05 pm"], "Move backwards 40 minutes.", "Lùi lại 40 phút.", "5:45 pm − 40 minutes = 5:05 pm.", "5:45 chiều − 40 phút = 5:05 chiều.", "timeline-j1-2b");
  add("3", "j1-3", "A movie starts at 2:30 pm and ends at 4:05 pm. How long is it?", "Phim bắt đầu lúc 2:30 chiều và kết thúc lúc 4:05 chiều. Phim kéo dài bao lâu?", [["1 hour 35 minutes", "1 h 35 min", "1 giờ 35 phút"]], "Jump to 3:30, then to 4:05.", "Đi đến 3:30 rồi đến 4:05.", "1 hour + 35 minutes = 1 hour 35 minutes.", "1 giờ + 35 phút = 1 giờ 35 phút.", "timeline-j1-3");
  add("4", "j1-4", "A shop opens at 11:00 am and closes at 9:30 pm. How long is it open?", "Cửa hàng mở lúc 11 giờ sáng và đóng lúc 9:30 tối. Cửa hàng mở bao lâu?", [["10 hours 30 minutes", "10 h 30 min", "10 giờ 30 phút"]], "Count to 9:00 pm, then add 30 minutes.", "Đếm đến 9 giờ tối rồi cộng 30 phút.", "11:00 am → 9:00 pm is 10 hours; add 30 minutes.", "11 giờ sáng → 9 giờ tối là 10 giờ; cộng thêm 30 phút.");
  add("5", "j1-5", "How much time passes from 2:30 to 5:45?", "Từ 2:30 đến 5:45 là bao lâu?", [["3 hours 15 minutes", "3 h 15 min", "3 giờ 15 phút"]], "Count whole hours, then minutes.", "Đếm giờ tròn rồi đếm phút.", "2:30 → 5:30 is 3 hours; add 15 minutes.", "2:30 → 5:30 là 3 giờ; cộng 15 phút.", "two-clocks-j1-5");
  add("6", "j1-6", "The whole trip takes 50 minutes and finishes at 2:50 pm. When did it start?", "Cả chuyến đi mất 50 phút và kết thúc lúc 2:50 chiều. Chuyến đi bắt đầu lúc nào?", [["2:00 pm", "2 pm"]], "Work backwards from 2:50 pm.", "Suy ngược từ 2:50 chiều.", "2:50 pm − 50 minutes = 2:00 pm.", "2:50 chiều − 50 phút = 2:00 chiều.", "timeline-j1-6");
  add("7", "j1-7", "Complete the clock pattern: 7:20, 8:10, 8:50, __, __.", "Hoàn thành dãy thời gian: 7:20, 8:10, 8:50, __, __.", ["9:20", "9:40"], "The jumps decrease by 10 minutes.", "Mỗi bước nhảy giảm 10 phút.", "+50, +40, +30, +20 minutes gives 9:20 and 9:40.", "+50, +40, +30, +20 phút cho 9:20 và 9:40.", "clock-pattern-j1-7");
  add("8", "j1-8", "Terry arrives at 8:38 am. The next bus leaves at 8:45 am. How many minutes does he wait?", "Terry đến lúc 8:38 sáng. Xe buýt tiếp theo rời lúc 8:45. Bạn ấy chờ bao nhiêu phút?", ["7"], "Subtract the minutes.", "Lấy số phút trừ nhau.", "45 − 38 = 7 minutes.", "45 − 38 = 7 phút.");
  add("10", "j1-10", "Trains leave every 40 minutes. The first leaves at 6:30 am. When does the third train leave?", "Tàu rời ga mỗi 40 phút. Chuyến đầu lúc 6:30 sáng. Chuyến thứ ba rời lúc nào?", ["7:50 am"], "The third train is two intervals after the first.", "Chuyến thứ ba cách chuyến đầu hai khoảng.", "6:30 + 40 + 40 = 7:50 am.", "6:30 + 40 + 40 = 7:50 sáng.");
  add("11", "j1-11", "Trains leave every 6 minutes for one hour, including the first train. How many trains leave?", "Tàu rời ga mỗi 6 phút trong một giờ, tính cả chuyến đầu. Có bao nhiêu chuyến?", ["11"], "Count intervals, then include the first train.", "Đếm số khoảng rồi tính cả chuyến đầu.", "60 ÷ 6 = 10 intervals, so 10 + 1 = 11 trains.", "60 ÷ 6 = 10 khoảng, nên có 10 + 1 = 11 chuyến.");
  add("12", "j1-12", "Coaches leave every 1½ hours. The first leaves at 5:00 am. When does the fourth leave?", "Xe khách rời bến mỗi 1 giờ 30 phút. Chuyến đầu lúc 5:00 sáng. Chuyến thứ tư rời lúc nào?", ["9:30 am"], "The fourth coach is three intervals after the first.", "Chuyến thứ tư cách chuyến đầu ba khoảng.", "5:00 + 3 × 1½ hours = 9:30 am.", "5:00 + 3 × 1 giờ 30 phút = 9:30 sáng.");
  add("13", "j1-13", "A clock chimes once at 1 o’clock, twice at 2 o’clock, and so on. How many chimes from 1 o’clock to 6 o’clock?", "Đồng hồ điểm 1 tiếng lúc 1 giờ, 2 tiếng lúc 2 giờ,... Tổng cộng điểm bao nhiêu tiếng từ 1 giờ đến 6 giờ?", ["21"], "Add 1 through 6.", "Cộng các số từ 1 đến 6.", "1 + 2 + 3 + 4 + 5 + 6 = 21.", "1 + 2 + 3 + 4 + 5 + 6 = 21.");

  extra[1] = [
    { id: "j1-extra-1", source: "ai", level: "warmup", q: { en: "What time is 35 minutes after 9:20 am?", vi: "35 phút sau 9:20 sáng là mấy giờ?" }, answers: [["9:55 am"]], hint: { en: "Add 35 minutes.", vi: "Cộng 35 phút." }, steps: { en: ["9:20 + 35 minutes = 9:55."], vi: ["9:20 + 35 phút = 9:55."] } },
    { id: "j1-extra-2", source: "ai", level: "warmup", q: { en: "How many minutes pass from 10:45 to 11:10?", vi: "Từ 10:45 đến 11:10 là bao nhiêu phút?" }, answers: [["25"]], hint: { en: "Count to 11:00 first.", vi: "Đếm đến 11:00 trước." }, steps: { en: ["15 + 10 = 25 minutes."], vi: ["15 + 10 = 25 phút."] } },
    { id: "j1-extra-3", source: "ai", level: "core", q: { en: "A bell rings every 10 minutes from 8:00 through 9:00. How many times does it ring?", vi: "Chuông reo mỗi 10 phút từ 8:00 đến hết 9:00. Chuông reo bao nhiêu lần?" }, answers: [["7"]], hint: { en: "There are 6 intervals.", vi: "Có 6 khoảng thời gian." }, steps: { en: ["60 ÷ 10 + 1 = 7."], vi: ["60 ÷ 10 + 1 = 7."] } },
    { id: "j1-extra-4", source: "ai", level: "core", q: { en: "A lesson lasts 1 hour 20 minutes and starts at 3:15 pm. When does it end?", vi: "Một tiết học dài 1 giờ 20 phút, bắt đầu lúc 3:15 chiều. Khi nào kết thúc?" }, answers: [["4:35 pm"]], hint: { en: "Add one hour, then 20 minutes.", vi: "Cộng 1 giờ rồi cộng 20 phút." }, steps: { en: ["3:15 → 4:15 → 4:35 pm."], vi: ["3:15 → 4:15 → 4:35 chiều."] } },
    { id: "j1-extra-5", source: "ai", level: "challenge", q: { en: "The fifth bus leaves at 10:10 am. Buses leave every 25 minutes. When did the first bus leave?", vi: "Chuyến xe thứ năm rời lúc 10:10 sáng. Xe chạy mỗi 25 phút. Chuyến đầu rời lúc nào?" }, answers: [["8:30 am"]], hint: { en: "Work back four intervals.", vi: "Lùi lại bốn khoảng." }, steps: { en: ["4 × 25 = 100 minutes.", "10:10 − 1 hour 40 minutes = 8:30 am."], vi: ["4 × 25 = 100 phút.", "10:10 − 1 giờ 40 phút = 8:30 sáng."] } },
  ];

  chapters[2] = {
    id: 2, emoji: "🌳", pages: "10–19", available: true,
    title: { en: "Problems from Planting Trees – Intervals", vi: "Bài toán trồng cây – Khoảng cách" },
    tagline: { en: "Count the gaps between objects before using the distance", vi: "Đếm số khoảng giữa các vật trước khi tính độ dài" },
    theory: [
      [{ en: "Objects and intervals", vi: "Số vật và số khoảng" }, { en: "For objects in one straight row, intervals = objects − 1.", vi: "Các vật xếp trên một hàng thẳng tạo số khoảng bằng số vật trừ 1." }],
      [{ en: "Distance between positions", vi: "Khoảng cách giữa hai vị trí" }, { en: "Count how many gaps lie between the two positions, then multiply by one gap's length.", vi: "Đếm số khoảng nằm giữa hai vị trí rồi nhân với độ dài một khoảng." }],
      [{ en: "Cuts and pieces", vi: "Số lần cắt và số đoạn" }, { en: "Cutting one object into n pieces normally needs n − 1 cuts.", vi: "Cắt một vật thành n đoạn thường cần n − 1 lần cắt." }],
      [{ en: "Repeated events", vi: "Các sự kiện lặp lại" }, { en: "The number of events is one more than the number of intervals when both endpoints are included.", vi: "Khi tính cả hai đầu, số lần xảy ra bằng số khoảng cộng 1." }],
    ],
    examples: [
      { q: { en: "Five matchsticks are placed at equal distances. How many intervals are there?", vi: "Năm que diêm được đặt cách đều nhau. Có bao nhiêu khoảng?" }, steps: [{ en: "Five points create 5 − 1 = 4 gaps.", vi: "Năm vị trí tạo 5 − 1 = 4 khoảng." }], a: { en: "4 intervals", vi: "4 khoảng" }, visual: "j1-interval-example-1" },
      { q: { en: "Six knots are tied on a rope. How many intervals are there from the first knot to the sixth?", vi: "Có 6 nút thắt trên một sợi dây. Từ nút thứ nhất đến nút thứ sáu có bao nhiêu khoảng?" }, steps: [{ en: "6 − 1 = 5 intervals.", vi: "6 − 1 = 5 khoảng." }], a: { en: "5 intervals", vi: "5 khoảng" }, visual: "j1-interval-example-2" },
      { q: { en: "Each staircase has 12 steps. How many steps do 3 such staircases have?", vi: "Mỗi cầu thang có 12 bậc. Ba cầu thang như vậy có bao nhiêu bậc?" }, steps: [{ en: "3 × 12 = 36.", vi: "3 × 12 = 36." }], a: "36", visual: "j1-interval-example-3" },
      { q: { en: "Six trees are 4 m apart. How far is the sixth tree from the first?", vi: "Sáu cây cách nhau 4 m. Cây thứ sáu cách cây thứ nhất bao xa?" }, steps: [{ en: "There are 5 gaps.", vi: "Có 5 khoảng." }, { en: "5 × 4 = 20 m.", vi: "5 × 4 = 20 m." }], a: { en: "20 m", vi: "20 m" }, visual: "j1-interval-example-4" },
      { q: { en: "The first and eighth trees are 21 m apart. Find the equal spacing.", vi: "Cây thứ nhất và cây thứ tám cách nhau 21 m. Tìm khoảng cách đều giữa hai cây liền nhau." }, steps: [{ en: "Eight trees create 7 gaps.", vi: "Tám cây tạo 7 khoảng." }, { en: "21 ÷ 7 = 3 m.", vi: "21 ÷ 7 = 3 m." }], a: { en: "3 m", vi: "3 m" }, visual: "j1-interval-example-5" },
    ],
    check: ["j1-c2-1", "j1-c2-2", "j1-c2-3", "j1-c2-4", "j1-c2-5"],
  };

  const chapterTwo = [
    ["1", "Eight trees are planted at equal distances along a road. How many intervals are there?", "Có 8 cây được trồng cách đều dọc theo một con đường. Có bao nhiêu khoảng?", "7", ["Eight trees make 8 − 1 = 7 intervals."], ["8 cây tạo 8 − 1 = 7 khoảng."], "j1-interval-1"],
    ["2", "There are 8 lamp posts along a road. Two trees stand between every two lamp posts. How many trees are there?", "Có 8 cột đèn dọc theo một con đường. Giữa mỗi hai cột đèn có 2 cây. Có tất cả bao nhiêu cây?", "14", ["Eight lamp posts create 7 intervals.", "7 × 2 = 14 trees."], ["8 cột đèn tạo 7 khoảng.", "7 × 2 = 14 cây."], "j1-interval-2"],
    ["3", "There are 4 trees along the road in front of Edward's house. The trees are 3 m apart. How far is the fourth tree from the first?", "Có 4 cây dọc theo con đường trước nhà Edward. Các cây cách nhau 3 m. Cây thứ tư cách cây thứ nhất bao xa?", "9", ["From the first to the fourth tree there are 3 gaps.", "3 × 3 = 9 m."], ["Từ cây thứ nhất đến cây thứ tư có 3 khoảng.", "3 × 3 = 9 m."], "j1-interval-3"],
    ["4", "There are 5 lamp posts along the street in front of Melissa's house. They are 5 m apart. How far is the fourth lamp post from the first?", "Có 5 cột đèn dọc theo đường trước nhà Melissa. Các cột cách nhau 5 m. Cột thứ tư cách cột thứ nhất bao xa?", "15", ["Positions 1 to 4 contain 3 gaps.", "3 × 5 = 15 m."], ["Từ vị trí 1 đến 4 có 3 khoảng.", "3 × 5 = 15 m."], "j1-interval-4"],
    ["5", "Jimmy ties 5 knots on a rope. The knots are 20 cm apart. How far is the fifth knot from the first?", "Jimmy thắt 5 nút trên một sợi dây. Các nút cách nhau 20 cm. Nút thứ năm cách nút thứ nhất bao xa?", "80", ["Five knots create 4 gaps.", "4 × 20 = 80 cm."], ["5 nút tạo 4 khoảng.", "4 × 20 = 80 cm."], "j1-interval-5"],
    ["6", "Seven trees are planted 3 m apart. How far is the sixth tree from the second?", "Bảy cây được trồng cách nhau 3 m. Cây thứ sáu cách cây thứ hai bao xa?", "12", ["From position 2 to position 6 there are 6 − 2 = 4 gaps.", "4 × 3 = 12 m."], ["Từ vị trí 2 đến vị trí 6 có 6 − 2 = 4 khoảng.", "4 × 3 = 12 m."], "j1-interval-6"],
    ["7", "Stella lines 9 coins up on a table. Each coin is 10 cm apart. How far is the ninth coin from the first?", "Stella xếp 9 đồng xu thành một hàng trên bàn. Mỗi đồng xu cách nhau 10 cm. Đồng thứ chín cách đồng thứ nhất bao xa?", "80", ["Nine coins create 8 gaps.", "8 × 10 = 80 cm."], ["9 đồng xu tạo 8 khoảng.", "8 × 10 = 80 cm."], "j1-interval-7"],
    ["8", "Peter takes 5 minutes to saw a plank into two pieces. How many minutes will he take to saw a plank of the same length into four pieces?", "Peter mất 5 phút để cưa một tấm ván thành 2 đoạn. Peter cần bao nhiêu phút để cưa tấm ván cùng loại thành 4 đoạn?", "15", ["Two pieces need 1 cut, so each cut takes 5 minutes.", "Four pieces need 3 cuts.", "3 × 5 = 15 minutes."], ["2 đoạn cần 1 lần cắt nên mỗi lần cắt mất 5 phút.", "4 đoạn cần 3 lần cắt.", "3 × 5 = 15 phút."], "j1-interval-8"],
    ["9", "A grandfather clock takes 6 seconds to chime 4 times at 4 o'clock. How many seconds will it take to chime 6 times at 6 o'clock?", "Một đồng hồ quả lắc mất 6 giây để điểm 4 tiếng lúc 4 giờ. Đồng hồ mất bao nhiêu giây để điểm 6 tiếng lúc 6 giờ?", "10", ["Four chimes contain 3 intervals, so each interval takes 6 ÷ 3 = 2 seconds.", "Six chimes contain 5 intervals.", "5 × 2 = 10 seconds."], ["4 tiếng chuông có 3 khoảng nên mỗi khoảng dài 6 ÷ 3 = 2 giây.", "6 tiếng chuông có 5 khoảng.", "5 × 2 = 10 giây."], "j1-interval-9"],
    ["10", "Alison lives on the fifth floor. The staircase leading to each floor has 10 steps. How many steps must she climb to reach home?", "Alison sống ở tầng 5. Cầu thang lên mỗi tầng có 10 bậc. Alison phải leo bao nhiêu bậc để về nhà?", "40", ["From the ground floor to the fifth floor there are 4 staircases.", "4 × 10 = 40 steps."], ["Từ tầng trệt lên tầng 5 có 4 cầu thang.", "4 × 10 = 40 bậc."], "j1-interval-10"],
    ["11", "A subway train takes 2 minutes to reach the next station and waits 1 minute at each intermediate station. How many minutes does it take from the first to the fifth station?", "Tàu điện mất 2 phút để đến ga kế tiếp và dừng 1 phút ở mỗi ga trung gian. Tàu mất bao nhiêu phút để đi từ ga thứ nhất đến ga thứ năm?", "11", ["Five stations create 4 travel intervals: 4 × 2 = 8 minutes.", "The train waits at stations 2, 3 and 4: 3 minutes.", "8 + 3 = 11 minutes."], ["5 ga tạo 4 chặng đi: 4 × 2 = 8 phút.", "Tàu dừng ở ga 2, 3 và 4: 3 phút.", "8 + 3 = 11 phút."], "j1-interval-11"],
    ["12", "A train has 6 compartments, each 6 m long. The compartments are joined by 1 m connectors. How long is the train?", "Một đoàn tàu có 6 toa, mỗi toa dài 6 m. Các toa nối với nhau bằng đoạn nối dài 1 m. Đoàn tàu dài bao nhiêu?", "41", ["Six compartments have total length 6 × 6 = 36 m.", "Six compartments need 5 connectors: 5 × 1 = 5 m.", "36 + 5 = 41 m."], ["6 toa dài tổng cộng 6 × 6 = 36 m.", "6 toa có 5 đoạn nối: 5 × 1 = 5 m.", "36 + 5 = 41 m."], "j1-interval-12"],
    ["13", "Coaches leave a station every 10 minutes. How many coaches leave in 60 minutes, including the first one?", "Xe khách rời bến mỗi 10 phút. Trong 60 phút có bao nhiêu chuyến, tính cả chuyến đầu?", "7", ["60 ÷ 10 = 6 intervals.", "Include the first coach: 6 + 1 = 7."], ["60 ÷ 10 = 6 khoảng.", "Tính cả chuyến đầu: 6 + 1 = 7 chuyến."], "j1-interval-13"],
    ["14", "How many cuts are needed to cut an 80 cm ribbon into 8 equal pieces? How long is each piece?", "Cần cắt bao nhiêu lần để chia dải ruy-băng dài 80 cm thành 8 đoạn bằng nhau? Mỗi đoạn dài bao nhiêu?", "7; 10", ["Eight pieces need 8 − 1 = 7 cuts.", "80 ÷ 8 = 10 cm per piece."], ["8 đoạn cần 8 − 1 = 7 lần cắt.", "80 ÷ 8 = 10 cm mỗi đoạn."], "j1-interval-14", ["7,10"]],
  ];
  exercises[2] = chapterTwo.map(([n, en, vi, answer, stepsEn, stepsVi, visual, aliases = []], index) => {
    const id = `j1-c2-${index + 1}`;
    solutions[2][id] = { answers: [[answer, ...aliases]], hint: { en: "Count the intervals first.", vi: "Hãy đếm số khoảng trước." }, guide: { en: stepsEn, vi: stepsVi } };
    return { n, id, source: "pdf", q: { en, vi }, visual, visualPlacement: "solution", ...(n === "14" ? { labels: { en: ["number of cuts", "length of each piece (cm)"], vi: ["số lần cắt", "độ dài mỗi đoạn (cm)"] } } : {}) };
  });
  solutions[2]["j1-c2-14"].answers = [["7"], ["10"]];
  extra[2] = [
    { id:"j1-c2-extra-1",source:"ai",level:"warmup",q:{en:"Ten flowers are planted in one row, 2 m apart. Find the distance from the first to the tenth.",vi:"Mười bông hoa được trồng thành một hàng, cách nhau 2 m. Tìm khoảng cách từ bông thứ nhất đến bông thứ mười."},answers:[["18"]],hint:{en:"Ten flowers create nine intervals.",vi:"10 bông hoa tạo 9 khoảng."},steps:{en:["9 × 2 = 18 m."],vi:["9 × 2 = 18 m."]},visual:"j1-interval-extra-1",visualPlacement:"solution"},
    { id:"j1-c2-extra-2",source:"ai",level:"warmup",q:{en:"A 30 cm string is cut into 5 equal pieces. How many cuts and how long is each piece?",vi:"Một sợi dây dài 30 cm được cắt thành 5 đoạn bằng nhau. Cần bao nhiêu lần cắt và mỗi đoạn dài bao nhiêu?"},answers:[["4"],["6"]],labels:{en:["cuts","piece length (cm)"],vi:["số lần cắt","độ dài mỗi đoạn (cm)"]},hint:{en:"Pieces are one more than cuts.",vi:"Số đoạn nhiều hơn số lần cắt 1."},steps:{en:["5 − 1 = 4 cuts.","30 ÷ 5 = 6 cm."],vi:["5 − 1 = 4 lần cắt.","30 ÷ 5 = 6 cm."]},visual:"j1-interval-extra-2",visualPlacement:"solution"},
    { id:"j1-c2-extra-3",source:"ai",level:"core",q:{en:"A bell rings 8 times in 14 seconds. How long is one interval between rings?",vi:"Một chiếc chuông reo 8 tiếng trong 14 giây. Một khoảng giữa hai tiếng chuông dài bao nhiêu giây?"},answers:[["2"]],hint:{en:"Eight rings contain seven intervals.",vi:"8 tiếng chuông có 7 khoảng."},steps:{en:["14 ÷ 7 = 2 seconds."],vi:["14 ÷ 7 = 2 giây."]},visual:"j1-interval-extra-3",visualPlacement:"solution"},
    { id:"j1-c2-extra-4",source:"ai",level:"core",q:{en:"From the third post to the ninth post, adjacent posts are 4 m apart. Find the distance.",vi:"Từ cột thứ ba đến cột thứ chín, hai cột liền nhau cách 4 m. Tìm khoảng cách."},answers:[["24"]],hint:{en:"Subtract the position numbers to count intervals.",vi:"Lấy số thứ tự hai vị trí trừ nhau để đếm khoảng."},steps:{en:["9 − 3 = 6 intervals.","6 × 4 = 24 m."],vi:["9 − 3 = 6 khoảng.","6 × 4 = 24 m."]},visual:"j1-interval-extra-4",visualPlacement:"solution"},
    { id:"j1-c2-extra-5",source:"ai",level:"challenge",q:{en:"Seven train cars are 5 m long and are joined by six 0.5 m connectors. Find the train's length.",vi:"Bảy toa tàu dài 5 m được nối bằng sáu đoạn nối dài 0,5 m. Tìm chiều dài đoàn tàu."},answers:[["38"]],hint:{en:"Add car lengths and connector lengths.",vi:"Cộng chiều dài các toa và các đoạn nối."},steps:{en:["7 × 5 = 35 m.","6 × 0.5 = 3 m.","35 + 3 = 38 m."],vi:["7 × 5 = 35 m.","6 × 0,5 = 3 m.","35 + 3 = 38 m."]},visual:"j1-interval-extra-5",visualPlacement:"solution"},
  ];

  chapters[3] = {
    id: 3, emoji: "➕", pages: "20–25", available: true,
    title: { en: "Addition", vi: "Phép cộng" },
    tagline: { en: "Make tens and hundreds, then break numbers apart", vi: "Ghép thành chục, trăm rồi tách số để tính nhanh" },
    theory: [
      [{ en: "Make a ten", vi: "Ghép thành 10" }, { en: "Reorder addends so a pair makes 10, then add the rest.", vi: "Đổi thứ tự các số hạng để ghép một cặp thành 10 rồi cộng phần còn lại." }],
      [{ en: "Make a hundred", vi: "Ghép thành 100" }, { en: "Look for pairs whose ones digits complete each other to make 100.", vi: "Tìm các cặp có chữ số hàng đơn vị bù nhau để tạo thành 100." }],
      [{ en: "Break up or round up", vi: "Tách số hoặc làm tròn" }, { en: "Rewrite 19 as 20 − 1 or split a number to complete a friendly total.", vi: "Viết 19 thành 20 − 1 hoặc tách một số để tạo tổng tròn chục." }],
      [{ en: "Decompose a target", vi: "Phân tích một số" }, { en: "Choose two or three numbers from the given list whose sum equals the target.", vi: "Chọn hai hoặc ba số trong danh sách sao cho tổng bằng số cần tìm." }],
    ],
    examples: [
      { q: { en: "Add 3 + 5 + 7 by making a ten.", vi: "Tính 3 + 5 + 7 bằng cách ghép thành 10." }, steps: [{ en: "Pair 3 and 7.", vi: "Ghép 3 với 7." }, { en: "10 + 5 = 15.", vi: "10 + 5 = 15." }], a: "15", visual: "j1-add-example-1" },
      { q: { en: "Find 35 + 15 + 65 by making a hundred.", vi: "Tính 35 + 15 + 65 bằng cách ghép thành 100." }, steps: [{ en: "35 + 65 = 100.", vi: "35 + 65 = 100." }, { en: "100 + 15 = 115.", vi: "100 + 15 = 115." }], a: "115", visual: "j1-add-example-2" },
      { q: { en: "Find 17 + 18 + 19 by rounding up.", vi: "Tính 17 + 18 + 19 bằng cách làm tròn." }, steps: [{ en: "Use 20 − 3, 20 − 2 and 20 − 1.", vi: "Dùng 20 − 3, 20 − 2 và 20 − 1." }, { en: "60 − 6 = 54.", vi: "60 − 6 = 54." }], a: "54", visual: "j1-add-example-3" },
      { q: { en: "Find 9 + 99 + 999.", vi: "Tính 9 + 99 + 999." }, steps: [{ en: "Rewrite as 10 − 1, 100 − 1 and 1000 − 1.", vi: "Viết thành 10 − 1, 100 − 1 và 1000 − 1." }, { en: "1110 − 3 = 1107.", vi: "1110 − 3 = 1107." }], a: "1107", visual: "j1-add-example-4" },
      { q: { en: "Express 18 as the sum of two numbers from 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.", vi: "Viết 18 thành tổng của hai số trong dãy 2, 3, 5, 7, 11, 13, 17, 19, 23, 29." }, steps: [{ en: "5 + 13 = 18; 7 + 11 = 18.", vi: "5 + 13 = 18; 7 + 11 = 18." }], a: { en: "5 + 13 or 7 + 11", vi: "5 + 13 hoặc 7 + 11" }, visual: "j1-add-example-5" },
    ],
    check: ["j1-c3-1a", "j1-c3-2a", "j1-c3-3a", "j1-c3-4a", "j1-c3-6a"],
  };

  const addChapterThree = (n, suffix, expression, answer, method = "make") => {
    const id = `j1-c3-${suffix}`;
    exercises[3].push({ n, id, source: "pdf", q: { en: `Find the value of ${expression}.`, vi: `Tính giá trị của ${expression}.` }, visual: `j1-add-${suffix}`, visualPlacement: "solution" });
    const guide = method === "round"
      ? { en: [`Round or break apart the addends, then compensate: ${expression} = ${answer}.`], vi: [`Làm tròn hoặc tách các số hạng rồi bù lại: ${expression} = ${answer}.`] }
      : { en: [`Reorder the addends to make tens or hundreds: ${expression} = ${answer}.`], vi: [`Đổi thứ tự các số hạng để ghép thành chục hoặc trăm: ${expression} = ${answer}.`] };
    solutions[3][id] = { answers: [[String(answer)]], hint: { en: "Look for a friendly pair first.", vi: "Hãy tìm một cặp số tròn chục hoặc tròn trăm trước." }, guide };
  };

  [
    ["1(a)","1a","2 + 8 + 3 + 7",20],["1(b)","1b","5 + 4 + 6 + 5",20],["1(c)","1c","9 + 2 + 8 + 1",20],
    ["1(d)","1d","14 + 16 + 21 + 29",80],["1(e)","1e","13 + 28 + 22 + 17",80],["1(f)","1f","15 + 37 + 23 + 25",100],
    ["1(g)","1g","26 + 14 + 33 + 37",110],["1(h)","1h","18 + 19 + 22 + 11",70],["1(i)","1i","28 + 32 + 15 + 25",100],
    ["1(j)","1j","32 + 22 + 28 + 10",92],["1(k)","1k","42 + 16 + 15 + 18",91],["1(l)","1l","18 + 13 + 22 + 28",81],
  ].forEach((row) => addChapterThree(...row));
  [
    ["2(a)","2a","9 + 8 + 10",27],["2(b)","2b","7 + 8 + 9",24],["2(c)","2c","7 + 8 + 9 + 11",35],["2(d)","2d","10 + 19 + 17",46],
    ["2(e)","2e","18 + 19 + 20",57],["2(f)","2f","9 + 19 + 39",67],["2(g)","2g","18 + 28 + 38",84],["2(h)","2h","16 + 17 + 18 + 19",70],
    ["3(a)","3a","18 + 19 + 13",50],["3(b)","3b","17 + 18 + 15",50],["3(c)","3c","21 + 22 + 23 + 24",90],["3(d)","3d","19 + 17 + 14 + 21",71],
    ["3(e)","3e","33 + 24 + 13 + 14",84],["3(f)","3f","28 + 23 + 9 + 22",82],["3(g)","3g","29 + 23 + 28 + 16",96],["3(h)","3h","27 + 4 + 29 + 35",95],
  ].forEach((row) => addChapterThree(...row, "round"));

  const numberPool = "2, 3, 5, 7, 11, 13, 17, 19, 23, 29";
  const sumParts = [
    ["4(a)","4a",7,[2,5]],["4(b)","4b",12,[5,7]],["4(c)","4c",18,[5,13]],["4(d)","4d",36,[7,29]],["4(e)","4e",42,[13,29]],["4(f)","4f",48,[19,29]],
    ["5(a)","5a",10,[2,3,5]],["5(b)","5b",23,[3,7,13]],["5(c)","5c",38,[2,7,29]],["5(d)","5d",37,[3,5,29]],["5(e)","5e",41,[5,7,29]],["5(f)","5f",49,[3,17,29]],
  ];
  sumParts.forEach(([n, suffix, target, parts]) => {
    const id = `j1-c3-${suffix}`;
    const count = parts.length === 2 ? "two" : "three";
    exercises[3].push({ n, id, source: "pdf", q: { en: `Using the numbers ${numberPool}, express ${target} as the sum of ${count} numbers.`, vi: `Dùng các số ${numberPool}, viết ${target} thành tổng của ${parts.length} số.` }, labels: { en: parts.map((_, i) => `number ${i + 1}`), vi: parts.map((_, i) => `số thứ ${i + 1}`) }, visual: `j1-add-${suffix}`, visualPlacement: "solution" });
    solutions[3][id] = { answers: parts.map((part) => [[String(part)]][0]), hint: { en: "Choose from the given list only.", vi: "Chỉ chọn số trong danh sách đã cho." }, guide: { en: [`${parts.join(" + ")} = ${target}.`], vi: [`${parts.join(" + ")} = ${target}.`] } };
  });

  const columnAdds = [
    ["6(a)","6a","□3 + 3□ = 58",[2,5]],["6(b)","6b","2□ + □5 = 72",[7,4]],["6(c)","6c","1□ + □1 = 39",[8,2]],["6(d)","6d","□1 + 1□ = 45",[3,4]],
    ["6(e)","6e","□4 + 4□ = 68",[2,4]],["6(f)","6f","2□ + □5 = 62",[7,3]],["6(g)","6g","5□ + □3 = □20",[7,6,1]],["6(h)","6h","8□ + □9 = □31",[2,4,1]],
  ];
  columnAdds.forEach(([n, suffix, equation, digits]) => {
    const id = `j1-c3-${suffix}`;
    exercises[3].push({ n, id, source: "pdf", q: { en: `Fill each box to make the addition correct: ${equation}.`, vi: `Điền số vào mỗi ô để phép cộng đúng: ${equation}.` }, labels: { en: digits.map((_,i)=>`box ${i+1}`), vi: digits.map((_,i)=>`ô ${i+1}`) }, visual: `j1-add-${suffix}`, visualPlacement: "solution" });
    solutions[3][id] = { answers: digits.map((digit) => [String(digit)]), hint: { en: "Start with the ones column and carry if needed.", vi: "Bắt đầu từ hàng đơn vị và nhớ nếu cần." }, guide: { en: [`The boxes are ${digits.join(", ")} in reading order.`], vi: [`Các ô theo thứ tự đọc là ${digits.join(", ")}.`] } };
  });

  extra[3] = [
    { id:"j1-c3-extra-1",source:"ai",level:"warmup",q:{en:"Find 6 + 14 + 9 + 11.",vi:"Tính 6 + 14 + 9 + 11."},answers:[["40"]],hint:{en:"Make two twenties.",vi:"Ghép thành hai số 20."},steps:{en:["6 + 14 = 20; 9 + 11 = 20; total 40."],vi:["6 + 14 = 20; 9 + 11 = 20; tổng là 40."]},visual:"j1-add-extra-1",visualPlacement:"solution"},
    { id:"j1-c3-extra-2",source:"ai",level:"warmup",q:{en:"Find 27 + 73 + 15.",vi:"Tính 27 + 73 + 15."},answers:[["115"]],hint:{en:"Make one hundred first.",vi:"Ghép thành 100 trước."},steps:{en:["27 + 73 = 100; 100 + 15 = 115."],vi:["27 + 73 = 100; 100 + 15 = 115."]},visual:"j1-add-extra-2",visualPlacement:"solution"},
    { id:"j1-c3-extra-3",source:"ai",level:"core",q:{en:"Find 29 + 39 + 49.",vi:"Tính 29 + 39 + 49."},answers:[["117"]],hint:{en:"Round each addend up, then compensate.",vi:"Làm tròn từng số rồi bù lại."},steps:{en:["30 + 40 + 50 − 3 = 117."],vi:["30 + 40 + 50 − 3 = 117."]},visual:"j1-add-extra-3",visualPlacement:"solution"},
    { id:"j1-c3-extra-4",source:"ai",level:"core",q:{en:`Using ${numberPool}, express 34 as the sum of two numbers.`,vi:`Dùng các số ${numberPool}, viết 34 thành tổng của hai số.`},answers:[["5"],["29"]],labels:{en:["first number","second number"],vi:["số thứ nhất","số thứ hai"]},hint:{en:"Look for a pair totaling 34.",vi:"Tìm một cặp có tổng 34."},steps:{en:["5 + 29 = 34."],vi:["5 + 29 = 34."]},visual:"j1-add-extra-4",visualPlacement:"solution"},
    { id:"j1-c3-extra-5",source:"ai",level:"challenge",q:{en:"Fill the boxes: 4□ + □7 = 92.",vi:"Điền vào ô trống: 4□ + □7 = 92."},answers:[["5"],["4"]],labels:{en:["first box","second box"],vi:["ô thứ nhất","ô thứ hai"]},hint:{en:"Start with the ones column.",vi:"Bắt đầu từ hàng đơn vị."},steps:{en:["5 + 7 = 12, write 2 and carry 1.","4 + 4 + 1 = 9, so 45 + 47 = 92."],vi:["5 + 7 = 12, viết 2 nhớ 1.","4 + 4 + 1 = 9, nên 45 + 47 = 92."]},visual:"j1-add-extra-5",visualPlacement:"solution"},
  ];

  chapters[4] = {
    id: 4, emoji: "⚖️", pages: "26–34", available: true,
    title: { en: "Solve by Comparison and Replacement", vi: "So sánh và thay thế" },
    tagline: { en: "Replace equal groups to find an unknown value", vi: "Thay các nhóm bằng nhau để tìm giá trị chưa biết" },
    theory: [
      [{ en: "Read a balance", vi: "Đọc cân thăng bằng" }, { en: "Objects on the two pans have equal value. Count every object before comparing.", vi: "Hai đĩa cân có giá trị bằng nhau. Hãy đếm đủ từng vật trước khi so sánh." }],
      [{ en: "Replacement", vi: "Phép thay thế" }, { en: "When one object equals a group, replace it by that whole group.", vi: "Khi một vật bằng một nhóm, hãy thay vật đó bằng toàn bộ nhóm tương ứng." }],
      [{ en: "Add or subtract equations", vi: "Cộng hoặc trừ hai quan hệ" }, { en: "Combine two relations so one symbol cancels or repeated groups appear.", vi: "Kết hợp hai quan hệ để một ký hiệu bị triệt tiêu hoặc xuất hiện các nhóm giống nhau." }],
    ],
    examples: [
      { q: { en: "One pear balances two kiwi fruit. One kiwi fruit balances four strawberries. How many strawberries balance one pear?", vi: "Một quả lê cân bằng hai quả kiwi. Một quả kiwi cân bằng bốn quả dâu tây. Bao nhiêu quả dâu tây cân bằng một quả lê?" }, steps: [{ en: "Replace each kiwi by 4 strawberries.", vi: "Thay mỗi quả kiwi bằng 4 quả dâu tây." }, { en: "2 × 4 = 8 strawberries.", vi: "2 × 4 = 8 quả dâu tây." }], a: "8", visual: "j1-replace-example-1" },
      { q: { en: "One cat balances two rabbits. Three rabbits balance four chicks. How many chicks balance three cats?", vi: "Một con mèo cân bằng hai con thỏ. Ba con thỏ cân bằng bốn chú gà con. Bao nhiêu gà con cân bằng ba con mèo?" }, steps: [{ en: "Three cats equal six rabbits.", vi: "Ba con mèo bằng sáu con thỏ." }, { en: "Six rabbits equal eight chicks.", vi: "Sáu con thỏ bằng tám chú gà con." }], a: "8", visual: "j1-replace-example-2" },
      { q: { en: "△ + ○ = 13 and △ − ○ = 3. Find △ and ○.", vi: "△ + ○ = 13 và △ − ○ = 3. Tìm △ và ○." }, steps: [{ en: "Add the equations: 2△ = 16.", vi: "Cộng hai phương trình: 2△ = 16." }, { en: "△ = 8 and ○ = 5.", vi: "△ = 8 và ○ = 5." }], a: "△ = 8; ○ = 5", visual: "j1-replace-example-3" },
      { q: { en: "□ + ○ = 15 and □ + □ + ○ + ○ + ○ = 35. Find □ and ○.", vi: "□ + ○ = 15 và □ + □ + ○ + ○ + ○ = 35. Tìm □ và ○." }, steps: [{ en: "Two groups of □ + ○ make 30, leaving one ○ = 5.", vi: "Hai nhóm □ + ○ bằng 30, còn lại ○ = 5." }, { en: "□ = 15 − 5 = 10.", vi: "□ = 15 − 5 = 10." }], a: "□ = 10; ○ = 5", visual: "j1-replace-example-4" },
    ],
    check: ["j1-c4-1", "j1-c4-3", "j1-c4-6", "j1-c4-10", "j1-c4-18"],
  };

  const chapterFour = [
    ["1","A hen balances two squirrels. One squirrel balances ten eggs. How many eggs balance one hen?","Một con gà mái cân bằng hai con sóc. Một con sóc cân bằng mười quả trứng. Bao nhiêu quả trứng cân bằng một con gà mái?",["20"],["One hen = 2 squirrels.","Each squirrel = 10 eggs, so 2 × 10 = 20 eggs."],["Một con gà mái = 2 con sóc.","Mỗi con sóc = 10 quả trứng nên 2 × 10 = 20 quả trứng."]],
    ["2","Five chicks balance one duckling. One swan balances two ducklings. How many chicks balance one swan?","Năm chú gà con cân bằng một vịt con. Một con thiên nga cân bằng hai vịt con. Bao nhiêu gà con cân bằng một thiên nga?",["10"],["One swan = 2 ducklings.","2 × 5 = 10 chicks."],["Một con thiên nga = 2 vịt con.","2 × 5 = 10 chú gà con."]],
    ["3","○ + □ = 14 and ○ − □ = 6. Find ○ and □.","○ + □ = 14 và ○ − □ = 6. Tìm ○ và □.",["10","4"],["Add the relations: 2○ = 20, so ○ = 10.","□ = 14 − 10 = 4."],["Cộng hai quan hệ: 2○ = 20 nên ○ = 10.","□ = 14 − 10 = 4."]],
    ["4","□ + △ = 15 and △ − □ = 7. Find △ and □.","□ + △ = 15 và △ − □ = 7. Tìm △ và □.",["11","4"],["Add the relations: 2△ = 22, so △ = 11.","□ = 15 − 11 = 4."],["Cộng hai quan hệ: 2△ = 22 nên △ = 11.","□ = 15 − 11 = 4."]],
    ["5","✳ − □ = 22 and ✳ + □ = 30. Find ✳ and □.","✳ − □ = 22 và ✳ + □ = 30. Tìm ✳ và □.",["26","4"],["Add the relations: 2✳ = 52, so ✳ = 26.","□ = 30 − 26 = 4."],["Cộng hai quan hệ: 2✳ = 52 nên ✳ = 26.","□ = 30 − 26 = 4."]],
    ["6","❖ + ✳ + ❖ = 15 and ✳ + ❖ = 11. Find ❖ and ✳.","❖ + ✳ + ❖ = 15 và ✳ + ❖ = 11. Tìm ❖ và ✳.",["4","7"],["Subtract the second relation from the first: ❖ = 4.","✳ = 11 − 4 = 7."],["Lấy quan hệ thứ nhất trừ quan hệ thứ hai: ❖ = 4.","✳ = 11 − 4 = 7."]],
    ["7","○ + ○ + ○ + ✳ = 22 and ○ + ✳ = 12. Find ○ and ✳.","○ + ○ + ○ + ✳ = 22 và ○ + ✳ = 12. Tìm ○ và ✳.",["5","7"],["Subtract: 2○ = 10, so ○ = 5.","✳ = 12 − 5 = 7."],["Lấy hai quan hệ trừ nhau: 2○ = 10 nên ○ = 5.","✳ = 12 − 5 = 7."]],
    ["8","❖ + ✳ + ✳ = 14 and ❖ + ❖ + ❖ + ✳ + ✳ = 18. Find ❖ and ✳.","❖ + ✳ + ✳ = 14 và ❖ + ❖ + ❖ + ✳ + ✳ = 18. Tìm ❖ và ✳.",["2","6"],["Subtract the first relation: 2❖ = 4, so ❖ = 2.","2 + 2✳ = 14, so ✳ = 6."],["Lấy quan hệ thứ hai trừ quan hệ thứ nhất: 2❖ = 4 nên ❖ = 2.","2 + 2✳ = 14 nên ✳ = 6."]],
    ["9","□ + ○ + ○ = 14 and □ + ○ + ○ + ○ + ○ = 24. Find □ and ○.","□ + ○ + ○ = 14 và □ + ○ + ○ + ○ + ○ = 24. Tìm □ và ○.",["4","5"],["Subtract: 2○ = 10, so ○ = 5.","□ = 14 − 10 = 4."],["Lấy hai quan hệ trừ nhau: 2○ = 10 nên ○ = 5.","□ = 14 − 10 = 4."]],
    ["10","One pineapple balances three oranges. Two oranges balance three apples. How many apples balance one pineapple?","Một quả dứa cân bằng ba quả cam. Hai quả cam cân bằng ba quả táo. Bao nhiêu quả táo cân bằng một quả dứa?",["4.5","4,5","4 1/2"],["One orange = 3 ÷ 2 apples.","Three oranges = 3 × 3 ÷ 2 = 4½ apples."],["Một quả cam = 3 ÷ 2 quả táo.","Ba quả cam = 3 × 3 ÷ 2 = 4½ quả táo."]],
    ["11","Two apples balance six strawberries. Two pears balance three apples. How many strawberries balance two pears?","Hai quả táo cân bằng sáu quả dâu tây. Hai quả lê cân bằng ba quả táo. Bao nhiêu quả dâu tây cân bằng hai quả lê?",["9"],["One apple = 3 strawberries.","Two pears = 3 apples = 9 strawberries."],["Một quả táo = 3 quả dâu tây.","Hai quả lê = 3 quả táo = 9 quả dâu tây."]],
    ["12","One watermelon balances sixteen apples. Two apples balance three apricots. How many apricots balance one watermelon?","Một quả dưa hấu cân bằng mười sáu quả táo. Hai quả táo cân bằng ba quả mơ. Bao nhiêu quả mơ cân bằng một quả dưa hấu?",["24"],["Sixteen apples make eight pairs.","8 × 3 = 24 apricots."],["Mười sáu quả táo tạo 8 cặp.","8 × 3 = 24 quả mơ."]],
    ["13","✳ + ❖ = 22 and ✳ + ✳ + ❖ + ❖ + ❖ = 58. Find ✳ and ❖.","✳ + ❖ = 22 và ✳ + ✳ + ❖ + ❖ + ❖ = 58. Tìm ✳ và ❖.",["8","14"],["Two copies of the first relation equal 44, leaving ❖ = 14.","✳ = 22 − 14 = 8."],["Hai lần quan hệ đầu bằng 44, phần còn lại là ❖ = 14.","✳ = 22 − 14 = 8."]],
    ["14","✳ + ○ = 25 and ✳ + ✳ + ✳ + ○ + ○ = 65. Find ✳ and ○.","✳ + ○ = 25 và ✳ + ✳ + ✳ + ○ + ○ = 65. Tìm ✳ và ○.",["15","10"],["Two copies of the first relation equal 50, leaving ✳ = 15.","○ = 25 − 15 = 10."],["Hai lần quan hệ đầu bằng 50, phần còn lại là ✳ = 15.","○ = 25 − 15 = 10."]],
    ["15","❖ + ○ = 9, ○ + □ = 12 and □ + ❖ = 11. Find ❖, □ and ○.","❖ + ○ = 9, ○ + □ = 12 và □ + ❖ = 11. Tìm ❖, □ và ○.",["4","7","5"],["Adding all gives twice the three symbols = 32, so their total is 16.","❖ = 16 − 12 = 4; □ = 16 − 9 = 7; ○ = 16 − 11 = 5."],["Cộng cả ba quan hệ được hai lần tổng ba ký hiệu bằng 32, nên tổng là 16.","❖ = 16 − 12 = 4; □ = 16 − 9 = 7; ○ = 16 − 11 = 5."]],
    ["16","❖ + △ + △ + △ + △ = 33 and ❖ + ❖ = △ + △ + △. Find ❖ and △.","❖ + △ + △ + △ + △ = 33 và ❖ + ❖ = △ + △ + △. Tìm ❖ và △.",["9","6"],["Two ❖ equal three △.","Testing equal groups gives △ = 6 and ❖ = 9; 9 + 4 × 6 = 33."],["Hai ❖ bằng ba △.","Nhóm bằng nhau cho △ = 6 và ❖ = 9; 9 + 4 × 6 = 33."]],
    ["17","○ × ✳ = 24, ○ + ✳ = 11 and ○ + ✳ + △ = 17. Find △.","○ × ✳ = 24, ○ + ✳ = 11 và ○ + ✳ + △ = 17. Tìm △.",["6"],["The second relation already gives ○ + ✳ = 11.","11 + △ = 17, so △ = 6."],["Quan hệ thứ hai cho ngay ○ + ✳ = 11.","11 + △ = 17 nên △ = 6."]],
    ["18","◇ × ○ = ❖ and ◇ + ◇ + ◇ = ❖ − ◇. Find ○.","◇ × ○ = ❖ và ◇ + ◇ + ◇ = ❖ − ◇. Tìm ○.",["4"],["Move ◇ to the left: 4◇ = ❖.","Since ◇ × ○ = ❖, ○ = 4."],["Chuyển ◇ sang vế trái: 4◇ = ❖.","Vì ◇ × ○ = ❖ nên ○ = 4."]],
    ["19","✳ × ○ = 24, ○ × □ = 40, □ × ❖ = 45 and ✳ × □ = 15. Find ✳, ○, ❖ and □.","✳ × ○ = 24, ○ × □ = 40, □ × ❖ = 45 và ✳ × □ = 15. Tìm ✳, ○, ❖ và □.",["3","8","9","5"],["The common factors give ✳ = 3 and □ = 5.","Then ○ = 24 ÷ 3 = 8 and ❖ = 45 ÷ 5 = 9."],["Các thừa số chung cho ✳ = 3 và □ = 5.","Sau đó ○ = 24 ÷ 3 = 8 và ❖ = 45 ÷ 5 = 9."]],
    ["20","◇ × ○ = 30, ✳ × ◇ = 12 and ✳ × ○ = 10. Find ✳, ◇ and ○.","◇ × ○ = 30, ✳ × ◇ = 12 và ✳ × ○ = 10. Tìm ✳, ◇ và ○.",["2","6","5"],["◇ : ○ = 12 : 10 = 6 : 5.","So ◇ = 6, ○ = 5 and ✳ = 2."],["◇ : ○ = 12 : 10 = 6 : 5.","Vậy ◇ = 6, ○ = 5 và ✳ = 2."]],
  ];
  exercises[4] = chapterFour.map(([n,en,vi,answers,stepsEn,stepsVi]) => {
    const id = `j1-c4-${n}`;
    solutions[4][id] = { answers: answers.map((answer)=>[answer]), hint: { en: "Replace equal groups or subtract matching relations.", vi: "Thay các nhóm bằng nhau hoặc trừ các quan hệ tương ứng." }, guide: { en: stepsEn, vi: stepsVi } };
    return { n, id, source:"pdf", q:{en,vi}, labels: answers.length > 1 ? { en: answers.map((_,i)=>`value ${i+1}`), vi: answers.map((_,i)=>`giá trị ${i+1}`) } : undefined, visual:`j1-replace-${n}`, visualPlacement:"solution" };
  });
  extra[4] = [
    {id:"j1-c4-extra-1",source:"ai",level:"warmup",q:{en:"One bear balances three rabbits. Each rabbit balances two carrots. How many carrots balance one bear?",vi:"Một con gấu cân bằng ba con thỏ. Mỗi con thỏ cân bằng hai củ cà rốt. Bao nhiêu củ cà rốt cân bằng một con gấu?"},answers:[["6"]],hint:{en:"Replace each rabbit.",vi:"Thay từng con thỏ."},steps:{en:["3 × 2 = 6 carrots."],vi:["3 × 2 = 6 củ cà rốt."]},visual:"j1-replace-extra-1",visualPlacement:"solution"},
    {id:"j1-c4-extra-2",source:"ai",level:"warmup",q:{en:"○ + □ = 18 and ○ − □ = 4. Find ○ and □.",vi:"○ + □ = 18 và ○ − □ = 4. Tìm ○ và □."},answers:[["11"],["7"]],labels:{en:["○","□"],vi:["○","□"]},hint:{en:"Add the relations.",vi:"Cộng hai quan hệ."},steps:{en:["2○ = 22, so ○ = 11 and □ = 7."],vi:["2○ = 22 nên ○ = 11 và □ = 7."]},visual:"j1-replace-extra-2",visualPlacement:"solution"},
    {id:"j1-c4-extra-3",source:"ai",level:"core",q:{en:"△ + △ + ○ = 19 and △ + ○ = 12. Find △ and ○.",vi:"△ + △ + ○ = 19 và △ + ○ = 12. Tìm △ và ○."},answers:[["7"],["5"]],labels:{en:["△","○"],vi:["△","○"]},hint:{en:"Subtract the second relation.",vi:"Lấy quan hệ đầu trừ quan hệ sau."},steps:{en:["△ = 7; then ○ = 5."],vi:["△ = 7; sau đó ○ = 5."]},visual:"j1-replace-extra-3",visualPlacement:"solution"},
    {id:"j1-c4-extra-4",source:"ai",level:"core",q:{en:"Two pears balance six plums. Three pears balance how many plums?",vi:"Hai quả lê cân bằng sáu quả mận. Ba quả lê cân bằng bao nhiêu quả mận?"},answers:[["9"]],hint:{en:"Find the value of one pear.",vi:"Tìm giá trị của một quả lê."},steps:{en:["One pear = 3 plums; three pears = 9 plums."],vi:["Một quả lê = 3 quả mận; ba quả lê = 9 quả mận."]},visual:"j1-replace-extra-4",visualPlacement:"solution"},
    {id:"j1-c4-extra-5",source:"ai",level:"challenge",q:{en:"□ × ○ = 18 and □ + ○ = 9. If □ is smaller than ○, find both.",vi:"□ × ○ = 18 và □ + ○ = 9. Nếu □ nhỏ hơn ○, tìm hai số."},answers:[["3"],["6"]],labels:{en:["□","○"],vi:["□","○"]},hint:{en:"List factor pairs of 18.",vi:"Liệt kê các cặp thừa số của 18."},steps:{en:["3 × 6 = 18 and 3 + 6 = 9."],vi:["3 × 6 = 18 và 3 + 6 = 9."]},visual:"j1-replace-extra-5",visualPlacement:"solution"},
  ];

  window.MQ_BOOK_DATA = window.MQ_BOOK_DATA || {};
  window.MQ_BOOK_DATA.junior1 = { chapters, exercises, solutions, extra };
})();
