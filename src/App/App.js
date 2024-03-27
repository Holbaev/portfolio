  import React from "react";
  import "./App.css";
  import { routes } from "../shared/routes";
  import { Routes, Route } from "react-router-dom";
  import Layout from "../widgets/Layout/Layout";
  import MainPage from "../pages/MainPage/MainPage";
  import { ToastContainer, Zoom } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";



  function App() {
    return (
      <div className="wrapper">
        <q></q>
        <q></q>
        <q></q>
        <q></q>
        <q></q>
        <q></q>
        <q></q>
        <q></q>
        <q></q>
        <div className="app">
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
            <ToastContainer
        stacked
        theme="dark"
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        transition={Zoom}
      />
      </div>
    );
  }

export default App;
