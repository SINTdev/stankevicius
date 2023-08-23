import React, { useState } from "react";
import { Link } from "react-router-dom";

const AccountMenu = (props) => {
  const [menu, setMenu] = useState([
    {
      label: "Category Management",
      isLink: true,
      to: "/",
      onClick: null,
      is_staff: true,
      is_both: false,
    },
    {
      label: "User Management",
      isLink: true,
      to: "/",
      onClick: null,
      is_staff: true,
      is_both: false,
    },
    {
      label: "Credit Management",
      isLink: true,
      to: "/",
      onClick: null,
      is_staff: true,
      is_both: false,
    },
    {
      label: "Trade History",
      isLink: true,
      to: "/",
      onClick: null,
      is_staff: false,
      is_both: false,
    },
    {
      label: "Profile",
      isLink: true,
      to: "/",
      onClick: null,
      is_staff: true,
      is_both: true,
    },
    {
      label: "Credit",
      isLink: true,
      to: "/",
      onClick: null,
      is_staff: false,
      is_both: false,
    },
    {
      label: "Security",
      isLink: true,
      to: "/",
      onClick: null,
      is_staff: true,
      is_both: true,
    },
    {
      label: "Logout",
      isLink: false,
      to: "/",
      onClick: props?.logout,
      is_staff: true,
      is_both: true,
    },
  ]);

  const renderNavigation = (data, index) => {
    if (data?.isLink) {
      return (
        <Link
          key={index}
          to={data?.to}
          className={`tracking-tight hover:text-gray-500 transition-all duration-300 ease-in-out cursor-pointer text-lg my-3 w-1/3 flex justify-start ${
            data?.label === "Logout" ? "font-bold" : ""
          }`}
        >
          {data?.label}
        </Link>
      );
    }
    return (
      <div
        key={index}
        onClick={data?.onClick}
        className={`tracking-tight transition-all duration-300 ease-in-out cursor-pointer text-lg my-3 w-1/3 flex justify-start ${
          data?.label === "Logout" ? "text-sky-700 hover:text-sky-600" : "hover:text-gray-500"
        }`}
      >
        {data?.label}
      </div>
    );
  };

  return (
    <div className="absolute top-0 left-0 bg-white w-screen flex-col z-10 shadow-2xl flex">
      <div className="mt-[4.5rem]"></div>
      <div className="bg-[#F1F1F1] h-[6rem] flex items-center justify-center">
        <div className="max-w-screen-xl w-full flex flex-wrap items-center justify-between mx-auto p-4">
          <span className=" font-bold text-xl">
            {props?.session?.personal?.fullName}
          </span>
        </div>
      </div>
      <div className="bg-white min-h-[10rem] flex items-center justify-center">
        <div className="my-0 md:my-0 transition-all duration-300 ease-in-out w-full flex items-center justify-center">
          <div className="max-w-screen-xl md:items-center items-start mx-auto p-4 w-full flex flex-col md:flex-row flex-wrap justify-start ">
            {menu.map((one, index) => {
              if (
                one?.is_both ||
                (one?.is_staff && props?.session?.personal?.is_staff) ||
                (!one?.is_staff && !props?.session?.personal?.is_staff)
              ) {
                return renderNavigation(one, index);
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
