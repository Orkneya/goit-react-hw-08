import { useDispatch } from "react-redux";
// import { register } from '../../redux/auth/operations';
import css from "./RegistrationForm .module.css";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  // const handleSubmit = (e) => {
  // e.preventDefault();
  // const form = e.target;

  // dispatch(
  //   register({
  //     name: form.elements.name.value,
  //     email: form.elements.email.value,
  //     password: form.elements.password.value,
  //   })
  // );

  //   form.reset();
  // };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
  };
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
