const productCollection = require("../models/product.js");
const queryCollection = require("../models/query.js");
const nodemailer = require("nodemailer");

const addProductController = async (req, res) => {
  try {

    const productImage = req.file.filename;
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
      productImage: productImage,
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

const userAllQueryController = async (req, res) => {
  try {
    const record = await queryCollection.find();
    res.status(200).json({ data: record });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error..😓" });
  }
}

const deleteQueryController = async (req, res) => {
  try {
    const id = req.params.abc;
    await queryCollection.findByIdAndDelete(id);
     res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error..😓" });
  }
  
}

const singleQueryController = async (req, res) => {
  try {
    const id = req.params.abc
    const record = await queryCollection.findById(id)
    res.status(200).json({ data: record });
  } catch (error) {
     res.status(500).json({ message: "Internal Server Error..😓" });
  }
}

const mailReplyController = async (req, res) => {
  try {
  const {to, sub, body} = req.body;
  const id = req.params.abc;

  const transporter = nodemailer.createTransport({
  host: "smtp.gamil.com",
  port: 587,
  secure: false,
  auth: {
    user: "aparshakti09@gmail.com",
    pass: "jn7jnAPss4f63QBp6D",
  },
});
const info = transporter.sendMail({
    from: '"ECOMMERC SHOP" <aparshakti09@gmail.com>',
    to: to,
    subject: sub,
    text: body, // plain‑text body
    html: body, // HTML body
  });
    await queryCollection.findByIdAndUpdate(id, {
      queryStatus: "Read",
    })
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error..😓" });
  }
  
}

module.exports = {
  addProductController,
  getAllProductsController,
  deleteProductController,
  editValueDataController,
  updateProductController,
  userAllQueryController,
  deleteQueryController,
  singleQueryController,
  mailReplyController
}