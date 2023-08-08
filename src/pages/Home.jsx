import { NewTodoForm } from "../components/NewTodoForm";
import Todolist from "../components/Todolist";

export const Home = () => {
  return (
    <>
      <NewTodoForm />
      <Todolist />
    </>
  );
};
