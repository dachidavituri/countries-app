import Information from "^/about/components/information";
import Destinations from "^/about/components/destinations/destination";
import Review from "^/about/components/review";
import styles from "./aboutIndex.module.css";

const AboutPageView: React.FC = () => {
  return (
    <div className={styles.aboutSection}>
      <Information />
      <Destinations />
      <Review />
    </div>
  );
};
export default AboutPageView;
