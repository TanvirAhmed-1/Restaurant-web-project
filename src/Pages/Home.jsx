import React from "react";
import NavCarousel from "../components/NavCarousel";
import Slider from "../components/Slider";
import Card from "../components/Card";
import Menu from "../components/Menu";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>

      <section>
        <NavCarousel></NavCarousel>
      </section>
      <section>
        <Slider></Slider>
      </section>
      <section>
        <Card></Card>
      </section>
      <section>
        <Menu></Menu>
      </section>
    </div>
  );
};

export default Home;
