import {
    Fa500Px,
    FaAccusoft,
    FaAdversal,
    FaAvianex,
    FaBitcoin,
    FaBtc,
    FaCodiepie,
    FaDocker,
    FaGithubSquare,
} from "react-icons/fa";

import { v4 as uuidv4 } from "uuid";

const sublinks = [
    {
        pageId: uuidv4(),
        page: "product",
        links: [
            {
                id: uuidv4(),
                label: "community",
                icon: <Fa500Px />,
                url: "/product/community",
            },
            {
                id: uuidv4(),
                label: "content",
                icon: <FaAccusoft />,
                url: "/product/content",
            },
            {
                id: uuidv4(),
                label: "roles",
                icon: <FaAdversal />,
                url: "/product/roles",
            },
        ],
    },
    {
        pageId: uuidv4(),
        page: "solutions",
        links: [
            {
                id: uuidv4(),
                label: "developers",
                icon: <FaAvianex />,
                url: "/solutions/developers",
            },
            {
                id: uuidv4(),
                label: "content managers",
                icon: <FaBitcoin />,
                url: "/solutions/content-managers",
            },
            {
                id: uuidv4(),
                label: "business teams",
                icon: <FaBtc />,
                url: "/solutions/business teams",
            },
            {
                id: uuidv4(),
                label: "ecommerce",
                icon: <FaCodiepie />,
                url: "/solutions/ecommerce",
            },
        ],
    },
    {
        page: "resources",
        pageId: uuidv4(),
        links: [
            {
                id: uuidv4(),
                label: "starters",
                icon: <FaDocker />,
                url: "/resources/starters",
            },
            {
                id: uuidv4(),
                label: "showcase",
                icon: <FaGithubSquare />,
                url: "/resources/showcase",
            },
        ],
    },
];

export default sublinks;
