import { FaPhoneAlt } from "react-icons/fa";
import "../../index.css";
import { PiTelegramLogoLight } from "react-icons/pi";

const ContactUs = () => {
  return (
    <div className="bg-white">
      <div className="contact-img min-h-[800px] w-full flex justify-center items-center">
        <div className="bg-black bg-opacity-40 py-40 px-72 z-40 space-y-4">
          <h1 className="uppercase text-white text-5xl text-center">
            Contact us
          </h1>
          <p className="text-sm text-center">Would you like to try a dish?</p>
        </div>
      </div>

      {/* location */}
      <div className="py-10">
        <p className="text-[#D99904] text-sm text-center">---Visit Us---</p>
        <div className="flex justify-center items-center py-10">
          <p className="text-black text-2xl text-center border-t-2 border-b-2 py-4 border-gray-400">
            OUR LOCATION
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 lg:w-10/12 mx-auto pb-20 p-6">
          <div className=" border border-solid border-gray-300 flex justify-center items-center flex-col pb-10">
            <div className="bg-[#D99904] py-6 w-full flex justify-center items-center ">
              <p>
                <FaPhoneAlt className="text-xl text-white " />
              </p>
            </div>
            <div className="bg-[#F3F3F3]  grid justify-center items-center w-4/5 pt-10 pb-20">
              <h1 className="uppercase text-black font-semibold text-center">
                Phone
              </h1>
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
              <h1 className="uppercase text-black font-semibold text-center">
                Phone
              </h1>
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
              <h1 className="uppercase text-black font-semibold text-center">
                Phone
              </h1>
              <p className="text-gray-500 py-2 text-sm">+38 (012) 34 56 789</p>
            </div>
          </div>
        </div>

        {/* contact form */}

        <div className="lg:p-20  md:w-10/12 p-10 md:p-6 mx-auto bg-gray-200">
          <p className="text-[#D99904] text-sm text-center">---Visit Us---</p>
          <div className="flex justify-center items-center py-4">
            <p className="text-black text-2xl text-center border-t-2 border-b-2 py-4 border-gray-400">
              CONTACT FORM
            </p>
          </div>
          <div className="py-16">
            <div className=" grid md:grid-cols-2 gap-2  grid-cols-1 ">
              <label className="floating-label bg-white w-full">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="input file-input-md bg-white w-full text-black border-gray-400"
                />
                <span className="">Name</span>
              </label>
              <label className="floating-label">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="input input-md bg-white w-full text-black border-gray-400"
                />
                <span className="">Email</span>
              </label>
            </div>
            <label className="floating-label py-6">
              <span>Your Phone</span>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="input input-md w-full bg-white border-gray-400"
              />
            </label>
            <fieldset className="floating-label">
            <span className="text-xl">Message</span>
              <textarea className="textarea h-24 w-full border-gray-400 bg-white" placeholder="Write your message here"></textarea>
              <div className="fieldset-label">Optional</div>
            </fieldset>

            <div className="flex justify-center items-center">
            <button className="btn border-none text-white bg-[#D99904]">Send Message <PiTelegramLogoLight className="text-white" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
