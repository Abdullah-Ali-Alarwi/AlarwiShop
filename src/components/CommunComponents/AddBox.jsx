import React from 'react'

export default function AddBox() {
  return (
    <div className=' w-[90vw] lg:w-[1200px] h-[300px] bg-[#05422C] m-auto text-white my-2.5 rounded-3xl p-5 flex  items-center' >
<div className='flex justify-around items-center w-[100%]'>
    <div>
    <p className='text-5xl'>REFER A FRIENDS</p>

    <p className='text-2xl'> And get <span className='text-orange-300'>$30!</span></p>
    </div>
    <button className='bg-[#17AF26] rounded-4xl p-2'>Refer Here</button>
    </div>      
    </div>
  )
}
