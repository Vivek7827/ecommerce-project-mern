import React from "react";
import { Link } from "react-router-dom";

const Slidebar = () => {
  return ( 
    <div className='bg-gray-800 text-white w-64 min-h-screen p-6 space-y-6 '>
      <h2 className='text-2xl font-bold mb-8'>Admin Panel 👤</h2>
      <nav className='space-y-4'>
        <Link to={"/admin/dashboard"} className='block hover:text-green-600 font-semibold'>DashBoard</Link>

        <Link to={"/admin/products"} className='block hover:text-green-600 font-semibold'>Manage Products</Link>

        <Link to={"/admin/manage-contact"} className='block hover:text-green-600 font-semibold'>Manage Contuct's</Link>

        <Link to={"/"} className='block text-red-600 hover:underline font-semibold'>Exit To Store</Link>
      </nav>
    </div>
   );
}

export default Slidebar;