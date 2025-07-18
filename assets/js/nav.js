function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const overlay = document.querySelector(".Overlay");

  menu.classList.toggle("active");
  overlay.classList.toggle("active");
}

const menuIcon = document.querySelector(".MenuIcon");
const overlay = document.querySelector(".Overlay");

menuIcon.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

/*Colocando a barra de navegação presa emcima ao scrolar */
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
});

/*Arrumando o paddin para não ficar flicando */
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  const body = document.querySelector("body");

  if (window.scrollY > 90) {
    nav.classList.add("fixed");
    body.classList.add("fixed-padding");
  } else {
    nav.classList.remove("fixed");
    body.classList.remove("fixed-padding");
  }
});
