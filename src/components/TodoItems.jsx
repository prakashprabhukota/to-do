import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../features/todo/todoSlice";

const TodoItems = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({id}))
  }

  return (
    <li>
      <div>
        <span>
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={handleToggle}
          />
          {title}
        </span>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItems;
