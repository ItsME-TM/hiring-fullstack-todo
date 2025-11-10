// Ties everything together and serves as the landing page
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import { useEffect, useState } from "react";
import { todoAPI } from "../services/api";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //Fetch todos when component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await todoAPI.gettAllTodos();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
      setError("Failed to fetch todos.");
    } finally {
      setIsLoading(false);
    }
  };

  //Add new todo the beginning of the list
  const handleAddTodo = async (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  //Update todo in the list
  const handleUpdateTodo = (updatedTodo) => {
    setTodos(todos.map((t) => (t._id === updatedTodo._id ? updatedTodo : t)));
  };

  //Delete todo from the list
  const handleDeleteTodo = async (todoId) => {
    setTodos(todos.filter((t) => t._id !== todoId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">My Todo App</h1>
          <p className="text-gray-600">Lets stay Organized and Productive</p>
        </header>

        {/* Todo Form */}
        <TodoForm onAdd={handleAddTodo} />

        {/* Error */}
        {error && (
          <div>
            {error}
            <button
              onClick={fetchTodos}
              className="ml-4 underline hover:no-underline"
            >
              Retry
            </button>
          </div>
        )}

        {/* Loading */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="flex items-center justify-center gap-4">
              {/* Accessible SVG spinner for loading screen */}
              <svg
                className="animate-spin h-10 w-10 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              <p className="text-gray-600">Loading todos...</p>
            </div>
          </div>
        ) : (
          <TodoList
            todos={todos}
            onUpdate={handleUpdateTodo}
            onDelete={handleDeleteTodo}
          />
        )}

        {/* Loading */}
        {isLoading && todos.length > 0 && (
          <div>
            {todos.filter((t) => t.done).length} of {todos.length} completed
          </div>
        )}
      </div>
    </div>
  );
}
