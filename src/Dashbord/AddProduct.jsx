import { useForm } from "react-hook-form";
import HomeHeader from "../Pages/Home/HomeHeader";
import axios from "axios";
import useAxios from "../Share/useAxios";
import Swal from "sweetalert2";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const axiosBas=useAxios()
  
const URL=import.meta.env.VITE_IMAGE_URL

const onSubmit = async (data) => {
    const fileImage = data.image[0];
  
    // Prepare FormData
    const formData = new FormData();
    formData.append("image", fileImage);
  
    try {
      const res = await axios.post(URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      const imageUrl = res.data?.data?.display_url;
      console.log("Image uploaded:", imageUrl);
  
      // product data
      const sendData = {
        name: data.recipeName,
        recipe: data.recipeDetails,
        image: imageUrl, 
        category: data.category,
        price: parseFloat(data.price),
      };
  
      console.log(" Final Data to Send:", sendData);
  
      // Send to backend
      const res2= await axiosBas.post('/menu', sendData);
      console.log(res2)
      if(res2.data.acknowledged===true){
           Swal.fire({
             position: "top-end",
             icon: "success",
             title: "Product is Upload successfully",
             showConfirmButton: false,
             timer: 1500,
           });
      }     
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
    <div>
      <HomeHeader pTitle="---What's new?---" header="ADD AN ITEM" />

      <div className="bg-gray-200 w-8/12 mx-auto p-10 rounded-md mb-40">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Recipe Name */}
          <div>
            <label className="label text-black mb-1">Recipe Name</label>
            <input
              {...register("recipeName", { required: true })}
              type="text"
              className="input w-full bg-white text-black placeholder:text-gray-300"
              placeholder="Recipe Name"
            />
          </div>

          {/* Category and Price */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="label text-black mb-1">Category</label>
              <select
                {...register("category", { required: true })}
                className="select w-full bg-white text-black placeholder:text-gray-300"
              >
                <option value="">Select a category</option>
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
                className="input w-full bg-white text-black placeholder:text-gray-300"
                placeholder="Price"
              />
            </div>
          </div>

          {/* Recipe Details */}
          <div>
            <label className="label text-black mb-1">Recipe Details</label>
            <textarea
              {...register("recipeDetails", { required: true })}
              className="textarea h-24 w-full bg-white text-black placeholder:text-gray-300"
              placeholder="Describe the recipe..."
            />
          </div>

          {/* File Upload */}
          <div className="flex flex-col gap-1">
            <label className="label text-black">Upload Image</label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input bg-white text-gray-300"
            />
            <span className="text-sm text-gray-500">Max size: 2MB</span>
          </div>

          {/* Submit Button */}
          <button className="btn btn-neutral mt-4 bg-[#D1A054] border-none text-black">
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
