import React, { useContext, useState, useEffect } from "react";
import DashboardOptions from "../../components/client/DashboardOptions";
import InvoiceCard from "../../components/corporate/InvoiceCard";
import UserData from "../../contexts/UserData";
import InputBox from "../../components/InputBox";
import {
  CONSTANT,
  resetMessage,
  setMessage,
  smoothScrollDown,
} from "../../CONSTANT";
import axios from "axios";

export default function CreditManagement(props) {
  const { session, setSession } = useContext(UserData);

  const [modal, setModal] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    smoothScrollDown();
  }, []);

  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    await axios
      .get(CONSTANT.server + `authentication/allusers`)
      .then((responce) => {
        setUsers(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  let __INIT__USER__ADD__CREDIT__ = {
    user: "",
    amount: 1,
  };

  const [userAddCredit, setUserAddCredit] = useState(
    __INIT__USER__ADD__CREDIT__
  );

  const changeUserAddCredit = (e) => {
    if (e.target.name === "amount" && parseInt(e.target.value) < 1) {
      return;
    }
    setUserAddCredit({
      ...userAddCredit,
      [e.target.name]: e.target.value,
    });
  };

  const updateCredits = async (e) => {
    e.target.style.pointerEvents = "none";
    e.target.innerHTML =
      '<div className="spinner-border custom-spin" role="status"><span className="visually-hidden">Loading...</span></div>';
    e.preventDefault();
    resetMessage();
    await axios
      .put(CONSTANT.server + `authentication/user/${userAddCredit?.user}`, {
        skipPassword: true,
        new_credits: parseInt(userAddCredit?.amount),
      })
      .then((responce) => {
        setMessage("Updated successfully!", "green-500");
        setUserAddCredit(__INIT__USER__ADD__CREDIT__);
        setTimeout(() => {
          resetMessage();
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
      });
    e.target.style.pointerEvents = "unset";
    e.target.innerHTML = "Add Credit";
  };

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
              name: "Add credit",
            },
            {
              id: "all",
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
              name: "Add credit",
            },
            {
              id: "all",
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
            <div className="md:w-1/3 w-full flex flex-col space-y-2 mt-10">
              <InputBox
                placeholder={"Select User"}
                value={userAddCredit.user}
                onChange={changeUserAddCredit}
                name="user"
                select={true}
                options={users?.map((a) => {
                  return {
                    id: a?.id,
                    name: `${a?.email} ${a?.fullName && `(${a?.fullName})`}`,
                  };
                })}
                className="md:w-full"
              />
              <InputBox
                placeholder={"1"}
                type="number"
                value={userAddCredit.amount}
                onChange={changeUserAddCredit}
                name="amount"
              />
              <button
                onClick={updateCredits}
                disabled={!userAddCredit.user || userAddCredit.amount < 1}
                className={`${
                  (!userAddCredit.user || userAddCredit.amount < 1) &&
                  "opacity-50"
                } w-full text-white tracking-wider bg-black text-sm px-5 py-2.5 text-center`}
              >
                Add Credit
              </button>
              <div className="mt-2"></div>
              <div
                id="error"
                className="text-sm text-left"
                style={{ display: "none" }}
              ></div>
            </div>
          )}
          {filter === "all" && (
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
