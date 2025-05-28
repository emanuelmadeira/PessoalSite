  // Destaca o menu conforme a rolagem da página
    const menuLinks = document.querySelectorAll("nav ul li a");
    const sections = Array.from(menuLinks).map(link => {
      const id = link.getAttribute("href").slice(1);
      return document.getElementById(id);
    });

    function onScroll() {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          menuLinks.forEach(link => link.classList.remove("active"));
          menuLinks[i].classList.add("active");
          break;
        }
      }
    }

    window.addEventListener("scroll", onScroll);

    // Suaviza o clique no menu
    menuLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = link.getAttribute("href").slice(1);
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      });
    });