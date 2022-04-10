import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/appStructure/Footer/Footer";
import Header from "./components/appStructure/Header/Header";
import Home from "./components/home/Home";
import classes from "./App.module.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className={classes.MainContent}>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/home" element={<Home />}></Route>
          </Routes>
        </div>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
