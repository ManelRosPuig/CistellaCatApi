import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const User = sequelize.define('User', {
  uuid: {
    type: DataTypes.UUIDV4,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
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

User.sync();

export default User;