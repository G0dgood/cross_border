import React from 'react';
import Image from 'next/image';
import singleproduct1 from '../public/single-product-1-cover-2.svg'
import singleproduct2 from '../public/single-product-1-thumb-1.svg'
import singleproduct3 from '../public/single-product-1-thumb-2.svg'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

const ProductComponent = () => {

	return (
		<div className='product_cover_container_sub1'>
			<div className='product_cover_container_sub1_big_container'>
				<div className='product_cover_container_sub1_big_container_icon'>
					<ArrowBackIosNewRoundedIcon style={{ height: "45px", width: "40px" }} />
					<ArrowForwardIosRoundedIcon style={{ height: "45px", width: "40px" }} />
				</div>
				<Image src={singleproduct1} alt={`brand`} />
			</div>
			<div className='product_cover_container_sub1_mini_container'>
				<div>
					<Image src={singleproduct2} alt={`brand`} />
				</div>
				<div>
					<Image src={singleproduct3} alt={`brand`} />
				</div>
			</div>
		</div>
	);
};

export default ProductComponent;

