import React from 'react'

export default function BackgroundImageText() {
  return (
    <div className="absolute top-0 left-0 lg:left-[70px] lg:top-[20px] p-10 flex flex-col  gap-10 "> 
   
      <p className="text-[#ffee4d] inline-block px-2 py-1  font-semibold rounded">
        BEST SELLER
      </p>

<h1 className=" text-2xl lg:text-6xl font-bold w-2/3 ">
        BEST DISPENSARY TO BUY WEED ONLINE
      </h1>

      <p className="text-[25px]  mb-6">
        Vitamins & Supplements
      </p>

      <div className="flex flex-row divide-x divide-gray-300 mb-6  w-80 ">
        <p className="flex-1 px-2 text-[25px]">Get 25% off</p>
        <p className="flex-1 px-2 text-[25px]">Free Shipping</p>
      </div>

      <button className="bg-green-500 text-white p-2 w-fit  hover:bg-green-600 transition rounded-full px-10 ">
        Shop All
      </button>
    </div>
  )
}
