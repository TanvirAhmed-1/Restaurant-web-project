import img1 from "../assets/home/featured.jpg"

const Menu = () => {
  return (
    <div className="menu-css bg-fixed">
      <div></div>
      <div className="md:flex gap-20 px-40 py-40 justify-center items-center">
        <div>
          <img className=" object-cover overflow-hidden" src={img1} alt="" srcset="" />
        
        </div>
        <div>
          <p>March 20,2025</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestias est repellat ut quas, hic adipisci quo accusamus asperiores debitis.</p>
          <button className="uppercase btn btn-ghost bg-transparent">read more</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
