// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3001';

// Register user
export const registerUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/register`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Login user
export const loginUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/login`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Create transaction
export const createTransaction = async (transaction) => {
  try {
    const response = await axios.post(`${API_URL}/transactions`, transaction);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get all transactions
export const getTransactions = async () => {
  try {
    const response = await axios.get(`${API_URL}/transactions`);
    return response.data;
  } catch (error) {
    throw error;
  }
};