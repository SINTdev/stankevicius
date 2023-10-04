import React, { useContext, useState, useEffect } from "react";
import DashboardOptions from "../../components/client/DashboardOptions";
import InvoiceCard from "../../components/corporate/InvoiceCard";
import UserData from "../../contexts/UserData";
import UserCard from "../../components/corporate/UserCard";
import UserTable from "../../components/corporate/UserTable";
import axios from "axios";
import { CONSTANT, smoothScrollDown } from "../../CONSTANT";
import Modal from "../../components/Modal";
import InputBox from "../../components/InputBox";

export default function UserManagement(props) {
  const { session, setSession } = useContext(UserData);
  const [filter, setFilter] = useState("");
  const [isGrid, setIsGrid] = useState(true);

  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    await axios
      .get(CONSTANT.server + "api/corporateusers")
      .then((responce) => {
        setUsers(responce?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    smoothScrollDown();
    fetchUsers();
  }, []);

  let EMPTY_MODAL = {
    isOpen: false,
    content: "",
    onYes: () => {},
    isCancel: false,
  };

  const [modal, setModal] = useState(EMPTY_MODAL);

  const deleteUser = async (id) => {
    await axios
      .delete(CONSTANT.server + `authentication/user/${id}`)
      .then((responce) => {
        fetchUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Modal
        isOpen={modal.isOpen}
        onClose={() => {
          setModal(EMPTY_MODAL);
        }}
        text={modal.content}
        onYes={modal.onYes}
        isCancel={modal.isCancel}
      />
      <div className="max-w-screen-xl mx-auto p-0 md:p-4">
        <DashboardOptions />
        {/* Content down */}
        {/* Desktop View Category Filter */}
        <div className="hidden py-2 border-t border-b border-gray-300 lg:flex items-center justify-start space-x-2 font-bold mt-7 mb-3 overflow-x-auto">
          {[
            {
              id: "",
              name: `All users (${users?.length})`,
            },
            {
              id: "24h",
              name: `24h active users (${
                users?.filter((a) => {
                  return a?.status === "24h";
                })?.length
              })`,
            },
            {
              id: "7days",
              name: `7 days active users (${
                users?.filter((a) => {
                  return a?.status === "7days";
                })?.length
              })`,
            },
            {
              id: "30days",
              name: `30 days active users (${
                users?.filter((a) => {
                  return a?.status === "30days";
                })?.length
              })`,
            },
            {
              id: "subscribed",
              name: `Subscribed users (${
                users?.filter((a) => {
                  return a?.offer;
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
              name: `All users (${users?.length})`,
            },
            {
              id: "24h",
              name: `24h active users (${
                users?.filter((a) => {
                  return a?.status === "24h";
                })?.length
              })`,
            },
            {
              id: "7days",
              name: `7 days active users (${
                users?.filter((a) => {
                  return a?.status === "7days";
                })?.length
              })`,
            },
            {
              id: "30days",
              name: `30 days active users (${
                users?.filter((a) => {
                  return a?.status === "30days";
                })?.length
              })`,
            },
            {
              id: "subscribed",
              name: `Subscribed users (${
                users?.filter((a) => {
                  return a?.offer;
                })?.length
              })`,
            },
          ]}
        />
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
                    <g id="icons" transform="translate(56.000000, 160.000000)">
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
        {isGrid ? (
          <div className="mt-2">
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5">
              {users
                ?.filter((user) => {
                  if (filter === "") {
                    return true;
                  }
                  if (filter === "subscribed") {
                    return user?.offer;
                  }
                  return user?.status === filter;
                })
                ?.map((user, one) => {
                  return (
                    <UserCard
                      user={user}
                      onDelete={() => {
                        setModal({
                          ...modal,
                          isOpen: true,
                          content: `You confirm that you want to delete
                          this user. All user data will be deleted
                          permanently including all user’s
                          trades.`,
                          onYes: () => {
                            deleteUser(user?.id);
                            setModal(EMPTY_MODAL);
                          },
                        });
                      }}
                    />
                  );
                })}
            </div>
          </div>
        ) : (
          <div className="mt-2">
            <div className="mt-5 w-full">
              <UserTable
                users={users?.filter((user) => {
                  if (filter === "") {
                    return true;
                  }
                  if (filter === "subscribed") {
                    return user?.offer;
                  }
                  return user?.status === filter;
                })}
                onDelete={(id) => {
                  setModal({
                    ...modal,
                    isOpen: true,
                    content: `You confirm that you want to delete
                          this user. All user data will be deleted
                          permanently including all user’s
                          trades.`,
                    onYes: () => {
                      deleteUser(id);
                      setModal(EMPTY_MODAL);
                    },
                  });
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
