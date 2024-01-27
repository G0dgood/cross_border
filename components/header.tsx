"use client"
import React, { useState } from 'react'
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
import search1 from '../public/icn settings icn-xs (1).svg'
import cart1 from '../public/icn settings icn-xs (2).svg'
import love1 from '../public/icn settings icn-xs (3).svg'
import user1 from '../public/icn settings icn-xs (4).svg'
import searchicn from '../public/icn-search.svg'
import carticn from '../public/icn-shopping-cart.svg'
import menuicn from '../public/icn-menu.svg'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import ShoppingCart from './ShoppingCart';
import { useSelector } from 'react-redux';
import Wishlist from './Wishlist';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

const Header = () => {
	const cartItems = useSelector((state: any) => state.cart.items);
	const wishListItems = useSelector((state: any) => state.wishList.items);
	const quantity = cartItems.length > 0 ? cartItems[0].quantity : 0;
	const wishs = wishListItems.length > 0 ? wishListItems.length : 0;


	const pathname = usePathname()
	const [cartitem, setCartitem] = useState(false)
	const [wish, setWish] = useState(false)


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
								<Link href="#" className='link_a'> <span>Shop</span>  <ExpandMoreRoundedIcon /> </Link>
							</li>
							<li>
								<Link href="#">About</Link>
							</li>
							<li>
								<Link href="#">Blog</Link>
							</li>
							<li>
								<Link href="#">Contact</Link>
							</li>
							<li>
								<Link href="#">Pages</Link>
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
						<span>
							<Image src={search} alt="mail" className='icon_headers' />
						</span>

						<span className='header_bottom_container-sub-span' onClick={() => { setCartitem(!cartitem); setWish(false) }}>
							<Image src={cart} alt="cart" className='icon_headers' />  <h6>{quantity > 0 ? quantity : 0}</h6>
						</span>
						{cartitem && <ShoppingCart />}
						<span className='header_bottom_container-sub-span' onClick={() => { setWish(!wish); setCartitem(false); }}
						>
							<Image src={love} alt="love" className='icon_headers' />  <h6>{wishs}</h6>
						</span>
						{wish && <Wishlist />}
					</div>
				</div>
			</div>

			<div className='header_small_nav_container'>
				<div className='header_small_nav'>
					<h3>Bandage</h3>
					<div>
						<div className={pathname === "/detailspage" ? "remove" : ""}><Image src={searchicn} alt="search" /> </div>
						<div className={pathname === "/detailspage" ? "remove" : ""}><Image src={carticn} alt="cart" />  </div>
						<div ><Image src={menuicn} alt="menu" /> </div>
					</div>
				</div>
				<div className='header_small_nav_links'>
					<li className={pathname === "/detailspage" ? "addcolor" : ""}>
						<Link href="/">Home</Link>
					</li>
					<li className={pathname === "/" ? "removecolor" : pathname === "/detailspage" ? "remove" : ""}>
						<Link href="/about">Product</Link>
					</li>
					<li className={pathname === "/" ? "remove" : ""}>
						<Link href="/about">Shop</Link>
					</li>
					<li className={pathname === "/" ? "remove" : ""}>
						<Link href="/contact">About</Link>
					</li>
					<li className={pathname === "/detailspage" ? "remove" : ""}>
						<Link href="/contact">Pricing</Link>
					</li>
					<li className={pathname === "/" ? "remove" : ""}>
						<Link href="/contact">Blog</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
					<li className={pathname === "/" ? "remove" : ""}>
						<Link href="/contact">Pages</Link>
					</li>
				</div>
				<div className='header_small_nav_sub'>
					<div >
						<div className='header_bottom_container-sub-user'>
							<Image src={user1} alt="user" className='icon_headers1' />
							<h6>Login / Register</h6>
						</div>
					</div>
					<div className='header_bottom_container-sub-user-profile'>
						<span>
							<Image src={search1} alt="mail" className='icon_headers1' />
						</span>

						<span className='header_bottom_container-sub-span' onClick={() => { setCartitem(!cartitem); setWish(false) }}>
							<Image src={cart1} alt="cart" className='icon_headers1' />  <h6>{quantity > 0 ? quantity : 0}</h6>
						</span>
						{cartitem && <ShoppingCart />}
						<span className='header_bottom_container-sub-span' onClick={() => { setWish(!wish); setCartitem(false); }}
						>
							<Image src={love1} alt="love" className='icon_headers1' />  <h6>{wishs}</h6>
						</span>
						{wish && <Wishlist />}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header