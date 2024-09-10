import React from 'react';
import Image from 'next/image';
import { imageMapping } from '@/data/data';

const ProductComponent = ({ data }: any) => {


	return (
		<div className='product_cover_container_sub1'>
			<div className='product_cover_container_sub1_big_container'>
				<Image
					src={imageMapping[data?.image as keyof typeof imageMapping] || data?.image}
					alt={data?.name} width={100} height={100} className='product_cover_width' />
			</div>
		</div>
	);
};

export default ProductComponent;

