  import React from "react";
  import "./App.module.scss";
  import { routes } from "../shared/routes";
  import { Routes, Route } from "react-router-dom";
  import styles from "./App.module.scss";
  import Layout from "../widgets/Layout/Layout";
  import MainPage from "../pages/MainPage/MainPage";

  function App() {
    return (
      <div className={styles.wrapper}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className={styles.banner}>
          <div className={styles.content}>
            <div className={styles.app}>
              <Routes>
                <Route path="/" element={<Layout/>}>
                <Route index element={<MainPage/>}/>
                {routes?.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.component}
                  />
                ))}
                </Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default App;
