import React from "react";
import styles from "./SkillsList.module.scss";
import SkillsCard from "../../entites/SkillsCard/SkillsCard";

const SkillsList = () => {
  // states

  const skills = [
    { title: "HTML", level: "experienced" },
    { title: "CSS", level: "experienced" },
    { title: "SASS", level: "experienced" },
    { title: "JavaScript", level: "experienced" },
    { title: "React", level: "intermediate" },
    { title: "Redux", level: "intermediate" },
    { title: "TypeScript", level: "basic" },
  ];

  return (
    <div className={styles.wrapper}>
    <div className={styles.skills}>
      <div className={styles.skills_body}>
        <div className={styles.content}>
        <h2 className={styles.experience_title}>My experience</h2>
        <div className={styles.experience_text}>
        <p className={styles.content_title}>My name is Aibek </p>
          <p className={styles.content_desk}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            sequi quas iste cupiditate amet itaque saepe laboriosam, ipsum
            accusamus quisquam in, unde accusantium laborum eius possimus
            incidunt ullam odio sapiente.
          </p>
        </div>
        </div>
        <div className={styles.experience}>
          <h3 className={styles.experience_title}>Skills</h3>
          <div className={styles.skills_list}>
            {skills?.map((skill) => (
              <SkillsCard data={skill}/>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SkillsList;
