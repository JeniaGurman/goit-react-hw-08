import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { apiAddContact } from "../../redux/contacts/operations";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(apiAddContact({ ...values }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
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
        <label className={css.label} htmlFor={numberId}>
          Number
        </label>
        <Field
          className={css.input}
          type="text"
          name="number"
          id={numberId}
        ></Field>
        <ErrorMessage className={css.error} component="span" name="number" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
