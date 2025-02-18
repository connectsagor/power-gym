import React from "react";
import Header from "../Header/Header";
import Segments from "../Segments/Segments";
import About from "../About/About";
import Training from "../Trainning/Training";
import ChooseUs from "../ChooseUs/ChooseUs";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Segments />
      <About />
      <Training />
      <ChooseUs />
      <Footer />
    </>
  );
};

export default Home;
