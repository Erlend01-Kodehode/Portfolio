import CardBottom from "./Components/CardBottom";
import CardTop from "./Components/CardTop";
import styles from "./style.module.css";

function App() {
  return (
    <div className={styles.Card}>
      <CardTop />
      <CardBottom />
    </div>
  );
}

export default App;
