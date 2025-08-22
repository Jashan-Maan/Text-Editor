import React from "react";

const Button = ({ func, children }) => {
  return (
    <button
      className="bg-emerald-500 text-white m-2 py-2 px-4 rounded-lg shadow-md hover:bg-emerald-700 transition duration-200"
      onClick={func}
    >
      {children}
    </button>
  );
};

export default Button;
