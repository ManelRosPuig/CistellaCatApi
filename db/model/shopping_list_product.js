import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const ShoppingListProduct = sequelize.define('ShoppingListProduct', {
  productUuid: {
    type: DataTypes.UUIDV4,
    allowNull: false
  },
  shoppingListUuid: {
    type: DataTypes.UUIDV4,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

ShoppingListProduct.sync();

export default ShoppingListProduct;