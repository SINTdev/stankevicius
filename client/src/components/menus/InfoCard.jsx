import React from "react";
import { Link } from "react-router-dom";

export default function InfoCard(props) {
  return (
    <Link to="#">
      <div className="w-full border transition-all duration-300 ease-in-out bg-white hover:border-black border-[#c7c7c7] py-3 px-5">
        {!props?.nodate && (
          <div className="flex justify-between text-sm">
            <span className="tracking-tight">Oct 23, 2034</span>
            <span className="tracking-tight">Media Release</span>
          </div>
        )}
        <div
          className={`${
            !props?.nodate ? "line-clamp-5" : "line-clamp-2"
          } mt-3 w-full text-left mb-2 text-2xl _font-bold leading-tight tracking-tight text-black`}
        >
          Novartis delivers 12% sales and 21% core operating income growth from
          continuing operations (in cc¹). Executes Sandoz spin-off, achieves
          important innovation milestones, and raises FY 2023 guidance
        </div>
        {props?.nodate && (
          <div className="mt-3 w-full text-left mb-2 md:pl-1 tracking-normal text-base text-black">
            The Novartis in Society Integrated Report covers our business,
            strategy and performance. It highlights progress against our ESG
            targets and describes how we create value for diverse stakeholders.
          </div>
        )}
        <div className="py-3"></div>
      </div>
    </Link>
  );
}
