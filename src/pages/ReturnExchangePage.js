// src/pages/ReturnExchangePage.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dummyItems } from "../dummyData";

import { fetchItems } from "../api/itemsApi";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import ReturnForm from "../components/ReturnForm";

const ReturnExchangePage = () => {
  const items = useSelector((state) => state.data.items);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch dummy data
    dispatch({ type: "SET_ITEMS", payload: dummyItems });
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Return & Exchange
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Reason</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.reason}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>
                <Button variant="contained">View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ReturnForm />
    </Container>
  );
};

export default ReturnExchangePage;
