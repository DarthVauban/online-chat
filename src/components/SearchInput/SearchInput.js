import React from "react";
import SVG from "react-inlinesvg";
import SearchIcon from "../../assets/SearchIcon.svg";
import "./SearchInput.scss";

const SearchInput = () => {
  return (
    <div className="inputContainer">
      <SVG src={SearchIcon} className="searchIcon" />
      <input type="text" className="search" placeholder="Search" />
    </div>
  );
};

export default SearchInput;
