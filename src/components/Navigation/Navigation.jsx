import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const dispatch = useDispatch();
  const bieldLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className="css.nav">
      <NavLink to="/" className={bieldLinkClass}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={bieldLinkClass}>
        Contacts
      </NavLink>
    </nav>
  );
};
export default Navigation;
