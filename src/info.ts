import georgiaFlag from "&/georgia-flag.jpg";
import germanyFlag from "&/istockphoto-962789576-612x612.jpg";
import franceFlag from "&/360_F_41940248_NCRNah6ISoHgXXmBEe4heQ0UPXXd1onE.jpg";
export const categories: string[] = ["main", "about", "services"];

export interface Country {
  id: number;
  infoLink: string;
  img: string;
  name: string;
  capitalCity: string;
  population: number;
}
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
