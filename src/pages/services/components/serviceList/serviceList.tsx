import { Service } from "@/info";
import styles from "./serviceList.module.css";
import useLangauge from "@/useLanguage";
interface serviceListProps {
  service: Service;
}
const ServiceList: React.FC<serviceListProps> = ({ service }) => {
  const lang = useLangauge()
  
  return (
    <li className={styles.serviceItem}>
      <h4>{service.title[lang]}</h4>
      <p>{service.description[lang]}</p>
    </li>
  );
};
export default ServiceList;
