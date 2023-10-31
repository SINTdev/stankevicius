import React from "react";
import { MenuRelatedLinkItem } from "../../CONSTANT";

export default function RelatedLinks(props) {
  return (
    <>
      <div className="py-3"></div>
      <span className="border-b-4 w-full mt-1 border-black block"></span>
      <div className="_font-bold text-lg tracking-tight mt-3 uppercase">
        Related Links
      </div>
      <div className="py-2"></div>
      <div className="flex flex-col space-y-2">
        {props?.data?.map((a, b) => {
          return <MenuRelatedLinkItem label={a?.label} to={a?.to} />;
        })}
      </div>
    </>
  );
}
