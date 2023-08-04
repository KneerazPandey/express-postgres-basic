import pg from 'pg';
import { EnvConfig } from '../config/env.config.js';


export const pool = new pg.Pool({
    user: EnvConfig.DB_USER,
    password: EnvConfig.DB_PASSWORD,
    host: EnvConfig.DB_HOST,
    port: EnvConfig.DB_PORT,
    database: EnvConfig.DB_NAME,
});
