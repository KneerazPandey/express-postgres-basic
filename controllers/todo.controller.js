import { pool } from '../db/db.js';


export const getAllTodos = async (req, res) => {
    try {
        const query = `SELECT * FROM todo`;
        const todos = await pool.query(query);
        return res.status(200).json(todos.rows);
    }catch (error) {
        return res.status(400).json(error.message);
    }
}


export const createTodo = async (req, res) => {
    try {
        const { description } = req.body;
        const query = `INSERT INTO todo (description) VALUES ($1) RETURNING *`;
        const newTodo = await pool.query(query, [description]);
        return res.status(200).json(newTodo.rows[0]);
    }catch (error) {
        return res.status(400).json({error: "Error while creating todo"});
    }
}


export const getTodo = async (req, res) => {
    try {
        const { todo_id } = req.params;
        const query = `SELECT * FROM todo WHERE todo_id = $1`;
        const todo = await pool.query(query, [todo_id]);
        return res.status(200).json(todo.rows[0]);
    }catch (error) {
        return res.status(400).json({error: error.message});
    }
}


export const deleteTodo = async (req, res) => {
    try {
        const { todo_id } = req.params;
        const query = `DELETE FROM todo WHERE todo_id = $1`;
        await pool.query(query, [todo_id]);
        return res.status(200).json({message: "Successfully deleted todo"});
    }catch (error) {
        return res.status(400).json({error: error.message});
    }
}


export const updateTodo = async (req, res) => {
    try {
        const { todo_id } = req.params;
        const { description } = req.body;
        const query = `UPDATE todo SET description = $1 WHERE todo_id = $2`;
        await pool.query(query, [description, todo_id]);
        return res.status(200).json({message: "Successfully updated todo"});
    }catch (error) {
        return res.status(400).json({error: error.message});
    }
}