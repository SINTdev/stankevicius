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
import InvoiceTable from "../../components/corporate/InvoiceTable";

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
  const [isGrid, setIsGrid] = useState(true);

  const [records, setRecords] = useState([]);

  const getRecords = async () => {
    await axios
      .get(CONSTANT.server + `api/credits`)
      .then((responce) => {
        setRecords(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllUsers();
    getRecords();
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
        setMessage("Credit added successfully!", "green-500");
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
              name: `All credit purchases (${records?.length})`,
            },
            {
              id: "30days",
              name: `30 days purchases (${
                records?.filter((a) => {
                  return a?.isLast30Days;
                })?.length
              })`,
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
              name: `All credit purchases (${records?.length})`,
            },
            {
              id: "30days",
              name: `30 days purchases (${
                records?.filter((a) => {
                  return a?.isLast30Days;
                })?.length
              })`,
            },
          ]}
        />
        {filter !== "" && (
          <div className="font-bold">
            <p
              className={`py-2 select-none transition-all duration-300 ease-in-out ${
                isGrid ? "pr-3.5" : "pr-2.5"
              } flex flex-row justify-center items-center w-fit hover:bg-gray-200 text-[15px]  transition-all duration-300 ease-in-out cursor-pointer`}
              onClick={() => {
                setIsGrid(!isGrid);
              }}
            >
              {!isGrid ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="currentColor"
                  className="ml-4 w-6 h-6 scale-90 translate-y-[1.5px] cursor-pointer"
                  viewBox="0 0 24 24"
                >
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-59.000000, -240.000000)"
                      fill="#000000"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M16.65,98 L21.9,98 L21.9,93 L16.65,93 L16.65,98 Z M14.55,100 L24,100 L24,91 L14.55,91 L14.55,100 Z M5.1,98 L10.35,98 L10.35,93 L5.1,93 L5.1,98 Z M3,100 L12.45,100 L12.45,91 L3,91 L3,100 Z M16.65,87 L21.9,87 L21.9,82 L16.65,82 L16.65,87 Z M14.55,89 L24,89 L24,80 L14.55,80 L14.55,89 Z M5.1,87 L10.35,87 L10.35,82 L5.1,82 L5.1,87 Z M3,89 L12.45,89 L12.45,80 L3,80 L3,89 Z"
                          id="grid_system-[#1520]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="ml-4 w-6 h-6 scale-75 cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 0h16v7H0V0zm2 2v3h12V2H2zM0 9h16v7H0V9zm2 2v3h12v-3H2z"
                    fill-rule="evenodd"
                  />
                </svg>
              )}
              <span className="ml-2 flex items-center justify-center translate-y-[1px]">
                SHOW {!isGrid ? "GRID" : "LIST"}
              </span>
            </p>
          </div>
        )}
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
          {filter === "all" && isGrid && (
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5">
              {records?.map((a, i) => {
                return <InvoiceCard key={i} data={a} />;
              })}
            </div>
          )}
          {filter === "all" && !isGrid && (
            <div className="mt-5 w-full">
              <InvoiceTable records={records} />
            </div>
          )}
          {filter === "30days" && isGrid && (
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5">
              {records
                .filter((a) => {
                  return a?.isLast30Days;
                })
                ?.map((a, i) => {
                  return <InvoiceCard key={i} data={a} />;
                })}
            </div>
          )}
          {filter === "30days" && !isGrid && (
            <div className="mt-5 w-full">
              <InvoiceTable
                records={records.filter((a) => {
                  return a?.isLast30Days;
                })}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
