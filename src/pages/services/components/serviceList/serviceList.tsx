import { Service } from "@/info";
import styles from "./serviceList.module.css";
interface serviceListProps {
  service: Service;
}
const ServiceList: React.FC<serviceListProps> = ({ service }) => {
  return (
    <li className={styles.serviceItem}>
      <h4>{service.title}</h4>
      <p>{service.description}</p>
    </li>
  );
};
export default ServiceList;
