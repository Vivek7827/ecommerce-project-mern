
import { useNavigate, useParams } from "react-router-dom";
import Slidebar from "./Slidebar";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


const ContactReply= () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [query, setQuery] = useState({to: "", sub: "", body: ""});

  async function queryData() {
    try {
      const response = await fetch(`/api/querysingledata/${id}`);
      const record = await response.json();
      if (response.ok) {
        console.log(record);
        setQuery({to: record.data.Email})
        
      } else {
        console.log(record.message);
        
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    queryData()
  },[])

  function handleChange(e) {
    setQuery({...query, [e.target.name]: e.target.value})
  }

  async function handleForm(e) {
    e.preventDefault();
    try {
     const response = await fetch(`/api/mailreply/${id}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(query)
      })
      const record = await response.json();
      if (response.ok) {
        toast.success(record.message);
        navigate("/admin/manage-contact")
      } else {
        toast.error(record.message)
      } 
    } catch (error) {
      toast.error(error)
    }
    
    
  }

  return ( 
    <div className='flex mt-16'>
      <Slidebar />
      <div className='flex-1 p-10 bg-gray-100 min-h-screen'>
        <h1 className='text-3xl font-bold mb-6 text-gray-800'>Reply Contact ☎️</h1>

         <form onSubmit={handleForm} action="" className='bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto space-y-6'>

          <label htmlFor="" className='block text-gray-600 font-medium mb-1'>To</label>
          <input type="text" name="to" id=""   placeholder="Mail-To" value={query.to} className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600' />

          <label htmlFor="" className='block text-gray-600 font-medium mb-1'>From</label>
          <input type="text" name="" id=""   placeholder="Mail-From" value={"aparshakti09@gmail.com"} className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600' />

          <label htmlFor="" className='block text-gray-600 font-medium mb-1'>Subject</label>
          <input type="text" name="sub" id=""   placeholder="Mail-Subject" value={query.sub} onChange={handleChange} className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600' />

          <label htmlFor="" className='block text-gray-600 font-medium mb-1'>Body</label>
          <textarea name="body" id="" value={query.body} onChange={handleChange} className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600' ></textarea>
          <div className='text-right'>
            <button className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition'>Reply</button>
          </div>
        </form>
      </div>
    </div>
   );
}

export default ContactReply;