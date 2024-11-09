import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getCountries,
  getCountriesBySort,
  addCountry,
  updateCountry,
  deleteCountry,
  updateCountryLike,
} from "@/api/countries";
import { Country, CountryUpdates } from "@/info";
export const useFetch = (searchParams: URLSearchParams) => {
  // all country
  const {
    data: countries,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["countries-list"],
    queryFn: getCountries,
  });
  //   sorted country
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
    onSuccess: () => refetch(),
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
    onSuccess: () => refetch(),
  });
  // create country
  const { mutate: mutateCreateCountry, isPending } = useMutation({
    mutationFn: (country: Country) => addCountry(country),
    onSuccess: () => refetch(),
  });
  return {
    countries,
    isLoading,
    refetch,
    countriesSorted,
    refetchSorted,
    mutateDelete,
    mutateUpvote,
    mutateCreateCountry,
    mutateUpdateCountry,
    isPending,
  };
};
