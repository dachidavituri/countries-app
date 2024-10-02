import styles from './destination.module.css'
import { destionation } from '@/info'
const Destinations: React.FC = () => {
return(
    <section className={styles.destinations}>
        <h3 className={styles.smallTitle}>Explore Destinations</h3>
        <div className={styles.destinationList}>
          {destionation.map((desc, index) => (
            <div key={index} className={styles.destination}>
              <h4>{desc.continent}</h4>
              <p className={styles.desc}>{desc.description}</p>
            </div>
          ))}
        </div>
      </section>
)
}
export default Destinations