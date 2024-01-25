import React from 'react';
import styles from './Layout.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout_head}>
        <Header/>
      </div>
      <div className={styles.layout_body}>
        <Outlet/>
      </div>
      <div className={styles.layout_foot}>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout