const {shopping_cart} = require("../models");
const { decryptPassword } = require("../helpers/bcrypt");
const { tokenGenerator, tokenVerifier } = require("../helpers/jsonwebtoken");

class ShoppingCartController {
 static async getinfoshopping (req,res) {
     try{
        let id = Number(req.userData.id)
            let orders = await order.findAll({
                where: {
                   shop_user_id:id
                },
                include:[user]
        });
     }
     catch(err) {
        res.status(500).json({message: err.message});
     }
 }
}
module.exports = ShoppingCartController;
