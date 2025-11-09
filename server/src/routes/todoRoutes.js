import express from 'express';
import { createTodo } from '../controllers/todoController.js';

export const router = express.Router();

// Route to create a new todo
router.post('/', createTodo);
