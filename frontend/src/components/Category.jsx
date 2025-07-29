import React from "react";
import { FaCoffee, FaCouch, FaPuzzlePiece, FaAppleAlt, FaLaptop, FaMobileAlt, FaAirFreshener,FaShoppingBag } from "react-icons/fa";


const Category = ({onSelectCategory}) => {
  
  const categories = [
    {name: "All", icon:<FaShoppingBag />},
    {name: "Cafe", icon:<FaCoffee /> },
    {name: "Home", icon:<FaCouch /> },
    {name: "Toys", icon:<FaPuzzlePiece /> },
    {name: "Freash", icon:<FaAppleAlt /> },
    {name: "Electronics", icon:<FaLaptop /> },
    {name: "Mobile", icon:<FaMobileAlt /> },
    {name: "Beauty", icon:<FaAirFreshener /> },
  ];
  
  return ( 
    <div className='bg-white w-full'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex sm:justify-center overflow-x-auto'>
          {
            categories.map((cat,index) => (
              <div key={index} onClick={onSelectCategory(cat.name)} className='flex flex-col items-center min-w-[80px] text-sm text-gray-800 hover:text-green-500 hover:cursor-pointer'>
                <div className='text-2xl mb-1'>{cat.icon}</div>
                <div className='text-center font-semibold'>{cat.name}</div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
   );
}

export default Category;