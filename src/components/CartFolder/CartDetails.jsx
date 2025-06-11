import React from 'react';


export default function CartDetails() {
  const [cartItems, setCartItems] = React.useState([
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      quantity: 1,
    },
  ]);

  return (
    <div className="p-4">
      {cartItems.length === 0 ? (
        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold">Your Cart is Empty</h2>
          <p className="text-gray-500">Add some products to your cart to proceed.</p>
        </div>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="border-b border-gray-300 py-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">Price: ${item.price}</p>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
}
