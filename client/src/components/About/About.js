import React from "react";
import "./About.css";
import aboutIMG from "../../images/gym-man.jpg";
const About = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <div className="img-box">
            <img className="w-75 rounded-2" src={aboutIMG} alt="gym man" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="text-box ">
            <h2 className="text-muted opacity-25 display-5">About Us</h2>
            <h2 className="text-uppercase text-warning my-2">
              {" "}
              We are here to dream!
            </h2>
            <h2 className="text-black text-uppercase text-warning my-2">
              Out team are here serve you!
            </h2>
            <p className="my-2 w-75">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              aspernatur dicta expedita excepturi accusantium distinctio tempore
              ut repellat, adipisci dignissimos id, numquam laboriosam iure
              recusandae. Neque libero iusto quasi? Ex.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
