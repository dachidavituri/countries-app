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
import { FormEvent } from "react";

interface CardProps {
  children: (country: Country) => React.ReactNode;
}
const Card: React.FC<CardProps> = ({ children }) => {
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
  const handleCountryCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const country: Country = {
      id: 0,
      like: 0,
      img: "https://via.placeholder.com/300",
      name: formData.get("name") as string,
      capitalCity: formData.get("capitalCity") as string,
      population: Number(formData.get("population")),
      infoLink: formData.get("infoLink") as string,
      isDeleted: false,
    };
    if (
      !country.name ||
      !country.capitalCity ||
      !country.population ||
      !country.infoLink
    ) {
      alert("Please fill all fields");
      return;
    }
    dispatch({ type: "create", payload: { country } });
    e.currentTarget.reset();
  };
  const sortedByDelete = countriesList.slice().sort((a, b) => {
    if (a.isDeleted && !b.isDeleted) return 1;
    if (!a.isDeleted && b.isDeleted) return -1;
    return 0;
  });
  return (
    <section className={styles.countriesSection}>
      <div className={styles.additional}>
        <Form onCountryCreate={handleCountryCreate} />
        <Sort sortCountriesByLike={sortCountriesByLike} />
      </div>
      <div className={styles.countries}>
        {sortedByDelete.map((country) => (
          <div>
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
                to={`country/${String(country.id)}`}
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
