import { Country } from "../../../info";
import styles from "./cardContent.module.css";
interface CardContentProps {
  country: Country;
}
const CardContent: React.FC<CardContentProps> = ({ country }) => {
  return (
    <>
      <img src={country.img} className={styles.cardImg} />
      <div className={styles.cardInfo}>
        <h2>დასახელება: {country.name}</h2>
        <h2>დედაქალაქი: {country.capitalCity}</h2>
        <h2>მოსახლეობა: {country.population}</h2>
      </div>
    </>
  );
};
export default CardContent;
