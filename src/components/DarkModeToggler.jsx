import React from "react";

const DarkModeToggler = ({ toggleDarkMode, mode }) => {
  return (
    <>
      <button
        className="p-2 text-2xl text-white transition-all duration-300  hover:scale-125"
        onClick={toggleDarkMode}
      >
        {mode ? (
          <i className="ri-sun-fill text-white"></i>
        ) : (
          <i className="ri-moon-fill text-black"></i>
        )}
      </button>
    </>
  );
};

export default DarkModeToggler;
