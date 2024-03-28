import React from 'react';
import styles from './Footer.module.scss';
import intagram from '../../../../shared/assets/icons/instagram.png';
import github from '../../../../shared/assets/icons/github.png';
import telegram from '../../../../shared/assets/icons/telegram.png';



const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_logo}>
            <h3 className={styles.logo_title}>Frontend world</h3>
        </div>
        <div className={styles.social}>
            <a href="https://github.com/Holbaev/" target="_blank">
            <img src={github} className={styles.social_img} alt="" />
            </a>
            <a href="https://t.me/holbinaiba" target="_blank">
            <img src={telegram} className={styles.social_img} alt="" />
            </a>
        </div>
        <div>
            <p className={styles.footer_text}>© Holboev Aibek</p>
        </div>
    </div>
  )
}

export default Footer