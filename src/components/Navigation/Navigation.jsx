import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useSelector } from "react-redux";

import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <div>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, { [css.active]: isActive })
          }
          to="/"
        >
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink
            className={({ isActive }) =>
              clsx(css.link, { [css.active]: isActive })
            }
            to="/contacts"
          >
            Contacts
          </NavLink>
        )}
      </div>
    </>
  );
};

export default Navigation;
