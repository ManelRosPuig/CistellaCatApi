import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const ShoppingListProduct = sequelize.define('ShoppingListProduct', {
  quantity: DataTypes.INTEGER
});

export default ShoppingListProduct;