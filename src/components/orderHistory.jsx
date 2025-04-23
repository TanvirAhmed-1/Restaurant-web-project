import { useContext, useEffect, useState } from "react";
import useAxios from "../Share/useAxios";
import { AuthContext } from "./Authountation/Authorization";
import { Helmet } from "react-helmet-async";

const OrderHistory = () => {
  const [data, setData] = useState([]);
  const axiosUrl = useAxios();
  const { users } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (users?.email) {
          const res = await axiosUrl.get(`/payments/${users.email}`);
          const allItems = res.data.flatMap(order => order.items);
          setData(allItems);
        }
      } catch (err) {
        console.error("Failed to fetch payments:", err);
      }
    };

    fetchData();
  }, [axiosUrl, users?.email]);

  const totalAmount = data.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="text-black p-4 w-full mx-auto">
                  <Helmet>
                    <title>Bistro Boss | Order History</title>
                  </Helmet>
      <h2 className="text-2xl font-bold text-center mb-4">Order History</h2>

      <div className="bg-gray-100 rounded-md p-4 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-lg font-semibold">Total Orders: {data.length}</p>
        <p className="text-lg font-semibold">Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>

      <div className="overflow-x-auto bg-white rounded-md shadow-md">
        <table className="table w-full text-black">
          <thead className="bg-gray-200 text-black">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="w-12 h-12 rounded overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${(item.total / item.quantity).toFixed(2)}</td>
                <td>${item.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
