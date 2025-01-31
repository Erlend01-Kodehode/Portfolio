import styles from "../style.module.css";
import CardProjects from "./CardProjects";
import CardProjectsTitle from "./CardProjectsTitle";

function CardBottom() {
  return (
    <div className={styles.CardBottom}>
      <CardProjectsTitle />
      <CardProjects />
    </div>
  );
}

export default CardBottom;
