import { BsGoogle } from "react-icons/bs";
import { FaFacebook, FaGithub } from "react-icons/fa";

const GmailLogin = () => {
    return (
        <div>
            <h5 className="text-sm text-black text-center">Or sign in with</h5>
           <div className="flex gap-4 justify-center items-center py-6">
           <button className="bg-white p-2 rounded-full border border-solid border-gray-500">
           <FaFacebook className="text-xl text-black "/>
           </button>

           <button className="bg-white p-2 rounded-full border border-solid border-gray-500">
           <BsGoogle  className="text-xl text-black "/>
           </button>

           <button className="bg-white p-2 rounded-full border border-solid border-gray-500">
           <FaGithub className="text-xl text-black " />
           </button>
           
            </div> 
        </div>
    );
};

export default GmailLogin;