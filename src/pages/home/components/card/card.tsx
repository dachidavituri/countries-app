import styles from "./card.module.css";
import CardFooter from "./footer";
import Like from "./likes";
import Sort from "./btnsSort";
import Form from "./form";
import Delete from "./delete";
import Restore from "./restore";
import { Country } from "@/info";
import { Link } from "react-router-dom";
import { useReducer } from "react";
import { countries } from "@/info";
import { reducer } from "^/home/components/card/reducer";
import { useState } from "react";
import { validateCountry } from "./validation";

interface CardProps {
  children: (country: Country) => React.ReactNode;
  lang: "ka" | "en";
}
const Card: React.FC<CardProps> = ({ children, lang }) => {
  const [errors, setErrors] = useState({
    name: { ka: "", en: "" },
    capitalCity: { ka: "", en: "" },
    population: { ka: "", en: "" },
    infoLink: { ka: "", en: "" },
    img: { ka: "", en: "" },
  });
  const [countriesList, dispatch] = useReducer(reducer, countries);
  const handleCountryUpvote = (id: number) => {
    dispatch({ type: "upvote", payload: { id } });
  };
  const sortCountriesByLike = (sortType: "asc" | "desc") => {
    dispatch({ type: "sort", payload: { sortType } });
  };
  const handledeleteCountry = (id: number) => {
    dispatch({ type: "delete", payload: { id } });
  };
  const handleRestoreCountry = (id: number) => {
    dispatch({ type: "restore", payload: { id } });
  };
  const handleCountryCreate = (countryFields: {
    name: { ka: string; en: string };
    capitalCity: { ka: string; en: string };
    population: number;
    infoLink: string;
    img: string;
  }) => {
    const errors = validateCountry(countryFields);
    setErrors(errors);
    const hasError = Object.values(errors).some(
      (error) => error.ka !== "" || error.en !== "",
    );
    if (!hasError) {
      const country: Country = {
        ...countryFields,
        id: 0,
        like: 0,
        isDeleted: false,
      };
      dispatch({ type: "create", payload: { country } });
    }
  };
  const sortedByDelete = countriesList.slice().sort((a, b) => {
    if (a.isDeleted && !b.isDeleted) return 1;
    if (!a.isDeleted && b.isDeleted) return -1;
    return 0;
  });
  return (
    <section className={styles.countriesSection}>
      <div className={styles.additional}>
        <Form onCountryCreate={handleCountryCreate} errors={errors} />
        <Sort sortCountriesByLike={sortCountriesByLike} />
      </div>
      <div className={styles.countries}>
        {sortedByDelete.map((country) => (
          <div key={country.id}>
            <Restore onRestore={() => handleRestoreCountry(country.id)} />
            <div
              className={`${styles.countryCard} ${
                country.isDeleted ? styles.deleted : ""
              }`}
              key={country.id}
              style={{ pointerEvents: country.isDeleted ? "none" : "auto" }}
            >
              <Link
                key={country.id}
                to={`/${lang}/country/${String(country.id)}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {children(country)}
              </Link>
              <div className={styles.likeDelete}>
                <Like
                  country={country}
                  upVote={() => handleCountryUpvote(country.id)}
                />
                <Delete
                  onDeleteCountry={() => handledeleteCountry(country.id)}
                />
              </div>
              <CardFooter link={country.infoLink} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Card;
