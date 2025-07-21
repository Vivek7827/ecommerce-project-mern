import React, { useEffect, useState } from "react";
import Slidebar from "./Slidebar";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const AdminManageContact = () => {

  const [query, setQuery] = useState([])
  console.log(query);
  
  async function allQuery() {
   
   try {
    const response = await fetch("/api/userallquery", {
      method: "GET", 
      headers: {"Content-Type": "application/json"}})
    const record = await response.json();
    if (response.ok) {
      setQuery(record.data)
    } else {
      toast.error(record.message)
    }
   } catch (error) {
      toast.error(error);
   }

  }

  async function handleDelete(id) {
    try {
     const response = await fetch(`/api/deletequery/${id}`, {
        method: "DELETE",
      })
      const record = await response.json();
      if (response.ok) {
        toast.success(record.message);
        allQuery();
      } else {
        toast.error(record.message)
      }
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    allQuery();
  }, [])

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
              {/*MAP*/}
              {
                query.map((items) => (
                <tr key={items._id} className='bg-white hover:bg-gray-50'>
                <td className='px-4 py-2 border'>{items.Name}</td>
                <td className='px-4 py-2 border'>{items.Email}</td>
                <td className='px-4 py-2 border'>{items. Message}</td>
                <td className='px-4 py-2 border'>
                  <button className='text-xs bg-green-500 text-gray-800 px-2 py-1 rounded'>{items.queryStatus}</button>
                </td>
                <td className='px-4 py-2 border'>
                  <Link to={`/admin/contact-reply/${items._id}`}>
                    <button className='text-xs bg-green-500 text-gray-800 px-2 py-1 rounded'>Reply</button>
                  </Link>
                </td>
                <td className='px-4 py-2 border'>
                    <button onClick={() => {handleDelete(items._id)}} className='text-xs bg-red-500 text-gray-800 px-2 py-1 rounded'>Delete</button>
                </td>
              </tr>        
                ))
              }                 
            </tbody>
          </table>
        </div>
      </div>
    </div>
   );
}

export default AdminManageContact;