import { PropsWithChildren } from "react";
import styles from "./service.module.css";
import useLangauge from "@/useLanguage";
import { serviceTitle } from "@/info";

const Services: React.FC<PropsWithChildren> = ({ children }) => {
  const lang = useLangauge();
  return (
    <div className={styles.serviceSection}>
      <h2 className={styles.title}>{serviceTitle[lang].service}</h2>
      <section className={styles.services}>
        <h3 className={styles.smallTitle}>{serviceTitle[lang].our}</h3>
        <ul className={styles.serviceList}>{children}</ul>
      </section>
    </div>
  );
};

export default Services;
