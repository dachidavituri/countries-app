import styles from "./card.module.css";
import { Country } from "@/info";

interface CardProps {
  children: (country: Country) => React.ReactNode;
  countries: Country[];
}
const Card: React.FC<CardProps> = ({ children, countries }) => {
  return (
    <section className={styles.countriesSection}>
      {countries.map((country) => (
        <div className={styles.countryCard} key={country.id}>
          {children(country)}
        </div>
      ))}
    </section>
  );
};
export default Card;
