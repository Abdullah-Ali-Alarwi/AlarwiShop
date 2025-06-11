import React from 'react';
import Logo from "../../images/Logo.png";
import mastercard1 from "../../images/mastercard1.png";
import mastercard2 from "../../images/mastercard2.png";
import mastercard3 from "../../images/mastercard3.png";
import mastercard4 from "../../images/mastercard4.png";
import { Link } from 'react-router-dom';

export default function MainFooter() {
  return (
    <div className='bg-black  text-zinc-300 p-10 text-sm'>
      <div className='container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 md:gap-1 gap-8 border-b border-[#8f968f4d] pb-5 mt-2.5'>

  
        <div>
          <img src={Logo} alt="Logo" className='mb-4 w-40' />
          <p className='text-sm'>
Al-arwi is the  top-rated online store in Canada, dedicated to meeting every customer’s needs across a wide range of products. The team behind ALaRWI has over 15 years of experience in e-commerce and customer service, ensuring quality, care, and unbeatable prices. At ALaRWI, we are committed to delivering excellence in every order – because you deserve the best.


          </p>
        </div>

    
        <div>
          <h1 className='text-lg font-bold mb-2'>QUICK LINK</h1>
          <ul className='space-y-1 text-sm'>
            <li><Link to="/" className='hover:underline'>Track Your Order</Link></li>
            <li><Link to="/" className='hover:underline'>Shop All</Link></li>
            <li><Link to="/" className='hover:underline'>Flower</Link></li>
            <li><Link to="/" className='hover:underline'>Edibles</Link></li>
            <li><Link to="/" className='hover:underline'>Concentrates</Link></li>
            <li><Link to="/" className='hover:underline'>Refunds</Link></li>
          </ul>
        </div>

     
        <div>
          <h1 className='text-lg font-bold mb-2'>MORE</h1>
          <ul className='space-y-1 text-sm mb-4'>
            <li><Link to="#" className='hover:underline'>Buy weed online in Canada</Link></li>
            <li><Link to="#" className='hover:underline'>Buy weed online in Prince Edward Island</Link></li>
            <li><Link to="#" className='hover:underline'>Buy weed online in Northwest Territories</Link></li>
            <li><Link to="#" className='hover:underline'>Buy weed online in Saskatchewan</Link></li>
          </ul>

          <div className='flex gap-3 mt-4'>
            <img src={mastercard1} alt="Payment" className='h-8' />
            <img src={mastercard2} alt="Payment" className='h-8' />
            <img src={mastercard3} alt="Payment" className='h-8' />
            <img src={mastercard4} alt="Payment" className='h-8' />
          </div>
        </div>

      </div>

      <div className='flex justify-between mx-10 items-end mt-5 '>

        <p>© 2025 Alarwi Shop. All Rights Reserved. </p>
        <ul className='flex justify-around w-[40%]'>
           
                <Link>Out Of Stock</Link>
                <Link>Privacy Policy</Link>
                <Link>Terms & Conditions</Link>
          
        </ul>
      </div>

    </div>
  );
}
