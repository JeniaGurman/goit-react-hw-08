import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { apiLogin } from "../../redux/auth/operations";

const LoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(50, "Too Long!")
    .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(apiLogin(values));

    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginFormSchema}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor={emailId}>
            Email
          </label>
          <Field
            className={css.input}
            type="email"
            name="email"
            id={emailId}
          ></Field>
          <ErrorMessage className={css.error} component="span" name="email" />
          <label className={css.label} htmlFor={passwordId}>
            Password
          </label>
          <Field
            className={css.input}
            type="password"
            name="password"
            id={passwordId}
          ></Field>
          <ErrorMessage
            className={css.error}
            component="span"
            name="password"
          />
          <button className={css.btn} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
