// Ties everything together and serves as the landing page
import Todo from "../../../server/src/models/Todo";
import TodoList from "../components/TodoList";

export default function Home() {
    return(
        <TodoList />
    );
}