import express from 'express';
import { createTodo, getTodos, deleteTodo, updateTodo } from '../controllers/todoController.js';

export const router = express.Router();

// Route to create a new todo
router.post('/', createTodo);
router.get('/', getTodos);
router.delete('/:id', deleteTodo);
router.put('/:id', updateTodo);