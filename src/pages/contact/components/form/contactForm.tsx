import React, { ChangeEvent } from "react";
import styles from "./contactForm.module.css";
import { useState } from "react";
import { validateContact } from "^/contact/validation";
import { labelsLang } from "@/info";
import useLangauge from "@/useLanguage";
const ContactForm: React.FC = () => {
  const lang = useLangauge()
  const currentLabels = labelsLang[lang]
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });
  const handleChangeState = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateContact(form);
    setErrors(errors);
    const hasError = Object.values(errors).some((error) => error !== "");
    if (!hasError) {
      console.log(form);
    } else {
      console.log(currentLabels.errorMsg);
    }
  };
  return (
    <form className={styles.formContainer} onSubmit={handleSubmitForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name">{currentLabels.name}</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChangeState}
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="surname">{currentLabels.surname}</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={form.surname}
          onChange={handleChangeState}
        />
        {errors.surname && <p className={styles.error}>{errors.surname}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">{currentLabels.email}</label>

        <input
          type="text"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChangeState}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">{currentLabels.message}</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChangeState}
        />
        {errors.message && <p className={styles.error}>{errors.message}</p>}
      </div>
      <button type="submit">{currentLabels.submit}</button>
    </form>
  );
};

export default ContactForm;
