import React from 'react';

// Defines the shape of data the Button needs
type ButtonProps = {
  label: string;        // Text shown on the button
  onClick: () => void;  // Function that runs when button is clicked
};

// A functional Button component
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
