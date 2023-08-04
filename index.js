import express from 'express';
import cors from 'cors';
import { EnvConfig } from './config/env.config.js';

const app = express();

//! Middlewares
app.use(cors());
app.use(express.json());

app.listen(EnvConfig.PORT, () => {
    console.log(`Server is listning at http://localhost:${EnvConfig.PORT}`);
});