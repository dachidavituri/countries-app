import { httpClient } from "@/api";
import { Country, CountryUpdates } from "@/info";
import { AxiosResponse } from "axios";
export const getCountries = async () => {
  try {
    const response: AxiosResponse<Country[]> =
      await httpClient.get("/countries");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const getCountryById = async (id: string | undefined) => {
  try {
    const response: AxiosResponse<Country> = await httpClient.get(
      `/countries/${id}`,
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const deleteCountry = async (id: string) => {
  try {
    const response: AxiosResponse<Country> = await httpClient.delete(
      `/countries/${id}`,
    );
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};
export const addCountry = async (countryObj: Country) => {
  try {
    const response: AxiosResponse<Country> = await httpClient.post(
      "/countries",
      countryObj,
    );
    console.log(`country added successfully ${response.data}`);
  } catch (err) {
    console.log(err);
  }
};
export const updateCountry = async (id: string, updates: CountryUpdates) => {
  try {
    const response: AxiosResponse<Country> = await httpClient.put(
      `/countries/${id}`,
      updates,
    );
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
    const response: AxiosResponse<Country> = await httpClient.put(
      `/countries/${id}`,
      updatedCountry,
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error updating country:", error);
  }
};
