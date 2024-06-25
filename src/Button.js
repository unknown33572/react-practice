import React from 'react';

function Button({ className, label, onClick }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
