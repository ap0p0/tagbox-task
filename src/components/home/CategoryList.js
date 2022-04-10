import React, { useState } from "react";
import classes from "./CategoryList.module.css";

const CategoryList = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  let categories = [
    "All",
    "Branding",
    "Illustrations",
    "Print",
    "Product Design",
    "Presentations",
  ];
  return (
    <div className={classes.categoryList}>
      {categories.map((category) =>
        activeCategory === category ? (
          <span key={category} className={classes.categoryItemActive}>
            {category}
          </span>
        ) : (
          <span
            key={category}
            onClick={() => setActiveCategory(category)}
            className={classes.categoryItem}
          >
            {category}
          </span>
        )
      )}
      <span>+ Add Category</span>
    </div>
  );
};

export default CategoryList;
