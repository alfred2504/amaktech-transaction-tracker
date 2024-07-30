// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';  // Import CSS

function Home() {
  return (
    <div>
      <h1>Welcome to AmakTech Transaction Tracker</h1>
      <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
    </div>
  );
}

export default Home;