import brasscom from "../caroussel/brasscom.png";
import hotmart from "../caroussel/hotmart.png";
import marieClaire from "../caroussel/marie-claire.png";
import datahackers from "../caroussel/datahackers.png";
import letsdata from "../caroussel/letsdata.png";
import poddev from "../caroussel/poddev.png";
import programaria from "../caroussel/programaria.png";
import qcon from "../caroussel/qcon.png";
import tdc from "../caroussel/tdc.png";
import startuplife from "../caroussel/startuplife.png";
import progdinamica from "../caroussel/progdinamica.png";
import datagirls from "../caroussel/datagirls.png";
import awssumit from "../caroussel/awssumit.png";
import womends from "../caroussel/womends.png";
import ebac from "../caroussel/ebac.png";

interface Logo {
  alt: string;
  src: string;
  link: string;
}

const midiaLogos: Logo[] = [
    {
      alt: "brasscom",
      src: brasscom,
      link: "https://www.youtube.com/watch?v=_C4r7MvSN3M",
    },
    {
      alt: "hotmart",
      src: hotmart,
      link: "https://medium.com/techbloghotmart/afinal-como-se-desenvolve-um-projeto-de-data-science-233472996c34",
    },
    {
      alt: "marieClaire",
      src: marieClaire,
      link: "https://revistamarieclaire.globo.com/Carreira/noticia/2022/03/percurso-tech-mulheres-relatam-glorias-e-desafios-em-area-dominada-por-homens.html",
    },
    {
      alt: "letsdata",
      src: letsdata,
      link: "https://open.spotify.com/episode/4LtOnin7htcBijF1AtNkMU",
    },
    {
        alt: "ebac",
        src: ebac,
        link: "https://www.youtube.com/watch?v=kON1Wx19zYA",
    },
    {
      alt: "poddev",
      src: poddev,
      link: "https://open.spotify.com/episode/5782UCSVWxI5b4HqDYGiWx",
    },
    {
      alt: "programaria",
      src: programaria,
      link: "https://www.programaria.org/como-gerar-valor-projetos-ciencia-dados-inteligencia-artificial/",
    },
    {
      alt: "qcon",
      src: qcon,
      link: "https://www.infoq.com/br/presentations/data-science-machine-learning-problemas-reais/",
    },
    {
      alt: "tdc",
      src: tdc,
      link: "https://thedevconf.com/palestrante/pollyanna-goncalves",
    },
    {
      alt: "startuplife",
      src: startuplife,
      link: "https://open.spotify.com/episode/2KAmLscy7ZkCkVnN2VF8DO",
    },
    {
      alt: "progdinamica",
      src: progdinamica,
      link: "https://www.youtube.com/watch?v=ydkWQ3860Vc",
    },
    {
      alt: "datagirls",
      src: datagirls,
      link: "https://www.youtube.com/watch?v=BIPevW14Iq0",
    },
    {
      alt: "awssumit",
      src: awssumit,
      link: "https://www.awswomencommunitybrasil.com/trilha-iniciante.html",
    },
    {
        alt: "womends",
        src: womends,
        link: "https://www.youtube.com/watch?v=MRbhiVeZ9jI",
    },
    {
        alt: "datahackers",
        src: datahackers,
        link: "https://open.spotify.com/episode/7CyAWdf728ik9JQxTuderj",
    },
];

export default midiaLogos;
