

const HeaderImg = ({title,img,subtitle}) => {
    return (
        <div
        style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          backgroundImage: `url(${img})`,
        }}
         className="object-cover overflow-hidden min-h-[800px] w-full flex justify-center items-center">
        <div className="bg-black bg-opacity-40 py-40 px-72 z-40 space-y-4">
          <h1 className="uppercase text-white text-5xl text-center ">
            {title}
          </h1>
          <p className="text-sm text-center uppercase">
            {subtitle}
          </p>
        </div>
      </div>

    );
};

export default HeaderImg;