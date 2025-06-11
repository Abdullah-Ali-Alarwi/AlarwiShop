import React from 'react'


export default function GreenFeature({img, title, text}) { 
  return (
    <div className='flex  gap-3 justify-content-start w-[416px] m-3 p-3 border-amber-300'>
        <img src={img} alt={title} className='w-[70px] h-[70px]' />
       <div>
         <h1 className='text-lg font-bold'>{title}</h1>
        <p className='text-sm text-[#717378] line-clamp-3 leading-7'>{text}</p>
       </div>
      
    </div>
  )
}
