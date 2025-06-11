import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';

export default function MypastOrder() {
  const [pastOrders, setPastOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const pastOrdersCol = collection(db, "pastOrders");
        const pastOrdersSnapshot = await getDocs(pastOrdersCol);
        const pastOrdersList = pastOrdersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPastOrders(pastOrdersList);
      } catch (error) {
        console.error("Error fetching past orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500 text-lg">Loading past orders...</p>
      </div>
    );
  }

  if (pastOrders.length === 0) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500 text-lg">No past orders found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-800">My Past Orders</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pastOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between">
                <span className="font-semibold">Order Date:</span>
                <span>{new Date(order.orderDate).toLocaleString()}</span>
              </div>

              <div className="flex justify-between border-b-1 border-green-500 pb-2">
                <span className="font-semibold">Customer:</span>
                <span className='text-green-900' >{order.customer?.FristName} {order.customer?.LastName}</span>
              </div>

          

              <div className="mt-4">
                <h3 className="font-semibold mb-2 text-gray-800">Items:</h3>
                <div className="space-y-2">
                  {order.items?.map((item, i) => (
                    <div key={i} className="flex justify-between border-b pb-1 text-gray-600">
                      <span className="font-medium">{item.title}</span>
                      <span> {item.quantity}</span>
                      <span> {item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
                <div className="flex justify-between my-5">
                <span >Shipping Costs</span>
                <span > ${order.shippingCosts}</span>
              </div>
                <div className="flex justify-between my-5">
                <span className="font-semibold">Total:</span>
                <span className="text-red-600 font-bold">${order.totalCost}</span>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
