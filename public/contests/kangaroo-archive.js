(() => {
  const years = [2025, 2024, 2023, 2022, 2021, 2020];
  const levels = {
    felix: { label: "Felix", grade: "Lớp 1–2", icon: "🌱" },
    ecolier: { label: "Écolier", grade: "Lớp 3–4", icon: "🧩" },
    benjamin: { label: "Benjamin", grade: "Lớp 5–6", icon: "🚀" }
  };

  const fileFor = (level, year) => `assets/kangaroo/kangaroo-${level}-${year}.pdf`;
  const answersFor = year => `assets/kangaroo/kangaroo-answers-${year}.pdf`;
  const params = new URLSearchParams(location.search);
  let selectedLevel = levels[params.get("level")] ? params.get("level") : "ecolier";
  let selectedYear = years.includes(Number(params.get("year"))) ? Number(params.get("year")) : 2025;

  const levelTabs = document.getElementById("kangarooLevelTabs");
  const yearGrid = document.getElementById("kangarooYearGrid");
  const testLink = document.getElementById("kangarooTestLink");
  const answersLink = document.getElementById("kangarooAnswersLink");
  const selection = document.getElementById("kangarooSelection");
  const archive = document.getElementById("kangarooArchive");
  const interactiveLabel = document.getElementById("kangarooInteractiveLabel");
  const libraryGrid = document.getElementById("kangarooLibraryGrid");

  function syncUrl() {
    const url = new URL(location.href);
    url.searchParams.set("level", selectedLevel);
    url.searchParams.set("year", String(selectedYear));
    history.replaceState(null, "", url);
  }

  function renderPicker() {
    levelTabs.innerHTML = "";
    Object.entries(levels).forEach(([id, meta]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.role = "tab";
      button.className = `kangaroo-level-tab${id === selectedLevel ? " active" : ""}`;
      button.setAttribute("aria-selected", id === selectedLevel ? "true" : "false");
      button.innerHTML = `<span aria-hidden="true">${meta.icon}</span><b>${meta.label}</b><small>${meta.grade}</small>`;
      button.addEventListener("click", () => {
        selectedLevel = id;
        syncUrl();
        renderPicker();
      });
      levelTabs.appendChild(button);
    });

    yearGrid.innerHTML = "";
    years.forEach(year => {
      const button = document.createElement("button");
      button.type = "button";
      button.role = "tab";
      button.className = year === selectedYear ? "active" : "";
      button.setAttribute("aria-selected", year === selectedYear ? "true" : "false");
      button.textContent = year;
      button.addEventListener("click", () => {
        selectedYear = year;
        syncUrl();
        renderPicker();
      });
      yearGrid.appendChild(button);
    });

    testLink.href = fileFor(selectedLevel, selectedYear);
    answersLink.href = answersFor(selectedYear);
    const meta = levels[selectedLevel];
    selection.textContent = `Đang chọn: ${meta.label} · ${meta.grade} · năm ${selectedYear}`;
  }

  function renderLibrary() {
    libraryGrid.innerHTML = "";
    Object.entries(levels).forEach(([id, meta]) => {
      const group = document.createElement("article");
      group.className = `kangaroo-level-card ${id}`;
      const links = years.map(year => `
        <li>
          <strong>${year}</strong>
          <a href="${fileFor(id, year)}" target="_blank" rel="noopener">Đề PDF</a>
          <a href="${answersFor(year)}" target="_blank" rel="noopener">Đáp án</a>
        </li>`).join("");
      group.innerHTML = `
        <header><span aria-hidden="true">${meta.icon}</span><div><h4>${meta.label}</h4><p>${meta.grade}</p></div></header>
        <ul>${links}</ul>`;
      libraryGrid.appendChild(group);
    });
  }

  function syncVisibility() {
    const isKangaroo = document.querySelector('[data-contest="KANGAROO"]')?.classList.contains("active");
    archive.classList.toggle("hidden", !isKangaroo);
    interactiveLabel.classList.toggle("hidden", !isKangaroo);
  }

  document.querySelectorAll(".contest-tab").forEach(tab => tab.addEventListener("click", syncVisibility));
  renderPicker();
  renderLibrary();
  syncVisibility();
})();
