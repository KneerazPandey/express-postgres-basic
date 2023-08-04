import { Router } from "express";
import { 
    createTodo, 
    deleteTodo, 
    getAllTodos, 
    getTodo, 
    updateTodo
} from "../controllers/todo.controller.js";


export const todoRoutes = Router();

todoRoutes.get('', getAllTodos);

todoRoutes.post('', createTodo);

todoRoutes.get('/:todo_id', getTodo);

todoRoutes.delete('/:todo_id', deleteTodo);

todoRoutes.patch('/:todo_id', updateTodo);
