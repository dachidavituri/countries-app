import georgiaFlag from "&/georgia-flag.jpg";
import germanyFlag from "&/istockphoto-962789576-612x612.jpg";
import franceFlag from "&/360_F_41940248_NCRNah6ISoHgXXmBEe4heQ0UPXXd1onE.jpg";

interface Categories {
  name: string;
  path: string;
}
export const categories: Categories[] = [
  { name: "main", path: "/" },
  { name: "about", path: "/about" },
  { name: "services", path: "/services" },
];
export interface Country {
  id: number;
  infoLink: string;
  img: string;
  name: string;
  capitalCity: string;
  population: number;
}
export interface Service {
  title: string;
  description: string;
}
export interface Destionation {
  continent: string;
  description: string;
}
export const services: Service[] = [
  {
    title: "Personalized Travel Planning",
    description:
      "We create personalized travel plans based on your preferences.",
  },
  {
    title: "Group Tours and Packages",
    description:
      "Join our exciting group tours for a fun and social travel experience.",
  },
  {
    title: "Luxury and Budget Options",
    description:
      "Whether you want luxury or budget-friendly travel, we have the best options for you.",
  },
  {
    title: "24/7 Customer Support",
    description:
      "Our dedicated team is here for you anytime, ensuring a smooth travel experience.",
  },
  {
    title: "Travel Safety and Security",
    description: "We offer resources and advice to keep you safe during your travels, including emergency contact information and safety tips."
  }
];
export const destionation: Destionation[] = [
  {
    continent: "Europe",
    description:
      "From the romantic streets of Paris to the historic ruins of Rome.",
  },
  {
    continent: "Asia",
    description: "Experience the vibrant cultures and breathtaking landscapes.",
  },
  {
    continent: "North America",
    description: "Adventure awaits in the national parks and bustling cities.",
  },
];
export const countries: Country[] = [
  {
    id: 1,
    infoLink: "https://en.wikipedia.org/wiki/Georgia_(country)",
    img: georgiaFlag,
    name: "Georgia",
    capitalCity: "Tbilisi",
    population: 3688647,
  },
  {
    id: 2,
    infoLink: "https://en.wikipedia.org/wiki/Germany",
    img: germanyFlag,
    name: "Germany",
    capitalCity: "Berlin",
    population: 82719540,
  },
  {
    id: 3,
    infoLink: "https://en.wikipedia.org/wiki/France",
    img: franceFlag,
    name: "France",
    capitalCity: "Paris",
    population: 68373433,
  },
];
