// src/components/Footer.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", py: 2, backgroundColor: "#f5f5f5" }}>
      <Typography variant="body2" color="textSecondary">
        © 2024 Your Company. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
