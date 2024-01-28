'use client'
import { useEffect } from 'react'
import ProductCover from '@/components/ProductCover';
import ProductDescription from '@/components/ProductDescription';
import DetailsBestseller from '@/components/DetailsBestseller';
import { useAppDispatch, useAppSelector } from '@/store/useStore';
import { ToastContainer, toast } from "react-toastify";
import { productData, productDetails, reset } from '@/features/Product/productSlice';
import { customId } from '@/data/data';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useParams } from 'next/navigation';

const Productpage = () => {


	const dispatch = useAppDispatch();
	const { data, isError, message } = useAppSelector((state: any) => state.product);
	const { productdata, productisError, productmessage } = useAppSelector((state: any) => state.product);

	const { id } = useParams();




	// Error Handling Effect
	useEffect(() => {
		if (isError) {
			toast.error(message, { toastId: customId });
		} else if (productisError) {
			toast.dismiss();
			toast.error(productmessage, { toastId: customId });
		}
		setTimeout(() => {
			dispatch(reset());
		}, 3000);
	}, [dispatch, isError, message, productisError, productmessage]);


	useEffect(() => {
		const input = { id: id }
		// @ts-ignore  
		dispatch(productData(input));
	}, [dispatch, id]);

	useEffect(() => {
		const input = { limit: undefined }
		// @ts-ignore  
		dispatch(productDetails(input));
	}, [dispatch]);



	return (
		<  >
			{/* Header */}
			<Header />
			<ToastContainer position="bottom-right" />
			{/* ProductCover */}
			<ProductCover data={data} />
			{/* ProductDescription */}
			<ProductDescription data={data} />
			{/* DetailsBestseller */}
			<DetailsBestseller productdata={productdata} />
			{/* footer */}
			<Footer />
		</>
	)
}

export default Productpage



