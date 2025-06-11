import React, { useEffect, useState } from 'react';
import ProductCart from '../CartFolder/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Store/Slices/ProductSlice';

export default function BestProductList() {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.products.items);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const handlePrev = () => {
    setStartIndex(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    const maxStart = Math.max(allProducts.length - itemsPerPage, 0);
    setStartIndex(prev => Math.min(prev + 1, maxStart));
  };

  const slideWidth = 100 / itemsPerPage;

  if (!allProducts || allProducts.length === 0) {
    return <p className="text-center py-10">لا توجد منتجات حالياً</p>;
  }

  return (
    <div className="relative w-full py-10">
      <div className="relative overflow-hidden w-full">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-blue-100 transition disabled:opacity-50"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex >= allProducts.length - itemsPerPage}
          className="absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-blue-100 transition disabled:opacity-50"
        >
          →
        </button>

        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * slideWidth}%)`,
              width: `${allProducts.length * slideWidth}%`,
            }}
          >
            {allProducts.map((item, index) => (
              <div
                key={item.id || index}
                className="flex-shrink-0 px-2" // تقليل الحشو لتجنب زيادة العرض
                style={{ width: `${slideWidth}%`, boxSizing: 'border-box' }}
              >
                <ProductCart
                  title={item.title}
                  image={item.images?.[0]}
                  price={item.price}
                  classStyle="flex overflow-x-auto px-2" // تقليل padding/margin داخل المنتج
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
