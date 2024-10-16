import React, { ChangeEvent } from "react";
import styles from "./contactForm.module.css";
import { useState } from "react";
import { validateContact } from "^/contact/validation";
const ContactForm: React.FC = () => {
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
      console.log("შენ გაქვს შეცდომა შეავსე სწორად");
    }
  };
  return (
    <form className={styles.formContainer} onSubmit={handleSubmitForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name">სახელი:</label>
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
        <label htmlFor="surname">გვარი:</label>
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
        <label htmlFor="email">Email:</label>

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
        <label htmlFor="message">შეტყობინება:</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChangeState}
        />
        {errors.message && <p className={styles.error}>{errors.message}</p>}
      </div>
      <button type="submit">გაგზავნა</button>
    </form>
  );
};

export default ContactForm;
