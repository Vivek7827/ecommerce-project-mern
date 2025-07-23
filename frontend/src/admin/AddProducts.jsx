import React, { useState } from "react";
import Slidebar from "./Slidebar";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddProducts = () => {

const navigate = useNavigate();
const [product, setProduct] = useState({productName: "", price: "", category: ""});

const [productImage, setProductImage] = useState("");

async function handleForm(e) {
  e.preventDefault();
  
  const formData = new FormData();
  formData.append("productName", product.productName);
  formData.append("price", product.price);
  formData.append("category", product.category);
  formData.append("image", productImage);
  
  try {
    const response = await fetch("/api/addadminproduct", {
      method: "POST",
      // headers: {
      //   "Content-Type": "multipart/form-data"},
      body: formData})

      const result = await response.json();
      if (response.ok) {
        toast.success(result.message);
        navigate("/admin/products");
      } else {
        toast.error(result.message);
      }
  } catch (error) {
    toast.error("Error adding product");
  }
  
}

function handleChange(e) {
  setProduct({ ...product, [e.target.name]: e.target.value });
}
  return ( 
    <div className='flex mt-16'>
      <Slidebar />
      <div className='flex-1 p-10 bg-gray-100 min-h-screen'>
        <h1 className='text-3xl font-bold mb-6 text-gray-800'> Add Products 🛍️</h1>
        
        <button className='bg-gray-300 px-4 py-2 rounded hover:bg-slate-500 font-semibold mb-2' onClick={() => {navigate("/admin/products")}}>Back</button>

        <form encType="multipart/form-data" onSubmit={handleForm} action="" className='bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto space-y-6'>
          <label htmlFor="" className='block text-gray-600 font-medium mb-1'>Product Name</label>
          <input type="text" name="productName"  id="" value={product.productName} onChange={handleChange} placeholder="e.g Fresh Fruits" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600' />

          <label htmlFor="" className='block text-gray-600 font-medium mb-1'>Price</label>
          <input type="number" name="price" id="" value={product.price} onChange={handleChange} placeholder="e.g 999" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600' />

          <label htmlFor="" className='block text-gray-600 font-medium mb-1'>Category</label>
          <select name="category" id="" value={product.category} onChange={handleChange} className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600'>
            <option value="">---Select---</option>
            <option value="cafe">Cafe</option>
            <option value="home">Home</option>
            <option value="toys">Toys</option>
            <option value="freash">Freash</option>
            <option value="electronics">Electronics</option>
            <option value="mobile">Mobile</option>
            <option value="beauty">Beauty</option>
          </select>

          <label htmlFor="" className='block text-gray-600 font-medium mb-1'>Image</label>
          <input type="file" name="" id="" onChange={(e)=>{setProductImage(e.target.files[0])}} className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600'/>

          <div className='text-right'>
            <button type="submit" className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition'>Add Products</button>
          </div>
        </form>
      </div>
    </div>
   );
}

export default AddProducts;