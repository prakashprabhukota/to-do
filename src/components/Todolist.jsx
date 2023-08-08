import TodoItems from "./TodoItems";
import { useSelector } from "react-redux";
import { Container, List, Paper, Typography } from "@mui/material";

const Todolist = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <Container maxWidth="md" sx={{marginBottom: '5rem'}}>
        <Paper elevation={3}>
          {!todos.length ? (
            <Typography variant="body2" color="error" sx={{p: 3}}>
              No Data to display
            </Typography>
          ) : (
            <List>
              {todos.map((todo) => {
                return <TodoItems key={todo.id} {...todo} />;
              })}
            </List>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default Todolist;
