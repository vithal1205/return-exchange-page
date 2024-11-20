// src/api/itemsApi.js
import axios from "axios";

const BASE_URL = "https://api.example.com"; // Replace with actual API

export const fetchItems = async () => {
  const response = await axios.get(`${BASE_URL}/return-items`);
  return response.data;
};
