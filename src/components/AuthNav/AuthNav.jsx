import React from "react";
import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const AuthNav = () => {
  const bieldLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div>
      <NavLink to="/login" className={bieldLinkClass}>
        LogIn
      </NavLink>
      <NavLink to="/register" className={bieldLinkClass}>
        Register
      </NavLink>
      {/* <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink> */}
    </div>
  );
};

export default AuthNav;
