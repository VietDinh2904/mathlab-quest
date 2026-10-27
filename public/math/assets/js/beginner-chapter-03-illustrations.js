(function registerBeginnerChapterThreeIllustrations(){
  "use strict";
  const art=window.PILOT_ILLUSTRATIONS=window.PILOT_ILLUSTRATIONS||{};const isVi=()=>document.documentElement.lang!=="en";const esc=v=>String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);const t=(x,y,s,z=22,c="#17365d")=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="${z}" font-weight="900" fill="${c}">${esc(s)}</text>`;const frame=(vi,en,b)=>`<div class="book-visual"><div class="book-visual-title">${esc(isVi()?vi:en)}</div><svg viewBox="0 0 920 320" role="img" aria-label="${esc(isVi()?vi:en)}" style="display:block;width:min(100%,980px);height:auto;margin:auto">${b}</svg></div>`;
  const arrow=(x,y,label,reverse=false)=>`<path d="M${x} ${y}H${x+100}" stroke="${reverse?'#16866b':'#4c8df6'}" stroke-width="5"/><path d="M${reverse?x+12:x+88} ${y-10}L${reverse?x:x+100} ${y}L${reverse?x+12:x+88} ${y+10}" fill="none" stroke="${reverse?'#16866b':'#4c8df6'}" stroke-width="5"/>${t(x+50,y-18,label,19,reverse?'#16866b':'#17365d')}`;
  function flow(ops,values,solution=false){const xs=[90,330,570,810];let b="";xs.forEach((x,i)=>{const label=solution?values[i]:(i===3?values[3]:"?");const size=String(label).length>9?15:(String(label).length>6?18:24);b+=`<rect x="${x-62}" y="115" width="124" height="72" rx="18" fill="${solution?'#d8f6e9':'#eef5ff'}" stroke="#17365d" stroke-width="4"/>${t(x,158,label,size)}`;if(i<3)b+=arrow(x+66,151,ops[i]||"→",solution);});return b+t(460,255,solution?(isVi()?"Đảo phép tính từ phải sang trái":"Undo from right to left"):(isVi()?"Thực hiện theo chiều xuôi":"Follow the operations forwards"),24,solution?'#16866b':'#17365d');}
  const cfg={
    "b3-example-1":[["×3","+5","÷2"],["15","45","50","25"]],"b3-example-2":[["÷2","÷2","−2"],["128","64","32","30"]],
    "b3-flow-1a":[["÷3","+5","×2"],["75","25","30","60"]],"b3-flow-1b":[["×3","−4","÷4"],["20","60","56","14"]],"b3-flow-1c":[["×2","+4","÷5"],["13","26","30","6"]],
    "b3-flow-2":[["+6","×6 rồi −6","÷6"],["1","7","36","6"]],"b3-flow-3":[["+3","×5","−8"],["1","4","20","12"]],"b3-flow-4":[["÷2","−87","kết quả"],["260","130","43","43"]],
    "b3-flow-5":[["−6","+10","−5"],["20","14","24","19"]],"b3-flow-6":[["A−4","B→A:5","so sánh"],["A23/B13","A19/B13","A24/B8","A=3B"]],"b3-flow-7":[["B−2","A→B:5","so sánh"],["A12/B4","A12/B2","A7/B7","A=B"]],
    "b3-flow-8":[["C→E:12","E→C:10","so sánh"],["C47/E13","C35/E25","C45/E15","C=3E"]],"b3-flow-9":[["A→B:15","B→A:18","so sánh"],["A57/B33","A42/B48","A60/B30","A=2B"]],"b3-flow-10":[["mỗi cành −2","6→ rồi 4←","so sánh"],["A12/B4","A10/B2","A8/B4","A=2B"]],
    "b3-flow-11":[["+4−6","×2","−3"],["11","9","18","15"]],"b3-flow-12":[["+4","−3","−3"],["tầng 8","tầng 12","tầng 9","tầng 6"]],"b3-flow-13":[["+10","÷4 rồi −15","×10"],["90","100","10","100"]],
    "b3-flow-14":[["÷2","÷2","÷2 rồi ÷2"],["16 m","8 m","4 m","1 m"]],"b3-flow-15":[["÷2 rồi −2","÷2 rồi +2","kết quả"],["108","52","28","28"]],"b3-flow-16":[["−7","+10","còn 3/4"],["13","6","16","12"]],
    "b3-flow-17":[["÷2 rồi −3","÷2 rồi −2","kết quả"],["30","12","4","4"]],"b3-flow-18":[["−4","÷2","÷2 rồi −1"],["28","24","12","5"]],"b3-flow-19":[["A→B:12","B→M:13","M→A:5"],["37/31/22","25/43/22","25/30/35","30/30/30"]],
    "b3-flow-20":[["A→B:3","B→C:5","so sánh"],["33/32/25","30/35/25","30/30/30","A=B=C"]],
    "b3-extra-1":[["×2","+7","kết quả"],["12","24","31","31"]],"b3-extra-2":[["−6","+2","kết quả"],["tầng 13","tầng 7","tầng 9","tầng 9"]],"b3-extra-3":[["÷2","−4","kết quả"],["44","22","18","18"]],
    "b3-extra-4":[["A→B:8","so sánh","kết quả"],["A68/B4","A60/B12","A=5B","A=5B"]],"b3-extra-5":[["+4","×3 rồi −6","÷2"],["8","12","30","15"]]
  };
  Object.entries(cfg).forEach(([id,[ops,values]])=>{art[id]=()=>frame("Sơ đồ phép tính theo chiều xuôi","Forward operation flow",flow(ops,values,false));art[`${id}-solution`]=()=>frame("Suy ngược để tìm giá trị ban đầu","Work backwards to find the start",flow(ops,values,true));});
})();
