import GrantoImage from '@/public/granto.jpg'
import CryptoApp from '@/public/crypto.jpg'
import BikcraftImage from '@/public/bikcraft.jpg'

const data = [
  {
    id: 1,
    imgSrc: GrantoImage,
    techs: "Webdesign • Wordpress • UI/UX Design",
    title:
      "Redesign do site da Granto Seguros. A reestruturação se baseou em alterar a página principal além de suas páginas internas.",
    disabled: true,
    alt: 'Imagem do site da Granto Seguros. Uma startup focada em seguro garantia para empresas'
  },
  {
    id: 2,
    imgSrc: CryptoApp,
    techs: "UI/UX Design • Figma • App • Blockchain",
    title:
      "Aplicativo para a compra e venda de NFT's que são comercializados no aplicativo com criptomoedas.",
    disabled: false,
    alt: 'Imagem de um aplicativo de criptomoedas para a compra e venda de NFTs'
  },
  {
    id: 3,
    imgSrc: BikcraftImage,
    techs: "UI/UX Design • Figma • HTML, CSS e JavaScript",
    title:
      "Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para o cliente. Explore o mundo na sua velocidade com a Bikcraft.",
    disabled: false,
    alt: 'Imagem para o site da Bikcraft que onde possui imagem de três de nossas bicicletas'
  },
];

export default data;