import React from "react";
import "./OurClasses.css";
import { ArrowRight } from "react-bootstrap-icons";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router";

const classItems = [
  {
    id: 1,
    title: "Phycho Training",
    img: "role-up.png",
  },
  {
    id: 2,
    title: "Self Defence",
    img: "punch.jpg",
  },
  {
    id: 3,
    title: "Advanced Gym",
    img: "items-gears.jpg",
  },
  {
    id: 4,
    title: "Cardio Training",
    img: "ring-up.jpg",
  },
  {
    id: 5,
    title: "Strenth Training",
    img: "rope-hang.jpg",
  },
  {
    id: 6,
    title: "Phycho Training",
    img: "ring-shoulder.jpg",
  },
];
const OurClasses = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row">
          {classItems.map((classNames) => {
            return (
              <div key={classNames.id} className="col-md-4 d-flex">
                <div className="class-box position-relative p-3 text-center ">
                  <img
                    className="class-items-img rounded-2"
                    src={require(`../../images/${classNames.img}`)}
                    alt="classes"
                  />
                  <div className="d-flex justify-content-center">
                    {" "}
                    <Link
                      to="/class-details"
                      className="text-uppercase text-center rounded-2 position-absolute class-title bg-warning py-3 px-4"
                    >
                      {" "}
                      <h4 className="">
                        {classNames.title}
                        <ArrowRight className="mb-2 ms-3" />
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OurClasses;
