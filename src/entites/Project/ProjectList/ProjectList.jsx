import React from 'react'
import styles from './ProjectList.module.scss'

const ProjectList = ({setId , data}) => {
  const links = [
    {id :1 , link:"UNET"},
    {id :2 , link:"Coffee shop"},
    {id :3 , link:"Shelter"},
    {id :4 , link:"Hangman game"},
  ]
  return (
    <div className={styles.list}>
        <h3 className={styles.list_title}>Projects</h3>
        <div>
            <ul className={styles.menu_list}>
              {links?.map((link) =>(
                <li className={`${styles.menu_item} ${data?.name === link.link ? styles.active : ""}`} key={link.id} onClick={() => setId(link.link)}>{link.link}</li>
              ))}
            </ul>
        </div>
    </div>
  )
}

export default ProjectList