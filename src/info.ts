export const categories: string[] = ["main", "about", "services"];

export interface Country {
  infoLink: string;
  img: string;
  name: string;
  capitalCity: string;
  population: number;
}
export const countries: Country[] = [
  {
    infoLink: "https://en.wikipedia.org/wiki/Georgia_(country)",
    img: "src/assets/georgia-flag.jpg",
    name: "Georgia",
    capitalCity: "Tbilisi",
    population: 3688647,
  },
  {
    infoLink: "https://en.wikipedia.org/wiki/Germany",
    img: "src/assets/istockphoto-962789576-612x612.jpg",
    name: "Germany",
    capitalCity: "Berlin",
    population: 82719540,
  },
  {
    infoLink: "https://en.wikipedia.org/wiki/France",
    img: "src/assets/360_F_41940248_NCRNah6ISoHgXXmBEe4heQ0UPXXd1onE.jpg",
    name: "France",
    capitalCity: "Paris",
    population: 68373433,
  },
];
