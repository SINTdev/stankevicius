import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { checkLoginFromNonLogin } from "../../CONSTANT";

export default function DashboardOptions({ name, menus }) {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (checkLoginFromNonLogin()) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div className="flex space-x-8">
        <h1 className="font-semibold tracking-tight text-[24px]">
          Hello {name}
        </h1>
      </div>
      <div className="flex flex-row space-x-8 my-5">
        {menus.map((menu) => {
          return (
            <Link
              to={menu?.to}
              className={`${
                location.pathname === menu?.to &&
                "bg-[#929292] pointer-events-none"
              } capitalize text-center font-medium bg-[#221f1f] text-white px-6 min-w-[8rem] py-1.5`}
            >
              {menu?.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}
