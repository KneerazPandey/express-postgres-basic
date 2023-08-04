import dotenv from 'dotenv';
dotenv.config();


export const EnvConfig = {
    PORT: process.env.PORT,
    DB_NAME: process.env.DATABASE_NAME,
    DB_PASSWORD: process.env.DATABASE_PASSWORD,
    DB_PORT: process.env.DATABASE_PORT,
    DB_USER: process.env.DATABASE_USER,
    DB_HOST: process.env.DATABASE_HOST,
}