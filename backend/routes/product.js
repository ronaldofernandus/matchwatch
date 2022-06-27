const productRoute = require("express").Router();
const ProductController = require("../controllers/ProductControllers");
const { authentication } = require("../middleware/auth");

productRoute.get(
  "/info_product/:id",
  authentication,
  ProductController.getProductById
);
productRoute.put("/:id", authentication, ProductController.updateProduct);
productRoute.post("/add", authentication, ProductController.createProduct);
productRoute.get("/", authentication, ProductController.getProduct);

productRoute.delete("/:id", authentication, ProductController.deleteProduct);
module.exports = productRoute;
