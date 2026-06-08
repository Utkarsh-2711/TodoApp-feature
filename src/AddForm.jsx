import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./features/todo/todoSlice";

export default function AddFrom() {
    const [task, setTask] = useState("");

    const disptch = useDispatch();

    const submitHandler = (evt) => {
        evt.preventDefault();
        disptch(addTodo(task));
        setTask("");
    };
    return (
        <>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button>Add Task</button>
            </form>
        </>
    );
}
