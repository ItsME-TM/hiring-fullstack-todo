//Shows the list of todos
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onUpdate, onDelete }) {
    if(todos.length === 0) {
        return (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-gray-500 text-lg">No todos yet. Add one to get started! 🎯</p>
        </div>
        );
    }
    return (
        <ul className="space-y-3">
            {todos.map((todo) => (
                <TodoItem
                    key = {todo._id}
                    todo = {todo}
                    onUpdate = {onUpdate}
                    onDelete = {onDelete}
                />
            ))}
        </ul>
    );
}