import React, { useState } from "react";
import { Link } from "react-router-dom";

const AccountMenu = (props) => {
  const [menu, setMenu] = useState([
    {
      label: "Dashboard",
      isLink: true,
      to: `/${props?.session?.personal?.is_staff ? "corporate" : "client"}`,
      onClick: null,
      is_staff: true,
      is_both: true,
    },
    {
      label: "Add New Trade",
      isLink: true,
      to: `/addProduct`,
      onClick: null,
      is_staff: true,
      is_both: true,
    },
    {
      label: "Category Management",
      isLink: false,
      to: "/",
      onClick: () => {
        props?.setter("category");
        props?.setIsAccountMenuOpen(false);
      },
      is_staff: true,
      is_both: false,
    },
    {
      label: "User Management",
      isLink: true,
      to: "/corporate/user",
      onClick: null,
      is_staff: true,
      is_both: false,
    },
    {
      label: "Credit Management",
      isLink: true,
      to: "/corporate/credit",
      onClick: null,
      is_staff: true,
      is_both: false,
    },
    {
      label: "Trade History",
      isLink: true,
      to: "/client",
      onClick: null,
      is_staff: false,
      is_both: false,
    },
    {
      label: "Profile",
      isLink: false,
      to: "/",
      onClick: () => {
        props?.setter("profile");
        props?.setIsAccountMenuOpen(false);
      },
      is_staff: true,
      is_both: true,
    },
    {
      label: "Credit",
      isLink: true,
      to: "/client/credit",
      onClick: null,
      is_staff: false,
      is_both: false,
    },
    {
      label: "Security",
      isLink: false,
      to: "/",
      onClick: () => {
        props?.setter("security");
        props?.setIsAccountMenuOpen(false);
      },
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
          className={`tracking-tight hover:underline transition-all duration-300 ease-in-out cursor-pointer text-lg my-3 w-full md:w-1/3 flex justify-start ${
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
        className={`tracking-tight transition-all duration-300 ease-in-out cursor-pointer text-lg my-3 w-full md:w-1/3 flex justify-start ${
          data?.label === "Logout"
            ? "text-sky-700 hover:underline"
            : "hover:underline"
        }`}
      >
        {data?.label}
      </div>
    );
  };

  return (
    <div className="fixed top-0 right-0 md:right-[15%] bg-white w-screen md:w-[50%] flex-col z-10 shadow-2xl flex">
      <div
        className="fixed inset-0"
        onClick={() => {
          props?.setIsAccountMenuOpen(false);
        }}
      ></div>
      <div className="z-10">
        <div className="mt-[4.5rem]"></div>
        <div className="bg-[#F1F1F1] h-[6rem] flex items-center justify-center">
          <div className="max-w-screen-xl w-full flex flex-wrap items-center justify-between mx-auto p-4 pl-10">
            <span className="font-bold text-xl">
              {props?.session?.personal?.fullName}
            </span>
          </div>
        </div>
        <div className="bg-white min-h-[10rem] flex items-center justify-center">
          <div className="my-0 md:my-0 transition-all duration-300 ease-in-out w-full flex items-center justify-center">
            <div className="max-w-screen-xl md:items-center items-start mx-auto p-4 pl-10 w-full flex flex-col md:flex-row flex-wrap justify-start ">
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
    </div>
  );
};

export default AccountMenu;
