import React, { useContext, useState, useEffect } from "react";
import DashboardOptions from "../../components/client/DashboardOptions";
import InvoiceCard from "../../components/corporate/InvoiceCard";
import UserData from "../../contexts/UserData";
import UserCard from "../../components/corporate/UserCard";
import UserTable from "../../components/corporate/UserTable";
import axios from "axios";
import { CONSTANT } from "../../CONSTANT";
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
              name: "Subscribed users (0)",
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
              name: "Subscribed users (0)",
            },
          ]}
        />
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
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5">
              {users
                ?.filter((user) => {
                  if (filter === "") {
                    return true;
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
