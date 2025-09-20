import React from "react";
import Button from "./Button";
import { functionalities } from "../helper/logic";

const InputForm = ({ input, handleChange, handleSubmit, handleFunction }) => {
  return (
    <form
      className="flex h-full w-full flex-col items-center justify-start gap-4"
      onSubmit={handleSubmit}
    >
      <label
        className="text-2xl font-semibold sm:text-3xl"
        htmlFor="text-editor-textarea"
      >
        Enter your Text Here...
      </label>
      <textarea
        className="w-full flex-grow resize-none rounded-lg border border-slate-700 px-3 py-2 placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-emerald-500"
        name="text-editor"
        id="text-editor-textarea"
        value={input}
        onChange={handleChange}
        rows="10"
      />

      <div className="flex w-full flex-wrap justify-center gap-3">
        {functionalities.map((item) => (
          <Button key={item.title} func={() => handleFunction(item)}>
            {item.title}
          </Button>
        ))}
      </div>
    </form>
  );
};

export default InputForm;
