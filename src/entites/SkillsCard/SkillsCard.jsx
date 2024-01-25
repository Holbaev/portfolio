import React from 'react'
import styles from './SkillsCard.module.scss';
import good from '../../shared/assets/icons/good-quality.png'

const SkillsCard = ({data}) => {
  return (
    <div className={styles.skill}>
        <img src={good} className={styles.skill_img} alt="" />
        <div className={styles.skill_flex}>
          <h3 className={styles.skill_title}>{data?.title}</h3>
          <p className={styles.skill_text}>{data?.level}</p>
        </div>
    </div>
  )
}

export default SkillsCard