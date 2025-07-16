const api = require("express").Router();
const userController = require("../controller/user.js");
const adminController = require("../controller/admin.js");

api.get("/", (req, res) => {
  res.send("Hello Backend");
});

api.post("/signup", userController.regDataController);
api.post("/loginuser", userController.loginDataController);
api.post("/addadminproduct", adminController.addProductController);
api.get("/getallproducts", adminController.getAllProductsController);
api.delete("/deleteproduct/:id", adminController.deleteProductController);
api.get("/editvaluedata/:abc", adminController.editValueDataController);
api.put("/productupdate/:abc", adminController.updateProductController)
api.get("/userproducts", userController.userAllProducts)

module.exports = api;