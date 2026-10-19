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

  window.MQ_BOOK_DATA = window.MQ_BOOK_DATA || {};
  window.MQ_BOOK_DATA.junior1 = { chapters, exercises, solutions, extra };
})();
