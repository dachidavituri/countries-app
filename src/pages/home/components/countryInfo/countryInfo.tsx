import styles from "./countryInfo.module.css";
import { detailedInfo } from "@/info";
import { useParams } from "react-router-dom";

const CountryInfo: React.FC = () => {
  const { id } = useParams();
  const countryInfo = detailedInfo.find((country) => country.id === id);
  console.log(countryInfo);
  if (!countryInfo) {
    return (
      <div className={styles.countryInfo}>Country information not found.</div>
    );
  }

  return (
    <div className={styles.countryInfo}>
      <h1 className={styles.countryName}>{countryInfo.officialName}</h1>
      <h2 className={styles.countryCapital}>{countryInfo.capital}</h2>
      <ul className={styles.countryDetails}>
        <li>
          <strong>Flag:</strong> <img src={countryInfo.img} />
        </li>
        <li>
          <strong>Population:</strong> {countryInfo.population.toLocaleString()}
        </li>
        <li>
          <strong>Area:</strong> {countryInfo.area.toLocaleString()} km²
        </li>
        <li>
          <strong>Region:</strong> {countryInfo.region}
        </li>
        <li>
          <strong>Official Language:</strong> {countryInfo.officialLanguage}
        </li>
        <li>
          <strong>Currency:</strong> {countryInfo.currency}
        </li>
        <li>
          <strong>Major Cities:</strong> {countryInfo.majorCities}
        </li>
        <li>
          <strong>Cuisine:</strong> {countryInfo.cuisineDescription}
        </li>
        <li>
          <strong>Independence Day:</strong> {countryInfo.independenceDay}
        </li>
      </ul>
    </div>
  );
};

export default CountryInfo;
