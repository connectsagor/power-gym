import React from "react";
import "./Pricing.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { CheckAll } from "react-bootstrap-icons";
import { Link } from "react-router";
const pricingItems = [
  {
    id: 1,
    title: "Beginner Plan",
    price: 90,
    s1: "Mobile-Optimized",
    s2: "Best-Hosting",
    s3: "Free Custom",
    s4: "Outstanding",
    s5: "Happy Customers",
    img: "girl.jpg",
  },
  {
    id: 2,
    title: "Basic Plan",
    price: 120,
    s1: "Mobile-Optimized",
    s2: "Best-Hosting",
    s3: "Free Custom",
    s4: "Outstanding",
    s5: "Happy Customers",
    img: "rope-hands.jpg",
  },
  {
    id: 3,
    title: "Advanced Plan",
    price: 150,
    s1: "Mobile-Optimized",
    s2: "Best-Hosting",
    s3: "Free Custom",
    s4: "Outstanding",
    s5: "Happy Customers",
    img: "girl-ball.jpg",
  },
];
const Pricing = () => {
  return (
    <>
      <Header />
      <div className="container my-5 ">
        <div className="row text-center">
          <h2 className="text-uppercase">
            <span className="text-warning">Choose the offer </span>that suits
            you
          </h2>

          <p className="w-50 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            ducimus nihil! Ullam illo in amet ratione a. Unde, debitis
          </p>
        </div>

        <div className="row my-5">
          {pricingItems.map((items) => {
            return (
              <div className="col-md-4" key={items.id}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(
      to bottom right, 
      rgba(18, 4, 4, 0.5), 
      rgba(6, 6, 10, 0.5)
    ), url(${require(`../../images/${items.img}`)})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                    width: "100%",
                  }}
                  className="price-box d-flex flex-column text-center text-white"
                >
                  <h5 className="my-4 text-warning">Billed Monthly</h5>
                  <h2 className=" display-6">{items.title}</h2>
                  <h2 className="display-6 text-warning text-price">
                    ${items.price}
                  </h2>
                  <div className="d-flex flex-column text-start">
                    <div className="my-3 d-flex align-items-center justify-content-center">
                      <CheckAll className="me-2" />
                      <p className="m-0">{items.s1}</p>
                    </div>
                    <div className="my-3 d-flex align-items-center justify-content-center">
                      <CheckAll className="me-2" />
                      <p className="m-0">{items.s2}</p>
                    </div>
                    <div className="my-3 d-flex align-items-center justify-content-center">
                      <CheckAll className="me-2" />
                      <p className="m-0">{items.s3}</p>
                    </div>
                    <div className="my-3 d-flex align-items-center justify-content-center">
                      <CheckAll className="me-2" />
                      <p className="m-0">{items.s4}</p>
                    </div>
                    <div className="my-3 d-flex align-items-center justify-content-center">
                      <CheckAll className="me-2" />
                      <p className="m-0">{items.s5}</p>
                    </div>
                    <div className="my-3 d-flex justify-content-center text-center">
                      <Link
                        to="/membership"
                        className="py-2 w-50 px-3 text-uppercase primary-btn"
                      >
                        Purchase
                      </Link>
                    </div>
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

export default Pricing;
