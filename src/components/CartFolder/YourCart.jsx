import { useState } from "react";


import { FaBagShopping, FaX } from "react-icons/fa6";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";


export default function YourCart({ showCart }) {
  const [show, setShow] = useState(false);

 const {items}= useSelector((state)=>state.Cart)
 console.log(items);


  return (
    <div className="relative ">

      <button onClick={() => setShow(!show)} className="hover:text-green-500 text-3xl">
<div className="relative inline-block">
  <FaBagShopping className="text-2xl" />

  <p className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
 {items.length }
  </p>
</div>

      </button>


      <div
        className={`fixed p-5 right-0 z-50 top-0 h-full w-full lg:w-1/2 bg-white rounded-t-2xl shadow-2xl transition-transform duration-500 ease-in-out
          ${show ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-300"> 
          <h1 className="text-4xl mb-4">Your Cart</h1>
            <p className="text-gray-500 mb-4">({items.length})</p>
          <button onClick={() => setShow(false)} className="text-gray-500 hover:text-red-500">
            <FaX />

          </button>

      <div>
   
      </div>
        
        </div>


<CartItems items={items} setShow={setShow} />
      </div>
    </div>
  );
}
