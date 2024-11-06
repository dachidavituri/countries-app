import styles from "./card.module.css";
import CardFooter from "./footer";
import Like from "./likes";
import Sort from "./btnsSort";
import Form from "./form";
import Delete from "./delete";
import { Country } from "@/info";
import { Link } from "react-router-dom";
import { useState } from "react";
import { validateCountry } from "./validation";
import { CountryUpdates } from "@/info";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addCountry,
  deleteCountry,
  getCountries,
  updateCountry,
  updateCountryLike,
} from "@/api/countries";
import { queryClient } from "@/main";

interface CardProps {
  children: (country: Country) => React.ReactNode;
  lang: "ka" | "en";
}
const Card: React.FC<CardProps> = ({ children, lang }) => {
  const [editId, setEditId] = useState<string>("");
  const [errors, setErrors] = useState({
    name: { ka: "", en: "" },
    capitalCity: { ka: "", en: "" },
    population: { ka: "", en: "" },
    infoLink: { ka: "", en: "" },
    img: { ka: "", en: "" },
  });
  const {
    data: countries,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["countries-list"],
    queryFn: getCountries,
  });
  const { mutate: mutateDelete } = useMutation({
    mutationFn: (id: string) => deleteCountry(id),
    onSuccess: () => refetch(),
  });
  const { mutate: mutateUpvote } = useMutation({
    mutationFn: ({ id, countries }: { id: string; countries: Country[] }) =>
      updateCountryLike(id, countries),
  });
  const { mutate: mutateUpdateCountry } = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: CountryUpdates }) =>
      updateCountry(id, updates),
    onSuccess: () => refetch(),
  });
  const { mutate: mutateCreateCountry, isPending } = useMutation({
    mutationFn: (country: Country) => addCountry(country),
    onSuccess: () => refetch(),
  });
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

  const handleCountryUpvote = (id: string) => {
    queryClient.setQueryData(["countries-list"], (oldData: Country[]) => {
      return oldData.map((country) =>
        country.id === id ? { ...country, like: country.like + 1 } : country,
      );
    });
    if (countries) {
      mutateUpvote({ id, countries });
    }
  };
  const sortCountriesByLike = (sortType: "asc" | "desc") => {
    if (!Array.isArray(countries)) return;
    const sortedCountries = [...countries].sort((a, b) => {
      return sortType === "asc" ? a.like - b.like : b.like - a.like;
    });
    queryClient.setQueryData(["countries-list"], sortedCountries);
  };
  const handledeleteCountry = (id: string) => {
    mutateDelete(id);
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
        id: String(countries && countries.length + 1),
        like: 0,
        detaildInfo: null,
      };
      mutateCreateCountry(country);
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
    mutateUpdateCountry({ id, updates });
  };
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <section className={styles.countriesSection}>
      <div className={styles.additional}>
        <Form
          onCountryCreate={handleCountryCreate}
          errors={errors}
          onEditId={editId}
          countriesList={countries}
          onCountryUpdate={handleCountryUpdate}
          setEditId={setEditId}
          isPending={isPending}
        />
        <Sort sortCountriesByLike={sortCountriesByLike} />
      </div>
      <div className={styles.countries}>
        {Array.isArray(countries) &&
          countries.map((country) => (
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
