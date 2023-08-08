import { Box, Paper, Typography } from "@mui/material";

export const About = () => {
  return (
    <>
      <Box sx={{ mx: "auto" }} maxWidth="md">
        <Paper elevation={1} sx={{ mt: "30vmin", p: 2 }}>
          <Typography variant="h6" color="text.secondary" align="left" gutterBottom>
            This app is built on React JS. For styling it uses Material UI and
            redux toolkit for state management. Data is persisted using redux in
            local stoarge.
          </Typography>
          <Typography variant="h6" color="text.secondary" align="left">
            Overall this was a really fun project and great learning experience.
          </Typography>
        </Paper>
      </Box>
    </>
  );
};
