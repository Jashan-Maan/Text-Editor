import React from "react";

const Button = ({ func, children }) => {
  return (
    <button
      className="transform rounded-lg bg-emerald-600 px-4 py-2 text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-emerald-700"
      onClick={func}
    >
      {children}
    </button>
  );
};

export default Button;
