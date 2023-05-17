import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Head from "./Head";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Head />
      <Navbar />
      <Search />
    </>
  );
};

export default Header;
