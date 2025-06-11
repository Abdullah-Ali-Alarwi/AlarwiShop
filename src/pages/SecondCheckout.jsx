import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setOrderData } from '../Store/Slices/OrderSlice'

export default function SecondCheckout() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { items, ShippingCosts, totallCoust } = useSelector((state) => state.Cart)
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)

  const [formData, setFormData] = useState({
    FristName: '',
    LastName: '',
    Country: 'Yemen',
    City: 'sana',
    Street: 'MainStreet',
    Email: '',
    PhonNumber: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setOrderData(formData))
    navigate('/BuyProductPage/OrderComplete')
  }

  return (
    <div className='w-[90%] m-auto'>
      <h1>{items.length}</h1>

      <div className='border-b-2 border-b-[#c5bebe] flex justify-between m-5 pb-3'>
        <p>Shipping</p>
        <span>({items.length})</span>
      </div>

      <div className='pageContaner lg:flex justify-between items-start'>
        <form onSubmit={handleSubmit} className='w-full lg:w-1/2'>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-2 m-2'>
              <div className='flex flex-col w-1/2'>
                <label htmlFor='FristName'>First Name <span className='text-red-600'>*</span></label>
                <input
                  type='text'
                  id='FristName'
                  name='FristName'
                  value={formData.FristName}
                  onChange={handleChange}
                  className='rounded-[7px] border border-[#c5bebe]'
                  required
                />
              </div>
              <div className='flex flex-col w-1/2'>
                <label htmlFor='LastName'>Last Name <span className='text-red-600'>*</span></label>
                <input
                  type='text'
                  id='LastName'
                  name='LastName'
                  value={formData.LastName}
                  onChange={handleChange}
                  className='rounded-[7px] border border-[#c5bebe]'
                  required
                />
              </div>
            </div>

            <div className='flex flex-col m-2'>
              <label htmlFor='Country'>Country / Region <span className='text-red-600'>*</span></label>
              <select
                name='Country'
                id='Country'
                value={formData.Country}
                onChange={handleChange}
                className='rounded-[7px] border border-[#c5bebe]'
                required
              >
                <option value='Yemen'>Yemen</option>
                <option value='Saudi'>Saudi</option>
                <option value='Qatar'>Qatar</option>
              </select>
            </div>

            <div className='flex flex-col m-2'>
              <label htmlFor='City'>City <span className='text-red-600'>*</span></label>
              <select
                name='City'
                id='City'
                value={formData.City}
                onChange={handleChange}
                className='rounded-[7px] border border-[#c5bebe]'
                required
              >
                <option value='sana'>Sana</option>
                <option value='albidha'>Albidha</option>
                <option value='adan'>Adan</option>
              </select>
            </div>

            <div className='flex flex-col m-2'>
              <label htmlFor='Street'>Street <span className='text-red-600'>*</span></label>
              <select
                name='Street'
                id='Street'
                value={formData.Street}
                onChange={handleChange}
                className='rounded-[7px] border border-[#c5bebe]'
                required
              >
                <option value='MainStreet'>Main Street</option>
                <option value='North'>North</option>
                <option value='South'>South</option>
              </select>
            </div>

            <div className='flex flex-col m-2'>
              <label htmlFor='Email'>Email <span className='text-red-600'>*</span></label>
              <input
                type='email'
                id='Email'
                name='Email'
                value={formData.Email}
                onChange={handleChange}
                className='rounded-[7px] border border-[#c5bebe]'
                required
              />
            </div>

            <div className='flex flex-col m-2'>
              <label htmlFor='PhonNumber'>Phone Number <span className='text-red-600'>*</span></label>
              <input
                type='tel'
                id='PhonNumber'
                name='PhonNumber'
                value={formData.PhonNumber}
                onChange={handleChange}
                className='rounded-[7px] border border-[#c5bebe]'
                required
              />
            </div>

            <button
              type='submit'
              className='bg-[#9D9EA2] hover:bg-[#7cdab0e2] p-1 rounded-2xl w-full text-white font-semibold py-3 mt-4'
            >
              Place Order | ${totallCoust}
            </button>
          </div>
        </form>

        <div className='w-full lg:w-1/2 flex flex-col justify-around gap-5 border border-[#F2F6F4] p-7 mt-5'>
          <div className='flex justify-between'>
            <p className='text-[#9D9EA2] font-bold'>Subtotal</p>
            <p>${totalPrice}</p>
          </div>
          <div className='flex justify-between font-semibold'>
            <p className='text-[#9D9EA2]'>Discount</p>
            <p>$0.0</p>
          </div>
          <div className='flex justify-between font-semibold'>
            <p className='text-[#9D9EA2]'>Shipping Costs</p>
            <p>${ShippingCosts}</p>
          </div>
          <div className='flex justify-between font-semibold'>
            <p className='text-[#9D9EA2] border-2 border-[#e3e4e8] p-1 rounded-[7px]'>Coupon code</p>
            <button className='bg-green-100 text-green-800 p-1 rounded-2xl'>Apply Coupon</button>
          </div>
          <p className='font-semibold'>Get Free Shipping for orders over <span className='text-red-500'>$100.00</span></p>
        </div>
      </div>
    </div>
  )
}
