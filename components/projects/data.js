import GrantoImage from "@/public/granto.jpg";
import CryptoApp from "@/public/crypto.jpg";
import BikcraftImage from "@/public/bikcraft.jpg";

const data = [
  {
    id: 1,
    imgSrc: GrantoImage,
    techs: "Webdesign • Wordpress • UI/UX Design",
    title:
      "Redesign of the Granto Seguros website. The restructuring was based on changing the main page in addition to its internal pages.",
    disabled: true,
    alt: "Image from the Granto Seguros website. A startup focused on guarantee insurance for companies",
    linkPublic: "https://grantoseguros.com",
    linkFigma: "",
  },
  {
    id: 2,
    imgSrc: CryptoApp,
    techs: "Product Design • Figma • App • Blockchain",
    title:
      "Application for buying and selling NFTs that are traded in the application with cryptocurrencies.",
    disabled: false,
    alt: "Image of a cryptocurrency app for buying and selling NFTs",
    linkPublic: "https://www.behance.net/gallery/156620257/Crypto-App",
    linkFigma:
      "https://www.figma.com/file/jNvP2GEQkqaNMWVSgc89WI/Crypto-App?type=design&node-id=310%3A7826&mode=design&t=99csinPdxaAm3ocx-1",
  },
  {
    id: 3,
    imgSrc: BikcraftImage,
    techs: "Product Design • Figma • HTML, CSS and JavaScript",
    title:
      "High precision and quality electric bicycles, custom-made for the customer. Explore the world at your speed with Bikcraft.",
    disabled: false,
    alt: "Image for the Bikcraft website which has images of three of our bikes",
    linkPublic: "https://mesquita-dev.github.io/Bikcraft/",
    linkFigma:
      "https://www.figma.com/file/v657Nm3KVnx1ViSZiKkHgu/Bikcraft?type=design&node-id=0%3A1&mode=design&t=EWU2wmef04GdTKNE-1",
  },
];

export default data;
