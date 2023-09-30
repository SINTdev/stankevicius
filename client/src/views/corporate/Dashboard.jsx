import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  CONSTANT,
  CORPORATE_DASHBOARD_MENU,
  USER_DASHBOARD_MENU,
} from "../../CONSTANT";
import InputBox from "../../components/InputBox";
import Modal from "../../components/Modal";
import UserData from "../../contexts/UserData";
import DashboardOptions from "../../components/client/DashboardOptions";
import { takeActionOnProduct } from "../../ACTIONS";
import ModalWrapper from "../../components/ModalWrapper";
import CategoryManagement from "../../components/corporate/CategoryManagement";

const DropdownButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      {isOpen && (
        <div
          className="w-screen h-screen top-0 left-0 z-10 fixed"
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>
      )}
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
                  className={`border m-0 border-black border-t-0 flex flex-row items-center justify-center text-[13px] uppercase font-semibold bg-[#D5D5D5] hover:bg-[#929292] transition-all duration-150 ease-in-out text-white min-w-[8rem] py-1.5`}
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
                className={`border m-0 border-black border-t-0 flex flex-row items-center justify-center text-[13px] uppercase font-semibold bg-[#D5D5D5] hover:bg-[#929292] transition-all duration-150 ease-in-out text-white min-w-[8rem] py-1.5`}
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
  let navigate = useNavigate();
  const { session, setSession, fetchCategories, categories } =
    useContext(UserData);

  const fetchProducts = async () => {
    await axios
      .get(CONSTANT.server + `api/corporateproducts`)
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

  const countdownFrom5Days = (timestamp) => {
    const targetDate = new Date(timestamp);
    const currentTime = new Date().getTime();
    const targetTime = targetDate.getTime() + 5 * 24 * 60 * 60 * 1000; // 5 days in milliseconds
    const timeDifference = targetTime - currentTime;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    let countdownString = "";
    if (days > 0) {
      countdownString += `${days} days `;
    }
    if (hours > 0) {
      countdownString += `${hours} hours `;
    }
    if (minutes > 0) {
      countdownString += `${minutes} minutes`;
    }

    return countdownString.trim();
  };

  let EMPTY_MODAL = {
    isOpen: false,
    content: "",
    onYes: () => {},
    isCancel: false,
  };

  const [modal, setModal] = useState(EMPTY_MODAL);

  // Utils

  const [showData, setShowData] = useState(productsList || []);

  useEffect(() => {
    setShowData(
      productsList
        .filter((product, index) => {
          if (!filter) return true;
          if (filter === "active") {
            return !product?.isArchived && !product?.isExpired;
          }
          if (filter === "expired") {
            return !product?.isArchived && product?.isExpired;
          }
          if (filter === "archived") {
            return product?.isArchived;
          }
          if (filter === "uncat") {
            return !product?.category;
          }
          return parseInt(product?.category?.id) === parseInt(filter);
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
            {/* {!product?.isExtended && !product?.isArchived ? (
              <>
                <span className="uppercase _font-bold mr-1">opened on</span>
                <span className="font-thin">
                  {formatDate(product?.openedOn)}
                </span>
                <span className="uppercase _font-bold ml-3 mr-1">
                  {product?.isExpired ? "Expired" : "Expiring"} on
                </span>
                <span className="font-thin">
                  {formatDate(
                    addDaysToTimestamp(
                      product?.timestamp,
                      product?.listingDuration?.name
                    )
                  )}
                </span>
              </>
            ) : product?.isExtended && !product?.isArchived ? (
              <>
                <span className="uppercase _font-bold mr-1">Expired on</span>
                <span className="font-thin">
                  {formatDate(
                    addDaysToTimestamp(
                      product?.openedOn,
                      product?.listingDuration?.name
                    )
                  )}
                </span>
                <span className="uppercase _font-bold ml-3 mr-1">
                  Extended till
                </span>
                <span className="font-thin">
                  {formatDate(
                    addDaysToTimestamp(
                      product?.timestamp,
                      product?.listingDuration?.name
                    )
                  )}
                </span>
              </>
            ) : (
              <>
                <div className="flex flex-col w-full justify-start items-start mr-16">
                  <div>
                    <span className="uppercase _font-bold mr-1">
                      Archived on
                    </span>
                    <span className="font-thin">
                      {formatDate(product?.archivedOn)}
                    </span>
                  </div>
                  <div>
                    <span className="uppercase _font-bold mr-1">
                      Deleted in
                    </span>
                    <span className="font-thin">
                      {countdownFrom5Days(product?.archivedOn)}
                    </span>
                  </div>
                </div>
              </>
            )} */}
            {!product?.isExtended && !product?.isArchived ? (
              <>
                <span className="uppercase _font-bold mr-1">opened on</span>
                <span className="font-thin">
                  {formatDate(product?.openedOn)}
                </span>
                <span className="uppercase _font-bold ml-3 mr-1">
                  {product?.isExpired ? "Expired" : "Expiring"} on
                </span>
                <span className="font-thin">
                  {product?.isExpired
                    ? formatDate(product?.expiryDate)
                    : formatDate(
                        addDaysToTimestamp(
                          product?.timestamp,
                          product?.listingDuration?.name
                        )
                      )}
                </span>
              </>
            ) : product?.isExtended && !product?.isArchived ? (
              <>
                <span className="uppercase _font-bold mr-1">Expired on</span>
                <span className="font-thin">
                  {/* {formatDate(
                    addDaysToTimestamp(
                      product?.openedOn,
                      product?.listingDuration?.name
                    )
                  )} */}
                  {formatDate(product?.expiryDate)}
                </span>
                <span className="uppercase _font-bold ml-3 mr-1">
                  Extended till
                </span>
                <span className="font-thin">
                  {formatDate(
                    addDaysToTimestamp(
                      product?.expiryDate,
                      product?.listingDuration?.name
                    )
                  )}
                </span>
              </>
            ) : (
              <>
                <div className="flex flex-col w-full justify-start items-start mr-16">
                  <div>
                    <span className="uppercase _font-bold mr-1">
                      Archived on
                    </span>
                    <span className="font-thin">
                      {formatDate(product?.archivedOn)}
                    </span>
                  </div>
                  <div>
                    <span className="uppercase _font-bold mr-1">
                      Deleted in
                    </span>
                    <span className="font-thin">
                      {countdownFrom5Days(product?.archivedOn)}
                    </span>
                  </div>
                </div>
              </>
            )}
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
                    click: `/edit/${product?.slug}?focus=update`,
                  },
                  {
                    label: "Expire Now",
                    type: "button",
                    click: () => {
                      setModal({
                        ...modal,
                        isOpen: true,
                        content: `You confirm that you want to expire
                        this trade now and this trade will
                        expire immediately and will be
                        removed from listing.`,
                        onYes: () => {
                          takeActionOnProduct(product?.id, "expire", () => {
                            fetchProducts();
                          });
                          setModal(EMPTY_MODAL);
                        },
                      });
                    },
                  },
                  {
                    label: "Archive Now",
                    type: "button",
                    click: () => {
                      setModal({
                        ...modal,
                        isOpen: true,
                        content: `You confirm that you want to archive
                        this trade now. An archived trade
                        cannot be restored and will be
                        deleted from the system in 5 days.`,
                        onYes: () => {
                          takeActionOnProduct(product?.id, "archive", () => {
                            fetchProducts();
                          });
                          setModal(EMPTY_MODAL);
                        },
                      });
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
                      takeActionOnProduct(product?.id, "extend", () => {
                        fetchProducts();
                      });
                    },
                  },
                  {
                    label: "Archive Now",
                    type: "button",
                    click: () => {
                      setModal({
                        ...modal,
                        isOpen: true,
                        content: `You confirm that you want to archive
                        this trade now. An archived trade
                        cannot be restored and will be
                        deleted from the system in 5 days.`,
                        onYes: () => {
                          takeActionOnProduct(product?.id, "archive", () => {
                            fetchProducts();
                          });
                          setModal(EMPTY_MODAL);
                        },
                      });
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

          {session?.personal?.email === "admin@admin.com" && (
            <div className="flex flex-row space-x-3">
              <span
                onClick={() => {
                  setIsView((old) => {
                    if (parseInt(product?.id) !== parseInt(isView.id)) {
                      return {
                        show: true,
                        id: product?.id,
                      };
                    }
                    return {
                      show: !old?.show,
                      id: old?.show ? null : product?.id,
                    };
                  });
                }}
                className="select-none"
              >
                {isView.show &&
                parseInt(isView.id) === parseInt(product?.id) ? (
                  <>
                    <svg
                      fill="currentColor"
                      className="w-6 h-6 cursor-pointer"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path d="M12.01 20c-5.065 0-9.586-4.211-12.01-8.424 2.418-4.103 6.943-7.576 12.01-7.576 5.135 0 9.635 3.453 11.999 7.564-2.241 4.43-6.726 8.436-11.999 8.436zm-10.842-8.416c.843 1.331 5.018 7.416 10.842 7.416 6.305 0 10.112-6.103 10.851-7.405-.772-1.198-4.606-6.595-10.851-6.595-6.116 0-10.025 5.355-10.842 6.584zm10.832-4.584c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 1c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z" />
                    </svg>
                  </>
                ) : (
                  <>
                    <svg
                      fill="currentColor"
                      className="w-6 h-6 cursor-pointer"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path d="M8.137 15.147c-.71-.857-1.146-1.947-1.146-3.147 0-2.76 2.241-5 5-5 1.201 0 2.291.435 3.148 1.145l1.897-1.897c-1.441-.738-3.122-1.248-5.035-1.248-6.115 0-10.025 5.355-10.842 6.584.529.834 2.379 3.527 5.113 5.428l1.865-1.865zm6.294-6.294c-.673-.53-1.515-.853-2.44-.853-2.207 0-4 1.792-4 4 0 .923.324 1.765.854 2.439l5.586-5.586zm7.56-6.146l-19.292 19.293-.708-.707 3.548-3.548c-2.298-1.612-4.234-3.885-5.548-6.169 2.418-4.103 6.943-7.576 12.01-7.576 2.065 0 4.021.566 5.782 1.501l3.501-3.501.707.707zm-2.465 3.879l-.734.734c2.236 1.619 3.628 3.604 4.061 4.274-.739 1.303-4.546 7.406-10.852 7.406-1.425 0-2.749-.368-3.951-.938l-.748.748c1.475.742 3.057 1.19 4.699 1.19 5.274 0 9.758-4.006 11.999-8.436-1.087-1.891-2.63-3.637-4.474-4.978zm-3.535 5.414c0-.554-.113-1.082-.317-1.562l.734-.734c.361.69.583 1.464.583 2.296 0 2.759-2.24 5-5 5-.832 0-1.604-.223-2.295-.583l.734-.735c.48.204 1.007.318 1.561.318 2.208 0 4-1.792 4-4z" />
                    </svg>
                  </>
                )}
              </span>
              <div
                className={`transition-all duration-300 ease-in-out flex md:flex-row flex-col md:space-x-2 space-x-0 ${
                  isView.show && parseInt(isView.id) === parseInt(product?.id)
                    ? "pointer-events-auto select-auto"
                    : "blur-sm pointer-events-none select-none"
                }`}
              >
                {renderInfoCompany(product?.by)}
                {renderInfoPersonal(product?.by)}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  //   Categories
  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setFilter("");
      fetchProducts();
    }
  }, [categories]);

  //   Modal
  const [modalWrap, setModalWrap] = useState(false);

  useEffect(() => {
    setModalWrap(props?.category);
  }, [props]);

  const [isView, setIsView] = useState({
    id: null,
    show: false,
  });

  const renderInfoCompany = (by) => {
    if (
      by?.companyURL !== "" &&
      by?.companyName !== "" &&
      by?.companyURL &&
      by?.companyName
    ) {
      return (
        <a
          href={by?.companyURL}
          target="_blank"
          className="text-sky-700 border-b  inline-flex max-w-fit border-b-sky-700   items-baseline space-x-1 mt-4 lg:mt-0"
        >
          <span className="inline-block">{by?.companyName}</span>
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
      );
    } else if (by?.companyName !== "" && by?.companyName) {
      return (
        <span className="text-sky-700 border-b  inline-flex max-w-fit border-b-sky-700   items-baseline space-x-1 mt-4 lg:mt-0">
          <span className="inline-block">{by?.companyName}</span>
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
        </span>
      );
    }
    return null;
  };
  const renderInfoPersonal = (by) => {
    return (
      <a
        href={`mailto:${by?.email}`}
        target="_blank"
        className="text-sky-700 border-b  inline-flex max-w-fit border-b-sky-700   items-baseline space-x-1 mt-4 lg:mt-0"
      >
        <span className="inline-block">{by?.fullName}</span>
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
        <DashboardOptions name={session?.personal?.fullName} />
        {/* Search Bar */}
        <div className="flex flex-wrap md:flex-nowrap justify-between space-y-3 md:space-y-0 md:space-x-2">
          <input
            type="search"
            className="block w-full rounded-none p-3 text-sm text-gray-900 border-2 border-gray-300  hover:bg-gray-50 outline-none"
            placeholder="Search Product"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        {/* Desktop View Category Filter */}
        <div className="overflow-auto hidden py-2 border-t border-b border-gray-300 lg:flex items-center justify-start space-x-0 md:space-x-2 font-bold mt-7 mb-3">
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
            ...categories,
            {
              id: "uncat",
              name: "Uncategorized",
            },
          ].map((category, one) => {
            return (
              <p
                className={`${
                  filter === category.id && "bg-gray-200"
                } py-2 px-3 hover:bg-gray-200 text-[18px] whitespace-nowrap transition-all duration-300 ease-in-out cursor-pointer`}
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
            ...categories,
            {
              id: "uncat",
              name: "Uncategorized",
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
