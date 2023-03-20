const yearEl = document.querySelector(".year");
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const allLinks = document.querySelectorAll("a:link");

const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const open = () => {
  headerEl.classList.toggle("nav-open");
};

btnNavEl.addEventListener("click", open);
allLinks.forEach((link) => {
  link.addEventListener(
    "click",
    (scroll = (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");

      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      if (href !== "#" && href.startsWith("#")) {
        const sectionAll = document.querySelector(href);
        sectionAll.scrollIntoView({
          behavior: "smooth",
        });
      }

      if (link.classList.contains("main-nav-link")) {
        headerEl.classList.toggle("nav-open");
      }
    })
  );
});
