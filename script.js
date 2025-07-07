const menuLinks = document.querySelectorAll("nav ul li a");
const sections = Array.from(menuLinks).map(link => document.getElementById(link.getAttribute("href").slice(1))).filter(Boolean);
const offset = 80;

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + offset;
  for (let i = sections.length - 1; i >= 0; i--) {
    if (sections[i].offsetTop <= scrollPos) {
      menuLinks.forEach(link => link.classList.remove("active"));
      menuLinks[i].classList.add("active");
      break;
    }
  }
});

menuLinks.forEach(link => link.addEventListener("click", e => {
  e.preventDefault();
  const target = document.getElementById(link.getAttribute("href").slice(1));
  if (target) {
    const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}));
