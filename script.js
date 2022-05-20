const tabMenu = document.querySelectorAll (".js-tabmenu li")
const tabContent = document.querySelectorAll (".js-tabcontent article");

if (tabMenu.length && tabContent.length){
  tabContent[0].classList.add("ativo");

  function activeTab(index){
    tabContent.forEach((article) => {
      article.classList.remove("ativo");
    });
    tabContent[index].classList.add ("ativo");
  };

  tabMenu.forEach ((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
    itemMenu.addEventListener ('click', () => {
      itemMenu.classList.toggle("curso-selecionado");
    });
  });
}

