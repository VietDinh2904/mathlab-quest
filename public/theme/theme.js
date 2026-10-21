(function initializeMathQuestThemes() {
  "use strict";

  const scriptUrl = document.currentScript?.src || new URL("/theme/theme.js", location.href).href;
  const assetRoot = new URL("backgrounds/", scriptUrl);
  const preferenceKey = "math-quest-visual-theme-v1";
  const themeNames = ["flowers", "cats", "universe"];
  const themes = {
    flowers: {
      label: "Flowers",
      labelVi: "Hoa",
      backgrounds: ["flowers-meadow-strips.png", "flowers-sunflower.png"],
      icon: '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="4"/><path d="M16 4c4 0 5 5 2 8 5-2 9 1 8 5-1 4-6 4-9 1 2 5-1 9-5 8-4-1-4-6-1-9-5 2-9-1-8-5 1-4 6-4 9-1-2-5 1-9 5-8Z"/><path d="M16 20v8m0-3c-4 0-6-2-7-5 4 0 6 1 7 5Zm0 0c4 0 6-2 7-5-4 0-6 1-7 5Z"/></svg>',
    },
    cats: {
      label: "Cats",
      labelVi: "Mèo",
      backgrounds: ["cats-pastel.png"],
      icon: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="m8 12-1-7 7 4h4l7-4-1 7c2 2 3 5 3 8 0 5-4 8-11 8S5 25 5 20c0-3 1-6 3-8Z"/><path d="M12 18h.1M20 18h.1M14 22c1.3 1 2.7 1 4 0M7 21l-4 1m22-1 4 1"/></svg>',
    },
    universe: {
      label: "Universe",
      labelVi: "Vũ trụ",
      backgrounds: ["universe-moon-cats.png", "universe-solar-family.png", "universe-whale-moon.png"],
      icon: '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="6"/><path d="M4 18c3 4 10 6 17 4 6-1 9-4 8-6-1-3-7-3-14-1S3 20 4 23c1 2 5 2 9 1"/><path d="m24 5 .7 2.3L27 8l-2.3.7L24 11l-.7-2.3L21 8l2.3-.7L24 5Z"/></svg>',
    },
  };

  const randomItem = (items) => items[Math.floor(Math.random() * items.length)];
  const languageIsVietnamese = () => (document.documentElement.lang || "vi").toLowerCase().startsWith("vi");
  let currentTheme = null;
  let currentBackground = null;

  function setTheme(name, { remember = true, reroll = true } = {}) {
    const selected = themes[name] || themes.flowers;
    let background = randomItem(selected.backgrounds);
    if (reroll && selected.backgrounds.length > 1 && background === currentBackground) {
      const currentIndex = selected.backgrounds.indexOf(background);
      background = selected.backgrounds[(currentIndex + 1) % selected.backgrounds.length];
    }
    currentTheme = name;
    currentBackground = background;
    document.documentElement.dataset.visualTheme = name;
    document.documentElement.style.setProperty(
      "--theme-background-url",
      `url("${new URL(background, assetRoot).href}")`,
    );
    document.documentElement.style.setProperty("--theme-icon", `"${selected.label}"`);
    if (remember) {
      try { localStorage.setItem(preferenceKey, name); } catch {}
    }
    updateIdentity();
    document.dispatchEvent(new CustomEvent("mathquestthemechange", { detail: { theme: name, background } }));
  }

  function updateIdentity() {
    const selected = themes[currentTheme];
    document.querySelectorAll("[data-theme-option]").forEach((button) => {
      const active = button.dataset.themeOption === currentTheme;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll("[data-current-theme-icon]").forEach((element) => {
      element.innerHTML = selected.icon;
    });
    document.querySelectorAll("[data-current-theme-name]").forEach((element) => {
      element.textContent = languageIsVietnamese() ? selected.labelVi : selected.label;
    });
    document.querySelectorAll(".brand-mark, .brand-tile").forEach((element) => {
      element.innerHTML = selected.icon;
      element.dataset.themeBrand = currentTheme;
    });
    const avatar = document.querySelector(".avatar-button");
    if (avatar) {
      avatar.innerHTML = selected.icon;
      avatar.setAttribute("aria-label", `${selected.label} theme`);
    }
    const journeyIcon = document.querySelector(".journey-heading > span");
    if (journeyIcon) journeyIcon.innerHTML = selected.icon;
  }

  function themeButton(name) {
    const selected = themes[name];
    const button = document.createElement("button");
    button.type = "button";
    button.className = `theme-option theme-option-${name}`;
    button.dataset.themeOption = name;
    button.setAttribute("aria-pressed", "false");
    button.innerHTML = `${selected.icon}<span><b>${selected.label}</b><small>${selected.labelVi}</small></span>`;
    button.addEventListener("click", () => setTheme(name));
    return button;
  }

  function createPicker() {
    if (document.querySelector(".theme-switcher")) return;
    const picker = document.createElement("div");
    picker.className = "theme-switcher";
    picker.setAttribute("role", "group");
    picker.setAttribute("aria-label", "Chọn bộ nhận diện / Choose visual theme");
    themeNames.forEach((name) => picker.append(themeButton(name)));

    const surprise = document.createElement("button");
    surprise.type = "button";
    surprise.className = "theme-surprise";
    surprise.setAttribute("aria-label", "Chọn chủ đề ngẫu nhiên");
    surprise.title = "Random theme";
    surprise.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 9h4c6 0 8 14 14 14h4M23 5l4 4-4 4M5 23h4c2 0 4-2 5-4m7-10h6M23 19l4 4-4 4"/></svg>';
    surprise.addEventListener("click", () => {
      const alternatives = themeNames.filter((name) => name !== currentTheme);
      setTheme(randomItem(alternatives));
    });
    picker.append(surprise);

    const mathMount = document.querySelector(".top-actions");
    const contestMount = document.querySelector(".desktop-bar");
    if (mathMount) mathMount.prepend(picker);
    else if (contestMount) contestMount.insertBefore(picker, document.getElementById("resetPracticeButton"));
    else document.body.prepend(picker);
    updateIdentity();
  }

  let storedTheme = null;
  try {
    const candidate = localStorage.getItem(preferenceKey);
    if (themeNames.includes(candidate)) storedTheme = candidate;
  } catch {}
  setTheme(storedTheme || randomItem(themeNames), { remember: Boolean(storedTheme), reroll: false });

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", createPicker, { once: true });
  else createPicker();
  window.addEventListener("load", updateIdentity, { once: true });
  window.addEventListener("storage", (event) => {
    if (event.key === preferenceKey && themeNames.includes(event.newValue)) {
      setTheme(event.newValue, { remember: false });
    }
  });
})();
