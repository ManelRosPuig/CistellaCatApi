import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';
import ShoppingList from './shopping_list.js';

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  surnames: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default User;