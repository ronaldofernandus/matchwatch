"use strict";
const { encryptPass } = require("../helpers/bcrypt");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.product);
      user.hasMany(models.order);
      user.hasMany(models.shopping_cart);
    }
  }
  user.init(
    {
      user_name: DataTypes.STRING,
      user_email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Username tidak boleh kosong",
          },
        },
      },
      user_password: {
        type: DataTypes.STRING,
      },
      user_birthdate: {
        type: DataTypes.DATE,
      },
      user_gender: {
        type: DataTypes.STRING,
      },
      user_avatar: {
        type: DataTypes.STRING,
      },
      user_type: {
        type: DataTypes.STRING,
      },
    },

    {
      hooks: {
        beforeCreate: (user, options) => {
          user.user_password = encryptPass(user.user_password);
          user.user_avatar =
            user.user_avatar || "https://via.placeholder.com/150";
        },
      },
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
