import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CONSTANT, USER_DASHBOARD_MENU, smoothScrollDown } from "../../CONSTANT";
import InputBox from "../../components/InputBox";
import Modal from "../../components/Modal";
import UserData from "../../contexts/UserData";
import DashboardOptions from "../../components/client/DashboardOptions";
import ModalWrapper from "../../components/ModalWrapper";
import ProfileForm from "../../components/client/ProfileForm";
import InvoiceCard from "../../components/client/InvoiceCard";

export default function Credit(props) {
  const { session, setSession } = useContext(UserData);

  const [modal, setModal] = useState(true);
  const [filter, setFilter] = useState("buy");

  useEffect(() => {
    smoothScrollDown();
  }, []);


  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-0 md:p-4">
        <DashboardOptions name={session?.personal?.fullName} />
        {/* Content down */}
        {/* Desktop View Category Filter */}
        <div className="hidden py-2 border-t border-b border-gray-300 lg:flex items-center justify-start space-x-2 font-bold mt-7 mb-3 overflow-x-auto">
          {[
            {
              id: "buy",
              name: "Buy Credit",
            },
            {
              id: "history",
              name: "Purchase History",
            },
          ].map((category, one) => {
            return (
              <p
                className={`${
                  filter === category.id && "bg-gray-200"
                } py-2 px-3 hover:bg-gray-200 text-[18px] transition-all duration-300 ease-in-out cursor-pointer`}
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
              id: "buy",
              name: "Buy Credit",
            },
            {
              id: "history",
              name: "Purchase History",
            },
          ]}
        />

        <div className="mt-2">
          {filter === "buy" && (
            <div className="flex flex-col space-y-10">
              <span className="text-lg _font-bold">
                Your current credit is: 0
              </span>
              <span className="text-lg _font-bold">
                [Buy more credit: Setup payment system, Stripe]
              </span>
            </div>
          )}
          {filter === "history" && (
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
