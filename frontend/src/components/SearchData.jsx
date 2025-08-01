import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const SearchData = ({onclose}) => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
 
  useEffect(()=>{
    const delayDebounce = setTimeout(()=>{
      if (query.trim()) {
        fetch(`/api/search?q=${query}`)
        .then((res)=>{
          return res.json()
        })
        .then((result)=>{
          setResults(result.data)
        })
        .catch((err)=>{
          console.log(err);
        })
      }
    },300)

    return () => clearTimeout(delayDebounce)
  }, [query])

  return (
    <div className='fixed inset-0 bg-white z-[999] p-6 overflow-y-auto'>
      <div className='flex justify-between items-center mb-4'>
        <input 
        type="text" 
        name="" 
        id="" 
        value={query} 
        onChange={(e)=>{setQuery(e.target.value)}} autoFocus 
        placeholder='Search Here....' className='flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-green-500'/>
        <button onClick={()=>{onclose(false)}} className='ml-3 text-gray-600 hover:text-red-600 text-xl'>
          <FaTimes />
        </button>
      </div>
      {/* Search Result */}
      <div>
        {
          results.length > 0 ? (results.map((item)=>(
            <div key={item._id} className='border p-3 rounded-lg shadow-sm flex justify-between items-center'>
              <div>
                <img 
                 src={`/uploads/${item.productImage}`} 
                 alt="ProductImage"
                 className='w-full h-32 object-contain rounded' 
                />
                <h2 className='font-semibold '>
                 {item.productName}
                </h2>
                <p className='text-sm text-gray-500'>
                 {item.productCategory}
                </p>
              </div>
            </div>
          )) ): (<p>No Results Found</p>)
        }
      </div>
    </div>
  )
}

export default SearchData
