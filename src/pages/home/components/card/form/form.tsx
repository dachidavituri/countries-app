import styles from "./form.module.css";
import {
  FormEvent,
  ChangeEvent,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { useState } from "react";
import { createFormPlaceholder } from "@/info";
import useLangauge from "@/useLanguage";
import { changeLanugeageTab } from "@/info";
import { validateCountry } from "../validation";
import { Country } from "@/info";
import { CountryUpdates } from "@/info";
import { useRef } from "react";

interface FormProps {
  onCountryCreate: (countryFields: {
    name: { ka: string; en: string };
    capitalCity: { ka: string; en: string };
    population: number;
    infoLink: string;
    img: string;
  }) => void;
  errors: {
    name: { ka: string; en: string };
    capitalCity: { ka: string; en: string };
    population: { ka: string; en: string };
    infoLink: { ka: string; en: string };
    img: { ka: string; en: string };
  };
  onEditId: string;
  countriesList: Country[];
  onCountryUpdate: (id: string, updates: CountryUpdates) => void;
  setEditId: Dispatch<SetStateAction<string>>;
}

const Form: React.FC<FormProps> = ({
  onCountryCreate,
  errors,
  onEditId,
  countriesList,
  onCountryUpdate,
  setEditId,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [activeLang, setActiveLang] = useState<"ka" | "en">("ka");
  const lang = useLangauge();
  const [createForm, setCreateForm] = useState({
    name: { ka: "", en: "" },
    capitalCity: { ka: "", en: "" },
    population: 0,
    infoLink: "",
    img: "",
  });
  useEffect(() => {
    const findCountryToEdit = (id: string) => {
      if (id) {
        const countryToEdit = countriesList.find(
          (country) => country.id === id,
        );
        if (countryToEdit) {
          setCreateForm({
            name: countryToEdit.name,
            capitalCity: countryToEdit.capitalCity,
            population: countryToEdit.population,
            infoLink: countryToEdit.infoLink,
            img: countryToEdit.img,
          });
        }
      }
    };
    if (onEditId) {
      findCountryToEdit(onEditId);
    }
  }, [onEditId, countriesList]);

  const handleChangeState = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCreateForm((prevForm) => ({
      ...prevForm,
      [name]:
        name === "name" || name === "capitalCity"
          ? { ...prevForm[name], [activeLang]: value }
          : value,
    }));
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setCreateForm((prevForm) => ({ ...prevForm, img: base64String }));
      };
      reader.readAsDataURL(file);
    }
  };
  const resetForm = () => {
    setCreateForm({
      name: { ka: "", en: "" },
      capitalCity: { ka: "", en: "" },
      population: 0,
      infoLink: "",
      img: "",
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, capitalCity, population, infoLink, img } = createForm;
    const errors = validateCountry(createForm);
    const hasGeoError = Object.values(errors).some((error) => error.ka);
    const hasEngError = Object.values(errors).some((error) => error.en);
    if (hasGeoError && !hasEngError) setActiveLang("ka");
    if (hasEngError && !hasGeoError) setActiveLang("en");
    if (!hasGeoError && !hasEngError) resetForm();
    const countryToEdit = countriesList.find(
      (country) => country.id == onEditId,
    );
    const updates: CountryUpdates = {
      name,
      capitalCity,
      population,
      infoLink,
      img,
      like: countryToEdit?.like,
      detaildInfo: countryToEdit?.detaildInfo,
    };

    if (onEditId) {
      onCountryUpdate(onEditId, updates);
      const errorsOnUpdate = validateCountry(updates);
      const hasGeoErrorOnUpdate = Object.values(errorsOnUpdate).some(
        (error) => error.ka,
      );
      const hasEngErrorOnUpdate = Object.values(errorsOnUpdate).some(
        (error) => error.en,
      );
      if (hasGeoErrorOnUpdate && !hasEngErrorOnUpdate) setActiveLang("ka");

      if (hasEngErrorOnUpdate && !hasGeoErrorOnUpdate) setActiveLang("en");

      if (!hasGeoErrorOnUpdate && !hasEngErrorOnUpdate) {
        setEditId("");
        resetForm();
      }
    }
    if (!onEditId) {
      onCountryCreate({ name, capitalCity, population, infoLink, img });
    }
  };
  const handleInputLanguage = (lang: "ka" | "en") => {
    setActiveLang(lang);
  };
  return (
    <>
      <div className={styles.inputLanguage}>
        {changeLanugeageTab.map((element, i) => (
          <div
            key={i}
            onClick={() => handleInputLanguage(element.lang)}
            className={activeLang == element.lang ? styles.activeInput : ""}
          >
            {element.language[lang]}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <input
          className={styles.inputField}
          placeholder={createFormPlaceholder[activeLang].name}
          name="name"
          type="text"
          value={createForm.name[activeLang]}
          onChange={handleChangeState}
        />
        <p className={styles.error}>{errors.name[activeLang]}</p>
        <input
          className={styles.inputField}
          placeholder={createFormPlaceholder[activeLang].city}
          name="capitalCity"
          type="text"
          value={createForm.capitalCity[activeLang]}
          onChange={handleChangeState}
        />
        <p className={styles.error}>{errors.capitalCity[activeLang]}</p>
        <input
          className={styles.inputField}
          type="file"
          onChange={handleFileChange}
          accept=".jpg, .png"
          ref={fileInputRef}
        />
        <p className={styles.error}>{errors.img[activeLang]}</p>
        <input
          className={styles.inputField}
          placeholder={createFormPlaceholder[activeLang].population}
          name="population"
          type="number"
          value={createForm.population}
          onChange={handleChangeState}
        />
        <p className={styles.error}>{errors.population[activeLang]}</p>
        <input
          className={styles.inputField}
          placeholder={createFormPlaceholder[activeLang].Infolink}
          name="infoLink"
          type="text"
          value={createForm.infoLink}
          onChange={handleChangeState}
        />
        <p className={styles.error}>{errors.infoLink[activeLang]}</p>
        <input
          className={styles.submitButton}
          type="submit"
          value={
            onEditId
              ? createFormPlaceholder[lang].updateVal
              : createFormPlaceholder[lang].btnVal
          }
        />
      </form>
    </>
  );
};
export default Form;
