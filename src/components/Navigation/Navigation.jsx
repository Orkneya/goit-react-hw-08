import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const Navigation = () => {
  const dispatch = useDispatch();
  const bieldLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <nav className="css.nav">
        <NavLink to="/" className={bieldLinkClass}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={bieldLinkClass}>
          Contacts
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink to="/login" className={bieldLinkClass}>
              LogIn
            </NavLink>
            <NavLink to="/register" className={bieldLinkClass}>
              Register
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <button onClick={() => dispatch(logoutThunk())}> LogOut</button>
        )}
      </nav>
      {isLoggedIn && <h3> Hello, {user.name} </h3>}
    </header>
  );
};
export default Navigation;
