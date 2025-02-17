import React from "react";
const segmentsData = [
  {
    id: 1,
    name: "Progression",
    img: "girl.jpg",
    des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique odioiste debitis exercitationem dicta expedita perspiciatis, dolorum dolore fugit natus ",
  },
  {
    id: 2,
    name: "Workout",
    img: "rope-hands.jpg",
    des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique odioiste debitis exercitationem dicta expedita perspiciatis, dolorum dolore fugit natus ",
  },
  {
    id: 3,
    name: "Nutrition",
    img: "girl-ball.jpg",
    des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique odioiste debitis exercitationem dicta expedita perspiciatis, dolorum dolore fugit natus ",
  },
];
const Segments = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {segmentsData.map((segment, ind) => {
          return (
            <div key={segment.id} className="col-md-4 d-flex">
              <div
                style={{
                  backgroundImage: `url(${require(`../../images/${segment.img}`)})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="segment-box p-5 d-flex flex-column justify-content-center align-items-center text-white rounded-1"
              >
                <img
                  className="my-3"
                  src={require(`../../images/segment-${ind + 1}.png`)}
                  alt="img"
                />
                <h3 className="my-3">{segment.name}</h3>
                <p className="my-3 text-center">{segment.des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Segments;
