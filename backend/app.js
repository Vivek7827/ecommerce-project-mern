const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const apiRouter = require("./routes/api")
const mongoose = require("mongoose");

// connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/eshop")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());
app.use("/api", apiRouter);
let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});