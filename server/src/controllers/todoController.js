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