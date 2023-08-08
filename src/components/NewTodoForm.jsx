import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { Button, Container, Grid, Paper, TextField } from "@mui/material";

export function NewTodoForm() {
  const [newItem, setNewItem] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title: newItem }));
    setNewItem("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Paper elevation={0}>
        <Container
          maxWidth="sm"
          sx={{
            marginBlock: "1rem",
            padding: "1rem",
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Add a To do"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                required
                helperText="What's your plan"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Button
                type="submit"
                style={{ margin: "1rem" }}
                variant="contained"
                color="primary"
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </form>
  );
}
