import React from "react";
import Fold from "../../components/menus/Fold";
import { Link } from "react-router-dom";

const MenuItem = ({ label, value, mode }) => {
  return (
    <Link
      to={`/menu/${value}`}
      className={`cursor-pointer px-5 py-2 border-l-2 hover:bg-[#F1F1F1] hover:border-l-[#221f1f] ${
        value === mode
          ? "bg-[#F1F1F1] border-l-[#221f1f]"
          : "border-l-transparent"
      }`}
    >
      {label}
    </Link>
  );
};

export default function InternationalTradeConsulting(props) {
  return (
    <div className="w-full flex flex-col space-y-8">
      <Fold className="">
        <Fold inside>
          <div className="flex flex-row w-full">
            <div className="w-2/7">
              <span className="_font-bold text-lg">
                International Trade Consulting
              </span>
              <span className="border-b-2 w-full mt-1 border-black block"></span>
              <div className="mt-5 flex flex-col space-y-3 pl-5 _font-bold text-base">
                <MenuItem
                  label={"Sourcing and Procurement"}
                  mode={props?.mode}
                  value={"sourcing_procurement"}
                />{" "}
                <MenuItem
                  label={"Production and Manufacturing"}
                  mode={props?.mode}
                  value={"production_manufacturing"}
                />{" "}
                <MenuItem
                  label={"Shipping and Logistics"}
                  mode={props?.mode}
                  value={"shipping_logistics"}
                />
                <MenuItem
                  label={"Inspection and Quality Checks"}
                  mode={props?.mode}
                  value={"inspection_quality"}
                />
              </div>
            </div>
            <div className="w-4/5">
              <div className="ml-20">{props.children}</div>
            </div>
          </div>
        </Fold>
      </Fold>
    </div>
  );
}
