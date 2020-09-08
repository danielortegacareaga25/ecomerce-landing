/* MENU SHOW */

const showMenu = (toogleId, navId) => {
  const toggle = document.getElementById(toogleId),
    nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");
navLink.forEach((n) =>
  n.addEventListener("click", () => {
    navLink.forEach((o) => o.classList.remove("active"));
    n.classList.add("active");
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
  })
);
