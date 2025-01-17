import icon1 from '../public/book-reader.svg'
import icon2 from '../public/carbon_book.svg'
import icon3 from '../public/arrow-growth.svg'
import postimg1 from '../public/unsplash_bed.svg'
import postimg2 from '../public/unsplash_bed2.svg'
import postimg3 from '../public/unsplash_bed3.svg'
import comicon1 from '../public/icon_clock.svg'
import comicon2 from '../public/ant-design-area-chart.svg'
import comicon_arrow from '../public/icon_arrow-next.svg'
import image1s from '../public/product-cover-1.svg'
import brand1 from '../public/fa-brands-1.svg'
import brand2 from '../public/fa-brands-2.svg'
import brand3 from '../public/fa-brands-3.svg'
import brand4 from '../public/fa-brands-4.svg'
import brand5 from '../public/fa-brands-5.svg'
import brand6 from '../public/fa-brands-6.svg'

import smartphone from '../public/images/smartphone.jpg'
import laptop from '../public/images/laptop.jpg'
import headphones from '../public/images/headphones.jpg'
import smartwatch from '../public/images/smartwatch.jpg'
import camera from '../public/images/camera.jpg'
import tv from '../public/images/tv.jpg'
import tablet from '../public/images/tablet.jpg'
import console from '../public/images/console.jpg'
import refrigerator from '../public/images/refrigerator.jpg'



const imageMapping = {
  "https://example.com/images/smartphone.jpg": smartphone,
  "https://example.com/images/laptop.jpg": laptop,
  "https://example.com/images/headphones.jpg": headphones,
  "https://example.com/images/smartwatch.jpg": smartwatch,
  "https://example.com/images/camera.jpg": camera,
  "https://example.com/images/tv.jpg": tv,
  "https://example.com/images/tablet.jpg": tablet,
  "https://example.com/images/console.jpg": console,
  "https://example.com/images/refrigerator.jpg": refrigerator
};



const bestsellericon = [
  {
    icon: icon1,
    title: 'Easy Wins',
    details: 'Get your best looking smile now!',
  },
  {
    icon: icon2,
    title: 'Concrete',
    details: 'Defalcate is most focused in helping you discover your most beautiful smile',
  },
  {
    icon: icon3,
    title: 'Hack Growth',
    details: 'Overcame any hurdle or any other problem.',
  },

]
const postData = [
  {
    id: 1,
    image: postimg1,
    isNew: true,
    brand: 'Google',
    category: 'Trending',
    tags: ['New'],
    title: 'Loudest à la Madison #1 (`L\'integral`)',
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '22 April 2021',
    comments: 'comments',
    learnMoreLink: '#', // Replace '#' with the actual link
    learnMoreText: 'Learn More',
    arrowImage: comicon_arrow,
    commentImages: [comicon1, comicon2],
  },
  {
    id: 2,
    image: postimg2,
    isNew: true,
    brand: 'Google',
    category: 'Trending',
    tags: ['New'],
    title: 'Loudest à la Madison #1 (`L\'integral`)',
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '25 April 2021',
    comments: '23 comments',
    learnMoreLink: '#', // Replace '#' with the actual link
    learnMoreText: 'Learn More',
    arrowImage: comicon_arrow,
    commentImages: [comicon1, comicon2],
  },
  {
    id: 3,
    image: postimg3,
    isNew: true,
    brand: 'Google',
    category: 'Trending',
    tags: ['New'],
    title: 'Loudest à la Madison #1 (`L\'integral`)',
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '28 April 2021',
    comments: '15 comments',
    learnMoreLink: '#', // Replace '#' with the actual link
    learnMoreText: 'Learn More',
    arrowImage: comicon_arrow,
    commentImages: [comicon1, comicon2],
  },
  // Add more objects for additional posts if needed
];
const aboutdata = [
  {
    id: 1,
    image: require('../public/about_card1.svg'),
  },
  {
    id: 2,
    image: require('../public/about_card2.svg'),
  },
  {
    id: 3,
    image: require('../public/about_card3.svg'),
  },
  {
    id: 4,
    image: require('../public/about_card4.svg'),
  },
  {
    id: 5,
    image: require('../public/about_card5.svg'),
  },
  {
    id: 6,
    image: require('../public/about_card6.svg'),
  },
  {
    id: 7,
    image: require('../public/about_card7.svg'),
  },
  {
    id: 8,
    image: require('../public/about_card8.svg'),
  },
  {
    id: 9,
    image: require('../public/about_card9.svg'),
  }
]

const bestsellersDatas = [
  {
    title: 'Graphic Design',
    department: 'English Department',
    priceOriginal: '$16.48',
    priceDiscounted: '$6.48',
    image: image1s,
  },
  {
    title: 'Graphic Design',
    department: 'English Department',
    priceOriginal: '$16.48',
    priceDiscounted: '$6.48',
    image: image1s,
  },
  {
    title: 'Graphic Design',
    department: 'English Department',
    priceOriginal: '$16.48',
    priceDiscounted: '$6.48',
    image: image1s,
  },
  {
    title: 'Graphic Design',
    department: 'English Department',
    priceOriginal: '$16.48',
    priceDiscounted: '$6.48',
    image: image1s,
  },
  {
    title: 'Graphic Design',
    department: 'English Department',
    priceOriginal: '$16.48',
    priceDiscounted: '$6.48',
    image: image1s,
  },
  {
    title: 'Graphic Design',
    department: 'English Department',
    priceOriginal: '$16.48',
    priceDiscounted: '$6.48',
    image: image1s,
  },
  {
    title: 'Graphic Design',
    department: 'English Department',
    priceOriginal: '$16.48',
    priceDiscounted: '$6.48',
    image: image1s,
  },
  {
    title: 'Graphic Design',
    department: 'English Department',
    priceOriginal: '$16.48',
    priceDiscounted: '$6.48',
    image: image1s,
  },

]

const brandData = [
  {
    id: 1,
    image: brand1,
  },
  {
    id: 2,
    image: brand2,
  },
  {
    id: 3,
    image: brand3,
  },
  {
    id: 4,
    image: brand4,
  },
  {
    id: 5,
    image: brand5,
  },
  {
    id: 6,
    image: brand6,
  }
]

const footerSections = [
  {
    title: 'Company Info',
    links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
  },
  {
    title: 'Legal',
    links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
  },
  {
    title: 'Features',
    links: ['Business Marketing', 'User Analytic', 'Live Chat', 'Unlimited Support'],
  },
  {
    title: 'Resources',
    links: ['IOS & Android', 'Watch a Demo', 'Customers', 'API'],
  },
  {
    title: 'Get In Touch',
    customComponent: true,
  },
];

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'Product' },
  { path: '/about', label: 'Shop' },
  { path: '/contact', label: 'About' },
  { path: '/contact', label: 'Pricing' },
  { path: '/contact', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
  { path: '/contact', label: 'Pages' },
];
const navLinks1 = [
  { path: '/', label: 'Home' },
];
const navLink2 = [
  { path: '/', label: 'Home' },
  { path: '/shop', label: 'Shop', hasDropdown: true },
  { path: '/about', label: 'About' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
  { path: '/pages', label: 'Pages' },
];

const customId = "custom-id-yes";



export { postData, aboutdata, bestsellericon, brandData, bestsellersDatas, customId, footerSections, imageMapping, navLinks, navLinks1, navLink2 };
