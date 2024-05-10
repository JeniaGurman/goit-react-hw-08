import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { apiRegister } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

const RegistrationFormSchema = Yup.object().shape({
  name: Yup.string().max(38, "Too Long!").required("Name is required"),
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
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(apiRegister(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={RegistrationFormSchema}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameId}
          ></Field>
          <ErrorMessage className={css.error} component="span" name="name" />
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
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
