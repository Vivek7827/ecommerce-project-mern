const api = require("express").Router();
const userController = require("../controller/user.js");
const adminController = require("../controller/admin.js");
const uploads = require("../middleware/multer.js");

api.get("/", (req, res) => {
  res.send("Hello Backend");
});

api.post("/signup", userController.regDataController);
api.post("/loginuser", userController.loginDataController);
api.post("/addadminproduct", uploads.single("image"), adminController.addProductController);
api.get("/getallproducts", adminController.getAllProductsController);
api.delete("/deleteproduct/:id", adminController.deleteProductController);
api.get("/editvaluedata/:abc", adminController.editValueDataController);
api.put("/productupdate/:abc", adminController.updateProductController)
api.get("/userproducts", userController.userAllProducts)
api.post("/userquery", userController.userQueryController)
api.get("/userallquery", adminController.userAllQueryController)
api.delete("/deletequery/:abc", adminController.deleteQueryController)
api.get("/querysingledata/:abc", adminController.singleQueryController)
api.post("/mailreply/:abc", adminController.mailReplyController)
api.post("/cart/save", userController.saveCartController)
api.get("/cart/:userId", userController.getCartController)
api.get("/search", userController.searchController)

module.exports = api;