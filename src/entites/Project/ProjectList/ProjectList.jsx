import React from 'react'
import styles from './ProjectList.module.scss'

const ProjectList = ({setId}) => {
  return (
    <div className={styles.list}>
        <h3 className={styles.list_title}>Projects</h3>
        <div>
            <ul className={styles.menu_list}>
                <li className={styles.menu_item} onClick={() => setId("online")}>Online shop</li>
                <li className={styles.menu_item} onClick={() => setId("sport")}>Sport Cars</li>
                <li className={styles.menu_item} onClick={() => setId("spotify")}>Spotify</li>
                <li className={styles.menu_item} onClick={() => setId("english")}>English Courses</li>
            </ul>
        </div>
    </div>
  )
}

export default ProjectList