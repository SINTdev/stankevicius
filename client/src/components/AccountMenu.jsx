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
        className={`tracking-tight hover:text-gray-500 transition-all duration-300 ease-in-out cursor-pointer text-lg my-3 w-1/3 flex justify-start ${
          data?.label === "Logout" ? "font-bold" : ""
        }`}
      >
        {data?.label}
      </div>
    );
  };

  return (
    <div className="absolute top-0 left-0 bg-white w-screen z-10 shadow-2xl">
      <div className="mt-[4.5rem]"></div>
      <div className="bg-[#F1F1F1] h-[6rem] flex items-center">
        <span className="ml-14 font-bold text-xl">
          {props?.session?.personal?.fullName}
        </span>
      </div>
      <div className="bg-white h-[10rem] w-full flex items-center justify-center">
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-start ml-14">
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
  );
};

export default AccountMenu;
