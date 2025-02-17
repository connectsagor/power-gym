import React from "react";
import "./Header.css";
import Nav from "../Nav/Nav";
const Header = () => {
  return (
    <div className="header">
      <Nav />
      <div className="header-items">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1 className="text-white display-3 text-uppercase main-title">
                The best fitness studio in town
              </h1>
              <p className="w-75 my-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                dolorem repudiandae delectus deleniti iure voluptatem fugiat,
                quae minima praesentium quos?
              </p>
              <button className="primary-btn py-2 px-3">Join us</button>
            </div>
            <div className="col-md-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
