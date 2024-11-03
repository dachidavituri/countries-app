import axios from "axios";
import { randomUUID } from "crypto";
const url = "https://restcountries.com/v3.1/all";
const jsonUrl = "http://localhost:3000/countries";
const fetchAllCountries = async () => {
  let formattedCountries = [];
  try {
    const response = await axios.get(url);
    const countries = response.data;
    formattedCountries = countries.map((country) => ({
      id: randomUUID(),
      infoLink: country.maps.googleMaps,
      name: { ka: country.name.common, en: country.name.common },
      capitalCity: {
        ka:
          country.capital && country.capital.length > 0
            ? country.capital[0]
            : "Unknown",
        en:
          country.capital && country.capital.length > 0
            ? country.capital[0]
            : "Unknown",
      },
      population: country.population,
      like: 0,
      img: country.flags.png,
      detaildInfo: {
        area: country.area,
        region: {
          ka: country.region,
          en: country.region,
        },
        officialLanguage: {
          ka: country.languages
            ? Object.values(country.languages).join(", ")
            : "It is not known",
          en: country.languages
            ? Object.values(country.languages).join(", ")
            : "It is not known",
        },
        currency: {
          ka: country.currencies
            ? Object.values(country.currencies)
                .map((c) => c.name)
                .join(", ")
            : "It is not known",
          en: country.currencies
            ? Object.values(country.currencies)
                .map((c) => c.name)
                .join(", ")
            : "It is not known",
        },
        majorCities: {
          ka:
            country.capital && country.capital.length > 0
              ? country.capital[0]
              : "Unknown",
          en:
            country.capital && country.capital.length > 0
              ? country.capital[0]
              : "Unknown",
        },
        cuisineDescription: {
          ka: "It is not known",
          en: "It is not known",
        },
        independenceDay: {
          ka: "It is not known",
          en: "It is not known",
        },
      },
    }));
  } catch (err) {
    console.log(err);
  }
  for (const country of formattedCountries) {
    try {
      const response = await axios.post(jsonUrl, country);
      console.log("coutries addded successfully");
    } catch (err) {
      console.log(err);
    }
  }
};
fetchAllCountries();
