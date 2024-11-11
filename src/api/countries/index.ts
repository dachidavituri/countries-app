import { httpClient } from "@/api";
import { Country, CountryUpdates } from "@/info";
export const getCountries = async () => {
  try {
    const response = await httpClient.get<Country[]>("/countries");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

function getNextPageNumber(relType: string, pagination: string) {
  const regex = new RegExp(`<[^>]*[?&]_page=(\\d+)[^>]*>; rel="${relType}"`);
  const match = pagination.match(regex);
  return match ? parseInt(match[1], 10) : null;
}

export const fetchInfiniteCountries = async ({
  per_page,
  page,
}: {
  per_page: number;
  page: number;
}) => {
  try {
    const response = await httpClient.get<Country[]>(
      `/countries?_page=${page}&_limit=${per_page}`,
    );

    return {
      data: response.data,
      nextPage: getNextPageNumber("next", response.headers.link),
    };
  } catch (err) {
    console.log(err);
  }
};

export const getCountriesBySort = async (sortType: "asc" | "desc") => {
  const endpoint = `/countries?_sort=${sortType === "asc" ? "like" : "like&_order=desc"}`;
  try {
    const response = await httpClient.get<Country[]>(endpoint);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const getCountryById = async (id: string | undefined) => {
  try {
    const response = await httpClient.get<Country>(`/countries/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const deleteCountry = async (id: string) => {
  try {
    const response = await httpClient.delete<Country>(`/countries/${id}`);
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};
export const addCountry = async (countryObj: Country) => {
  try {
    const response = await httpClient.post<Country>("/countries", countryObj);
    console.log(`country added successfully ${response.data}`);
  } catch (err) {
    console.log(err);
  }
};
export const updateCountry = async (id: string, updates: CountryUpdates) => {
  try {
    const response = await httpClient.put<Country>(`/countries/${id}`, updates);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const updateCountryLike = async (
  id: string,
  countriesList: Country[],
) => {
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
    const response = await httpClient.put<Country>(
      `/countries/${id}`,
      updatedCountry,
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error updating country:", error);
  }
};
