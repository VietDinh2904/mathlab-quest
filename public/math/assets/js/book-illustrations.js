(function registerBookIllustrations() {
  "use strict";
  const art = window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {};
  const wrap = (title, body) => `<div class="book-visual"><div class="book-visual-title">${title}</div>${body}</div>`;
  function clock(hour, minute, label) {
    const hourAngle = (hour % 12) * 30 + minute * 0.5;
    const minuteAngle = minute * 6;
    const ticks = Array.from({ length: 12 }, (_, i) => {
      const a = i * Math.PI / 6;
      const x = 120 + Math.sin(a) * 72;
      const y = 100 - Math.cos(a) * 72;
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.5" fill="#17365d"/>`;
    }).join("");
    return wrap("Đọc giờ trên mặt đồng hồ · Read the clock", `<svg class="analogue-clock" viewBox="0 0 240 215" role="img" aria-label="Analogue clock"><circle cx="120" cy="100" r="86" fill="#fffdf7" stroke="#17365d" stroke-width="6"/>${ticks}<line x1="120" y1="100" x2="120" y2="54" stroke="#ff6f61" stroke-width="8" stroke-linecap="round" transform="rotate(${hourAngle} 120 100)"/><line x1="120" y1="100" x2="120" y2="31" stroke="#397ee8" stroke-width="5" stroke-linecap="round" transform="rotate(${minuteAngle} 120 100)"/><circle cx="120" cy="100" r="8" fill="#17365d"/><text x="120" y="205" text-anchor="middle" font-size="16" font-weight="800" fill="#61718a">${label}</text></svg>`);
  }
  art["clock-j1-0715"] = () => clock(7,15,"buổi sáng · am");
  art["clock-j1-1445"] = () => clock(2,45,"buổi chiều · pm");
  art["clock-j1-0555"] = () => clock(5,55,"buổi sáng · am");
  art["clock-j1-2340"] = () => clock(11,40,"buổi tối · pm");
  art["clock-j1-0650"] = () => clock(6,50,"buổi sáng · am");
  art["clock-j1-1815"] = () => clock(6,15,"buổi tối · pm");
  const timeline = (start, end, note) => wrap("Dòng thời gian · Timeline", `<div class="time-line"><span>${start}</span><i></i><b>${note}</b><i></i><span>${end}</span></div>`);
  art["timeline-j1-2a"] = () => timeline("2:00 pm","?","+25 phút");
  art["timeline-j1-2b"] = () => timeline("?","5:45 pm","40 phút");
  art["timeline-j1-3"] = () => timeline("2:30 pm","4:05 pm","?");
  art["timeline-j1-6"] = () => timeline("?","2:50 pm","50 phút");
  art["two-clocks-j1-5"] = () => wrap("Từ đồng hồ đầu đến đồng hồ sau", `<div class="clock-pair">${clock(2,30,"2:30").replace(/^<div[^>]*>|<\/div>$/g,"")}<span class="time-arrow">→ ? →</span>${clock(5,45,"5:45").replace(/^<div[^>]*>|<\/div>$/g,"")}</div>`);
  art["clock-pattern-j1-7"] = () => wrap("Mỗi bước ngắn hơn 10 phút", `<div class="pattern-strip"><span>7:20</span><b>+50</b><span>8:10</span><b>+40</b><span>8:50</span><b>+30</b><span>?</span><b>+20</b><span>?</span></div>`);
  art["number-pattern"] = () => wrap("Theo dõi quy luật từng bước", `<div class="pattern-hint"><span>①</span><i>→</i><span>②</span><i>→</i><span>③</span><i>→</i><span class="mystery">?</span></div>`);
  art["magic-nine"] = () => wrap("Phép màu của số 9", `<div class="equation-board"><div>21 × 9 = <b>189</b></div><div>321 × 9 = <b>2 889</b></div><div>4 321 × 9 = <b>38 889</b></div><div class="question-row">54 321 × 9 = <b>?</b></div></div>`);
  art["multiply-101"] = () => wrap("Quy luật nhân với 101", `<div class="equation-board"><div>101 × 11 = 1111</div><div>101 × 22 = 2222</div><div>101 × 33 = 3333</div><div class="question-row">101 × 44 = ?</div></div>`);
  art["pascal-beginner"] = () => wrap("Mỗi ô bằng tổng hai ô ngay phía trên", `<div class="pascal-triangle"><div>1</div><div>1　1</div><div>1　2　1</div><div>1　3　3　1</div><div>1　4　6　4　1</div><div>1　?　?　?　?　1</div></div>`);
  const boxData = [
    [[[30,40,20],[24,28,14]],[25,"?","?"]],
    [[[14,11,22],[12,10,20]],[20,"?","?"]],
    [[[18,15,23],[14,11,19]],[17,"?","?"]],
    [[[8,48,32],[9,54,38]],[7,"?","?"]],
    [[[3,12,24],[8,32,44]],[20,"?","?"]],
  ];
  function box([left,right,bottom], target=false) { return `<div class="number-box ${target ? "target" : ""}"><span>${left}</span><span>${right}</span><b>${bottom}</b></div>`; }
  boxData.forEach((entry,index)=>{ art[`number-box-${index+1}`]=()=>wrap("So sánh hai mẫu rồi hoàn thành mẫu thứ ba",`<div class="number-box-row">${box(entry[0][0])}${box(entry[0][1])}<span class="pattern-arrow">→</span>${box(entry[1],true)}</div>`); });
})();
