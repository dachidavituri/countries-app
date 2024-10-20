import { categories } from "@/info";
import { NavLink, useParams } from "react-router-dom";
import styles from "./header.module.css";
import { languages } from "@/info";
const Header: React.FC = () => {
  const handleIsActive = ({ isActive }: { isActive: boolean }) => {
    return isActive ? styles.active : styles.notActive;
  };
  const { lang } = useParams<{ lang: string }>();
  const handleActiveLang = (path: string) => {
    return path.includes(lang!) ? styles.active : styles.notActive;
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div>
          <h1>EXPLORE THE WORLD</h1>
          <ul className={styles.navList}>
            {languages.map((language, index) => (
              <li key={index} className={styles.navItem}>
                <NavLink
                  to={language.path}
                  className={handleActiveLang(language.path)}
                >
                  {language.lang}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

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
