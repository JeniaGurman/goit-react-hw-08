import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) => clsx(css.link, { [css.active]: isActive })}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(css.link, { [css.active]: isActive })}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
