import React, { useState, useEffect } from "react";
import Home from "../views/Home";

export default function SearchMenu({ isSearchOpen, setIsSearchOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 bg-white w-screen ${
        isSearchOpen ? "h-screen" : "h-0"
      } transition-all ease-in-out z-10 duration-300 overflow-scroll`}
    >
      {isSearchOpen && (
        <div className="mx-4 lg:mx-10 mt-24">
          <div className="max-w-screen-xl mx-auto p-0 md:p-4">
            <Home onlySearch={true} setIsSearchOpen={setIsSearchOpen}/>
          </div>
        </div>
      )}
    </div>
  );
}
