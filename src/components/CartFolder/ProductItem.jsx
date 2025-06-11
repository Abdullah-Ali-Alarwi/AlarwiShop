import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { AddItem } from "../../Store/Slices/CartSlice";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

export default function ProductItem({ classStyle = "flex flex-wrap justify-center" }) {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.products.items);
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);
  const searchTerm = useSelector(state => state.products.searchTerm);

  const filteredProducts = allProducts.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const noProductToastId = "no-product-toast";


  if (searchTerm && filteredProducts.length === 0 && !toast.isActive(noProductToastId)) {
    toast.error(`No products found for "${searchTerm}"`, {
      toastId: noProductToastId,
    });
  }

  if (loading) return <p className="text-center text-lg">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className={classStyle}>
      {filteredProducts.length === 0 ? (
        <p className="text-center w-full py-10">
          No products found for <span className='text-red-500'>"{searchTerm}"</span>
        </p>
      ) : (
        filteredProducts.map((item, index) => (
          <div key={index} className="m-3 p-4 w-[300px] lg:w-[416px] bg-white rounded-lg shadow-md">
            <div className="flex flex-col gap-4 text-center">
              <Link to={`/ProductDescription/${item.id}`}>
                <div className="bg-[#F4F4F4] flex justify-center items-center h-[200px]">
                  <img src={item.thumbnail} alt="product" className="h-[80%] object-contain" />
                </div>
                <p className="text-[#9D9EA2] text-sm">FLOWER</p>
                <h1 className="text-lg font-semibold">{item.title} (4 X 7G)</h1>
                <div className="flex items-center justify-center gap-2 text-sm text-[#46494F]">
                  <FaStar color="#FFD700" />
                  <span>4.6/5</span>
                  <span className="text-[#9D9EA2]">|</span>
                  <span>135 Reviews</span>
                </div>
                <p className="text-sm text-[#46494F]">Sativa 100%</p>
                <div className="flex justify-center gap-3 text-[#EB2606] font-bold">
                  <span>${item.price}</span>
                  <span className="line-through text-sm text-gray-400">$100.00</span>
                </div>
                <div className="flex justify-center gap-4 text-sm mt-2">
                  <span className="border px-2 py-1 rounded">28g</span>
                  <span className="border px-2 py-1 rounded">1/2lb</span>
                  <span className="border px-2 py-1 rounded">1/4lb</span>
                </div>
              </Link>
              <button
                onClick={() => dispatch(AddItem(item))}
                className="bg-[#17AF26] text-white py-2 px-4 rounded-b-2xl hover:bg-[#05422C]"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
