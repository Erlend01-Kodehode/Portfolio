import styles from "../style.module.css";

function CardTopRight() {
  return (
    <div className={styles.CardTopRight}>
      <div>
        <h1>Web Developer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing{" "}
          <span className={styles.ThemeHTML}>HTML</span>. Adipisci repellendus{" "}
          <span className={styles.ThemeCSS}>CSS</span>{" "}
          <span className={styles.ThemeJavaScript}>JavaScript</span> aperiam
          praesentium autem mollitia animi! Quae, in{" "}
          <span className={styles.ThemeReact}>React</span> suscipit, deleniti
          repudiandae nulla beatae autem, sunt laborum quo earum.
        </p>
      </div>
    </div>
  );
}

export default CardTopRight;
