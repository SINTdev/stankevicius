import React, { useState, useEffect, useContext } from "react";
import Menu from "../components/Menu";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import axios from "axios";
import { CONSTANT, smoothScrollDown } from "../CONSTANT";
import UserData from "../contexts/UserData";
import InputBox from "../components/InputBox";
import { takeActionOnProduct } from "../ACTIONS";

const CountdownComponent = ({ lastActivity, hasMinutesPassed }) => {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    let countdownInterval;

    const updateCountdown = () => {
      if (
        lastActivity &&
        !lastActivity.isCancelled &&
        !hasMinutesPassed(lastActivity.timestamp) &&
        lastActivity.isWait
      ) {
        const targetTime =
          new Date(lastActivity.timestamp).getTime() + 2 * 60 * 1000; // Add 2 minutes
        const currentTime = Date.now();

        if (targetTime > currentTime) {
          const remainingTimeMillis = targetTime - currentTime;
          const minutes = Math.floor(remainingTimeMillis / 60000);
          const seconds = Math.floor((remainingTimeMillis % 60000) / 1000);

          setCountdown(
            `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
              2,
              "0"
            )}`
          );
        } else {
          // Countdown has expired
          setCountdown("00:00");
          clearInterval(countdownInterval);
        }
      }
    };

    updateCountdown(); // Initialize the countdown

    countdownInterval = setInterval(updateCountdown, 1000); // Update every second

    return () => {
      clearInterval(countdownInterval);
    };
  }, [lastActivity]);

  return (
    <span className="text-xs">
      Cancel
      <span className="ml-2">{countdown}</span>
    </span>
  );
};
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
                  onClick={() => {
                    if (one?.label === "Edit" && props?.onlySearch) {
                      props?.setIsSearchOpen(false);
                    }
                  }}
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

