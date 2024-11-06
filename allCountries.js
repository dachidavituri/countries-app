import axios from "axios";
import { randomUUID } from "crypto";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const url = "https://restcountries.com/v3.1/all";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const databasePath = join(__dirname, "database.json");

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
  try {
    const database = { countries: formattedCountries };
    writeFileSync(databasePath, JSON.stringify(database, null, 2), "utf-8");
  } catch (err) {
    console.log("error while writing data", err);
  }
};
fetchAllCountries();
