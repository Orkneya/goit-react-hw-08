import React from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selektors";

const SearchBox = () => {
  const searchItem = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>Find contacts by name or phone</h4>
      <input
        className={css.search}
        type="text"
        placeholder="Enter search name or phone"
        value={searchItem}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
