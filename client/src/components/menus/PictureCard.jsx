import React from "react";
import { Link } from "react-router-dom";

export default function PictureCard({ item, index }) {
  return (
    <Link to={`/news/${item?.slug}`} index={index}>
      <div className="w-full border bg-white hover:border-black transition-all duration-300 ease-in-out border-[#c7c7c7]">
        <img src={item?.thumbnail_url} className="w-full max-h-[250px]" />
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
