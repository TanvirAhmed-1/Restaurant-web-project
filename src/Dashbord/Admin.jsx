import { Helmet } from "react-helmet-async";
import img from "../assets/dashboard/image-5.jpg";
import useAxios from "../Share/useAxios";
import { useQuery } from "@tanstack/react-query";

const Admin = () => {
  const AxiosSecure = useAxios();

  const { data: stat } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const res = await AxiosSecure.get("/dashboard/stat");
      return res.data;
    }
  });

  return (
    <div className="w-full px-4 md:px-8 lg:px-16">
      <Helmet>
        <title>Mamma Mia | Dashboard</title>
      </Helmet>

      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black py-8">
          Welcome to Admin Dashboard
        </h1>
      </div>

      <div className="text-black mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="stat bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center">
            <div className="stat-title text-gray-600">Total Items</div>
            <div className="stat-value text-primary">{stat?.Menu ?? 0}</div>
          </div>

          <div className="stat bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center">
            <div className="stat-title text-gray-600">Total Orders</div>
            <div className="stat-value text-primary">{stat?.Order ?? 0}</div>
          </div>

          <div className="stat bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center">
            <div className="stat-title text-gray-600">Total Reviews</div>
            <div className="stat-value text-secondary">{stat?.Review ?? 0}</div>
          </div>

          <div className="stat bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center">
            <div className="stat-title text-gray-600">Total Order Price</div>
            <div className="stat-value text-success">${stat?.FinalAmount ?? 0}</div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <img src={img} alt="Dashboard Visual" className="w-full h-auto rounded-xl shadow-lg object-cover" />
      </div>
    </div>
  );
};

export default Admin;
