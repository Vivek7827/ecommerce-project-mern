import React from "react";
import Slidebar from "./Slidebar";
import { useNavigate } from "react-router-dom";

const EditProducts = () => {

const navigate = useNavigate();

  return ( 
    <div className='flex mt-16'>
      <Slidebar />
      <div className='flex-1 p-10 bg-gray-100 min-h-screen'>
        <h1 className='text-3xl font-bold mb-6 text-gray-800'> Edit Products 📝</h1>
        
        <button className='bg-gray-300 px-4 py-2 rounded hover:bg-slate-500 font-semibold mb-2' onClick={() => {navigate("/admin/products")}}>Back</button>

        <form action="" className='bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto space-y-6'>
          <label htmlFor="" className='block text-gray-600 font-medium mb-1'>Product Name</label>
          <input type="text" name="" id="" placeholder="e.g Fresh Fruits" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600' />

          <label htmlFor="" className='block text-gray-600 font-medium mb-1'>Price</label>
          <input type="number" name="" id="" placeholder="e.g 999" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600' />

          <label htmlFor="" className='block text-gray-600 font-medium mb-1'>Action</label>
          <select name="" id="" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600'>
            <option value="">---Select---</option>
            <option value="">In-Stock</option>
            <option value="">Out-Of-Stock</option>
          </select>

          <label htmlFor="" className='block text-gray-600 font-medium mb-1'>Image</label>
          <input type="file" name="" id="" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600'/>

          <div className='text-right'>
            <button className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition'>Add Products</button>
          </div>
        </form>
      </div>
    </div>
   );
}

export default EditProducts;