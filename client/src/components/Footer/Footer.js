import React from "react";
import logo from "../../images/logo.jpg";
import yt from "../../images/yt.png";
import fb from "../../images/fb.png";
import ins from "../../images/ins.png";
import wa from "../../images/wa.png";
const Footer = () => {
  return (
    <div className="footer bg-black py-5 mt-5 text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img className="w-50" src={logo} alt="logo" />
          </div>
          <div className="col-md-2">
            <p>Need help?</p>
            <p>Help center</p>
            <p>Email support</p>
            <p>Live chat</p>
            <p>Gift certificates</p>
            <p>Send us feedback</p>
          </div>
          <div className="col-md-2">
            <p>Digital resources</p>
            <p>Articles</p>
            <p>E-book</p>
          </div>
          <div className="col-md-2">
            <p>Connect with us</p>
            <div className="d-flex gap-2 my-2">
              <img src={yt} alt="youtube" />
              <img src={fb} alt="youtube" />
              <img src={ins} alt="youtube" />
              <img src={wa} alt="youtube" />
            </div>
            <p>Forum</p>
          </div>
          <div className="col-md-3">
            <p>Join us newsletter</p>
            <p>Get exiting news, rules, update on email</p>
          </div>
        </div>
        <div className="row  text-white mt-4">
          <p className="text-center">@2025 Power gym, All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
