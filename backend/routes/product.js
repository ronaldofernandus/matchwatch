const productRoute = require("express").Router();
const ProductController = require("../controllers/ProductControllers");
const {authentication} = require('../middleware/auth')

productRoute.get("/info_product/:id",ProductController.getProductById);
productRoute.post("/add",authentication,ProductController.createProduct);
productRoute.get("/",ProductController.getProduct);
module.exports = productRoute;
