import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {

  const [query, setQuery] = useState({userName: "", userEmail: "", userMessage: "",})

  function handleChange(e) {
    setQuery({ ...query, [e.target.name]: e.target.value })
  }

  async function handleForm(e) {
   e.preventDefault();
   try {
    const response = await fetch("/api/userquery", {
      method: "POST", 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(query)
    })

    const result = await response.json();
    if (response.ok) {
      toast.success(result.message)
      setQuery({userName: "", userEmail: "", userMessage: "",})
    } else {
      toast.error(result.message)
    }

   } catch (error) {
    toast.error(error);
   }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h1>
        <form onSubmit={handleForm}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input type="text" name="userName" className="w-full px-3 py-2 border rounded" placeholder="Your Name" value={query.userName} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" name="userEmail" className="w-full px-3 py-2 border rounded" placeholder="Your Email" value={query.userEmail} onChange={handleChange}/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea className="w-full px-3 py-2 border rounded" rows="4" name="userMessage" placeholder="Your Message" value={query.userMessage} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;