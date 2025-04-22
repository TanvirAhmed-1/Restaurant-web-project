import { useContext, useEffect, useState } from "react";
import useAxios from "../Share/useAxios";
import { AuthContext } from "./Authountation/Authorization";

const OrderHistory = () => {
  const [data, setData] = useState([]);
  const axiosUrl = useAxios();
  const { users } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (users?.email) {
          const res = await axiosUrl.get(`/payments/${users.email}`);
          console.log("Payments:", res.data);
          const allItems = res.data.flatMap(order => order.items);
          setData(allItems);
        }
      } catch (err) {
        console.error("Failed to fetch payments:", err);
      }
    };

    fetchData();
  }, [axiosUrl, users?.email]);

  if (!users?.email) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-4 text-black">
      <div className="overflow-x-auto">
        <table className="table text-black w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((v, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={v.image} alt={v.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{v.name}</td>
                <td>{v.quantity}</td>
                <td>${v.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
