const tabMenu = document.querySelectorAll (".js-tabmenu li")
const tabContent = document.querySelectorAll (".js-tabcontent article");
const tabDec = document.querySelectorAll (".js-dec");

if (tabMenu.length && tabContent.length){
  tabContent[0].classList.add("ativo");

  function activeTab(index){
    tabContent.forEach((article) => {
      article.classList.remove("ativo");
    });
    tabContent[index].classList.add ("ativo");
  };

  function activeMenu(index){
    tabDec.forEach((decoracao) => {
      decoracao.classList.remove ("curso-selecionado");
    });
    tabDec[index].classList.add ("curso-selecionado");
  }

  tabMenu.forEach ((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
    itemMenu.addEventListener ('click', () => {
      activeMenu(index);
    });
  });
}

