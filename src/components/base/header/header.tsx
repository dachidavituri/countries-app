import { categories } from "@/info";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
const Header: React.FC = () => {
  const handleIsActive = ({ isActive }: { isActive: boolean }) => {
    return isActive ? styles.active : styles.notActive;
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1>EXPLORE THE WORLD</h1>
        <nav>
          <ul className={styles.navList}>
            {categories.map((category, index) => (
              <li key={index} className={styles.navItem}>
                <NavLink to={category.path} className={handleIsActive}>
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
