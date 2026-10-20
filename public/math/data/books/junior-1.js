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
  add("13", "j1-13", "A clock chimes once at 1 o’clock, twice at 2 o’clock, and so on. How many chimes from 1 o’clock to 6 o’clock?", "Đồng hồ điểm 1 tiếng lúc 1 giờ, 2 tiếng lúc 2 giờ,... Tổng cộng điểm bao nhiêu tiếng từ 1 giờ đến 6 giờ?", ["21"], "Add 1 through 6.", "Cộng các số từ 1 đến 6.", "1 + 2 + 3 + 4 + 5 + 6 = 21.", "1 + 2 + 3 + 4 + 5 + 6 = 21.", "clock-chimes-j1-13");

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
    const answerGroups = n === "10" ? [answers] : answers.map((answer)=>[answer]);
    solutions[4][id] = { answers: answerGroups, hint: { en: "Replace equal groups or subtract matching relations.", vi: "Thay các nhóm bằng nhau hoặc trừ các quan hệ tương ứng." }, guide: { en: stepsEn, vi: stepsVi } };
    return { n, id, source:"pdf", q:{en,vi}, labels: answerGroups.length > 1 ? { en: answerGroups.map((_,i)=>`value ${i+1}`), vi: answerGroups.map((_,i)=>`giá trị ${i+1}`) } : undefined, visual:`j1-replace-${n}`, visualPlacement:"question" };
  });
  extra[4] = [
    {id:"j1-c4-extra-1",source:"ai",level:"warmup",q:{en:"One bear balances three rabbits. Each rabbit balances two carrots. How many carrots balance one bear?",vi:"Một con gấu cân bằng ba con thỏ. Mỗi con thỏ cân bằng hai củ cà rốt. Bao nhiêu củ cà rốt cân bằng một con gấu?"},answers:[["6"]],hint:{en:"Replace each rabbit.",vi:"Thay từng con thỏ."},steps:{en:["3 × 2 = 6 carrots."],vi:["3 × 2 = 6 củ cà rốt."]},visual:"j1-replace-extra-1",visualPlacement:"question"},
    {id:"j1-c4-extra-2",source:"ai",level:"warmup",q:{en:"○ + □ = 18 and ○ − □ = 4. Find ○ and □.",vi:"○ + □ = 18 và ○ − □ = 4. Tìm ○ và □."},answers:[["11"],["7"]],labels:{en:["○","□"],vi:["○","□"]},hint:{en:"Add the relations.",vi:"Cộng hai quan hệ."},steps:{en:["2○ = 22, so ○ = 11 and □ = 7."],vi:["2○ = 22 nên ○ = 11 và □ = 7."]},visual:"j1-replace-extra-2",visualPlacement:"question"},
    {id:"j1-c4-extra-3",source:"ai",level:"core",q:{en:"△ + △ + ○ = 19 and △ + ○ = 12. Find △ and ○.",vi:"△ + △ + ○ = 19 và △ + ○ = 12. Tìm △ và ○."},answers:[["7"],["5"]],labels:{en:["△","○"],vi:["△","○"]},hint:{en:"Subtract the second relation.",vi:"Lấy quan hệ đầu trừ quan hệ sau."},steps:{en:["△ = 7; then ○ = 5."],vi:["△ = 7; sau đó ○ = 5."]},visual:"j1-replace-extra-3",visualPlacement:"question"},
    {id:"j1-c4-extra-4",source:"ai",level:"core",q:{en:"Two pears balance six plums. Three pears balance how many plums?",vi:"Hai quả lê cân bằng sáu quả mận. Ba quả lê cân bằng bao nhiêu quả mận?"},answers:[["9"]],hint:{en:"Find the value of one pear.",vi:"Tìm giá trị của một quả lê."},steps:{en:["One pear = 3 plums; three pears = 9 plums."],vi:["Một quả lê = 3 quả mận; ba quả lê = 9 quả mận."]},visual:"j1-replace-extra-4",visualPlacement:"question"},
    {id:"j1-c4-extra-5",source:"ai",level:"challenge",q:{en:"□ × ○ = 18 and □ + ○ = 9. If □ is smaller than ○, find both.",vi:"□ × ○ = 18 và □ + ○ = 9. Nếu □ nhỏ hơn ○, tìm hai số."},answers:[["3"],["6"]],labels:{en:["□","○"],vi:["□","○"]},hint:{en:"List factor pairs of 18.",vi:"Liệt kê các cặp thừa số của 18."},steps:{en:["3 × 6 = 18 and 3 + 6 = 9."],vi:["3 × 6 = 18 và 3 + 6 = 9."]},visual:"j1-replace-extra-5",visualPlacement:"question"},
  ];

  chapters[5] = {
    id: 5, emoji: "🎂", pages: "35–43", available: true,
    title: { en: "Age Problems", vi: "Bài toán tuổi" },
    tagline: { en: "Age differences stay fixed while age ratios change", vi: "Hiệu số tuổi không đổi, còn tỉ số tuổi thay đổi theo thời gian" },
    theory: [
      [{ en: "Age difference stays the same", vi: "Hiệu số tuổi không đổi" }, { en: "When time passes, everyone gains the same number of years, so the difference between two ages never changes.", vi: "Khi thời gian trôi qua, mọi người cùng tăng một số tuổi như nhau nên hiệu số tuổi luôn giữ nguyên." }],
      [{ en: "Age ratio changes", vi: "Tỉ số tuổi thay đổi" }, { en: "A person may be several times another person's age now, but that multiple changes over time.", vi: "Một người có thể gấp nhiều lần tuổi người kia ở hiện tại, nhưng tỉ số đó sẽ thay đổi theo thời gian." }],
      [{ en: "Track every person", vi: "Theo dõi từng người" }, { en: "After n years, add n to every age. For a family total, the sum rises by n for each person.", vi: "Sau n năm, cộng n vào tuổi của từng người. Với tổng tuổi gia đình, mỗi năm tổng tăng bằng số người." }],
    ],
    examples: [
      { q:{en:"Amanda is 7 and her father is 36. How many years older will her father be in 4 years?",vi:"Amanda 7 tuổi, bố của bạn ấy 36 tuổi. Sau 4 năm, bố hơn Amanda bao nhiêu tuổi?"}, steps:[{en:"The age difference does not change.",vi:"Hiệu số tuổi không thay đổi."},{en:"36 − 7 = 29.",vi:"36 − 7 = 29."}], a:{en:"29 years",vi:"29 tuổi"}, visual:"j1-age-example-1" },
      { q:{en:"Mr Jensen is 45 and Natalie is 8. How many years older will he be in 5 years?",vi:"Ông Jensen 45 tuổi, Natalie 8 tuổi. Sau 5 năm, ông Jensen hơn Natalie bao nhiêu tuổi?"}, steps:[{en:"Keep the present age difference.",vi:"Giữ nguyên hiệu số tuổi hiện tại."},{en:"45 − 8 = 37.",vi:"45 − 8 = 37."}], a:{en:"37 years",vi:"37 tuổi"}, visual:"j1-age-example-2" },
      { q:{en:"Andrew is 8 and his mother is 32. How many times Andrew's age is his mother's age?",vi:"Andrew 8 tuổi, mẹ của bạn ấy 32 tuổi. Tuổi mẹ gấp mấy lần tuổi Andrew?"}, steps:[{en:"Compare by division.",vi:"So sánh bằng phép chia."},{en:"32 ÷ 8 = 4.",vi:"32 ÷ 8 = 4."}], a:{en:"4 times",vi:"4 lần"}, visual:"j1-age-example-3" },
      { q:{en:"Paula is 6. Her father will be 40 when Paula is 10. How old is her father now?",vi:"Paula 6 tuổi. Khi Paula 10 tuổi thì bố sẽ 40 tuổi. Hiện nay bố bao nhiêu tuổi?"}, steps:[{en:"Paula reaches 10 in 4 years.",vi:"Paula sẽ 10 tuổi sau 4 năm."},{en:"40 − 4 = 36.",vi:"40 − 4 = 36."}], a:{en:"36 years old",vi:"36 tuổi"}, visual:"j1-age-example-4" },
      { q:{en:"Edward is 8 and his mother is 32. In how many years will she be 3 times his age?",vi:"Edward 8 tuổi, mẹ 32 tuổi. Sau bao nhiêu năm tuổi mẹ gấp 3 lần tuổi Edward?"}, steps:[{en:"Their age difference is 24.",vi:"Hiệu số tuổi là 24."},{en:"At a 3:1 ratio, the difference is 2 parts, so one part is 12.",vi:"Khi tỉ số là 3 : 1, hiệu là 2 phần nên một phần bằng 12."},{en:"Edward needs 12 − 8 = 4 more years.",vi:"Edward cần thêm 12 − 8 = 4 tuổi."}], a:{en:"4 years",vi:"4 năm"}, visual:"j1-age-example-5" },
    ],
    check: ["j1-c5-1","j1-c5-5","j1-c5-8","j1-c5-11","j1-c5-13"],
  };

  const chapterFive = [
    ["1","My mother is 25 years younger than my grandmother. How many years older was my grandmother than my mother 5 years ago?","Mẹ tôi ít hơn bà ngoại 25 tuổi. Cách đây 5 năm, bà ngoại hơn mẹ tôi bao nhiêu tuổi?",["25"],["The age difference is always 25 years."],["Hiệu số tuổi luôn là 25 tuổi."]],
    ["2","Chloe is 4 years old. Her father is 36 years old. How many years younger will Chloe be than her father in 8 years?","Chloe 4 tuổi, bố của bạn ấy 36 tuổi. Sau 8 năm, Chloe ít hơn bố bao nhiêu tuổi?",["32"],["The age difference stays unchanged: 36 − 4 = 32."],["Hiệu số tuổi không đổi: 36 − 4 = 32."]],
    ["3","Shelia's father is 35 years old and her grandfather is 62 years old. How old will each of them be in 12 years?","Bố của Shelia 35 tuổi và ông của bạn ấy 62 tuổi. Sau 12 năm, mỗi người bao nhiêu tuổi?",["47","74"],["Father: 35 + 12 = 47.","Grandfather: 62 + 12 = 74."],["Bố: 35 + 12 = 47.","Ông: 62 + 12 = 74."],["father","grandfather"],["bố","ông"]],
    ["4","Tom is 6 years old and his brother is 11. (a) How many years older is his brother? (b) How many years younger will Tom be in 10 years?","Tom 6 tuổi, anh trai 11 tuổi. (a) Anh hơn Tom bao nhiêu tuổi? (b) Sau 10 năm, Tom ít hơn anh bao nhiêu tuổi?",["5","5"],["11 − 6 = 5.","The difference remains 5 after 10 years."],["11 − 6 = 5.","Sau 10 năm, hiệu số tuổi vẫn là 5."],["(a)","(b)"],["(a)","(b)"]],
    ["5","The sum of Valerie's, her sister's and their father's ages is 85. Valerie is 22 and twice as old as her sister. How old is their father?","Tổng tuổi của Valerie, em gái và bố là 85. Valerie 22 tuổi và gấp đôi tuổi em gái. Bố của họ bao nhiêu tuổi?",["52"],["Sister: 22 ÷ 2 = 11.","Father: 85 − 22 − 11 = 52."],["Em gái: 22 ÷ 2 = 11.","Bố: 85 − 22 − 11 = 52."]],
    ["6","My granny is 56, my mother is 31 and I am 7. In how many years will the sum of our ages be 100?","Bà tôi 56 tuổi, mẹ tôi 31 tuổi và tôi 7 tuổi. Sau bao nhiêu năm tổng tuổi của ba người bằng 100?",["2"],["Current total: 56 + 31 + 7 = 94.","The total rises by 3 each year.","(100 − 94) ÷ 3 = 2."],["Tổng hiện nay: 56 + 31 + 7 = 94.","Mỗi năm tổng tuổi tăng 3.","(100 − 94) ÷ 3 = 2."]],
    ["7","Wilfred is 4 years old. His father's age is 7 times his age. How old is his father?","Wilfred 4 tuổi. Tuổi bố gấp 7 lần tuổi Wilfred. Bố bao nhiêu tuổi?",["28"],["4 × 7 = 28."],["4 × 7 = 28."]],
    ["8","When Teddy was 5 years old, his father's age was 7 times his age. When his father is 40, how old will Teddy be?","Khi Teddy 5 tuổi, tuổi bố gấp 7 lần tuổi Teddy. Khi bố 40 tuổi, Teddy bao nhiêu tuổi?",["10"],["Father was 5 × 7 = 35.","The father is 40 after 5 more years.","Teddy will be 5 + 5 = 10."],["Lúc đó bố 5 × 7 = 35 tuổi.","Bố 40 tuổi sau thêm 5 năm.","Teddy sẽ 5 + 5 = 10 tuổi."]],
    ["9","Julia's mother is 36, her father is 42 and Julia is 7. In how many years will the sum of all their ages be 100?","Mẹ Julia 36 tuổi, bố 42 tuổi và Julia 7 tuổi. Sau bao nhiêu năm tổng tuổi của họ bằng 100?",["5"],["Current total: 36 + 42 + 7 = 85.","The total rises by 3 each year.","(100 − 85) ÷ 3 = 5."],["Tổng hiện nay: 36 + 42 + 7 = 85.","Mỗi năm tổng tuổi tăng 3.","(100 − 85) ÷ 3 = 5."]],
    ["10","Phyllis is 5 and her father is 40. In how many years will her father's age be 6 times Phyllis' age?","Phyllis 5 tuổi, bố 40 tuổi. Sau bao nhiêu năm tuổi bố gấp 6 lần tuổi Phyllis?",["2"],["The age difference is 35.","At a 6:1 ratio, the difference is 5 equal parts.","One part is 35 ÷ 5 = 7, so wait 7 − 5 = 2 years."],["Hiệu số tuổi là 35.","Tỉ số 6 : 1 có hiệu bằng 5 phần.","Một phần là 35 ÷ 5 = 7, nên chờ 7 − 5 = 2 năm."]],
    ["11","Anna is 5 and her mother is 33. In how many years will her mother's age be 5 times Anna's age?","Anna 5 tuổi, mẹ 33 tuổi. Sau bao nhiêu năm tuổi mẹ gấp 5 lần tuổi Anna?",["2"],["The age difference is 28.","At a 5:1 ratio, the difference is 4 parts, so one part is 7.","Anna reaches 7 in 2 years."],["Hiệu số tuổi là 28.","Tỉ số 5 : 1 có hiệu bằng 4 phần nên một phần là 7.","Anna đạt 7 tuổi sau 2 năm."]],
    ["12","Wendy is 6. The sum of her age and her sister's age will be 40 in 9 years. How old is Wendy's sister now?","Wendy 6 tuổi. Sau 9 năm, tổng tuổi của Wendy và chị gái là 40. Hiện nay chị gái Wendy bao nhiêu tuổi?",["16"],["In 9 years Wendy will be 15.","Her sister will then be 40 − 15 = 25.","Now her sister is 25 − 9 = 16."],["Sau 9 năm Wendy 15 tuổi.","Khi đó chị gái 40 − 15 = 25 tuổi.","Hiện nay chị gái 25 − 9 = 16 tuổi."]],
    ["13","Mr Gibson is 5 years older than Mrs Gibson. The sum of their ages will be 95 in 5 years. How old is each of them now?","Ông Gibson hơn bà Gibson 5 tuổi. Sau 5 năm, tổng tuổi của họ bằng 95. Hiện nay mỗi người bao nhiêu tuổi?",["45","40"],["Their current total is 95 − 5 − 5 = 85.","Mrs Gibson: (85 − 5) ÷ 2 = 40.","Mr Gibson: 40 + 5 = 45."],["Tổng tuổi hiện nay là 95 − 5 − 5 = 85.","Bà Gibson: (85 − 5) ÷ 2 = 40.","Ông Gibson: 40 + 5 = 45."],["Mr Gibson","Mrs Gibson"],["ông Gibson","bà Gibson"]],
    ["14","Mrs Woody is 38 and is 4 years younger than Mr Woody. Jim, their youngest son, is 8. How many years from now will the sum of all their ages be 100?","Bà Woody 38 tuổi và ít hơn ông Woody 4 tuổi. Jim, con trai út, 8 tuổi. Sau bao nhiêu năm tổng tuổi của ba người bằng 100?",["4"],["Mr Woody is 38 + 4 = 42.","Current total: 38 + 42 + 8 = 88.","(100 − 88) ÷ 3 = 4."],["Ông Woody 38 + 4 = 42 tuổi.","Tổng hiện nay: 38 + 42 + 8 = 88.","(100 − 88) ÷ 3 = 4."]],
  ];
  exercises[5] = chapterFive.map(([n,en,vi,answers,stepsEn,stepsVi,labelsEn,labelsVi]) => {
    const id = `j1-c5-${n}`;
    solutions[5][id] = { answers: answers.map((answer)=>[answer]), hint:{en:"Draw an age line and keep the age difference fixed.",vi:"Vẽ trục tuổi và giữ nguyên hiệu số tuổi."}, guide:{en:stepsEn,vi:stepsVi} };
    return { n,id,source:"pdf",q:{en,vi},labels:labelsEn?{en:labelsEn,vi:labelsVi}:undefined,visual:`j1-age-${n}`,visualPlacement:"question" };
  });
  extra[5] = [
    {id:"j1-c5-extra-1",source:"ai",level:"warmup",q:{en:"Mai is 9 and her brother is 14. How many years older will he be in 6 years?",vi:"Mai 9 tuổi, anh trai 14 tuổi. Sau 6 năm, anh vẫn hơn Mai bao nhiêu tuổi?"},answers:[["5"]],hint:{en:"The age difference stays fixed.",vi:"Hiệu số tuổi không đổi."},steps:{en:["14 − 9 = 5."],vi:["14 − 9 = 5."]},visual:"j1-age-extra-1",visualPlacement:"question"},
    {id:"j1-c5-extra-2",source:"ai",level:"warmup",q:{en:"An is 6 and her mother is 30. How many times An's age is her mother's age?",vi:"An 6 tuổi, mẹ 30 tuổi. Tuổi mẹ gấp mấy lần tuổi An?"},answers:[["5"]],hint:{en:"Divide the older age by the younger age.",vi:"Lấy tuổi lớn chia tuổi nhỏ."},steps:{en:["30 ÷ 6 = 5."],vi:["30 ÷ 6 = 5."]},visual:"j1-age-extra-2",visualPlacement:"question"},
    {id:"j1-c5-extra-3",source:"ai",level:"core",q:{en:"A father is 34 and his son is 10. In how many years will the father be 3 times the son's age?",vi:"Bố 34 tuổi, con trai 10 tuổi. Sau bao nhiêu năm tuổi bố gấp 3 lần tuổi con?"},answers:[["2"]],hint:{en:"Use the fixed difference of 24.",vi:"Dùng hiệu số tuổi cố định là 24."},steps:{en:["At 3:1, two parts equal 24, so one part is 12.","The son reaches 12 in 2 years."],vi:["Ở tỉ số 3 : 1, hai phần bằng 24 nên một phần là 12.","Con đạt 12 tuổi sau 2 năm."]},visual:"j1-age-extra-3",visualPlacement:"question"},
    {id:"j1-c5-extra-4",source:"ai",level:"core",q:{en:"Three children are 6, 8 and 10. In how many years will their total age be 36?",vi:"Ba bạn nhỏ lần lượt 6, 8 và 10 tuổi. Sau bao nhiêu năm tổng tuổi bằng 36?"},answers:[["4"]],hint:{en:"Their total rises by 3 each year.",vi:"Mỗi năm tổng tuổi tăng 3."},steps:{en:["Current total is 24.","(36 − 24) ÷ 3 = 4."],vi:["Tổng hiện nay là 24.","(36 − 24) ÷ 3 = 4."]},visual:"j1-age-extra-4",visualPlacement:"question"},
    {id:"j1-c5-extra-5",source:"ai",level:"challenge",q:{en:"The sum of a mother and daughter's ages is 50. The mother is 26 years older. Find both ages.",vi:"Tổng tuổi hai mẹ con là 50, mẹ hơn con 26 tuổi. Tìm tuổi mỗi người."},answers:[["38"],["12"]],labels:{en:["mother","daughter"],vi:["mẹ","con"]},hint:{en:"Use sum and difference.",vi:"Dùng tổng và hiệu."},steps:{en:["Daughter: (50 − 26) ÷ 2 = 12.","Mother: 12 + 26 = 38."],vi:["Con: (50 − 26) ÷ 2 = 12.","Mẹ: 12 + 26 = 38."]},visual:"j1-age-extra-5",visualPlacement:"question"},
  ];

  chapters[6] = {
    id: 6, emoji: "➗", pages: "44–54", available: true,
    title: { en: "Division", vi: "Phép chia" },
    tagline: { en: "Read quotients and remainders, then use repeating cycles", vi: "Đọc thương, số dư và dùng chu kỳ lặp" },
    theory: [
      [{ en: "Dividend, divisor, quotient and remainder", vi: "Số bị chia, số chia, thương và số dư" }, { en: "Write a division as: dividend = divisor × quotient + remainder. The remainder must be smaller than the divisor.", vi: "Viết phép chia dưới dạng: số bị chia = số chia × thương + số dư. Số dư luôn nhỏ hơn số chia." }],
      [{ en: "Check a division", vi: "Kiểm tra phép chia" }, { en: "Multiply the divisor by the quotient, then add the remainder. The result must equal the dividend.", vi: "Lấy số chia nhân thương rồi cộng số dư. Kết quả phải bằng số bị chia." }],
      [{ en: "Use remainders for repeating patterns", vi: "Dùng số dư cho quy luật lặp" }, { en: "Find the length of one cycle and divide the requested position by that length. The remainder points to the item in the cycle.", vi: "Tìm độ dài một chu kỳ rồi chia vị trí cần tìm cho độ dài ấy. Số dư chỉ ra phần tử trong chu kỳ." }],
    ],
    examples: [
      { q:{en:"Complete: 48 ÷ 9 = □ R □.",vi:"Điền số: 48 ÷ 9 = □ dư □."}, steps:[{en:"9 × 5 = 45.",vi:"9 × 5 = 45."},{en:"48 − 45 = 3.",vi:"48 − 45 = 3."}], a:{en:"5 R 3",vi:"5 dư 3"}, visual:"j1-div-example-1" },
      { q:{en:"Complete: 25 ÷ □ = □ R 1.",vi:"Điền số: 25 ÷ □ = □ dư 1."}, steps:[{en:"Remove the remainder: 25 − 1 = 24.",vi:"Bỏ phần dư: 25 − 1 = 24."},{en:"Use a factor pair of 24: 4 × 6.",vi:"Dùng cặp thừa số của 24: 4 × 6."}], a:{en:"25 ÷ 4 = 6 R 1 or 25 ÷ 6 = 4 R 1",vi:"25 ÷ 4 = 6 dư 1 hoặc 25 ÷ 6 = 4 dư 1"}, visual:"j1-div-example-2" },
      { q:{en:"Find all dividends in □ ÷ 5 = □ R □ when quotient = remainder.",vi:"Tìm tất cả số bị chia trong □ ÷ 5 = □ dư □ khi thương bằng số dư."}, steps:[{en:"The remainder can be 1, 2, 3 or 4.",vi:"Số dư có thể là 1, 2, 3 hoặc 4."},{en:"Use dividend = 5 × quotient + remainder.",vi:"Dùng số bị chia = 5 × thương + số dư."}], a:{en:"6, 12, 18, 24",vi:"6, 12, 18, 24"}, visual:"j1-div-example-3" },
      { q:{en:"A pattern repeats: ○ ○ ● ● ●. What are the 24th and 32nd beads?",vi:"Chuỗi hạt lặp lại: ○ ○ ● ● ●. Hạt thứ 24 và thứ 32 có màu gì?"}, steps:[{en:"One cycle has 5 beads.",vi:"Một chu kỳ có 5 hạt."},{en:"24 leaves remainder 4: black. 32 leaves remainder 2: white.",vi:"24 dư 4: đen. 32 dư 2: trắng."}], a:{en:"24th black; 32nd white",vi:"Hạt 24 màu đen; hạt 32 màu trắng"}, visual:"j1-div-example-4" },
      { q:{en:"March 1 was a Sunday. What day of the week was March 25?",vi:"Ngày 1 tháng 3 là Chủ nhật. Ngày 25 tháng 3 là thứ mấy?"}, steps:[{en:"March 25 is 24 days after March 1.",vi:"Ngày 25 cách ngày 1 là 24 ngày."},{en:"24 ÷ 7 leaves remainder 3: Wednesday.",vi:"24 ÷ 7 dư 3: thứ Tư."}], a:{en:"Wednesday",vi:"Thứ Tư"}, visual:"j1-div-example-5" },
    ],
    check: ["j1-c6-1a","j1-c6-2a","j1-c6-7a","j1-c6-13","j1-c6-15"],
  };

  const divisionItems = [];
  const addDivision = (n, en, vi, answers, stepsEn, stepsVi, visual, labels) => {
    const id = `j1-c6-${n}`;
    divisionItems.push({ n, id, source:"pdf", q:{en,vi}, labels, visual, visualPlacement:"question" });
    solutions[6][id] = { answers, hint:{ en:"Use dividend = divisor × quotient + remainder.", vi:"Dùng số bị chia = số chia × thương + số dư." }, guide:{en:stepsEn,vi:stepsVi} };
  };
  [
    ["1a",36,7,5,1],["1b",45,6,7,3],["1c",51,7,7,2],["1d",28,5,5,3],
    ["1e",47,9,5,2],["1f",66,8,8,2],["1g",88,9,9,7],["1h",45,7,6,3],
  ].forEach(([n,a,b,q,r]) => addDivision(n,`Complete ${a} ÷ ${b} = □ R □.`,`Điền số: ${a} ÷ ${b} = □ dư □.`,[[String(q)],[String(r)]],[`${b} × ${q} = ${b*q}.`,`${a} − ${b*q} = ${r}.`],[`${b} × ${q} = ${b*q}.`,`${a} − ${b*q} = ${r}.`],`j1-div-${n}`,{en:["quotient","remainder"],vi:["thương","số dư"]}));
  [
    ["2a",26,6,4,2],["2b",39,6,6,3],["2c",47,9,5,2],
    ["2d",58,9,6,4],["2e",68,9,7,5],["2f",78,9,8,6],
  ].forEach(([n,a,b,q,r]) => addDivision(n,`Fill the boxes: ${a} ÷ ${b} = □ R □.`,`Điền vào ô trống: ${a} ÷ ${b} = □ dư □.`,[[String(q)],[String(r)]],[`${b} × ${q} = ${b*q}; ${a} − ${b*q} = ${r}.`],[`${b} × ${q} = ${b*q}; ${a} − ${b*q} = ${r}.`],`j1-div-${n}`,{en:["quotient","remainder"],vi:["thương","số dư"]}));
  [["3a",31,6,5,1],["3b",50,7,7,1],["3c",57,8,7,1],["3d",64,9,7,1]].forEach(([n,a,b,q,r]) => addDivision(n,`Divide ${a} by ${b}. Find the quotient and the smallest remainder.`,`Chia ${a} cho ${b}. Tìm thương và số dư nhỏ nhất.`,[[String(q)],[String(r)]],[`${a} = ${b} × ${q} + ${r}.`],[`${a} = ${b} × ${q} + ${r}.`],`j1-div-${n}`,{en:["quotient","remainder"],vi:["thương","số dư"]}));
  [["4a",17,3,5,2],["4b",39,5,7,4],["4c",27,4,6,3],["4d",35,6,5,5],["4e",47,6,7,5],["4f",62,7,8,6]].forEach(([n,a,b,q,r]) => addDivision(n,`Divide ${a} by ${b}. Find the quotient and greatest possible remainder.`,`Chia ${a} cho ${b}. Tìm thương và số dư lớn nhất có thể.`,[[String(q)],[String(r)]],[`${a} = ${b} × ${q} + ${r}; ${r} < ${b}.`],[`${a} = ${b} × ${q} + ${r}; ${r} < ${b}.`],`j1-div-${n}`,{en:["quotient","remainder"],vi:["thương","số dư"]}));
  [["5a",29,5,5,4],["5b",31,4,7,3],["5c",41,6,6,5],["5d",44,5,8,4],["5e",39,4,9,3],["5f",59,6,9,5]].forEach(([n,a,b,q,r]) => addDivision(n,`Divide ${a} using the smallest divisor greater than the remainder. Complete the division.`,`Chia ${a} với số chia nhỏ nhất nhưng lớn hơn số dư. Hoàn thành phép chia.`,[[String(b)],[String(q)],[String(r)]],[`The divisor is ${b}; ${a} = ${b} × ${q} + ${r}.`],[`Số chia là ${b}; ${a} = ${b} × ${q} + ${r}.`],`j1-div-${n}`,{en:["divisor","quotient","remainder"],vi:["số chia","thương","số dư"]}));
  [["6a",1,7],["6b",2,14],["6c",3,21],["6d",4,28],["6e",5,35]].forEach(([n,x,a]) => addDivision(n,`The divisor is 6 and the quotient equals the remainder ${x}. Find the dividend.`,`Số chia là 6, thương và số dư cùng bằng ${x}. Tìm số bị chia.`,[[String(a)]],[`6 × ${x} + ${x} = ${a}.`],[`6 × ${x} + ${x} = ${a}.`],`j1-div-${n}`));
  addDivision("7a","The pattern ○ ● ● repeats. What colour is the 23rd bead?","Chuỗi ○ ● ● lặp lại. Hạt thứ 23 có màu gì?",[["grey","gray","xám","màu xám"]],["23 ÷ 3 leaves remainder 2, the second bead."],["23 ÷ 3 dư 2, ứng với hạt thứ hai."],"j1-div-7a");
  addDivision("7b","The pattern ○ ● ● repeats. What colour is the 31st bead?","Chuỗi ○ ● ● lặp lại. Hạt thứ 31 có màu gì?",[["white","trắng","màu trắng"]],["31 ÷ 3 leaves remainder 1, the first bead."],["31 ÷ 3 dư 1, ứng với hạt đầu tiên."],"j1-div-7b");
  addDivision("8a","The pattern ○ ○ ■ ■ ■ repeats. What is the 26th shape?","Chuỗi ○ ○ ■ ■ ■ lặp lại. Hình thứ 26 là hình gì?",[["circle","hình tròn","tròn"]],["26 ÷ 5 leaves remainder 1."],["26 ÷ 5 dư 1."],"j1-div-8a");
  addDivision("8b","The pattern ○ ○ ■ ■ ■ repeats. What is the 33rd shape?","Chuỗi ○ ○ ■ ■ ■ lặp lại. Hình thứ 33 là hình gì?",[["square","hình vuông","vuông"]],["33 ÷ 5 leaves remainder 3."],["33 ÷ 5 dư 3."],"j1-div-8b");
  addDivision("9","Thirty-four number cards are dealt repeatedly to Charmaine, Shola and Amy in that order. Who receives the last card?","Ba mươi bốn thẻ số được chia lần lượt cho Charmaine, Shola và Amy rồi lặp lại. Ai nhận thẻ cuối cùng?",[["Charmaine"]],["34 ÷ 3 leaves remainder 1, so return to the first person."],["34 ÷ 3 dư 1 nên quay về người đầu tiên."],"j1-div-9");
  addDivision("10","Fifty-four marbles are shared repeatedly: 1 to Jolene, 2 to Anna and 1 to Jim. Who receives the last marble?","Năm mươi bốn viên bi được chia lặp lại: 1 viên cho Jolene, 2 viên cho Anna và 1 viên cho Jim. Ai nhận viên cuối cùng?",[["Anna"]],["One cycle uses 4 marbles. 54 ÷ 4 leaves remainder 2, which is Anna's first marble."],["Một vòng dùng 4 viên. 54 ÷ 4 dư 2, ứng với viên đầu tiên của Anna."],"j1-div-10");
  addDivision("11a","The number pattern 1, 3, 2, 4 repeats. What is the 27th number?","Dãy số 1, 3, 2, 4 lặp lại. Số thứ 27 là số nào?",[["2"]],["27 ÷ 4 leaves remainder 3."],["27 ÷ 4 dư 3."],"j1-div-11a");
  addDivision("11b","The number pattern 1, 3, 2, 4 repeats. What is the 42nd number?","Dãy số 1, 3, 2, 4 lặp lại. Số thứ 42 là số nào?",[["3"]],["42 ÷ 4 leaves remainder 2."],["42 ÷ 4 dư 2."],"j1-div-11b");
  addDivision("12a","Lanterns repeat as 3 red, 2 orange, 1 pink. What colour is the 38th lantern?","Đèn lồng lặp theo thứ tự 3 đỏ, 2 cam, 1 hồng. Đèn thứ 38 có màu gì?",[["red","đỏ","màu đỏ"]],["A cycle has 6 lanterns. 38 leaves remainder 2: red."],["Một chu kỳ có 6 đèn. 38 dư 2: màu đỏ."],"j1-div-12a");
  addDivision("12b","Lanterns repeat as 3 red, 2 orange, 1 pink. What colour is the 58th lantern?","Đèn lồng lặp theo thứ tự 3 đỏ, 2 cam, 1 hồng. Đèn thứ 58 có màu gì?",[["orange","cam","màu cam"]],["58 ÷ 6 leaves remainder 4: orange."],["58 ÷ 6 dư 4: màu cam."],"j1-div-12b");
  addDivision("13","May 1 was a Wednesday. What day of the week was May 23?","Ngày 1 tháng 5 là thứ Tư. Ngày 23 tháng 5 là thứ mấy?",[["Thursday","thứ năm","Thứ Năm"]],["May 23 is 22 days later. 22 ÷ 7 leaves remainder 1."],["Ngày 23 cách ngày 1 là 22 ngày. 22 ÷ 7 dư 1."],"j1-div-13");
  addDivision("14","March 20 was a Sunday. What day of the week was April 11?","Ngày 20 tháng 3 là Chủ nhật. Ngày 11 tháng 4 là thứ mấy?",[["Monday","thứ hai","Thứ Hai"]],["April 11 is 22 days after March 20. 22 ÷ 7 leaves remainder 1."],["Ngày 11 tháng 4 cách ngày 20 tháng 3 là 22 ngày. 22 ÷ 7 dư 1."],"j1-div-14");
  addDivision("15","A 2-digit number leaves remainder 1 when divided by 3 and also by 5. List all possible 2-digit numbers.","Một số có hai chữ số chia cho 3 dư 1 và chia cho 5 cũng dư 1. Liệt kê tất cả số có thể có.",[["16,31,46,61,76,91","16, 31, 46, 61, 76, 91"]],["Subtract 1. The result must be a 2-digit multiple of 15.","Add 1 to 15, 30, 45, 60, 75 and 90."],["Bớt 1. Kết quả phải là bội có hai chữ số của 15.","Cộng 1 vào 15, 30, 45, 60, 75 và 90."],"j1-div-15");
  addDivision("16","A 2-digit number leaves remainder 2 when divided by 4 and also by 5. List all possible 2-digit numbers.","Một số có hai chữ số chia cho 4 dư 2 và chia cho 5 cũng dư 2. Liệt kê tất cả số có thể có.",[["22,42,62,82","22, 42, 62, 82"]],["Subtract 2. The result must be a 2-digit multiple of 20.","Add 2 to 20, 40, 60 and 80."],["Bớt 2. Kết quả phải là bội có hai chữ số của 20.","Cộng 2 vào 20, 40, 60 và 80."],"j1-div-16");
  exercises[6] = divisionItems;
  extra[6] = [
    {id:"j1-c6-extra-1",source:"ai",level:"warmup",q:{en:"Complete 29 ÷ 6 = □ R □.",vi:"Điền số: 29 ÷ 6 = □ dư □."},answers:[["4"],["5"]],labels:{en:["quotient","remainder"],vi:["thương","số dư"]},hint:{en:"Use the largest multiple of 6 below 29.",vi:"Dùng bội lớn nhất của 6 nhỏ hơn 29."},steps:{en:["6 × 4 = 24; 29 − 24 = 5."],vi:["6 × 4 = 24; 29 − 24 = 5."]},visual:"j1-div-extra-1",visualPlacement:"question"},
    {id:"j1-c6-extra-2",source:"ai",level:"warmup",q:{en:"The pattern ▲ ● ● repeats. What is the 20th shape?",vi:"Chuỗi ▲ ● ● lặp lại. Hình thứ 20 là hình gì?"},answers:[["circle","hình tròn","tròn"]],hint:{en:"Divide 20 by 3.",vi:"Chia 20 cho 3."},steps:{en:["20 leaves remainder 2, so choose the second shape."],vi:["20 dư 2 nên chọn hình thứ hai."]},visual:"j1-div-extra-2",visualPlacement:"question"},
    {id:"j1-c6-extra-3",source:"ai",level:"core",q:{en:"June 2 was a Monday. What day was June 24?",vi:"Ngày 2 tháng 6 là thứ Hai. Ngày 24 tháng 6 là thứ mấy?"},answers:[["Tuesday","thứ ba","Thứ Ba"]],hint:{en:"Count the number of days after June 2.",vi:"Đếm số ngày sau ngày 2 tháng 6."},steps:{en:["24 − 2 = 22; 22 leaves remainder 1 when divided by 7."],vi:["24 − 2 = 22; 22 chia 7 dư 1."]},visual:"j1-div-extra-3",visualPlacement:"question"},
    {id:"j1-c6-extra-4",source:"ai",level:"core",q:{en:"A 2-digit number leaves remainder 3 when divided by both 4 and 5. List all possibilities.",vi:"Một số có hai chữ số chia cho cả 4 và 5 đều dư 3. Liệt kê mọi khả năng."},answers:[["23,43,63,83","23, 43, 63, 83"]],hint:{en:"Subtract 3, then use multiples of 20.",vi:"Bớt 3 rồi dùng các bội của 20."},steps:{en:["20 + 3, 40 + 3, 60 + 3, 80 + 3."],vi:["20 + 3, 40 + 3, 60 + 3, 80 + 3."]},visual:"j1-div-extra-4",visualPlacement:"question"},
    {id:"j1-c6-extra-5",source:"ai",level:"challenge",q:{en:"Cards are dealt A, B, C, D and repeat. Who receives the 73rd card?",vi:"Thẻ được chia lần lượt cho A, B, C, D rồi lặp lại. Ai nhận thẻ thứ 73?"},answers:[["A","a"]],hint:{en:"One cycle has 4 cards.",vi:"Một vòng có 4 thẻ."},steps:{en:["73 ÷ 4 leaves remainder 1, so the first person A receives it."],vi:["73 ÷ 4 dư 1 nên người đầu tiên A nhận thẻ."]},visual:"j1-div-extra-5",visualPlacement:"question"},
  ];

  chapters[7] = {
    id:7, emoji:"🐔", pages:"55–63", available:true,
    title:{en:"Chicken-and-Rabbit Problems",vi:"Bài toán gà và thỏ"},
    tagline:{en:"Two kinds, one total count and one total value",vi:"Hai loại, biết tổng số và tổng giá trị"},
    theory:[
      [{en:"Assume all are the smaller kind",vi:"Giả sử tất cả thuộc loại nhỏ"},{en:"Multiply the total number of objects by the smaller unit value.",vi:"Lấy tổng số đối tượng nhân với giá trị của loại nhỏ."}],
      [{en:"Find the shortage",vi:"Tìm phần còn thiếu"},{en:"Subtract the assumed total from the real total. Each larger object adds the difference between the two unit values.",vi:"Lấy tổng thật trừ tổng giả sử. Mỗi đối tượng loại lớn làm tăng thêm đúng hiệu hai giá trị đơn vị."}],
      [{en:"Convert and subtract",vi:"Đổi loại rồi lấy tổng trừ"},{en:"Larger count = shortage ÷ unit difference. Smaller count = total count − larger count.",vi:"Số loại lớn = phần thiếu ÷ hiệu đơn vị. Số loại nhỏ = tổng số − số loại lớn."}],
    ],
    examples:[
      {q:{en:"Four chickens and rabbits have 10 legs altogether. Find each number.",vi:"Bốn con gà và thỏ có tất cả 10 chân. Tìm số con mỗi loại."},steps:[{en:"Assume all 4 are chickens: 4 × 2 = 8 legs.",vi:"Giả sử cả 4 con đều là gà: 4 × 2 = 8 chân."},{en:"The shortage is 10 − 8 = 2 legs. A rabbit adds 2 legs.",vi:"Thiếu 10 − 8 = 2 chân. Mỗi con thỏ tăng thêm 2 chân."}],a:{en:"3 chickens and 1 rabbit",vi:"3 con gà và 1 con thỏ"},visual:"j1-mix-example-1"},
      {q:{en:"A spider has 8 legs and a dragonfly has 6. Six insects have 40 legs. Find each number.",vi:"Nhện có 8 chân, chuồn chuồn có 6 chân. Sáu con có 40 chân. Tìm số con mỗi loại."},steps:[{en:"Assume all are dragonflies: 6 × 6 = 36.",vi:"Giả sử tất cả là chuồn chuồn: 6 × 6 = 36."},{en:"The shortage is 4; each spider adds 2, so there are 2 spiders.",vi:"Thiếu 4 chân; mỗi nhện tăng 2 chân nên có 2 con nhện."}],a:{en:"2 spiders and 4 dragonflies",vi:"2 con nhện và 4 con chuồn chuồn"},visual:"j1-mix-example-2"},
      {q:{en:"A pencil costs $2 and a pen costs $4. Six items cost $20. Find each number.",vi:"Bút chì giá 2 đô, bút mực giá 4 đô. Sáu món giá 20 đô. Tìm số món mỗi loại."},steps:[{en:"Assume all are pencils: 6 × $2 = $12.",vi:"Giả sử tất cả là bút chì: 6 × 2 = 12 đô."},{en:"The shortage is $8; each pen adds $2, so there are 4 pens.",vi:"Thiếu 8 đô; mỗi bút mực tăng 2 đô nên có 4 bút mực."}],a:{en:"4 pens and 2 pencils",vi:"4 bút mực và 2 bút chì"},visual:"j1-mix-example-3"},
      {q:{en:"Eleven chickens and rabbits have 30 legs. Find each number.",vi:"Mười một con gà và thỏ có 30 chân. Tìm số con mỗi loại."},steps:[{en:"Assume all chickens: 11 × 2 = 22.",vi:"Giả sử tất cả là gà: 11 × 2 = 22."},{en:"(30 − 22) ÷ (4 − 2) = 4 rabbits.",vi:"(30 − 22) ÷ (4 − 2) = 4 con thỏ."}],a:{en:"7 chickens and 4 rabbits",vi:"7 con gà và 4 con thỏ"},visual:"j1-mix-example-4"},
      {q:{en:"Twelve $5 and $2 stamps cost $45. Find each number.",vi:"Mười hai tem loại 5 đô và 2 đô có tổng giá 45 đô. Tìm số tem mỗi loại."},steps:[{en:"Assume all are $2 stamps: 12 × 2 = 24.",vi:"Giả sử tất cả là tem 2 đô: 12 × 2 = 24."},{en:"(45 − 24) ÷ (5 − 2) = 7 five-dollar stamps.",vi:"(45 − 24) ÷ (5 − 2) = 7 tem 5 đô."}],a:{en:"7 five-dollar and 5 two-dollar stamps",vi:"7 tem 5 đô và 5 tem 2 đô"},visual:"j1-mix-example-5"},
    ],
    check:["j1-c7-1","j1-c7-3","j1-c7-5","j1-c7-7","j1-c7-10"],
  };
  const chapterSeven = [
    ["1","There are 8 cars and motorcycles in a car park. There are 26 wheels altogether. How many of each are there?","Trong bãi có 8 ô tô và xe máy, tổng cộng 26 bánh xe. Có bao nhiêu xe mỗi loại?",["cars","motorcycles"],["ô tô","xe máy"],["5","3"],["Assume all are motorcycles: 8 × 2 = 16 wheels.","(26 − 16) ÷ (4 − 2) = 5 cars; 8 − 5 = 3 motorcycles."],["Giả sử tất cả là xe máy: 8 × 2 = 16 bánh.","(26 − 16) ÷ (4 − 2) = 5 ô tô; 8 − 5 = 3 xe máy."]],
    ["2","An adult movie ticket costs $8 and a child ticket costs $5. Mr Fox paid $31 for 5 tickets. How many of each did he buy?","Vé người lớn giá 8 đô, vé trẻ em giá 5 đô. Ông Fox trả 31 đô cho 5 vé. Ông mua bao nhiêu vé mỗi loại?",["adult tickets","child tickets"],["vé người lớn","vé trẻ em"],["2","3"],["Assume all are child tickets: 5 × 5 = 25.","(31 − 25) ÷ (8 − 5) = 2 adult tickets; 3 child tickets."],["Giả sử tất cả là vé trẻ em: 5 × 5 = 25.","(31 − 25) ÷ (8 − 5) = 2 vé người lớn; 3 vé trẻ em."]],
    ["3","A science-fiction book costs $5 and an adventure book costs $3. Louisa paid $26 for 6 books. How many of each did she buy?","Sách khoa học viễn tưởng giá 5 đô, sách phiêu lưu giá 3 đô. Louisa trả 26 đô cho 6 quyển. Cô mua bao nhiêu quyển mỗi loại?",["science-fiction","adventure"],["khoa học viễn tưởng","phiêu lưu"],["4","2"],["Assume all are adventure books: 6 × 3 = 18.","(26 − 18) ÷ (5 − 3) = 4 science-fiction books; 2 adventure books."],["Giả sử tất cả là sách phiêu lưu: 6 × 3 = 18.","(26 − 18) ÷ (5 − 3) = 4 sách khoa học viễn tưởng; 2 sách phiêu lưu."]],
    ["4","A tricycle has 3 wheels and a bicycle has 2. Eight bicycles and tricycles have 22 wheels. How many of each are there?","Xe ba bánh có 3 bánh, xe đạp có 2 bánh. Tám chiếc có tổng 22 bánh. Có bao nhiêu xe mỗi loại?",["tricycles","bicycles"],["xe ba bánh","xe đạp"],["6","2"],["Assume all are bicycles: 8 × 2 = 16.","(22 − 16) ÷ (3 − 2) = 6 tricycles; 2 bicycles."],["Giả sử tất cả là xe đạp: 8 × 2 = 16.","(22 − 16) ÷ (3 − 2) = 6 xe ba bánh; 2 xe đạp."]],
    ["5","A farmer has 12 chickens and rabbits with 34 legs altogether. How many of each are there?","Một nông dân có 12 con gà và thỏ với tổng cộng 34 chân. Có bao nhiêu con mỗi loại?",["chickens","rabbits"],["gà","thỏ"],["7","5"],["Assume all are chickens: 12 × 2 = 24.","(34 − 24) ÷ 2 = 5 rabbits; 7 chickens."],["Giả sử tất cả là gà: 12 × 2 = 24.","(34 − 24) ÷ 2 = 5 con thỏ; 7 con gà."]],
    ["6","A farmer has 17 chickens and rabbits and counts 52 legs. How many of each are there?","Một nông dân có 17 con gà và thỏ, đếm được 52 chân. Có bao nhiêu con mỗi loại?",["chickens","rabbits"],["gà","thỏ"],["8","9"],["Assume all are chickens: 17 × 2 = 34.","(52 − 34) ÷ 2 = 9 rabbits; 8 chickens."],["Giả sử tất cả là gà: 17 × 2 = 34.","(52 − 34) ÷ 2 = 9 con thỏ; 8 con gà."]],
    ["7","A big box holds 12 marbles and a small box holds 6. Eighty-four marbles are placed in 10 boxes. How many of each box are there?","Hộp lớn đựng 12 viên bi, hộp nhỏ đựng 6 viên. Có 84 viên bi trong 10 hộp. Có bao nhiêu hộp mỗi loại?",["big boxes","small boxes"],["hộp lớn","hộp nhỏ"],["4","6"],["Assume all are small: 10 × 6 = 60.","(84 − 60) ÷ (12 − 6) = 4 big boxes; 6 small boxes."],["Giả sử tất cả là hộp nhỏ: 10 × 6 = 60.","(84 − 60) ÷ (12 − 6) = 4 hộp lớn; 6 hộp nhỏ."]],
    ["8","A spider has 8 legs and a dragonfly has 6. Ten spiders and dragonflies have 68 legs. How many of each are there?","Nhện có 8 chân, chuồn chuồn có 6 chân. Mười con có tổng 68 chân. Có bao nhiêu con mỗi loại?",["spiders","dragonflies"],["nhện","chuồn chuồn"],["4","6"],["Assume all are dragonflies: 10 × 6 = 60.","(68 − 60) ÷ (8 − 6) = 4 spiders; 6 dragonflies."],["Giả sử tất cả là chuồn chuồn: 10 × 6 = 60.","(68 − 60) ÷ (8 − 6) = 4 con nhện; 6 con chuồn chuồn."]],
    ["9","Randy paid $16 for 11 two-dollar and one-dollar stamps. How many of each did he buy?","Randy trả 16 đô cho 11 tem loại 2 đô và 1 đô. Cậu mua bao nhiêu tem mỗi loại?",["$2 stamps","$1 stamps"],["tem 2 đô","tem 1 đô"],["5","6"],["Assume all are $1 stamps: 11 × 1 = 11.","(16 − 11) ÷ (2 − 1) = 5 two-dollar stamps; 6 one-dollar stamps."],["Giả sử tất cả là tem 1 đô: 11 × 1 = 11.","(16 − 11) ÷ (2 − 1) = 5 tem 2 đô; 6 tem 1 đô."]],
    ["10","A truck has 6 wheels and a car has 4. Fourteen trucks and cars have 72 wheels. How many of each are there?","Xe tải có 6 bánh, ô tô có 4 bánh. Mười bốn xe có tổng 72 bánh. Có bao nhiêu xe mỗi loại?",["trucks","cars"],["xe tải","ô tô"],["8","6"],["Assume all are cars: 14 × 4 = 56.","(72 − 56) ÷ (6 − 4) = 8 trucks; 6 cars."],["Giả sử tất cả là ô tô: 14 × 4 = 56.","(72 − 56) ÷ (6 − 4) = 8 xe tải; 6 ô tô."]],
  ];
  exercises[7] = chapterSeven.map(([n,en,vi,labelsEn,labelsVi,answers,stepsEn,stepsVi])=>{
    const id=`j1-c7-${n}`;
    solutions[7][id]={answers:answers.map(x=>[x]),hint:{en:"Assume all objects are the kind with the smaller unit value.",vi:"Giả sử tất cả đều thuộc loại có giá trị đơn vị nhỏ hơn."},guide:{en:stepsEn,vi:stepsVi}};
    return {n,id,source:"pdf",q:{en,vi},labels:{en:labelsEn,vi:labelsVi},visual:`j1-mix-${n}`,visualPlacement:"question"};
  });
  extra[7] = [
    {id:"j1-c7-extra-1",source:"ai",level:"warmup",q:{en:"Five chickens and rabbits have 14 legs. Find each number.",vi:"Năm con gà và thỏ có 14 chân. Tìm số con mỗi loại."},answers:[["3"],["2"]],labels:{en:["chickens","rabbits"],vi:["gà","thỏ"]},hint:{en:"Assume all chickens.",vi:"Giả sử tất cả là gà."},steps:{en:["5 × 2 = 10; (14 − 10) ÷ 2 = 2 rabbits."],vi:["5 × 2 = 10; (14 − 10) ÷ 2 = 2 con thỏ."]},visual:"j1-mix-extra-1",visualPlacement:"question"},
    {id:"j1-c7-extra-2",source:"ai",level:"warmup",q:{en:"Six $3 and $1 cards cost $14. Find each number.",vi:"Sáu thẻ loại 3 đô và 1 đô có tổng 14 đô. Tìm số thẻ mỗi loại."},answers:[["4"],["2"]],labels:{en:["$3 cards","$1 cards"],vi:["thẻ 3 đô","thẻ 1 đô"]},hint:{en:"Assume all $1 cards.",vi:"Giả sử tất cả là thẻ 1 đô."},steps:{en:["6 × 1 = 6; (14 − 6) ÷ 2 = 4."],vi:["6 × 1 = 6; (14 − 6) ÷ 2 = 4."]},visual:"j1-mix-extra-2",visualPlacement:"question"},
    {id:"j1-c7-extra-3",source:"ai",level:"core",q:{en:"Nine bicycles and tricycles have 23 wheels. Find each number.",vi:"Chín xe đạp và xe ba bánh có 23 bánh. Tìm số xe mỗi loại."},answers:[["5"],["4"]],labels:{en:["tricycles","bicycles"],vi:["xe ba bánh","xe đạp"]},hint:{en:"Assume all bicycles.",vi:"Giả sử tất cả là xe đạp."},steps:{en:["9 × 2 = 18; 23 − 18 = 5 tricycles."],vi:["9 × 2 = 18; 23 − 18 = 5 xe ba bánh."]},visual:"j1-mix-extra-3",visualPlacement:"question"},
    {id:"j1-c7-extra-4",source:"ai",level:"core",q:{en:"Ten adult and child tickets cost $62. Adult tickets are $8 and child tickets are $5. Find each number.",vi:"Mười vé người lớn và trẻ em có giá 62 đô. Vé người lớn 8 đô, vé trẻ em 5 đô. Tìm số vé mỗi loại."},answers:[["4"],["6"]],labels:{en:["adult","child"],vi:["người lớn","trẻ em"]},hint:{en:"Assume all child tickets.",vi:"Giả sử tất cả là vé trẻ em."},steps:{en:["10 × 5 = 50; (62 − 50) ÷ 3 = 4 adult tickets."],vi:["10 × 5 = 50; (62 − 50) ÷ 3 = 4 vé người lớn."]},visual:"j1-mix-extra-4",visualPlacement:"question"},
    {id:"j1-c7-extra-5",source:"ai",level:"challenge",q:{en:"Twenty 2-point and 5-point questions total 64 points. How many of each are there?",vi:"Hai mươi câu loại 2 điểm và 5 điểm có tổng 64 điểm. Có bao nhiêu câu mỗi loại?"},answers:[["8"],["12"]],labels:{en:["5-point","2-point"],vi:["câu 5 điểm","câu 2 điểm"]},hint:{en:"Assume all are worth 2 points.",vi:"Giả sử tất cả là câu 2 điểm."},steps:{en:["20 × 2 = 40; (64 − 40) ÷ 3 = 8 five-point questions."],vi:["20 × 2 = 40; (64 − 40) ÷ 3 = 8 câu 5 điểm."]},visual:"j1-mix-extra-5",visualPlacement:"question"},
  ];

  window.MQ_BOOK_DATA = window.MQ_BOOK_DATA || {};
  window.MQ_BOOK_DATA.junior1 = { chapters, exercises, solutions, extra };
})();
