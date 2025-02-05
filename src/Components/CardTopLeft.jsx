import styles from "../style.module.css";
import { AppTheme } from "../App";
import { useContext } from "react";

function CardTopLeft() {
  const [lightMode] = useContext(AppTheme);
  return (
    <div className={styles.CardTopLeft}>
      <div>
        <img
          src="AyyLmao.PNG"
          alt="Me"
          className={lightMode ? styles.ProfileImageLight : styles.ProfileImage}
        />
        <h2>Erlend B. Ugelstad</h2>
        <p>
          Hello, I'm Erlend. A guy that likes working with computers. PC gamer,
          modder and Web Developer.
        </p>
      </div>
      <div>
        <p>TLF: 91850686</p>
        <p>Email: Erlend.Ugelstad@hotmail.com</p>
        <a
          href="https://github.com/Erlend01-Kodehode"
          rel="noreferrer noopener"
          target="_blank"
          className={lightMode ? styles.LinkThemedLight : styles.LinkThemed}
        >
          Github
        </a>
        <a
          href="CV2025 V5.pdf"
          rel="noreferrer noopener"
          target="_blank"
          className={lightMode ? styles.LinkThemedLight : styles.LinkThemed}
        >
          CV
        </a>
      </div>
    </div>
  );
}

export default CardTopLeft;
