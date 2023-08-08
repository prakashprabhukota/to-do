import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../features/todo/todoSlice";
import {
  Checkbox,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItems = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <>
      <ListItem>
        <Tooltip title="Mark as Completed">
          <ListItemIcon>
            <Checkbox
              icon={<CheckCircleIcon />}
              checked={completed}
              onChange={handleToggle}
            />
          </ListItemIcon>
        </Tooltip>
        <ListItemText primary={title} />

        <ListItemSecondaryAction>
          <Tooltip title="Delete">
            <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
};

export default TodoItems;
