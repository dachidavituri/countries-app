import styles from "./card.module.css";
import { Country } from "@/info";
import { Link } from "react-router-dom";
import CardFooter from "./footer";
import { useState } from "react";
import { countries } from "@/info";
import Like from "./likes";
import Sort from "^/home/components/btnsSort";
interface CardProps {
  children: (country: Country) => React.ReactNode;
}
const Card: React.FC<CardProps> = ({ children }) => {
  const [countriesList, setCountriesList] = useState(countries);
  const handleCountryUpvote = (id: number) => {
    const updatedCountryList = countriesList.map((country) => {
      if (country.id === id) {
        return { ...country, like: country.like + 1 };
      }
      return { ...country };
    });
    setCountriesList(updatedCountryList);
  };
  const sortCountriesAsc = () => {
    const sorted = [...countriesList].sort((a, b) => a.like - b.like);
    setCountriesList(sorted);
  };
  const sortCountriesDesc = () => {
    const sorted = [...countriesList].sort((a, b) => b.like - a.like);
    setCountriesList(sorted);
  };
  return (
    <section className={styles.countriesSection}>
      <Sort
        sortCountriesAsc={sortCountriesAsc}
        sortCountriesDesc={sortCountriesDesc}
      />
      <div className={styles.countries}>
        {countriesList.map((country) => (
          <div className={styles.countryCard} key={country.id}>
            <Link
              key={country.id}
              to={`country/${String(country.id)}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {children(country)}
            </Link>
            <Like
              country={country}
              upVote={() => handleCountryUpvote(country.id)}
            />
            <CardFooter link={country.infoLink} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Card;
