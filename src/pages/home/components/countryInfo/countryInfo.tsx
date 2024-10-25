import styles from "./countryInfo.module.css";
import { detailedInfo } from "@/info";
import { detailedTitle } from "@/info";
import useLangauge from "@/useLanguage";
import { useParams } from "react-router-dom";

const CountryInfo: React.FC = () => {
  const { id } = useParams();
  const lang = useLangauge();

  const countryInfo = detailedInfo.find((country) => country.id === id);
  console.log(countryInfo);
  if (!countryInfo) {
    return (
      <div className={styles.countryInfo}>Country information not found.</div>
    );
  }

  return (
    <div className={styles.countryInfo}>
      <h1 className={styles.countryName}>{countryInfo.officialName[lang]}</h1>
      <h2 className={styles.countryCapital}>{countryInfo.capital[lang]}</h2>
      <ul className={styles.countryDetails}>
        <li>
          <strong>{detailedTitle[lang].flag}:</strong>{" "}
          <img src={countryInfo.img} />
        </li>
        <li>
          <strong>{detailedTitle[lang].population}:</strong>{" "}
          {countryInfo.population.toLocaleString()}
        </li>
        <li>
          <strong>{detailedTitle[lang].area}:</strong>{" "}
          {countryInfo.area.toLocaleString()} km²
        </li>
        <li>
          <strong>{detailedTitle[lang].region}:</strong>{" "}
          {countryInfo.region[lang]}
        </li>
        <li>
          <strong>{detailedTitle[lang].officialLanguage}:</strong>{" "}
          {countryInfo.officialLanguage[lang]}
        </li>
        <li>
          <strong>{detailedTitle[lang].currency}:</strong>{" "}
          {countryInfo.currency[lang]}
        </li>
        <li>
          <strong>{detailedTitle[lang].majorCities}:</strong>{" "}
          {countryInfo.majorCities[lang]}
        </li>
        <li>
          <strong>{detailedTitle[lang].cuisine}:</strong>{" "}
          {countryInfo.cuisineDescription[lang]}
        </li>
        <li>
          <strong>{detailedTitle[lang].independenceDay}:</strong>{" "}
          {countryInfo.independenceDay[lang]}
        </li>
      </ul>
    </div>
  );
};

export default CountryInfo;
