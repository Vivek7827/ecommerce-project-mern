import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

const Signup = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "", email: "", password: ""});

async function handleForm(e) {
  e.preventDefault();

  try { 
  const response = await fetch("/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })

  const result = await response.json();
    if (response.ok) {
     toast.success(result.message);
     navigate("/login");
    } else {
    toast.error(result.message || "Something went Wrong!");
    }
  
  } catch (error) {
    toast.error("Network error, please try again Later❌")
  }
    
}

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return ( 
  <div className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50'>
    <div className='bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative mx-4'> 
      <button onClick={() => {navigate("/")}} className='absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl'>
        <FaTimes />
        </button>
        <h2 className='text-2xl font-bold mb-4 text-green-600 text-center '>SingUp</h2>
        {/*SignUp Form*/}
        <form action="" onSubmit={handleForm}>

          <label htmlFor="" className='block text-sm text-gray-600 mb-2 font-bold'>
            Full Name
          </label>
          <input 
          type="text" 
          name="fullName"
          value={form.fullName}
          onChange={handleChange} 
          placeholder="Vivek Yadav"
          id="" 
          className='w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500'/>

          <label htmlFor="" className='block text-sm text-gray-600 mb-2 font-bold'>
            Email
          </label>
          <input 
          type="email" 
          name="email" 
          value={form.email}
          onChange={handleChange} 
          placeholder="you@example.com"
          id="" 
          className='w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500'/>  

          <label htmlFor="" className='block text-sm text-gray-600 mb-2 font-bold'>
           Password
          </label>
          <input 
           type="password"
            name="password" 
            value={form.password}
            onChange={handleChange} 
            placeholder="**********"
            id="" 
            className='w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500'/>
          
        <button type="submit" className='w-full bg-green-500 hover:bg-green-800 text-white rounded font-semibold py-2 mt-6'>
            Signup
        </button>
         </form>
        <p className='text-sm text-center text-gray-500 mt-5 font-bold'>Already have an account? Please <Link to={"/login"} className='text-green-600 hover:underline'>Login</Link></p>
       
    </div>
  </div> 
  );
}

export default Signup;

 
           