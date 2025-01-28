import styles from "../style.module.css";
import CardTopCentre from "./CardTopCentre";
import CardTopLeft from "./CardTopLeft";
import CardTopRight from "./CardTopRight";

function CardTop() {
  return (
    <div className={styles.CardTop}>
      <CardTopLeft />
      <CardTopCentre />
      <CardTopRight />
    </div>
  );
}

export default CardTop;
