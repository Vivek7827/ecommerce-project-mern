import React from "react";
import Slidebar from "./Slidebar";

const AdminManageContact = () => {
  return ( 
    <div className='flex mt-16'>
      <Slidebar />
      <div className='flex-1 p-10 bg-gray-100 min-h-screen'>
        <h1 className='text-3xl font-bold mb-6 text-gray-800'>Manage Contact ☎️ </h1>
        <div className='bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto space-y-6'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'>Contact List</h2>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='px-4 py-2 border'>Name</th>
                <th className='px-4 py-2 border'>Email</th>
                <th className='px-4 py-2 border'>Message</th>
                <th className='px-4 py-2 border'>Status</th>
                <th className='px-4 py-2 border'>Action</th> 
                <th className='px-4 py-2 border'>Delete</th>  
              </tr>
            </thead>
            <tbody >
              <tr className='bg-white hover:bg-gray-50'>
                <td className='px-4 py-2 border'>Vivek</td>
                <td className='px-4 py-2 border'>example@gmail.com</td>
                <td className='px-4 py-2 border'>I, Hope are you understand this topic</td>
                <td className='px-4 py-2 border'>
                  <button className='text-xs bg-green-500 text-gray-800 px-2 py-1 rounded'>Read</button>
                </td>
                <td className='px-4 py-2 border'>
                  <button className='text-xs bg-green-500 text-gray-800 px-2 py-1 rounded'>Reply</button>
                </td>
                <td className='px-4 py-2 border'>
                  <button className='text-xs bg-red-500 text-gray-800 px-2 py-1 rounded'>Remove</button>
                </td>
              

              </tr>
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
   );
}

export default AdminManageContact;