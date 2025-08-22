import React from "react";

const Summary = ({ input }) => {
  let wordCount = input.split(/\s+/).filter((word) => word.length > 0).length;
  return (
    <div className="w-2/5 h-full flex flex-col  mt-1 items-center justify-start gap-4 py-8 px-4">
      <h2 className="text-3xl font-semibold">Summary</h2>
      <p className="w-full wrap-break-word h-3/5 text-base p-4">{input}</p>
      <div className="text-xl font-serif flex justify-between items-center gap-4 flex-wrap w-3/5">
        <p>Character Count: {input.length}</p>
        <p>Word Count: {wordCount}</p>
        <p>Time to read: {Math.ceil(wordCount / 200)}</p>
      </div>
    </div>
  );
};

export default Summary;
