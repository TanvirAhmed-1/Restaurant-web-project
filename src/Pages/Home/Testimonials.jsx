import React, { useEffect, useState } from "react";
import HomeHeader from "./HomeHeader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Bistro.css";
import { FaQuoteLeft } from "react-icons/fa";


const Testimonials = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://restaurent-server-ashen.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  console.log(review);

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  

  return (
    <div className="pb-20 ">
      <div>
        <HomeHeader
          pTitle="What Our Clients Say"
          header="TESTIMONIALS"
        ></HomeHeader>
      </div>
      <div className=" flex justify-center items-center">
        <div className="rating rating-sm">
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-[#CD9003]"
            aria-label="1 star"
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-[#CD9003]"
            aria-label="2 star"
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-[#CD9003]"
            aria-label="3 star"
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-[#CD9003]"
            aria-label="4 star"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-[#CD9003]"
            aria-label="5 star"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-10 py-10 flex flex-col">
      <p className="flex justify-center items-center" ><FaQuoteLeft className="text-4xl text-center text-black" /></p>
        <Slider {...settings}>
          {review.map((data) => (
            <div
              key={data._id}
              className="p-6 text-center"
            >
              <p className="text-[#444444] text-base line-clamp-2 px-3">{data.details}</p>
              <p className="text-2xl font-semibold text-[#CD9003] mb-2 pt-6">
                {data.name}
              </p>
            </div>
          ))}
        </Slider>
        
      </div>
    </div>
  );
};

export default Testimonials;
