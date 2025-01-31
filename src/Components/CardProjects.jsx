import styles from "../style.module.css";
import { useContext } from "react";
import { AppTheme } from "../App";

function CardProjects() {
  const [lightMode] = useContext(AppTheme);
  return (
    <div className={styles.CardProjects}>
      <div className={styles.ProjectContainer}>
        <a href="#">Repo</a>
        <a href="">
          <img
            src="/DescentIntoMadness.png"
            alt="Pages"
            className={
              lightMode ? styles.ProjectImageLight : styles.ProjectImage
            }
          />
        </a>
      </div>
      <div className={styles.ProjectContainer}>
        <a href="#">Repo</a>
        <a href="">
          <img
            src="/DescentIntoMadness.png"
            alt="Pages"
            className={
              lightMode ? styles.ProjectImageLight : styles.ProjectImage
            }
          />
        </a>
      </div>
      <div className={styles.ProjectContainer}>
        <a href="#">Repo</a>
        <a href="">
          <img
            src="/DescentIntoMadness.png"
            alt="Pages"
            className={
              lightMode ? styles.ProjectImageLight : styles.ProjectImage
            }
          />
        </a>
      </div>
    </div>
  );
}

export default CardProjects;
