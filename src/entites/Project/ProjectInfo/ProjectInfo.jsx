import React from "react";
import styles from "./ProjectInfo.module.scss";
import { Link } from 'react-router-dom';
import gitgub from '../../../shared/assets/icons/github.png'

const ProjectInfo = ({ data }) => {
  return (
    <div className={styles.info}>
      <h3 className={styles.info_title}>{data?.name}</h3>
      <p className={styles.info_desk}>{data?.descripton}</p>
      <div className={styles.info_flex}>
      <a href={data?.reference} target="_blank" className={styles.info_btn}>View project</a>
      {data?.code !== "empty" && (
      <a href={data?.code} target="_blank"  className={styles.ingo_icon}>
        <img src={gitgub} alt="" className={styles.ingo_img}/>
        View code 
      </a>
      )}
      </div>
    </div>
  );
};

export default ProjectInfo;
