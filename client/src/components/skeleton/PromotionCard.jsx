import React from "react";

const PromotionCard = () => {
  return (
    <div className="animate-pulse mr-0.5 h-[92px] inline-block min-w-[25rem] w-full border-2 border-gray-300 text-gray-300 flex-col">
      <div className="flex flex-row px-2 pr-1 py-1 justify-between w-full h-[28px]">
        <div className="w-3/6 uppercase flex items-center text-[calc(1rem-2px)] _font-bold text-gray-300 backface-visibility-visible">
          Loading...
        </div>
        <div className="w-3/6 md:m-0 ml-3 flex flex-row justify-between">
          <div className="flex flex-col _font-bold uppercase text-[0.6rem] leading-none justify-center">
            <span>Open: Loading...</span>
            <span>Exp: Loading...</span>
          </div>
          <button className="transition-all duration-300 ease-in-out text-[calc(1rem-2px)] hover:text-black hover:bg-gray-300 cursor-pointer text-gray-300 px-1 justify-center items-center flex border-2 _font-bold uppercase border-gray-300">
            Loading...
          </button>
        </div>
      </div>
      <div className="text-[0.78rem] flex flex-row bg-gray-900 px-2 py-0.5 h-[60px] items-center justify-center">
        <div className="w-1/2 flex flex-col">
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase backface-visibility-visible">
              Quantity:
            </span>
            <span className="font-medium tracking-tight backface-visibility-visible">
              Loading...
            </span>
          </div>
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase backface-visibility-visible">
              Delivery:
            </span>
            <span className="font-medium tracking-tight backface-visibility-visible">
              Loading...
            </span>
          </div>
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase backface-visibility-visible">
              Origin:
            </span>
            <span className="font-medium tracking-tight backface-visibility-visible">
              Loading...
            </span>
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase backface-visibility-visible">
              Contract:
            </span>
            <span className="font-medium tracking-tight backface-visibility-visible">
              Loading...
            </span>
          </div>
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase backface-visibility-visible">
              Payment:
            </span>
            <span className="font-medium tracking-tight backface-visibility-visible">
              Loading...
            </span>
          </div>
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase backface-visibility-visible">
              Price:
            </span>
            <span className="font-medium tracking-tight backface-visibility-visible">
              Loading...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;
