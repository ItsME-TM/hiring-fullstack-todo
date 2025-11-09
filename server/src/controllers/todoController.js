import Todo from "../models/Todo.js";

//POST /api/todos - Create a new todo
export const createTodo = async (req, res) => {
    try{
        const {title, description} = req.body;
        const todo = await Todo.create({
            title, description
        });
        res.status(201).json(todo);
    }catch(error){
        res.status(400).json({
            message: "Could not create todo",
            error: error.message
        });
    }
};

export const getTodos = async (req, res) => {
    try{
        //get all todos sorted by creation date (using createdAt field from timestamps)  
        //-1 means descending (newest first)
        const todos = await Todo.find().sort({ createdAt: -1 });
        res.json(todos);
    }catch(error){
        res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
};