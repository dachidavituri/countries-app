export const validateCountry = (countryFields: {
  name: { ka: string; en: string };
  capitalCity: { ka: string; en: string };
  population: number;
  infoLink: string;
  img: string;
}) => {
  const errors = {
    name: { ka: "", en: "" },
    capitalCity: { ka: "", en: "" },
    population: { ka: "", en: "" },
    infoLink: { ka: "", en: "" },
    img: { ka: "", en: "" },
  };

  if (countryFields.name.ka.length < 3) {
    errors.name.ka = "სახელი არ უნდა იყოს 3ზე ნაკლები სიმბოლო";
  }
  if (countryFields.name.en.length < 3) {
    errors.name.en = "Name must be at least 3 characters";
  }
  if (countryFields.capitalCity.ka.length < 4) {
    errors.capitalCity.ka = "დედაქალაქი არ უნდა იყოს 4ზე ნაკლები სიმბოლო";
  }
  if (countryFields.capitalCity.en.length < 4) {
    errors.capitalCity.en = "Capital city must be at least 4 characters";
  }
  if (countryFields.population <= 0) {
    errors.population.ka = "მოსახლეობა უნდა იყოს 0_ზე მეტი";
    errors.population.en = "Population must be more than 0";
  }

  if (!countryFields.infoLink) {
    errors.infoLink.ka = "ინფორმაცია არ უნდა იყოს ცარიელი";
    errors.infoLink.en = "Info must not be empty";
  }
  if (!countryFields.img) {
    errors.img.ka = "ატვირთეთ ფოტო";
    errors.img.en = "Upload Photo";
  }

  return errors;
};
