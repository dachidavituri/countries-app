export const validateContact = (contact: {
  name: string;
  surname: string;
  email: string;
  message: string;
}) => {
  const errors = {
    name: "",
    surname: "",
    email: "",
    message: "",
  };

  if (contact.name.length < 3) {
    errors.name = "სახელი არ უნდა იყოს 3ზე ნაკლები სიგრძის";
  }

  if (contact.surname.length < 4) {
    errors.surname = "გვარი არ უნდა იყოს 3ზე ნაკლები სიგრძის";
  }

  if (contact.email.length < 10) {
    errors.email = "Email სიგრძე უნდა იყოს 10 ან მეტი";
  } else if (!contact.email.includes("@")) {
    errors.email = "Email უნდა შეიცავდეს @";
  }

  if (!contact.message) {
    errors.message = "შეავსეთ შეტყობინება";
  }

  return errors;
};
