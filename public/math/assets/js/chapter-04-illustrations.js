(function registerChapterFourIllustrations() {
  "use strict";
  const art = window.BOOK_ILLUSTRATIONS = window.BOOK_ILLUSTRATIONS || {};
  const isVi = () => document.documentElement.lang !== "en";
  const local = (vi, en) => isVi() ? vi : en;
  const text = (x, y, value, size = 20, anchor = "middle") =>
    `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" font-weight="800" fill="#17345d">${value}</text>`;
  const figure = (body, label, caption) =>
    `<figure class="visual book-diagram"><svg viewBox="0 0 760 300" role="img" aria-label="${label}">${body}</svg>${caption ? `<figcaption>${caption}</figcaption>` : ""}</figure>`;

  art["interval-4-1"] = () => {
    const sticks = Array.from({ length: 5 }, (_, index) => {
      const x = 120 + index * 130;
      const gap = index < 4
        ? `<line x1="${x + 14}" y1="205" x2="${x + 116}" y2="205" stroke="#397ee8" stroke-width="3"/><path d="M${x + 14} 205l12-7v14zM${x + 116} 205l-12-7v14z" fill="#397ee8"/>${text(x + 65, 192, "10 cm", 16)}`
        : "";
      return `<rect x="${x - 7}" y="70" width="14" height="115" rx="7" fill="#ffbd4a" stroke="#17345d" stroke-width="3"/>${text(x, 55, index + 1, 17)}${gap}`;
    }).join("");
    return figure(sticks, local("Năm que diêm đặt cách đều nhau 10 xăng-ti-mét", "Five matchsticks placed 10 centimetres apart"));
  };

  art["interval-4-5"] = () => {
    const corners = [[380,38],[120,222],[640,222]];
    const edge = (from, to) => Array.from({length:6},(_,index)=>[from[0]+(to[0]-from[0])*index/5,from[1]+(to[1]-from[1])*index/5]);
    const points = [...new Map([...edge(corners[0],corners[1]),...edge(corners[1],corners[2]),...edge(corners[2],corners[0])].map(([x,y])=>[`${x.toFixed(2)}-${y.toFixed(2)}`,[x,y]])).values()];
    return figure(`<polygon points="380,38 120,222 640,222" fill="none" stroke="#9bb4d2" stroke-width="3"/>${points.map(([x,y]) => `<circle cx="${x}" cy="${y}" r="17" fill="#ffcf66" stroke="#17345d" stroke-width="3"/>`).join("")}${text(380,278,local("6 đồng xu trên mỗi cạnh","6 coins on each side"),18)}`, local("Các đồng xu xếp quanh ba cạnh tam giác", "Coins arranged around the three sides of a triangle"));
  };

  art["interval-4-10"] = () => {
    const bells = Array.from({ length: 6 }, (_, index) => {
      const x = 90 + index * 116;
      return `${text(x, 120, "🔔", 38)}${text(x, 165, index + 1, 17)}${index < 5 ? `<line x1="${x + 30}" y1="105" x2="${x + 86}" y2="105" stroke="#397ee8" stroke-width="4" stroke-dasharray="7 7"/>` : ""}`;
    }).join("");
    return figure(`${bells}${text(380,235,local("Từ tiếng chuông thứ nhất đến tiếng chuông thứ sáu","From the first chime to the sixth chime"),20)}`, local("Sáu tiếng chuông theo thứ tự", "Six chimes in order"));
  };

  const squareBorder = (symbol, countPerSide, label) => {
    const start = 185, end = 575, top = 45, bottom = 245;
    const positions = [];
    for (let index = 0; index < countPerSide; index += 1) {
      const t = index / (countPerSide - 1);
      positions.push([start + (end - start) * t, top]);
      positions.push([end, top + (bottom - top) * t]);
      positions.push([end - (end - start) * t, bottom]);
      positions.push([start, bottom - (bottom - top) * t]);
    }
    const unique = [...new Map(positions.map(([x,y]) => [`${x.toFixed(2)}-${y.toFixed(2)}`, [x,y]])).values()];
    return figure(`<rect x="${start}" y="${top}" width="${end-start}" height="${bottom-top}" rx="4" fill="#f8fcff" stroke="#17345d" stroke-width="4"/>${unique.map(([x,y]) => text(x, y + 8, symbol, 22)).join("")}${text(380,152,label,20)}`, local("Các vật đặt đều quanh bốn cạnh hình vuông", "Objects equally spaced around a square"));
  };

  art["interval-4-12"] = () => squareBorder("⚑", 16, local("16 lá cờ trên mỗi cạnh", "16 flags on each side"));
  art["interval-4-13"] = () => squareBorder("●", 9, local("Cạnh 24 m · mỗi khoảng 3 m", "Side 24 m · each gap 3 m"));
})();
