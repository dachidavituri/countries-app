import styles from "./form.module.css";
import { FormEvent, ChangeEvent } from "react";
import { useState } from "react";
import { createFormPlaceholder } from "@/info";
import useLangauge from "@/useLanguage";
interface FormProps {
  onCountryCreate: (countryFields: {
    name: { ka: string };
    capitalCity: { ka: string };
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
  const lang = useLangauge();
  const [createForm, setCreateForm] = useState({
    name: { ka: "" },
    capitalCity: { ka: "" },
    population: 0,
    infoLink: "",
  });
  const handleChangeState = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") {
      setCreateForm((prevForm) => ({
        ...prevForm,
        name: { ...prevForm.name, ka: value },
      }));
    } else if (name === "capitalCity") {
      setCreateForm((prevForm) => ({
        ...prevForm,
        capitalCity: { ...prevForm.capitalCity, ka: value },
      }));
    } else {
      setCreateForm((prevForm) => ({ ...prevForm, [name]: value }));
    }
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
        placeholder={createFormPlaceholder[lang].name}
        name="name"
        type="text"
        value={createForm.name.ka}
        onChange={handleChangeState}
      />
      <p className={styles.error}>{errors.name}</p>
      <input
        className={styles.inputField}
        placeholder={createFormPlaceholder[lang].city}
        name="capitalCity"
        type="text"
        value={createForm.capitalCity.ka}
        onChange={handleChangeState}
      />
      <p className={styles.error}>{errors.capitalCity}</p>

      <input
        className={styles.inputField}
        placeholder={createFormPlaceholder[lang].population}
        name="population"
        type="number"
        value={createForm.population}
        onChange={handleChangeState}
      />
      <p className={styles.error}>{errors.population}</p>

      <input
        className={styles.inputField}
        placeholder={createFormPlaceholder[lang].Infolink}
        name="infoLink"
        type="text"
        value={createForm.infoLink}
        onChange={handleChangeState}
      />
      <p className={styles.error}>{errors.infoLink}</p>

      <input
        className={styles.submitButton}
        type="submit"
        value={createFormPlaceholder[lang].btnVal}
      />
    </form>
  );
};
export default Form;
