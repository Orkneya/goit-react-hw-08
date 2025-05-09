import React, { useEffect, useState } from "react";
// import { fetchMovies } from "../../services/api";
import s from "./LoginPage.module.css";
// import MoviesList from "../../components/MoviesList/MoviesList";
import toast, { Toaster } from "react-hot-toast";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Toaster />
      <h2 className={s.title}>LogIn</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
