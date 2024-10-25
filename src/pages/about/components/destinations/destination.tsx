import useLangauge from "@/useLanguage";
import styles from "./destination.module.css";
import { destination } from "@/info";
const Destinations: React.FC = () => {
  const lang = useLangauge();

  return (
    <section className={styles.destinations}>
      <h3 className={styles.smallTitle}>
        {lang == "ka"
          ? "აღმოაჩინეთ ღირშესანიშნავი ადგილები"
          : "Explore Destinations"}
      </h3>
      <div className={styles.destinationList}>
        {destination.map((desc, index) => (
          <div key={index} className={styles.destination}>
            <h4>{desc.continent[lang]}</h4>
            <p className={styles.desc}>{desc.description[lang]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Destinations;
