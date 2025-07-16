const productCollection = require("../models/product.js");

const addProductController = async (req, res) => {
  try {
    const { productName, price, category } = req.body;

    if (!productName || !price || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Check if product already exists
    const existingProduct = await productCollection.findOne({ productName });
    if (existingProduct) {
      return res.status(400).json({ message: "Product already exists" });
    }

    const newProduct = new productCollection({
      productName: productName,
      productPrice: price,
      productCategory: category,
    })

    await newProduct.save();
    res.status(201).json({ message: "Product added successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error adding product"});
  }

}

const getAllProductsController = async (req, res) => {
  try {
    const products = await productCollection.find();
    res.status(200).json({data: products, message: "Products fetched successfully"});
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }

}

const deleteProductController = async (req, res) => {
 try {
  const id = req.params.id;
  await productCollection.findByIdAndDelete(id);
  res.status(200).json({ message: "Product deleted successfully" });
 } catch (error) {
  res.status(500).json({ message: "Error deleting product" });
 } 
}

const editValueDataController = async (req, res) => {
  try {
    const id = req.params.abc;
    const record = await productCollection.findById(id);
    res.status(200).json({data: record})
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error.. "})
  }

}

const updateProductController = async (req, res) => {
 try {
 const { Pname, Pprice, Cat, Pstatus } = req.body
 const id = req.params.abc;

 await productCollection.findByIdAndUpdate(id, {
  productName: Pname,
  productPrice: Pprice,
  productCategory: Cat,
  productStatus: Pstatus,
 })
 res.status(200).json({ message: "Product updated successfully" });
 } catch (error) {
  res.status(500).json({ message: "Internal Server Error.. "})
 }

}

module.exports = {
  addProductController,
  getAllProductsController,
  deleteProductController,
  editValueDataController,
  updateProductController,
}