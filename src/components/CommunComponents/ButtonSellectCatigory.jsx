import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterCategory, fetchProducts } from "../../Store/Slices/ProductSlice";
import { fetchProductsCategory } from "../../Store/Slices/CategorySlice";

export default function ButtonSelectCategory() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsCategory());
  }, [dispatch]);

  const products = useSelector((state) => state.categories.itemCategories);

  const uniqueCategories = Array.from(new Set(products.map((el) => el.category)));

  return (
    <div className="flex flex-wrap gap-4 justify-center py-2">
    
      <button
        className="bg-green-200 hover:bg-green-300 rounded-md px-4 py-2 transition"
        onClick={() => {
          dispatch(setFilterCategory("all"));
          dispatch(fetchProducts("all"));
        }}
      >
        All
      </button>

      {uniqueCategories.map((category, index) => (
        <button
          key={index}
          className="bg-gray-200 hover:bg-gray-300 rounded-md px-4 py-2 transition"
          onClick={() => {
            dispatch(setFilterCategory(category));
            dispatch(fetchProducts(category));
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
