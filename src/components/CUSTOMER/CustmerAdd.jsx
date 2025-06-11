import React from 'react'

import { FaStar } from "react-icons/fa";


export default function CustmerAdd() {
  return (
    <div>
      <div className="lg:w-[379px] h-[424px] text-white bg-[#05422C] rounded-3xl m-3">
  <p className=" border-b-2 m-3 p-5 text-white text-4xl border-[#346654]">
    VOTED BEST ONLINE DISPENSARY IN YEMEN
  </p>
<div>
  <p className="text-2xl text-[#FFFFFF]] m-5">Google</p>
  <p className="text-sm m-5 font-semibold">EXELLENCET</p>
 <div className="flex   m-3 gap-1.5 ">
   <div className= " flex gap-1 text-yellow-400 items-center justify-center">
             <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

  </div>
  <div className="flex gap-1.5">
    <p>on 135 </p>
    <p>|</p>
    <p>Reviews</p>
  </div>
 </div>
</div>

</div>
    </div>
  )
}
