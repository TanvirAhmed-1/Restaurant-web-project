import React, { useEffect, useState } from "react";
import Bkash from "../assets/icon/BKash.png";
import PayPal from "../assets/icon/PayPal.png";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Payment = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("orderData"));
    if (orderData) {
      setData([orderData]);
    }
    setLoading(false);
  }, []);

  // Price Calculation
  const price = data?.length
    ? data[0]?.items.reduce((sum, item) => sum + item.total, 0)
    : 0;
  const paymentPrice = price;
  const TotalProduct = data?.length ? data[0]?.items.length : 0;
  const TotalDiscount = data?.length ? data[0]?.discount : 0;

  // Handle Payment Method Selection
  const handlePaymentSelection = (method) => {
    setSelectedPayment((prev) => (prev === method ? null : method));
  };

  //backend data send
  const handleCheckout = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your payment Complete",
      showConfirmButton: false,
      timer: 1500,
    });

    localStorage.removeItem("orderData");

    navigate("/shop");
  };

  if (loading) {
    return <div className="text-black">Loading...</div>;
  }

  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-6 pt-40">
      <Helmet>
        <title>Bistro Boss |Payment</title>
      </Helmet>
      <h1 className="text-2xl text-black text-center uppercase mb-6">
        Choose your Payment Option
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Payment Methods Section */}
        <div className="w-full md:w-[60%] space-y-4">
          <h2 className="text-xl font-semibold text-black">
            Choose your Payment Method
          </h2>

          {/* Manual Payment Option - Bkash */}
          <div
            className="flex justify-between items-center border border-black p-4 rounded-md bg-white shadow-sm cursor-pointer"
            onClick={() => handlePaymentSelection("Bkash")}
          >
            <img src={Bkash} alt="Bkash" className="w-16 object-cover" />
            <h1 className="text-black">Payment Method: Bkash</h1>
            {selectedPayment === "Bkash" && (
              <span className="text-green-500">Selected</span>
            )}
          </div>

          {/* Manual Payment Option - PayPal */}
          <div
            className="flex justify-between items-center border border-black p-4 rounded-md bg-white shadow-sm cursor-pointer"
            onClick={() => handlePaymentSelection("PayPal")}
          >
            <img src={PayPal} alt="PayPal" className="w-16 object-cover" />
            <h1 className="text-black">Payment Method: PayPal</h1>
            {selectedPayment === "PayPal" && (
              <span className="text-green-500">Selected</span>
            )}
          </div>
        </div>

        {/* Summary Section */}

        <div className="w-full md:w-[40%]">
          <div className="text-end mb-3">
            <Link
              to={"/orderHistory"}
              className="py-2 px-3 text-black rounded-lg bg-sky-400 hover:bg-sky-600"
            >
              Order History
            </Link>
          </div>
          <div className=" border border-black p-4 rounded-md bg-gray-50 space-y-4 shadow-sm">
            <div className="flex justify-between">
              <h1 className="text-lg font-medium text-black">Total Items</h1>
              <p className="text-lg font-semibold text-black">{TotalProduct}</p>
            </div>
            <hr />
            <div className="flex justify-between uppercase">
              <h1 className="text-lg font-medium text-black">Total Price</h1>
              <p className="text-lg font-semibold text-black">
                ${price.toFixed(2)}
              </p>
            </div>
            <hr />
            <div className="flex justify-between uppercase">
              <h1 className="text-lg font-medium text-black">Discount</h1>
              <p className="text-lg font-semibold text-black">
                ${TotalDiscount.toFixed(2)}
              </p>
            </div>
            <hr />
            <div className="flex justify-between uppercase">
              <h1 className="text-lg font-medium text-black">Payment Price</h1>
              <p className="text-lg font-semibold text-black">
                ${paymentPrice.toFixed(2)}
              </p>
            </div>

            <div>
              <button
                onClick={handleCheckout}
                className={`w-full px-4 py-2 text-white bg-red-500 rounded-md transform transition-transform duration-300 hover:scale-105 ${
                  selectedPayment ? "" : "opacity-50 cursor-not-allowed"
                }`}
                disabled={!selectedPayment}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
