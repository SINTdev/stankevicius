import React from "react";
import { Link } from "react-router-dom";

export default function PictureCard(props) {
  return (
    <Link to="#">
      <div className="w-full border bg-white hover:border-black transition-all duration-300 ease-in-out border-[#c7c7c7]">
        <img
          src={props?.src}
          className="w-full max-h-[250px]"
        />
        <div className="py-2 px-3">
          <div className="mt-3 w-full text-left mb-2 md:pl-1 text-2xl _font-bold leading-tight tracking-tight text-black">
            Novartis in Society Integrated Report 2022
          </div>
          <div className="mt-3 w-full text-left mb-2 md:pl-1 tracking-normal text-base text-black">
            The Novartis in Society Integrated Report covers our business,
            strategy and performance. It highlights progress against our ESG
            targets and describes how we create value for diverse stakeholders.
          </div>
        </div>

        <div className="py-3"></div>
      </div>
    </Link>
  );
}
