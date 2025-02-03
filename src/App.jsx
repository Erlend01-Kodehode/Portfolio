import CardBottom from "./Components/CardBottom";
import CardTop from "./Components/CardTop";
import styles from "./style.module.css";

import { createContext, useState, useEffect } from "react";
export const AppTheme = createContext();

function App() {
  const [lightMode, setLightMode] = useState(() => {
    const savedData = localStorage.getItem("LightMode");
    return savedData ? JSON.parse(savedData) : false;
  });

  function swapTheme() {
    setLightMode(!lightMode);
  }

  useEffect(() => {
    console.log(
      `Theme is currently set to ${lightMode ? "Lightmode" : "Darkmode"}`
    );
    localStorage.setItem("LightMode", JSON.stringify(lightMode));
  }, [lightMode]);

  return (
    <AppTheme.Provider value={[lightMode, setLightMode]}>
      <div className={lightMode ? styles.BodyClassLight : styles.BodyClass}>
        <button onClick={swapTheme} className={styles.ThemeButton}>
          <p
            className={
              lightMode ? styles.ThemeButtonTextLight : styles.ThemeButtonText
            }
          >
            {lightMode ? "Theme Light" : "Theme Dark"}
          </p>
        </button>
        <div className={lightMode ? styles.BackGroundLight : styles.BackGround}>
          <div className={lightMode ? styles.CardLight : styles.Card}>
            <CardTop />
            <CardBottom />
          </div>
        </div>
      </div>
    </AppTheme.Provider>
  );
}

export default App;
