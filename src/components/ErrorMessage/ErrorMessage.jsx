import css from "./ErrorMessage.module.css";

const ErrorMessage = ({
  message = "Oops! Something went wrong. Please try again!🙃",
}) => {
  return <p className={css.textError}>{message}</p>;
};

export default ErrorMessage;
