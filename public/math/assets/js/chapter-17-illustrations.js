(function registerChapter17Illustrations() {
  "use strict";
  const art = window.PILOT_ILLUSTRATIONS = window.PILOT_ILLUSTRATIONS || {};
  const isVi = () => document.documentElement.lang !== "en";
  const local = (vi, en) => isVi() ? vi : en;
  const encounterOne = () => {
    // The meeting point divides the travelled route in the exact speed ratio 65:75.
    const meetX = 448;
    const home = `<g aria-label="${local("Nhà", "Home")}"><path d="M64 190V135L108 98L152 135V190Z" fill="#fff1bf" stroke="#17365d" stroke-width="5" stroke-linejoin="round"/><path d="M54 137L108 91L162 137" fill="none" stroke="#ff806f" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><rect x="94" y="153" width="28" height="37" rx="3" fill="#78b7ff" stroke="#17365d" stroke-width="4"/><text x="108" y="226" text-anchor="middle" fill="#17365d" font-size="21" font-weight="900">${local("NHÀ", "HOME")}</text></g>`;
    const library = `<g aria-label="${local("Thư viện", "Library")}"><path d="M768 133L830 95L892 133Z" fill="#ffd57a" stroke="#17365d" stroke-width="5" stroke-linejoin="round"/><rect x="778" y="133" width="104" height="57" rx="3" fill="#e8f3ff" stroke="#17365d" stroke-width="5"/><path d="M795 145V181M818 145V181M842 145V181M865 145V181" stroke="#397ee8" stroke-width="7"/><path d="M768 191H892" stroke="#17365d" stroke-width="7" stroke-linecap="round"/><text x="830" y="226" text-anchor="middle" fill="#17365d" font-size="21" font-weight="900">${local("THƯ VIỆN", "LIBRARY")}</text></g>`;
    return `<figure class="math-visual encounter-visual" role="img" aria-label="${local("Shaun đi từ nhà và anh trai đi từ thư viện, hai người gặp nhau sau 5 phút", "Shaun leaves home and his brother leaves the library; they meet after 5 minutes")}"><svg viewBox="0 0 940 370" style="display:block;width:min(940px,100%);height:auto;margin:auto" aria-hidden="true"><defs><marker id="meet-blue" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0 0L12 6L0 12Z" fill="#397ee8"/></marker><marker id="meet-coral" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0 0L12 6L0 12Z" fill="#ff806f"/></marker></defs>${home}${library}<path d="M165 174H${meetX - 15}" stroke="#397ee8" stroke-width="9" stroke-linecap="round" marker-end="url(#meet-blue)"/><path d="M775 174H${meetX + 15}" stroke="#ff806f" stroke-width="9" stroke-linecap="round" marker-end="url(#meet-coral)"/><circle cx="${meetX}" cy="174" r="14" fill="#59c9a8" stroke="#17365d" stroke-width="5"/><path d="M${meetX} 192V262" stroke="#59c9a8" stroke-width="4" stroke-dasharray="8 7"/><text x="${meetX}" y="72" text-anchor="middle" fill="#16866b" font-size="23" font-weight="900">${local("GẶP NHAU", "MEETING POINT")}</text><text x="305" y="112" text-anchor="middle" fill="#245ea9" font-size="25" font-weight="900">Shaun · 65 m/${local("phút", "min")}</text><text x="305" y="146" text-anchor="middle" fill="#60728a" font-size="20" font-weight="800">5 ${local("phút", "minutes")}</text><text x="615" y="112" text-anchor="middle" fill="#c64d3f" font-size="25" font-weight="900">${local("Anh trai", "Brother")} · 75 m/${local("phút", "min")}</text><text x="615" y="146" text-anchor="middle" fill="#60728a" font-size="20" font-weight="800">5 ${local("phút", "minutes")}</text><path d="M165 275V298H775V275" fill="none" stroke="#17365d" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><text x="470" y="337" text-anchor="middle" fill="#17365d" font-size="28" font-weight="900">${local("Nhà ↔ Thư viện: ? m", "Home ↔ Library: ? m")}</text></svg><figcaption>${local("Hai người xuất phát cùng lúc ở hai đầu và đi ngược chiều về phía nhau.", "They start at the same time from opposite ends and walk towards each other.")}</figcaption></figure>`;
  };
  const rows = {
    1: [["🏠","Shaun 65 → 5 phút ← 75 Anh trai","📚"],["🏠","Shaun 65 → 5 min ← 75 Brother","📚"]],
    2: [["🐌 0,5","14 m → ← 3","🐜"],["🐌 0.5","14 m → ← 3","🐜"]],
    3: [["A","55 → 4 giờ ← 60","B"],["A","55 → 4 h ← 60","B"]],
    4: [["🚆 80","5 giờ → ← 60","🚆"],["🚆 80","5 h → ← 60","🚆"]],
    5: [["← 70","cùng điểm xuất phát","90 →"],["← 70","same start","90 →"]],
    6: [["🪐 30","5 phút trước va chạm","40 🪐"],["🪐 30","5 min before collision","40 🪐"]],
    7: [["🏠 Don 60","360 m | gặp | 420 m","Danny 📚"],["🏠 Don 60","360 m | meet | 420 m","Danny 📚"]],
    8: [["A · 80","1000 km · gặp sau 5 giờ","? · B"],["A · 80","1000 km · meet after 5 h","? · B"]],
    9: [["800 km/giờ · sớm 1 giờ","cùng quãng đường","700 km/giờ · muộn 1 giờ"],["800 km/h · 1 h early","same distance","700 km/h · 1 h late"]],
    10: [["tổng: 200 km/giờ","ngược chiều / cùng chiều","hiệu: 40 km/giờ"],["sum: 200 km/h","opposite / same direction","difference: 40 km/h"]],
    11: [["A · 80","800 km; cách 50 km","70 · B"],["A · 80","800 km; gap 50 km","70 · B"]],
    12: [["Edward","hiệu 12 · tổng 122","Randy"],["Edward","difference 12 · sum 122","Randy"]]
  };
  Object.entries(rows).forEach(([number, variants]) => {
    art[`encounter-17-${number}`] = () => {
      if (number === "1") return encounterOne();
      const row = isVi() ? variants[0] : variants[1];
      return `<figure class="math-visual" role="img" aria-label="${local(`Sơ đồ gặp nhau câu ${number} chương 17`, `Encounter diagram for Chapter 17 Practice ${number}`)}"><div style="display:grid;grid-template-columns:minmax(80px,auto) 1fr minmax(80px,auto);align-items:center;gap:12px;width:min(780px,96%);font-weight:900"><span>${row[0]}</span><span style="border-bottom:5px solid #17345c;text-align:center;padding:12px;color:#245ea9">${row[1]}</span><span>${row[2]}</span></div><figcaption>${local("Theo các mũi tên và dùng đúng vận tốc, quãng đường, thời gian trong đề.", "Follow the arrows and use the exact speeds, distance and time from the question.")}</figcaption></figure>`;
    };
  });
})();
