import env from 'dotenv';

env.config();

const PORT = process.env.PORT || 8080;

export default {
    PORT,
}