import useLangauge from "@/useLanguage";
import styles from "./cardFooter.module.css";
import { cardFooterContent } from "@/info";
interface CardFooterProps {
  link: string;
}
const CardFooter: React.FC<CardFooterProps> = ({ link }) => {
  const lang = useLangauge();

  return (
    <div className={styles.footer}>
      <a href={link} target="_blank">
        {cardFooterContent[lang]}
      </a>
    </div>
  );
};
export default CardFooter;
