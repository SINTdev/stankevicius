import React, { useState } from "react";
function Tooltip({ text }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative flex justify-center items-center">
      <span
        // onMouseEnter={() => setShowTooltip(true)}
        // onMouseLeave={() => setShowTooltip(false)}
        // onClick={() => setShowTooltip(!showTooltip)}
        data-tooltip-id="my-tooltip"
        data-tooltip-content={text}
        className="cursor-pointer ml-1 flex justify-center items-center"
      >
        <span className="relative inline-block">
          <span className="rounded-full bg-gray-500 text-center text-white text-xs w-4 h-4 flex items-center justify-center">
            ?
          </span>
        </span>
      </span>
      {showTooltip && (
        <div className="absolute z-10 md:right-0 md:bottom-6 bg-white text-black whitespace-pre-line p-2 rounded-none w-[20rem] shadow-md">
          {text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
