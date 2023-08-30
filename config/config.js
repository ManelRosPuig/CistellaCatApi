import env from 'dotenv';

env.config();

const PORT = process.env.PORT || 8080;

const dbName = process.env.DB_NAME || '';
const dbUser = process.env.DB_USER || '';
const dbPassword = process.env.DB_PASSWORD || '';
const dbHost = process.env.DB_HOST || '';
const dialect = process.env.DB_HOST || '';

export default {
    PORT,
    dbName,
    dbUser,
    dbPassword,
    dbHost,
    dialect
}