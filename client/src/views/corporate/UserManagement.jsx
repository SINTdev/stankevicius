import React, { useContext, useState } from "react";
import DashboardOptions from "../../components/client/DashboardOptions";
import InvoiceCard from "../../components/corporate/InvoiceCard";
import UserData from "../../contexts/UserData";
import UserCard from "../../components/corporate/UserCard";
import UserTable from "../../components/corporate/UserTable";

export default function UserManagement(props) {
  const { session, setSession } = useContext(UserData);

  const [modal, setModal] = useState(true);
  const [filter, setFilter] = useState("");
  const [isGrid, setIsGrid] = useState(true);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-0 md:p-4">
        <DashboardOptions />
        {/* Content down */}
        {/* Desktop View Category Filter */}
        <div className="hidden py-2 border-t border-b border-gray-300 lg:flex items-center justify-start space-x-2 font-bold mt-7 mb-3 overflow-x-auto">
          {[
            {
              id: "",
              name: "All users (4)",
            },
            {
              id: "24h",
              name: "24h active users (4)",
            },
            {
              id: "7days",
              name: "7 days active users (4)",
            },
            {
              id: "30days",
              name: "30days active users (4)",
            },
            {
              id: "subscribed",
              name: "Subscribed users (7)",
            },
          ].map((category, one) => {
            return (
              <p
                className={`${
                  filter === category.id && "bg-gray-200"
                } py-2 px-5 hover:bg-gray-200 text-[18px]  transition-all duration-300 ease-in-out cursor-pointer`}
                onClick={() => {
                  setFilter(category.id);
                }}
              >
                {category.name}
              </p>
            );
          })}
        </div>
        <div className="font-bold">
          <p
            className={`py-2 px-5 w-fit hover:bg-gray-200 text-[15px]  transition-all duration-300 ease-in-out cursor-pointer`}
            onClick={() => {
              setIsGrid(!isGrid);
            }}
          >
            SHOW {!isGrid ? "GRID" : "LIST"}
          </p>
        </div>
        {isGrid ? (
          <div className="mt-2">
            {filter === "" && (
              <div className="mt-5 grid grid-cols-3 gap-x-10 gap-y-5">
                <UserCard />
                <UserCard />
              </div>
            )}
            {filter === "24h" && (
              <div className="mt-5 grid grid-cols-3 gap-x-10 gap-y-5">
                <UserCard />
                <UserCard />
              </div>
            )}
            {filter === "7days" && (
              <div className="mt-5 grid grid-cols-3 gap-x-10 gap-y-5">
                <UserCard />
                <UserCard />
              </div>
            )}
            {filter === "30days" && (
              <div className="mt-5 grid grid-cols-3 gap-x-10 gap-y-5">
                <UserCard />
                <UserCard />
              </div>
            )}
            {filter === "subscribed" && (
              <div className="mt-5 grid grid-cols-3 gap-x-10 gap-y-5">
                <UserCard />
                <UserCard />
              </div>
            )}
          </div>
        ) : (
          <div className="mt-2">
            {filter === "" && (
              <div className="mt-5 w-full">
                <UserTable />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
