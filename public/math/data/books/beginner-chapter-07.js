(function registerBeginnerChapterSeven(){
  "use strict";
  const book=window.MQ_BOOK_DATA&&window.MQ_BOOK_DATA.beginner;if(!book)return;
  const {chapters,exercises,solutions,extra}=book;
  chapters[7]={id:7,emoji:"⚙️",pages:"58–68",available:true,title:{en:"Tricks in Multiplication and Division",vi:"Mẹo nhân và chia"},tagline:{en:"Regroup factors, distribute, and spot special products",vi:"Nhóm thừa số, phân phối và nhận ra tích đặc biệt"},theory:[
    [{en:"Laws of multiplication",vi:"Các tính chất của phép nhân"},{en:"Use commutative, associative and distributive laws to rearrange factors without changing the product.",vi:"Dùng tính chất giao hoán, kết hợp và phân phối để đổi cách nhóm mà không làm đổi tích."}],
    [{en:"Make 10, 100 or 1000",vi:"Tạo 10, 100 hoặc 1000"},{en:"Useful pairs include 2×5=10, 4×25=100 and 8×125=1000.",vi:"Các cặp hữu ích gồm 2×5=10, 4×25=100 và 8×125=1000."}],
    [{en:"Prime factorisation",vi:"Phân tích thừa số nguyên tố"},{en:"Keep splitting a number until every factor is prime; the final prime factors do not depend on the chosen tree.",vi:"Tiếp tục tách một số cho đến khi mọi thừa số đều là số nguyên tố; kết quả không phụ thuộc vào cây đã chọn."}],
    [{en:"Multiply by 11 or 101",vi:"Nhân với 11 hoặc 101"},{en:"Use n×11=n×(10+1) and n×101=n×(100+1).",vi:"Dùng n×11=n×(10+1) và n×101=n×(100+1)."}],
    [{en:"Same tens digit, ones add to 10",vi:"Cùng hàng chục, hàng đơn vị cộng thành 10"},{en:"For 72×78, write 7×8 for the leading part and 2×8 for the last two digits: 5616.",vi:"Với 72×78, lấy 7×8 làm phần đầu và 2×8 làm hai chữ số cuối: 5616."}],
  ],examples:[
    {q:{en:"Calculate 88×125 by making 1000.",vi:"Tính 88×125 bằng cách tạo 1000."},steps:[{en:"Write 88 as 11×8.",vi:"Viết 88 thành 11×8."},{en:"11×(8×125)=11×1000=11000.",vi:"11×(8×125)=11×1000=11000."}],a:{en:"11000",vi:"11000"},visual:"b7-example-1"},
    {q:{en:"Find the prime factors of 80.",vi:"Tìm các thừa số nguyên tố của 80."},steps:[{en:"Split 80=20×4, then 20=5×4 and each 4=2×2.",vi:"Tách 80=20×4, rồi 20=5×4 và mỗi số 4=2×2."},{en:"80=2×2×2×2×5.",vi:"80=2×2×2×2×5."}],a:{en:"2×2×2×2×5",vi:"2×2×2×2×5"},visual:"b7-example-2"},
  ],check:["b7-1a","b7-2-1a","b7-2-2a","b7-3a","b7-5a"]};
  exercises[7]=[];solutions[7]={};
  const addCalc=(n,expr,step,answer,kind="calc")=>{const id=`b7-${n}`;exercises[7].push({n,id,source:"pdf",q:{en:`Calculate: ${expr}.`,vi:`Tính: ${expr}.`},visual:`b7-${kind}-${n}`,visualPlacement:"question"});solutions[7][id]={answers:[[String(answer)]],hint:{en:"Rearrange or distribute the factors to make an easy product.",vi:"Đổi cách nhóm hoặc phân phối để tạo tích dễ tính."},guide:{en:[`Rewrite the expression as ${step}.`,`Therefore the value is ${answer}.`],vi:[`Viết lại biểu thức thành ${step}.`,`Vậy giá trị bằng ${answer}.`]},visual:`b7-${kind}-${n}-solution`};};
  const L="abcdefghijklmnopqrst";
  const q1Expr=["14 × 25 × 4","4 × 17 × 25","25 × 32 × 125","125 × 25 × 4","56 × 125","125 × 72","64 × 5 × 25 × 125","56 × 25 × 2 × 5","25 × 16 × 125 × 4 × 5","25 × 64 × 125 × 25","25 × 24 × 8 × 125","25 × 40 × 125 × 8"];
  const q1Step=["14×(25×4)=14×100","17×(4×25)=17×100","(25×4)×(8×125)=100×1000","125×(25×4)=125×100","7×(8×125)=7×1000","(125×8)×9=1000×9","(2×5)×(4×25)×(8×125)=10×100×1000","14×(4×25)×(2×5)=14×100×10","(25×4)×(8×125)×(2×5)=100×1000×10","(25×4)×2×(8×125)×25=100×2×1000×25","(25×4)×6×(8×125)=100×6×1000","(25×4)×10×(125×8)=100×10×1000"];
  const q1Ans=[1400,1700,100000,12500,7000,9000,1000000,14000,1000000,5000000,600000,1000000];q1Expr.forEach((e,i)=>addCalc(`1${L[i]}`,e,q1Step[i],q1Ans[i]));
  const factorRows=[
    ["2-1a",24,"2 × 2 × 2 × 3"],["2-1b",36,"2 × 2 × 3 × 3"],["2-1c",27,"3 × 3 × 3"],["2-1d",44,"2 × 2 × 11"],["2-1e",42,"2 × 3 × 7"],["2-1f",56,"2 × 2 × 2 × 7"],["2-1g",33,"3 × 11"],["2-1h",64,"2 × 2 × 2 × 2 × 2 × 2"],["2-1i",48,"2 × 2 × 2 × 2 × 3"],["2-1j",99,"3 × 3 × 11"],
    ["2-2a",90,"2 × 3 × 3 × 5"],["2-2b",175,"5 × 5 × 7"],["2-2c",180,"2 × 2 × 3 × 3 × 5"],["2-2d",225,"3 × 3 × 5 × 5"]
  ];
  factorRows.forEach(([n,value,factors])=>{const id=`b7-${n}`;const tree=n.startsWith("2-2");exercises[7].push({n,id,source:"pdf",q:{en:`Find the prime factors of ${value}${tree?" using a factor tree":""}.`,vi:`Tìm các thừa số nguyên tố của ${value}${tree?" bằng sơ đồ cây":""}.`},visual:`b7-factor-${n}`,visualPlacement:"question"});solutions[7][id]={answers:[[factors,factors.replaceAll(" ","")]],hint:{en:"Split the number into smaller factors until every branch ends at a prime.",vi:"Tách số thành các thừa số nhỏ hơn cho đến khi mỗi nhánh kết thúc ở một số nguyên tố."},guide:{en:[`A valid factor tree ends in ${factors}.`,`Hence ${value}=${factors}.`],vi:[`Một cây thừa số đúng kết thúc ở ${factors}.`,`Vậy ${value}=${factors}.`]},visual:`b7-factor-${n}-solution`};});
  const q3Expr=["7 × 14 + 7 × 86","65 ÷ 11 + 56 ÷ 11","24 × 23 + 24 × 77","31 × 84 + 31 × 16","58 ÷ 12 + 86 ÷ 12","100 ÷ 14 + 96 ÷ 14","35 × 202","45 × 98","72 × 101","38 × 99","33 × 97","83 × 99","4 × (72 × 25 + 28 × 25)","(110 + 25 − 9) × 8","125 × (84 × 8 + 16 × 8)","8 × (98 − 48 + 74)","25 × (28 × 4 + 72 × 4)","25 × 73 + 50 × 73 + 25 × 73","74 + 5 × 740 + 49 × 74","81 + 5 × 810 + 49 × 81"];
  const q3Step=["7×(14+86)=7×100","(65+56)÷11=121÷11","24×(23+77)=24×100","31×(84+16)=31×100","(58+86)÷12=144÷12","(100+96)÷14=196÷14","35×(200+2)","45×(100−2)","72×(100+1)","38×(100−1)","33×(100−3)","83×(100−1)","(4×25)×(72+28)=100×100","126×8=(125+1)×8","(125×8)×(84+16)=1000×100","8×124=8×(125−1)","(25×4)×(28+72)=100×100","73×(25+50+25)=73×100","74×(1+50+49)=74×100","81×(1+50+49)=81×100"];
  const q3Ans=[700,11,2400,3100,12,14,7070,4410,7272,3762,3201,8217,10000,1008,100000,992,10000,7300,7400,8100];q3Expr.forEach((e,i)=>addCalc(`3${L[i]}`,e,q3Step[i],q3Ans[i],"distribute"));
  const q4Expr=["34 × 11","45 × 11","27 × 11","37 × 11","345 × 11","123 × 11","426 × 11","286 × 11","14 × 101","67 × 101","23 × 101","45 × 101","82 × 101","98 × 101","63 × 101","76 × 101"];
  const q4Ans=[374,495,297,407,3795,1353,4686,3146,1414,6767,2323,4545,8282,9898,6363,7676];q4Expr.forEach((e,i)=>{const n=Number(e.split(" ")[0]);const k=e.includes("101")?100:10;addCalc(`4${L[i]}`,e,`${n}+${n}×${k}`,q4Ans[i],"repeat");});
  const q5Expr=["43 × 47","54 × 56","52 × 58","66 × 64","73 × 77","89 × 81","92 × 98","57 × 53","42 × 48","85 × 85","44 × 46","74 × 76"];
  const q5Ans=[2021,3024,3016,4224,5621,7209,9016,3021,2016,7225,2024,5624];q5Expr.forEach((e,i)=>{const [a,b]=e.split(" × ").map(Number),t=Math.floor(a/10),u=a%10,v=b%10;addCalc(`5${L[i]}`,e,`${t}×(${t}+1)=${t*(t+1)}; ${u}×${v}=${u*v}`,q5Ans[i],"special");});
  const makeExtra=(n,expr,step,answer,kind="calc")=>({id:`b7-extra-${n}`,source:"ai",level:n<3?"warmup":n<5?"core":"challenge",q:{en:`Calculate mentally: ${expr}.`,vi:`Tính nhẩm: ${expr}.`},answers:[[String(answer)]],hint:{en:"Regroup factors to make 10, 100 or 1000.",vi:"Nhóm các thừa số để tạo 10, 100 hoặc 1000."},steps:{en:[`${step}=${answer}.`],vi:[`${step}=${answer}.`]},visual:`b7-${kind}-extra-${n}`,visualPlacement:"question"});
  extra[7]=[
    makeExtra(1,"36 × 25","9×(4×25)=9×100",900),
    makeExtra(2,"48 × 125","6×(8×125)=6×1000",6000),
    makeExtra(3,"26 × 31 + 26 × 69","26×(31+69)=26×100",2600,"distribute"),
    makeExtra(4,"74 × 101","74×(100+1)",7474,"repeat"),
    makeExtra(5,"68 × 62","6×7=42; 8×2=16",4216,"special"),
  ];
})();
