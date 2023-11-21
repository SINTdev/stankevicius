import React from "react";

const NewsCard = () => {
  return (
    <div className="group cursor-pointer flex flex-col md:flex-row justify-center items-center w-full border-b-2 border-gray-200 py-5 animate-pulse">
      <div className="mr-0 mb-2 md:mb-0">
        <div className="h-[10rem] bg-gray-300"></div>
      </div>
      <div className="w-full">
        <div className="flex flex-row justify-between items-end w-full">
          <span>
            <div className="bg-gray-300 w-[15rem] h-2 rounded animate-pulse"></div>
          </span>
          <span>
            <div className="bg-gray-300 w-[8rem] h-8 rounded animate-pulse"></div>
          </span>
        </div>
        <div className="group-hover:underline mt-2 _font-bold text-2xl tracking-normal w-[20rem] bg-gray-300 h-8 rounded animate-pulse"></div>
        <div className="bg-gray-300 w-full h-2 rounded animate-pulse mt-2"></div>
        <div className="bg-gray-300 w-full h-2 rounded animate-pulse my-2"></div>
        <div className="bg-gray-300 w-full h-2 rounded animate-pulse my-2"></div>
        <div className="bg-gray-300 w-full h-2 rounded animate-pulse my-2"></div>
        <div className="bg-gray-300 w-full h-2 rounded animate-pulse my-2"></div>
      </div>
    </div>
  );
};

export default NewsCard;
