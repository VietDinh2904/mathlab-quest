(function registerJuniorOneChapterNineteenIllustrations() {
  "use strict";
  const art = window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {};
  const vi = () => document.documentElement.lang !== "en";
  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);
  const title = (vn,en) => `<div class="book-visual-title">${esc(vi()?vn:en)}</div>`;
  const frame = (vn,en,body) => `<div class="book-visual">${title(vn,en)}<svg viewBox="0 0 920 270" role="img" aria-label="${esc(vi()?vn:en)}" style="display:block;width:min(100%,980px);height:auto;margin:auto">${body}</svg></div>`;
  const node = (x,label,fill="#fffdfa") => `<circle cx="${x}" cy="110" r="39" fill="${fill}" stroke="#17365d" stroke-width="4"/><text x="${x}" y="119" text-anchor="middle" fill="#23314d" font-size="25" font-weight="900">${esc(label)}</text>`;
  const arrow = (x1,x2,label) => `<line x1="${x1}" y1="110" x2="${x2}" y2="110" stroke="#59c9a8" stroke-width="5" marker-end="url(#a)"/><text x="${(x1+x2)/2}" y="88" text-anchor="middle" fill="#17365d" font-size="21" font-weight="900">${esc(label)}</text>`;
  const defs = `<defs><marker id="a" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#59c9a8"/></marker></defs>`;
  const flow = (labels, ops, solution=false) => {
    const xs = labels.map((_,i)=>80+i*(760/(labels.length-1)));
    let body=defs;
    xs.forEach((x,i)=>{ body+=node(x, solution?labels[i]:(i===0?"?":labels[i]), i===labels.length-1?"#fff1bf":"#e8f3ff"); if(i<ops.length) body+=arrow(x+43,xs[i+1]-48,ops[i]); });
    body += `<text x="460" y="225" text-anchor="middle" fill="${solution?'#16866b':'#5b6b82'}" font-size="23" font-weight="900">${esc(solution?(vi()?"Làm ngược từ phải sang trái":"Work backwards from right to left"):(vi()?"Tìm giá trị ban đầu":"Find the starting value"))}</text>`;
    return body;
  };
  const specs = {
    "j1-back-example-1":[["8","6","13"],["−2","+7"]], "j1-back-example-2":[["24","12","6"],["÷2","÷2"]],
    "j1-back-1a":[["15","8","10"],["−7","+2"]], "j1-back-1b":[["16","24","12"],["+8","−12"]], "j1-back-1c":[["35","20","9"],["−15","−11"]], "j1-back-1d":[["42","24","30"],["−18","+6"]],
    "j1-back-2a":[["15","5","10"],["÷3","+5"]], "j1-back-2b":[["9","27","15"],["×3","−12"]], "j1-back-2c":[["36","9","20"],["÷4","+11"]], "j1-back-2d":[["9","45","25"],["×5","−20"]],
    "j1-back-3a":[["10","20","12","3"],["×2","−8","÷4"]], "j1-back-3b":[["30","10","15","30"],["÷3","+5","×2"]],
    "j1-back-3c":[["1","6","30","25","5"],["+5","×5","−5","÷5"]], "j1-back-3d":[["1","9","72","64","8"],["+8","×8","−8","÷8"]], "j1-back-3e":[["16","18","15","60","12"],["+2","−3","×4","÷5"]],
    "j1-back-4":[["115","83","65","105"],["−32","−18","+40"]], "j1-back-5":[["50","30","4","14"],["−20","−26","+10"]],
    "j1-back-6":[["48","24","12"],["÷2","÷2"]], "j1-back-7":[["40","20","10"],["÷2","÷2"]],
    "j1-back-extra-1":[["8","17"],["+9"]], "j1-back-extra-2":[["7","14","20"],["×2","+6"]], "j1-back-extra-3":[["32","16","9"],["÷2","−7"]], "j1-back-extra-5":[["8","12","36","30","15"],["+4","×3","−6","÷2"]],
  };
  Object.entries(specs).forEach(([id,[labels,ops]])=>{
    art[id]=()=>frame("Sơ đồ phép tính","Operation flow",flow(labels,ops,false));
    art[`${id}-solution`]=()=>frame("Đảo phép tính","Reverse the operations",flow(labels,ops,true));
  });
  function groups(id,total,finalA,finalB,firstA,firstB) {
    const body=(solution)=>`${defs}<rect x="115" y="65" width="280" height="105" rx="24" fill="#e8f3ff" stroke="#17365d" stroke-width="4"/><rect x="525" y="65" width="280" height="105" rx="24" fill="#fff1bf" stroke="#17365d" stroke-width="4"/><text x="255" y="105" text-anchor="middle" font-size="21" font-weight="800" fill="#17365d">${esc(vi()?"Nhóm 1":"Group 1")}</text><text x="665" y="105" text-anchor="middle" font-size="21" font-weight="800" fill="#17365d">${esc(vi()?"Nhóm 2":"Group 2")}</text><text x="255" y="148" text-anchor="middle" font-size="31" font-weight="900" fill="#23314d">${solution?firstA:finalA}</text><text x="665" y="148" text-anchor="middle" font-size="31" font-weight="900" fill="#23314d">${solution?firstB:finalB}</text><text x="460" y="225" text-anchor="middle" font-size="23" font-weight="900" fill="#16866b">${solution?(vi()?"Ban đầu":"At first"):`${vi()?"Tổng":"Total"}: ${total}`}</text>`;
    art[id]=()=>frame("Hai nhóm thay đổi","Two changing groups",body(false)); art[`${id}-solution`]=()=>frame("Đảo các lần chuyển","Reverse the transfers",body(true));
  }
  groups("j1-back-8",16,8,8,7,9); groups("j1-back-9",120,60,60,45,75); groups("j1-back-10",18,10,8,12,6); groups("j1-back-11",420,280,140,260,160); groups("j1-back-12",840,630,210,550,290); groups("j1-back-extra-4",70,35,35,43,27);
})();
