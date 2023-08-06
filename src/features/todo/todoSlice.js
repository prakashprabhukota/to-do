import { createSlice } from "@reduxjs/toolkit";

const getId = () => crypto.randomUUID();
const localStorageTodos = JSON.parse(localStorage.getItem("todoList"));
if (!localStorageTodos) {
  const initalTodos = {
    todos: [
      {
        id: getId(),
        text: "Complete online JavaScript course",
        completed: true,
      },
      {
        id: getId(),
        text: "Jog around the park 3x",
        completed: false,
      },
    ],
  };
  localStorage.setItem("todoList", JSON.stringify(initalTodos));
}

const initialState =
  JSON.parse(localStorage.getItem("todoList")) !== null
    ? JSON.parse(localStorage.getItem("todoList"))
    : { todos: [] };

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
      localStorage.setItem("todoList", JSON.stringify(state));
    },
    toggleComplete: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].completed = action.payload.completed;
      localStorage.setItem("todoList", JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("todoList", JSON.stringify(state));
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
