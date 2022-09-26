import "./search.css";
import React from "react";

const SearchBar = ({ className, placeholder, onChangeHandler }) => {
  return (
    <>
      <input
        className={`search ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </>
  );
};

export default SearchBar;
