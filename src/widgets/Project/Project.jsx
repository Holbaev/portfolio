import React, { useEffect, useState } from "react";
import styles from "./Project.module.scss";
import { getProject } from "../../shared/service/ProjectsService";
import ProjectInfo from "../../entites/Project/ProjectInfo/ProjectInfo";
import ProjectList from "../../entites/Project/ProjectList/ProjectList";
import MoonLoader from "react-spinners/MoonLoader";
import { ScaleLoader } from "react-spinners";


const Project = () => {
     // states 
     const [project , setProject] = useState(null);
    const [id , setId] = useState("UNET");
     // functions
 
     const getData = async () =>{
        try{
            const reponse = await getProject(id);
            setProject(reponse);
            console.log(reponse);
        }catch(e){
            console.log(e);
        }
     }
     
     useEffect(() => {
         getData();
     } , [id]);
     console.log(project);

  return (
    <div className={styles.wrapper}>
      <div className={styles.project}>
        {project !== null ? (
           <div className={styles.project_desk}>
             <ProjectInfo data={project}/>
           </div>
          ) : (
            <div className={styles.loader}>
              <MoonLoader 
                color="#990011"
                loading={true}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          )}
        <div className={styles.project_list}>
        <ProjectList setId={setId} data={project}/>
        </div>
      </div>
    </div>
  );
};

export default Project;
