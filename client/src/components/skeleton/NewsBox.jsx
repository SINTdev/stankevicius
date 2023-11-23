import React from "react";

const NewsBox = ({ isPicture = false }) => {
  return (
    <div className="w-full">
      {isPicture && (
        <div class="animate-pulse flex items-center justify-center w-full max-w-[700px] h-[250px] bg-gray-300 rounded dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      )}
      <div className="w-full border transition-all bg-white py-3 px-5">
        {!isPicture && (
          <span class="animate-pulse mt-2 block w-20 h-3 bg-gray-200 rounded-full dark:bg-gray-700"></span>
        )}
        <span class="mt-5 mb-2 animate-pulse block w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700"></span>
        {!isPicture && (
          <span class="mt-2 mb-2 animate-pulse block w-1/2 h-6 bg-gray-200 rounded-full dark:bg-gray-700"></span>
        )}
        {isPicture && (
          <>
            <span class="animate-pulse mt-5 block w-full h-3 bg-gray-200 rounded-full dark:bg-gray-700"></span>
            <span class="animate-pulse mt-2 block w-1/3 h-3 bg-gray-200 rounded-full dark:bg-gray-700"></span>
          </>
        )}
        <div className="py-3"></div>
      </div>
    </div>
  );
};

export default NewsBox;
