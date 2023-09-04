import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CONSTANT, USER_DASHBOARD_MENU } from "../../CONSTANT";
import InputBox from "../../components/InputBox";
import Modal from "../../components/Modal";
import UserData from "../../contexts/UserData";
import DashboardOptions from "../../components/client/DashboardOptions";

const DropdownButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`${props?.className} flex flex-row items-center justify-center text-[16px] uppercase font-semibold bg-[#221f1f] text-white min-w-[8rem] py-2`}
      >
        {props?.label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 330 330"
          strokeWidth={1.5}
          className={`ml-2 w-[9px] h-[9px] fill-white ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
        </svg>
      </button>
      <div className="absolute opacity-100 z-20">
        {isOpen &&
          props?.options?.map((one, index) => {
            if (one?.type === "link") {
              return (
                <Link
                  to={one?.click}
                  className={`border m-0 border-black border-t-0 flex flex-row items-center justify-center text-[13px] uppercase font-semibold bg-[#D5D5D5] text-white min-w-[8rem] py-1.5`}
                >
                  {one?.label}
                </Link>
              );
            }
            return (
              <button
                onClick={() => {
                  one?.click();
                }}
                className={`border m-0 border-black border-t-0 flex flex-row items-center justify-center text-[13px] uppercase font-semibold bg-[#D5D5D5] text-white min-w-[8rem] py-1.5`}
              >
                {one?.label}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default function Dashboard(props) {
  const { session, setSession } = useContext(UserData);


  const fetchProducts = async () => {
    await axios
      .get(CONSTANT.server + `api/myproducts/${session.personal?.id}`)
      .then((responce) => {
        setProductsList(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const hasFiveMinutesPassed = (timestamp) => {
    let fiveMinutesInMillis = 5 * 60 * 1000;
    let currentTimeInMillis = Date.now();
    let targetTimeInMillis = new Date(timestamp).getTime();
    return currentTimeInMillis - targetTimeInMillis >= fiveMinutesInMillis;
  };

  useEffect(() => {
    if (session.isLoaded && session?.isLoggedIn) {
      fetchProducts();
    }
  }, [session]);

  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(100);

  const [productsList, setProductsList] = useState([]);

  const formatDate = (date) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(date).toLocaleDateString("en-GB", options);
  };

  const addDaysToTimestamp = (timestamp, days) => {
    let originalDate = new Date(timestamp);
    let daysToAdd = parseInt(days, 10);
    let newDate = new Date(originalDate);
    newDate.setDate(originalDate.getDate() + daysToAdd);
    return newDate.toISOString();
  };

  let EMPTY_MODAL = {
    isOpen: false,
    content: "",
    onYes: () => {},
    isCancel: false,
  };

  const [modal, setModal] = useState(EMPTY_MODAL);

  const addInteraction = async (user_id, product_id, action_id, isWait) => {
    let toAdd = {};
    if (!isWait) {
      toAdd["isWait"] = false;
    }
    await axios
      .post(CONSTANT.server + "api/interactions", {
        user: user_id,
        product: product_id,
        action: action_id,
        timestamp: Date.now(),
        ...toAdd,
      })
      .then((responce) => {
        if (responce?.data?.message) {
          setModal({
            ...modal,
            content: responce?.data?.message,
            onYes: () => {
              setModal(EMPTY_MODAL);
            },
          });
        } else {
          setModal(EMPTY_MODAL);
          fetchProducts();
          startTimerAndFetchProducts();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cancelInteraction = async (id) => {
    await axios
      .put(CONSTANT.server + "api/interactions", {
        id: id,
      })
      .then((responce) => {
        if (responce?.data?.message) {
          setModal({
            ...modal,
            content: responce?.data?.message,
            onYes: () => {
              setModal(EMPTY_MODAL);
            },
          });
        } else {
          setModal(EMPTY_MODAL);
          fetchProducts();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInteraction = (
    product_id,
    action,
    isCancel = false,
    isWait = true
  ) => {
    //  console.log(product_id, action, isCancel, isWait);
    if (session.isLoggedIn) {
      setModal({
        isOpen: true,
        content: isCancel
          ? "You agree to cancel. Your request will be cancelled and you will not be contacted by our commercial sales team."
          : action?.name !== "BUYING"
          ? "You confirm that you can purchase the proposed product and agree to be contacted by our commercial sales team to discuss your offer."
          : "You confirm that you can supply the required product and agree to be contacted by our commercial sales team to discuss your proposal.",
        onYes: () => {
          if (!isCancel) {
            addInteraction(
              session?.personal?.id,
              product_id,
              action?.id,
              isWait
            );
          } else {
            cancelInteraction(product_id);
          }
        },
        isCancel: isCancel,
      });
    } else {
      setModal({
        isOpen: true,
        content: "Please login to interact.",
        onYes: () => {
          setModal(EMPTY_MODAL);
        },
        isCancel: false,
      });
    }
  };

  function startTimerAndFetchProducts() {
    const timer = setTimeout(() => {
      fetchProducts();
    }, 5 * 60 * 1000);
  }

  // Utils

  const returnMessage = (product) => {
    if (product?.lastActivity !== null) {
      if (product?.lastActivity?.isCancelled) {
        return "(YOU WON’T BE ABLE TO CANCEL NEXT TIME)";
      } else if (
        !hasFiveMinutesPassed(product?.lastActivity?.timestamp) &&
        product?.lastActivity?.isWait
      ) {
        return "(After 5 minutes you won't be able to cancel)";
      }
    }

    return "";
  };

  const [showData, setShowData] = useState(productsList || []);

  useEffect(() => {
    setShowData(
      productsList
        .filter((product, index) => {
          if (filter === "active") {
            return !product?.isArchived && !product?.isExpired;
          }
          if (filter === "expired") {
            return !product?.isArchived && product?.isExpired;
          }
          if (filter === "archived") {
            return product?.isArchived;
          }
          return true;
        })
        .filter((product, index) => {
          if (!search) return true;
          return (
            product?.category?.name
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            product?.contract?.name
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            product?.currency?.name
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            product?.delivery?.name
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            product?.listingDuration?.name
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            product?.measurement?.name
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            product?.origin?.name
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            product?.payment?.name
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            product?.name.toLowerCase().includes(search.toLowerCase())
          );
        })
        .slice(0, show)
    );
  }, [filter, search, productsList, show]);

  const renderCard = (product, index) => {
    return (
      <div className="flex flex-wrap" key={index}>
        <div
          className={`w-full flex-grow lg:w-1/2    px-4 py-4  border-l-8 relative ${
            product?.action?.name === "BUYING"
              ? "border-l-green-500"
              : "border-l-red-500"
          }`}
        >
          <div className="absolute w-[100%] h-[1px] bg-gray-300 -bottom-[0px] left-0 hidden lg:block"></div>
          <p className="text-xs mb-2 lg:mb-0 lg:float-right">
            <span className="uppercase _font-bold mr-1">opened on</span>
            <span className="font-thin">{formatDate(product?.timestamp)}</span>
            <span className="uppercase _font-bold ml-3 mr-1">Expiring on</span>
            <span className="font-thin">
              {formatDate(
                addDaysToTimestamp(
                  product?.timestamp,
                  product?.listingDuration?.name
                )
              )}
            </span>
          </p>
          <div className=" mb-5">
            <h1 className="_font-bold text-[24px] tracking-tight">
              {product?.name}
            </h1>
            <p className="uppercase text-[14px] leading-3 font-medium">
              {product?.action?.name}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="capitalize text-[18px] font-medium text-gray-800">
              {product?.category?.name}
            </p>

            {product?.isArchived && (
              <button
                onClick={() => {}}
                className={`${
                  true && "bg-[#929292] pointer-events-none"
                } text-[16px] uppercase font-semibold bg-[#221f1f] text-white min-w-[8rem] py-2`}
              >
                Archived
              </button>
            )}
            {!product?.isArchived && !product?.isExpired && (
              <DropdownButton
                label="Action"
                options={[
                  {
                    label: "Edit",
                    type: "link",
                    click: "/edit",
                  },
                  {
                    label: "Expire Now",
                    type: "button",
                    click: () => {
                      alert("Expire");
                    },
                  },
                  {
                    label: "Archive Now",
                    type: "button",
                    click: () => {
                      alert("Archive");
                    },
                  },
                ]}
              />
            )}
            {!product?.isArchived && product?.isExpired && (
              <DropdownButton
                label="Expired"
                className="bg-[#929292]"
                options={[
                  {
                    label: "Extend 7 Days",
                    type: "button",
                    click: () => {
                      alert("Extend");
                    },
                  },
                  {
                    label: "Archive Now",
                    type: "button",
                    click: () => {
                      alert("Archive");
                    },
                  },
                ]}
              />
            )}
          </div>
        </div>
        <div
          className={`w-full flex-grow lg:w-1/2 border-l-8 pt-6 pb-4 lg:py-4  mb-[1.7px] lg:mb-0 relative  ${
            product?.action?.name === "BUYING"
              ? "border-l-green-500"
              : "border-l-red-500"
          }  lg:border lg:border-gray-300 px-4  flex flex-col justify-between`}
        >
          <div className="absolute w-[99%] h-[1px] bg-gray-300 -bottom-[2px] left-1 lg:hidden"></div>
          <div className="text-[14px] flex flex-wrap tracking-tight">
            <div className="mr-2">
              <span className="capitalize _font-bold mr-1">Quantity:</span>
              <span className="font-light text-gray-700">
                {product?.quantity}
                {product?.measurement?.name}
              </span>
            </div>
            <div className="mr-2">
              <span className="capitalize _font-bold mr-1">Contract:</span>
              <span className="font-light text-gray-700 whitespace-nowrap">
                {product?.contract?.name}
              </span>
            </div>
            <div className="mr-2">
              <span className="capitalize _font-bold mr-1">Delivery:</span>
              <span className="font-light text-gray-700">
                {product?.delivery?.name}
              </span>
            </div>
            <div className="mr-2">
              <span className="capitalize _font-bold mr-1">Payment:</span>
              <span className="font-light text-gray-700">
                {product?.payment?.name}
              </span>
            </div>
            <div className="mr-2">
              <span className="capitalize _font-bold mr-1">Origin:</span>
              <span className="font-light text-gray-700">
                {product?.origin?.name}
              </span>
            </div>
            <div className="mr-2">
              <span className="capitalize _font-bold mr-1">Price:</span>
              <span className="font-light text-gray-700">
                {product?.price}
                {product?.currency?.name}
              </span>
            </div>
          </div>

          {product?.isPaidPromoted && (
            <a
              href={product?.by?.companyURL}
              target="_blank"
              className="text-sky-700 border-b  inline-flex max-w-fit border-b-sky-700   items-baseline space-x-1 mt-4 lg:mt-0"
            >
              <span className="inline-block">{product?.by?.companyName}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-[#221f1f] relative top-[1px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    );
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
      {/* Home Page */}
      <div className="max-w-screen-xl mx-auto p-0 md:p-4">
        <DashboardOptions
          name={session?.personal?.fullName}
          menus={USER_DASHBOARD_MENU}
        />
        {/* Search Bar */}
        <div className="flex flex-wrap md:flex-nowrap justify-between space-y-3 md:space-y-0 md:space-x-2">
          <input
            type="search"
            className="block w-full p-3 text-sm text-gray-900 border-2 border-gray-300  bg-ray-50 outline-none -none"
            placeholder="Search Product"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        {/* Desktop View Category Filter */}
        <div className="hidden py-2 border-t border-b border-gray-300 lg:flex items-center justify-start space-x-2 font-bold mt-7 mb-3 overflow-x-auto">
          {[
            {
              id: "",
              name: "All trades",
            },
            {
              id: "active",
              name: "Active",
            },
            {
              id: "expired",
              name: "Expired",
            },
            {
              id: "archived",
              name: "Archived",
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
              id: "",
              name: "All trades",
            },
            {
              id: "active",
              name: "Active",
            },
            {
              id: "expired",
              name: "Expired",
            },
            {
              id: "archived",
              name: "Archived",
            },
          ]}
        />

        <div>
          <p className="tracking-tight font-thin text-gray-500">
            Showing {showData?.length} results
          </p>
        </div>

        <div className="my-5">
          {showData.map((product, index) => {
            return renderCard(product, index);
          })}
        </div>

        {productsList.length > show && (
          <div className="flex flex-row items-center justify-center">
            <button
              onClick={() => {
                setShow((old) => {
                  return old + 10;
                });
              }}
              className="uppercase font-semibold bg-[#221f1f] text-white min-w-[8rem] py-2"
            >
              Load More
            </button>
          </div>
        )}

        {/* footer */}
      </div>
    </div>
  );
}