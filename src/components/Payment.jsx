import React, { useEffect, useState } from "react";
import useAxios from "../Share/useAxios";
import Bkash from "../assets/icon/BKash.png";

const Payment = () => {
  const axiosBase = useAxios();
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosBase
      .get("/payments")
      .then((res) => {
        console.log("Payments:", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch payments:", err);
      });
  }, []);

  const price = data?.reduce((sum, item) => sum + item.finalPrice, 0);
  const paymentPrice = data?.reduce((sum, item) => sum + item.totalPrice, 0);
  const TotalProduct = data?.reduce((sum, item) => sum + item.items.length, 0);
  const TotalDiscount = data?.reduce((sum, item) => sum + item.discount, 0);

  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-6">
      <h1 className="text-2xl text-black text-center uppercase mb-6">
        Choose your Payment Option
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Payment Method */}
        <div className="w-full md:w-[60%] space-y-4">
          <h2 className="text-xl font-semibold text-black">
            Choose your Payment Method
          </h2>

          {/* Payment Options */}
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="flex justify-between items-center border border-black p-4 rounded-md bg-white shadow-sm"
            >
              <img src={Bkash} alt="Bkash" className="w-16 object-cover" />
              <h1 className="text-black">Payment Method: Bkash</h1>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="w-full md:w-[40%] border border-black p-4 rounded-md bg-gray-50 space-y-4 shadow-sm">
          <div className="flex justify-between">
            <h1 className="text-lg font-medium text-black">Total Items</h1>
            <p className="text-lg font-semibold text-black">{TotalProduct}</p>
          </div>
          <hr />
          <div className="flex justify-between uppercase">
            <h1 className="text-lg font-medium text-black">Total Price</h1>
            <p className="text-lg font-semibold text-black">${price}</p>
          </div>
          <hr />
          <div className="flex justify-between uppercase">
            <h1 className="text-lg font-medium text-black">Discount</h1>
            <p className="text-lg font-semibold text-black">${TotalDiscount}</p>
          </div>
          <hr />
          <div className="flex justify-between uppercase">
            <h1 className="text-lg font-medium text-black">Payment Price</h1>
            <p className="text-lg font-semibold text-black">${paymentPrice}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Payment;
