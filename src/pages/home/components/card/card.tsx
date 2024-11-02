import styles from "./card.module.css";
import CardFooter from "./footer";
import Like from "./likes";
import Sort from "./btnsSort";
import Form from "./form";
import Delete from "./delete";
import { Country } from "@/info";
import { Link } from "react-router-dom";
import { useReducer } from "react";
import { reducer } from "^/home/components/card/reducer";
import { useState } from "react";
import { validateCountry } from "./validation";
import { useEffect } from "react";
import axios from "axios";
import { CountryUpdates } from "@/info";

interface CardProps {
  children: (country: Country) => React.ReactNode;
  lang: "ka" | "en";
}
const Card: React.FC<CardProps> = ({ children, lang }) => {
  const [countriesList, dispatch] = useReducer(reducer, []);
  const [editId, setEditId] = useState<string>("");
  // functions  for api calls -------------
  const deleteCountry = async (id: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/countries/${id}`,
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addCountry = async (countryObj: Country) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/countries",
        countryObj,
      );
      console.log(`country added successfully ${response.data}`);
    } catch (err) {
      console.log(err);
    }
  };
  const updateCountryLike = async (id: string) => {
    const country = countriesList.find((country) => country.id === id);
    if (!country) {
      console.error(`Country with id ${id} not found`);
      return;
    }
    const updatedCountry = {
      ...country,
      like: country.like + 1,
    };
    try {
      const response = await axios.put(
        `http://localhost:3000/countries/${id}`,
        updatedCountry,
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error updating country:", error);
    }
  };
  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/countries`);
        dispatch({ type: "get_initial_country", payload: response.data });
      } catch (err) {
        console.log(`error while fetching ${err}`);
      }
    };
    getCountries();
  }, []);
  // functions  for api calls -------------
  const handleEdit = (id: string) => {
    setEditId(id);
    setErrors({
      name: { ka: "", en: "" },
      capitalCity: { ka: "", en: "" },
      population: { ka: "", en: "" },
      infoLink: { ka: "", en: "" },
      img: { ka: "", en: "" },
    });
  };
  const [errors, setErrors] = useState({
    name: { ka: "", en: "" },
    capitalCity: { ka: "", en: "" },
    population: { ka: "", en: "" },
    infoLink: { ka: "", en: "" },
    img: { ka: "", en: "" },
  });
  const handleCountryUpvote = (id: string) => {
    dispatch({ type: "upvote", payload: { id } });
    updateCountryLike(id);
  };
  const sortCountriesByLike = (sortType: "asc" | "desc") => {
    dispatch({ type: "sort", payload: { sortType } });
  };
  const handledeleteCountry = (id: string) => {
    dispatch({ type: "delete", payload: { id } });
    deleteCountry(id);
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
        id: String(countriesList.length + 1),
        like: 0,
        detaildInfo: null,
      };
      dispatch({ type: "create", payload: { country } });
      addCountry(country);
    }
  };
  const handleCountryUpdate = async (id: string, updates: CountryUpdates) => {
    const errors = validateCountry(updates);
    setErrors(errors);
    const hasError = Object.values(errors).some(
      (error) => error.ka !== "" || error.en !== "",
    );
    if (hasError) {
      return;
    }

    dispatch({ type: "update", payload: { id, updates } });

    try {
      const response = await axios.put(
        `http://localhost:3000/countries/${id}`,
        updates,
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={styles.countriesSection}>
      <div className={styles.additional}>
        <Form
          onCountryCreate={handleCountryCreate}
          errors={errors}
          onEditId={editId}
          countriesList={countriesList}
          onCountryUpdate={handleCountryUpdate}
          setEditId={setEditId}
        />
        <Sort sortCountriesByLike={sortCountriesByLike} />
      </div>
      <div className={styles.countries}>
        {countriesList.map((country) => (
          <div key={country.id}>
            <button
              onClick={() => handleEdit(country.id)}
              className={styles.editBtn}
            >
              {lang == "en" ? "edit" : "რედაქტირება"}
            </button>
            <div className={`${styles.countryCard}`} key={country.id}>
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
