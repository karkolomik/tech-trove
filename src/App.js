import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";

export const App = () => {
  return (
    <div>
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<Pages />} />
            <Route path="/cart" exact />
          </Routes>
        </Router>
      </>
    </div>
  );
};
