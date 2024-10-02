import styles from "./review.module.css";
const Review: React.FC = () => {
  return (
    <>
      <section className={styles.testimonials}>
        <h3 className={styles.smallTitle}>What Our Clients Say</h3>
        <blockquote>
          "Explore THE WORLD Travel Agency made our family vacation amazing!
          Everything was planned perfectly."
        </blockquote>
        <blockquote>
          "They listened to our needs and created the perfect trip for us.
          Highly recommend!"
        </blockquote>
      </section>

      <footer className={styles.footer}>
        <p className={styles.desc}>
          Join us in exploring the world, one adventure at a time!
        </p>
      </footer>
    </>
  );
};
export default Review;
