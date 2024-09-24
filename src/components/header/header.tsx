import { categories } from "../../info";
import styles from "./header.module.css";
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1>EXPLORE THE WORLD</h1>
        <nav>
          <ul className={styles.navList}>
            {categories.map((category, index) => (
              <li key={index} className={styles.navItem}>
                {category}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
