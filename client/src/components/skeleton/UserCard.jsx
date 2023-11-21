import React from "react";

export default function UserCard(props) {
  return (
    <div className="border-2 border-black overflow-hidden animate-pulse">
      <div className="px-1 py-3 flex flex-row text-xs">
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
          <span>ACTION:</span>
        </div>
        <div className="w-1/2 flex flex-col">
          <span className="h-2 w-4/5 mb-2 bg-gray-300 rounded"></span>
          <span className="h-2 w-4/5 mb-2 bg-gray-300 rounded"></span>
          <span className="h-2 w-4/5 mb-2 bg-gray-300 rounded"></span>
          <span className="h-2 w-4/5 mb-2 bg-gray-300 rounded"></span>
          <span className="h-2 w-4/5 mb-2 bg-gray-300 rounded"></span>
          <span className="h-2 w-4/5 mb-2 bg-gray-300 rounded"></span>
          <span className="h-2 w-4/5 mb-2 bg-gray-300 rounded"></span>
          <span className="h-2 w-4/5 mb-2 bg-gray-300 rounded"></span>
          <span className="h-2 w-4/5 mb-2 bg-gray-300 rounded"></span>
          <span className="h-2 w-4/5 mb-2 bg-gray-300 rounded"></span>
        </div>
      </div>
    </div>
  );
}
