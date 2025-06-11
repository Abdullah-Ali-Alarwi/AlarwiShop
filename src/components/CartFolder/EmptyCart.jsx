import React from 'react'

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
      <p className="text-gray-500">Add items to your cart to get started.</p>
    </div>
  )
}
