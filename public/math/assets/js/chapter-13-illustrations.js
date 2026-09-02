(function registerChapterThirteenIllustrations(){
  "use strict";
  const out=(window.PILOT_ILLUSTRATIONS=window.PILOT_ILLUSTRATIONS||{});
  const data={
    1:["3","6","9","…","45"],2:["1","2","3"],3:["10¢ ×5","20¢ ×3","50¢ ×1"],4:["1×60","2×30","3×20","4×15"],5:["🔑×6","🔒×6"],6:["15 guests","each pair once"],7:["66 matches","? teams"],8:["1×144","2×72","3×48","…"],9:["4","8","12","…","100"],10:["3","5","8","0"],11:["🎒 A B C","✏️ 1 2 3 4"],12:["15 marbles","4 unequal groups"],13:["6 students","2 roles"],14:["20¢ ×2","50¢ ×2"],15:["Science","Maths","English"]
  };
  Object.entries(data).forEach(([n,tokens])=>{out[`list-13-${n}`]=()=>`<figure class="math-visual" role="img" aria-label="Listing workspace for Chapter 13 Practice ${n}"><div style="display:flex;flex-wrap:wrap;justify-content:center;gap:12px">${tokens.map(x=>`<strong style="padding:12px 16px;border:2px solid #17345c;border-radius:14px;background:#fff7df">${x}</strong>`).join("")}</div><div style="width:min(720px,94%);display:grid;grid-template-columns:repeat(4,1fr);border:2px solid #17345c;border-radius:12px;overflow:hidden">${Array.from({length:12},()=>'<span style="min-height:36px;border:1px solid #b7c9e3;background:#fff"></span>').join("")}</div><figcaption>Make an ordered list and use each valid case once.</figcaption></figure>`});
})();
