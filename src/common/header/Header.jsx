import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Head from "./Head";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Head />
      <Search />
      <Navbar />
    </>
  );
};

export default Header;
