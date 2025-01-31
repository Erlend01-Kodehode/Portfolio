import styles from "../style.module.css";
import { AppTheme } from "../App";
import { useContext } from "react";

function CardTopLeft() {
  const [lightMode] = useContext(AppTheme);
  return (
    <div className={styles.CardTopLeft}>
      <div>
        <img
          src="\AyyLmao.PNG"
          alt="Me"
          className={lightMode ? styles.ProfileImageLight : styles.ProfileImage}
        />
        <h2>Erlend B. Ugelstad</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempora
          fugit consequatur. Enim id adipisci odit ducimus? Tenetur doloremque
          ipsa vel quia illum. Itaque, vel perspiciatis qui officia at adipisci.
        </p>
      </div>
      <div>
        <p>TLF: 91850686</p>
        <p>Email: Erlend.Ugelstad@hotmail.no</p>
        <a href="https://github.com/Erlend01-Kodehode">Github</a>
        <a href="#">CV</a>
      </div>
    </div>
  );
}

export default CardTopLeft;
