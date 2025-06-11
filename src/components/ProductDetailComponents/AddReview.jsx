import React from 'react'
import { FaStar } from 'react-icons/fa6'

export default function AddReview() {
  return (
    <div className='bg-white p-4 rounded-md shadow-md mt-4 w-full'>
        <p>Add A Review</p>
        <div className='flex gap-2 mb-4'>
            <p>Your rating</p>
            <FaStar className='text-amber-300' />
            <FaStar className='text-amber-300' />
            <FaStar className='text-amber-300' />
            <FaStar className='text-amber-300' />
            <FaStar className='text-amber-300' />
        </div>
        <p>Your Review <span className='text-red-500'> *</span></p>
        <textarea className='border border-gray-300 outline-none p-2 rounded-md w-full' rows='4'></textarea>
        <div className='flex items-center justify-between mt-4'>
            <button className='bg-green-600 text-white font-semibold p-2 rounded-md hover:bg-green-700 transition duration-300'>Submit Review</button>
        </div>

    </div>
  )
}
