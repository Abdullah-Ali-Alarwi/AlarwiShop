import React from 'react'
import GreenFeature from './GreenFeature'
import buttonCar from "../../images/buttonCar.png"
import buttonGreen from "../../images/buttonGreen.png"
import buttonDoller from "../../images/buttonDoller.png"

export default function GreenFeatureCart() {
  
  return (
    <div className=' flex flex-row gap-5 my-20 justify-center items-center flex-wrap bg-[#F2F6F4]'>
        <GreenFeature img={buttonCar} title="Reliable Shipping" text="Alarwi Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!" />
        <GreenFeature img={buttonGreen} title="You’re Safe With Us" text="Our secure payment system accepts the most common forms of payments making the checkout process quicker! The payments we accept are debit, all major credit cards, and cryptocurrency." />
        <GreenFeature img={buttonDoller} title="Best Quality & Pricing" text="Here at Alarwi Society, we take pride in the quality of our products and service. Our prices are set to ensure you receive your medication at a reasonable price and safely" />
    </div>
  )
}
