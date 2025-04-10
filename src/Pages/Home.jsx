import React from "react";
import NavCarousel from "../components/NavCarousel";
import Slider from "../components/Slider";
import Menu from "../components/Menu";
import { Helmet } from "react-helmet-async";
import Bistro from "./Home/Bistro";
import MenuHome from "./Home/MenuHome";
import Contact from "./Home/Contact";
import Recommends from "./Home/Recommends";
import Testimonials from "./Home/Testimonials";

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
       <Bistro></Bistro> 
      </section>
      <section className="md:w-10/12 mx-auto">
          <MenuHome></MenuHome>
      </section>
      <section className="md:w-10/12 mx-auto">
          <Contact></Contact>
      </section>
      <section className="md:w-10/12 mx-auto">
          <Recommends></Recommends>
      </section>
      <section>
        <Menu></Menu>
      </section>
      <section className="md:w-10/12 mx-auto">
          <Testimonials></Testimonials>
      </section>

    </div>
  );
};

export default Home;
