// src/components/Dashboard/Transactions.js
import React, { useState, useEffect } from 'react';
import { createTransaction, getTransactions } from '../../services/api';
import '../../styles/App.css';  // Go up two levels from Dashboard to styles

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [user_id, setUser_id] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const fetchTransactions = async () => {
    try {
      const data = await getTransactions();
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const transaction = { user_id, type, amount, description };
    try {
      await createTransaction(transaction);
      fetchTransactions(); // Refresh the transactions list
    } catch (error) {
      console.error('Error creating transaction:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user_id}
          onChange={(e) => setUser_id(e.target.value)}
          placeholder="User ID"
        />
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Type"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="submit">Add Transaction</button>
      </form>

      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.type} - ${transaction.amount}: {transaction.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;