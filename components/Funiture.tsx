import React from 'react'
import Image from 'next/image'
import furniture1 from '../public/furniture1.svg'
import furniture2 from '../public/furniture2.svg'
import furniture3 from '../public/furniture3.svg'
import furniture4 from '../public/furniture4.svg'


const Funiture = () => {
	return (
		<section className='furniture_section'>
			<div className='funiture_section_card_one'>
				<div className='funiture_section_card_text_sup'>
					<h6 className='funiture_section_card_text_sup_h6'>
						5 Items
					</h6>
					<h2 className='funiture_section_card_text_sup_h2'>
						FURNITURE
					</h2>
					<h6 className='funiture_section_card_text_sup_h62'>
						Read More
					</h6>
				</div>
				<Image src={furniture1} alt="furniture1" className='furniture_img' />
			</div>
			<div className='funiture_section_card_two'>
				<div className='funiture_section_card_two_sub1'>
					<div className='funiture_section_card_text_sup'>
						<h6 className='funiture_section_card_text_sup_h6'>
							5 Items
						</h6>
						<h2 className='funiture_section_card_text_sup_h2_2'>
							FURNITURE
						</h2>
						<h6 className='funiture_section_card_text_sup_h62'>
							Read More
						</h6>
					</div>
					<Image src={furniture2} alt="furniture2" className='furniture_img' />
				</div>
				<div className='funiture_section_card_two_sub2'>
					<div className='funiture_section_card_two_inner1'>
						<div className='funiture_section_card_text_sup'>
							<h6 className='funiture_section_card_text_sup_h6'>
								5 Items
							</h6>
							<h2 className='funiture_section_card_text_sup_h2_2'>
								FURNITURE
							</h2>
							<h6 className='funiture_section_card_text_sup_h62'>
								Read More
							</h6>
						</div>
						<Image src={furniture3} alt="furniture3" className='furniture_img' />
					</div>
					<div className='funiture_section_card_two_inner2'>
						<div className='funiture_section_card_text_sup'>
							<h6 className='funiture_section_card_text_sup_h6'>
								5 Items
							</h6>
							<h2 className='funiture_section_card_text_sup_h2_2'>
								FURNITURE
							</h2>
							<h6 className='funiture_section_card_text_sup_h62'>
								Read More
							</h6>
						</div>
						<Image src={furniture4} alt="furniture4" className='furniture_img' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Funiture