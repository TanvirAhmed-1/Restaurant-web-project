import React from "react";
import HomeHeader from "./HomeHeader";

const Testimonials = () => {
  return (
    <div>
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
            className="mask mask-star-2 bg-orange-400"
            aria-label="1 star"
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
            aria-label="2 star"
          
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
            aria-label="3 star"
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
            aria-label="4 star"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
            aria-label="5 star"
          />
        </div>
      </div>

      <div>
        <h1 className=" text-black text-5xl pb-10">,,</h1>
      </div>
    </div>
  );
};

export default Testimonials;
