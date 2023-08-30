import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const ShoppingList = sequelize.define('ShoppingList', {
  uuid: {
    type: DataTypes.UUIDV4,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  icon: {
    type: DataTypes.STRING,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userUuid: {
    type: DataTypes.UUIDV4,
    allowNull: false
  }
});

ShoppingList.sync();

export default ShoppingList;