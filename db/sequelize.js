import { Sequelize } from 'sequelize';
import { dbName, dbUser, dbPassword, dbHost, dialect } from '../config/config.js';

const sequelize = new Sequelize(
  dbName,
  dbUser,
  dbPassword,
  {
    host: dbHost,
    dialect: dialect,
  }
);

export default sequelize;