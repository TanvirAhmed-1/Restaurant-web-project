import { Helmet } from 'react-helmet-async';

const MenuPage = () => {
  return (
    <div className="bg-white">
            <Helmet>
              <title>Bistro Boss | Menu</title>
            </Helmet>
      <div className="MenuPage-img min-h-[800px] w-full flex justify-center items-center">
        <div className="bg-black bg-opacity-40 py-40 px-72 z-40 space-y-4">
          <h1 className="uppercase text-white text-5xl text-center ">
            YOur menu
          </h1>
          <p className="text-sm text-center uppercase">
            Would you like to try a dish?
          </p>
        </div>
      </div>

      {/* offer section */}
      <div className="py-10">
        <p className="text-[#D99904] text-sm text-center">---Don` miss ---</p>
        <div className="flex justify-center items-center py-10">
          <p className="text-black text-2xl text-center border-t-2 border-b-2 py-4 border-gray-400">
            TODAY'S OFFER
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 w-10/12 mx-auto pb-10">
        <div className="flex gap-4 justify-center items-center">
          <div className="bg-gray-300 rounded-full h-16 w-16"></div>
          <div>
            <div className="flex gap-4 text-[#737373]">
              <h1>ROAST DUCK BREAST ------------------</h1>
              <p className="text-[#D99904] text-sm">$14.5</p>
            </div>
            <p className="text-[#737373] text-sm py-4">
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
            <p className="text-[#737373] text-sm py-4">
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
            <p className="text-[#737373] text-sm py-4">
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
            <p className="text-[#737373] text-sm py-4">
              Roasted duck breast (served pink) with gratin potato and a
              griottine cherry sauce
            </p>
          </div>
        </div>
      </div>

      {/* ORDER YOUR FAVOURITE FOOD */}

      <div className="py-20 flex justify-center items-center">
        <p className=" border-b-2 border-solid border-gray-400  shadow-lg px-2 py-2 text-black">
          ORDER YOUR FAVOURITE FOOD
        </p>
      </div>

      <div>
        <div className="MenuPage-img2 bg-fixed min-h-[800px] w-full flex justify-center items-center">
          <div className="bg-black bg-opacity-40 py-40 w-10/12 mx-auto space-y-4">
            <h1 className="uppercase text-white text-2xl text-center ">
              DESSERTS
            </h1>
            <p className="text-[8px] text-center uppercase px-20">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>

      {/* offer section 2 */}
      <div className="py-10">
        <p className="text-[#D99904] text-sm text-center">---Don` miss ---</p>
        <div className="flex justify-center items-center py-10">
          <p className="text-black text-2xl text-center border-t-2 border-b-2 py-4 border-gray-400">
            TODAY'S OFFER
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 w-10/12 mx-auto pb-10">
        <div className="flex gap-4 justify-center items-center">
          <div className="bg-gray-300 rounded-full h-16 w-16"></div>
          <div>
            <div className="flex gap-4 text-[#737373]">
              <h1>ROAST DUCK BREAST ------------------</h1>
              <p className="text-[#D99904] text-sm">$14.5</p>
            </div>
            <p className="text-[#737373] text-sm py-4">
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
            <p className="text-[#737373] text-sm py-4">
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
            <p className="text-[#737373] text-sm py-4">
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
            <p className="text-[#737373] text-sm py-4">
              Roasted duck breast (served pink) with gratin potato and a
              griottine cherry sauce
            </p>
          </div>
        </div>
      </div>

      {/* ORDER YOUR FAVOURITE FOOD */}

      <div className="py-20 flex justify-center items-center">
        <p className=" border-b-2 border-solid border-gray-400  shadow-lg px-2 py-2 text-black">
          ORDER YOUR FAVOURITE FOOD
        </p>
      </div>

      <div>
        <div className="MenuPage-img2 bg-fixed min-h-[800px] w-full flex justify-center items-center">
          <div className="bg-black bg-opacity-40 py-40 w-10/12 mx-auto space-y-4">
            <h1 className="uppercase text-white text-2xl text-center ">
              PIZZA
            </h1>
            <p className="text-[8px] text-center uppercase px-20">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>

      {/* offer section 3 */}
      <div className="py-10">
        <p className="text-[#D99904] text-sm text-center">---Don` miss ---</p>
        <div className="flex justify-center items-center py-10">
          <p className="text-black text-2xl text-center border-t-2 border-b-2 py-4 border-gray-400">
            TODAY'S OFFER
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 w-10/12 mx-auto pb-10">
        <div className="flex gap-4 justify-center items-center">
          <div className="bg-gray-300 rounded-full h-16 w-16"></div>
          <div>
            <div className="flex gap-4 text-[#737373]">
              <h1>ROAST DUCK BREAST ------------------</h1>
              <p className="text-[#D99904] text-sm">$14.5</p>
            </div>
            <p className="text-[#737373] text-sm py-4">
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
            <p className="text-[#737373] text-sm py-4">
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
            <p className="text-[#737373] text-sm py-4">
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
            <p className="text-[#737373] text-sm py-4">
              Roasted duck breast (served pink) with gratin potato and a
              griottine cherry sauce
            </p>
          </div>
        </div>
      </div>

      {/* ORDER YOUR FAVOURITE FOOD */}

      <div className="py-20 flex justify-center items-center">
        <p className=" border-b-2 border-solid border-gray-400  shadow-lg px-2 py-2 text-black">
          ORDER YOUR FAVOURITE FOOD
        </p>
      </div>

      <div>
        <div className="MenuPage-img2 bg-fixed min-h-[800px] w-full flex justify-center items-center">
          <div className="bg-black bg-opacity-40 py-40 w-10/12 mx-auto  space-y-4">
            <h1 className="uppercase text-white text-2xl text-center ">
              SALADS
            </h1>
            <p className="text-[8px] text-center uppercase px-20">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>

            {/* offer section 3 */}
            <div className="py-10">
        <p className="text-[#D99904] text-sm text-center">---Don` miss ---</p>
        <div className="flex justify-center items-center py-10">
          <p className="text-black text-2xl text-center border-t-2 border-b-2 py-4 border-gray-400">
            TODAY'S OFFER
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 w-10/12 mx-auto pb-10">
        <div className="flex gap-4 justify-center items-center">
          <div className="bg-gray-300 rounded-full h-16 w-16"></div>
          <div>
            <div className="flex gap-4 text-[#737373]">
              <h1>ROAST DUCK BREAST ------------------</h1>
              <p className="text-[#D99904] text-sm">$14.5</p>
            </div>
            <p className="text-[#737373] text-sm py-4">
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
            <p className="text-[#737373] text-sm py-4">
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
            <p className="text-[#737373] text-sm py-4">
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
            <p className="text-[#737373] text-sm py-4">
              Roasted duck breast (served pink) with gratin potato and a
              griottine cherry sauce
            </p>
          </div>
        </div>
      </div>

      {/* ORDER YOUR FAVOURITE FOOD */}

      <div className="py-20 flex justify-center items-center">
        <p className=" border-b-2 border-solid border-gray-400  shadow-lg px-2 py-2 text-black">
          ORDER YOUR FAVOURITE FOOD
        </p>
      </div>

      <div>
        <div className="MenuPage-img2 bg-fixed min-h-[800px] w-full flex justify-center items-center">
          <div className="bg-black bg-opacity-40 py-40 w-10/12 mx-auto  space-y-4">
            <h1 className="uppercase text-white text-2xl text-center ">
            SOUPS
            </h1>
            <p className="text-[8px] text-center uppercase px-20">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>

      {/* offer */}

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 w-10/12 mx-auto py-20">
        <div className="flex gap-4 justify-center items-center">
          <div className="bg-gray-300 rounded-full h-16 w-16"></div>
          <div>
            <div className="flex gap-4 text-[#737373]">
              <h1>ROAST DUCK BREAST ------------------</h1>
              <p className="text-[#D99904] text-sm">$14.5</p>
            </div>
            <p className="text-[#737373] text-sm py-4">
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
            <p className="text-[#737373] text-sm py-4">
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
            <p className="text-[#737373] text-sm py-4">
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
            <p className="text-[#737373] text-sm py-4">
              Roasted duck breast (served pink) with gratin potato and a
              griottine cherry sauce
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
