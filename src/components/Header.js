// src/components/Header.js
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Return & Exchange
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
