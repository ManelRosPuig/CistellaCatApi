import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Product = sequelize.define('Product', {
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
});

Product.sync();

export default Product;