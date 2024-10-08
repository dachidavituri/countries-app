import styles from "./sort.module.css";
interface SortProps {
  sortCountriesAsc: () => void;
  sortCountriesDesc: () => void;
}
const Sort: React.FC<SortProps> = ({ sortCountriesAsc, sortCountriesDesc }) => {
  return (
    <div className={styles.buttonSection}>
      <button onClick={sortCountriesAsc}>ზდადობა (like)</button>
      <button onClick={sortCountriesDesc}>კლებადობა (like)</button>
    </div>
  );
};
export default Sort;
