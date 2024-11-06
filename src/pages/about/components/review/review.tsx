import useLangauge from "@/useLanguage";
import styles from "./review.module.css";
import { review } from "@/info";
const Review: React.FC = () => {
  const lang = useLangauge();
  return (
    <>
      <section className={styles.testimonials}>
        <h3 className={styles.smallTitle}>{review[lang].title}</h3>
        {review[lang].testimonials.map((tesimonial, i) => (
          <blockquote key={i}>{tesimonial}</blockquote>
        ))}
      </section>
      <footer className={styles.footer}>
        <p className={styles.desc}>{review[lang].footer}</p>
      </footer>
    </>
  );
};
export default Review;
