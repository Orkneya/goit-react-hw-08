import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
// import { logoutThunk } from "../../redux/auth/operations";

const Navigation = () => {
  // const dispatch = useDispatch();
  const bieldLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  // const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <nav className="css.nav">
        <NavLink to="/" className={bieldLinkClass}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={bieldLinkClass}>
          Contacts
        </NavLink>
      </nav>
    </div>
  );
};
export default Navigation;
