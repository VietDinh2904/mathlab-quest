(function registerBeginnerChapterTwoIllustrations(){
  "use strict";
  const art=window.PILOT_ILLUSTRATIONS=window.PILOT_ILLUSTRATIONS||{};
  const isVi=()=>document.documentElement.lang!=="en";
  const esc=v=>String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);
  const text=(x,y,s,z=24,c="#17365d")=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="${z}" font-weight="900" fill="${c}">${esc(s)}</text>`;
  const frame=(vi,en,body)=>`<div class="book-visual"><div class="book-visual-title">${esc(isVi()?vi:en)}</div><svg viewBox="0 0 920 320" role="img" aria-label="${esc(isVi()?vi:en)}" style="display:block;width:min(100%,980px);height:auto;margin:auto">${body}</svg></div>`;
  const arrow=(x1,y1,x2,y2,c="#4c8df6")=>`<path d="M${x1} ${y1} Q${(x1+x2)/2} ${Math.min(y1,y2)-52} ${x2} ${y2}" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/><path d="M${x2-12} ${y2-7}L${x2} ${y2}L${x2-5} ${y2-13}" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>`;
  function pairDiagram(items,formula,solution=false){
    const vals=items.length>10?[items[0],items[1],"…",items[items.length-2],items[items.length-1]]:items;
    const gap=760/(vals.length-1),xs=vals.map((_,i)=>80+i*gap);
    let body=vals.map((v,i)=>`<circle cx="${xs[i]}" cy="150" r="34" fill="${solution?'#d9f6e9':'#eef5ff'}" stroke="#17365d" stroke-width="4"/>${text(xs[i],159,v,23)}`).join("");
    if(vals.length===5&&vals[2]==="…") body+=arrow(xs[0],112,xs[4],112)+arrow(xs[1],104,xs[3],104,"#ff806f");
    else for(let i=0;i<Math.floor(vals.length/2);i++)body+=arrow(xs[i],112,xs[vals.length-1-i],112,i%2?"#ff806f":"#4c8df6");
    body+=text(460,265,solution?formula:(isVi()?"Ghép từ hai đầu":"Pair from both ends"),25,solution?"#16866b":"#17365d");
    return body;
  }
  const configs={
    "b2-example-1":{i:[1,2,3,4,5,6,7,8],f:"4 × 9 = 36"},"b2-example-2":{i:[1,2,3,"…",13,14,15],f:"7 × 16 + 8 = 120"},
    "b2-gauss-1":{i:[4,6,8,10,12,14],f:"3 × 18 = 54"},"b2-gauss-2":{i:[2,3,4,5,6,7,8],f:"3 × 10 + 5 = 35"},
    "b2-gauss-3":{i:[3,4,5,6,7,8,9,10],f:"4 × 13 = 52"},"b2-gauss-4":{i:[5,6,7,8,9,10,11],f:"3 × 16 + 8 = 56"},
    "b2-gauss-5":{i:[16,18,20,22,24,26,28,30],f:"4 × 46 = 184"},"b2-gauss-6":{i:[3,5,7,9,11,13,15],f:"3 × 18 + 9 = 63"},
    "b2-gauss-7":{i:[5,8,11,14,17,20],f:"3 × 25 = 75"},"b2-gauss-8":{i:[9,13,17,21,25,29],f:"3 × 38 = 114"},
    "b2-gauss-9":{i:[1,2,"…",49,50],f:"25 × 51 = 1275"},"b2-gauss-10":{i:[2,4,"…",48,50],f:"12 × 52 + 26 = 650"},
    "b2-gauss-11":{i:[1,3,"…",47,49],f:"12 × 50 + 25 = 625"},"b2-gauss-12":{i:[1,2,"…",99,100],f:"50 × 101 = 5050"},
    "b2-gauss-13":{i:[15,30,"…",105,120],f:"4 × 135 = 540"},"b2-gauss-14":{i:[10,12,"…",30,32],f:"6 × 42 = 252"},
    "b2-gauss-15":{i:[20,25,"…",75,80],f:"6 × 100 + 50 = 650"},"b2-gauss-16b":{i:[30,33,"…",72,75],f:"8 × 105 = 840"},
    "b2-gauss-20":{i:[1,2,"…",18,19],f:"9 × 20 + 10 = 190"},"b2-gauss-21a":{i:[1,2,"…",11,12],f:"6 × 13 = 78"},
    "b2-extra-1":{i:[7,9,11,13,15,17],f:"3 × 24 = 72"},"b2-extra-2":{i:[12,13,14,15,16],f:"2 × 28 + 14 = 70"},
    "b2-extra-3":{i:[18,21,"…",39,42],f:"4 × 60 + 30 = 270"},"b2-extra-4":{i:[1,3,"…",57,59],f:"15 × 60 = 900"},
    "b2-extra-5":{i:[1,2,"…",28,29],f:"14 × 30 + 15 = 435"}
  };
  Object.entries(configs).forEach(([id,c])=>{art[id]=()=>frame("Ghép các số hạng cách đều","Pair equally spaced terms",pairDiagram(c.i,c.f,false));art[`${id}-solution`]=()=>frame("Các cặp có cùng tổng","Every pair has the same sum",pairDiagram(c.i,c.f,true));});
  function rows(first,last,count,solution=false){let b="";for(let i=0;i<8;i++){const y=48+i*30,w=150+i*34;b+=`<rect x="${460-w/2}" y="${y}" width="${w}" height="20" rx="8" fill="${solution?'#c8f3df':'#eef5ff'}" stroke="#17365d" stroke-width="3"/>${text(460,y+16,i===0?first:(i===7?last:""),16)}`;}return b+text(735,155,solution?`${count} ${isVi()?"hàng":"rows"}`:"+3",26,solution?"#16866b":"#ff806f");}
  art["b2-gauss-16a"]=()=>frame("Mỗi hàng tăng 3 ghế","Each row gains 3 seats",rows("?","75",16,false));art["b2-gauss-16a-solution"]=()=>frame("Lùi 15 bước, mỗi bước 3","Go back 15 steps of 3",rows("30","75",16,true));
  function repeat(solution=false){const vals=[3,3,1,9,4,3,3,1,9,4];return vals.map((v,i)=>`<rect x="45+${i*82}" y="105" width="62" height="62" rx="12" fill="${solution&&(i===2||i===7)?'#c8f3df':'#eef5ff'}" stroke="#17365d" stroke-width="3"/>${text(76+i*82,145,v,24)}`).join("")+text(460,245,solution?(isVi()?"Chu kỳ 5 số":"Period of 5"):"3, 3, 1, 9, 4",24,solution?"#16866b":"#17365d");}
  ["b2-gauss-17a","b2-gauss-17b"].forEach((id,idx)=>{art[id]=()=>frame("Dãy lặp 5 số","A 5-term repeating sequence",repeat(false));art[`${id}-solution`]=()=>frame(idx?("8 chu kỳ có tổng 160"):("Số thứ 33 là 1"),idx?"8 cycles total 160":"The 33rd term is 1",repeat(true));});
  function timeline(solution=false){const years=[1995,1997,1999,2001,2003,2005,2007];return `<path d="M90 155H830" stroke="#17365d" stroke-width="6"/>`+years.map((y,i)=>`<circle cx="${100+i*120}" cy="155" r="13" fill="${y===2003?'#ff806f':solution?'#55c9a5':'#fff'}" stroke="#17365d" stroke-width="4"/>${text(100+i*120,205,solution?y:(y===2003?2003:"?"),18)}`).join("");}
  art["b2-gauss-18"]=()=>frame("Mỗi quyển cách nhau 2 năm","Books are 2 years apart",timeline(false));art["b2-gauss-18-solution"]=()=>frame("Từ 1995 đến 2007","From 1995 to 2007",timeline(true));
  function groups(solution=false){const vals=[1,2,3,4,5,6,7,8,9,10];return vals.map((v,i)=>`<circle cx="${75+i*85}" cy="145" r="27" fill="${solution?'#ffe5df':'#eef5ff'}" stroke="#17365d" stroke-width="3"/>${text(75+i*85,153,v,20)}`).join("")+text(460,245,solution?"1+2+…+10 = 55 > 54":"54 ?",26,solution?"#d85c48":"#17365d");}
  art["b2-gauss-19"]=()=>frame("Mười nhóm có số bóng khác nhau","Ten differently sized groups",groups(false));art["b2-gauss-19-solution"]=()=>frame("Ít nhất cần 55 quả bóng","At least 55 balls are needed",groups(true));
  function clock(solution=false){let b=`<circle cx="460" cy="150" r="112" fill="#fff8da" stroke="#17365d" stroke-width="6"/>`;for(let h=1;h<=12;h++){const a=(h-3)*Math.PI/6;b+=text(460+86*Math.cos(a),158+86*Math.sin(a),h,18);}b+=`<path d="M460 150L460 75M460 150L520 150" stroke="#ff806f" stroke-width="7" stroke-linecap="round"/>`+text(730,155,solution?"78 × 2 = 156":"24 h",28,solution?"#16866b":"#17365d");return b;}
  art["b2-gauss-21b"]=()=>frame("Hai chu kỳ 12 giờ","Two 12-hour cycles",clock(false));art["b2-gauss-21b-solution"]=()=>frame("Tổng 156 tiếng điểm","156 chimes in total",clock(true));
})();
