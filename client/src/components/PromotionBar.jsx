import React from "react";

const ProductCard = (props) => {
  return (
    <div className="inline-block w-fit md:w-full md:max-w-md border-2 border-[#6E6162] text-white flex-col">
      <div className="flex flex-row px-2 pr-1 py-1 justify-between w-full">
        <div className="md:w-4/6 w-3/6 uppercase flex items-center md:text-xl text-base _font-bold text-[#FFB769]">Sugar Icumsa 45</div>
        <div className="md:w-2/6 w-3/6 md:m-0 ml-3 flex flex-row justify-between">
          <div className="flex flex-col _font-bold uppercase text-xs">
            <span>Open: 17.9</span>
            <span>Exp: 17.9</span>
          </div>
          <div className="text-[#FFB769] px-1 text-lg border-2 _font-bold uppercase border-[#FFB769]">SELL</div>
        </div>
      </div>
      <div className="flex flex-row bg-green-500 px-2 py-0.5 justify-center items-center md:space-x-0 space-x-2">
        <div className="w-1/2 flex flex-col">
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase">Quantity:</span>
            <span className="font-semibold">5000MT</span>
          </div>
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase">Delivery:</span>
            <span className="font-semibold">CIF sea</span>
          </div>
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase">Origin:</span>
            <span className="font-semibold">Brazil</span>
          </div>
        </div>

        <div className="w-1/2 flex flex-col">
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase">Contract:</span>
            <span className="font-semibold">1 year</span>
          </div>
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase">Payment:</span>
            <span className="font-semibold">LC</span>
          </div>
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase">Price:</span>
            <span className="font-semibold">450 USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PromotionBar(props) {
  return (
    <div
      className={`${props?.className} w-full transition-all duration-300 ease-in-out`}
    >
      <div className="flex flex-row bg-black p-1">
        <div className="mr-1 border-2 p-2 border-[#6E6162] flex flex-col items-end bg-[#464646] text-white">
          <span className="text-2xl _font-bold">Stankevicius</span>
          <span className="uppercase text-sm">11:03 am hkt sep 18</span>
          <span className="uppercase text-sm">trade quotes</span>
        </div>
        <marquee className="flex space-x-0.5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </marquee>
      </div>
    </div>
  );
}
