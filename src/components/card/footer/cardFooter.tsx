import styles from "./cardFooter.module.css";

interface CardFooterProps {
  link: string;
}
const CardFooter: React.FC<CardFooterProps> = ({ link }) => {
  return (
    <div className={styles.footer}>
      <a href={link} target="_blank">
        Info
      </a>
    </div>
  );
};
export default CardFooter;
