"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class soundCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      soundCategory.belongsTo(models.sound);
      soundCategory.belongsTo(models.category); // define association here
    }
  }
  soundCategory.init(
    {
      categoryId: DataTypes.INTEGER,
      soundId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "soundCategory",
    }
  );
  return soundCategory;
};
