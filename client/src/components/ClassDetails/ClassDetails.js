import React from "react";
import "./ClassDetails.css";
import { CheckSquare } from "react-bootstrap-icons";
import gymImg from "../../images/items-gears.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const classSchedule = [
  {
    id: 1,
    title: "Monday",
    time: "8:00 AM - 9:00AM",
  },
  {
    id: 2,
    title: "Tuesday",
    time: "8:00 AM - 9:00AM",
  },
  {
    id: 3,
    title: "Wednestday",
    time: "7:00 AM - 8:00AM",
  },
  {
    id: 4,
    title: "Thursday",
    time: "5:00 PM - 6:00PM",
  },
  {
    id: 5,
    title: "Friday",
    time: "6:00 PM - 7:00AM",
  },
  {
    id: 6,
    title: "Satarday",
    time: "8:00 AM - 9:00AM",
  },
];
const ClassDetails = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img className="w-75" src={gymImg} alt="gym" />
            <p className="w-75 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              perspiciatis iusto aperiam tenetur doloribus eum, reprehenderit
              earum a, iure aspernatur consequatur sequi voluptatem repudiandae.
              Quas ad quos rerum quisquam inventore!
            </p>
          </div>
          <div className="col-md-6">
            <h2>
              <span className="text-warning">Class</span> Schedules
            </h2>
            <div className="row mt-4">
              {classSchedule.map((schedule) => {
                return (
                  <div key={schedule.id} className="col-md-4">
                    <div className="time-box shadow-lg my-3 py-1 px-4 d-flex flex-column">
                      <h6>{schedule.title}</h6>
                      <p className="time text-warning">{schedule.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="items-details">
              <div className="d-flex align-items-center my-2">
                <CheckSquare className="text-warning" />
                <p className="m-0 details-p ms-3">
                  Having slimmer shapely thighs
                </p>
              </div>
              <div className="d-flex align-items-center my-2">
                <CheckSquare className="text-warning" />
                <p className="m-0 details-p ms-3">Getting stronger body</p>
              </div>
              <div className="d-flex align-items-center my-2">
                <CheckSquare className="text-warning" />
                <p className="m-0 details-p ms-3">Increased metabolism</p>
              </div>
              <div className="d-flex align-items-center my-2">
                <CheckSquare className="text-warning" />
                <p className="m-0 details-p ms-3">
                  Increased mascular indurance
                </p>
              </div>
              <div className="d-flex align-items-center my-2">
                <CheckSquare className="text-warning" />
                <p className="m-0 details-p ms-3">
                  Maximum result in short time
                </p>
              </div>
              <div className="d-flex align-items-center my-2">
                <CheckSquare className="text-warning" />
                <p className="m-0 details-p ms-3">Firm hips and tummy</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-end align-items-end h-100">
              {" "}
              <button className="primary-btn py-2 px-3">Join us</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ClassDetails;
