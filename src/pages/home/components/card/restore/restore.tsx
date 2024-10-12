import styles from "./restore.module.css";

interface RestoreProps {
  onRestore: () => void;
}
const Restore: React.FC<RestoreProps> = ({ onRestore }) => {
  return (
    <button onClick={onRestore} className={styles.restore}>
      აღდგენა
    </button>
  );
};
export default Restore;
