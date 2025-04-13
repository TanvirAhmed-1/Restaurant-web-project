import img1 from "../assets/home/featured.jpg";
import HomeHeader from "../Pages/Home/HomeHeader";

const Menu = () => {
  return (
    <div
      className="min-h-screen bg-fixed relative"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10">
        <div>
          <div className="flex flex-col gap-6 justify-center items-center py-10 ">
            <div>
              <p className="text-[#D99904] text-sm text-center">
                ---Check it out---
              </p>
            </div>
            <div className="border-t-2 border-b-2 border-gray-200">
              <h2 className="text-white text-xl font-semibold text-center py-2 px-6">
                FROM OUR MENU
              </h2>
            </div>
          </div>
        </div>

        <div className="md:flex  gap-10 justify-center items-center">
          <div className="md:w-[40%] px-6 md:px-0 pb-10 md:pb-0">
            <img
              className="object-cover overflow-hidden"
              src={img1}
              alt="Featured dish"
            />
          </div>
          <div className="text-white space-y-4 md:w-[40%] px-20">
            <p>March 20, 2025</p>
            <p>
              consectetur adipisicing elit. Sint molestias est repellat ut quas,
              hic adipisci quo accusamus asperiores debitis.
            </p>
            <div className="pt-8">
              <button className="uppercase btn border-l-0 border-r-0 border-t-0 border-b-2 btn-ghost bg-transparent border border-white text-white hover:bg-white hover:text-black">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
