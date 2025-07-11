import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
import Cart from "./pages/Cart";
import AdminDashboard from "./admin/AdminDashboard";
import AdminProducts from "./admin/AdminProducts";
import AddProducts from "./admin/AddProducts";
import EditProducts from "./admin/EditProducts";
import Contact from "./pages/Contact";
import AdminManageContact from "./admin/AdminManageContact";

const App = () => {
  return (
    <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/sing" element={<Singup />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/contact" element={<Contact />}/>
      {/*Admin Panel*/}
      <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
      <Route path="/admin/products" element={<AdminProducts/>}/>
      <Route path="/admin/add-products" element={<AddProducts/>}/>
      <Route path="/admin/edit-products" element={<EditProducts/>}/>
      <Route path="/admin/manage-contact" element={<AdminManageContact/>}/>
     </Routes>
     <Footer />
    </BrowserRouter>
   );
}

export default App;