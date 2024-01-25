import React from 'react';
import styles from './Footer.module.scss';
import intagram from '../../../../shared/assets/icons/instagram.png';
import github from '../../../../shared/assets/icons/github.png';
import telegram from '../../../../shared/assets/icons/telegram.png';


const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_logo}>
            <h3 className={styles.logo_title}>Logo</h3>
        </div>
        <div className={styles.social}>
            <img src={github} className={styles.social_img} alt="" />
            <img src={intagram} className={styles.social_img} alt="" />
            <img src={telegram} className={styles.social_img} alt="" />
        </div>
        <div>
            <p className={styles.footer_text}>© Holboev Aibek</p>
        </div>
    </div>
  )
}

export default Footer