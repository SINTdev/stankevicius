import React from "react";

export default function InvoiceCard(props) {
  return (
    <div className="border border-black">
      <div className="px-1 py-1.5 bg-black text-white flex flex-row justify-between items-center">
        <span className="text-sm">Purchased credit: ${100}</span>
        <span className="text-xs">4/08/2023 09:12:02</span>
      </div>
      <div className="px-1 py-3 flex flex-row text-xs">
        <div className="w-1/2 flex flex-col">
          <span>FULL NAME:</span>
          <span>EMAIL:</span>
          <span>PHONE:</span>
          <span>COMPANY NAME:</span>
          <span>COMPANY URL:</span>
        </div>
        <div className="w-1/2 flex flex-col">
          <span>{props?.user?.fullName}</span>
          <span>{props?.user?.email}</span>
          <span>
            {props?.user?.countryCode}
            {props?.user?.phoneNumber}
          </span>
          <span>{props?.user?.companyName}</span>
          <span>{props?.user?.companyURL}</span>
        </div>
      </div>
    </div>
  );
}
