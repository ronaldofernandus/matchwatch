const route = require('express').Router();

route.get('/', (req, res) => {
    res.json({
        message: `homepage`
    })
})


const ProductRoutes = require('./product');
const OrderRoutes = require('./order');
const UserRoutes = require('./user');
const ShopRoutes = require('./shopping_cart');
route.use('/products', ProductRoutes)
route.use('/orders', OrderRoutes)
route.use('/users', UserRoutes)
route.use('/shoppingcarts', ShopRoutes)


module.exports = route;
