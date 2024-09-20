export const categories: string[] = ["main", "about", "services"];

interface Country {
  img: string;
  name: string;
  capitalCity: string;
  population: number;
}
export const countries: Country[] = [
  {
    img: "src/assets/georgia-flag.jpg",
    name: "Georgia",
    capitalCity: "Tbilisi",
    population: 3688647,
  },
  {
    img: "src/assets/istockphoto-962789576-612x612.jpg",
    name: "Germany",
    capitalCity: "Berlin",
    population: 82719540,
  },
  {
    img: "src/assets/360_F_41940248_NCRNah6ISoHgXXmBEe4heQ0UPXXd1onE.jpg",
    name: "France",
    capitalCity: "Paris",
    population: 68373433,
  },
];
