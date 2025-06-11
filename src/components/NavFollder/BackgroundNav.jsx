import React from 'react'
import backgroundImage from '../../images/Background.png'
import BackgoundFram from "../../images/BackgroundFrame.png"
import BackgroundImageText from './BackgoungImageText'

export default function BackgroundNav() {
  return (
    <div
      className="relative  lg:flex bg-cover bg-center h-[720px] w-full flex items-center justify-center text-gray-300 overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

    
      <img
        src={BackgoundFram}
        alt=""
        className="absolute bottom-0 right-0 w-1/2 h-1/2 object-cover z-10"
      />

      <div className="z-10">
        <BackgroundImageText />
      </div>
    </div>
  )
}
