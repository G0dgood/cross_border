import { footerSections } from '@/data/data'
import React from 'react'

const footer = () => {



	return (
		<footer className='furniture_section_seven'>
			<div className='furniture_section_seven_link_container_second'>
				{footerSections.map((section, index) => (
					<div className='furniture_section_seven_link_container' key={index}>
						<h5>{section.title}</h5>
						{section.customComponent ? (
							<div id='your_email_container'>
								<input placeholder='Your Email' className='your_email_input' />
								<button className='your_email_btn'>Subscribe</button>
							</div>
						) : (
							section.links && section.links.map((link, i) => (
								<a href="#" key={i}>{link}</a>
							))
						)}
					</div>
				))}
			</div>
			<div className='furniture_section_seven_buttom_text'>
				<h6>
					Made With Love By Godwin Chinedu @ chinedu.go@gmail.com All Right Reserved
				</h6>
			</div>
		</footer>
	)
}

export default footer