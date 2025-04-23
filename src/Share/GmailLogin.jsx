import { BsGoogle } from "react-icons/bs";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { AuthContext } from "../components/Authountation/Authorization";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GmailLogin = () => {
  const { gmailUser,setUsers} = useContext(AuthContext);
  const navigate=useNavigate()
  const location=useLocation()
  const handleGmailLogin = () => {
    gmailUser()
      .then((result) => {
        console.log(result.user);
        setUsers(result.user)
        navigate(location?.state ? location.state : "/")
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message)
      });
  };
  return (
    <div>
      <h5 className="text-sm text-black text-center">Or sign in with</h5>
      <div className="flex gap-4 justify-center items-center py-6">
        {/* <button className="bg-white p-2 hover:bg-sky-400  rounded-full border border-solid border-gray-500">
          <FaFacebook className="text-xl text-black " />
        </button> */}

        <button
          onClick={handleGmailLogin}
          className="bg-white p-2 rounded-full hover:bg-sky-400 border border-solid border-gray-500"
        >
          <BsGoogle className="text-xl text-black " />
        </button>

        {/* <button className="bg-white hover:bg-sky-400  p-2 rounded-full border border-solid border-gray-500">
          <FaGithub className="text-xl text-black " />
        </button> */}
      </div>
    </div>
  );
};

export default GmailLogin;
