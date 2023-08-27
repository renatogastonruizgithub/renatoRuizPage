
import styles from "../../assets/styles/card.module.scss";

const Card = ({ height, width, img, title, paragraph }) => {
    return (
        <div className={styles.containerCard}>
            <div className={styles.cardImg}>
                <img src={img} width={width} height={height} />
            </div>
            <div className={styles.cardBody}>
                <h5>{title}</h5>
                <p>{paragraph}</p>
            </div>
        </div>
    )
}
export default Card