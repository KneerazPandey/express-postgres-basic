import express from 'express';
import { EnvConfig } from './config/env.config.js';

const app = express();

app.listen(EnvConfig.PORT, () => {
    console.log(`Server is listning at http://localhost:${EnvConfig.PORT}`);
});