const { Model, DataTypes, INTEGER } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    product_id:{ 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    tag_id: {
      type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
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
