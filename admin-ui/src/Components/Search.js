import React from "react";
import "./search.css";

const Search = ({ searchText, handleSearch }) => {
  return (
    <div className="search-div">
      <input
        type="text"
        placeholder="Search by name, email and role ..."
        value={searchText}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
