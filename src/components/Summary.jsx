import React from "react";

const Summary = ({ input }) => {
  const wordCount = input.split(/\s+/).filter((word) => word.length > 0).length;

  const readingTime = wordCount > 0 ? Math.ceil(wordCount / 200) : 0;

  return (
    <div className="flex h-full w-full flex-col items-center justify-start gap-4">
      <h2 className="text-2xl font-semibold sm:text-3xl">Summary</h2>
      <div className="w-full flex-grow rounded-lg border border-slate-700 p-3 shadow-inner">
        <p
          id="scroll-bar"
          className="h-full w-full overflow-y-auto whitespace-pre-wrap break-words "
        >
          {input.length > 0 ? input : "Your text preview will appear here..."}
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-3 text-center sm:grid-cols-3">
        <div className="rounded-md  p-3">
          <p className="text-lg font-semibold">{input.length}</p>
          <p className="text-sm ">Characters</p>
        </div>
        <div className="rounded-md  p-3">
          <p className="text-lg font-semibold">{wordCount}</p>
          <p className="text-sm ">Words</p>
        </div>
        <div className="rounded-md  p-3">
          <p className="text-lg font-semibold">{readingTime}</p>
          <p className="text-sm">Minutes to read</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
