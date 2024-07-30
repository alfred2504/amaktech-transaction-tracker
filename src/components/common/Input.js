// src/components/common/Input.js
import React from 'react';
import '../styles/App.css';  // Import CSS

function Input({ type, value, onChange, placeholder }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;