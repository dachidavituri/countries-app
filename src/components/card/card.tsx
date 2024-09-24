import { countries } from "../../info";
import styles from "./card.module.css";
import CardContent from "./card-content/cardContent";
import CardHeader from "./card-header/cardHeader";
import CardFooter from "./card-footer/cardFooter";
const Card: React.FC = () => {
  return (
    <section className={styles.countriesSection}>
      {countries.map((country) => (
        <div className={styles.countryCard}>
          <CardHeader />
          <CardContent country={country} />
          <CardFooter link={country.infoLink} />
        </div>
      ))}
    </section>
  );
};
export default Card;
