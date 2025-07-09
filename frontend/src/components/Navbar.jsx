import React, { useState } from "react";
import Logo from "../assets/ecommerce_logo.png";
import { Link } from "react-router-dom";
import { FaHome, FaRegUserCircle, FaShoppingCart,FaSearch,FaTimes, FaBars } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";




const Navbar = () => {

  
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  

  return ( 
    <nav className='bg-gradient-to-r from-green-200 to-white shadow-sm fixed top-0 left-0 right-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/*Logo*/}
          <div>
            <img src={Logo} alt="" className='h-16 w-auto'/>
          </div>
          {/*Search*/}
          <div className='flex-1 mx-4'>
            <div className='relative'>
              <input 
              type="search" 
              name="" 
              id="" 
              className='w-full bg-gray-200 rounded-full ps-4 pe-10 py-2 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-green-400'/>
              <FaSearch className='absolute right-3 top-3 text-sm text-gray-500'/>
            </div>
          </div>
          {/*Menu Items*/}
          <div className='hidden md:flex space-x-6 items-center'>
            <Link className='text-gray-700 hover:text-green-500 font-semibold'><FaHome className='text-2xl hover:text-green-500'/></Link>
            <Link to={"/login"} >
            <FaRegUserCircle className='text-2xl hover:text-green-500' />
            </Link>
            <Link to={"/cart"}>
            <FaShoppingCart className='text-2xl hover:text-green-500'/>
            </Link>
            <Link to={"/contact"}>
            <MdContactSupport className='text-2xl hover:text-green-500' />
            </Link>
          </div>
          {/*Mobile Toggle*/}
          <div className='md:hidden flex items-center'>
            <button onClick={toggleMenu} className="text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          {/* Mobile Menu Items */}
          {
            isOpen && <div className='md:hidden bg-white px-4 pt-2 pb-4 space-y-1 shadow-md'>
              <Link className='block text-gray-600 hover:text-gray-500'>Home</Link>
              <Link className='block text-gray-600 hover:text-gray-500'>Search</Link>
              <Link to={"/cart"} className='block text-gray-600 hover:text-gray-500'>Cart</Link>
              <Link to={"/login"} className='block text-gray-600 hover:text-gray-500'>User</Link>
            </div>
          }
        </div>
      </div>
    </nav>
   );
}

export default Navbar;