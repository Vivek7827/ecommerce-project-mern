import React from "react";
import Slidebar from "./Slidebar";
import { FaPlus, FaEdit,FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  return ( 
    <div className='flex mt-16'>
      <Slidebar />
      <div className='flex-1 p-10 bg-gray-100 min-h-screen'>
        <h1 className='text-3xl font-bold mb-6 text-gray-800'> Manage Products 📊
        </h1>
        <Link to={"/admin/add-products"} className='flex items-center justify-end mb-4'>
          <button className='flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition'>
           <FaPlus /> Add Products
          </button>
        </Link>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5'>

          {
            [1,2,3,4,5,6,7,8].map(()=>(

            <div className='bg-white rounded-xl shadow p-4 hover:shadow-xl transition'>
            {/*Product Image*/}
            <img 
            src="asa" 
            alt="Image" 
            className='w-full h-40 object-cover rounded-md mb-4 border'/>
            <h3 className='text-xl font-semibold text-gray-700'>Product Name</h3>
            <p className='text-sm text-gray-600 font-semibold'>Category:- Home</p>
            <p className='text-green-500 font-bold mt-1'>₹99</p>
            {/*Edit & Delete Button*/}
            <div className='flex justify-between mt-4'>
             <Link to={"/admin/edit-products"} className='flex items-center gap-2 text-blue-500 hover:text-blue-800'><FaEdit />Edit</Link>
             <Link className='flex items-center text-red-500 hover:text-red-800'><FaTrash />Delete</Link>
            </div>
          </div>

            ))
          }

        </div> 
      </div>
    </div>
   );
}

export default AdminProducts;