import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import CartItems from '../components/CartFolder/CartItems';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { addPastOrderToFirestore } from '../Store/Slices/PastOrdersSlice';
import { clearCart } from '../Store/Slices/CartSlice';  

export default function ThirdOrderComplete() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { FristName, LastName, Country, City, Street, Email, PhonNumber } = useSelector((state) => state.order);
  const cartItems = useSelector((state) => state.Cart.items);
  const items = useSelector((state) => state.Cart.items);
  const shippingCosts = useSelector((state) => state.Cart.ShippingCosts);
  const totalCost = useSelector((state) => state.Cart.totallCoust);
  const itemsCosts = items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  const handleNewOrder = async () => {
    const orderData = {
      customer: { FristName, LastName, Country, City, Street, Email, PhonNumber },
      items: cartItems,
      itemsCosts,
      shippingCosts,
      totalCost,
      orderDate: new Date().toISOString(),
    };

    try {
      await dispatch(addPastOrderToFirestore(orderData)).unwrap();

      dispatch(clearCart());

      navigate('/', { replace: true });

      toast.success(`Thank you ${FristName}, your order was placed successfully!`);
    } catch (error) {
      toast.error(`Failed to place order: ${error}`);
    }
  };

  return (
    <div className="w-[90%] m-auto">
      <div className="border-b-2 border-b-[#c5bebe] flex justify-between m-5 pb-3">
        <p>Your Order</p>
        <span className="flex items-center gap-2">
          <FaCheck className="text-white p-1 bg-green-500 rounded-full" /> Paid
        </span>
      </div>

      <CartItems hiddenButton={true} />

      <div className="flex gap-2 flex-col m-2 border-[.5px] rounded-[5px] border-[#e5dfdf] p-3">
        <div className="flex justify-between">
          <p className="text-gray-400">Full Name</p>
          <p>{FristName + ' ' + LastName}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400">Country</p>
          <p>{Country}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400">City</p>
          <p>{City}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400">Street</p>
          <p>{Street}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400">Email</p>
          <p>{Email}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400">PhonNumber</p>
          <p>{PhonNumber}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400">Items Costs</p>
          <p>${itemsCosts}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400">Shipping Costs</p>
          <p>${shippingCosts}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-1">TOTAL</p>
          <p className="text-2 text-red-500 font-bold">${totalCost.toFixed(2)}</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-gray-400 m-3">New Order, Click button below</p>

          <button
            onClick={handleNewOrder}
            className="bg-[#17AF26] text-white p-2 rounded-[22px] w-full lg:w-1/5"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
