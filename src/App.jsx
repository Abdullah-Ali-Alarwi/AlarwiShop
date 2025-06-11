import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import LandingPage from "./pages/LandingPage";
import { FaFaceSadCry } from "react-icons/fa6";
import ProductDescription from "./pages/ProductDescription";

import BuyLayout from "./Layout/BuyLayout";
import FirstBuyCart from "./pages/FirstBuyCart";
import SecondCheckout from "./pages/SecondCheckout";
import ThirdOrderComplete from "./pages/ThirdOrderComplete";
import ScrollToTop from "./ScrollToTop";
import ScrollToTopButton from "./ScrollToTopButton";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { setUser, clearUser } from "../src/Store/Slices/authSlice";
import MypastOrder from "./pages/MypastOrder";

import ProtectedRoute from "./ProtectedRoute"; 

function NotFound() {
  return (
    <div className="flex flex-col m-auto justify-center items-center bg-amber-300 lg:w-[700px] h-[500px] my-10 shadow-amber-100">
      <h1 className="text-6xl">this page is Not Found  !!</h1>
      <FaFaceSadCry className="text-7xl text-green-600 m-10" />
    </div>
  );
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToTopButton />
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<LandingPage />} />
          <Route path="ProductDescription/:id" element={<ProductDescription />} />
          <Route path="BuyProductPage" element={<BuyLayout />}>
            <Route index element={<FirstBuyCart />} />
            <Route path="Checkout" element={<SecondCheckout />} />
            <Route path="OrderComplete" element={<ThirdOrderComplete />} />
          </Route>
          <Route path="MypastOrder" element={<MypastOrder />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
