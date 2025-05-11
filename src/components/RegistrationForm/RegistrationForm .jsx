import { useDispatch, useSelector } from "react-redux";
import css from "./RegistrationForm .module.css";
import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useEffect } from "react";

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values));
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/contacts");
    }
  }, [isLoggedIn, navigate]);

  const initialValue = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <Form className={css.form}>
        {/* <Form className={css.form} autoComplete="off"> */}
        <label className={css.label}>
          Username
          <Field type="text" name="name" placeholder="name" />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" placeholder="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" placeholder="password" />
        </label>
        <Link to="/login">You already have account? Sign In! </Link>
        <div className={css.buttonrow}>
          <button type="submit">Register</button>
          <Link to="/" className={css.link}>
            Go back
          </Link>
        </div>
      </Form>
    </Formik>
  );
};
