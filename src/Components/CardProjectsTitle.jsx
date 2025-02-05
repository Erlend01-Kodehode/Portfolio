import styles from "../style.module.css";
import { useContext } from "react";
import { AppTheme } from "../App";

function CardProjectsTitle() {
  const [lightMode] = useContext(AppTheme);
  return (
    <div
      className={
        lightMode ? styles.CardProjectsTitleLight : styles.CardProjectsTitle
      }
    >
      <h1>Web Development Projects</h1>
    </div>
  );
}

export default CardProjectsTitle;
