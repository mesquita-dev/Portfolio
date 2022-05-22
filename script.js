function cursos() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent article");
  const tabDec = document.querySelectorAll(".js-dec");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    tabDec[0].classList.add("curso-selecionado");

    function activeTab(index) {
      tabContent.forEach((article) => {
        article.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    function activeMenu(index) {
      tabDec.forEach((decoracao) => {
        decoracao.classList.remove("curso-selecionado");
      });
      tabDec[index].classList.add("curso-selecionado");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
      itemMenu.addEventListener("click", () => {
        activeMenu(index);
      });
    });
  }
}
cursos();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

   function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();

function lightMode() {
  const html = document.querySelector("html");
  const checkbox = document.querySelector("#check");

  checkbox.addEventListener("change", () => {
    html.classList.toggle("light-mode");
  });
}
lightMode();

