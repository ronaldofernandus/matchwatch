const route = require("express").Router();

route.get("/", (req, res) => {
  res.json({
    message: `homepage`,
  });
});

const ProductRoutes = require("./product");
const OrderRoutes = require("./order");
const UserRoutes = require("./user");
const ShopRoutes = require("./shopping_cart");
const imageRoute = require("./imageRoute");
route.use("/products", ProductRoutes);
route.use("/orders", OrderRoutes);
route.use("/user", UserRoutes);
route.use("/shoppingcarts", ShopRoutes);
route.use("/images", imageRoute);



module.exports = route;
