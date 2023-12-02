import React from "react";
import { Link } from "react-router-dom";

export default function PictureCard({
  item,
  index,
  onClick,
  nopicture = false,
}) {
  return (
    <Link
      className=""
      target={item?.external && "_blank"}
      to={item?.to}
      onClick={onClick}
      index={index}
    >
      <div className="w-full h-full sm:w-2/3 md:w-full lg:w-full xl:w-full mx-auto border bg-white cursor-pointer hover:border-black max-w-[700px] transition-all duration-300 ease-in-out border-[#c7c7c7]">
        {!nopicture && (
          <div className="relative overflow-hidden">
            <img
              src={item?.thumbnail_url}
              className="absolute blur-lg z-0 w-full max-h-[250px]"
            />
            <img
              src={item?.thumbnail_url}
              className="object-contain relative w-full max-h-[250px]"
            />
          </div>
        )}
        <div className="py-2 px-3">
          <div className="mt-3 w-full text-left mb-2 md:pl-1 text-2xl _font-bold leading-tight tracking-tight text-black">
            {item?.title}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: item?.content }}
            className="mt-3 w-full line-clamp-3 text-left mb-2 md:pl-1 tracking-normal text-base text-black"
          ></div>
        </div>

        <div className="py-3"></div>
      </div>
    </Link>
  );
}
