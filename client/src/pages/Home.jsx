// Ties everything together and serves as the landing page
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";

export default function Home() {
    return(
        <div>
            <TodoList />
            <TodoForm />
            <TodoItem />
        </div>
    );
}