(function registerBookIllustrations() {
  "use strict";
  const art = window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {};
  const isVi = () => document.documentElement.lang !== "en";
  const local = (vi, en) => isVi() ? vi : en;
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
  const beginnerPatterns = {
    "b1-1a": ["1","1","2","3","5","?","?"],
    "b1-1b": ["1","1","1","1","4","7","13","?"],
    "b1-1c": ["3","5","9","15","23","33","45","?"],
    "b1-1d": ["1","3","6","10","?","21","28","36"],
    "b1-1e": ["0","3","8","15","24","?","48","63"],
    "b1-1f": ["1","2","6","24","120","?","5040"],
    "b1-1g": ["0","1","3","8","21","55","?","?"],
    "b1-1h": ["1","3","7","15","31","?","127"],
    "b1-1i": ["1","1","3","7","13","?","31"],
    "b1-1j": ["1","2","5","13","34","89","?","?"]
  };
  Object.entries(beginnerPatterns).forEach(([id, sequence]) => {
    art[`number-pattern-${id}`] = () => wrap("Dãy số đúng theo đề bài", `<div class="pattern-hint">${sequence.map((value, index) => `<span class="${value === "?" ? "mystery" : ""}">${value}</span>${index < sequence.length - 1 ? "<i>→</i>" : ""}`).join("")}</div>`);
  });
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

  const pointLine = ({ count, icon = "🌳", gap = null, from = 1, to = count, unit = "" }) => {
    const width = 700;
    const start = 55;
    const end = 645;
    const step = (end - start) / Math.max(count - 1, 1);
    const points = Array.from({ length: count }, (_, index) => {
      const position = index + 1;
      const x = start + index * step;
      const active = position >= from && position <= to;
      return `<g opacity="${active ? 1 : 0.42}"><text x="${x}" y="92" text-anchor="middle" font-size="31">${icon}</text><circle cx="${x}" cy="116" r="6" fill="#17365d"/><text x="${x}" y="148" text-anchor="middle" font-size="15" font-weight="800" fill="#17365d">${position}</text></g>`;
    }).join("");
    const gaps = Array.from({ length: count - 1 }, (_, index) => {
      const left = start + index * step;
      const right = left + step;
      const active = index + 1 >= from && index + 2 <= to;
      return `<line x1="${left + 8}" y1="116" x2="${right - 8}" y2="116" stroke="${active ? "#397ee8" : "#b5c5d8"}" stroke-width="4"/><text x="${(left + right) / 2}" y="177" text-anchor="middle" font-size="14" font-weight="800" fill="#397ee8">${gap !== null && active ? `${gap}${unit}` : active ? local("1 khoảng", "1 interval") : ""}</text>`;
    }).join("");
    return wrap(local("Đếm đúng số khoảng giữa hai vị trí", "Count the intervals between the positions"), `<svg viewBox="0 0 ${width} 205" role="img" aria-label="${local("Sơ đồ các vị trí và khoảng cách", "Positions and intervals diagram")}">${gaps}${points}<text x="350" y="200" text-anchor="middle" font-size="17" font-weight="900" fill="#17365d">${local(`${to} − ${from} = ${to - from} khoảng`, `${to} − ${from} = ${to - from} intervals`)}</text></svg>`);
  };
  const cutDiagram = (pieces, total, unit = "cm") => wrap(local("Số lần cắt ít hơn số đoạn 1", "Cuts are one fewer than pieces"), `<svg viewBox="0 0 700 190" role="img" aria-label="${local("Dải được chia thành các đoạn bằng nhau", "Strip divided into equal pieces")}"><rect x="55" y="62" width="590" height="54" rx="12" fill="#ffd56a" stroke="#17365d" stroke-width="3"/>${Array.from({length:pieces-1},(_,i)=>{const x=55+(i+1)*590/pieces;return `<line x1="${x}" y1="48" x2="${x}" y2="130" stroke="#ff786c" stroke-width="4" stroke-dasharray="7 5"/>`;}).join("")}<text x="350" y="35" text-anchor="middle" font-size="18" font-weight="900" fill="#17365d">${total ? `${total} ${unit} ÷ ${pieces} = ${total / pieces} ${unit}` : local(`${pieces} đoạn cần ${pieces-1} lần cắt`,`${pieces} pieces need ${pieces-1} cuts`)}</text><text x="350" y="165" text-anchor="middle" font-size="18" font-weight="900" fill="#397ee8">${pieces} ${local("đoạn", "pieces")} · ${pieces-1} ${local("lần cắt", "cuts")}</text></svg>`);
  const chimeDiagram = (chimes, seconds) => wrap(local("Đếm khoảng giữa các tiếng chuông", "Count gaps between chimes"), `<div class="pattern-strip">${Array.from({length:chimes},(_,i)=>`<span>🔔 ${i+1}</span>${i<chimes-1?`<b>${seconds !== null ? `${seconds} s` : "?"}</b>`:""}`).join("")}</div>`);
  const staircaseDiagram = (flights, steps) => wrap(local("Mỗi tầng cao hơn tạo thêm một cầu thang", "Each higher floor adds one staircase"), `<div class="pattern-strip">${Array.from({length:flights},(_,i)=>`<span>${local("Tầng", "Floor")} ${i+1}→${i+2}</span>${i<flights-1?"<b>+</b>":""}`).join("")}</div><p class="exact-visual-note">${flights} × ${steps} = ${flights*steps} ${local("bậc", "steps")}</p>`);
  const stationDiagram = () => wrap(local("Bốn chặng đi và ba lần dừng", "Four travel legs and three waits"), `<div class="pattern-strip"><span>Ga 1</span><b>2 phút</b><span>Ga 2<br><small>+1 phút</small></span><b>2 phút</b><span>Ga 3<br><small>+1 phút</small></span><b>2 phút</b><span>Ga 4<br><small>+1 phút</small></span><b>2 phút</b><span>Ga 5</span></div>`);
  const carDiagram = (cars, carLength, connectorLength) => wrap(local("Số đoạn nối ít hơn số toa 1", "There is one fewer connector than cars"), `<div class="pattern-strip">${Array.from({length:cars},(_,i)=>`<span>🚃 ${carLength} m</span>${i<cars-1?`<b>${connectorLength} m</b>`:""}`).join("")}</div>`);

  const intervalSpecs = {
    "j1-interval-example-1": {count:5,icon:"│"}, "j1-interval-example-2": {count:6,icon:"×"},
    "j1-interval-example-4": {count:6,icon:"🌳",gap:4,unit:" m"}, "j1-interval-example-5": {count:8,icon:"🌳"},
    "j1-interval-1": {count:8,icon:"🌳"}, "j1-interval-2": {count:8,icon:"💡"},
    "j1-interval-3": {count:4,icon:"🌳",gap:3,unit:" m"}, "j1-interval-4": {count:5,icon:"💡",gap:5,from:1,to:4,unit:" m"},
    "j1-interval-5": {count:5,icon:"×",gap:20,unit:" cm"}, "j1-interval-6": {count:7,icon:"🌳",gap:3,from:2,to:6,unit:" m"},
    "j1-interval-7": {count:9,icon:"●",gap:10,unit:" cm"}, "j1-interval-extra-1": {count:10,icon:"🌼",gap:2,unit:" m"},
    "j1-interval-extra-4": {count:9,icon:"│",gap:4,from:3,to:9,unit:" m"},
  };
  Object.entries(intervalSpecs).forEach(([key, spec]) => { art[key] = () => pointLine(spec); });
  art["j1-interval-2"] = () => wrap(local("Mỗi khoảng giữa hai cột có đúng 2 cây", "Each interval between posts contains exactly 2 trees"), `<svg viewBox="0 0 760 210" role="img" aria-label="${local("Tám cột đèn tạo bảy khoảng, mỗi khoảng có hai cây", "Eight lamp posts make seven intervals with two trees each")}">${Array.from({length:8},(_,i)=>{const x=45+i*95;return `<text x="${x}" y="86" text-anchor="middle" font-size="30">💡</text><text x="${x}" y="174" text-anchor="middle" font-size="14" font-weight="800" fill="#17365d">${i+1}</text>`;}).join("")}${Array.from({length:7},(_,i)=>{const x=45+i*95;return `<line x1="${x+14}" y1="111" x2="${x+81}" y2="111" stroke="#397ee8" stroke-width="3"/><text x="${x+37}" y="105" text-anchor="middle" font-size="22">🌳</text><text x="${x+61}" y="105" text-anchor="middle" font-size="22">🌳</text>`;}).join("")}<text x="380" y="202" text-anchor="middle" font-size="18" font-weight="900" fill="#17365d">7 × 2 = 14 ${local("cây", "trees")}</text></svg>`);
  art["j1-interval-example-3"] = () => staircaseDiagram(3,12);
  art["j1-interval-8"] = () => cutDiagram(4,null);
  art["j1-interval-9"] = () => chimeDiagram(6,2);
  art["j1-interval-10"] = () => staircaseDiagram(4,10);
  art["j1-interval-11"] = stationDiagram;
  art["j1-interval-12"] = () => carDiagram(6,6,1);
  art["j1-interval-13"] = () => wrap(local("Tính cả chuyến đầu tiên", "Include the first coach"), `<div class="pattern-strip">${[0,10,20,30,40,50,60].map((minute,index)=>`<span>🚌 ${minute}'</span>${index<6?"<b>+10</b>":""}`).join("")}</div>`);
  art["j1-interval-14"] = () => cutDiagram(8,80);
  art["j1-interval-extra-2"] = () => cutDiagram(5,30);
  art["j1-interval-extra-3"] = () => chimeDiagram(8,2);
  art["j1-interval-extra-5"] = () => carDiagram(7,5,0.5);

  const additionBoard = (expression, working) => wrap(
    local("Ghép số theo từng bước", "Group the addends step by step"),
    `<div class="equation-board exact-addition-board"><div class="question-row">${expression}</div>${working.map((line, index) => `<div><b>${index + 1}</b><span>${line}</span></div>`).join("")}</div>`
  );
  const makeAdditionWorking = (expression, answer) => {
    const values = expression.split("+").map((value) => Number(value.trim()));
    let pair = null;
    for (let i = 0; i < values.length && !pair; i += 1) {
      for (let j = i + 1; j < values.length; j += 1) {
        const sum = values[i] + values[j];
        if (sum % 10 === 0 || sum % 100 === 0) { pair = [values[i], values[j], sum]; break; }
      }
    }
    return pair
      ? [`${pair[0]} + ${pair[1]} = ${pair[2]}`, `${expression} = ${answer}`]
      : [local("Tách hoặc làm tròn số gần chục", "Break apart or round numbers near a ten"), `${expression} = ${answer}`];
  };
  const chapterThreeSums = {
    "1a":["2 + 8 + 3 + 7",20],"1b":["5 + 4 + 6 + 5",20],"1c":["9 + 2 + 8 + 1",20],"1d":["14 + 16 + 21 + 29",80],
    "1e":["13 + 28 + 22 + 17",80],"1f":["15 + 37 + 23 + 25",100],"1g":["26 + 14 + 33 + 37",110],"1h":["18 + 19 + 22 + 11",70],
    "1i":["28 + 32 + 15 + 25",100],"1j":["32 + 22 + 28 + 10",92],"1k":["42 + 16 + 15 + 18",91],"1l":["18 + 13 + 22 + 28",81],
    "2a":["9 + 8 + 10",27],"2b":["7 + 8 + 9",24],"2c":["7 + 8 + 9 + 11",35],"2d":["10 + 19 + 17",46],"2e":["18 + 19 + 20",57],
    "2f":["9 + 19 + 39",67],"2g":["18 + 28 + 38",84],"2h":["16 + 17 + 18 + 19",70],"3a":["18 + 19 + 13",50],"3b":["17 + 18 + 15",50],
    "3c":["21 + 22 + 23 + 24",90],"3d":["19 + 17 + 14 + 21",71],"3e":["33 + 24 + 13 + 14",84],"3f":["28 + 23 + 9 + 22",82],
    "3g":["29 + 23 + 28 + 16",96],"3h":["27 + 4 + 29 + 35",95]
  };
  Object.entries(chapterThreeSums).forEach(([suffix,[expression,answer]]) => {
    art[`j1-add-${suffix}`] = () => additionBoard(expression, makeAdditionWorking(expression, answer));
  });
  const decomposition = {
    "4a":[7,[2,5]],"4b":[12,[5,7]],"4c":[18,[5,13]],"4d":[36,[7,29]],"4e":[42,[13,29]],"4f":[48,[19,29]],
    "5a":[10,[2,3,5]],"5b":[23,[3,7,13]],"5c":[38,[2,7,29]],"5d":[37,[3,5,29]],"5e":[41,[5,7,29]],"5f":[49,[3,17,29]]
  };
  Object.entries(decomposition).forEach(([suffix,[target,parts]]) => {
    art[`j1-add-${suffix}`] = () => wrap(local("Chọn số đúng trong danh sách", "Choose numbers from the list"), `<div class="pattern-strip">${[2,3,5,7,11,13,17,19,23,29].map((number)=>`<span class="${parts.includes(number)?"selected-number":""}">${number}</span>`).join("")}</div><p class="exact-visual-note">${parts.join(" + ")} = ${target}</p>`);
  });
  const columnAddition = {
    "6a":["□3 + 3□ = 58","23 + 35 = 58"],"6b":["2□ + □5 = 72","27 + 45 = 72"],"6c":["1□ + □1 = 39","18 + 21 = 39"],"6d":["□1 + 1□ = 45","31 + 14 = 45"],
    "6e":["□4 + 4□ = 68","24 + 44 = 68"],"6f":["2□ + □5 = 62","27 + 35 = 62"],"6g":["5□ + □3 = □20","57 + 63 = 120"],"6h":["8□ + □9 = □31","82 + 49 = 131"]
  };
  Object.entries(columnAddition).forEach(([suffix,[before,after]]) => { art[`j1-add-${suffix}`] = () => additionBoard(before,[after]); });
  art["j1-add-example-1"] = () => additionBoard("3 + 5 + 7",["3 + 7 = 10","10 + 5 = 15"]);
  art["j1-add-example-2"] = () => additionBoard("35 + 15 + 65",["35 + 65 = 100","100 + 15 = 115"]);
  art["j1-add-example-3"] = () => additionBoard("17 + 18 + 19",["(20 − 3) + (20 − 2) + (20 − 1)","60 − 6 = 54"]);
  art["j1-add-example-4"] = () => additionBoard("9 + 99 + 999",["10 + 100 + 1000 − 3","1110 − 3 = 1107"]);
  art["j1-add-example-5"] = () => additionBoard("18",["5 + 13 = 18","7 + 11 = 18"]);
  art["j1-add-extra-1"] = () => additionBoard("6 + 14 + 9 + 11",["6 + 14 = 20","9 + 11 = 20","20 + 20 = 40"]);
  art["j1-add-extra-2"] = () => additionBoard("27 + 73 + 15",["27 + 73 = 100","100 + 15 = 115"]);
  art["j1-add-extra-3"] = () => additionBoard("29 + 39 + 49",["30 + 40 + 50 − 3","120 − 3 = 117"]);
  art["j1-add-extra-4"] = () => additionBoard("34",["5 + 29 = 34"]);
  art["j1-add-extra-5"] = () => additionBoard("4□ + □7 = 92",["5 + 7 = 12","45 + 47 = 92"]);

  const balanceRelation = (left, right, conclusion) => wrap(
    local("Thay đúng nhóm tương đương trên cân", "Replace equal groups on the balance"),
    `<div class="replacement-balance"><div class="balance-relation"><span>${left}</span><b>⚖️</b><span>${right}</span></div>${conclusion ? `<div class="replacement-result">${conclusion}</div>` : ""}</div>`
  );
  art["j1-replace-example-1"] = () => balanceRelation("🍐", "🥝🥝", "🍐 = 🍓🍓🍓🍓🍓🍓🍓🍓");
  art["j1-replace-example-2"] = () => balanceRelation("🐱", "🐇🐇", "🐱🐱🐱 = 🐥🐥🐥🐥🐥🐥🐥🐥");
  art["j1-replace-example-3"] = () => additionBoard("△ + ○ = 13; △ − ○ = 3",["2△ = 16","△ = 8; ○ = 5"]);
  art["j1-replace-example-4"] = () => additionBoard("□ + ○ = 15",["2(□ + ○) + ○ = 35","30 + ○ = 35","○ = 5; □ = 10"]);
  art["j1-replace-1"] = () => balanceRelation("🐔", "🐿️🐿️", "🐔 = 2 × 10 = 20 🥚");
  art["j1-replace-2"] = () => balanceRelation("🦢", "🦆🦆", "🦢 = 2 × 5 = 10 🐥");
  art["j1-replace-10"] = () => balanceRelation("🍍", "🍊🍊🍊", "🍍 = 3 × 3 ÷ 2 = 4½ 🍎");
  art["j1-replace-11"] = () => balanceRelation("🍐🍐", "🍎🍎🍎", "🍐🍐 = 3 × 3 = 9 🍓");
  art["j1-replace-12"] = () => balanceRelation("🍉", "16 × 🍎", "🍉 = 8 × 3 = 24 apricots");
  const replacementEquations = {
    "3":["○ + □ = 14; ○ − □ = 6","○ = 10; □ = 4"],"4":["□ + △ = 15; △ − □ = 7","△ = 11; □ = 4"],
    "5":["✳ − □ = 22; ✳ + □ = 30","✳ = 26; □ = 4"],"6":["❖ + ✳ + ❖ = 15; ✳ + ❖ = 11","❖ = 4; ✳ = 7"],
    "7":["3○ + ✳ = 22; ○ + ✳ = 12","○ = 5; ✳ = 7"],"8":["❖ + 2✳ = 14; 3❖ + 2✳ = 18","❖ = 2; ✳ = 6"],
    "9":["□ + 2○ = 14; □ + 4○ = 24","□ = 4; ○ = 5"],"13":["✳ + ❖ = 22; 2✳ + 3❖ = 58","✳ = 8; ❖ = 14"],
    "14":["✳ + ○ = 25; 3✳ + 2○ = 65","✳ = 15; ○ = 10"],"15":["❖ + ○ = 9; ○ + □ = 12; □ + ❖ = 11","❖ = 4; □ = 7; ○ = 5"],
    "16":["❖ + 4△ = 33; 2❖ = 3△","❖ = 9; △ = 6"],"17":["○ × ✳ = 24; ○ + ✳ = 11; ○ + ✳ + △ = 17","△ = 6"],
    "18":["◇ × ○ = ❖; 3◇ = ❖ − ◇","○ = 4"],"19":["✳○ = 24; ○□ = 40; □❖ = 45; ✳□ = 15","✳ = 3; ○ = 8; ❖ = 9; □ = 5"],
    "20":["◇○ = 30; ✳◇ = 12; ✳○ = 10","✳ = 2; ◇ = 6; ○ = 5"]
  };
  Object.entries(replacementEquations).forEach(([number,[relations,result]]) => { art[`j1-replace-${number}`] = () => additionBoard(relations,[result]); });
  art["j1-replace-extra-1"] = () => balanceRelation("🐻", "🐇🐇🐇", "🐻 = 3 × 2 = 6 🥕");
  art["j1-replace-extra-4"] = () => balanceRelation("🍐🍐", "6 plums", "🍐🍐🍐 = 9 plums");
  [["2","○ + □ = 18; ○ − □ = 4","○ = 11; □ = 7"],["3","2△ + ○ = 19; △ + ○ = 12","△ = 7; ○ = 5"],["5","□ × ○ = 18; □ + ○ = 9","□ = 3; ○ = 6"]].forEach(([number,relations,result])=>{ art[`j1-replace-extra-${number}`]=()=>additionBoard(relations,[result]); });

  const balanceQuestion = (rows, target) => wrap(
    local("Các quan hệ cân bằng trong đề", "Balance relations in the question"),
    `<div class="question-balance-list">${rows.map(([left, right]) => `<div class="question-balance-row"><div class="question-balance-pan">${left}</div><div class="question-balance-center" aria-hidden="true"><i></i><b>△</b></div><div class="question-balance-pan">${right}</div></div>`).join("")}<div class="question-balance-target"><span>${local("Cần tìm", "Find")}</span><strong>${target}</strong></div></div>`,
  );

  const balanceQuestions = {
    "1": [["🐔", "🐿️ 🐿️"], ["🐿️", "10 × 🥚"], "🐔 = ? × 🥚"],
    "2": [["🐥 🐥 🐥 🐥 🐥", "🦆"], ["🦢", "🦆 🦆"], "🦢 = ? × 🐥"],
    "3": [["○ + □", "14"], ["○ − □", "6"], "○ = ? &nbsp; · &nbsp; □ = ?"],
    "4": [["□ + △", "15"], ["△ − □", "7"], "△ = ? &nbsp; · &nbsp; □ = ?"],
    "5": [["✳ − □", "22"], ["✳ + □", "30"], "✳ = ? &nbsp; · &nbsp; □ = ?"],
    "6": [["❖ + ✳ + ❖", "15"], ["✳ + ❖", "11"], "❖ = ? &nbsp; · &nbsp; ✳ = ?"],
    "7": [["○ + ○ + ○ + ✳", "22"], ["○ + ✳", "12"], "○ = ? &nbsp; · &nbsp; ✳ = ?"],
    "8": [["❖ + ✳ + ✳", "14"], ["❖ + ❖ + ❖ + ✳ + ✳", "18"], "❖ = ? &nbsp; · &nbsp; ✳ = ?"],
    "9": [["□ + ○ + ○", "14"], ["□ + ○ + ○ + ○ + ○", "24"], "□ = ? &nbsp; · &nbsp; ○ = ?"],
    "10": [["🍍", "🍊 🍊 🍊"], ["🍊 🍊", "🍎 🍎 🍎"], "🍍 = ? × 🍎"],
    "11": [["🍎 🍎", "6 × 🍓"], ["🍐 🍐", "🍎 🍎 🍎"], "🍐 🍐 = ? × 🍓"],
    "12": [["🍉", "16 × 🍎"], ["🍎 🍎", "3 × quả mơ"], "🍉 = ? × quả mơ"],
    "13": [["✳ + ❖", "22"], ["✳ + ✳ + ❖ + ❖ + ❖", "58"], "✳ = ? &nbsp; · &nbsp; ❖ = ?"],
    "14": [["✳ + ○", "25"], ["✳ + ✳ + ✳ + ○ + ○", "65"], "✳ = ? &nbsp; · &nbsp; ○ = ?"],
    "15": [["❖ + ○", "9"], ["○ + □", "12"], ["□ + ❖", "11"], "❖ = ? &nbsp; · &nbsp; □ = ? &nbsp; · &nbsp; ○ = ?"],
    "16": [["❖ + △ + △ + △ + △", "33"], ["❖ + ❖", "△ + △ + △"], "❖ = ? &nbsp; · &nbsp; △ = ?"],
    "17": [["○ × ✳", "24"], ["○ + ✳", "11"], ["○ + ✳ + △", "17"], "△ = ?"],
    "18": [["◇ × ○", "❖"], ["◇ + ◇ + ◇", "❖ − ◇"], "○ = ?"],
    "19": [["✳ × ○", "24"], ["○ × □", "40"], ["□ × ❖", "45"], ["✳ × □", "15"], "✳ = ? &nbsp; · &nbsp; ○ = ? &nbsp; · &nbsp; ❖ = ? &nbsp; · &nbsp; □ = ?"],
    "20": [["◇ × ○", "30"], ["✳ × ◇", "12"], ["✳ × ○", "10"], "✳ = ? &nbsp; · &nbsp; ◇ = ? &nbsp; · &nbsp; ○ = ?"],
  };
  Object.entries(balanceQuestions).forEach(([number, data]) => {
    const target = data[data.length - 1];
    art[`j1-replace-${number}`] = () => balanceQuestion(data.slice(0, -1), target);
  });
  art["j1-replace-extra-1"] = () => balanceQuestion([["🐻", "🐇 🐇 🐇"], ["🐇", "🥕 🥕"]], "🐻 = ? × 🥕");
  art["j1-replace-extra-2"] = () => balanceQuestion([["○ + □", "18"], ["○ − □", "4"]], "○ = ? &nbsp; · &nbsp; □ = ?");
  art["j1-replace-extra-3"] = () => balanceQuestion([["△ + △ + ○", "19"], ["△ + ○", "12"]], "△ = ? &nbsp; · &nbsp; ○ = ?");
  art["j1-replace-extra-4"] = () => balanceQuestion([["🍐 🍐", "6 × quả mận"]], "🍐 🍐 🍐 = ? × quả mận");
  art["j1-replace-extra-5"] = () => balanceQuestion([["□ × ○", "18"], ["□ + ○", "9"]], "□ = ? &nbsp; · &nbsp; ○ = ?");

  const ageQuestion = (people, timeNote, target, totalNote = "") => wrap(
    local("Sơ đồ tuổi theo thời gian", "Age timeline"),
    `<div class="age-question-board">${people.map(({icon,name,age,after}) => `<div class="age-person-row"><span class="age-person-name"><b>${icon}</b>${name}</span><span class="age-now"><small>${local("Hiện nay", "Now")}</small><strong>${age}</strong></span>${after !== undefined ? `<i>→</i><span class="age-after"><small>${timeNote}</small><strong>${after}</strong></span>` : ""}</div>`).join("")}${totalNote ? `<div class="age-total-note">${totalNote}</div>` : ""}<div class="age-target"><span>${local("Cần tìm", "Find")}</span><strong>${target}</strong></div></div>`,
  );
  const person = (icon, vi, en, age, after) => ({icon,name:local(vi,en),age,after});

  art["j1-age-example-1"] = () => ageQuestion([person("👧","Amanda","Amanda","7","7 + 4"),person("👨","Bố","Father","36","36 + 4")],local("Sau 4 năm","In 4 years"),local("Bố hơn Amanda bao nhiêu tuổi?","How much older is Father?"));
  art["j1-age-example-2"] = () => ageQuestion([person("👧","Natalie","Natalie","8","8 + 5"),person("👨","Ông Jensen","Mr Jensen","45","45 + 5")],local("Sau 5 năm","In 5 years"),local("Hiệu số tuổi = ?","Age difference = ?"));
  art["j1-age-example-3"] = () => ageQuestion([person("🧒","Andrew","Andrew","8"),person("👩","Mẹ","Mother","32")],"",local("32 gấp mấy lần 8?","How many times is 32 compared with 8?"));
  art["j1-age-example-4"] = () => ageQuestion([person("👧","Paula","Paula","6","10"),person("👨","Bố","Father","?","40")],local("Sau cùng một số năm","After the same number of years"),local("Tuổi bố hiện nay = ?","Father's age now = ?"));
  art["j1-age-example-5"] = () => ageQuestion([person("🧒","Edward","Edward","8","?"),person("👩","Mẹ","Mother","32","3 × ?")],local("Sau ? năm","After ? years"),local("Bao nhiêu năm để tuổi mẹ gấp 3 lần?","How many years until Mother is 3 times as old?"));

  const ageQuestions = {
    "1": () => ageQuestion([person("👩","Mẹ","Mother","?","? − 5"),person("👵","Bà","Grandmother","? + 25","? + 20")],local("5 năm trước","5 years ago"),local("Hiệu số tuổi 5 năm trước = ?","Age difference 5 years ago = ?")),
    "2": () => ageQuestion([person("👧","Chloe","Chloe","4","4 + 8"),person("👨","Bố","Father","36","36 + 8")],local("Sau 8 năm","In 8 years"),local("Hiệu số tuổi = ?","Age difference = ?")),
    "3": () => ageQuestion([person("👨","Bố","Father","35","35 + 12"),person("👴","Ông","Grandfather","62","62 + 12")],local("Sau 12 năm","In 12 years"),local("Tuổi của mỗi người = ?","Each future age = ?")),
    "4": () => ageQuestion([person("🧒","Tom","Tom","6","6 + 10"),person("👦","Anh trai","Brother","11","11 + 10")],local("Sau 10 năm","In 10 years"),local("Hiệu số tuổi hiện nay và sau 10 năm = ?","Age difference now and in 10 years = ?")),
    "5": () => ageQuestion([person("👧","Em gái","Sister","22 ÷ 2"),person("👩","Valerie","Valerie","22"),person("👨","Bố","Father","?")],"",local("Tuổi bố = ?","Father's age = ?"),local("Tổng tuổi: 85","Total age: 85")),
    "6": () => ageQuestion([person("👵","Bà","Granny","56","56 + ?"),person("👩","Mẹ","Mother","31","31 + ?"),person("🧒","Em","Me","7","7 + ?")],local("Sau ? năm","After ? years"),local("Bao nhiêu năm?","How many years?"),local("Tổng tương lai: 100","Future total: 100")),
    "7": () => ageQuestion([person("🧒","Wilfred","Wilfred","4"),person("👨","Bố","Father","7 × 4")],"",local("Tuổi bố = ?","Father's age = ?")),
    "8": () => ageQuestion([person("🧒","Teddy","Teddy","5","?"),person("👨","Bố","Father","7 × 5","40")],local("Sau cùng một số năm","After the same number of years"),local("Tuổi Teddy khi bố 40 = ?","Teddy's age when Father is 40 = ?")),
    "9": () => ageQuestion([person("👩","Mẹ","Mother","36","36 + ?"),person("👨","Bố","Father","42","42 + ?"),person("👧","Julia","Julia","7","7 + ?")],local("Sau ? năm","After ? years"),local("Bao nhiêu năm?","How many years?"),local("Tổng tương lai: 100","Future total: 100")),
    "10": () => ageQuestion([person("👧","Phyllis","Phyllis","5","?"),person("👨","Bố","Father","40","6 × ?")],local("Sau ? năm","After ? years"),local("Bao nhiêu năm để tuổi bố gấp 6 lần?","How many years until Father is 6 times as old?")),
    "11": () => ageQuestion([person("👧","Anna","Anna","5","?"),person("👩","Mẹ","Mother","33","5 × ?")],local("Sau ? năm","After ? years"),local("Bao nhiêu năm để tuổi mẹ gấp 5 lần?","How many years until Mother is 5 times as old?")),
    "12": () => ageQuestion([person("👧","Wendy","Wendy","6","6 + 9"),person("👧","Chị gái","Sister","?","? + 9")],local("Sau 9 năm","In 9 years"),local("Tuổi chị hiện nay = ?","Sister's age now = ?"),local("Tổng sau 9 năm: 40","Total in 9 years: 40")),
    "13": () => ageQuestion([person("👩","Bà Gibson","Mrs Gibson","?","? + 5"),person("👨","Ông Gibson","Mr Gibson","? + 5","? + 10")],local("Sau 5 năm","In 5 years"),local("Tuổi hiện nay của mỗi người = ?","Each present age = ?"),local("Tổng sau 5 năm: 95","Total in 5 years: 95")),
    "14": () => ageQuestion([person("👩","Bà Woody","Mrs Woody","38","38 + ?"),person("👨","Ông Woody","Mr Woody","38 + 4","42 + ?"),person("🧒","Jim","Jim","8","8 + ?")],local("Sau ? năm","After ? years"),local("Bao nhiêu năm?","How many years?"),local("Tổng tương lai: 100","Future total: 100")),
  };
  Object.entries(ageQuestions).forEach(([number, draw]) => { art[`j1-age-${number}`] = draw; });
  art["j1-age-extra-1"] = () => ageQuestion([person("👧","Mai","Mai","9","9 + 6"),person("👦","Anh trai","Brother","14","14 + 6")],local("Sau 6 năm","In 6 years"),local("Hiệu số tuổi = ?","Age difference = ?"));
  art["j1-age-extra-2"] = () => ageQuestion([person("👧","An","An","6"),person("👩","Mẹ","Mother","30")],"",local("30 gấp mấy lần 6?","How many times is 30 compared with 6?"));
  art["j1-age-extra-3"] = () => ageQuestion([person("🧒","Con","Son","10","?"),person("👨","Bố","Father","34","3 × ?")],local("Sau ? năm","After ? years"),local("Bao nhiêu năm?","How many years?"));
  art["j1-age-extra-4"] = () => ageQuestion([person("🧒","Bạn 1","Child 1","6","6 + ?"),person("🧒","Bạn 2","Child 2","8","8 + ?"),person("🧒","Bạn 3","Child 3","10","10 + ?")],local("Sau ? năm","After ? years"),local("Bao nhiêu năm?","How many years?"),local("Tổng tương lai: 36","Future total: 36"));
  art["j1-age-extra-5"] = () => ageQuestion([person("👧","Con","Daughter","?"),person("👩","Mẹ","Mother","? + 26")],"",local("Tuổi mỗi người = ?","Each age = ?"),local("Tổng tuổi: 50","Total age: 50"));

  const divisionQuestion = (dividend, divisor, fields = ["?", "?"]) => wrap(
    local("Sơ đồ phép chia", "Division diagram"),
    `<div class="division-question-board"><div class="division-equation"><strong>${dividend}</strong><span>÷</span><strong>${divisor}</strong><span>=</span><b>${fields[0]}</b><small>${local("thương", "quotient")}</small><span class="division-r">R</span><b>${fields[1]}</b><small>${local("số dư", "remainder")}</small></div><div class="division-check">${dividend} = ${divisor} × ? + ?</div></div>`,
  );
  const cycleQuestion = (items, target, label) => wrap(
    local("Một chu kỳ được lặp lại", "One repeating cycle"),
    `<div class="cycle-question-board"><div class="cycle-items">${items.map((item,i)=>`<span style="--cycle-i:${i}">${item}</span>`).join("")}<i>↻</i></div><div class="cycle-target"><span>${label}</span><strong>${target}</strong></div></div>`,
  );
  const calendarQuestion = (fromDate, fromDay, toDate) => wrap(
    local("Dòng thời gian theo tuần", "Weekly timeline"),
    `<div class="calendar-question-board"><div class="calendar-anchor"><span>${fromDate}</span><strong>${fromDay}</strong></div><div class="calendar-weeks"><i>+7</i><i>+7</i><i>+7</i><b>…</b></div><div class="calendar-target"><span>${toDate}</span><strong>?</strong></div></div>`,
  );
  const remainderQuestion = (divisors, remainder) => wrap(
    local("Hai điều kiện về số dư", "Two remainder conditions"),
    `<div class="remainder-question-board"><div class="mystery-number">?</div>${divisors.map(divisor=>`<div class="remainder-rule"><span>÷ ${divisor}</span><b>${local("dư", "R")} ${remainder}</b></div>`).join("")}<div class="remainder-target">${local("Số có 2 chữ số", "2-digit number")}</div></div>`,
  );

  art["j1-div-example-1"] = () => divisionQuestion("48", "9");
  art["j1-div-example-2"] = () => divisionQuestion("25", "?", ["?", "1"]);
  art["j1-div-example-3"] = () => wrap(local("Thương bằng số dư", "Quotient equals remainder"), `<div class="equal-remainder-board"><span>? ÷ 5</span><b>=</b><em>□</em><strong>${local("dư", "R")}</strong><em>□</em><i>=</i><small>${local("hai ô có cùng số", "same number in both boxes")}</small></div>`);
  art["j1-div-example-4"] = () => cycleQuestion(["○","○","●","●","●"], local("Hạt 24 và 32", "24th and 32nd beads"), local("Cần tìm", "Find"));
  art["j1-div-example-5"] = () => calendarQuestion(local("1 tháng 3", "March 1"), local("Chủ nhật", "Sunday"), local("25 tháng 3", "March 25"));

  const divisionQuestionValues = {
    "1a":[36,7],"1b":[45,6],"1c":[51,7],"1d":[28,5],"1e":[47,9],"1f":[66,8],"1g":[88,9],"1h":[45,7],
    "2a":[26,6],"2b":[39,6],"2c":[47,9],"2d":[58,9],"2e":[68,9],"2f":[78,9],
    "3a":[31,6],"3b":[50,7],"3c":[57,8],"3d":[64,9],
    "4a":[17,3],"4b":[39,5],"4c":[27,4],"4d":[35,6],"4e":[47,6],"4f":[62,7],
  };
  Object.entries(divisionQuestionValues).forEach(([number,[dividend,divisor]]) => { art[`j1-div-${number}`] = () => divisionQuestion(dividend, divisor); });
  [["5a",29],["5b",31],["5c",41],["5d",44],["5e",39],["5f",59]].forEach(([number,dividend])=>{ art[`j1-div-${number}`]=()=>divisionQuestion(dividend,"?"); });
  [["6a",1],["6b",2],["6c",3],["6d",4],["6e",5]].forEach(([number,value])=>{ art[`j1-div-${number}`]=()=>wrap(local("Thương bằng số dư", "Quotient equals remainder"),`<div class="division-given"><div><small>${local("Số chia", "Divisor")}</small><b>6</b></div><span>×</span><div><small>${local("Thương", "Quotient")}</small><b>${value}</b></div><span>+</span><div><small>${local("Số dư", "Remainder")}</small><b>${value}</b></div><span>=</span><div class="unknown"><small>${local("Số bị chia", "Dividend")}</small><b>?</b></div></div>`); });
  art["j1-div-7a"] = () => cycleQuestion(["○","●","●"], local("Hạt thứ 23", "23rd bead"), local("Cần tìm", "Find"));
  art["j1-div-7b"] = () => cycleQuestion(["○","●","●"], local("Hạt thứ 31", "31st bead"), local("Cần tìm", "Find"));
  art["j1-div-8a"] = () => cycleQuestion(["○","○","■","■","■"], local("Hình thứ 26", "26th shape"), local("Cần tìm", "Find"));
  art["j1-div-8b"] = () => cycleQuestion(["○","○","■","■","■"], local("Hình thứ 33", "33rd shape"), local("Cần tìm", "Find"));
  art["j1-div-9"] = () => cycleQuestion(["👧 Charmaine","👧 Shola","👧 Amy"], local("Thẻ thứ 34", "34th card"), local("Ai nhận?", "Who receives it?"));
  art["j1-div-10"] = () => cycleQuestion(["Jolene × 1","Anna × 2","Jim × 1"], local("Viên bi thứ 54", "54th marble"), local("Ai nhận?", "Who receives it?"));
  art["j1-div-11a"] = () => cycleQuestion(["1","3","2","4"], local("Số thứ 27", "27th number"), local("Cần tìm", "Find"));
  art["j1-div-11b"] = () => cycleQuestion(["1","3","2","4"], local("Số thứ 42", "42nd number"), local("Cần tìm", "Find"));
  art["j1-div-12a"] = () => cycleQuestion(["🏮 đỏ","🏮 đỏ","🏮 đỏ","🏮 cam","🏮 cam","🏮 hồng"], local("Đèn thứ 38", "38th lantern"), local("Cần tìm", "Find"));
  art["j1-div-12b"] = () => cycleQuestion(["🏮 đỏ","🏮 đỏ","🏮 đỏ","🏮 cam","🏮 cam","🏮 hồng"], local("Đèn thứ 58", "58th lantern"), local("Cần tìm", "Find"));
  art["j1-div-13"] = () => calendarQuestion(local("1 tháng 5", "May 1"), local("Thứ Tư", "Wednesday"), local("23 tháng 5", "May 23"));
  art["j1-div-14"] = () => calendarQuestion(local("20 tháng 3", "March 20"), local("Chủ nhật", "Sunday"), local("11 tháng 4", "April 11"));
  art["j1-div-15"] = () => remainderQuestion([3,5],1);
  art["j1-div-16"] = () => remainderQuestion([4,5],2);
  art["j1-div-extra-1"] = () => divisionQuestion(29,6);
  art["j1-div-extra-2"] = () => cycleQuestion(["▲","●","●"],local("Hình thứ 20", "20th shape"),local("Cần tìm", "Find"));
  art["j1-div-extra-3"] = () => calendarQuestion(local("2 tháng 6", "June 2"),local("Thứ Hai", "Monday"),local("24 tháng 6", "June 24"));
  art["j1-div-extra-4"] = () => remainderQuestion([4,5],3);
  art["j1-div-extra-5"] = () => cycleQuestion(["A","B","C","D"],local("Thẻ thứ 73", "73rd card"),local("Ai nhận?", "Who receives it?"));

  const mixedTotalQuestion = (first, second, count, total, unitLabel) => wrap(
    local("Hai loại trong cùng một tổng", "Two types in one total"),
    `<div class="mixed-total-board"><div class="mixed-types"><div><b>${first.icon}</b><strong>${first.name}</strong><span>${first.unit} ${unitLabel}</span></div><i>+</i><div><b>${second.icon}</b><strong>${second.name}</strong><span>${second.unit} ${unitLabel}</span></div></div><div class="mixed-givens"><span><small>${local("Tổng số", "Total items")}</small><b>${count}</b></span><span><small>${local("Tổng cộng", "Grand total")}</small><b>${total} ${unitLabel}</b></span></div><div class="mixed-target">${first.name} = ? &nbsp; · &nbsp; ${second.name} = ?</div></div>`,
  );
  const kind = (icon, vi, en, unit) => ({icon,name:local(vi,en),unit});
  const mixVisuals = {
    "example-1":[kind("🐔","Gà","Chicken",2),kind("🐇","Thỏ","Rabbit",4),4,10,local("chân","legs")],
    "example-2":[kind("🕷️","Nhện","Spider",8),kind("🪰","Chuồn chuồn","Dragonfly",6),6,40,local("chân","legs")],
    "example-3":[kind("🖊️","Bút mực","Pen",4),kind("✏️","Bút chì","Pencil",2),6,"$20",local("mỗi món","each")],
    "example-4":[kind("🐔","Gà","Chicken",2),kind("🐇","Thỏ","Rabbit",4),11,30,local("chân","legs")],
    "example-5":[kind("✉️","Tem $5","$5 stamp",5),kind("✉️","Tem $2","$2 stamp",2),12,"$45",local("mỗi tem","each")],
    "1":[kind("🚗","Ô tô","Car",4),kind("🏍️","Xe máy","Motorcycle",2),8,26,local("bánh","wheels")],
    "2":[kind("🎟️","Vé người lớn","Adult ticket",8),kind("🎫","Vé trẻ em","Child ticket",5),5,"$31",local("mỗi vé","each")],
    "3":[kind("📘","Sách KHVT","Science fiction",5),kind("📗","Sách phiêu lưu","Adventure",3),6,"$26",local("mỗi quyển","each")],
    "4":[kind("🛺","Xe ba bánh","Tricycle",3),kind("🚲","Xe đạp","Bicycle",2),8,22,local("bánh","wheels")],
    "5":[kind("🐔","Gà","Chicken",2),kind("🐇","Thỏ","Rabbit",4),12,34,local("chân","legs")],
    "6":[kind("🐔","Gà","Chicken",2),kind("🐇","Thỏ","Rabbit",4),17,52,local("chân","legs")],
    "7":[kind("📦","Hộp lớn","Big box",12),kind("▫️","Hộp nhỏ","Small box",6),10,84,local("viên bi","marbles")],
    "8":[kind("🕷️","Nhện","Spider",8),kind("🪰","Chuồn chuồn","Dragonfly",6),10,68,local("chân","legs")],
    "9":[kind("✉️","Tem $2","$2 stamp",2),kind("✉️","Tem $1","$1 stamp",1),11,"$16",local("mỗi tem","each")],
    "10":[kind("🚚","Xe tải","Truck",6),kind("🚗","Ô tô","Car",4),14,72,local("bánh","wheels")],
    "extra-1":[kind("🐔","Gà","Chicken",2),kind("🐇","Thỏ","Rabbit",4),5,14,local("chân","legs")],
    "extra-2":[kind("💳","Thẻ $3","$3 card",3),kind("💳","Thẻ $1","$1 card",1),6,"$14",local("mỗi thẻ","each")],
    "extra-3":[kind("🛺","Xe ba bánh","Tricycle",3),kind("🚲","Xe đạp","Bicycle",2),9,23,local("bánh","wheels")],
    "extra-4":[kind("🎟️","Vé người lớn","Adult ticket",8),kind("🎫","Vé trẻ em","Child ticket",5),10,"$62",local("mỗi vé","each")],
    "extra-5":[kind("⭐","Câu 5 điểm","5-point",5),kind("🔹","Câu 2 điểm","2-point",2),20,64,local("điểm","points")],
  };
  Object.entries(mixVisuals).forEach(([number,args])=>{ art[`j1-mix-${number}`]=()=>mixedTotalQuestion(...args); });
})();
