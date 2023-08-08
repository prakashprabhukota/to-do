import { createSlice } from "@reduxjs/toolkit";

const getId = () => crypto.randomUUID();
const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: getId(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      const removeItem = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      state.todos = removeItem;
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
