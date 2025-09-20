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
    <div
      className="w-full h-full
     flex flex-col lg:flex-row items-stretch justify-center gap-8 p-4 sm:p-6 lg:p-8 "
    >
      <div className="w-full lg:w-1/2">
        <InputForm
          input={input}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleFunction={handleFunction}
        />
      </div>
      <div className="w-full lg:w-px bg-gray-600">
        <hr className="block lg:hidden border-gray-600" />
      </div>

      <div className="w-full lg:w-1/2">
        <Summary input={input} />
      </div>
    </div>
  );
};

export default Editor;
