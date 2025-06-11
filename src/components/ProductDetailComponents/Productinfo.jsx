import React from 'react'
import ProudctCustmerRview from './ProudctCustmerRview'
import AddReview from './AddReview'
import { useDispatch } from 'react-redux'
import { AddItem } from '../../Store/Slices/CartSlice';



export default function Productinfo({item}) {

const dispatch= useDispatch();
  return (
    <div className='flex flex-col m-5 p-4 bg-white shadow-lg rounded-lg'>
     <div>
        <p className='text-[#9D9EA2]'>CONCENTRATES</p>
        <h1 className='font-semibold text-3xl'>{item.title}</h1>

<div>
    <button className='bg-[#F2F6F4] p-2 rounded-2xl text-green-900 font-semibold m-2'>{item.category}</button>
    <button className='bg-[#F2F6F4] p-2 rounded-2xl text-green-900 font-semibold m-2'>stock {item.stock} </button>
</div>

<div className='flex gap-2 items-center justify-around my-4'>
    <div className='flex gap-2 items-center'>
        <span className='line-through text-[#9D9EA2] font-semibold'>$200.00</span>
        <span className='text-red-500 font-bold'>${item.price}</span>
    </div>
    <div className='flex  gap-2 items-center justify-around'>
    <span className=' font-semibold'>4.6/5</span>
    <span className=' font-semibold'> <span>{item.rating}</span> Reviews</span>
    </div>
</div>
     </div>




     <div>
        <p className='font-semibold text-[#717378]'>DESCRIPTION  </p>

        <p className='border-b border-[#E0E0E0] pb-2'>{item.description}</p>
     </div>

     <div className='flex flex-row items-center justify-center shadow rounded-2xl gap-2 my-4 px-'>
<div>
    <button className=' hover:bg-emerald-100  p-2 rounded-2xl text-green-900 font-semibold m-2'>+</button>
        <span className='font-semibold  bg-[#F2F6F4] rounded-2xl p-2'>0</span>
        <button className=' hover:bg-emerald-100  p-2 rounded-2xl text-green-900 font-semibold m-2'>-</button>
</div>
<p className='font-semibold text-green-600 px-5 border-l-2 border-gray-200'>In Stock</p>
     </div>



     <button onClick={()=>{dispatch(AddItem(item))}} className='flex items-center lg:w-1/2 w-full m-auto justify-center gap-2 bg-green-600 text-white font-semibold p-3 rounded-2xl hover:bg-green-700 transition duration-300'>
      <span>Add to Cart</span>
      <span> ${item.price}</span>
     </button>
   










     {/* --------------------------------- review section--------------------- */}

     <ProudctCustmerRview/>
     <ProudctCustmerRview/>
     <ProudctCustmerRview/>


     {/* <AddReview/> to add review from customer */}
<AddReview/>

    </div>
  )
}
