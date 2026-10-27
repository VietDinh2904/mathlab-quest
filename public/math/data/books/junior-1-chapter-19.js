(function registerJuniorOneChapterNineteen() {
  "use strict";
  const book = window.MQ_BOOK_DATA && window.MQ_BOOK_DATA.junior1;
  if (!book) return;
  const { chapters, exercises, solutions, extra } = book;

  chapters[19] = {
    id: 19, emoji: "↩️", pages: "154–160", available: true,
    title: { en: "Working Backwards", vi: "Làm ngược từ kết quả" },
    tagline: { en: "Undo the last operation first", vi: "Đảo phép tính cuối cùng trước" },
    theory: [
      [{ en: "Start at the end", vi: "Bắt đầu từ kết quả" }, { en: "Read the operations from right to left.", vi: "Đọc các phép tính từ phải sang trái." }],
      [{ en: "Use inverse operations", vi: "Dùng phép tính ngược" }, { en: "Undo addition with subtraction, subtraction with addition, multiplication with division, and division with multiplication.", vi: "Đảo cộng thành trừ, trừ thành cộng, nhân thành chia và chia thành nhân." }],
      [{ en: "Reverse every transfer", vi: "Đảo từng lần chuyển" }, { en: "When objects move between two groups, return them in the reverse order.", vi: "Khi đồ vật chuyển giữa hai nhóm, hãy chuyển trả theo thứ tự ngược lại." }],
      [{ en: "Check forwards", vi: "Kiểm tra xuôi" }, { en: "Apply the original operations to confirm the final value.", vi: "Thực hiện lại các phép tính ban đầu để kiểm tra kết quả cuối." }],
    ],
    examples: [
      { q: { en: "A number is reduced by 2, then increased by 7 to give 13. Find the number.", vi: "Một số được bớt 2 rồi cộng 7 để được 13. Tìm số đó." }, steps: [{ en: "Start from 13 and undo +7: 13 − 7 = 6.", vi: "Bắt đầu từ 13 và đảo +7: 13 − 7 = 6." }, { en: "Undo −2: 6 + 2 = 8.", vi: "Đảo −2: 6 + 2 = 8." }], a: { en: "8", vi: "8" }, visual: "j1-back-example-1" },
      { q: { en: "Marcus gave half his marbles to David, then half the remainder to Natalie. He had 6 left. How many did he have at first?", vi: "Marcus cho David một nửa số bi, rồi cho Natalie một nửa số còn lại. Marcus còn 6 viên. Ban đầu Marcus có bao nhiêu viên?" }, steps: [{ en: "Before giving Natalie half, he had 6 × 2 = 12.", vi: "Trước khi cho Natalie một nửa, Marcus có 6 × 2 = 12." }, { en: "Before giving David half, he had 12 × 2 = 24.", vi: "Trước khi cho David một nửa, Marcus có 12 × 2 = 24." }], a: { en: "24 marbles", vi: "24 viên bi" }, visual: "j1-back-example-2" },
    ],
    check: ["j1-c19-1a", "j1-c19-3c", "j1-c19-6", "j1-c19-9", "j1-c19-12"],
  };

  exercises[19] = [];
  solutions[19] = {};
  const add = ({ n, en, vi, answers, labels, guideEn, guideVi, visual }) => {
    const id = `j1-c19-${n}`;
    exercises[19].push({ n, id, source: "pdf", q: { en, vi }, labels, visual, visualPlacement: "question" });
    solutions[19][id] = {
      answers: answers.map((x) => Array.isArray(x) ? x : [String(x)]),
      hint: { en: "Start at the final value and undo each operation in reverse order.", vi: "Bắt đầu từ kết quả cuối và đảo từng phép tính theo thứ tự ngược lại." },
      guide: { en: guideEn, vi: guideVi },
      visual: `${visual}-solution`,
    };
  };

  [
    ["1a","A − 7, then + 2, gives 10. Find A.","A trừ 7 rồi cộng 2 được 10. Tìm A.","15",["10 − 2 = 8.","8 + 7 = 15."],["10 − 2 = 8.","8 + 7 = 15."],"j1-back-1a"],
    ["1b","B + 8, then − 12, gives 12. Find B.","B cộng 8 rồi trừ 12 được 12. Tìm B.","16",["12 + 12 = 24.","24 − 8 = 16."],["12 + 12 = 24.","24 − 8 = 16."],"j1-back-1b"],
    ["1c","C − 15, then − 11, gives 9. Find C.","C trừ 15 rồi trừ 11 được 9. Tìm C.","35",["9 + 11 = 20.","20 + 15 = 35."],["9 + 11 = 20.","20 + 15 = 35."],"j1-back-1c"],
    ["1d","D − 18, then + 6, gives 30. Find D.","D trừ 18 rồi cộng 6 được 30. Tìm D.","42",["30 − 6 = 24.","24 + 18 = 42."],["30 − 6 = 24.","24 + 18 = 42."],"j1-back-1d"],
    ["2a","A ÷ 3, then + 5, gives 10. Find A.","A chia 3 rồi cộng 5 được 10. Tìm A.","15",["10 − 5 = 5.","5 × 3 = 15."],["10 − 5 = 5.","5 × 3 = 15."],"j1-back-2a"],
    ["2b","B × 3, then − 12, gives 15. Find B.","B nhân 3 rồi trừ 12 được 15. Tìm B.","9",["15 + 12 = 27.","27 ÷ 3 = 9."],["15 + 12 = 27.","27 ÷ 3 = 9."],"j1-back-2b"],
    ["2c","C ÷ 4, then + 11, gives 20. Find C.","C chia 4 rồi cộng 11 được 20. Tìm C.","36",["20 − 11 = 9.","9 × 4 = 36."],["20 − 11 = 9.","9 × 4 = 36."],"j1-back-2c"],
    ["2d","D × 5, then − 20, gives 25. Find D.","D nhân 5 rồi trừ 20 được 25. Tìm D.","9",["25 + 20 = 45.","45 ÷ 5 = 9."],["25 + 20 = 45.","45 ÷ 5 = 9."],"j1-back-2d"],
    ["3a","A × 2, then − 8, then ÷ 4, gives 3. Find A.","A nhân 2, trừ 8 rồi chia 4 được 3. Tìm A.","10",["3 × 4 = 12.","12 + 8 = 20.","20 ÷ 2 = 10."],["3 × 4 = 12.","12 + 8 = 20.","20 ÷ 2 = 10."],"j1-back-3a"],
    ["3b","B ÷ 3, then + 5, then × 2, gives 30. Find B.","B chia 3, cộng 5 rồi nhân 2 được 30. Tìm B.","30",["30 ÷ 2 = 15.","15 − 5 = 10.","10 × 3 = 30."],["30 ÷ 2 = 15.","15 − 5 = 10.","10 × 3 = 30."],"j1-back-3b"],
    ["3c","C + 5, then × 5, then − 5, then ÷ 5, gives 5. Find C.","C cộng 5, nhân 5, trừ 5 rồi chia 5 được 5. Tìm C.","1",["5 × 5 = 25.","25 + 5 = 30.","30 ÷ 5 = 6.","6 − 5 = 1."],["5 × 5 = 25.","25 + 5 = 30.","30 ÷ 5 = 6.","6 − 5 = 1."],"j1-back-3c"],
    ["3d","D + 8, then × 8, then − 8, then ÷ 8, gives 8. Find D.","D cộng 8, nhân 8, trừ 8 rồi chia 8 được 8. Tìm D.","1",["8 × 8 = 64.","64 + 8 = 72.","72 ÷ 8 = 9.","9 − 8 = 1."],["8 × 8 = 64.","64 + 8 = 72.","72 ÷ 8 = 9.","9 − 8 = 1."],"j1-back-3d"],
    ["3e","E + 2, then − 3, then × 4, then ÷ 5, gives 12. Find E.","E cộng 2, trừ 3, nhân 4 rồi chia 5 được 12. Tìm E.","16",["12 × 5 = 60.","60 ÷ 4 = 15.","15 + 3 = 18.","18 − 2 = 16."],["12 × 5 = 60.","60 ÷ 4 = 15.","15 + 3 = 18.","18 − 2 = 16."],"j1-back-3e"],
  ].forEach(([n,en,vi,a,ge,gv,visual]) => add({n,en,vi,answers:[[a]],guideEn:ge,guideVi:gv,visual}));

  const word = [
    ["4","A farmer sold 32 cows on the first day, sold another 18 on the second day, then bought 40 cows. He then had 105 cows. How many cows did he have at first?","Một nông dân bán 32 con bò ngày đầu, bán thêm 18 con ngày thứ hai, rồi mua 40 con. Sau đó ông có 105 con bò. Ban đầu ông có bao nhiêu con?",[["115","115 cows","115 con bò"]],["105 − 40 = 65.","65 + 18 = 83.","83 + 32 = 115."],["105 − 40 = 65.","65 + 18 = 83.","83 + 32 = 115."],"j1-back-4"],
    ["5","Carson gave 20 marbles to his cousin. He gave another 26 marbles to his friend before buying another 10 marbles. He then had 14 marbles. How many marbles did Carson have at first?","Carson cho em họ 20 viên bi. Cậu cho bạn thêm 26 viên rồi mua thêm 10 viên. Sau đó cậu có 14 viên. Ban đầu Carson có bao nhiêu viên bi?",[["50","50 marbles","50 viên bi"]],["14 − 10 = 4.","4 + 26 = 30.","30 + 20 = 50."],["14 − 10 = 4.","4 + 26 = 30.","30 + 20 = 50."],"j1-back-5"],
    ["6","Chloe had some books. She lent half to her cousin, then half of the remaining books to her best friend. She was left with 12 books. How many books did Chloe have at first?","Chloe có một số sách. Cô cho em họ mượn một nửa, rồi cho bạn thân mượn một nửa số còn lại. Cô còn 12 quyển. Ban đầu Chloe có bao nhiêu quyển?",[["48","48 books","48 quyển sách"]],["Before the second loan: 12 × 2 = 24.","Before the first loan: 24 × 2 = 48."],["Trước lần cho mượn thứ hai: 12 × 2 = 24.","Trước lần cho mượn thứ nhất: 24 × 2 = 48."],"j1-back-6"],
    ["7","Louisa invited many children to her birthday party. Half were from the neighbourhood. Half of the remainder were her classmates. The rest were her 10 close friends. How many guests did she invite?","Louisa mời nhiều bạn đến tiệc sinh nhật. Một nửa là bạn trong khu phố. Một nửa số còn lại là bạn cùng lớp. Phần còn lại là 10 bạn thân. Louisa đã mời bao nhiêu khách?",[["40","40 guests","40 khách"]],["Before the classmates were separated: 10 × 2 = 20.","Before the neighbourhood group was separated: 20 × 2 = 40."],["Trước khi tách nhóm bạn cùng lớp: 10 × 2 = 20.","Trước khi tách nhóm bạn khu phố: 20 × 2 = 40."],"j1-back-7"],
    ["8","Sixteen sparrows were resting on two lamp posts. Two flew from the first post to the second, then three flew from the second to the first. The two posts then had the same number. How many sparrows were on each post at first?","Có 16 con chim sẻ đậu trên hai cột đèn. Hai con bay từ cột thứ nhất sang cột thứ hai, rồi ba con bay từ cột thứ hai sang cột thứ nhất. Sau đó hai cột có số chim bằng nhau. Ban đầu mỗi cột có bao nhiêu con?",[["7","7 sparrows","7 con"],["9","9 sparrows","9 con"]],["At the end, each post had 16 ÷ 2 = 8 sparrows.","Undo the last move: first 5, second 11.","Undo the first move: first 7, second 9."],["Cuối cùng mỗi cột có 16 ÷ 2 = 8 con.","Đảo lần chuyển cuối: cột thứ nhất 5, cột thứ hai 11.","Đảo lần chuyển đầu: cột thứ nhất 7, cột thứ hai 9."],"j1-back-8"],
    ["9","The first and second shelves contained 120 books altogether. Twenty books moved from the first to the second shelf, then 35 moved back to the first. The shelves then had the same number. How many books were on each shelf at first?","Hai kệ thứ nhất và thứ hai có tổng cộng 120 quyển sách. Hai mươi quyển được chuyển từ kệ thứ nhất sang kệ thứ hai, rồi 35 quyển được chuyển ngược về kệ thứ nhất. Sau đó hai kệ có số sách bằng nhau. Ban đầu mỗi kệ có bao nhiêu quyển?",[["45","45 books","45 quyển"],["75","75 books","75 quyển"]],["At the end, each shelf had 120 ÷ 2 = 60 books.","Undo 35 moving to the first shelf: first 25, second 95.","Undo 20 moving to the second shelf: first 45, second 75."],["Cuối cùng mỗi kệ có 120 ÷ 2 = 60 quyển.","Đảo lần chuyển 35 quyển về kệ thứ nhất: kệ thứ nhất 25, kệ thứ hai 95.","Đảo lần chuyển 20 quyển sang kệ thứ hai: kệ thứ nhất 45, kệ thứ hai 75."],"j1-back-9"],
    ["10","Eighteen sparrows were resting on two branches. Four flew from the second branch to the first, then six flew from the first to the second. There were then 2 more sparrows on the first branch than on the second. How many were on each branch at first?","Có 18 con chim sẻ đậu trên hai cành cây. Bốn con bay từ cành thứ hai sang cành thứ nhất, rồi sáu con bay từ cành thứ nhất sang cành thứ hai. Sau đó cành thứ nhất nhiều hơn cành thứ hai 2 con. Ban đầu mỗi cành có bao nhiêu con?",[["12","12 sparrows","12 con"],["6","6 sparrows","6 con"]],["The final counts total 18 and differ by 2, so they are 10 and 8.","Undo 6 moving to the second: first 16, second 2.","Undo 4 moving to the first: first 12, second 6."],["Cuối cùng tổng là 18 và chênh 2 nên hai số là 10 và 8.","Đảo lần 6 con bay sang cành thứ hai: cành thứ nhất 16, cành thứ hai 2.","Đảo lần 4 con bay sang cành thứ nhất: cành thứ nhất 12, cành thứ hai 6."],"j1-back-10"],
    ["11","Two groups contain 420 penguins altogether. Thirty move from the first group to the second, then 50 move from the second group to the first. In the end, group A has twice as many as group B. How many penguins were in each group at first?","Hai nhóm có tổng cộng 420 chim cánh cụt. Ba mươi con chuyển từ nhóm thứ nhất sang nhóm thứ hai, rồi 50 con chuyển từ nhóm thứ hai sang nhóm thứ nhất. Cuối cùng nhóm A có số con gấp đôi nhóm B. Ban đầu mỗi nhóm có bao nhiêu con?",[["260","260 penguins","260 con"],["160","160 penguins","160 con"]],["Split 420 in the ratio 2 : 1: the final groups are 280 and 140.","Undo 50 moving to the first: first 230, second 190.","Undo 30 moving to the second: first 260, second 160."],["Chia 420 theo tỉ lệ 2 : 1: cuối cùng hai nhóm có 280 và 140 con.","Đảo lần 50 con chuyển sang nhóm thứ nhất: nhóm thứ nhất 230, nhóm thứ hai 190.","Đảo lần 30 con chuyển sang nhóm thứ hai: nhóm thứ nhất 260, nhóm thứ hai 160."],"j1-back-11"],
    ["12","The East-Wing and West-Wing of the Underwater World held 840 fish altogether. First, 120 fish swam from the East-Wing to the West-Wing. Then 200 fish swam from the West-Wing to the East-Wing. The East-Wing then had 3 times as many fish as the West-Wing. How many fish were in each wing at first?","Khu Đông và khu Tây của Thế giới Dưới nước có tổng cộng 840 con cá. Đầu tiên, 120 con bơi từ khu Đông sang khu Tây. Sau đó, 200 con bơi từ khu Tây sang khu Đông. Khi ấy khu Đông có số cá gấp 3 lần khu Tây. Ban đầu mỗi khu có bao nhiêu con cá?",[["550","550 fish","550 con"],["290","290 fish","290 con"]],["Split 840 in the ratio 3 : 1: East 630, West 210.","Undo 200 moving to East: East 430, West 410.","Undo 120 moving to West: East 550, West 290."],["Chia 840 theo tỉ lệ 3 : 1: khu Đông 630, khu Tây 210.","Đảo lần 200 con bơi sang khu Đông: Đông 430, Tây 410.","Đảo lần 120 con bơi sang khu Tây: Đông 550, Tây 290."],"j1-back-12"],
  ];
  const groupLabels = {
    "8": { en:["first lamp post","second lamp post"], vi:["cột đèn thứ nhất","cột đèn thứ hai"] },
    "9": { en:["first shelf","second shelf"], vi:["kệ thứ nhất","kệ thứ hai"] },
    "10": { en:["first branch","second branch"], vi:["cành thứ nhất","cành thứ hai"] },
    "11": { en:["group A","group B"], vi:["nhóm A","nhóm B"] },
    "12": { en:["East-Wing","West-Wing"], vi:["khu Đông","khu Tây"] },
  };
  word.forEach(([n,en,vi,answers,guideEn,guideVi,visual]) => add({n,en,vi,answers,labels:groupLabels[n],guideEn,guideVi,visual}));

  extra[19] = [
    { id:"j1-c19-extra-1", source:"ai", level:"warmup", q:{en:"A number plus 9 is 17. Find the number.",vi:"Một số cộng 9 bằng 17. Tìm số đó."}, answers:[["8"]], hint:{en:"Undo +9.",vi:"Đảo phép cộng 9."}, steps:{en:["17 − 9 = 8."],vi:["17 − 9 = 8."]}, visual:"j1-back-extra-1", visualPlacement:"question" },
    { id:"j1-c19-extra-2", source:"ai", level:"warmup", q:{en:"A number is doubled, then 6 is added to get 20. Find the number.",vi:"Một số được nhân đôi rồi cộng 6 để được 20. Tìm số đó."}, answers:[["7"]], hint:{en:"Undo +6, then ×2.",vi:"Đảo +6 rồi đảo ×2."}, steps:{en:["20 − 6 = 14.","14 ÷ 2 = 7."],vi:["20 − 6 = 14.","14 ÷ 2 = 7."]}, visual:"j1-back-extra-2", visualPlacement:"question" },
    { id:"j1-c19-extra-3", source:"ai", level:"core", q:{en:"Mai spent half her money, then spent $7 and had $9 left. How much did she have at first?",vi:"Mai tiêu một nửa số tiền, rồi tiêu thêm 7 đô và còn 9 đô. Ban đầu Mai có bao nhiêu tiền?"}, answers:[["32","$32","32 đô"]], hint:{en:"Restore $7 before doubling.",vi:"Cộng lại 7 đô trước khi nhân đôi."}, steps:{en:["9 + 7 = 16.","16 × 2 = 32."],vi:["9 + 7 = 16.","16 × 2 = 32."]}, visual:"j1-back-extra-3", visualPlacement:"question" },
    { id:"j1-c19-extra-4", source:"ai", level:"core", q:{en:"Two boxes hold 70 balls. After 8 balls move from box A to B, both boxes have the same number. How many were in each box at first?",vi:"Hai hộp có 70 quả bóng. Sau khi chuyển 8 quả từ hộp A sang hộp B, hai hộp có số bóng bằng nhau. Ban đầu mỗi hộp có bao nhiêu quả?"}, answers:[["43"],["27"]], labels:{en:["box A","box B"],vi:["hộp A","hộp B"]}, hint:{en:"Find the equal final amounts, then reverse the move.",vi:"Tìm số bằng nhau cuối cùng rồi đảo lần chuyển."}, steps:{en:["70 ÷ 2 = 35.","A: 35 + 8 = 43; B: 35 − 8 = 27."],vi:["70 ÷ 2 = 35.","A: 35 + 8 = 43; B: 35 − 8 = 27."]}, visual:"j1-back-extra-4", visualPlacement:"question" },
    { id:"j1-c19-extra-5", source:"ai", level:"challenge", q:{en:"A number is increased by 4, tripled, reduced by 6, then halved to give 15. Find the number.",vi:"Một số được cộng 4, nhân 3, trừ 6 rồi chia đôi để được 15. Tìm số đó."}, answers:[["8"]], hint:{en:"Undo the four operations from right to left.",vi:"Đảo bốn phép tính từ phải sang trái."}, steps:{en:["15 × 2 = 30.","30 + 6 = 36.","36 ÷ 3 = 12.","12 − 4 = 8."],vi:["15 × 2 = 30.","30 + 6 = 36.","36 ÷ 3 = 12.","12 − 4 = 8."]}, visual:"j1-back-extra-5", visualPlacement:"question" },
  ];
})();
