import React from "react";
import styles from "./Main.module.scss";
import Contact from "../../entites/Contact/Contact";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.main_title}>Welcome</h1>
          <h3 className={styles.main_name}>Good morning! My name is Aibek.</h3>
          <p className={styles.main_text}>
            I'm a front-end developer With 2
            years of experience. I can write well in the React and Vue
            frameworks. Especially in React. I develop websites using: HTML,
            CSS, JS, React, Vue, Next.js and TypeScript. If you want to talk to
            me, you can text me now or send a message to my email.
          </p>
        </div>
        <div className={styles.contact}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Main;
