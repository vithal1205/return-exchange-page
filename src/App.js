// src/App.js
import React from "react";
import { Container, Box } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReturnExchangePage from "./pages/ReturnExchangePage";

const App = () => {
  return (
    <Box>
      <Header />
      <Container sx={{ my: 4 }}>
        <ReturnExchangePage />
      </Container>
      <Footer />
    </Box>
  );
};

export default App;
