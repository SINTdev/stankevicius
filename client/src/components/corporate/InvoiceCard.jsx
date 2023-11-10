import React from "react";

export default function InvoiceCard(props) {
  return (
    <div className="border border-black overflow-hidden">
      <div className="px-1 py-1.5 bg-black text-white flex flex-row justify-between items-center">
        <span className="text-sm">
          {props?.data?.mode === "credit"
            ? "Purchased credit"
            : "Published news"}
          : {props?.data?.mode === "credit" && "$"}
          {props?.data?.amount}
        </span>
        {/* <span className="text-xs">4/08/2023 09:12:02</span> */}
        <span className="text-xs">
          {new Date(props?.data?.timestamp)?.toLocaleString()}
        </span>
      </div>
      <div className="px-1 py-3 flex flex-row text-xs overflow-auto">
        <div className="w-1/2 flex flex-col">
          <span>FULL NAME:</span>
          <span>EMAIL:</span>
          <span>PHONE:</span>
          <span>COMPANY NAME:</span>
          <span>COMPANY URL:</span>
          <span>LAST LOGIN:</span>
          <span>ACCOUNT CREATED:</span>
          <span>CURRENT CREDIT:</span>
          <span>TOTAL SPENDING:</span>
        </div>
        <div className="w-1/2 flex flex-col">
          <span>{props?.data?.user?.fullName || "-"}</span>
          <span>{props?.data?.user?.email || "-"}</span>
          <span>
            {props?.data?.user?.countryCode}
            {props?.data?.user?.phoneNumber || "-"}
          </span>
          <span>{props?.data?.user?.companyName || "-"}</span>
          <span>{props?.data?.user?.companyURL || "-"}</span>
          <span>
            {props?.data?.user?.lastLogin &&
              new Date(props?.data?.user?.lastLogin)?.toLocaleString()}
            {!props?.data?.user?.lastLogin && "-"}
          </span>
          <span>
            {props?.data?.user?.timestamp &&
              new Date(props?.data?.user?.timestamp)?.toLocaleString()}
          </span>
          <span>{props?.data?.user?.credits || "0"}</span>
          <span>{`${props?.data?.user?.credits}$` || "0$"}</span>
        </div>
      </div>
    </div>
  );
}
