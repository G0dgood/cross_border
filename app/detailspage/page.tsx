'use client'
import React from 'react'
import ProductCover from '@/components/ProductCover';
import ProductDescription from '@/components/ProductDescription';
import DetailsBestseller from '@/components/DetailsBestseller';
const productpage = () => {



	return (
		<>
			{/* ProductCover */}
			<ProductCover />
			{/* ProductDescription */}
			<ProductDescription />
			{/* DetailsBestseller */}
			<DetailsBestseller />
		</>
	)
}

export default productpage