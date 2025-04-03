import databoss from "@/assets/projects/databoss.png";
import feedup from '@/assets/projects/feedup.png';
import spTrans from '@/assets/projects/sptransapi.png';
import pokedex from '@/assets/projects/pokedex.png';
import jornada from '@/assets/projects/jornada-em-dados.png';
import ecoManager from '@/assets/projects/e-commerce.png';
import secAPIart from '@/assets/projects/secAPI-art.png';
import carWebSys from '@/assets/projects/car-websystem.png';

interface Logo {
    name: string;
    src: string;
    description: string;
    link: string;
}

const midiaLogos: Logo[] = [
    {
        src: databoss,
        name: `DataBoss`,
        description: "Developed a responsive website for data-related project using React.JS, Typescript, Tailwind CSS, Git, etc",
        link: "https://comunidadedataboss.com/",
    },
    {
        src: feedup,
        name: `FeedUp`,
        description: "Developed a mobile application using React Native, integrating with APIs for real-time data retrieval and interactive user features.\n" +
            "Project select as one of the finalist at the ioasys company bootcamp",
        link: "https://github.com/FeedUp-Hub/FeedUp-Mobile",
    },
    {
        src: spTrans,
        name: `SP Transport API`,
        description: "Developed a mobile application integrating the São Paulo trans API to provide real-time public transportation data. Implemented visual geomapping features using React Native.",
        link: "https://github.com/fsaantiago/Mobile_SPTrans_OlhoVivo",
    },
    {
        src: jornada,
        name: `Jornada em Dados`,
        description: "Developed a personal website for career mentor, provinding a clean and dynamic interface, using React.JS, Typescript, Tailwind CSS, Git, etc",
        link: "https://jornadaemdadossimplificada.com.br/",
    },
    {
        src: carWebSys,
        name: `Car Web System`,
        description: "Backend system for a car website, using knowledge of Spring Boot and APIs along with their documentation to fetch vehicle details such as make, model, and color. Additionally, it is integrated with other APIs to obtain location and pricing information.",
        link: "https://github.com/fsaantiago/car-website-backend-system",
    },
    {
        src: pokedex,
        name: `Pokedex`,
        description: "Built a Pokédex app using React Native, integrating public APIs to fetch and display real-time data. Implemented search, filtering, and detailed Pokémon profiles.",
        link: "https://github.com/fsaantiago/pokedex-ioasys-react-native",
    },
    {
        src: secAPIart,
        name: `Sec API`,
        description: "Developed a backend authentication and authorization system using Spring Boot and JWT, ensuring secure access control by restricting platform resources to authenticated users.",
        link: "https://github.com/fsaantiago/JWT-security-API",
    },
    {
        src: ecoManager,
        name: `E-Commerce Manager`,
        description: "Developed a user authentication system with JWT, enabling secure login, access control, and protected task management operations.",
        link: "https://github.com/fsaantiago/e-commerce-manager",
    },
];

export default midiaLogos;
