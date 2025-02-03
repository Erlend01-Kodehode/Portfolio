import styles from "../style.module.css";
import { useContext } from "react";
import { AppTheme } from "../App";

function CardProjects() {
  const [lightMode] = useContext(AppTheme);
  return (
    <div className={styles.CardProjects}>
      <div className={styles.ProjectContainer}>
        <a
          href="https://github.com/Erlend01-Kodehode/CoreWorlds"
          className={lightMode ? styles.LinkThemedLight : styles.LinkThemed}
        >
          Starsector Planets
        </a>
        <a href="#">
          <img
            src="/CoreWorldsProject.png"
            alt="Pages"
            className={
              lightMode ? styles.ProjectImageLight : styles.ProjectImage
            }
          />
        </a>
        <a
          href="#"
          className={
            lightMode ? styles.ProjectBackupLight : styles.ProjectBackup
          }
        >
          Pages
        </a>
      </div>
      <div className={styles.ProjectContainer}>
        <a
          href="#"
          className={lightMode ? styles.LinkThemedLight : styles.LinkThemed}
        >
          Wishlist Group Project
        </a>
        <a href="#">
          <img
            src="/WishlistProject.png"
            alt="Pages"
            className={
              lightMode ? styles.ProjectImageLight : styles.ProjectImage
            }
          />
        </a>
        <a
          href="#"
          className={
            lightMode ? styles.ProjectBackupLight : styles.ProjectBackup
          }
        >
          Pages
        </a>
      </div>
      <div className={styles.ProjectContainer}>
        <a
          href="#"
          className={lightMode ? styles.LinkThemedLight : styles.LinkThemed}
        >
          React Collection
        </a>
        <a href="#">
          <img
            src="/ReactCollection.png"
            alt="Pages"
            className={
              lightMode ? styles.ProjectImageLight : styles.ProjectImage
            }
          />
        </a>
        <a
          href="#"
          className={
            lightMode ? styles.ProjectBackupLight : styles.ProjectBackup
          }
        >
          Pages
        </a>
      </div>
    </div>
  );
}

export default CardProjects;
