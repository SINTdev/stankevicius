import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const ProductCard = (props) => {
  return (
    <div className="max-h-[100px] inline-block w-fit md:w-full md:max-w-md border-2 border-[#6E6162] text-white flex-col">
      <div className="flex flex-row px-2 pr-1 py-1 justify-between w-full">
        <div className="md:w-4/6 w-3/6 uppercase flex items-center md:text-base text-[.8rem] _font-bold text-[#FFB769]">
          Sugar Icumsa 45
        </div>
        <div className="md:w-2/6 w-3/6 md:m-0 ml-3 flex flex-row justify-between">
          <div className="flex flex-col _font-bold uppercase md:text-xs text-[.6rem] leading-none justify-center">
            <span>Open: 17.9</span>
            <span>Exp: 17.9</span>
          </div>
          <div className="cursor-pointer text-[#FFB769] px-1 text-sm md:text-base justify-center items-center flex border-2 _font-bold uppercase border-[#FFB769]">
            SELL
          </div>
        </div>
      </div>
      <div className="text-xs flex flex-row bg-gradient-to-b from-green-900 via-green-700 to-green-500 px-2 py-0.5 justify-center items-center md:space-x-0 space-x-2">
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

const TIMEZONES = [
  {
    label: "HKT",
    name: "Asia/Hong_Kong",
  },
  {
    label: "EST",
    name: "America/New_York",
  },
  {
    label: "GST",
    name: "Asia/Dubai",
  },
];

export default function PromotionBar(props) {
  const formatTimeDate = (timeZone, label) => {
    let now = new Date(
      new Date().toLocaleString("en-US", {
        timeZone,
      })
    );
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    let formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    let monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let month = monthNames[now.getMonth()];
    let day = now.getDate();

    let formattedTimeDate = `${formattedHours}:${
      minutes < 10 ? "0" : ""
    }${minutes} ${ampm} ${label} ${month} ${day}`;

    return formattedTimeDate;
  };

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % 3);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${props?.className} max-h-[100px] h-full overflow-hidden w-full transition-all duration-300 ease-in-out`}
    >
      <div className="max-h-[100px] flex flex-row bg-black p-1">
        <div className="mr-1 border-2 px-2 border-[#6E6162] flex flex-col items-end justify-center bg-[#464646] text-white">
          <span className="text-2xl _font-bold">Stankevicius</span>
          {/* <span className="uppercase text-xs">11:03 am hkt sep 18</span> */}
          <span className="uppercase text-xs">
            {formatTimeDate(
              TIMEZONES[counter]?.name,
              TIMEZONES[counter]?.label
            )}
          </span>
          <span className="uppercase text-xs">trade quotes</span>
        </div>
        <div className="scrolling-container w-full">
          <div className="scrolling-content w-full space-x-0.5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}
