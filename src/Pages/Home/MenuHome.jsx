import React from "react";
import HomeHeader from "./HomeHeader";

const MenuHome = () => {
  return (
    <div>
      <div>
        <HomeHeader pTitle="Check it ou" header="FROM OUR MENU"></HomeHeader>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-10/12 mx-auto pb-10 pt-10">
        <div className="flex gap-4 justify-center items-center">
          <div className="bg-gray-300 rounded-full h-16 w-16"></div>
          <div>
            <div className="flex gap-4 text-[#737373]">
              <h1>ROAST DUCK BREAST ------------------</h1>
              <p className="text-[#D99904] text-sm">$14.5</p>
            </div>
            <p className="text-[#737373] text-sm py-2">
              Roasted duck breast (served pink) with gratin potato and a
              griottine cherry sauce
            </p>
          </div>
        </div>

        {/* 2nd */}
        <div className="flex gap-4 justify-center items-center">
          <div className="bg-gray-300 rounded-full h-16 w-16"></div>
          <div>
            <div className="flex gap-4 text-[#737373]">
              <h1>ROAST DUCK BREAST ------------------</h1>
              <p className="text-[#D99904] text-sm">$14.5</p>
            </div>
            <p className="text-[#737373] text-sm py-2">
              Roasted duck breast (served pink) with gratin potato and a
              griottine cherry sauce
            </p>
          </div>
        </div>

        {/* 3rd */}
        <div className="flex gap-4 justify-center items-center">
          <div className="bg-gray-300 rounded-full h-16 w-16"></div>
          <div>
            <div className="flex gap-4 text-[#737373]">
              <h1>ROAST DUCK BREAST ------------------</h1>
              <p className="text-[#D99904] text-sm">$14.5</p>
            </div>
            <p className="text-[#737373] text-sm py-2">
              Roasted duck breast (served pink) with gratin potato and a
              griottine cherry sauce
            </p>
          </div>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <div className="bg-gray-300 rounded-full h-16 w-16"></div>
          <div>
            <div className="flex gap-4 text-[#737373]">
              <h1>ROAST DUCK BREAST ------------------</h1>
              <p className="text-[#D99904] text-sm">$14.5</p>
            </div>
            <p className="text-[#737373] text-sm py-2">
              Roasted duck breast (served pink) with gratin potato and a
              griottine cherry sauce
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-20 ">
        <button className="btn text-black btn-ghost uppercase text-center hover:text-white border-b-2 border-gray-600 border-t-0 border-l-0 border-r-0">View full menu</button>
      </div>
    </div>
  );
};

export default MenuHome;
