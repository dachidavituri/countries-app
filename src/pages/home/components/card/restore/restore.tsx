import useLangauge from "@/useLanguage";
import styles from "./restore.module.css";
import { restoreBtnContent } from "@/info";
interface RestoreProps {
  onRestore: () => void;
}
const Restore: React.FC<RestoreProps> = ({ onRestore }) => {
  const lang = useLangauge();
  return (
    <button onClick={onRestore} className={styles.restore}>
      {restoreBtnContent[lang]}
    </button>
  );
};
export default Restore;
