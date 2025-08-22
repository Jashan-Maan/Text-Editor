import React from "react";
import Button from "./Button";
import { functionalities } from "../helper/logic";

const InputForm = ({ input, handleChange, handleSubmit, handleFunction }) => {
  return (
    <>
      <form
        className="flex flex-col  mt-1 items-center justify-start w-2/4 h-full gap-4 py-8 px-4 border-r-2 border-gray-300"
        onSubmit={handleSubmit}
      >
        <label className="text-3xl font-semibold" htmlFor="text-editor">
          Enter your Text Here..
        </label>
        <textarea
          className="w-full resize-none h-3/5 outline-none p-2 border border-gray-300 rounded-2xl shadow shadow-gray-500 focus:outline-none focus:ring-2 focus:border-emerald-500"
          name="text-editor"
          id="text-editor"
          value={input}
          onChange={handleChange}
        ></textarea>
        <div className="w-4/5 flex flex-wrap justify-between mt-5 items-center ">
          {functionalities.map((item) => (
            <Button key={item.title} func={() => handleFunction(item)}>
              {item.title}
            </Button>
          ))}
        </div>
      </form>
    </>
  );
};

export default InputForm;
