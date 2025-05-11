import React, { useEffect, useState } from "react";
import s from "./LoginPage.module.css";
import toast, { Toaster } from "react-hot-toast";
import { LoginForm } from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <Toaster />
      <h2 className={s.title}>LogIn now!</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
