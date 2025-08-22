import React, { useState } from "react";
import InputForm from "./InputForm";
import Summary from "./Summary";

const Editor = () => {
  const [input, setInput] = useState("");

  let handleFunction = (item) => {
    setInput(item.func(input));
  };
  let handleSubmit = (e) => {
    e.preventDefault();
  };
  let handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="w-full h-full flex justify-center items-center gap-4 flex-wrap overflow-hidden">
      <InputForm
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleFunction={handleFunction}
      />
      <div className="h-11/12 border-r-2 border-gray-300"></div>
      <Summary input={input} />
    </div>
  );
};

export default Editor;
