(function(){"use strict";const bi=(en,vi)=>({en,vi});const make=(chapter,n,level,en,vi,a,method,steps)=>({id:`extra-${chapter}-${n}`,source:"ai",level,q:bi(en,vi),answers:[[String(a)]],hint:bi(method,method),steps:bi(steps,steps)});window.PILOT_EXTRA_EXERCISES[19]=[
make(19,1,"warmup","Find A and B: A+A=BA.","Tìm A, B: A+A=BA.","A=5, B=1","Work from the ones digit and include the carry.",["A+A must end in A, so A=0 or 5.","A is leading, so A=5 and 5+5=10: B=1."]),
make(19,2,"core","Find A and B: AB+BA=99.","Tìm A, B: AB+BA=99.","A+B=9","Group by place value.",["AB+BA=11A+11B.","11(A+B)=99, so A+B=9."]),
make(19,3,"core","Find A,B,C: AB×3=CCC.","Tìm A,B,C: AB×3=CCC.","A=3, B=7, C=1","Use CCC=111C.",["3(10A+B)=111C.","10A+B=37C; only C=1 gives a two-digit number 37."]),
make(19,4,"challenge","Find SEND if SEND+SEND=10652.","Tìm SEND nếu SEND+SEND=10652.",5326,"Divide the result by 2, then map digits.",["10652÷2=5326.","Therefore S=5,E=3,N=2,D=6."]),
make(19,5,"challenge","Find all AB with AB−BA=36.","Tìm mọi AB sao cho AB−BA=36.","51,62,73,84,95","Convert to 9(A−B).",["AB−BA=9(A−B)=36.","A−B=4, giving 51,62,73,84,95."])];
window.PILOT_EXTRA_EXERCISES[20]=[
make(20,1,"warmup","A square has side 7 cm. Find its perimeter.","Hình vuông cạnh 7 cm. Tìm chu vi.","28 cm","Use four equal sides.",["Perimeter=4×7=28 cm."]),
make(20,2,"warmup","A rectangle is 9 cm by 4 cm. Find its perimeter.","Hình chữ nhật dài 9 cm, rộng 4 cm. Tìm chu vi.","26 cm","Add one length and one width, then double.",["9+4=13.","13×2=26 cm."]),
make(20,3,"core","A 4×3 block of unit squares has side 2 cm per unit. Find its perimeter.","Khối 4×3 ô vuông, mỗi cạnh ô dài 2 cm. Tìm chu vi.","28 cm","Find the outer rectangle dimensions.",["Length=4×2=8 cm; width=3×2=6 cm.","Perimeter=2×(8+6)=28 cm."]),
make(20,4,"core","Six side-3-cm squares form a 2×3 rectangle. Find the perimeter.","Sáu ô vuông cạnh 3 cm ghép thành hình 2×3. Tìm chu vi.","30 cm","Count only the outside boundary.",["Outer dimensions are 9 cm by 6 cm.","Perimeter=2×(9+6)=30 cm."]),
make(20,5,"challenge","A square perimeter is 64 cm and is divided into four equal strips. Find one strip's perimeter.","Hình vuông chu vi 64 cm chia thành 4 dải bằng nhau. Tìm chu vi một dải.","40 cm","Find the square side, then the strip width.",["Square side=64÷4=16 cm.","Strip width=16÷4=4 cm.","Strip perimeter=2×(16+4)=40 cm."])];
window.PILOT_EXTRA_EXERCISES[21]=[
make(21,1,"warmup","Find the next number: 3,8,15,24,...","Tìm số tiếp theo: 3,8,15,24,...",35,"Study consecutive differences.",["Differences are 5,7,9.","Next difference is 11, so 24+11=35."]),
make(21,2,"warmup","Which does not belong: 23,32,41,55,68?","Số nào không cùng nhóm: 23,32,41,55,68?",55,"Compare digit sums.",["23,32,41 and 68 have digit sum 5 or 14? Check a consistent reversal pattern.","55 is the only number with equal digits."]),
make(21,3,"core","A pattern rotates 90° clockwise each step. After three steps an arrow points left. Where did it start?","Một mũi tên quay 90° theo chiều kim đồng hồ mỗi bước. Sau 3 bước nó chỉ trái. Ban đầu chỉ đâu?","up","Reverse three quarter-turns.",["Undo three clockwise turns by rotating counter-clockwise three times.","Left→down→right→up, so it started pointing up."]),
make(21,4,"core","Find the centre: corners 4,5,6 and rule is sum of squares.","Tìm số giữa khi ba đỉnh là 4,5,6 và quy luật là tổng bình phương.",77,"Square each corner, then add.",["4²+5²+6²=16+25+36=77."]),
make(21,5,"challenge","Change COLD to WARM, one letter at a time, using valid English words.","Đổi COLD thành WARM, mỗi lần một chữ, dùng từ tiếng Anh có nghĩa.","COLD→CORD→CARD→WARD→WARM","Choose a chain where adjacent words differ once.",["COLD→CORD changes L to R.","CORD→CARD→WARD→WARM each changes one letter."])];
window.PILOT_EXTRA_EXERCISES[22]=[
make(22,1,"warmup","Find the 50th term of 2,6,10,14,...","Tìm số hạng thứ 50 của 2,6,10,14,...",198,"Use first term plus number of jumps times the step.",["There are 49 jumps of 4.","2+49×4=198."]),
make(22,2,"warmup","Which is not square: 64,100,144,180,225?","Số nào không phải số chính phương: 64,100,144,180,225?",180,"Match each with n×n.",["64=8²,100=10²,144=12²,225=15².","180 is not a square."]),
make(22,3,"core","Five odd scores are added. Can the total be 24?","Cộng năm điểm lẻ. Tổng có thể bằng 24 không?","no","Use odd/even parity.",["Odd+odd is even; adding five odd numbers gives an odd total.","24 is even, so it is impossible."]),
make(22,4,"core","A 3×3 magic square has centre 7. What is each row sum?","Ma phương 3×3 có số giữa là 7. Tổng mỗi hàng là bao nhiêu?",21,"Magic sum is three times the centre.",["3×7=21."]),
make(22,5,"challenge","Repeatedly erase every second number from 1 to 16, restarting each round. What remains?","Liên tục xóa mỗi số thứ hai từ 1 đến 16, bắt đầu lại mỗi vòng. Số nào còn lại?",1,"Write survivors round by round.",["After round 1:1,3,5,...,15.","Then 1,5,9,13; then 1,9; finally 1."])
];
const viHelp={
"extra-19-1":{hint:"Bắt đầu từ hàng đơn vị và nhớ số nhớ.",steps:["A + A phải có chữ số hàng đơn vị là A, nên A = 0 hoặc A = 5.","A là chữ số đứng đầu nên A không thể bằng 0. Vì 5 + 5 = 10 nên A = 5 và B = 1."]},
"extra-19-2":{hint:"Viết số theo giá trị hàng.",steps:["AB + BA = (10A + B) + (10B + A) = 11A + 11B.","11(A + B) = 99 nên A + B = 9."]},
"extra-19-3":{hint:"Dùng CCC = 111C.",steps:["3(10A + B) = 111C.","Suy ra 10A + B = 37C. Chỉ C = 1 cho số có hai chữ số là 37, nên A = 3 và B = 7."]},
"extra-19-4":{hint:"Chia kết quả cho 2 rồi gán từng chữ số.",steps:["10652 ÷ 2 = 5326.","Vậy S = 5, E = 3, N = 2 và D = 6."]},
"extra-19-5":{hint:"Đổi hiệu thành 9(A − B).",steps:["AB − BA = 9(A − B) = 36.","A − B = 4, nên các số là 51, 62, 73, 84 và 95."]},
"extra-20-1":{hint:"Hình vuông có bốn cạnh bằng nhau.",steps:["Chu vi = 4 × 7 = 28 cm."]},
"extra-20-2":{hint:"Cộng một chiều dài với một chiều rộng rồi nhân đôi.",steps:["9 + 4 = 13.","13 × 2 = 26 cm."]},
"extra-20-3":{hint:"Tìm chiều dài và chiều rộng của hình chữ nhật lớn.",steps:["Chiều dài = 4 × 2 = 8 cm; chiều rộng = 3 × 2 = 6 cm.","Chu vi = 2 × (8 + 6) = 28 cm."]},
"extra-20-4":{hint:"Chỉ tính đường bao bên ngoài.",steps:["Hình chữ nhật lớn có chiều dài 9 cm và chiều rộng 6 cm.","Chu vi = 2 × (9 + 6) = 30 cm."]},
"extra-20-5":{hint:"Tìm cạnh hình vuông trước, rồi tìm chiều rộng mỗi dải.",steps:["Cạnh hình vuông = 64 ÷ 4 = 16 cm.","Chiều rộng mỗi dải = 16 ÷ 4 = 4 cm.","Chu vi một dải = 2 × (16 + 4) = 40 cm."]},
"extra-21-1":{hint:"Quan sát hiệu giữa hai số liên tiếp.",steps:["Các hiệu là 5, 7 và 9.","Hiệu tiếp theo là 11 nên số cần tìm là 24 + 11 = 35."]},
"extra-21-2":{hint:"So sánh đặc điểm của hai chữ số trong mỗi số.",steps:["Các số 23, 32, 41 và 68 có hai chữ số khác nhau.","55 là số duy nhất có hai chữ số giống nhau nên không cùng nhóm."]},
"extra-21-3":{hint:"Thực hiện ngược ba lần quay một phần tư vòng.",steps:["Quay ngược chiều kim đồng hồ ba lần: trái → xuống → phải → lên.","Vậy lúc đầu mũi tên chỉ lên."]},
"extra-21-4":{hint:"Bình phương từng số ở đỉnh rồi cộng lại.",steps:["4² + 5² + 6² = 16 + 25 + 36 = 77."]},
"extra-21-5":{hint:"Chọn chuỗi từ sao cho mỗi cặp liền nhau chỉ khác một chữ cái.",steps:["COLD → CORD: đổi L thành R.","CORD → CARD → WARD → WARM; mỗi bước chỉ đổi một chữ cái."]},
"extra-22-1":{hint:"Lấy số đầu cộng số bước nhảy nhân với công sai.",steps:["Từ số hạng thứ nhất đến số hạng thứ 50 có 49 bước, mỗi bước tăng 4.","2 + 49 × 4 = 198."]},
"extra-22-2":{hint:"Đối chiếu mỗi số với một tích n × n.",steps:["64 = 8², 100 = 10², 144 = 12² và 225 = 15².","180 không phải là số chính phương."]},
"extra-22-3":{hint:"Xét tính chẵn lẻ của tổng.",steps:["Tổng của năm số lẻ luôn là một số lẻ.","24 là số chẵn nên không thể là tổng cần tìm."]},
"extra-22-4":{hint:"Tổng ma phương 3 × 3 bằng ba lần số ở giữa.",steps:["3 × 7 = 21."]},
"extra-22-5":{hint:"Viết các số còn lại sau từng vòng.",steps:["Sau vòng 1 còn 1, 3, 5, …, 15.","Tiếp theo còn 1, 5, 9, 13; rồi 1, 9; cuối cùng còn 1."]}
};
[19,20,21,22].forEach(chapter=>window.PILOT_EXTRA_EXERCISES[chapter].forEach(item=>{
  const vi=viHelp[item.id];
  if(!vi)return;
  item.hint.vi=vi.hint;
  item.steps.vi=vi.steps;
}));
})();
