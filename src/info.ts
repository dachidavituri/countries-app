import georgiaFlag from "&/georgia-flag.jpg";
import germanyFlag from "&/istockphoto-962789576-612x612.jpg";
import franceFlag from "&/360_F_41940248_NCRNah6ISoHgXXmBEe4heQ0UPXXd1onE.jpg";

interface Categories {
  name: string;
  path: string;
}
interface DetailedInfo {
  id: string;
  officialName: string;
  capital: string;
  population: number;
  area: number;
  region: string;
  officialLanguage: string;
  currency: string;
  majorCities: string;
  cuisineDescription: string;
  independenceDay: string;
  img: string;
}
export const categories: Categories[] = [
  { name: "main", path: "/" },
  { name: "about", path: "/about" },
  { name: "services", path: "/services" },
  { name: "contact", path: "/contact" },
];
export interface Country {
  id: number;
  infoLink: string;
  img: string;
  name: string;
  capitalCity: string;
  population: number;
  like: number
}
export interface Service {
  title: string;
  description: string;
}
export interface Destionation {
  continent: string;
  description: string;
}
export const detailedInfo: DetailedInfo[] = [
  {
    id: "1",
    officialName: "Georgia",
    capital: "Tbilisi",
    population: 3688647,
    area: 69700,
    region: "Eurasia",
    officialLanguage: "Georgian",
    currency: "Georgian Lari (GEL)",
    majorCities: "Tbilisi, Batumi, Kutaisi, Rustavi, Zugdidi",
    cuisineDescription:
      "Georgian cuisine is known for its rich flavors and unique dishes, featuring a variety of fresh herbs and spices. Notable foods include khachapuri (cheese-filled bread), khinkali (dumplings), and pkhali (vegetable spreads). The country is also famous for its wine, with a winemaking tradition that dates back thousands of years, particularly in the Kakheti region.",
    independenceDay: "May 26 (Independence Day)",
    img: georgiaFlag,
  },
  {
    id: "2",
    officialName: "Federal Republic of Germany",
    capital: "Berlin",
    population: 82719540,
    area: 357022,
    region: "Europe",
    officialLanguage: "German",
    currency: "Euro (€)",
    majorCities: "Berlin, Munich, Frankfurt, Hamburg, Cologne",
    cuisineDescription:
      "German cuisine is diverse and hearty, known for its variety of sausages, bread, and regional dishes. Popular foods include bratwurst, sauerkraut, pretzels, and schnitzel, complemented by a wide range of regional beers. Each area has its own specialties, reflecting local traditions and ingredients.",
    independenceDay: "October 3 (German Unity Day)",
    img: germanyFlag,
  },
  {
    id: "3",
    officialName: "French Republic",
    capital: "Paris",
    population: 68373433,
    area: 551695,
    region: "Europe",
    officialLanguage: "French",
    currency: "Euro (€)",
    majorCities: "Paris, Marseille, Lyon, Toulouse, Nice",
    cuisineDescription:
      "French cuisine is renowned worldwide for its diversity and quality, featuring a wide array of regional dishes and cooking styles, from rich sauces and gourmet pastries to fresh seafood and exquisite wines. Notable dishes include coq au vin, bouillabaisse, and various types of cheese.",
    independenceDay: "July 14 (Bastille Day)",
    img: franceFlag,
  },
];
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
    description:
      "We offer resources and advice to keep you safe during your travels, including emergency contact information and safety tips.",
  },
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
    like: 0
  },
  {
    id: 2,
    infoLink: "https://en.wikipedia.org/wiki/Germany",
    img: germanyFlag,
    name: "Germany",
    capitalCity: "Berlin",
    population: 82719540,
    like: 0
  },
  {
    id: 3,
    infoLink: "https://en.wikipedia.org/wiki/France",
    img: franceFlag,
    name: "France",
    capitalCity: "Paris",
    population: 68373433,
    like: 0
  },
];
