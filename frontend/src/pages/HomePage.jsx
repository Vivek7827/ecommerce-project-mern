import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Category from "./Category";

const HomePage = () => {
  return ( 
    <div>
      <Category />
      <Hero />
      <Products />
    </div>
   );
}

export default HomePage;