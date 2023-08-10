const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require('./Product');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncerement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      model: 'product',
      key: 'id'
    },
    tag_id: {
      type: DataTypes.INTEGER,
      model: 'tag',
      key: 'id'
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;