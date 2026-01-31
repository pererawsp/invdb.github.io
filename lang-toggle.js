const STORAGE_KEY = "invdb-lang";
const DEFAULT_LANG = "en";

const setLanguage = (lang) => {
  const selected = lang === "si" ? "si" : "en";
  document.querySelectorAll("[data-lang]").forEach((element) => {
    element.style.display = element.dataset.lang === selected ? "" : "none";
  });

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    const isActive = button.dataset.langSwitch === selected;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive.toString());
  });

  document.documentElement.setAttribute("lang", selected);
  localStorage.setItem(STORAGE_KEY, selected);
};

const initLanguageToggle = () => {
  const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  setLanguage(savedLang);

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.langSwitch);
    });
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLanguageToggle);
} else {
  initLanguageToggle();
}
