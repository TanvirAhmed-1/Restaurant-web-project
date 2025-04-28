import { FaPen, FaTrash } from "react-icons/fa";
import HomeHeader from "../Pages/Home/HomeHeader";
import useDataHook from "../Share/useDataHook";
import useAxios from "../Share/useAxios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AllProducts = () => {
  const { menu } = useDataHook();
  const axiosUrl = useAxios();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(menu);
  }, [menu]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosUrl.delete(`/menu/delete/${id}`)
          .then((res) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const updateData = product.filter((v) => v._id !== id);
            setProduct(updateData);
          })
          .catch((err) => {
            console.log("Delete error:", err);
          });
      }
    });
  };

  return (
    <div className="px-4 md:px-8 lg:px-16">
      <Helmet>
        <title>Mamma Mia | All Product</title>
      </Helmet>
      <HomeHeader pTitle="---Hurry Up!---" header="MANAGE ALL ITEMS" />

      <div className="overflow-x-auto mt-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h1 className="text-black text-lg md:text-2xl font-semibold mb-2 md:mb-0">
            Total Products: {product?.length}
          </h1>
          <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
            You can add or delete your products from here.
          </p>
        </div>

        <table className="min-w-full bg-white border border-gray-300 text-black text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-2 md:px-4 border">#</th>
              <th className="py-2 px-2 md:px-4 border">Image</th>
              <th className="py-2 px-2 md:px-4 border">Name</th>
              <th className="py-2 px-2 md:px-4 border">Category</th>
              <th className="py-2 px-2 md:px-4 border">Price</th>
              {/* <th className="py-2 px-2 md:px-4 border">Recipe</th> */}
              <th className="py-2 px-2 md:px-4 border">Delete</th>
              <th className="py-2 px-2 md:px-4 border">Update</th>
            </tr>
          </thead>
          <tbody>
            {product?.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-2 md:px-4 border">{index + 1}</td>
                <td className="py-2 px-2 md:px-4 border">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 md:w-16 md:h-16 object-cover mx-auto rounded"
                  />
                </td>
                <td className="py-2 px-2 md:px-4 border">{item.name}</td>
                <td className="py-2 px-2 md:px-4 border">{item.category}</td>
                <td className="py-2 px-2 md:px-4 border">${item.price}</td>
                {/* <td className="py-2 px-2 md:px-4 border">{item.recipe}</td> */}
                <td className="py-2 px-2 md:px-4 border">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </td>
                <td className="py-2 px-2 md:px-4 border">
                  <Link
                    to={`/dashboard/Product/update/${item._id}`}
                    className="text-sky-400 hover:text-sky-600 flex justify-center"
                  >
                    <FaPen />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
