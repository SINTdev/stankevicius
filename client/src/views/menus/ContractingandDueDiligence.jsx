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

export default function ContractingandDueDiligence(props) {
  return (
    <div className="w-full flex flex-col space-y-8">
      <Fold className="">
        <Fold inside>
          <div className="flex flex-row w-full">
            <div className="w-2/12">
              <span className="sticky top-[7rem]">
                <span className="_font-bold text-lg">
                  Contracting and Due Diligence
                </span>
                <span className="border-b-2 w-full mt-1 border-black block"></span>
                <div className="mt-5 flex flex-col space-y-3 _font-bold text-base">
                  <MenuItem
                    label={"Business Audit"}
                    mode={props?.mode}
                    value={"business_audit"}
                  />{" "}
                  <MenuItem
                    label={"Business Counterparty Due Diligence"}
                    mode={props?.mode}
                    value={"counterparty_due_diligence"}
                  />{" "}
                  <MenuItem
                    label={"Professional Contracting"}
                    mode={props?.mode}
                    value={"professional_contracting"}
                  />
                </div>
              </span>
            </div>
            <div className="w-10/12">
              <div className="ml-20">{props.children}</div>
            </div>
          </div>
        </Fold>
      </Fold>
    </div>
  );
}