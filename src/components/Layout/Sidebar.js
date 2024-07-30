// src/components/Layout/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/App.css';  // Go up two levels from Dashboard to styles

function Sidebar() {
  return (
    <nav>
      <ul>
        <li><Link to="/dashboard/transactions">Transactions</Link></li>
        <li><Link to="/dashboard/customers">Customers</Link></li>
        <li><Link to="/dashboard/vendors">Vendors</Link></li>
        <li><Link to="/dashboard/inventory">Inventory</Link></li>
        <li><Link to="/dashboard/reports">Reports</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;