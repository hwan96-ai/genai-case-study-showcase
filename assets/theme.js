/* 다크/라이트 모드 토글 — 모든 페이지가 공유. 외부 호출 없음. */
(function () {
  "use strict";
  var root = document.documentElement;
  var KEY = "case-showcase-theme";
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) { /* 무시 */ }
  if (saved === "dark" || saved === "light") { root.setAttribute("data-theme", saved); }

  function effectiveTheme() {
    var t = root.getAttribute("data-theme");
    if (t === "dark" || t === "light") { return t; }
    return (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
  }

  var btn = document.getElementById("theme-toggle");
  function syncButton() {
    var dark = effectiveTheme() === "dark";
    btn.setAttribute("aria-pressed", String(dark));
    btn.querySelector(".toggle-icon").textContent = dark ? "☀" : "☾";
    btn.querySelector(".toggle-text").textContent = dark ? "라이트 모드" : "다크 모드";
  }
  btn.addEventListener("click", function () {
    var next = effectiveTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem(KEY, next); } catch (e) { /* 무시 */ }
    syncButton();
  });
  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var onChange = function () { syncButton(); };
    if (mq.addEventListener) { mq.addEventListener("change", onChange); }
    else if (mq.addListener) { mq.addListener(onChange); }
  }
  syncButton();
})();
