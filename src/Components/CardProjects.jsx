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
          rel="noreferrer noopener"
          target="_blank"
          className={lightMode ? styles.LinkThemedLight : styles.LinkThemed}
        >
          Starsector Fan Project
        </a>
        <a
          href="https://erlend01-kodehode.github.io/CoreWorlds/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img
            src="CoreWorldsProject.png"
            alt="Pages"
            className={
              lightMode ? styles.ProjectImageLight : styles.ProjectImage
            }
          />
        </a>
        <a
          href="https://erlend01-kodehode.github.io/CoreWorlds/"
          rel="noreferrer noopener"
          target="_blank"
          className={
            lightMode ? styles.ProjectBackupLight : styles.ProjectBackup
          }
        >
          Pages
        </a>
      </div>
      <div className={styles.ProjectContainer}>
        <a
          href="https://github.com/Erlend01-Kodehode/GroupWork"
          rel="noreferrer noopener"
          target="_blank"
          className={lightMode ? styles.LinkThemedLight : styles.LinkThemed}
        >
          Wishlist Group Project
        </a>
        <a
          href="https://erlend01-kodehode.github.io/GroupWork/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img
            src="WishlistProject.png"
            alt="Pages"
            className={
              lightMode ? styles.ProjectImageLight : styles.ProjectImage
            }
          />
        </a>
        <a
          href="https://erlend01-kodehode.github.io/GroupWork/"
          rel="noreferrer noopener"
          target="_blank"
          className={
            lightMode ? styles.ProjectBackupLight : styles.ProjectBackup
          }
        >
          Pages
        </a>
      </div>
      <div className={styles.ProjectContainer}>
        <a
          href="https://github.com/Erlend01-Kodehode/ReactTask2"
          rel="noreferrer noopener"
          target="_blank"
          className={lightMode ? styles.LinkThemedLight : styles.LinkThemed}
        >
          React Collection
        </a>
        <a
          href="https://erlend01-kodehode.github.io/ReactTask2/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img
            src="ReactCollection.png"
            alt="Pages"
            className={
              lightMode ? styles.ProjectImageLight : styles.ProjectImage
            }
          />
        </a>
        <a
          href="https://erlend01-kodehode.github.io/ReactTask2/"
          rel="noreferrer noopener"
          target="_blank"
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
