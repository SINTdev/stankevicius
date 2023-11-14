import React from "react";

export default function ProductCard() {
  return (
    <div class="animate-pulse">
      <div class="flex flex-wrap">
        <div class="w-full flex-grow lg:w-1/2 px-4 py-4 border-l-8 relative border-l-gray-200">
          <div class="absolute w-[100%] h-[1px] bg-gray-300 -bottom-[0px] left-0 hidden lg:block"></div>
          <p class="text-xs mb-2 lg:mb-0 lg:float-right">
            <span class="uppercase _font-bold mr-1">opened on</span>
            <span class="inline-block w-20 h-2 ml-1 mr-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
            <span class="uppercase _font-bold ml-3 mr-1">Expiring on</span>
            <span class="inline-block w-20 h-2 ml-1 mr-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
          </p>
          <div class="mb-5">
            <div class="h-4 bg-gray-300 rounded-full dark:bg-gray-600 w-32 mb-2.5"></div>
            <span class="inline-block w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></span>
          </div>
          <div class="flex justify-between items-center">
            <span class="inline-block w-20 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></span>
            <div class="relative">
              <button class="min-h-[40px] flex flex-row items-center justify-center text-[16px] uppercase font-semibold bg-gray-300 text-white min-w-[8rem] py-2 animate-pulse"></button>
              <div class="absolute opacity-100 z-20 animate-pulse"></div>
            </div>
          </div>
          <p class="mt-[4px] uppercase text-[.65rem] font-medium text-black lg:text-right h-[4px] animate-pulse"></p>
        </div>

        <div class="w-full flex-grow lg:w-1/2 border-l-8 pt-6 pb-4 lg:py-4 mb-[1.7px] lg:mb-0 relative border-l-red-500 lg:border lg:border-gray-300 px-4 flex flex-col justify-between">
          <div class="absolute w-[99%] h-[1px] bg-gray-300 -bottom-[2px] left-1 lg:hidden animate-pulse"></div>
          <div class="text-[14px] flex flex-wrap tracking-tight animate-pulse">
            <div class="mr-2">
              <span class="capitalize _font-bold mr-1">Quantity:</span>
              <span class="inline-block w-20 h-2 ml-1 mr-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
            </div>
            <div class="mr-2">
              <span class="capitalize _font-bold mr-1">Contract:</span>
              <span class="inline-block w-20 h-2 ml-1 mr-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
            </div>
            <div class="mr-2">
              <span class="capitalize _font-bold mr-1">Delivery:</span>
              <span class="inline-block w-20 h-2 ml-1 mr-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
            </div>
            <div class="mr-2">
              <span class="capitalize _font-bold mr-1">Payment:</span>
              <span class="inline-block w-20 h-2 ml-1 mr-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
            </div>
            <div class="mr-2">
              <span class="capitalize _font-bold mr-1">Origin:</span>
              <span class="inline-block w-20 h-2 ml-1 mr-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
            </div>
            <div class="mr-2">
              <span class="capitalize _font-bold mr-1">Price:</span>
              <span class="inline-block w-20 h-2 ml-1 mr-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
