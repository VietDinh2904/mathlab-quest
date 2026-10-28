(function registerBeginnerChapterSix(){
  "use strict";
  const book=window.MQ_BOOK_DATA&&window.MQ_BOOK_DATA.beginner;if(!book)return;
  const {chapters,exercises,solutions,extra}=book;
  chapters[6]={id:6,emoji:"🎯",pages:"51–58",available:true,title:{en:"Tricks in Addition and Subtraction",vi:"Mẹo cộng và trừ"},tagline:{en:"Regroup and compensate to make round numbers",vi:"Nhóm và bù để tạo số tròn"},theory:[
    [{en:"Make a round number",vi:"Tạo số tròn"},{en:"Replace a nearby number by a multiple of 10, 100 or 1000, then compensate for the change.",vi:"Thay một số gần đó bằng bội của 10, 100 hoặc 1000 rồi bù lại phần đã thay đổi."}],
    [{en:"Reorder addends",vi:"Đổi thứ tự số hạng"},{en:"In addition, reorder and group terms that make round totals.",vi:"Trong phép cộng, đổi thứ tự và nhóm các số hạng tạo thành tổng tròn."}],
    [{en:"Group subtractions",vi:"Nhóm các số trừ"},{en:"Use a−b−c=a−(b+c), and pair subtrahends that make round totals.",vi:"Dùng a−b−c=a−(b+c), rồi ghép các số trừ tạo thành tổng tròn."}],
    [{en:"Respect parentheses",vi:"Chú ý dấu ngoặc"},{en:"Use a−(b−c)=a−b+c and a−(b+c)=a−b−c.",vi:"Dùng a−(b−c)=a−b+c và a−(b+c)=a−b−c."}],
  ],examples:[
    {q:{en:"Calculate 65+37 by making 100.",vi:"Tính 65+37 bằng cách tạo 100."},steps:[{en:"Split 37 into 35+2.",vi:"Tách 37 thành 35+2."},{en:"65+35+2=100+2=102.",vi:"65+35+2=100+2=102."}],a:{en:"102",vi:"102"},visual:"b6-example-1"},
    {q:{en:"Calculate 643−97 by compensation.",vi:"Tính 643−97 bằng cách bù."},steps:[{en:"Subtract 100 instead of 97, then add back 3.",vi:"Trừ 100 thay vì 97 rồi cộng lại 3."},{en:"643−100+3=546.",vi:"643−100+3=546."}],a:{en:"546",vi:"546"},visual:"b6-example-2"},
  ],check:["b6-1a","b6-1q","b6-2g","b6-3k","b6-4"]};
  exercises[6]=[];solutions[6]={};
  const rows=[];
  const A="abcdefghijklmnopqrstuv";
  const B="abcdefghi";
  const C="abcdefghijklmnopqrstuvwxyz";
  const g1Expr=["23 + 99","152 − 97","162 − 97","565 − 298","638 + 397","499 + 127","645 − 98","533 − 199","285 + 297","424 − 196","43 + 99 + 58","56 + 87 + 77","74 + 75 + 28","27 + 86 + 63 + 14","323 + 677 + 92 + 108","167 + 355 + 345 + 133","9999 + 999 + 99 + 9","18 + 28 + 38 + 48 + 58","9997 + 4 + 99 + 998 + 3 + 9","74 + 75 + 77 + 80 + 82 + 85","299999 + 29999 + 2999 + 299 + 29","133 + 135 + 140 + 147 + 145 + 142 + 138"];
  const g1Step=["23 + 100 − 1","152 − 100 + 3","162 − 100 + 3","565 − 300 + 2","638 + 400 − 3","500 + 127 − 1","645 − 100 + 2","533 − 200 + 1","285 + 300 − 3","424 − 200 + 4","40 + 100 + 60","50 + 90 + 80","74 + 3 + (75 + 25)","(27 + 63) + (86 + 14)","(323 + 677) + (92 + 108)","(167 + 133) + (355 + 345)","10000 + 1000 + 100 + 10 − 4","(20−2)+(30−2)+(40−2)+(50−2)+(60−2)","(9997+3)+(99+1)+(998+2)+4+9","(74+85)+(75+82)+(77+80)","300000+30000+3000+300+30−5","140×7 + (−7−5+0+7+5+2−2)"];
  const g1Ans=[122,55,65,267,1035,626,547,334,582,228,200,220,177,190,1200,1000,11106,190,11110,473,333325,980];
  g1Expr.forEach((e,i)=>rows.push([`1${A[i]}`,e,g1Step[i],g1Ans[i],"round"]));
  const g2Expr=["420 − 102 − 98","240 − 104 − 96","325 − 10 − 20 − 80 − 90","400 − 90 − 80 − 20 − 10 − 5","235 − 15 − 25 − 75 − 85","200 − 1 − 2 − 3 − 4 − 5","120 − 117 + 116 − 113 + 112 − 109 + … + 100 − 97","145 − 141 + 140 − 136 + 135 − 131 + … + 95 − 91","800 − 10 − 20 − 30 − 40 − 50 − 60 − 70 − 80 − 90"];
  const g2Step=["420 − (102 + 98)","240 − (104 + 96)","325 − (10+90+20+80)","400 − (90+10+80+20) − 5","235 − (15+85+25+75)","200 − (1+2+3+4+5)","6 × 3","11 × 4","800 − (10+90+20+80+30+70+40+60+50)"];
  const g2Ans=[220,40,125,195,35,185,18,44,350];g2Expr.forEach((e,i)=>rows.push([`2${B[i]}`,e,g2Step[i],g2Ans[i],i>5?"pairs":"subtract"]));
  const g3Expr=["375 + 286 + 125 + 714","728 + 140 + 272","37 + 97 + 3997 + 99","71 + 69 + 68 + 73 + 74","1897 + 128 − 597","728 − (28 + 320)","1290 − 164 − 736","1330 − 288 − 342","843 + 78 − 43","528 − (186 + 328)","564 − (387 − 136)","847 − 578 + 398 − 222","936 − 867 − 99 + 267","33 + 87 + 67 + 13","96 + 103 + 97 + 104 + 101 + 99","23 + 56 + 77 + 18 + 44 + 82","9 + 99 + 999 + 9999","8 + 98 + 998 + 9998","464 − 548 + 99 + 348","537 − (543 − 163) − 57","713 − (513 − 229)","850 − 486 − 114","46 + 37 + 54 + 63","947 + (372 − 447) − 572","989 − 675 − 189","583 − 297 − 183"];
  const g3Step=["(375+125)+(286+714)","(728+272)+140","(40−3)+(100−3)+(4000−3)+(100−1)","70×5 + 5","(1897−597)+128","728−28−320","1290−(164+736)","1330−(288+342)","(843−43)+78","528−328−186","564+136−387","847−(578+222)+398","936−(100−1)−(867−267)","(33+67)+(87+13)","(96+104)+(103+97)+(101+99)","(23+77)+(56+44)+(18+82)","10+100+1000+10000−4","10+100+1000+10000−8","464+(100−1)−(548−348)","(537+163)−(543+57)","713−513+229","850−(486+114)","(46+54)+(37+63)","(947−447)−(572−372)","(989−189)−675","(583−183)−297"];
  const g3Ans=[1500,1140,4230,355,1428,380,390,700,878,14,313,445,237,200,600,300,11106,11102,363,100,429,250,200,300,125,103];g3Expr.forEach((e,i)=>rows.push([`3${C[i]}`,e,g3Step[i],g3Ans[i],"mixed"]));
  rows.push(["4","360 − 357 + 354 − 351 + … + 300 − 297","11 × 3",33,"pairs"]);
  rows.forEach(([n,expr,step,answer,kind])=>{const id=`b6-${n}`;exercises[6].push({n,id,source:"pdf",q:{en:`Calculate: ${expr}.`,vi:`Tính: ${expr}.`},visual:`b6-${kind}-${n}`,visualPlacement:"question"});solutions[6][id]={answers:[[String(answer)]],hint:{en:"Look for terms that can be paired or compensated to make round numbers.",vi:"Tìm các số có thể ghép hoặc bù để tạo số tròn."},guide:{en:[`Regroup or compensate: ${step}.`,`Therefore the value is ${answer}.`],vi:[`Nhóm hoặc bù: ${step}.`,`Vậy giá trị bằng ${answer}.`]},visual:`b6-${kind}-${n}-solution`};});
  const ex=(n,expr,step,answer,kind="round")=>({id:`b6-extra-${n}`,source:"ai",level:n<3?"warmup":n<5?"core":"challenge",q:{en:`Calculate mentally: ${expr}.`,vi:`Tính nhẩm: ${expr}.`},answers:[[String(answer)]],hint:{en:"Make round totals.",vi:"Hãy tạo các tổng tròn."},steps:{en:[`${step} = ${answer}.`],vi:[`${step} = ${answer}.`]},visual:`b6-${kind}-extra-${n}`,visualPlacement:"question"});
  extra[6]=[
    ex(1,"48 + 97","48 + 100 − 3",145),
    ex(2,"703 − 198","703 − 200 + 2",505),
    ex(3,"36 + 64 + 125 + 75","(36+64)+(125+75)",300),
    ex(4,"900 − 48 − 52 − 175 − 25","900−(48+52)−(175+25)",600,"subtract"),
    ex(5,"500 − 497 + 494 − 491 + … + 440 − 437","11 × 3",33,"pairs"),
  ];
})();
