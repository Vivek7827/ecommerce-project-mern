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

module.exports = {
  addProductController,
}