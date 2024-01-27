import React from 'react'
import Image from 'next/image'
import img from '../public/table_chair.svg'


const ProductDescription = () => {
	return (
		<section className='productpage_two'>
			<div className='description_links_container'>
				<div className='description_links_container_sub'>
					<a className='description_links_container_sub_a' href='#'>Description</a>
					<a className='description_links_container_sub_a' href='#'>Additional Information</a>
					<a className='description_links_container_sub_a' href='#'>Reviews <span className='reviews_nums'>(0)</span></a>
				</div>
			</div>
			<div className='description_container_jump'>
				<div className='description_container_jump_sub1'>
					<h3>the quick fox jumps over </h3>
					<p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>

					<p className='description_container_jump_sub1_border'> Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>

					<p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
				</div>
				<div className='description_container_jump_sub2' >
					<Image src={img} alt="phone" className='container_jump_img' />
				</div>
			</div>
		</section>
	)
}

export default ProductDescription
