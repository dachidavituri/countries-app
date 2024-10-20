import useLangauge from "@/useLanguage";
import styles from "./sort.module.css";
import { sortLabels } from "@/info";
interface SortProps {
  sortCountriesByLike: (sortType: 'asc' | 'desc') => void;
}
const Sort: React.FC<SortProps> = ({ sortCountriesByLike }) => {
  const lang = useLangauge()
  return (
    <div className={styles.buttonSection}>
      <button onClick={() => sortCountriesByLike('asc')}>{sortLabels[lang].ascending}</button>
      <button onClick={() => sortCountriesByLike('desc')}>{sortLabels[lang].descending}</button>
    </div>
  );
};
export default Sort;
