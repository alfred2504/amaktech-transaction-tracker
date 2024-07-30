// src/components/common/Button.js
import React from 'react';
import '../styles/App.css';  // Import CSS

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

export default Button;