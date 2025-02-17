import React from "react";
import "./Nav.css";
import { Link } from "react-router";
import logo from "../../images/logo.jpg";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Our Classes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
