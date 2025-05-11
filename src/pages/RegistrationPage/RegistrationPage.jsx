import React, { useEffect, useState } from "react";
import s from "./RegistrationPage.module.css";
import toast, { Toaster } from "react-hot-toast";
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm ";

const RegistrationPage = () => {
  return (
    <div>
      <Toaster />
      <h2 className={s.title}>Register now!</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
