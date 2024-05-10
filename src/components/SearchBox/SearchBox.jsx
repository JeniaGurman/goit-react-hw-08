import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const serchId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={serchId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        id={serchId}
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
