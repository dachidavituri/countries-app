import { Country } from "@/info";
import likeImg from "&/like.png";
import styles from "./like.module.css";

interface LikeProps {
  country: Country;
  upVote: () => void;
}
const Like: React.FC<LikeProps> = ({ country, upVote }) => {
  return (
    <div className={styles.likeSection}>
      <span>{country.like}</span>
      <img
        src={likeImg}
        className={styles.like}
        onClick={upVote}
      />
    </div>
  );
};
export default Like;
