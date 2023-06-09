import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d-flex">
          <div className="lef row">
            <i className="fa fa-phone"></i>
            <label> + 380 93 021 79 68 </label>
            <i className="fa fa-envelope"></i>
            <label>karkolom@gmail.com</label>
          </div>
          <div className="right row RText">
            <label>FAQ's</label>
            <label>Need Help?</label>
            <label>EN</label>
            <label>UA</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
