import React from "react";
import styles from "./ProjectInfo.module.scss";

const ProjectInfo = ({ data }) => {
  return (
    <div className={styles.info}>
      <h3 className={styles.info_title}>{data?.title}</h3>
      <p className={styles.info_desk}>{data?.description}</p>
      <button className={styles.info_btn}>Посмотреть сайт</button>
    </div>
  );
};

export default ProjectInfo;
