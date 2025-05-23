import { useContext } from "react";
import { AuthContext } from "./Authountation/Authorization";
import TanStackQuery from "../Share/TanStackQuery";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const[,refetch]=TanStackQuery()
  const { users } = useContext(AuthContext);
  const navigate=useNavigate()
  const { image, name, price, recipe } = item;
  const handleOrder = (d) => {
    if(!users){
      navigate("/login")
    }
    console.log(d);
    const { _id, ...card } = d;
    fetch("https://restaurent-server-ashen.vercel.app/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: users.email,
        productId: _id,
        ...card,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Product already added"){
          Swal.fire("Product already added");
        }
        if (data.acknowledged === true) {
          Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true
          });
          refetch()
        
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="card card-compact bg-[#E8E8E8] lg:w-96  shadow-xl relative transform transition-transform duration-300 hover:scale-105">
        <figure className="">
          <img
            className="object-cover w-full overflow-hidden"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <p className=" absolute right-2 text-sm rounded-lg top-2 bg-black text-white py-1 px-4 ">
            ${price}
          </p>

          <div className="flex justify-center">
            <h2 className="card-title text-center text-black ">{name}</h2>
          </div>
          <p className="text-start line-clamp-2 text-[#737373]">{recipe}</p>
          <div className="card-actions justify-center pt-6">
            <button 
              onClick={() => handleOrder(item)}
              className="btn border-t-0 border-l-0 border-r-0 bg-[#E8E8E8] hover:bg-black  border-solid text-[#BB8506] border-b-2  border-[#BB8506]"
            >
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
