import styles from "./countryInfo.module.css";
import useLangauge from "@/useLanguage";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { detailedTitle } from "@/info";
import { Country } from "@/info";

const CountryInfo: React.FC = () => {
  const [detailedCountry, setDetailedCountry] = useState<Country | null>(null);
  const { id } = useParams();
  const lang = useLangauge();
  useEffect(() => {
    const getCountryById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/countries/${id}`,
        );
        setDetailedCountry(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCountryById();
  }, [id]);
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
