"use client"
import React from 'react'
import phone from '../public/phone.svg'
import mail from '../public/mail.svg'
import Image from 'next/image';
import youtube from '../public/youtube.svg';
import facebook from '../public/facebook.svg'
import ig from '../public/ig.svg'
import x from '../public/x.svg'
import search from '../public/search.svg'
import cart from '../public/cart.svg'
import love from '../public/love.svg'
import user from '../public/user.svg'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Header = () => {
	const pathname = usePathname()


	return (
		<header>
			{/* Top header nav */}
			<div className={pathname === "/detailspage" ? "header_top_container1" : "header_top_container"}>
				<div className='header_top_container_sup_one'>
					<div className='header_image_container'>
						<Image src={phone} alt="phone" className='icon_headers' />
						<h6>(225) 555-0118</h6>
					</div>
					<div className='header_image_container' >
						<Image src={mail} alt="mail" className='icon_headers' />
						<h6>michelle.rivera@example.com</h6>
					</div>

				</div>
				<h6>Follow Us and get a chance to win 80% off</h6>
				<div className='header_top_container_sup_two'>
					<h6>Follow Us  :</h6>
					<Image src={ig} alt="ig" className='icon_headers' />
					<Image src={youtube} alt="youtube" className='icon_headers' />
					<Image src={facebook} alt="facebook" className='icon_headers' />
					<Image src={x} alt="x" className='icon_headers' />
				</div>
			</div>
			{/* Bottom header nav */}
			<div className={pathname === "/detailspage" ? "header_bottom_container1" : "header_bottom_container"}>
				<div className='header_nav'>
					<h3>Bandage</h3>
					<nav >
						<ul className='header_ul'>
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/about">Shop</Link>
							</li>
							<li>
								<Link href="/contact">About</Link>
							</li>
							<li>
								<Link href="/contact">Blog</Link>
							</li>
							<li>
								<Link href="/contact">Contact</Link>
							</li>
							<li>
								<Link href="/contact">Pages</Link>
							</li>
						</ul>
					</nav>
				</div>

				<div className='header_bottom_container-sub'>
					<div className='header_bottom_container-sub-user'>
						<Image src={user} alt="user" className='icon_headers' />
						<h6>Login / Register</h6>
					</div>
					<div className='header_bottom_container-sub-icons'>
						<Image src={search} alt="mail" className='icon_headers' />
						<span className='header_bottom_container-sub-span'>	<Image src={cart} alt="cart" className='icon_headers' /> <h6>1</h6></span>
						<span className='header_bottom_container-sub-span'> <Image src={love} alt="love" className='icon_headers' /> <h6>1</h6></span>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header