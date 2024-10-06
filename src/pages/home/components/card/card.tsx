import styles from "./card.module.css";
import { Country } from "@/info";
import { Link } from "react-router-dom";
import CardFooter from "./footer";

interface CardProps {
  children: (country: Country) => React.ReactNode;
  countries: Country[];
}
const Card: React.FC<CardProps> = ({ children, countries }) => {
  return (
    <section className={styles.countriesSection}>
      {countries.map((country) => (
        <div className={styles.countryCard} key={country.id}>
          <Link
            key={country.id}
            to={String(country.id)}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {children(country)}
          </Link>
          <CardFooter link={country.infoLink} />
        </div>
      ))}
    </section>
  );
};
export default Card;
