import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import Header from "./common/header/Header";

export const App = () => {
  return (
    <div>
      <>
        <Router>
          <Header />
          <Routes>
            {/* <Route path="/" exact>
             <About/>
			 <Route/> */}
          </Routes>
        </Router>
      </>
    </div>
  );
};
