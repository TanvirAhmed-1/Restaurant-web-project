
import { Parallax, Background } from 'react-parallax';

const HeaderImg = ({title,img,subtitle}) => {
    return (

      <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
      bgImageStyle={{ objectFit: "cover",objectPosition: "center", }} 
  >
      Blur transition from min to max
      <div
         className=" hero min-h-screen">
        <div className="bg-black bg-opacity-40 py-40 px-72 z-40 space-y-4">
          <h1 className="uppercase text-white text-5xl text-center ">
            {title}
          </h1>
          <p className="text-sm text-center uppercase">
            {subtitle}
          </p>
        </div>
      </div>
  </Parallax>


    );
};

export default HeaderImg;