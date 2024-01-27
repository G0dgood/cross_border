'use client'
import React, { useState } from 'react'
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
import Footer from '@/components/footer'
import Header from '@/components/header'

export default function Home() {
  const dispatch = useAppDispatch();
  const { data, isError, message, loading } = useAppSelector((state: any) => state.product);
  // Initialize state with an initial value of 10
  const [counter, setCounter] = useState(10);
  // Error Handling Effect
  useEffect(() => {
    if (isError) {
      // Display an error toast  
      toast.dismiss(); // 
      toast.error(message, { toastId: customId });
    }
    setTimeout(() => {
      dispatch(reset());
    }, 3000);
  }, [dispatch, isError, message]);


  useEffect(() => {
    const input = { limit: counter }
    // @ts-ignore  
    dispatch(productData(input));
  }, [counter, dispatch]);



  return (
    <main>
      {/* Header */}
      <Header />
      <ToastContainer position="bottom-right" />
      {/* Funiture */}
      <Funiture />
      {/* Bestseller */}
      <Bestseller data={data} />
      {/* Product Button */}
      <Product setCounter={setCounter} counter={counter} loading={loading} />
      {/* FeaturedProducts*/}
      <FeaturedProducts />
      {/* PracticeAdvice */}
      <PracticeAdvice />
      {/* AboutUs*/}
      <AboutUs />
      {/* CallToAction */}
      <CallToAction />
      {/* footer */}
      <Footer />
    </main>

  )
}

