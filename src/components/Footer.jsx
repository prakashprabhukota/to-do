import { Container, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          background: "hsl(0deg 0% 97.01%)",
          p: 2.5,
          marginTop: "1rem",
          bottom: 0,
          position: "fixed",
        }}
      >
        <Typography variant="body2" color="text.secondary" align="center">
          {"© Prakash Prabhu | "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </>
  );
};
