import useLangauge from "@/useLanguage";
import styles from "./information.module.css";
import { about } from "@/info";
const Information: React.FC = () => {
  const lang = useLangauge()
  return (
    <>
      <h2 className={styles.title}>{about[lang].about}</h2>
      <p className={styles.desc}>
      {about[lang].info}
      </p>
      
    </>
  );
};

export default Information;
