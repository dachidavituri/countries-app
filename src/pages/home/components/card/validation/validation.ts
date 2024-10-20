export const validateCountry = (countryFields: {
  name: { ka: string };
  capitalCity: { ka: string };
  population: number;
  infoLink: string;
}) => {
  const errors = {
    name: "",
    capitalCity: "",
    population: "",
    infoLink: "",
  };

  if (countryFields.name.ka?.length < 3) {
    errors.name = "სახელი არ უნდა იყოს 3ზე ნაკლები სიმბოლო";
  }

  if (countryFields.capitalCity.ka?.length < 4) {
    errors.capitalCity = "დედაქალაქი არ უნდა იყოს 3ზე ნაკლები სიმბოლო";
  }

  if (countryFields.population <= 0) {
    errors.population = "მოსახლეობა უნდა იყოს 0_ზე მეტი";
  }

  if (!countryFields.infoLink) {
    errors.infoLink = "ინფორმაცია არ უნდა იყოს ცარიელი";
  }

  return errors;
};
