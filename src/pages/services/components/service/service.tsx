import { PropsWithChildren } from "react";
import styles from "./service.module.css";

const Services: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.serviceSection}>
      <h2 className={styles.title}>SERVICES</h2>
      <section className={styles.services}>
        <h3 className={styles.smallTitle}>Our Services</h3>
        <ul className={styles.serviceList}>{children}</ul>
      </section>
    </div>
  );
};

export default Services;
