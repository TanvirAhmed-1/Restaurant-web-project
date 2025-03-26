import { FaPhoneAlt } from "react-icons/fa";
import "../../index.css";

const ContactUs = () => {
  return (
    <div className="bg-white">
      <div className="contact-img min-h-[800px] w-full flex justify-center items-center">
        <div className="bg-black opacity-40 py-40 px-72 z-40 space-y-4">
          <h1 className="uppercase text-white text-5xl text-center">
            Contact us
          </h1>
          <p className="text-sm text-center">Would you like to try a dish?</p>
        </div>
      </div>

      {/* location */}
      <div>
        <p className="text-[#D99904] text-sm text-center">
        ---Visit Us---
        </p>
        <div className="flex justify-center items-center py-10">
            <p className="text-black text-2xl text-center border-t-2 border-b-2 py-4 border-gray-400">
            OUR LOCATION
            </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 w-10/12 mx-auto pb-20">
            <div className=" border border-solid border-gray-300 flex justify-center items-center flex-col pb-10">
                <div className="bg-[#D99904] py-6 w-full flex justify-center items-center ">
                <p>
                <FaPhoneAlt className="text-xl text-white " />
                </p>
                </div>
                <div className="bg-[#F3F3F3]  grid justify-center items-center w-4/5 pt-10 pb-20">
                <h1 className="uppercase text-black font-semibold text-center">Phone</h1>
                <p className="text-gray-500 py-2 text-sm">+38 (012) 34 56 789</p>
                </div>
            </div>

            <div className=" border border-solid border-gray-300 flex justify-center items-center flex-col pb-10">
                <div className="bg-[#D99904] py-6 w-full flex justify-center items-center ">
                <p>
                <FaPhoneAlt className="text-xl text-white " />
                </p>
                </div>
                <div className="bg-[#F3F3F3]  grid justify-center items-center w-4/5 pt-10 pb-20">
                <h1 className="uppercase text-black font-semibold text-center">Phone</h1>
                <p className="text-gray-500 py-2 text-sm">+38 (012) 34 56 789</p>
                </div>
            </div>

            <div className=" border border-solid border-gray-300 flex justify-center items-center flex-col pb-10">
                <div className="bg-[#D99904] py-6 w-full flex justify-center items-center ">
                <p>
                <FaPhoneAlt className="text-xl text-white " />
                </p>
                </div>
                <div className="bg-[#F3F3F3]  grid justify-center items-center w-4/5 pt-10 pb-20">
                <h1 className="uppercase text-black font-semibold text-center">Phone</h1>
                <p className="text-gray-500 py-2 text-sm">+38 (012) 34 56 789</p>
                </div>
            </div>
            
            
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
