import React from "react";

const Products = () => {
  return ( 
    <section className='py-10 px-6 max-w-7xl mx-auto'>

      <h2 className='text-2xl font-semibold text-gray-500 mb-6'>
        Treading Products 🔥
      </h2>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>

      {
        [1,2,3,4,5,6,7,8].map(() => (

        <div className='bg-white shadow rounded-lg p-4 hover:shadow-lg transition'>
          <img 
          src="vkvj" 
          alt="ProductImage"
          className='w-full h-32 object-cover rounded' 
          />
          <h3 className='mt-2 font-med text-gray-600'>
            Fresh Item
          </h3>
          <p className='text-green-500 font-bold'>₹99</p>
          <button className='mt-2 w-full bg-green-200 hover:bg-green-600'>
            Add To Cart
          </button>
        </div>

        ))
      }
      
      </div>    
    </section>
  );
}

export default Products;