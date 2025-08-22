import React, { useState } from "react";
import Navbar from "./Navbar";
import Editor from "./Editor";

const TextEditor = () => {
  const [darkMode, setDarkMode] = useState(false);

  let toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  let styles = darkMode ? "bg-black text-white" : "bg-white text-black";
  return (
    <>
      <div
        className={`w-full h-screen ${styles}  flex flex-col justify-start items-center overflow-auto`}
      >
        <Navbar toggleDarkMode={toggleDarkMode} mode={darkMode} />
        <Editor />
      </div>
    </>
  );
};

export default TextEditor;
