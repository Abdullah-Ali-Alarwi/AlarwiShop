import React from 'react'

export default function TilteComponent({ title }) {
  return (
    <div>
      <h1 className=' text-2xl lg:text-5xl font-bold text-center m-5 '>{title}</h1>
    </div>
  )
}
