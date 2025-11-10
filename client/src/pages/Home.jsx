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
      console.log("[Home]Fetched todos:", data);
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
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500">
              <p className="mt-4 text-gray-600">Loading todos...</p>
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
