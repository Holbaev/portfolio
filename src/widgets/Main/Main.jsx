import React from "react";
import styles from "./Main.module.scss";
import Contact from "../../entites/Contact/Contact";

const Main = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.main}>
     <div className={styles.content}>
     <h1 className={styles.main_title}>Welcome</h1>
      <h3 className={styles.main_name}>Hello I'm frontend developer</h3>
      <p className={styles.main_text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum officia
        repellendus dolorem, quos harum, recusandae dolores soluta illo
        asperiores velit magni provident. Ipsa ratione deleniti maxime eos nihil
        repudiandae reprehenderit!
      </p>
     </div>
    <div className={styles.contact}>
    <Contact/>
    </div>
    </div>
    </div>
  );
};

export default Main;
