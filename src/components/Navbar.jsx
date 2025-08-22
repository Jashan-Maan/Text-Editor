import React from "react";
import DarkModeToggler from "./DarkModeToggler";

const Navbar = ({ toggleDarkMode, mode }) => {
  return (
    <>
      <div className="flex justify-between items-center w-full bg-linear-to-bl from-violet-500 to-fuchsia-500 py-4 pl-6 pr-3">
        <a className="text-white flex justify-start items-center text-2xl cursor-pointer gap-2 font-bold font-[cursive]">
          <img src="text-editor.svg" className="h-8 " />
          Text-Editor
        </a>
        <DarkModeToggler toggleDarkMode={toggleDarkMode} mode={mode} />
      </div>
    </>
  );
};

export default Navbar;
