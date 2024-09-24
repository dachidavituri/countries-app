import travelImg from "../../assets/360_F_319746107_n99b20pTyXt8xYJXQqVBI5dJVttUANFn.jpg";
import styles from "./hero.module.css";
const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <h2>Discover The World</h2>
      <p>
        ჩვენი პლატფორმა გთავაზობთ შეუზღუდავ შესაძლებლობებს მოგზაურობის
        მოყვარულთათვის!
      </p>
      <p>მოგვმართეთ დღეს და დაიწყეთ თავგადასავალი!</p>
      <img src={travelImg} />
    </section>
  );
};
export default Hero;
