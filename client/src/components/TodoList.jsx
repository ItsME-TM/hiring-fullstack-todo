//Shows the list of todos
import TodoItem from "./TodoItem";
TodoList = [
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

]

const onUpdate = (updatedTodo) => {
    console.log("Update Todo:", updatedTodo);
}

const onDelete = (todoId) => {
    console.log("Delete Todo with ID:", todoId);
}

export default function TodoList() {
    return(
        <ul>
            {TodoList.map((todo) => (
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