import React, { useState, useEffect, useContext } from "react";
import Menu from "../components/Menu";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import axios from "axios";
import { CONSTANT } from "../CONSTANT";
import UserData from "../contexts/UserData";
export default function Home(props) {
  const { session, setSession } = useContext(UserData);
  const [categories, setCategories] = useState([]);

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

  const hasFiveMinutesPassed = (timestamp) => {
    let fiveMinutesInMillis = 5 * 60 * 1000;
    let currentTimeInMillis = Date.now();
    let targetTimeInMillis = new Date(timestamp).getTime();
    return currentTimeInMillis - targetTimeInMillis >= fiveMinutesInMillis;
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (session.isLoaded) {
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
    console.log(
      product?.lastActivity &&
        !product?.lastActivity?.isCancelled &&
        hasFiveMinutesPassed(product?.lastActivity?.timestamp),
      product?.lastActivity &&
        !product?.lastActivity?.isCancelled &&
        !product?.lastActivity?.isWait,
      (product?.lastActivity &&
        !product?.lastActivity?.isCancelled &&
        hasFiveMinutesPassed(product?.lastActivity?.timestamp)) ||
        (product?.lastActivity &&
          !product?.lastActivity?.isCancelled &&
          !product?.lastActivity?.isWait)
    );
    console.log(product?.lastActivity, !product?.lastActivity?.isCancelled, hasFiveMinutesPassed(product?.lastActivity?.timestamp))
    return "";
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
      {!props?.isMenuOpen ? (
        <div className="max-w-screen-xl mx-auto p-0 md:p-4">
          <div className="flex space-x-8">
            <h1 className="font-extrabold text-3xl">Products</h1>
            {session.isLoggedIn && (
              <Link
                to="/addProduct"
                className="uppercase font-medium bg-[#221f1f] text-white px-5 min-w-[8rem] py-2.5"
              >
                Add new product
              </Link>
            )}
          </div>
          <p className="my-3 text-md font-normal text-gray-500">
            Below is a list of the treatments we currently offer via our
            Innovative Medicines Division. Visit{" "}
            <span className="text-sky-700 underline">Sandoz</span> and{" "}
            <span className="text-sky-700 underline">
              Advanced Accelerator Applications
            </span>{" "}
            to learn about our generics and radiopharmaceutical products. Please
            note: Not all treatments are available in all countries.
          </p>

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
            {/* <button
              type="submit"
              className="flex items-center justify-center p-3 border-2  border-[#221f1f] hover:bg-[#221f1f] -sm group transition ease-in-out w-full md:w-fit space-x-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 group-hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <span className="text-[#221f1f] md:hidden font-semibold group-hover:text-white">
                Search
              </span>
            </button> */}
          </div>
          {/* Desktop View Category Filter */}
          <div className="hidden py-2 border-t border-b border-gray-300 lg:flex items-center justify-start space-x-2 font-bold mt-7 mb-3 overflow-x-auto">
            <p
              className={`${
                filter === "" && "bg-gray-200"
              } py-2 px-3 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer`}
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
                  } py-2 px-3 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer`}
                  onClick={() => {
                    setFilter(category.id);
                  }}
                >
                  {category.name}
                </p>
              );
            })}
          </div>

          {/* Mobile View Category Filter */}
          <select
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
            className="bg-gray-50 border-2 lg:hidden  border-[#221f1f] text-gray-900 text-sm   block w-full p-2.5 mt-3 -none"
          >
            <option value={""}>All Products</option>
            {categories.map((category, one) => {
              return <option value={category.id}>{category.name}</option>;
            })}
          </select>

          <div>
            <p className="tracking-tight font-medium text-gray-500">
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
          </div>

          <div className="my-5">
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
                        product?.action?.name !== "BUYING"
                          ? "border-l-green-500"
                          : "border-l-red-500"
                      }`}
                    >
                      <div className="absolute w-[100%] h-[1px] bg-gray-300 -bottom-[0px] left-0 hidden lg:block"></div>
                      <p className="text-xs mb-2 lg:mb-0 lg:float-right">
                        <span className="uppercase _font-bold mr-1">
                          opened on
                        </span>
                        <span className="font-medium">
                          {formatDate(product?.timestamp)}
                        </span>
                        <span className="uppercase _font-bold ml-3 mr-1">
                          Expiring on
                        </span>
                        <span className="font-medium">
                          {formatDate(
                            addDaysToTimestamp(
                              product?.timestamp,
                              product?.listingDuration?.name
                            )
                          )}
                        </span>
                      </p>
                      <div className=" mb-5">
                        <h1 className="_font-bold text-2xl tracking-tight">
                          {product?.name}
                        </h1>
                        <p className="uppercase text-sm leading-3 font-medium">
                          {product?.action?.name}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="capitalize font-medium text-gray-800">
                          {product?.category?.name}
                        </p>

                        {((session?.isLoggedIn &&
                          product?.by?.id.toString() !==
                            session?.personal?.id.toString()) ||
                          !session?.isLoggedIn) && (
                          <button
                            onClick={() => {
                              handleInteraction(
                                product?.lastActivity &&
                                  !product?.lastActivity?.isCancelled &&
                                  !hasFiveMinutesPassed(
                                    product?.lastActivity?.timestamp
                                  ) &&
                                  product?.lastActivity?.isWait
                                  ? product?.lastActivity?.id
                                  : product.id,
                                product?.action,
                                (product?.lastActivity &&
                                  !product?.lastActivity?.isCancelled &&
                                  !hasFiveMinutesPassed(
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
                                hasFiveMinutesPassed(
                                  product?.lastActivity?.timestamp
                                )) ||
                                (product?.lastActivity &&
                                  !product?.lastActivity?.isCancelled &&
                                  !product?.lastActivity?.isWait)) &&
                              "opacity-30 pointer-events-none"
                            } uppercase font-semibold bg-[#221f1f] text-white min-w-[8rem] py-2`}
                          >
                            {(!product?.lastActivity ||
                              (product?.lastActivity &&
                                product?.lastActivity?.isCancelled)) &&
                              (product?.action?.name !== "BUYING"
                                ? "Buy"
                                : "Sell")}
                            {product?.lastActivity &&
                              !product?.lastActivity?.isCancelled &&
                              !hasFiveMinutesPassed(
                                product?.lastActivity?.timestamp
                              ) &&
                              product?.lastActivity?.isWait &&
                              "Cancel"}
                            {((product?.lastActivity &&
                              !product?.lastActivity?.isCancelled &&
                              hasFiveMinutesPassed(
                                product?.lastActivity?.timestamp
                              )) ||
                              (product?.lastActivity &&
                                !product?.lastActivity?.isCancelled &&
                                !product?.lastActivity?.isWait)) &&
                              "Cancel"}
                          </button>
                        )}
                      </div>
                      <p className="mt-[4px] uppercase text-[.65rem] font-medium text-black lg:text-right h-[4px]">
                        {returnMessage(product)}
                      </p>
                    </div>
                    <div
                      className={`w-full flex-grow lg:w-1/2 border-l-8 pt-6 pb-4 lg:py-4  mb-[1.7px] lg:mb-0 relative  ${
                        product?.action?.name !== "BUYING"
                          ? "border-l-green-500"
                          : "border-l-red-500"
                      }  lg:border lg:border-gray-300 px-4  flex flex-col justify-between`}
                    >
                      <div className="absolute w-[99%] h-[1px] bg-gray-300 -bottom-[2px] left-1 lg:hidden"></div>
                      <div className="gap-y-0 gap-x-2 flex flex-wrap tracking-tight">
                        <div className="">
                          <span className="capitalize _font-bold mr-1">
                            Quantity:
                          </span>
                          <span className="font-medium text-gray-700">
                            {product?.quantity}
                            {product?.measurement?.name}
                          </span>
                        </div>
                        <div className="">
                          <span className="capitalize _font-bold mr-1">
                            Contract:
                          </span>
                          <span className="font-medium text-gray-700">
                            {product?.contract?.name}
                          </span>
                        </div>
                        <div className="">
                          <span className="capitalize _font-bold mr-1">
                            Delivery:
                          </span>
                          <span className="font-medium text-gray-700">
                            {product?.delivery?.name}
                          </span>
                        </div>
                        <div className="">
                          <span className="capitalize _font-bold mr-1">
                            Payment:
                          </span>
                          <span className="font-medium text-gray-700">
                            {product?.payment?.name}
                          </span>
                        </div>
                        <div className="">
                          <span className="capitalize _font-bold mr-1">
                            Origin:
                          </span>
                          <span className="font-medium text-gray-700">
                            {product?.origin?.name}
                          </span>
                        </div>
                        <div className="">
                          <span className="capitalize _font-bold mr-1">
                            Price:
                          </span>
                          <span className="font-medium text-gray-700">
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
                      )}
                    </div>
                  </div>
                );
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
      ) : (
        <Menu />
      )}
      {/* Menu */}
    </div>
  );
}
