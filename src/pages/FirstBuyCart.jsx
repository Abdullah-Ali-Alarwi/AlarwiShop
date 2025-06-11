import CartItems from "../components/CartFolder/CartItems";
import { FaBagShopping, FaBoxArchive, FaCar, FaJediOrder, FaX } from "react-icons/fa6";
import { useState } from "react";



export default function FirstBuyCart() {
   const [show, setShow] = useState(true);
  return (  

    <div className="flex ">

  
  
<div>
 <div className="flex flex-col lg:flex-row ">
   {/* start of the Cart */}
      <div
        className={` p-5 right-0 z-50 m-5  lg:w-1/2 bg-white  border-[#F2F6F4] border-2 transition-transform duration-500 ease-in-out
          ${show ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-300"> 
          <h1 className="text-2xl mb-4">Your Cart</h1>
            <p className="text-gray-500 mb-4">(0)</p>
        </div>
<CartItems/>



    

      </div>
        {/* end  of the Cart */}

        <div className="w-[95%] lg:w-1/2 h-[422px]  flex  flex-col justify-around gap-5   border-[#F2F6F4] border-2  p-7 m-auto  mt-5">
          <div className="flex justify-between">
            <p className="text-[#9D9EA2] font-bold"> Subtotal</p>
            <p>$497.00</p>
          </div>
          <div className="flex font-semibold  justify-between">
            <p className="text-[#9D9EA2]"> Discount</p>
            <p>$$0.0</p>
          </div>
          <div className="flex font-semibold  justify-between">
            <p className="text-[#9D9EA2]"> Shipping Costs</p>
            <p>$50.00</p>
          </div>
          <div className="flex  font-semibold justify-between">
            <p className="text-[#9D9EA2] border-2  border-[#e3e4e8] p-1 rounded-[7px]" >Coupon code</p>
           <button  className="bg-green-100 text-green-800 p-1 rounded-2xl">Apply Coupon</button>
          </div>
 <p className="font-semibold m-1.5">Get Free Shipping for orders over <span className="text-red-500">$100.00</span> </p>


 <button className="bg-[#9D9EA2] p-1 rounded-2xl w-full text-white m-auto font-semibold py-3 "> 
  Checkout | $547.00
 </button>
        </div>
 </div>


    <div className="lg:flex justify-center ">

          <div className=" m-3 w-full p-5 lg:w-1/4 border-[#F2F6F4] border-2">
           <div className="rounded-full p-3 flex  w-fit bg-[#F2F6F4]"> <FaJediOrder/></div>
           <h4>Order by 10pm for free next day delivery on Orders overs $100</h4>
           <p className="text-[#717378]">We deliver Monday to Saturday - excluding Holidays  </p>
          </div>
          <div className=" m-3 w-full p-5 lg:w-1/4 border-[#F2F6F4] border-2">
           <div className="rounded-full p-3 flex  w-fit bg-[#F2F6F4]"> <FaBoxArchive/></div>
           <h4>Free next day delivery to stores.</h4>
           <p className="text-[#717378]">Home delivery is $4.99 for orders under $100 and is FREE for all orders over $100  </p>
          </div>
          <div className=" m-3 w-full p-5 lg:w-1/4 border-[#F2F6F4] border-2">
           <div className="rounded-full p-3 flex  w-fit bg-[#F2F6F4]"> <FaCar/></div>
          
           <p className="text-[#717378]">30 days to return it to us for a refund. We have made returns SO EASY - you can now return your order to a store or send it with FedEx FOR FREE </p>
          </div>


        </div>


</div>

  
   </div>
  
  );
}
