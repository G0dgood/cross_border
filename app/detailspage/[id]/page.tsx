'use client'
import { useEffect } from 'react'
import ProductCover from '@/components/ProductCover';
import ProductDescription from '@/components/ProductDescription';
import DetailsBestseller from '@/components/DetailsBestseller';
import { useAppDispatch, useAppSelector } from '@/store/useStore';
import { ToastContainer, toast } from "react-toastify";
import { productData, reset } from '@/features/Product/productSlice';
import { customId } from '@/data/data';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useParams } from 'next/navigation';

const Productpage = () => {


	const dispatch = useAppDispatch();
	const { data, isError, message } = useAppSelector((state: any) => state.product);
	const { id } = useParams();
	const product = data.find((prod: { product_id: number; }) => prod.product_id === Number(id));


	// Error Handling Effect
	useEffect(() => {
		if (isError) {
			toast.error(message, { toastId: customId });
		}
		setTimeout(() => {
			dispatch(reset());
		}, 3000);
	}, [dispatch, isError, message]);


	useEffect(() => {
		const input = { id: id }
		// @ts-ignore  
		dispatch(productData(input));
	}, [dispatch, id]);




	return (
		<  >
			{/* Header */}
			<Header />
			<ToastContainer position="bottom-right" />
			{/* ProductCover */}
			<ProductCover data={product} />
			{/* ProductDescription */}
			<ProductDescription data={product} />
			{/* DetailsBestseller */}
			<DetailsBestseller productdata={data} />
			{/* footer */}
			<Footer />
		</>
	)
}

export default Productpage



