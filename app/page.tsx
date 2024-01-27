'use client'
import CallToAction from '@/components/CallToAction'
import AboutUs from '@/components/AboutUs'
import PracticeAdvice from '@/components/PracticeAdvice'
import FeaturedProducts from '@/components/FeaturedProducts'
import Bestseller from '@/components/Bestseller'
import Funiture from '@/components/Funiture'
import Product from '@/components/Product'
import { useAppDispatch, useAppSelector } from '../store/useStore'
import { useEffect } from 'react'
import { productData, reset } from '../features/Product/productSlice'
import { customId } from '@/data/data'
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const dispatch = useAppDispatch();
  const { data, isError, message, isLoading } = useAppSelector((state: any) => state.product);

  // Error Handling Effect
  useEffect(() => {
    if (isError) {
      // Display an error toast with the message and reset the state
      toast.dismiss(); // Dismiss any existing toasts
      toast.error(message, {
        toastId: customId
      });
    }
    setTimeout(() => {
      dispatch(reset());
    }, 3000);
  }, [dispatch, isError, message]);
  console.log('product', data)

  useEffect(() => {
    // @ts-ignore  
    dispatch(productData(10));
  }, [dispatch]);

  return (
    <main>
      <ToastContainer position="bottom-right" />
      {/* Funiture */}
      <Funiture />
      {/* Bestseller */}
      <Bestseller />
      {/* Product Button */}
      <Product />
      {/* FeaturedProducts*/}
      <FeaturedProducts />
      {/* PracticeAdvice */}
      <PracticeAdvice />
      {/* AboutUs*/}
      <AboutUs />
      {/* CallToAction */}
      <CallToAction />
      {/* footer */}
    </main>

  )
}
