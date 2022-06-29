const shopRoute = require('express').Router();
const ShopController = require('../controllers/ShoppingCartController');

shopRoute.get('/',ShopController.getinfoshopping);

module.exports = shopRoute;