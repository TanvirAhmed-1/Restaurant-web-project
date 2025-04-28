import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useDataHook from "../Share/useDataHook";
import useAxios from "../Share/useAxios";
import HomeHeader from "../Pages/Home/HomeHeader";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateProduct = () => {
  const { id } = useParams();
  const { menu } = useDataHook();
  const axiosSecure = useAxios();
  const [product, setProduct] = useState(null);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const selected = menu?.find((item) => item._id === id);
    if (selected) {
      setProduct(selected);
    }
  }, [id, menu]);

  const onSubmit = async (data) => {
    const updateData = {
      name: data.recipeName,
      category: data.category,
      price: parseFloat(data.price),
      recipe: data.recipeDetails,
    };

    try {
      const res = await axiosSecure.patch(`/menu/update/${id}`, updateData);
      console.log("Updated:", res.data);
      if (res.data.acknowledged === true) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "product Update Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div className="w-full px-20">
      <Helmet>
        <title>Mamma Mia | Update Profile</title>
      </Helmet>
      <HomeHeader pTitle="---Update Item---" header="UPDATE AN ITEM" />
      <div className="bg-gray-200 w-full mx-auto p-10 rounded-md mb-40">
        {!product ? (
          <p className="text-center font-semibold text-lg">
            Loading product...
          </p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Recipe Name */}
            <div>
              <label className="label text-black mb-1">Recipe Name</label>
              <input
                {...register("recipeName", { required: true })}
                type="text"
                defaultValue={product.name}
                className="input w-full bg-white text-black"
              />
            </div>

            {/* Category and Price */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="label text-black mb-1">Category</label>
                <select
                  {...register("category", { required: true })}
                  defaultValue={product.category}
                  className="select w-full bg-white text-black"
                >
                  <option value="Salad">Salad</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Soup">Soup</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Drinks">Drinks</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="label text-black mb-1">Price</label>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  defaultValue={product.price}
                  className="input w-full bg-white text-black"
                />
              </div>
            </div>

            {/* Recipe Details */}
            <div>
              <label className="label text-black mb-1">Recipe Details</label>
              <textarea
                {...register("recipeDetails", { required: true })}
                defaultValue={product.recipe}
                className="textarea h-24 w-full bg-white text-black"
              />
            </div>

            <button className="btn btn-neutral mt-4 bg-[#D1A054] border-none text-black">
              Update Item
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UpdateProduct;
