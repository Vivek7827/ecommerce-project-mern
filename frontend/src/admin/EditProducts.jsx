import React, { useEffect, useState } from "react";
import Slidebar from "./Slidebar";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const EditProducts = () => {

const navigate = useNavigate();

const [edit, setEdit] = useState([]);

const {id} = useParams();

async function editValueData() {
  try {
    const response = await fetch(`/api/editvaluedata/${id}`);
    const record = await response.json();
    setEdit(record.data);
  } catch (error) {
    console.log(error);
  }
}

async function handleForm(e) {
  try {
    e.preventDefault();
    const formData = {
      Pname: edit.productName,
      Pprice: edit.productPrice,
      Cat: edit.productCategory,
      Pstatus: edit.productStatus,
    }

    const response = await fetch( `/api/productupdate/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    const record = await response.json()
    if (response.ok) {
      toast.success(record.message)
      navigate("/admin/products")
    } else {
      toast.error(record.message)
    }

  } catch (error) {
    console.log(error); 
  } 
}

useEffect(() => {
  editValueData();
},[])

function handleChange(e) {
  setEdit({ ...edit, [e.target.name]: e.target.value})
}

  return ( 
    <div className='flex mt-16'>
      <Slidebar />
      <div className='flex-1 p-10 bg-gray-100 min-h-screen'>
        <h1 className='text-3xl font-bold mb-6 text-gray-800'> Edit Products 📝</h1>
        
        <button className='bg-gray-300 px-4 py-2 rounded hover:bg-slate-500 font-semibold mb-2' onClick={() => {navigate("/admin/products")}}>Back</button>

        <form onSubmit={handleForm} action="" className='bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto space-y-6'>
          <label htmlFor="" className='block text-gray-600 font-medium mb-1'>Product Name</label>
          <input type="text" name="productName" id="" value={edit.productName} onChange={handleChange} placeholder="e.g Fresh Fruits" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600' />

          <label htmlFor="" className='block text-gray-600 font-medium mb-1'>Price</label>
          <input type="number" name="productPrice" id="" value={edit.productPrice} onChange={handleChange} placeholder="e.g 999" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600' />

          <label htmlFor="" className='block text-gray-600 font-medium mb-1'>Action</label>
          <select name="productStatus" id="" value={edit.productStatus} onChange={handleChange} className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600'>
            <option value="">---Select---</option>
            <option value="In-Stock">In-Stock</option>
            <option value="Out-Of-Stock">Out-Of-Stock</option>
          </select>

          <label htmlFor="" className='block text-gray-600 font-medium mb-1'>Image</label>
          <input type="file" name="" id="" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600'/>

          <div className='text-right'>
            <button className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition'>Save Changes</button>
          </div>
        </form>
      </div>
    </div>
   );
}

export default EditProducts;