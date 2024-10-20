import travelImg from "&/360_F_319746107_n99b20pTyXt8xYJXQqVBI5dJVttUANFn.jpg";
import styles from "./hero.module.css";
import { heroContent } from "@/info";
interface HeroProps {
  lang: "ka" | "en";
}
const Hero: React.FC<HeroProps> = ({ lang }) => {
  return (
    <section className={styles.heroSection}>
      <h2>Discover The World</h2>
      <p>{heroContent[lang].description1}</p>
      <p>{heroContent[lang].description2}</p>
      <img src={travelImg} />
    </section>
  );
};
export default Hero;
