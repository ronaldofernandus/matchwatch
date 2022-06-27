const shopRoute = require('express').Router();
const ShopController = require('../controllers/ShoppingCartController');

shopRoute.get('/info_shoppingcart',ShopController.getinfoshopping);

module.exports = shopRoute;