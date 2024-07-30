// src/components/Dashboard.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import Transactions from './Dashboard/Transactions';
import Customers from './Dashboard/Customers';
import Vendors from './Dashboard/Vendors';
import Inventory from './Dashboard/Inventory';
import Reports from './Dashboard/Reports';

function Dashboard() {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <Routes>
          <Route path="transactions" element={<Transactions />} />
          <Route path="customers" element={<Customers />} />
          <Route path="vendors" element={<Vendors />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="reports" element={<Reports />} />
        </Routes>
      </main>
    </div>
  );
}

export default Dashboard;
