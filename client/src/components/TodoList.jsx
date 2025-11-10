//Shows the list of todos
import TodoItem from "./TodoItem";
// Small sample data used only when no `todos` prop is provided
const sampleTodos = [
    {
        _id: "1",
        title: "Sample Todo 1",
        description: "This is a sample description for todo 1.",
        done: false,
    },
    {
        _id: "2",
        title: "Sample Todo 2",
        description: "This is a sample description for todo 2.",
        done: true,
    }
];

export default function TodoList({ todos = sampleTodos, onUpdate = () => {}, onDelete = () => {} }) {
    return (
        <ul>
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