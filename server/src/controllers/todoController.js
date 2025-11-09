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

//GET /api/todos - Get all todos
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

//DELETE /api/todos/:id - Delete a todo by ID
export const deleteTodo = async (req, res) => {
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if(!todo){
            return res.status(404).json({message: "Todo not found"});
        }
        res.json({
            message: "Todo deleted successfully"
        });
    }catch(error){
        res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
};

//PUT /api/todos/:id - Update a todo by ID
export const updateTodo = async (req, res) => {
    try{
        // Find the todo by ID and update it with new data {new : true} from req.body
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!todo){
            return res.status(404).json({message: "Todo not found"});
        }
        res.json(todo);
        console.log("Updated Todo:", todo);
    }catch(error){
        res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
}