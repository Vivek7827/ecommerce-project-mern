import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {

 const navigate = useNavigate();

 const [showPassword, setShowPassword] = useState(false);

  // Function to handle form submission

  const [login, setLogin] = useState({ loginEmail: "", loginPassword: ""});

  function handleForm(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  return ( 
  <div className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50'>
    <div className='bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative mx-4'> 
      <button onClick={() => {navigate("/")}} className='absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl'>
        <FaTimes />
        </button>
        <h2 className='text-2xl font-bold mb-4 text-green-600 text-center '>Login</h2>
        {/*Login Form*/}
        <form action="" onSubmit={handleForm}>

          <label htmlFor="" className='block text-sm text-gray-600 mb-2 font-bold'>
            Email
          </label>
          <input 
          type="email" 
          name="loginEmail" 
          placeholder="you@example.com"
          onChange={handleChange}
          value={login.loginEmail}
          id="" 
          className='w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500'/>

          <div className='relative'>
          <label htmlFor="" className='block text-sm text-gray-600 mb-2 font-bold'>
            Password
          </label>
          <input 
          type={showPassword ? "password" : "text"}
          name="loginPassword" 
          placeholder="**********"
          onChange={handleChange}
          value={login.loginPassword}
          id="" 
          className='w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500'/>

           <button type="button" onClick={() => {
            setShowPassword(!showPassword)
           }} className='absolute top-8 right-4 bottom-2 text-gray-500 hover:text-green-500'>  
            {showPassword ? <FaEyeSlash /> : <FaEye></FaEye>}
           </button>
          </div>

  
          <button type="submit" className='w-full bg-green-500 hover:bg-green-800 text-white rounded font-semibold first-of-type:last-of-type:py-2 mt-6'>
            Login
          </button>
        </form>

          <p className='text-sm text-center text-gray-500 mt-5 font-bold'>Don't have an account please <Link to={"/sing"} className='text-green-600 hover:underline'>SignUp</Link></p>
    </div>
  </div> );
}

export default Login;