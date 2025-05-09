import React, { useEffect, useState } from "react";
import s from "./RegistrationPage.module.css";
import toast, { Toaster } from "react-hot-toast";
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm ";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RegistrationPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Toaster />
      <h2 className={s.title}>Register</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
