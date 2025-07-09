import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input type="text" className="w-full px-3 py-2 border rounded" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea className="w-full px-3 py-2 border rounded" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;