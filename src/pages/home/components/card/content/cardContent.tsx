import { Country } from "@/info";
import styles from "./cardContent.module.css";
import { labelsCard } from "@/info";
interface CardContentProps {
  country: Country;
  lang: "ka" | "en";
}
const CardContent: React.FC<CardContentProps> = ({ country, lang }) => {
  return (
    <>
      <img src={country.img} className={styles.cardImg} />
      <div className={styles.cardInfo}>
        <h2>
          {labelsCard[lang].name}: {country.name[lang]}
        </h2>
        <h2>
          {labelsCard[lang].city}: {country.capitalCity[lang]}
        </h2>
        <h2>
          {labelsCard[lang].population}: {country.population}
        </h2>
      </div>
    </>
  );
};
export default CardContent;
