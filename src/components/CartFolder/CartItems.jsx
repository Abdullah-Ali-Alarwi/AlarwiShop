import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EmeptyCart from './EmptyCart';
import masterCard1 from "../../images/mastercard1.png";
import masterCard2 from "../../images/mastercard2.png";
import masterCard3 from "../../images/mastercard2.png";
import masterCard4 from "../../images/mastercard3.png";
import { DeleteItem ,increaseQuantity,DecreaseQuantity } from "../../Store/Slices/CartSlice";


export default function CartItems({hiddenButton ,setShow }) {
  const items = useSelector(state => state.Cart.items);
  const dispatch = useDispatch();



  return (
    <div>
      {items.length === 0 ? (
        <EmeptyCart />
      ) : (
        <div className="cart-items">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={item.id || index} className="flex justify-between items-center">
               <img className=' w-[50px]' src={item.thumbnail} alt="" />
                <span>${item.price.toFixed(2)} x {item.quantity || 1}</span>
                <span>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                

<div>
  <button className='text-gray-500 p-0.5 rounded-2xl m-1 hover:text-green-300' onClick={()=>{dispatch(increaseQuantity(item.id))}}>+</button>
  {item.quantity }
  <button className='text-gray-500 p-0.5 rounded-2xl m-1 hover:text-red-300' onClick={()=>{dispatch(DecreaseQuantity(item.id))}}>-</button>
</div>
                  
                <button
                  onClick={() => dispatch(DeleteItem(item.id)  )}
                  className="text-red-500 hover:text-red-700 font-bold ml-4"
                
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <strong>
              Total: ${items.reduce((total, item) => total + item.price * (item.quantity || 1), 0).toFixed(2)}
            </strong>
          </div>
{!hiddenButton && (
  <Link to="/BuyProductPage/Checkout">
    <button onClick={()=>{setShow(false)}} className="mt-4 bg-green-500 text-white py-2 px-4 rounded">Checkout</button>
  </Link>
)}


          <div className='flex justify-between items-center mt-4 space-x-2'>
            <p className='text-gray-500'>We accept:</p>
            <img src={masterCard1} alt="MasterCard" className='border border-transparent hover:border-amber-500 rounded-md transition duration-300' />
            <img src={masterCard2} alt="MasterCard" className='border border-transparent hover:border-amber-500 rounded-md transition duration-300' />
            <img src={masterCard3} alt="MasterCard" className='border border-transparent hover:border-amber-500 rounded-md transition duration-300' />
            <img src={masterCard4} alt="MasterCard" className='border border-transparent hover:border-amber-500 rounded-md transition duration-300' />
          </div>
        </div>
      )}
    </div>
  );
}
