import { bestsellersData } from '@/data/data'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';


const Bestseller = () => {

	const BestsellerComponent = ({ data }: any) => (
		<div className='bestseller_products_container'>
			{data.map((item: any, index: any) => (
				<Link key={index} className='bestseller_item' href={"/detailspage"} >
					<div className='bestseller_products_img'>
						<Image src={item.image} alt={`Product ${index + 1}`} />
					</div>
					<div className='bestseller_text_container'>
						<h5 className='bestseller_card_title_1'>{item.title}</h5>
						<span className='bestseller_card_title_2'>{item.department}</span>
						<div className='bestseller_card_title_3'>
							<span className='bestseller_card_title_2_sub1'>{item.priceOriginal}</span>
							<span className='bestseller_card_title_2_sub2'>{item.priceDiscounted}</span>
						</div>
					</div>
				</Link>
			))}
		</div>
	);

	return (
		<section className='furniture_section_two'>
			<div className='furniture_section_container'>
				<h4 className='section_two_title1'>
					Featured Products
				</h4>
				<h3 className='section_two_title2'>
					BESTSELLER PRODUCTS
				</h3>
				<p className='section_two_title3'>
					Problems trying to resolve the conflict between
				</p>
			</div>
			<div className='parent_bestseller_products_container'>
				<BestsellerComponent data={bestsellersData} />;
			</div>
		</section>
	)
}

export default Bestseller
