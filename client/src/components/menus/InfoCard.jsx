import React from "react";
import { Link } from "react-router-dom";

export default function InfoCard({ item, index, nodate }) {
  const formatDate = (date) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(date).toLocaleDateString("en-GB", options);
  };

  return (
    <Link to={`/news/${item?.slug}`} index={index}>
      <div className="w-full border transition-all duration-300 ease-in-out bg-white hover:border-black border-[#c7c7c7] py-3 px-5">
        {!nodate && (
          <div className="flex justify-between text-sm">
            <span className="tracking-tight">
              {formatDate(item?.timestamp)}
            </span>
            <span className="tracking-tight"></span>
          </div>
        )}
        <div
          className={`${
            !nodate ? "line-clamp-5" : "line-clamp-2"
          } mt-3 w-full text-left mb-2 text-2xl _font-bold leading-tight tracking-tight text-black`}
        >
          {item?.title}
        </div>
        {nodate && (
          <div
            dangerouslySetInnerHTML={{ __html: item?.content }}
            className={`mt-3 leading-6 tracking-normal text-base text-black`}
          ></div>
        )}
        <div className="py-3"></div>
      </div>
    </Link>
  );
}
