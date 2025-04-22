import { useState } from "react";
import { IoBagAddOutline } from "react-icons/io5";
import TanStackQuery from "../Share/TanStackQuery";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxios from "../Share/useAxios";
import { Link } from "react-router-dom";

const YourOrder = () => {
  const [data, refetch] = TanStackQuery();
  const axiosBase = useAxios();
  const [orderPrice, setOrderPrice] = useState({});

  // Get count for item or default to 1
  const getCount = (id) => orderPrice[id] || 1;

  // Increment quantity
  const increment = (id) => {
    setOrderPrice((newData) => ({
      ...newData,
      [id]: getCount(id) + 1,
    }));
  };

  // Decrement
  const decrement = (id) => {
    setOrderPrice((newData) => ({
      ...newData,
      [id]: getCount(id) > 1 ? getCount(id) - 1 : 1,
    }));
  };

  // Total price
  const totalPrice = data?.reduce((sum, item) => {
    return sum + item.price * getCount(item._id);
  }, 0);

  // Discount
  const discount = data?.length >= 3 ? totalPrice * 0.1 : 0;
  const finalPrice = totalPrice - discount;

  if (data?.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center p-6">
        <IoBagAddOutline className="text-5xl text-red-400" />
        <h1 className="text-lg font-semibold">You have No Order</h1>
        <h1 className="text-sm text-gray-500">Please Add to Order</h1>
      </div>
    );
  }

  // Backend data send
  const handleCheckout = () => {
    const orderItems = data.map((item) => ({
      productId: item._id,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: getCount(item._id),
      total: item.price * getCount(item._id),
    }));
  
    const orderData = {
      items: orderItems,
      totalPrice: totalPrice,
      discount: discount,
      finalPrice: finalPrice,
      orderTime: new Date().toISOString(),
    };
  
    fetch("http://localhost:5000/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Order Response:", data);
        if (data.acknowledged) {
          alert("✅ Order placed successfully!");
          refetch();
        } else {
          alert("⚠️ Something went wrong while placing the order.");
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        alert("❌ Failed to place the order. Please try again.");
      });
  };
  

  return (
    <div className="bg-white px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Your Order</h1>
      <div className="flex flex-col md:flex-row justify-center items-start gap-6">
        {/* Order List */}
        <div className="w-full md:w-[70%] grid gap-4">
          {data?.map((v) => (
            <div key={v._id} className="border rounded-lg p-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 items-center gap-4">
                <div className="border p-2 w-full md:w-28 mx-auto">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <h1 className="text-sm md:col-span-2 text-black">{v.name}</h1>
                <p className="text-sm text-black">
                  Price: ${v.price} × {getCount(v._id)}
                </p>
                <div className="text-black grid grid-cols-3 items-center gap-0 border border-black rounded overflow-hidden w-28">
                  <button
                    onClick={() => increment(v._id)}
                    className="px-3 py-1 border-r border-black text-lg font-semibold"
                  >
                    +
                  </button>
                  <span className="px-3 py-1 text-center text-lg font-medium">
                    {getCount(v._id)}
                  </span>
                  <button
                    onClick={() => decrement(v._id)}
                    className="px-2 py-1 border-l border-black text-xl font-semibold"
                  >
                    -
                  </button>
                </div>
                <div className="flex justify-center">
                  <RiDeleteBin6Line className="text-xl text-red-500 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Checkout Card */}
        <div className="w-full md:w-[30%] border rounded-lg p-4 space-y-4 bg-gray-50">
          <h1 className="text-xl font-bold text-black">CART TOTAL</h1>
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-medium text-black">TOTAL ITEM:</h2>
            <p className="text-black">{data?.length}</p>
          </div>
          <hr />
          <div className="space-y-3">
            <h2 className="text-sm font-medium text-black">Delivery:</h2>
            <p className="text-xs text-gray-500">Standard Delivery</p>
            <button className="text-sky-400 text-sm underline">
              Change the location
            </button>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-black">Total price</h2>
            <p className="text-xl font-bold text-black">${finalPrice.toFixed(2)}</p>
          </div>
          {data?.length >= 3 && (
            <p className="text-sm text-green-400 flex">
              You get a 10% Discount. Enjoy your dish!
            </p>
          )}
          <div>
            <Link to={"/payment"}
            
              onClick={handleCheckout}
              className="w-full px-4 py-2 text-white bg-red-500 rounded-md transform transition-transform duration-300 hover:scale-105"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourOrder;
