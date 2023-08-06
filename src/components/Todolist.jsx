import TodoItems from "./TodoItems";
import { useSelector } from "react-redux";

const Todolist = () => {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <>
      <h1>To Do List</h1>
      <ul>
        {todos.map((todo) => {
          return <TodoItems key={todo.id} {...todo} />;
        })}
      </ul>
    </>
  );
};

export default Todolist;
