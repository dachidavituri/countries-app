import styles from "./card.module.css";
import CardFooter from "./footer";
import Like from "./likes";
import Sort from "./btnsSort";
import Form from "./form";
import Delete from "./delete";
import { Country } from "@/info";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { validateCountry } from "./validation";
import { CountryUpdates } from "@/info";
import { useQueryClient } from "@tanstack/react-query";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
interface CardProps {
  children: (country: Country) => React.ReactNode;
  lang: "ka" | "en";
}
// make with limit http://localhost:3000/countries?_limit=22
const Card: React.FC<CardProps> = ({ children, lang }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const [editId, setEditId] = useState<string>("");
  const [errors, setErrors] = useState({
    name: { ka: "", en: "" },
    capitalCity: { ka: "", en: "" },
    population: { ka: "", en: "" },
    infoLink: { ka: "", en: "" },
    img: { ka: "", en: "" },
  });
  const {
    countries,
    isLoading,
    countriesSorted,
    refetchSorted,
    mutateDelete,
    mutateUpvote,
    mutateCreateCountry,
    mutateUpdateCountry,
    isPending,
  } = useFetch(searchParams);

  const sortCountriesByLike = (sortType: "asc" | "desc") => {
    refetchSorted();
    setSearchParams({ sort: sortType });
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
  const parentRef = useRef<HTMLDivElement>(null);
  const rowVirtualizer = useVirtualizer({
    count: countries ? countries.length : 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 600,
  });
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
      <div className={styles.countries} ref={parentRef}>
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            let country: Country | undefined;
            if (countriesSorted) {
              country = countriesSorted[virtualRow.index];
            } else {
              country = countries ? countries[virtualRow.index] : undefined;
            }
            if (!country) return null;
            return (
              <div
                key={country.id}
                className={styles.wholeCountry}
                style={{
                  top: virtualRow.start,
                  height: virtualRow.size,
                }}
              >
                <button
                  onClick={() => handleEdit(country.id)}
                  className={styles.editBtn}
                >
                  {lang == "en" ? "edit" : "რედაქტირება"}
                </button>
                <div className={styles.countryCard} key={country.id}>
                  <Link
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Card;
