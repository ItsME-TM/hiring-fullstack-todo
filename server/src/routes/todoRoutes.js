import express from 'express';
import { createTodo, getTodos } from '../controllers/todoController.js';

export const router = express.Router();

// Route to create a new todo
router.post('/', createTodo);
router.get('/', getTodos);