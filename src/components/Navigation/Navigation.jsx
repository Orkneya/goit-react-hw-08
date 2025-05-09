import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  const bieldLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <header>
      <nav className="css.nav">
        <NavLink to="/" className={bieldLinkClass}>
          Home
        </NavLink>
        <NavLink to="/tasks" className={bieldLinkClass}>
          Tasks
        </NavLink>
        <NavLink to="/login" className={bieldLinkClass}>
          LogIn
        </NavLink>
        <NavLink to="/register" className={bieldLinkClass}>
          Register
        </NavLink>
      </nav>
    </header>
  );
};
export default Navigation;
