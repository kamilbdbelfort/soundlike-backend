"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class sound extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      sound.belongsToMany(models.category, {
        through: "soundCategory",
        foreignKey: "soundId",
      }); // define association here
    }
  }
  sound.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      description: DataTypes.STRING,
      soundURL: { type: DataTypes.STRING, allowNull: false, unique: true },
      imageURL: DataTypes.STRING,
      played: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "sound",
    }
  );
  return sound;
};
