import delSvg from "&/delete-button.svg";
import styles from "./delete.module.css";
interface DeleteProps {
  onDeleteCountry: () => void;
}
const Delete: React.FC<DeleteProps> = ({ onDeleteCountry }) => {
  return (
    <img src={delSvg} onClick={onDeleteCountry} className={styles.delete} />
  );
};
export default Delete;
