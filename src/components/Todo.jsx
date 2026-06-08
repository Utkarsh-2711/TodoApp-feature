import { useSelector } from "react-redux";
import AddFrom from "../AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);

    const disptch = useDispatch();

    const clickDelete = (id) => {
        disptch(deleteTodo(id));
    };

    const clickDone = (id) => {
        disptch(markAsDone(id));
    };
    return (
        <>
            <h1>Todos List App</h1>
            <AddFrom />
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            textDecoration: todo.isDone
                                ? "line-through"
                                : "none",
                            opacity: todo.isDone ? 0.6 : 1,
                        }}>
                        {todo.task}{" "}
                        <button onClick={() => clickDelete(todo.id)}>
                            Delete
                        </button>
                        &nbsp;
                        <button
                            onClick={() => clickDone(todo.id)}
                            disabled={todo.isDone}>
                            {todo.isDone ? "Done" : "Mark Done"}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
