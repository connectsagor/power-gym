import React from "react";
import { ArrowRight } from "react-bootstrap-icons";
import "./Training.css";
import trainingImg1 from "../../images/push-up.png";
import trainingImg2 from "../../images/ring-push.jpg";

const Training = () => {
  return (
    <div className="container my-5">
      <div className="row text-center py-4">
        <h2 className="text-uppercase">
          Traning <span className="text-warning">Programs</span>
        </h2>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 position-relative">
          <img
            className="w-100 h-100 rounded-2"
            src={trainingImg1}
            alt="training"
          />
          <h4 className="text-uppercase training-title bg-warning py-3 px-4">
            Yoga training session
            <ArrowRight className="mb-2 ms-3" />
          </h4>
        </div>
        <div className="col-md-6 position-relative">
          <img
            className="w-100 h-100 rounded-2"
            src={trainingImg2}
            alt="training"
          />
          <h4 className="text-uppercase training-title bg-warning py-3 px-4">
            Cardio training session
            <ArrowRight className="mb-2 ms-3" />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Training;
