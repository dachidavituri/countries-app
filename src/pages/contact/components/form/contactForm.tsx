import React from "react";
import styles from "./contactForm.module.css";

const ContactForm: React.FC = () => {
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    console.log(data);
  };
  return (
    <form className={styles.formContainer} onSubmit={handleSubmitForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name">სახელი:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="surname">გვარი:</label>
        <input type="text" id="surname" name="surname" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">შეტყობინება:</label>
        <textarea id="message" name="message" required />
      </div>
      <button type="submit">გაგზავნა</button>
    </form>
  );
};

export default ContactForm;
