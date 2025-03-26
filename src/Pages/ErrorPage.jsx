import React from "react";
import { Link } from "react-router-dom";
// import img1 from "../assets/shop/404.gif"

const ErrorPage = () => {
  return (
    <div className=" error-gage  min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-center gap-10 flex-col">
        <h3 className="text-xl text-black">Page not fount </h3>
        <Link to={"/"} className="btn">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
