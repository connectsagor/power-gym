import React from "react";

const services = [
  {
    id: 1,
    title: "Free fitness traning",
    des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatum maxime impedit architecto nobis repellendus, recusandae similique dolorem deserunt error voluptatem cumque velit reiciendis corrupti laudantium sequi dolores quidem consequatur?",
    img: "fat.png",
  },
  {
    id: 2,
    title: "Tons of cardio and strenth",
    des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatum maxime impedit architecto nobis repellendus, recusandae similique dolorem deserunt error voluptatem cumque velit reiciendis corrupti laudantium sequi dolores quidem consequatur?",
    img: "strenth.png",
  },
  {
    id: 3,
    title: "No commitment membership",
    des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatum maxime impedit architecto nobis repellendus, recusandae similique dolorem deserunt error voluptatem cumque velit reiciendis corrupti laudantium sequi dolores quidem consequatur?",
    img: "gift.png",
  },
];

const ChooseUs = () => {
  return (
    <div className="container my-5">
      <div className="row text-center">
        <h2 className="text-uppercase">
          <span className="text-warning">Why</span> Choose Us
        </h2>
      </div>
      <div className="row mt-5">
        {services.map((service) => {
          return (
            <div key={service.id} className="col-md-4 d-flex">
              <div className="text-box p-4 shadow-lg text-center rounded-2">
                <img
                  src={require(`../../images/${service.img}`)}
                  alt="service"
                />
                <h4 className="my-3">{service.title}</h4>
                <p className="my-3">{service.des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseUs;
