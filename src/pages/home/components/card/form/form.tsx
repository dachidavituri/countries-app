import styles from "./form.module.css";
import { FormEvent } from "react";
interface FormProps {
  onCountryCreate: (e: FormEvent<HTMLFormElement>) => void;
}
const Form: React.FC<FormProps> = ({ onCountryCreate }) => {
  return (
    <form onSubmit={onCountryCreate} className={styles.formContainer}>
      <input
        className={styles.inputField}
        placeholder="Country Name"
        name="name"
        type="text"
      />
      <input
        className={styles.inputField}
        placeholder="Capital City"
        name="capitalCity"
        type="text"
      />
      <input
        className={styles.inputField}
        placeholder="Population"
        name="population"
        type="number"
      />
      <input
        className={styles.inputField}
        placeholder="Info link"
        name="infoLink"
        type="text"
      />
      <input
        className={styles.submitButton}
        type="submit"
        value="Create Country"
      />
    </form>
  );
};
export default Form;
