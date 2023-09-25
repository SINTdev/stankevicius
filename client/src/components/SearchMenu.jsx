import React, { useState, useEffect } from "react";
import Home from "../views/Home";

export default function SearchMenu() {
  return (
    <div className="absolute top-0 left-0 bg-white w-screen h-screen z-10">
      <div className="mx-4 lg:mx-10 mt-24">
        <div className="max-w-screen-xl mx-auto p-0 md:p-4">
          <Home onlySearch={true} />
        </div>
      </div>
    </div>
  );
}
