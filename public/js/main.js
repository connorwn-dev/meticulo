document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const headerContact = document.querySelector(".site-header__contact");
if (headerContact && siteNav) {
  headerContact.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  });
}
