(function(){"use strict";const b=window.MQ_BOOK_DATA&&window.MQ_BOOK_DATA.beginner;if(!b)return;const{chapters,exercises,solutions,extra}=b;
chapters[21]={id:21,emoji:"🔢",pages:"187–197",available:true,title:{en:"Value of Ones Digit",vi:"Chữ số hàng đơn vị"},tagline:{en:"Use repeating digit cycles, factor pairs and remainders",vi:"Dùng chu kỳ chữ số, cặp thừa số và số dư"},theory:[
[{en:"Powers repeat in cycles",vi:"Lũy thừa lặp theo chu kỳ"},{en:"For the ones digit, only the ones digit of the base matters. List its repeating pattern and divide the exponent by the cycle length.",vi:"Khi tìm chữ số hàng đơn vị, chỉ cần xét chữ số hàng đơn vị của cơ số. Liệt kê chu kỳ rồi chia số mũ cho độ dài chu kỳ."}],
[{en:"A trailing zero comes from 2×5",vi:"Một chữ số 0 tận cùng sinh ra từ 2×5"},{en:"The number of trailing zeros is the number of complete pairs of factors 2 and 5.",vi:"Số chữ số 0 tận cùng bằng số cặp đầy đủ gồm thừa số 2 và 5."}],
[{en:"Keep only the digits needed",vi:"Chỉ giữ các chữ số cần thiết"},{en:"For the last two or four digits, reduce every step modulo 100 or 10,000.",vi:"Để tìm hai hoặc bốn chữ số cuối, sau mỗi bước chỉ giữ số dư khi chia cho 100 hoặc 10.000."}],
[{en:"Remainders also repeat",vi:"Số dư cũng lặp theo chu kỳ"},{en:"Build a short remainder table and use the exponent remainder to locate the answer.",vi:"Lập bảng số dư ngắn rồi dùng số dư của số mũ để xác định đáp án."}]
],examples:[],check:["b21-1a","b21-4b","b21-8","b21-12","b21-16"]};
const ex=(id,en,vi,ans,steps)=>chapters[21].examples.push({q:{en,vi},steps:steps.map((x,i)=>({en:x,vi:i?"Suy ra đáp án là "+ans+".":"Xét chu kỳ chữ số cuối hoặc ghép các thừa số 2 và 5 theo yêu cầu."})),a:{en:ans,vi:ans},visual:`b21-example-${id}`});
ex("1a","Example 1(a): Find the ones digit of a product of twenty-three 2s.","Ví dụ 1(a): Tìm chữ số hàng đơn vị của tích gồm 23 thừa số 2.","8",["The cycle is 2,4,8,6.","23÷4 leaves remainder 3; choose 8."]);
ex("1b","Example 1(b): Find the ones digit of a product of thirty-two 3s.","Ví dụ 1(b): Tìm chữ số hàng đơn vị của tích gồm 32 thừa số 3.","1",["The cycle is 3,9,7,1.","32÷4 leaves remainder 0; choose 1."]);
ex("2a","Example 2(a): Find the ones digit of a product of twenty-one 7s.","Ví dụ 2(a): Tìm chữ số hàng đơn vị của tích gồm 21 thừa số 7.","7",["The cycle is 7,9,3,1.","21÷4 leaves remainder 1; choose 7."]);
ex("2b","Example 2(b): Find the ones digit of a product of thirty-one 9s.","Ví dụ 2(b): Tìm chữ số hàng đơn vị của tích gồm 31 thừa số 9.","9",["Powers of 9 alternate 9,1.","31 is odd; choose 9."]);
ex("3","Example 3: Find the ones digit of a product of twenty-four 24s.","Ví dụ 3: Tìm chữ số hàng đơn vị của tích gồm 24 thừa số 24.","6",["Only the final digit 4 matters; its cycle is 4,6.","24 is even; choose 6."]);
[["4a","2³×3²×5²","2"],["4b","5³×4²×7","3"],["4c","6³×7³×5³","3"],["4d","4³×5⁶","6"]].forEach(([id,s,a])=>ex(id,`Example 4(${id.slice(1)}): How many trailing zeros are in ${s}?`,`Ví dụ 4(${id.slice(1)}): ${s} có bao nhiêu chữ số 0 tận cùng?`,a,["Pair every factor 2 with one factor 5.",`There are ${a} complete pairs.`]));
ex("5","Example 5: How many trailing zeros are in 1×2×3×…×19×20?","Ví dụ 5: Tích 1×2×3×…×19×20 có bao nhiêu chữ số 0 tận cùng?","4",["Count factors 5: 5,10,15,20.","Four factors 5 give four zeros."]);
ex("6","Example 6: What is the remainder when 1²+2²+3³+4⁴+5⁵+6⁶ is divided by 3?","Ví dụ 6: Khi chia 1²+2²+3³+4⁴+5⁵+6⁶ cho 3 thì dư bao nhiêu?","2",["The term remainders are 1,1,0,1,2,0.","Their sum 5 leaves remainder 2."]);
exercises[21]=[];solutions[21]={};const R=[
["1(a)","1a","2⁵","2"],["1(b)","1b","8⁸","6"],["1(c)","1c","3⁷","7"],["1(d)","1d","6⁷","6"],
["2(a)","2a","23⁸","1"],["2(b)","2b","99⁹","9"],["2(c)","2c","47⁶","9"],["2(d)","2d","25⁵","5"],
[3,"3","2⁴⁷−1","7"],
["4(a)","4a","2²×3³×5³","2","zeros"],["4(b)","4b","5⁴×4³×7","4","zeros"],["4(c)","4c","6²×11×5³","2","zeros"],["4(d)","4d","4⁴×5⁵","5","zeros"],
["5(a)","5a","75×36","2","zeros"],["5(b)","5b","375×24","3","zeros"],["5(c)","5c","625×28","2","zeros"],["5(d)","5d","175×32","2","zeros"],
[6,"6","1×2×3×…×24×25","0"],[7,"7","1×3×5×7×9×11×…×23×25","5"],
[8,"8","2²⁰","76","last2"],[9,"9","3¹⁴","69","last2"],
[10,"10","1²+2²+3²+4²+5²+6²+7²+8²","1","rem7"],
[11,"11","3+33+333+3333+…+ the number made of twenty 3s","7030","last4"],
[12,"12","2²⁰⁰","4","rem7"],
[13,"13","1+11+111+1111+…+ the number made of fifty 1s","40","last2"],
[14,"14","1²+2²+3²+…+11²","2","rem7"],
[15,"15","1!+2!+3!+4!+5!+6!+7!+8!","33","last2"],
[16,"16","32³³−22²⁹","0"]];
const prompt=(expr,t,lang)=>{if(t==="zeros")return lang?`${expr} có bao nhiêu chữ số 0 tận cùng?`:`How many trailing zeros are in ${expr}?`;if(t==="last2")return lang?`Hai chữ số cuối của ${expr} là gì?`:`What are the last two digits of ${expr}?`;if(t==="last4")return lang?`Bốn chữ số cuối của ${expr} là gì?`:`What are the last four digits of ${expr}?`;if(t==="rem7")return lang?`Khi chia ${expr} cho 7 thì dư bao nhiêu?`:`What is the remainder when ${expr} is divided by 7?`;return lang?`Tìm chữ số hàng đơn vị của ${expr}.`:`Find the ones digit of ${expr}.`};
const guides={
"1a":["Cycle: 2,4,8,6; 5÷4 leaves remainder 1.","Choose 2."],"1b":["Cycle: 8,4,2,6; 8÷4 leaves remainder 0.","Choose 6."],"1c":["Cycle: 3,9,7,1; 7÷4 leaves remainder 3.","Choose 7."],"1d":["Every positive power of 6 ends in 6.","Answer 6."],
"2a":["Use the cycle 3,9,7,1; 8÷4 leaves remainder 0.","Choose 1."],"2b":["Powers of 9 alternate 9,1; exponent 9 is odd.","Choose 9."],"2c":["Use the cycle 7,9,3,1; 6÷4 leaves remainder 2.","Choose 9."],"2d":["Every positive power of a number ending in 5 ends in 5.","Answer 5."],
"3":["2⁴⁷ ends in 8 because 47÷4 leaves remainder 3.","8−1=7."],
"4a":["There are two factors 2 and three factors 5.","Two pairs give two zeros."],"4b":["5⁴ gives four 5s; 4³ gives six 2s.","Four pairs give four zeros."],"4c":["6² gives two 2s; 5³ gives three 5s.","Two pairs give two zeros."],"4d":["4⁴ gives eight 2s; 5⁵ gives five 5s.","Five pairs give five zeros."],
"5a":["75×36=2700.","There are two trailing zeros."],"5b":["375×24=9000.","There are three trailing zeros."],"5c":["625×28=17,500.","There are two trailing zeros."],"5d":["175×32=5600.","There are two trailing zeros."],
"6":["The product contains factors 2 and 5.","It contains a factor 10 and ends in 0."],"7":["The product has a factor 5 but no even factor.","It ends in 5."],
"8":["Keep two digits while multiplying by 2 twenty times.","The twentieth value is 76."],"9":["Keep two digits while multiplying by 3 fourteen times.","The fourteenth value is 69."],
"10":["The sum is 204.","204÷7 leaves remainder 1."],"11":["Add by columns, keeping four places and the carry.","The last four digits are 7030."],"12":["Powers of 2 modulo 7 repeat 2,4,1.","200÷3 leaves remainder 2, so choose 4."],
"13":["The units column has 50 ones: write 0, carry 5.","The tens column has 49+5=54, so the last two digits are 40."],"14":["The sum is 506.","506÷7 leaves remainder 2."],"15":["The sum is 46,233.","The last two digits are 33."],"16":["Both exponents leave remainder 1 when divided by 4, so both powers end in 2.","2−2=0."]};
R.forEach(([n,k,e,a,t])=>{const id=`b21-${k}`,en=prompt(e,t,false),vi=prompt(e,t,true);exercises[21].push({n,id,source:"pdf",q:{en,vi},visual:`b21-question-${k}`,visualPlacement:"question"});solutions[21][id]={answers:[[a,a]],hint:{en:"Keep only the final digits or remainders needed, then look for a cycle.",vi:"Chỉ giữ các chữ số cuối hoặc số dư cần thiết rồi tìm chu kỳ."},guide:{en:guides[k],vi:[t==="zeros"?"Đếm số thừa số 2 và 5 rồi ghép từng cặp 2×5.":t==="last2"||t==="last4"?"Chỉ giữ hai hoặc bốn chữ số cuối sau mỗi bước tính.":t==="rem7"?"Lập chu kỳ số dư khi chia cho 7.":"Lập chu kỳ chữ số hàng đơn vị của cơ số.",`Thực hiện theo chu kỳ trên, được đáp án ${a}.`]},visual:`b21-question-${k}-solution`};});
const X=[["7¹⁵","3"],["2⁶×5⁴×9","4","zeros"],["4⁸","36","last2"],["3¹⁰","4","rem7"],["2!+3!+4!+5!+6!","72","last2"]];extra[21]=X.map(([e,a,t],i)=>({id:`b21-extra-${i+1}`,source:"ai",level:i<2?"warmup":i<4?"core":"challenge",q:{en:prompt(e,t,false),vi:prompt(e,t,true)},answers:[[a,a]],hint:{en:"Build the shortest useful digit or remainder cycle.",vi:"Lập chu kỳ chữ số hoặc số dư ngắn nhất cần dùng."},steps:{en:["Reduce the expression using a digit or remainder cycle.",`The answer is ${a}.`],vi:["Rút gọn biểu thức bằng chu kỳ chữ số hoặc số dư.",`Đáp án là ${a}.`]},visual:`b21-extra-${i+1}`,visualPlacement:"question"}));
})();
