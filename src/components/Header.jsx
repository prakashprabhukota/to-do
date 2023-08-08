import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => navigate("/")}
              sx={{ mr: 2 }}
            >
              <MenuBookRoundedIcon />
            </IconButton>
            <Button color="inherit" onClick={() => navigate("about")}>
              About
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
