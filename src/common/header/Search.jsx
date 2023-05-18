import React from "react";
import logo from "../assets/images/logo3.png";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <>
      <section className="search">
        <div className="container c-flex">
          <div className="logo width">
            <img src={logo} alt="" />
          </div>

          <div className="search-box f-flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search here.." />
            <span>All Categories</span>
          </div>
          <div className="icon f-flex width">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <Link to="/cart" />
              <i className="fa fa-shopping-bag icon-circle"></i>
              <span>0</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
