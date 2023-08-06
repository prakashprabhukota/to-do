import { configureStore } from "@reduxjs/toolkit";
import addTodoReducer from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todo: addTodoReducer
  },
});
