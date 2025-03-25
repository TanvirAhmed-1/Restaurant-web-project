import img1 from "../assets/home/slide5.jpg"

const Card = () => {
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure className="">
          <img
          className="object-cover w-full overflow-hidden h-96"
            src={img1}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">Shoes!</h2>
          <p className="text-center">If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
