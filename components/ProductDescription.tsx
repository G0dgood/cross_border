import React from 'react'
import Image from 'next/image'
import { imageMapping } from '@/data/data'

const ProductDescription = ({ data }: any) => {



	return (
		<section className='productpage_two'>
			<div className='description_links_container'>
				<div className='description_links_container_sub'>
					<a className='description_links_container_sub_a' href='#'>Description</a>
					<a className='description_links_container_sub_a' href='#'>Additional Information</a>
					<a className='description_links_container_sub_a' href='#'>Reviews<span className='reviews_nums'>(0)</span></a>
				</div>
			</div>
			<div className='description_container_jump'>
				<div className='description_container_jump_sub1'>
					<h3>{data?.brand} </h3>
					<p>{data?.description}</p>
					<p className='description_container_jump_sub1_border'>{data?.description}</p>
					<p>{data?.description}</p>
				</div>
				<div className='description_container_jump_sub2' >
					<Image
						src={imageMapping[data?.image as keyof typeof imageMapping] || data?.image}
						alt={data?.name} width={100} height={100} className='container_jump_img' />
				</div>
			</div>
		</section>

	)
}

export default ProductDescription