export default function Home(props) {
  const { session, setSession, pushProductChange } = useContext(UserData);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const focusParam = params.get("focus");

    if (focusParam === "list") {
      smoothScrollDown();
    }
  }, []);

  const fetchCategories = async () => {
    await axios
      .post(CONSTANT.server + "api/options", {})
      .then((responce) => {
        setCategories(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchProducts = async () => {
    let url = session.personal?.id
      ? `api/products/${session.personal?.id}`
      : "api/products";
    await axios
      .get(CONSTANT.server + url)
      .then((responce) => {
        setProductsList(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const hasMinutesPassed = (timestamp) => {
    let minutesInMillis = 2 * 60 * 1000;
    let currentTimeInMillis = Date.now();
    let targetTimeInMillis = new Date(timestamp).getTime();
    return currentTimeInMillis - targetTimeInMillis >= minutesInMillis;
  };

  // const formatCountdownFromTimestamp = (timestamp, currentTime) => {
  //   currentTime = currentTime;
  //   let targetTime = new Date(timestamp).getTime() + 2 * 60 * 1000; // Add 2 minutes to the given timestamp

  //   if (currentTime >= targetTime) {
  //     return "00:00";
  //   }

  //   let remainingTimeMillis = targetTime - currentTime;
  //   let minutes = Math.floor(remainingTimeMillis / 60000); // 1 minute = 60,000 milliseconds
  //   let seconds = Math.floor((remainingTimeMillis % 60000) / 1000); // 1 second = 1,000 milliseconds

  //   // Add leading zeros to ensure two-digit format
  //   let formattedMinutes = String(minutes).padStart(2, "0");
  //   let formattedSeconds = String(seconds).padStart(2, "0");

  //   return `${formattedMinutes}:${formattedSeconds}`;
  // };
  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (session.isLoaded) {
      fetchProducts();
    }
  }, [session]);

  useEffect(() => {
    if (pushProductChange) {
      fetchProducts();
    }
  }, [pushProductChange]);

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
    }, 2 * 60 * 1000);
  }

  // Utils

  const returnMessage = (product) => {
    if (product?.lastActivity !== null) {
      if (product?.lastActivity?.isCancelled) {
        return "(YOU WON’T BE ABLE TO CANCEL NEXT TIME)";
      } else if (
        !hasMinutesPassed(product?.lastActivity?.timestamp) &&
        product?.lastActivity?.isWait
      ) {
        return "(After 2 minutes you won't be able to cancel)";
      }
    }

    return "";
  };

  const renderInfoCompany = (by, show) => {
    if (
      by?.companyURL !== "" &&
      by?.companyName !== "" &&
      by?.companyURL &&
      by?.companyName
    ) {
      return (
        <a
          href={show ? by?.companyURL : ""}
          target="_blank"
          className="text-sky-700 border-b text-[calc(1rem-2px)] tracking-normal  inline-flex max-w-fit border-b-sky-700   items-baseline space-x-1 md:mt-4 mt-0 lg:mt-0"
        >
          <span className="inline-block">
            {show
              ? by?.companyName
              : by?.companyName?.split("")?.map((a) => "*")}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-3.5 h-3.5 text-[#221f1f] relative top-[1px]"
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
        <span className="text-black text-[calc(1rem-2px)] tracking-normal inline-flex max-w-fit items-baseline space-x-1 md:mt-4 mt-0 lg:mt-0">
          <span className="inline-block">
            {show
              ? by?.companyName
              : by?.companyName?.split("")?.map((a) => "*")}
          </span>
        </span>
      );
    }
    return null;
  };
  // const renderInfoPersonal = (by, show) => {
  //   return (
  //     <a
  //       href={show ? `mailto:${by?.email}` : ""}
  //       target="_blank"
  //       className="text-sky-700 border-b text-[calc(1rem-2px)] tracking-normal inline-flex max-w-fit border-b-sky-700   items-baseline space-x-1 md:mt-4 mt-0 lg:mt-0"
  //     >
  //       <span className="inline-block">
  //         {show ? by?.fullName : by?.fullName?.split("")?.map((a) => "*")}
  //       </span>
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 512 512"
  //         className="w-3 h-3 text-[#221f1f] relative top-[1px]"
  //       >
  //         <g>
  //           <path
  //             class="st0"
  //             d="M510.678,112.275c-2.308-11.626-7.463-22.265-14.662-31.054c-1.518-1.915-3.104-3.63-4.823-5.345   c-12.755-12.818-30.657-20.814-50.214-20.814H71.021c-19.557,0-37.395,7.996-50.21,20.814c-1.715,1.715-3.301,3.43-4.823,5.345   C8.785,90.009,3.63,100.649,1.386,112.275C0.464,116.762,0,121.399,0,126.087V385.92c0,9.968,2.114,19.55,5.884,28.203   c3.497,8.26,8.653,15.734,14.926,22.001c1.59,1.586,3.169,3.044,4.892,4.494c12.286,10.175,28.145,16.32,45.319,16.32h369.958   c17.18,0,33.108-6.145,45.323-16.384c1.718-1.386,3.305-2.844,4.891-4.43c6.27-6.267,11.425-13.741,14.994-22.001v-0.064   c3.769-8.653,5.812-18.171,5.812-28.138V126.087C512,121.399,511.543,116.762,510.678,112.275z M46.509,101.571   c6.345-6.338,14.866-10.175,24.512-10.175h369.958c9.646,0,18.242,3.837,24.512,10.175c1.122,1.129,2.179,2.387,3.112,3.637   L274.696,274.203c-5.348,4.687-11.954,7.002-18.696,7.002c-6.674,0-13.276-2.315-18.695-7.002L43.472,105.136   C44.33,103.886,45.387,102.7,46.509,101.571z M36.334,385.92V142.735L176.658,265.15L36.405,387.435   C36.334,386.971,36.334,386.449,36.334,385.92z M440.979,420.597H71.021c-6.281,0-12.158-1.651-17.174-4.552l147.978-128.959   l13.815,12.018c11.561,10.046,26.028,15.134,40.36,15.134c14.406,0,28.872-5.088,40.432-15.134l13.808-12.018l147.92,128.959   C453.137,418.946,447.26,420.597,440.979,420.597z M475.666,385.92c0,0.529,0,1.051-0.068,1.515L335.346,265.221L475.666,142.8   V385.92z"
  //           />
  //         </g>
  //       </svg>
  //     </a>
  //   );
  // };

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
        {!props?.onlySearch && (
          <>
            <div className="flex space-x-8">
              <h1 className="font-extrabold text-[24px]">Products</h1>
              {/* {session.isLoggedIn && (
            <Link
              to="/addProduct"
              className="uppercase font-medium bg-[#221f1f] text-white px-5 min-w-[8rem] py-2.5"
            >
              Add new trade
            </Link>
          )} */}
            </div>
            <p className="my-3 text-[18px] leading-[20px] font-thin text-gray-500">
              Below is a list of the treatments we currently offer via our
              Innovative Medicines Division. Visit{" "}
              <span className="text-sky-700 underline">Sandoz</span> and{" "}
              <span className="text-sky-700 underline">
                Advanced Accelerator Applications
              </span>{" "}
              to learn about our generics and radiopharmaceutical products.
              Please note: Not all treatments are available in all countries.
            </p>
          </>
        )}

        {/* Search Bar */}
        <div className="flex flex-wrap md:flex-nowrap justify-between space-y-3 md:space-y-0 md:space-x-2">
          <input
            type="search"
            className={`${
              props?.onlySearch && "delay-the-search"
            } block w-full rounded-none p-3 focus:border-black text-sm text-gray-900 border-2 border-gray-300  hover:bg-gray-50 outline-none`}
            placeholder="Search Product"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        {/* Desktop View Category Filter */}
        {!props?.onlySearch && (
          <div className="overflow-auto hidden py-2 border-t border-b border-gray-300 lg:flex items-center justify-start space-x-2 font-bold mt-7 mb-3">
            <p
              className={`${
                filter === "" && "bg-gray-200"
              } py-2 px-3 text-[18px] hover:bg-gray-200 transition-all whitespace-nowrap duration-300 ease-in-out cursor-pointer`}
              onClick={() => {
                setFilter("");
              }}
            >
              All Products
            </p>
            {categories.map((category, one) => {
              return (
                <p
                  className={`${
                    filter === category.id && "bg-gray-200"
                  } py-2 px-3 hover:bg-gray-200 text-[18px] transition-all whitespace-nowrap duration-300 ease-in-out cursor-pointer`}
                  onClick={() => {
                    setFilter(category.id);
                  }}
                >
                  {category.name}
                </p>
              );
            })}
          </div>
        )}
        {!props?.onlySearch && (
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
                name: "All Products",
              },
              ...categories,
            ]}
          />
        )}

        <div className={props?.onlySearch && "mt-10"}>
          {((props?.onlySearch && search !== "") || !props?.onlySearch) && (
            <p className="tracking-tight font-thin text-gray-500">
              Showing{" "}
              {
                productsList
                  .filter((product, index) => {
                    if (!filter) return true;
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
                  .slice(0, show).length
              }{" "}
              results
            </p>
          )}
        </div>

        {((props?.onlySearch && search !== "") || !props?.onlySearch) && (
          <div
            className={`my-5 `}
            // ${
            //   props?.onlySearch && "max-h-[70vh] h-[70vh] overflow-scroll"
            // }
          >
            {productsList
              .filter((product, index) => {
                if (!filter) return true;
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
              .map((product, index) => {
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
                        {!product?.isExtended && !product?.isArchived ? (
                          <>
                            <span className="uppercase _font-bold mr-1">
                              opened on
                            </span>
                            <span className="font-thin">
                              {formatDate(product?.openedOn)}
                            </span>
                            <span className="uppercase _font-bold ml-3 mr-1">
                              {product?.isExpired ? "Expired" : "Expiring"} on
                            </span>
                            <span className="font-thin">
                              {/* {formatDate(
                                addDaysToTimestamp(
                                  product?.timestamp,
                                  product?.listingDuration?.name
                                )
                              )} */}
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
                            <span className="uppercase _font-bold mr-1">
                              Expired on
                            </span>
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
                              {/* {formatDate(
                                addDaysToTimestamp(
                                  product?.timestamp,
                                  product?.listingDuration?.name
                                )
                              )} */}
                              {formatDate(
                                addDaysToTimestamp(
                                  product?.expiryDate,
                                  product?.listingDuration?.name
                                )
                              )}
                            </span>
                          </>
                        ) : null}
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

                        {((session?.isLoggedIn &&
                          product?.by?.id.toString() !==
                            session?.personal?.id.toString() &&
                          session?.personal?.email !== "admin@admin.com") ||
                          (!session?.isLoggedIn &&
                            session?.personal?.email !==
                              "admin@admin.com")) && (
                          <div className="flex flex-row items-end">
                            {/* <p className="md:-translate-y-3.5 md:-translate-x-2 uppercase text-[1rem] font-medium text-black lg:text-right h-[4px]">
                              02:00
                            </p> */}
                            <button
                              onClick={() => {
                                handleInteraction(
                                  product?.lastActivity &&
                                    !product?.lastActivity?.isCancelled &&
                                    !hasMinutesPassed(
                                      product?.lastActivity?.timestamp
                                    ) &&
                                    product?.lastActivity?.isWait
                                    ? product?.lastActivity?.id
                                    : product.id,
                                  product?.action,
                                  (product?.lastActivity &&
                                    !product?.lastActivity?.isCancelled &&
                                    !hasMinutesPassed(
                                      product?.lastActivity?.timestamp
                                    ) &&
                                    product?.lastActivity?.isWait) ??
                                    false,
                                  !Boolean(product?.lastActivity)
                                );
                              }}
                              className={`${
                                ((product?.lastActivity &&
                                  !product?.lastActivity?.isCancelled &&
                                  hasMinutesPassed(
                                    product?.lastActivity?.timestamp
                                  )) ||
                                  (product?.lastActivity &&
                                    !product?.lastActivity?.isCancelled &&
                                    !product?.lastActivity?.isWait)) &&
                                "bg-[#929292] pointer-events-none"
                              } text-[16px] uppercase font-semibold bg-[#221f1f] text-white min-w-[8rem] py-2`}
                            >
                              {(!product?.lastActivity ||
                                (product?.lastActivity &&
                                  product?.lastActivity?.isCancelled)) &&
                                (product?.action?.name !== "BUYING"
                                  ? "Buy"
                                  : "Sell")}
                              {product?.lastActivity &&
                                !product?.lastActivity?.isCancelled &&
                                !hasMinutesPassed(
                                  product?.lastActivity?.timestamp
                                ) &&
                                product?.lastActivity?.isWait && (
                                  <CountdownComponent
                                    lastActivity={product?.lastActivity}
                                    hasMinutesPassed={hasMinutesPassed}
                                  />
                                  // <span className="text-xs">
                                  //   Cancel
                                  //   <span className="ml-2">
                                  //     {formatCountdownFromTimestamp(
                                  //       product?.lastActivity?.timestamp,
                                  //       Date.now()
                                  //     )}
                                  //   </span>
                                  // </span>
                                )}
                              {((product?.lastActivity &&
                                !product?.lastActivity?.isCancelled &&
                                hasMinutesPassed(
                                  product?.lastActivity?.timestamp
                                )) ||
                                (product?.lastActivity &&
                                  !product?.lastActivity?.isCancelled &&
                                  !product?.lastActivity?.isWait)) &&
                                "Cancel"}
                            </button>
                          </div>
                        )}

                        {((session?.isLoggedIn &&
                          product?.by?.id?.toString() ===
                            session?.personal?.id?.toString() &&
                          !product?.isArchived &&
                          !product?.isExpired) ||
                          session?.personal?.email === "admin@admin.com") && (
                          <DropdownButton
                            onlySearch={props?.onlySearch}
                            setIsSearchOpen={props?.setIsSearchOpen}
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
                                      takeActionOnProduct(
                                        product?.id,
                                        "expire",
                                        () => {
                                          fetchProducts();
                                        }
                                      );
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
                                      takeActionOnProduct(
                                        product?.id,
                                        "archive",
                                        () => {
                                          fetchProducts();
                                        }
                                      );
                                      setModal(EMPTY_MODAL);
                                    },
                                  });
                                },
                              },
                            ]}
                          />
                        )}
                      </div>
                      <p className="mt-[4px] uppercase text-[.65rem] font-medium text-black lg:text-right h-[4px]">
                        {returnMessage(product)}
                      </p>
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
                          <span className="capitalize _font-bold mr-1">
                            Quantity:
                          </span>
                          <span className="font-light text-gray-700">
                            {`${product?.quantity} ${product?.measurement?.name}`}
                          </span>
                        </div>
                        <div className="mr-2">
                          <span className="capitalize _font-bold mr-1">
                            Contract:
                          </span>
                          <span className="font-light text-gray-700 whitespace-nowrap">
                            {product?.contract?.name}
                          </span>
                        </div>
                        <div className="mr-2">
                          <span className="capitalize _font-bold mr-1">
                            Delivery:
                          </span>
                          <span className="font-light text-gray-700">
                            {product?.delivery?.name}
                          </span>
                        </div>
                        <div className="mr-2">
                          <span className="capitalize _font-bold mr-1">
                            Payment:
                          </span>
                          <span className="font-light text-gray-700">
                            {product?.payment?.name}
                          </span>
                        </div>
                        <div className="mr-2">
                          <span className="capitalize _font-bold mr-1">
                            Origin:
                          </span>
                          <span className="font-light text-gray-700">
                            {product?.origin?.name}
                          </span>
                        </div>
                        <div className="mr-2">
                          <span className="capitalize _font-bold mr-1">
                            Price:
                          </span>
                          <span className="font-light text-gray-700">
                            {`${product?.price} ${product?.currency?.name}`}
                          </span>
                        </div>
                      </div>

                      {/* {(product?.isPaidPromoted ||
                        product?.promoteCompanyWebsite) && (
                        <a
                          href={product?.by?.companyURL}
                          target="_blank"
                          className="text-sky-700 border-b  inline-flex max-w-fit border-b-sky-700   items-baseline space-x-1 mt-4 lg:mt-0"
                        >
                          <span className="inline-block">
                            {product?.by?.companyName}
                          </span>
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
                      )} */}
                      {(product?.isPaidPromoted ||
                        product?.promoteCompanyWebsite) &&
                        renderInfoCompany(product?.by, true)}
                    </div>
                  </div>
                );
              })}
          </div>
        )}

        {((!props?.onlySearch && productsList.length > show) ||
          (props?.onlySearch &&
            search !== "" &&
            productsList.length > show)) && (
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
