import React from "react";
import classes from "./Upload.module.css";

const UploadFile = () => {
  return (
    <div>
      <button className={classes.uploadButton}>Upload</button>
      {/* this buttons open an upload modal */}
    </div>
  );
};

export default UploadFile;
