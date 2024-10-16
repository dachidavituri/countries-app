import styles from "./form.module.css";
import { FormEvent, ChangeEvent } from "react";
import { useState } from "react";
interface FormProps {
  onCountryCreate: (countryFields: {
    name: string;
    capitalCity: string;
    population: number;
    infoLink: string;
  }) => void;
  errors: {
    name: string;
    capitalCity: string;
    population: string;
    infoLink: string;
  };
}
const Form: React.FC<FormProps> = ({ onCountryCreate, errors }) => {
  const [createForm, setCreateForm] = useState({
    name: "",
    capitalCity: "",
    population: 0,
    infoLink: "",
  });
  const handleChangeState = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreateForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, capitalCity, population, infoLink } = createForm;
    onCountryCreate({ name, capitalCity, population, infoLink });
  };
  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        className={styles.inputField}
        placeholder="Country Name"
        name="name"
        type="text"
        value={createForm.name}
        onChange={handleChangeState}
      />
      <p className={styles.error}>{errors.name}</p>
      <input
        className={styles.inputField}
        placeholder="Capital City"
        name="capitalCity"
        type="text"
        value={createForm.capitalCity}
        onChange={handleChangeState}
      />
      <p className={styles.error}>{errors.capitalCity}</p>

      <input
        className={styles.inputField}
        placeholder="Population"
        name="population"
        type="number"
        value={createForm.population}
        onChange={handleChangeState}
      />
      <p className={styles.error}>{errors.population}</p>

      <input
        className={styles.inputField}
        placeholder="Info link"
        name="infoLink"
        type="text"
        value={createForm.infoLink}
        onChange={handleChangeState}
      />
      <p className={styles.error}>{errors.infoLink}</p>

      <input
        className={styles.submitButton}
        type="submit"
        value="Create Country"
      />
    </form>
  );
};
export default Form;
