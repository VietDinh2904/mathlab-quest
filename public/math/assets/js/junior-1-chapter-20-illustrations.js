(function registerJuniorOneChapterTwentyIllustrations(){
  "use strict";
  const art=window.PILOT_ILLUSTRATIONS=window.PILOT_ILLUSTRATIONS||{};
  const isVi=()=>document.documentElement.lang!=="en";
  const esc=v=>String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);
  const frame=(vi,en,body)=>`<div class="book-visual"><div class="book-visual-title">${esc(isVi()?vi:en)}</div><svg viewBox="0 0 920 300" role="img" aria-label="${esc(isVi()?vi:en)}" style="display:block;width:min(100%,980px);height:auto;margin:auto">${body}</svg></div>`;
  const text=(x,y,s,size=22,fill="#23314d")=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}" font-weight="900" fill="${fill}">${esc(s)}</text>`;
  function boxes(count,items,solution=false,icons="●"){
    const shown=Math.min(count,10),gap=Math.min(145,780/shown),start=460-gap*(shown-1)/2; let b="";
    for(let i=0;i<shown;i++){const x=start+i*gap; b+=`<rect x="${x-34}" y="130" width="68" height="82" rx="14" fill="${solution&&i===0?"#fff1bf":"#e8f3ff"}" stroke="#17365d" stroke-width="4"/>${text(x,181,solution&&i===0?"2":"1",25)}`;}
    if(count>shown)b+=text(855,177,"…",28);
    for(let i=0;i<Math.min(items,12);i++){const x=460+(i-(Math.min(items,12)-1)/2)*48;b+=text(x,75,icons,28,i===items-1?"#ff806f":"#59c9a8");}
    b+=text(460,270,solution?(isVi()?"Vật cuối cùng buộc phải vào ngăn đã có vật":"The last object must enter an occupied box"):(isVi()?`${items} vật, ${count} ngăn`:`${items} objects, ${count} boxes`),20,solution?"#16866b":"#17365d");return b;
  }
  function colours(groups,limit,answer,solution=false){const colors=["#69aafc","#ffcc61","#ff7d6c","#74c9a8","#b79cff"];let b="";for(let i=0;i<groups;i++){const x=460+(i-(groups-1)/2)*145;b+=`<circle cx="${x}" cy="145" r="48" fill="${colors[i]}" stroke="#17365d" stroke-width="4"/>${text(x,154,solution?(i===0?limit+1:limit):limit,26)}`;}b+=text(460,255,solution?`${isVi()?"Lượt chắc chắn":"Guaranteed draw"}: ${answer}`:(isVi()?"Trường hợp bất lợi nhất":"Worst case"),23,solution?"#16866b":"#17365d");return b;}
  const boxSpecs={
    "j1-hole-example-1":[2,3,"🍎"],"j1-hole-1":[12,13,"●"],"j1-hole-2":[4,5,"🕊️"],"j1-hole-3":[4,5,"●"],"j1-hole-4":[3,4,"●"],"j1-hole-5":[5,6,"🍕"],"j1-hole-6":[30,31,"●"],"j1-hole-7":[3,4,"▣"],"j1-hole-9":[3,5,"●"],"j1-hole-extra-1":[3,4,"✏️"],"j1-hole-extra-3":[6,25,"●"]
  };
  Object.entries(boxSpecs).forEach(([id,[count,items,icon]])=>{art[id]=()=>frame("Phân vật vào các ngăn","Place objects into boxes",boxes(count,items,false,icon));art[`${id}-solution`]=()=>frame("Một ngăn phải nhận thêm vật","One box must receive another object",boxes(count,items,true,icon));});
  const colourSpecs={
    "j1-hole-example-2":[2,1,3],"j1-hole-example-3":[3,1,4],"j1-hole-8":[3,2,6],"j1-hole-10":[3,3,9],"j1-hole-extra-2":[3,1,4],"j1-hole-extra-4":[5,1,6],"j1-hole-extra-5":[4,2,9]
  };
  Object.entries(colourSpecs).forEach(([id,[groups,limit,answer]])=>{art[id]=()=>frame("Lấy nhiều nhất mà chưa đủ nhóm","Take the most without completing a group",colours(groups,limit,answer,false));art[`${id}-solution`]=()=>frame("Lượt tiếp theo tạo nhóm đủ","The next draw completes a group",colours(groups,limit,answer,true));});
  function circleRegions(solution=false){return `<circle cx="460" cy="145" r="105" fill="#fffdfa" stroke="#17365d" stroke-width="4"/><path d="M460 145L460 40M460 145L369 198M460 145L551 198" stroke="#17365d" stroke-width="4"/><path d="M460 145L460 40A105 105 0 0 1 551 198Z" fill="#78b7ff" opacity=".85"/><path d="M460 145L551 198A105 105 0 0 1 369 198Z" fill="#ff806f" opacity=".85"/><path d="M460 145L369 198A105 105 0 0 1 460 40Z" fill="${solution?"#78b7ff":"#fffdfa"}" opacity=".85"/>${text(460,285,solution?(isVi()?"Hai miền màu xanh":"Two blue regions"):(isVi()?"Miền thứ ba phải là xanh hoặc đỏ":"The third region must be blue or red"),22,solution?"#16866b":"#17365d")}`;}
  art["j1-hole-11"]=()=>frame("Ba miền, hai màu","Three regions, two colours",circleRegions(false));art["j1-hole-11-solution"]=()=>frame("Có ít nhất hai miền cùng màu","At least two regions match",circleRegions(true));
})();
