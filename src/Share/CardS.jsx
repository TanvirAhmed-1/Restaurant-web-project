import { Link } from "react-router-dom";

const CardS = ({item}) => {
  const {image,name,price,recipe}=item
  return (
    <div>
      <div className="card card-compact bg-[#E8E8E8] lg:w-80  shadow-xl relative transform transition-transform duration-300 hover:scale-110">
        <figure className="">
          <img
          className="object-cover w-full overflow-hidden"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <p className=" absolute right-2 text-sm rounded-lg top-2 bg-black text-white py-1 px-4 ">${price}</p>

          <div className="flex justify-center">
          <h2 className="card-title text-center text-black ">{name}</h2>
          </div>
          <p className="text-start line-clamp-2 text-[#737373]">{recipe}</p>
          <div className="card-actions justify-center pt-6">
            <Link to={"/shop"} className="btn border-t-0 border-l-0 border-r-0 bg-[#E8E8E8] hover:bg-black  border-solid text-[#BB8506] border-b-2  border-[#BB8506]">Add to Card</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardS;
