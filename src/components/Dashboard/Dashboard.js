// src/components/Dashboard/Dashboard.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';
import Transactions from './Transactions';
import Customers from './Customers';
import Vendors from './Vendors';
import Inventory from './Inventory';
import Reports from './Reports';
import './Dashboard.css';  // Optional: Import specific styles for Dashboard

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      <main className="dashboard-main">
        <Routes>
          <Route path="transactions" element={<Transactions />} />
          <Route path="customers" element={<Customers />} />
          <Route path="vendors" element={<Vendors />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="reports" element={<Reports />} />
          {/* Add a default route if needed */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default Dashboard;