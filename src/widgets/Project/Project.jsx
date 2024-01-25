import React, { useEffect, useState } from "react";
import styles from "./Project.module.scss";
import { getProject } from "../../shared/service/ProjectsService";
import ProjectInfo from "../../entites/Project/ProjectInfo/ProjectInfo";
import ProjectList from "../../entites/Project/ProjectList/ProjectList";

const Project = () => {
     // states 
     const [project , setProject] = useState([]);
    const [id , setId] = useState("online");
     // functions
 
     const getData = async () =>{
        try{
            const reponse = await getProject(id);
            setProject(reponse.data);
        }catch(e){
            console.log(e.reponse);
        }
     }
     
     useEffect(() => {
         getData();
     } , [id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.project}>
        <div className={styles.project_desk}>
        <ProjectInfo data={project}/>
        </div>
        <div className={styles.project_list}>
        <ProjectList setId={setId}/>
        </div>
      </div>
    </div>
  );
};

export default Project;
