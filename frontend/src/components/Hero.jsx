import React from "react";
import HeroImage from "../assets/Hero_iamge1.png"

const Hero = () => {
  return ( 
    <section className='bg-gradient-to-r from-green-100 to-white px-8 py-10 md:flex items-center justify-between max-w-7xl mx-6 mt-12 m-8 rounded-lg ' >
      <div className='md:w-1/2 space-y-4'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-600'>Fast Delivery 🚀</h1>
        
        <p className='text-gray-600 font-semibold'> Welcome to your ultimate shopping destination! From the latest trends to everyday essentials, we bring you top-quality products at unbeatable prices.</p>
          
        <button className='mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg'>Shop Now</button>
      </div>
      <div className='md:w-1/2 mt-2 md:mt-0'>
       <img src={HeroImage} alt="" className='w-full max-w-md mx-auto rounded-lg' />
      </div>
    </section>
   );
}

export default Hero;