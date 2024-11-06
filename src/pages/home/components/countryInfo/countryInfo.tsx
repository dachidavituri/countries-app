import styles from "./countryInfo.module.css";
import useLangauge from "@/useLanguage";
import { useParams } from "react-router-dom";
import { detailedTitle } from "@/info";
import { getCountryById } from "@/api/countries";
import { useQuery } from "@tanstack/react-query";
const CountryInfo: React.FC = () => {
  const { id } = useParams();
  const lang = useLangauge();
  const {
    data: detailedCountry,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["countries-list", id],
    queryFn: () => getCountryById(id),
  });
  if (isLoading) {
    return (
      <div className={styles.countryInfo}>
        Country information is loading... Please wait.
      </div>
    );
  }
  if (isError) {
    return (
      <div className={styles.countryInfo}>
        Country information is errored... try again later.
      </div>
    );
  }

  if (!detailedCountry?.detaildInfo) {
    return (
      <div className={styles.countryInfo}>Country information not found.</div>
    );
  }

  return (
    <div className={styles.countryInfo}>
      <h1 className={styles.countryName}>{detailedCountry?.name[lang]}</h1>
      <h2 className={styles.countryCapital}>
        {detailedCountry?.capitalCity[lang]}
      </h2>
      <ul className={styles.countryDetails}>
        <li>
          <strong>{detailedTitle[lang].flag}:</strong>{" "}
          <img src={detailedCountry.img} />
        </li>
        <li>
          <strong>{detailedTitle[lang].population}:</strong>{" "}
          {detailedCountry?.population.toLocaleString()}
        </li>
        <li>
          <strong>{detailedTitle[lang].area}:</strong>{" "}
          {detailedCountry?.detaildInfo?.area.toLocaleString()} km²
        </li>
        <li>
          <strong>{detailedTitle[lang].region}:</strong>{" "}
          {detailedCountry?.detaildInfo?.region[lang]}
        </li>
        <li>
          <strong>{detailedTitle[lang].officialLanguage}:</strong>{" "}
          {detailedCountry?.detaildInfo?.officialLanguage[lang]}
        </li>
        <li>
          <strong>{detailedTitle[lang].currency}:</strong>{" "}
          {detailedCountry?.detaildInfo?.currency[lang]}
        </li>
        <li>
          <strong>{detailedTitle[lang].majorCities}:</strong>{" "}
          {detailedCountry?.detaildInfo?.majorCities[lang]}
        </li>
        <li>
          <strong>{detailedTitle[lang].cuisine}:</strong>{" "}
          {detailedCountry?.detaildInfo?.cuisineDescription[lang]}
        </li>
        <li>
          <strong>{detailedTitle[lang].independenceDay}:</strong>{" "}
          {detailedCountry?.detaildInfo?.independenceDay[lang]}
        </li>
      </ul>
    </div>
  );
};

export default CountryInfo;
