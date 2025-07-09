const userCollecction = require("../models/user.model.js");
const bcrypt = require("bcrypt");

{/*Controller to handle user registration data*/}

const regDataController = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(userPassword, 10);
    const newUser = new userCollecction({
      userName: fullName,
      userEmail: email,
      userPassword: hashedPassword,
    })

    await newUser.save();
    res.status(201).json({message: "User SingUp successfully"})
  } catch (error) {
    res.status(500).json({message: "Internal server error",});
  }
};

module.exports = {
  regDataController,
}