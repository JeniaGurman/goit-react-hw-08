import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { apiLogout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleClick = () => {
    dispatch(apiLogout());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" className={css.btn} onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
