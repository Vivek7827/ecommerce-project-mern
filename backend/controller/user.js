const userCollecction = require("../models/user.js");
const productCollection = require("../models/product.js");
const queryCollection = require("../models/query.js");
const bcrypt = require("bcrypt");
const cartCollection = require("../models/cart.js")

{/*Controller to handle user registration data*/}

const regDataController = async (req, res) => {
  
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userCollecction({
      userName: fullName,
      userEmail: email,
      userPassword: hashedPassword,
    })

    await newUser.save();
    res.status(201).json({message: "User SingUp successfully 😊"})
  } catch (error) {
    res.status(500).json({message: "Internal server error 🥺"});
  }
};

const loginDataController = async (req, res) => {
  try {
     const { loginEmail, loginPassword } = req.body;
 
     const userCheck = await userCollecction.findOne({ userEmail: loginEmail });
     if (!userCheck) {
      return res.status(404).json({ message: "User not found ❌" });
      }

     const matchPassword = await bcrypt.compare(loginPassword, userCheck.userPassword);
     if (!matchPassword) {
      return res.status(401).json({ message: "Invalid credentials ❌" });
     }

     res.status(200).json({
     message: "Login Successfully 😊",
     data: userCheck,
     })


    } catch (error) {
    res.status(500).json({ message: "Internal server error 🥺" });    
    }
}

const userAllProducts = async (req, res) => {
  try {
    const record = await productCollection.find({productStatus: "In-Stock"});
    res.status(200).json({
     data: record,
     })
  } catch (error) {
    res.status(500).json({ message: "Internal server error 🥺" }); 
  }
}

const userQueryController = async (req, res) => {
 
 try {
  const {userName, userEmail, userMessage} = req.body;
  const record = new queryCollection({
    Name: userName,
    Email: userEmail,
    Message: userMessage,
  })
  await record.save();
   res.status(201).json({message: "Submit Your Query Successfully 😊"})
 } catch (error) {
   res.status(500).json({message: "Internal server error 🥺"});
 }
 
}

const saveCartController = async (req, res) => {
  const {userId, cartItems, totalPrice, totalQuantity} = req.body;

  let cart = await cartCollection.findOne({userId})
  
  try {
    if (cart) {
    cart.cartItems = cartItems;
    cart.totalPrice = totalPrice;
    cart.totalQuantity = totalQuantity;
    await cart.save();
  } else {
    cart = new cartCollection({
      userId,
      cartItems,
      totalPrice,
      totalQuantity,
    })
    await cart.save();
  }
  res.status(200).json({message: "Cart Save Successfully"})
  } catch (error) {
  res.status(500).json({message: "Internal server error 🥺"});
  }
}

const getCartController = async (req, res) => {
  try {
    const userId = req.params.userId
    const cart = await cartCollection.findOne({userId})
    res.status(200).json(cart)
  } catch (error) {
    res.status(500).json({message: "Internal server error 🥺"});
  }
}

module.exports = {
  regDataController,
  loginDataController,
  userAllProducts,
  userQueryController,
  saveCartController,
  getCartController,
}