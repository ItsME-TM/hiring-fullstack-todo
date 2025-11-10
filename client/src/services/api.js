import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/todos";

const api = axios.create({
    baseURL: API_URL,
    headers:{
        'Content-Type': 'application/json',
    },
});

export const todoAPI = {
    //Get all todos
    gettAllTodos: async () => {
        const response = await api.get("/");
        return response.data;
    },

    //Create a new todo
    createTodo: async (todoData) => {
        const response = await api.post("/", todoData);
        return response.data;
    },

    //Delete a todo by ID
    deleteTodo: async (id) => {
        const response = await api.delete(`/${id}`);
        return response.data;
    },

    //Update a todo by ID
    updateTodo: async (id, todoData) => {
        const response = await api.put(`/${id}`, todoData);
        return response.data;
    },

    //Toggle todo done status by ID
    toggleTodoDone: async (id) => {
        const response = await api.patch(`/${id}/done`);
        return response.data;
    },
};

export default api;