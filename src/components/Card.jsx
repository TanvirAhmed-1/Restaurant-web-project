import { useContext } from "react";
import { AuthContext } from "./Authountation/Authorization";
import TanStackQuery from "../Share/TanStackQuery";

const Card = ({ item }) => {
  const[,refetch]=TanStackQuery()
  const { users } = useContext(AuthContext);
  const { image, name, price, recipe } = item;
  const handleOrder = (d) => {
    console.log(d);
    const { _id, ...card } = d;
    fetch("http://localhost:5000/order", {
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
        if (data.acknowledged === true) {
          alert("data is save");
          refetch()
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="card card-compact bg-[#E8E8E8] lg:w-96  shadow-xl relative">
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
