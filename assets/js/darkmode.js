const toggle = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  if (theme === "dark") {
    icon.textContent = "☀️";
  } else {
    icon.textContent = "🌙";
  }
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  setTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  setTheme(prefersDark ? "dark" : "light");
}

toggle.addEventListener("click", () => {
  const current =
    document.documentElement.getAttribute("data-theme");

  setTheme(current === "dark" ? "light" : "dark");
});
