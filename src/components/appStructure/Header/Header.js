import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import UploadFile from "./UploadFile";
import logo from "../../../assets/logoTagBox.png";
import SearchTag from "./SearchTag";

const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftItem}>
        <Link to="/home">
          <img alt="logo" src={logo} className={classes.logo}></img>
        </Link>
      </div>
      <div className={classes.centralItem}>
        <SearchTag />
      </div>
      <div className={classes.rightItem}>
        <UploadFile />
      </div>
    </div>
  );
};
export default Header;
