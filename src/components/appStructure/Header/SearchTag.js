import React, { useState } from "react";
import classes from "./SearchTag.module.css";

const SearchTag = (props) => {
  const [searchInput, setSearchInput] = useState("");
  let categories = [
    "Branding",
    "Illustrations",
    "Print",
    "Product Design",
    "Presentations",
  ];
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  let filteredCategories = [];
  if (searchInput.length > 0) {
    filteredCategories = categories.filter((category) => {
      return category.match(searchInput);
    });
  }

  return (
    <div>
      <div>
        <input
          type="search"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
          className={classes.inputBox}
        />
        <ul className={classes.suggestedList}>
          {filteredCategories.map((category) => (
            <li key={category} className={classes.suggestedItem}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchTag;
