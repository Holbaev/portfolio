import React, { useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  // states
  const [open , setOpen] = useState(false)
  return (
    <div className="header">
      <div className="header_logo">
        <h3 className="logo_title">Frontend world</h3>
      </div>
      <div className="header_menu">
        <div className="box">
          <div id="hamburger" className={`${open ? "close" : "now-active"}`} onClick={() => setOpen(!open)}>
            <samp></samp>
            <samp></samp>
            <samp></samp>
          </div>
        </div>

        <ul  className={`${open ? "menu_list now-active" : "menu_list"}`}>
          <li className="menu_item" onClick={() =>  setOpen(!open)}>
          <NavLink className="menu_item" to="/">
            Home
          </NavLink>
          </li>
          <li className="menu_item" onClick={() =>  setOpen(!open)}>
          <NavLink className="menu_item" to="/skills/">
            Experience
          </NavLink>
          </li>
          <li className="menu_item"  onClick={() =>  setOpen(!open)}>
          <NavLink className="menu_item" to="/project/">
            Projects
          </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
