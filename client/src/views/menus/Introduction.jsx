import React from "react";
import Fold from "../../components/menus/Fold";

const GrayCards = () => {
  return (
    <div className="select-none cursor-pointer bg-[#F1F1F1] py-8 px-5 flex flex-col">
      <div className="w-full text-left font-extralight text-7xl leading-tight text-[#0460a9]">
        10.0 bn
      </div>
      <div className="mt-3 w-full text-left mb-2 text-2xl _font-bold leading-tight tracking-tight text-black">
        Invested in research & development (USD)
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        (vs. USD 9.5 bn in 2021)
      </div>
      <div className="py-3"></div>
    </div>
  );
};

export default function Introduction() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full flex-row whitespace-nowrap">
        <div className="m-0 w-full text-left text-7xl _font-bold leading-tight tracking-tight text-black">
          2022 at a glance
        </div>
        <span className="flex items-center">
          <button
            onClick={null}
            className="transition-all duration-300 ease-in-out cursor-pointer w-fit text-black border border-black hover:bg-black hover:text-white bg-transparent text-lg px-8 py-1.5 font-bold text-center"
          >
            See all highlights
          </button>
        </span>
      </div>
      <div className="py-3"></div>
      <div className="grid grid-cols-2 gap-4">
        <GrayCards />
        <GrayCards />
        <GrayCards />
        <GrayCards />
      </div>
      <div className="py-4"></div>
      <Fold className="bg-[#F1F1F1] py-8 px-10">
        <Fold inside>
          <div className="py-10 flex flex-col space-y-5">
            <div className="m-0 w-full text-left text-7xl _font-bold leading-tight tracking-tight text-black">
              Who we are
            </div>
            <div className="mt-3 w-full text-left mb-2 text-2xl _font-bold leading-tight tracking-tight text-black">
              Novartis is one of the world’s leading medicines companies. We use
              innovative science and technology to address some of society’s
              most challenging healthcare issues.
            </div>
            <button
              onClick={null}
              className="transition-all duration-300 ease-in-out cursor-pointer w-fit text-black border border-black hover:bg-black hover:text-white bg-transparent text-lg px-8 py-1.5 font-bold text-center"
            >
              Learn more
            </button>
          </div>
        </Fold>
      </Fold>
      <div className="py-4"></div>
      <Fold className="bg-white">
        <Fold inside className="bg-[#F1F1F1] py-8 px-10">
          <div className="flex flex-col">
            <div className="w-full text-left text-3xl _font-bold leading-tight tracking-tight text-black">
              Performance indicators 2022
            </div>
            <div className="mt-1 w-full text-left mb-2 text-xl leading-tight tracking-tight text-black">
              Access the full list of performance indicators in the Novartis in
              Society Integrated Report.
            </div>
            <div className="py-3"></div>
            <button
              onClick={null}
              className="transition-all duration-300 ease-in-out cursor-pointer w-fit text-black border-2 border-black hover:bg-black hover:text-white bg-transparent text-sm px-8 font-bold py-2.5 text-center"
            >
              View data
            </button>
          </div>
        </Fold>
      </Fold>
    </div>
  );
}
