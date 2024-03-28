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
    const [loader , setLoader] = useState(false)
     // functions
 
     const getData = async () =>{
        try{
          setLoader(true)
            const reponse = await getProject(id);
            setProject(reponse);
        }catch(e){
            console.log(e);
        }
        finally{
          setLoader(false)
        }
     }
     
     useEffect(() => {
         getData();
     } , [id]);

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
                loading={loader}
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
