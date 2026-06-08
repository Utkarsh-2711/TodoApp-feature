// reducers
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: "abc", task: "demo-task", isDone: false }],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        //state ,action
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            };
            state.todos.push(newTodo); //direact mutatuion is possible in redux toolkit
        },
        deleteTodo: (state, action) => {
            // action.payload
            state.todos = state.todos.filter(
                (todo) => todo.id != action.payload,
            );
        },
        markAsDone: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);

            if (todo) {
                todo.isDone = true;
            }
        },
    },
});

// Redux Toolkit automatically generates action creators (fnxs that create action objects)
export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;
