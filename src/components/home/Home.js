import React from "react";
import classes from "./Home.module.css";
import CategoryList from "./CategoryList";
import ItemList from "./ItemList";
const Home = () => {
  // const items=[
  //   {name: , categories: , url: ,}
  // ]

  return (
    <div>
      <CategoryList />
      <ItemList />
    </div>
  );
};

export default Home;
