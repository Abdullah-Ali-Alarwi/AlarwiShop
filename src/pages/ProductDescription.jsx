import { useParams } from 'react-router-dom';
import ProductimageDetial from '../components/ProductDetailComponents/productimageDetial.jsx';
import Productinfo from '../components/ProductDetailComponents/Productinfo.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../Store/Slices/ProductSlice.js';

export default function ProductDescription() {
  const { id } = useParams(); // ✅ استخدام الأقواس لاستخراج id
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.products.items || []); // ✅ تأكد أن items مصفوفة

  useEffect(() => {
    dispatch(fetchProducts()); // ✅ استدعاء الدالة وليس تمرير المرجع فقط
  }, [dispatch]);

  const singleItem = allProducts.find((item) => item.id.toString() === id); // ✅ المقارنة الصحيحة

  return (
    <div>
      <div className="lg:flex flex-col md:flex-row">
        {singleItem ? (
          <>
            <ProductimageDetial item={singleItem} />
            <Productinfo item={singleItem} />
          </>
        ) : (
          <div className="text-center text-red-500 w-full py-10">Loading product or not found.</div>
        )}
      </div>
    </div>
  );
}
