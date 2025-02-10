import styles from "../style.module.css";
import { AppTheme } from "../App";
import { useContext } from "react";

function CardTopRight() {
  const [lightMode] = useContext(AppTheme);
  return (
    <div className={styles.CardTopRight}>
      <div>
        <h1 className={styles.ParagraphTitle}>Skills</h1>
        <div className={styles.ParagraphSpacing}>
          <h2>Web Development</h2>
          <p>
            Designing webpages using Figma. Then using either pure{" "}
            <span className={lightMode ? styles.ThemeLight : styles.ThemeHTML}>
              HTML
            </span>
            /
            <span className={lightMode ? styles.ThemeLight : styles.ThemeCSS}>
              CSS
            </span>{" "}
            and{" "}
            <span
              className={lightMode ? styles.ThemeLight : styles.ThemeJavaScript}
            >
              JavaScript
            </span>{" "}
            or the{" "}
            <span className={lightMode ? styles.ThemeLight : styles.ThemeReact}>
              React
            </span>{" "}
            framework to build it.
          </p>
        </div>
        <div className={styles.ParagraphSpacing}>
          <h2>Helpdesk</h2>
          <p>
            Previous employment and study at a school's 1st line IT helpdesk has
            made me proficient in handling users at multiple skill levels and
            troubleshooting many types of computer problems
          </p>
        </div>
        <div className={styles.ParagraphSpacing}>
          <h2>Modding</h2>
          <p>
            Modder for Paradox Grand Strategy games using their PDXScript
            programming language. <br />
            My mods have in total accumulated near 4000 current subscribers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardTopRight;
