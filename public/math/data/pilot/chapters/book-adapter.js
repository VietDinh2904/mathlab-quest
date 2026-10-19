(function registerRemainingBookChapters() {
  "use strict";

  const source = window.BOOK_DATA || {};
  const pilotExamples = Object.fromEntries(
    Object.entries(window.PILOT_CHAPTERS || {}).map(([id, chapter]) => [id, chapter.examples]),
  );
  const examplesVi = {
    4: ["Trồng cây dọc theo con đường dài 40 m, cách nhau 8 m và có cây ở cả hai đầu.","Có 16 cột đèn đặt cách nhau 10 m dọc một con đường, kể cả hai đầu.","Một con đường dài 120 m có 16 cây đặt cách đều, kể cả hai đầu.","Một đồng hồ mất 12 giây để điểm 4 tiếng. Điểm 7 tiếng mất bao lâu?"],
    5: ["2 tam giác bằng 6 hình tròn và 3 tam giác bằng 3 hình vuông. Một hình vuông bằng bao nhiêu hình tròn?","❖+❖+○+○=32 và ○=❖+❖+❖. Tìm ❖ và ○.","2 quả bóng rổ và 3 quả bóng chuyền giá 195 đô; 4 quả bóng rổ và 5 quả bóng chuyền giá 355 đô. Tìm giá một quả bóng chuyền."],
    6: ["Năm điểm A-E tạo được bao nhiêu đoạn thẳng có độ dài khác nhau?","Có bao nhiêu hình vuông trong lưới 2×2 và 2×3?","Có bao nhiêu tam giác trong hình quạt và lưới tam giác đã cho?","Có bao nhiêu hình chữ nhật trong lưới đã cho?"],
    7: ["Tính: 35+64+65; 99+101+18; 22+58+78; 128+72+14.","Tính 64+27+29.","Tính: 166+575; 788+546; 999+802; 1234+768.","Tính 900−384−116."],
    8: ["Tính: 25×16×4; 12×4×25; 24×25; 28×25.","Tính: 16×125; 24×125; 8×125×4×25; 32×125×25.","Tính 12×4+8×4.","Tính 55×99 và 65×999."],
    9: ["Kevin 8 tuổi và bố 34 tuổi. Khi nào tuổi bố gấp 3 lần tuổi Kevin?","Melissa 13 tuổi và em trai 9 tuổi. Khi nào tổng tuổi của hai người là 42?","Bốn năm trước, tuổi mẹ Patrick gấp 4 lần tuổi Patrick; hiện nay mẹ 44 tuổi. Tìm tuổi Patrick.","Tổng tuổi của Andy và bố mẹ là 72. Sau bao lâu tổng tuổi là 90?"],
    10: ["Đi ngược qua chuỗi phép tính để tìm A và B.","20 con chim sẻ chuyển qua lại giữa hai cột đèn và cuối cùng hai bên có số chim bằng nhau.","Heather tiêu 4 đô, rồi tiêu một nửa số tiền còn lại, sau đó tiêu thêm 4 đô và còn 2 đô. Ban đầu cô có bao nhiêu?","Tara di chuyển giữa các tầng và kết thúc ở tầng 9. Hãy tìm tầng xuất phát theo các bước đã cho."],
    11: ["80 con gà và thỏ có tổng cộng 250 chân.","36 ô tô và xe máy có tổng cộng 122 bánh.","Mary có 40 đồng xu loại 50 xu và 20 xu, tổng giá trị 11 đô.","11 quả bóng chuyền và bóng rổ giá 445 đô; giá mỗi loại là 35 đô và 45 đô.","Bài kiểm tra 20 câu: đúng được 5 điểm, sai bị trừ 2 điểm; Andy được 72 điểm."],
    12: ["Ba bạn nhỏ chọn ba loại trái cây khác nhau.","A ở bên trái B và C nằm giữa hai bạn.","Một hình tròn và một hình thoi có tổng 24; một hình thoi bằng hai hình tròn.","Chỉ có đúng một người nói thật."],
    13: ["Lập các số có 3 chữ số từ 3, 4 và 5, mỗi chữ số dùng đúng một lần.","Hai số có tích 54 và hiệu 15.","Dùng một tem 10 xu, một tem 20 xu và một tem 50 xu.","Một xe khách đi từ thành phố A qua năm thị trấn đến thành phố B."],
    14: ["Nếu chia mỗi bạn 3 viên kẹo thì dư 16; chia mỗi bạn 5 viên thì thiếu 4.","Mỗi ngày ăn 4 quả táo thì còn 24; mỗi ngày ăn 6 quả thì thiếu 8.","Xe buýt loại 40 chỗ còn dư 16 ghế, còn loại 36 chỗ thì 20 học sinh không có chỗ.","Đi 50 m/phút thì Tammy muộn 2 phút; đi 60 m/phút thì đến sớm 1 phút."],
    15: ["Nếu ngày 1 tháng 5 là thứ Sáu thì ngày 23 tháng 5 là thứ mấy?","Tô các vùng kề cạnh bằng màu khác nhau và dùng ít màu nhất.","Tìm các số hạng được hỏi trong dãy số lặp lại đã cho.","Chỉ đi lên và sang phải trong lưới 2×3. Có bao nhiêu đường đi?"],
    16: ["Julie chạy 100 m mỗi phút trong 5 phút. Cô chạy được bao xa?","David bơi 2 m trong 3 giây. Bơi 50 m mất bao lâu?","Danny đi 80 m/phút và Melissa đi 55 m/phút trong 5 phút. Khoảng cách giữa họ là bao nhiêu?","Một xe chạy 80 km/giờ xuất phát trước 2 giờ; xe khác chạy 120 km/giờ đuổi theo. Sau bao lâu xe sau đuổi kịp?"],
    17: ["Một con thỏ và một con rùa đi về phía nhau với vận tốc 50 m/phút và 2 m/phút trong 4 phút. Khoảng cách ban đầu là bao nhiêu?","Hai xe rời hai thành phố cách nhau 900 km với vận tốc 80 và 70 km/giờ. Sau bao lâu chúng gặp nhau?"],
    18: ["Có bao nhiêu bội của 3 từ 1 đến 300?","Cần bao nhiêu chữ số để đánh số trang của một quyển sách 200 trang?"]
  };

  for (let chapter = 1; chapter <= 22; chapter += 1) {
    const bookChapter = source[chapter];
    if (!bookChapter) continue;

    window.PILOT_CHAPTERS[chapter] = {
      id: chapter,
      title: bookChapter.title,
      emoji: bookChapter.emoji,
      pages: bookChapter.pages,
      theory: bookChapter.theory,
      examples: (chapter === 1 && pilotExamples[1] ? pilotExamples[1] : bookChapter.examples).map((example, index) => ({
        ...example,
        q: typeof example.q === "string" ? { en: example.q, vi: examplesVi[chapter]?.[index] || example.q } : example.q,
      })),
      check: bookChapter.check,
    };

    window.PILOT_PDF_EXERCISES[chapter] = bookChapter.practice.map((question) => ({
      id: question.id,
      n: question.n,
      q: question.q,
      labels: question.labels,
      visual: question.visual,
      source: "pdf",
    }));

    window.PILOT_PDF_SOLUTIONS[chapter] = Object.fromEntries(
      bookChapter.practice.map((question) => [
        question.id,
        {
          answers: question.ans,
          hint: question.hint,
          guide: question.guide,
        },
      ]),
    );
  }
})();
