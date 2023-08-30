import { DataTypes, ForeignKeyConstraintError } from 'sequelize';
import sequelize from '../sequelize.js';
import User from './user.js';

const ShoppingList = sequelize.define('ShoppingList', {
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
  userId: {
    type: DataTypes.INTEGER,
    // references: {
    //   model: User,
    //   key: 'id'
    // }
  }
});

// ShoppingList.sync({ force: true });

export default ShoppingList;