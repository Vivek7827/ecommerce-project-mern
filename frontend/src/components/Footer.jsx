import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/ecommerce_logo.png";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { DiVim } from "react-icons/di";



const Footer = () => {
  return ( 
    <footer className='bg-gradient-to-r from-green-200 to-white mt-16 border-t border-gray-200'>
      <div className='max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 md:grid-cols-3 md:gap-20 text-gray-600'>
      <div>
       <img src={Logo} alt="" className='h-16 mb-2'/>
       <p>YourShop · Curating Joyful Finds Every Day</p>
      </div>
      <div>
        <h3 className='text-lg font-semibold mb-3'>ECOMMERCE SHOP</h3>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link className='hover:text-green-500'>Home</Link>
          </li>
          <li>
            <Link className='hover:text-green-500'>About</Link>
          <li>
            <Link className='hover:text-green-500'>Contact</Link>
          </li>
          </li>
          <li>
            <Link className='hover:text-green-500'>T&C</Link>
          </li>
        </ul>
      </div>
         <div>
        <h3 className='text-lg font-semibold mb-3'>Follow us</h3>
        <div className='space-x-2 flex text-xl'>
          
            <Link className='hover:text-blue-500'><FaFacebook /></Link>
          
            <Link className='hover:text-pink-500'><FaInstagram /></Link>
        
            <Link className='hover:text-blue-500'><FaTwitter /></Link>
         
         
            <Link className='hover:text-green-500'><FaWhatsapp /></Link>
          
        </div>
      </div>
      </div>
      <div className='text-center text-sm text-gray-500 py-4 border-t border-gray-300'>
        © {new Date().getFullYear()} CopyRight By Ds. Vivek🐀
      </div>
    </footer>
   );
}

export default Footer;