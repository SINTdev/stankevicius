import React from "react";

export default function UserCard(props) {
  return (
    <div className="border-2 border-black overflow-hidden">
      <div className="px-1 py-3 flex flex-row text-xs">
        <div className="w-1/2 flex flex-col">
          <span>FULL NAME:</span>
          <span>EMAIL:</span>
          <span>PHONE:</span>
          <span>COMPANY NAME:</span>
          <span>COMPANY URL:</span>
          <span>LAST LOGIN:</span>
          <span>ACCOUNT CREATED:</span>
          <span>ACTION:</span>
        </div>
        <div className="w-1/2 flex flex-col">
          <span>{props?.user?.fullName || "-"}</span>
          <span>{props?.user?.email || "-"}</span>
          <span>
            {props?.user?.countryCode}
            {props?.user?.phoneNumber || "-"}
          </span>
          <span>{props?.user?.companyName || "-"}</span>
          <span>{props?.user?.companyURL || "-"}</span>
          <span>
            {props?.user?.lastLogin &&
              new Date(props?.user?.lastLogin)?.toLocaleString()}
            {!props?.user?.lastLogin && "-"}
          </span>
          <span>
            {props?.user?.timestamp &&
              new Date(props?.user?.timestamp)?.toLocaleString()}
          </span>
          <span
            className="hover:text-gray-500 cursor-pointer"
            onClick={() => {
              props?.onDelete();
            }}
          >
            DELETE
          </span>
          {/* <span>{new Date(props?.user?.timestamp)?.toLocaleString()}</span> */}
        </div>
      </div>
    </div>
  );
}
