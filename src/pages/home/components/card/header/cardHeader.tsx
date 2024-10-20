import styles from "./cardHeader.module.css";
import { cardHeaderContent } from "@/info";
interface CardHeaderProps {
  lang: "ka" | "en";
}
const CardHeader: React.FC<CardHeaderProps> = ({ lang }) => {
  return <div className={styles.header}>{cardHeaderContent[lang]}</div>;
};
export default CardHeader;
