import React, { useEffect, useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  CORPORATE_DASHBOARD_MENU,
  USER_DASHBOARD_MENU,
  checkLoginFromNonLogin,
} from "../../CONSTANT";
import UserData from "../../contexts/UserData";

export default function DashboardOptions({ name }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { session, configureModal, globalModals } = useContext(UserData);

  useEffect(() => {
    if (checkLoginFromNonLogin()) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (session.isLoaded && session.isLoggedIn) {
      setMenus(
        !session?.personal?.is_staff
          ? USER_DASHBOARD_MENU
          : CORPORATE_DASHBOARD_MENU
      );
    }
  }, [session]);

  const [menus, setMenus] = useState([]);

  return (
    <>
      <div className="flex space-x-8">
        <h1 className="font-semibold tracking-tight text-[24px]">
          {!session?.personal?.is_staff
            ? `User Dashboard`
            : "Corporate Dashboard"}
        </h1>
      </div>
      <div className="flex flex-row space-x-8 my-5 overflow-auto">
        {menus.map((menu) => {
          if (!menu?.isLink) {
            return (
              <span
                onClick={() => {
                  configureModal(menu?.to);
                }}
                className={`${
                  globalModals[menu?.to] && "bg-[#929292] pointer-events-none"
                } capitalize cursor-pointer whitespace-nowrap w-fit text-center font-medium bg-[#221f1f] text-white px-6 py-1.5`}
              >
                {menu?.label}
              </span>
            );
          }
          return (
            <Link
              to={menu?.to}
              className={`${
                (location.pathname === menu?.to ||
                  (menu?.label === "News" &&
                    location.pathname === "/publishNewRelease")) &&
                !globalModals?.category &&
                !globalModals?.profile &&
                !globalModals?.security &&
                "bg-[#929292] pointer-events-none"
              } capitalize text-center whitespace-nowrap w-fit font-medium bg-[#221f1f] text-white px-6 py-1.5`}
              // min-w-[8rem]
            >
              {menu?.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}
