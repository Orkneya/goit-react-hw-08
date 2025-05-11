import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
  };

  const initialValue = {
    email: "",
    password: "",
  };
  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <Form className={css.form}>
        {/* <Form className={css.form} autoComplete="off"> */}
        <label className={css.label}>
          Email
          <Field type="email" name="email" placeholder="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" placeholder="password" />
        </label>
        <Link to="/register">You don`t have account? Sign Up! </Link>
        <div className={css.buttonrow}>
          <button type="submit">LogIn</button>
          <Link to="/" className={css.link}>
            Go back
          </Link>
        </div>
      </Form>
    </Formik>
  );
};
