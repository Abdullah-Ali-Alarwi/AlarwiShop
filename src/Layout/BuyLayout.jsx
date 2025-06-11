import { FaDonate, FaShoppingBag } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';
import { Outlet, useLocation } from 'react-router-dom';

export default function BuyLayout() {
  const location = useLocation();
  const path = location.pathname;

  const getBgColor = (step) => {
    if (step === 1) return path === '/' ? '#05422C' : '#C3D2CC';
    if (step === 2) return path === '/BuyProductPage/Checkout' ? '#05422C' : '#C3D2CC';
    if (step === 3) return path === '/BuyProductPage/OrderComplete' ? '#05422C' : '#C3D2CC';
    return '#C3D2CC';
  };

  return (
    <div>
      <div className='flex justify-center items-center gap-5 bg-[#F4F4F4] p-3'>

        <div className=' flex justify-center items-center gap-3 '>
          <div
            className='rounded-full text-white p-2'
            style={{ backgroundColor: getBgColor(1) }}
          >
            <FaCheck />
          </div>
          <p className='hidden lg:block'>Products</p>
          <div
            className="w-15 h-px"
            style={{ backgroundColor: getBgColor(1) }}
          />
        </div>

        <div className=' flex justify-center items-center gap-3'>
          <div
            className='rounded-full text-white p-2'
            style={{ backgroundColor: getBgColor(2) }}
          >
            <FaShoppingBag />
          </div>
          <p className='hidden lg:block'>Checkout</p>
          <div
            className="w-15 h-px"
            style={{ backgroundColor: getBgColor(2) }}
          />
        </div>

        <div className=' flex justify-center items-center gap-3'>
          <div
            className='rounded-full text-white p-2'
            style={{ backgroundColor: getBgColor(3) }}
          >
            <FaDonate />
          </div>
          <p className='hidden lg:block'>Order Complete</p>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
