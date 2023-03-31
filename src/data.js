// import hero slider images
import HeroSlideImage1 from "./assets/img/dogs/dog-slide-1.png";
import HeroSlideImage2 from "./assets/img/dogs/dog-slide-2.png";
import HeroSlideImage3 from "./assets/img/dogs/dog-slide-3.png";
// import dog category images
import DogCateg1 from "./assets/img/dogs/dog-categ-1.png";
import DogCateg2 from "./assets/img/dogs/dog-categ-2.png";
import DogCateg3 from "./assets/img/dogs/dog-categ-3.png";
import DogCateg4 from "./assets/img/dogs/dog-categ-4.png";
// import social icons
import { AiFillYoutube, AiFillInstagram, AiFillGithub } from "react-icons/ai";

export const navigation = [
  {
    name: "home",
    href: "#",
  },
  {
    name: "preços",
    href: "#",
  },
  {
    name: "contato",
    href: "#",
  },
  {
    name: "marque um horário",
    href: "#",
  },
];

export const heroSlider = [
  {
    id: 1,
    title: "Nós cuidamos do seu pet.",
    image: <HeroSlideImage1 />,
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    buttonText: "Marque um horário",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit.",
    image: <HeroSlideImage2 />,
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    buttonText: "Marque um horário",
  },
  {
    id: 3,
    title: "Nunc odio in et, lectus sit.",
    image: <HeroSlideImage3 />,
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    buttonText: "Marque um horário",
  },
];

export const bundleData = [
  {
    id: 1,
    image: <DogCateg1 />,
    name: "small",
    dogCategory: "1 - 9 kg",
    services: [
      {
        name: "smart",
        price: 20,
        list: ["banho", "limpeza de ouvido", "corte de unhas", "perfume"],
      },
      {
        name: "premium",
        price: 40,
        list: [
          "todos serviços smart",
          "serviço 1",
          "serviço 2",
          "serviço 3",
          "serviço 4",
        ],
      },
      {
        name: "royal",
        price: 60,
        list: [
          "todo serviço premiun",
          "serviço 1",
          "serviço 2",
          "serviço 3",
          "serviço 4",
          "serviço 5",
          "serviço 6",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "medium",
    image: <DogCateg2 />,
    dogCategory: "10 - 19 kg",
    services: [
      {
        name: "smart",
        price: 80,
        list: ["banho", "limpeza de ouvido", "corte de unhas", "perfumed"],
      },
      {
        name: "premium",
        price: 100,
        list: [
          "todos serviços smart",
          "serviço 1",
          "serviço 2",
          "serviço 3",
          "serviço 4",
        ],
      },
      {
        name: "royal",
        price: 120,
        list: [
          "todos serviços premium",
          "serviço 1",
          "serviço 2",
          "serviço 3",
          "serviço 4",
          "serviço 5",
          "serviço 6",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "big",
    image: <DogCateg3 />,
    dogCategory: "20 - 29 kg",
    services: [
      {
        name: "smart",
        price: 140,
        list: ["banho", "limpeza de ouvido", "corte de unhas", "perfumed"],
      },
      {
        name: "premium",
        price: 160,
        list: [
          "todos serviços smart",
          "serviço 1",
          "serviço 2",
          "serviço 3",
          "serviço 4",
        ],
      },
      {
        name: "royal",
        price: 180,
        list: [
          "todos serviços premium",
          "serviço 1",
          "serviço 2",
          "serviço 3",
          "serviço 4",
          "serviço 5",
          "serviço 6",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "super",
    image: <DogCateg4 />,
    dogCategory: "30 - 39 kg",
    services: [
      {
        name: "smart",
        price: 200,
        list: ["banho", "limpeza de ouvido", "corte de unhas", "perfumed"],
      },
      {
        name: "premium",
        price: 210,
        list: [
          "todos serviços smart",
          "serviço 1",
          "serviço 2",
          "serviço 3",
          "serviço 4",
        ],
      },
      {
        name: "royal",
        price: 220,
        list: [
          "todos serviços premium",
          "serviço 1",
          "serviço 2",
          "serviço 3",
          "serviço 4",
          "serviço 5",
          "serviço 6",
        ],
      },
    ],
  },
];

export const social = [
  {
    icon: <AiFillYoutube />,
    href: "#",
  },
  {
    icon: <AiFillInstagram />,
    href: "#",
  },
  {
    icon: <AiFillGithub />,
    href: "#",
  },
];
