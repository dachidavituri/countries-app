import styles from "./sort.module.css";
interface SortProps {
  sortCountriesByLike: (sortType: 'asc' | 'desc') => void;
}
const Sort: React.FC<SortProps> = ({ sortCountriesByLike }) => {
  return (
    <div className={styles.buttonSection}>
      <button onClick={() => sortCountriesByLike('asc')}>ზდადობა (like)</button>
      <button onClick={() => sortCountriesByLike('desc')}>კლებადობა (like)</button>
    </div>
  );
};
export default Sort;
