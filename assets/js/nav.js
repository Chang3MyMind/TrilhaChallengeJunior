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

// Nav fixa

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("main-navbar");
  const body = document.querySelector("body");
  if (!navbar) {
    console.warn("Elemento #main-navbar não encontrado. Verifique o HTML.");
    return;
  }

  let lastScrollTop = 0;

  const navbarFullHeight = navbar.offsetHeight + 15;

  window.addEventListener("scroll", () => {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > 80) {
      navbar.classList.add("fixed");

      body.classList.add("fixed-padding");
    } else {
      navbar.classList.remove("fixed");
      body.classList.remove("fixed-padding");
    }

    if (navbar.classList.contains("fixed")) {
      if (
        currentScrollTop > lastScrollTop &&
        currentScrollTop > navbarFullHeight
      ) {
        navbar.classList.add("navbar-hidden");
      } else if (
        currentScrollTop < lastScrollTop ||
        currentScrollTop <= navbarFullHeight
      ) {
        navbar.classList.remove("navbar-hidden");
      }
    } else {
      navbar.classList.remove("navbar-hidden");
    }

    lastScrollTop = currentScrollTop;
  });
});
