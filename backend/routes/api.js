const express = require("express");
const api = express.Router();
const { regDataController } = require("../controller/user.controller.js");

api.get("/", (req, res) => {
  res.send("Hello Backend");
});

api.post("/regdata", regDataController);

module.exports = api;