import React, { useContext, useState, useEffect } from "react";
import DashboardOptions from "../../components/client/DashboardOptions";
import InvoiceCard from "../../components/corporate/InvoiceCard";
import UserData from "../../contexts/UserData";
import InputBox from "../../components/InputBox";
import { smoothScrollDown } from "../../CONSTANT";

export default function CreditManagement(props) {
  const { session, setSession } = useContext(UserData);

  const [modal, setModal] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    smoothScrollDown();
  }, []);

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
              name: "All credit purchases (4)",
            },
            {
              id: "30days",
              name: "30 days purchases (4)",
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

        <InputBox
          placeholder={"Products"}
          className="lg:hidden mt-3"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          name="products"
          select={true}
          removeDefaultFirst={true}
          options={[
            {
              id: "",
              name: "All credit purchases (4)",
            },
            {
              id: "30days",
              name: "30 days purchases (4)",
            },
          ]}
        />
        <div className="mt-2">
          {filter === "" && (
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5">
              <InvoiceCard />
              <InvoiceCard />
              <InvoiceCard />
            </div>
          )}
          {filter === "30days" && (
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5">
              <InvoiceCard />
              <InvoiceCard />
              <InvoiceCard />
              <InvoiceCard />
              <InvoiceCard />
              <InvoiceCard />
              <InvoiceCard />
              <InvoiceCard />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
