import React from "react";
import styles from "./SkillsList.module.scss";
import SkillsCard from "../../entites/SkillsCard/SkillsCard";

const SkillsList = () => {
  // states

  const skills = [
    {id:1 , title: "HTML", level: "experienced" },
    {id:2 , title: "CSS", level: "experienced" },
    {id:3 , title: "SASS", level: "experienced" },
    {id:4 , title: "JavaScript", level: "experienced" },
    {id:5 , title: "React", level: "intermediate" },
    {id:6 , title: "Redux", level: "intermediate" },
    {id:7 , title: "TypeScript", level: "intermediate" },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.skills}>
        <div className={styles.skills_body}>
            <div className={styles.content_wrapper}>
            <h2 className={styles.experience_title}>My experience</h2>
          <div className={styles.content}>
            <div className={styles.experience_text}>
            <p className={styles.content_pos}>Frontend Web Developer</p>
              <p className={styles.content_title}>company - New Tech</p>
              <p className={styles.content_date}>07.2023 - 01.2024</p>
              <p className={styles.content_desk}>
                For this company I developed the online platform UNET, it was
                for universities. At first i developed an excellent microservice for
                evaluating the work of university employees. I also developed an
                microservice “RUP”, which made it possible to create a schedule
                for students in the form of a document.
              </p>
            </div>
            <div className={styles.experience_text}>
            <p className={styles.content_pos}>Frontend Developer</p>
              <p className={styles.content_title}>company - New Tech</p>
              <p className={styles.content_date}>09.2022 - 01.2023</p>
              <p className={styles.content_desk}>
              I was a junior developer in this company. Here I developed
                English language courses website. This project is important to myself as
                registration and payment. I have also developed different filters so that people can choose the course according to their preferences.
              </p>
            </div>
          </div>
            </div>
          <div className={styles.experience}>
            <h3 className={styles.experience_title}>Skills</h3>
            <div className={styles.skills_list}>
              {skills?.map((skill) => (
                <SkillsCard data={skill} key={skill?.id}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsList;
