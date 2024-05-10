import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <p className={css.error}>ERROR</p>
      <p className={css.text}>Page not found!</p>
      <Link to="/" className={css.link}>
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
