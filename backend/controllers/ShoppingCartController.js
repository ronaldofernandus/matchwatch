const { shopping_cart, order } = require("../models");

class ShoppingCartController {
  static async getinfoshopping(req, res) {
    try {
      let id = Number(req.userData.id);
      let orders = await order.findAll({
        where: {
          shop_user_id: id,
        },
        include: [user],
      });
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
module.exports = ShoppingCartController;
