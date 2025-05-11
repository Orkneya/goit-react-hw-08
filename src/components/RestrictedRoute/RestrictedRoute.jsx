import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const RestrictedRoute = ({ component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    // toast.error('You already logged in, but this info is not for you!');
    return <Navigate to={redirectTo} />;
  }
  return component;
};

export default RestrictedRoute;
