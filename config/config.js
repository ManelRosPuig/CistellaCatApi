import env from 'dotenv';

env.config();

const PORT = process.env.PORT || 8080;

export const dbName = process.env.DB_NAME || '';
export const dbUser = process.env.DB_USER || '';
export const dbPassword = process.env.DB_PASSWORD || '';
export const dbHost = process.env.DB_HOST || '';
export const dialect = process.env.DIALECT || '';

export default PORT;