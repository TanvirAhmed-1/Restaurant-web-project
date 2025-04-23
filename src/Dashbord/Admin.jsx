import { Helmet } from "react-helmet-async";
import img from "../assets/dashboard/image-5.jpg";

const Admin = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>
      <div>
        <img src={img} alt="" className="w-full" srcset="" />
      </div>
      <div>
        <h1 className="text-6xl text-black flex justify-center items-center py-10">
          Welcome to Admin Dashboard
        </h1>
      </div>
    </div>
  );
};

export default Admin;
