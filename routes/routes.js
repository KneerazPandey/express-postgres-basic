import { Router } from "express";
import { todoRoutes } from "./todo.routes.js";


export const routes = Router();

routes.use('/todo', todoRoutes);