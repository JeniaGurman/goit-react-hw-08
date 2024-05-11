import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const onChangeFilter = (event) => {
    const value = event.target.value;
    dispatch(changeFilter(value));
  };
  return (
    <div className={css.searchBox}>
      <h2 className={css.searchBoxTitle}>Find contacts by name</h2>
      <input
        className={css.searchBoxInput}
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};

export default SearchBox;
