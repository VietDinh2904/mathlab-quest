(function registerChapter() {
  "use strict";
  const bi = (en, vi) => ({ en, vi });
  const item = (id, n, en, vi, answers, hintEn, hintVi, guideEn, guideVi, labels) => ({
    id, n: String(n), q: bi(en, vi), ans: answers.map((x) => [String(x)]),
    hint: bi(hintEn, hintVi), guide: bi(guideEn, guideVi),
    ...(labels ? { labels: bi(labels.en, labels.vi) } : {}), visual: `list-${id}`,
  });
  window.BOOK_DATA = window.BOOK_DATA || {};
  window.BOOK_DATA["13"] = {
    title: "Make a List", emoji: "📝", pages: "116–125",
    theory: [
      ["List systematically", "Choose a fixed starting point and write every case in a consistent order."],
      ["Avoid repeats", "Mark each case once so swapped or previously used combinations are not counted twice."],
      ["Use a table", "For factor pairs, coin choices or two sets of objects, a table makes missing cases visible."],
      ["Check the conditions", "Test every listed case against the total, difference, sum, or availability limits."],
    ],
    examples: [
      { q: "Form 3-digit numbers with 3, 4 and 5, using each once.", steps: ["Start with 3 and list 345, 354.", "Repeat with 4 and 5 first."], a: "6 ways" },
      { q: "Two numbers have product 54 and difference 15.", steps: ["List factor pairs of 54.", "Compare each difference."], a: "18 and 3" },
      { q: "Use one 10¢, one 20¢ and one 50¢ stamp.", steps: ["List one-stamp, two-stamp and three-stamp totals.", "Remove duplicate totals."], a: "7 postage values" },
      { q: "A coach travels from City A through five towns to City B.", steps: ["List possible destinations from each stop.", "Add 6+5+4+3+2+1."], a: "21 ticket types" },
    ],
    practice: [
      item("13-1",1,"How many numbers from 1 to 45 are multiples of 3?","Có bao nhiêu số từ 1 đến 45 là bội của 3?",[15],"List 3, 6, 9, ... or divide the last number by 3.","Liệt kê 3, 6, 9,... hoặc chia số cuối cho 3.","45÷3=15, so there are 15 multiples.","45÷3=15 nên có 15 bội số."),
      item("13-2",2,"In how many ways can a 3-digit number be formed using 1, 2 and 3 once in each combination?","Có bao nhiêu số có 3 chữ số được tạo từ 1, 2, 3, mỗi chữ số dùng đúng một lần?",[6],"Fix the first digit, then list the two orders of the remaining digits.","Cố định chữ số đầu rồi liệt kê hai cách xếp các chữ số còn lại.","123, 132, 213, 231, 312 and 321: 6 ways.","Có 123, 132, 213, 231, 312 và 321: 6 cách."),
      item("13-3",3,"A file costs 70¢. Jeremy has five 10¢ coins, three 20¢ coins and one 50¢ coin. In how many ways can he make exactly 70¢?","Một bìa hồ sơ giá 70 xu. Jeremy có năm đồng 10 xu, ba đồng 20 xu và một đồng 50 xu. Có bao nhiêu cách trả đúng 70 xu?",[5],"List cases with no 50¢ coin, then cases with the 50¢ coin.","Liệt kê trường hợp không dùng đồng 50 xu rồi trường hợp có dùng.","The five ways are 5×10+20; 3×10+2×20; 10+3×20; 2×10+50; 20+50.","Năm cách là 5×10+20; 3×10+2×20; 10+3×20; 2×10+50; 20+50."),
      item("13-4",4,"The product of two numbers is 60 and their difference is 11. Find the two numbers.","Tích hai số là 60 và hiệu của chúng là 11. Tìm hai số.",[4,15],"List the factor pairs of 60.","Liệt kê các cặp thừa số của 60.","The pair 4×15=60 has difference 15−4=11.","Cặp 4×15=60 có hiệu 15−4=11.",{en:["smaller","larger"],vi:["số bé","số lớn"]}),
      item("13-5",5,"The keys to 6 padlocks are mixed up and look alike. At most, how many attempts are needed to match every key to its padlock?","Chìa khóa của 6 ổ khóa bị trộn lẫn và trông giống nhau. Nhiều nhất cần bao nhiêu lần thử để ghép đúng tất cả chìa khóa?",[15],"After five failed tests, the last key is known without another test.","Sau năm lần thử sai, chìa cuối được xác định mà không cần thử.","Worst case: 5+4+3+2+1=15 attempts.","Trường hợp xấu nhất: 5+4+3+2+1=15 lần thử."),
      item("13-6",6,"At a party, every guest shakes hands with every other guest once. How many handshakes occur among 15 guests?","Trong một bữa tiệc, mỗi khách bắt tay mỗi người khác đúng một lần. Có bao nhiêu cái bắt tay giữa 15 khách?",[105],"The guests contribute 14, then 13, down to 1 new handshakes.","Số bắt tay mới lần lượt là 14, 13,..., 1.","14+13+...+1=105 handshakes.","14+13+...+1=105 cái bắt tay."),
      item("13-7",7,"There were 66 matches in a basketball league. Each team played every other team exactly once. How many teams were there?","Một giải bóng rổ có 66 trận. Mỗi đội đấu với mọi đội khác đúng một lần. Có bao nhiêu đội?",[12],"Build triangular totals until the sum reaches 66.","Cộng dần 1+2+... cho đến khi được 66.","1+2+...+11=66, so there were 12 teams.","1+2+...+11=66 nên có 12 đội."),
      item("13-8",8,"The product of two numbers is 144 and their sum is 25. Find the two numbers.","Tích hai số là 144 và tổng của chúng là 25. Tìm hai số.",[9,16],"List factor pairs of 144 and compare their sums.","Liệt kê các cặp thừa số của 144 rồi so sánh tổng.","9×16=144 and 9+16=25.","9×16=144 và 9+16=25.",{en:["smaller","larger"],vi:["số bé","số lớn"]}),
      item("13-9",9,"How many numbers from 1 to 100 are multiples of 4?","Có bao nhiêu số từ 1 đến 100 là bội của 4?",[25],"Find the last multiple and divide by 4.","Tìm bội cuối rồi chia cho 4.","100÷4=25, so there are 25 multiples.","100÷4=25 nên có 25 bội số."),
      item("13-10",10,"How many 4-digit numbers can be formed using 3, 5, 8 and 0 without repeating any digit?","Có bao nhiêu số có 4 chữ số được tạo từ 3, 5, 8 và 0 mà không lặp chữ số?",[18],"A 4-digit number cannot begin with 0.","Số có 4 chữ số không thể bắt đầu bằng 0.","Choose 3, 5 or 8 first; the other three digits have 6 orders. Thus 3×6=18.","Chọn 3, 5 hoặc 8 đứng đầu; ba chữ số còn lại có 6 cách xếp. Vậy 3×6=18."),
      item("13-11",11,"A shop has 3 types of school bags and 4 types of pencil boxes. How many combinations of one bag and one pencil box are possible?","Cửa hàng có 3 loại cặp sách và 4 loại hộp bút. Có bao nhiêu cách chọn một cặp sách và một hộp bút?",[12],"Pair each bag with all four pencil boxes.","Ghép mỗi cặp sách với cả bốn hộp bút.","3×4=12 combinations.","3×4=12 cách chọn."),
      item("13-12",12,"In how many ways can 15 marbles be split into 4 groups, with a different positive number of marbles in each group?","Có bao nhiêu cách chia 15 viên bi thành 4 nhóm, mỗi nhóm có số bi dương khác nhau?",[6],"List four increasing positive numbers with total 15.","Liệt kê bốn số dương tăng dần có tổng 15.","The six groups are 1,2,3,9; 1,2,4,8; 1,2,5,7; 1,3,4,7; 1,3,5,6; 2,3,4,6.","Sáu cách là 1,2,3,9; 1,2,4,8; 1,2,5,7; 1,3,4,7; 1,3,5,6; 2,3,4,6."),
      item("13-13",13,"In how many ways can Mrs Culkin choose a monitor and an assistant monitor among 6 students?","Cô Culkin có bao nhiêu cách chọn một lớp trưởng và một lớp phó trong 6 học sinh?",[15],"Following the book's listing method, count each pair once.","Theo cách liệt kê của sách, đếm mỗi cặp một lần.","5+4+3+2+1=15 choices in the book's method.","Theo cách của sách: 5+4+3+2+1=15 cách."),
      item("13-14",14,"Edward has two 20¢ stamps and two 50¢ stamps. How many different positive postage values can be made?","Edward có hai tem 20 xu và hai tem 50 xu. Có thể tạo bao nhiêu mức bưu phí dương khác nhau?",[8],"List totals using zero, one or two 50¢ stamps, excluding the empty choice.","Liệt kê tổng khi dùng 0, 1 hoặc 2 tem 50 xu, không tính trường hợp không dùng tem.","The distinct totals are 20, 40, 50, 70, 90, 100, 120 and 140: 8 values.","Các tổng khác nhau là 20, 40, 50, 70, 90, 100, 120 và 140: 8 mức."),
      item("13-15",15,"Students may subscribe to one or two of three magazines: Today's Scientists, Maths Puzzles and The ABCs of English. How many choices are possible?","Học sinh có thể đăng ký một hoặc hai trong ba tạp chí: Today's Scientists, Maths Puzzles và The ABCs of English. Có bao nhiêu lựa chọn?",[6],"List the three single magazines and the three pairs.","Liệt kê ba lựa chọn một tạp chí và ba cặp tạp chí.","There are 3 single choices and 3 pairs, giving 6 choices.","Có 3 lựa chọn một tạp chí và 3 cặp, tổng cộng 6 lựa chọn."),
    ],
    check:["13-2","13-5","13-8","13-12","13-15"],
  };
})();
