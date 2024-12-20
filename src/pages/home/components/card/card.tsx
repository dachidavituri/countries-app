import styles from "./card.module.css";
import CardFooter from "./footer";
import Like from "./likes";
import Sort from "./btnsSort";
import Form from "./form";
import Delete from "./delete";
import { Page } from "@/info";
import { QueryData } from "@/info";
import { Country } from "@/info";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { validateCountry } from "./validation";
import { CountryUpdates } from "@/info";
import { useQueryClient } from "@tanstack/react-query";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useSearchParams } from "react-router-dom";
import { useQuery, useMutation, useInfiniteQuery } from "@tanstack/react-query";
import {
  getCountriesBySort,
  addCountry,
  updateCountry,
  deleteCountry,
  updateCountryLike,
  fetchInfiniteCountries,
} from "@/api/countries";
interface CardProps {
  children: (country: Country) => React.ReactNode;
  lang: "ka" | "en";
}
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
    data: countries,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["countries"],
    queryFn: ({ pageParam }) =>
      fetchInfiniteCountries({ per_page: 2, page: pageParam }),
    getNextPageParam: (lastGroup) => lastGroup?.nextPage,
    initialPageParam: 1,
  });
  const { data: countriesSorted, refetch: refetchSorted } = useQuery({
    queryKey: ["countries-ordered-list", searchParams.get("sort")],
    queryFn: () => {
      const sortType = searchParams.get("sort") as "asc" | "desc";
      return getCountriesBySort(sortType);
    },
    enabled: Boolean(searchParams.get("sort")),
  });
  // delete country
  const { mutate: mutateDelete } = useMutation({
    mutationFn: (id: string) => deleteCountry(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["countries"],
      });
    },
  });
  // update like in country
  const { mutate: mutateUpvote } = useMutation({
    mutationFn: ({ id, countries }: { id: string; countries: Country[] }) =>
      updateCountryLike(id, countries),
  });
  //   update whole country
  const { mutate: mutateUpdateCountry } = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: CountryUpdates }) =>
      updateCountry(id, updates),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["countries"],
      });
    },
  });
  // create country
  const { mutate: mutateCreateCountry, isPending } = useMutation({
    mutationFn: (country: Country) => addCountry(country),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["countries"],
      });
    },
  });
  const sortCountriesByLike = (sortType: "asc" | "desc") => {
    refetchSorted();
    setSearchParams({ sort: sortType });
  };
  const handleCountryUpvote = (id: string) => {
    const allCountries =
      countries?.pages.flatMap((page) => page?.data || []) || [];
    queryClient.setQueryData(["countries"], (oldData: QueryData) => {
      const currentData = oldData?.pages || [];
      const updatedPages = currentData.map((page: Page) => {
        return {
          ...page,
          data: page.data.map((country: Country) =>
            country.id === id
              ? { ...country, like: country.like + 1 }
              : country,
          ),
        };
      });

      return { ...oldData, pages: updatedPages };
    });
    if (allCountries.length > 0) {
      mutateUpvote({ id, countries: allCountries });
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
        id: String(allRows.length + 1),
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

  const allRows = countries
    ? countries.pages.flatMap((d) => d?.data || [])
    : [];

  const parentRef = useRef<HTMLDivElement>(null);
  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? allRows.length + 1 : allRows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 600,
  });

  const virtualItems = rowVirtualizer.getVirtualItems();

  useEffect(() => {
    const [lastItem] = [...virtualItems].reverse();

    if (!lastItem) {
      return;
    }

    if (
      lastItem.index >= allRows.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    hasNextPage,
    fetchNextPage,
    allRows.length,
    isFetchingNextPage,
    virtualItems,
  ]);

  return (
    <section className={styles.countriesSection}>
      <div className={styles.additional}>
        <Form
          onCountryCreate={handleCountryCreate}
          errors={errors}
          onEditId={editId}
          countriesList={allRows}
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
          {virtualItems.map((virtualRow) => {
            const isLoaderRow = virtualRow.index > allRows.length - 1;
            const post = allRows[virtualRow.index];
            let country: Country | undefined;
            if (countriesSorted) {
              country = countriesSorted[virtualRow.index];
            } else {
              country = post;
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
                {isLoaderRow ? (
                  hasNextPage ? (
                    "Loading more..."
                  ) : (
                    "Nothing more to load"
                  )
                ) : (
                  <>
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
                          onDeleteCountry={() =>
                            handledeleteCountry(country.id)
                          }
                        />
                      </div>
                      <CardFooter link={country.infoLink} />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Card;
