import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";
import { CONSTANT } from "../CONSTANT";
import UserData from "../contexts/UserData";
import Modal from "../components/Modal";
import { isMobileOnly } from "react-device-detect";

const ProductCard = ({
  product,
  handleInteraction,
  hasFiveMinutesPassed,
  session,
}) => {
  const formatDateDot = (date) => {
    date = new Date(date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    return `${formattedDay}.${formattedMonth}`;
  };
  const addDaysToTimestamp = (timestamp, days) => {
    let originalDate = new Date(timestamp);
    let daysToAdd = parseInt(days, 10);
    let newDate = new Date(originalDate);
    newDate.setDate(originalDate.getDate() + daysToAdd);
    return newDate.toISOString();
  };
  return (
    <div className="max-h-[100px] inline-block min-w-fit w-full max-w-md border-2 border-[#6E6162] text-white flex-col">
      <div className="flex flex-row px-2 pr-1 py-1 justify-between w-full">
        <div className="w-4/6 uppercase flex items-center text-base _font-bold text-[#FFB769]">
          {product?.name}
        </div>
        <div className="w-2/6 md:m-0 ml-3 flex flex-row justify-between">
          <div className="flex flex-col _font-bold uppercase text-xs leading-none justify-center">
            <span>Open: {formatDateDot(product?.openedOn)}</span>
            <span>
              Exp:{" "}
              {formatDateDot(
                addDaysToTimestamp(
                  product?.timestamp,
                  product?.listingDuration?.name
                )
              )}
            </span>
          </div>

          {((session?.isLoggedIn &&
            product?.by?.id.toString() !== session?.personal?.id.toString()) ||
            !session?.isLoggedIn) && (
            <button
              onClick={() => {
                handleInteraction(
                  product?.lastActivity &&
                    !product?.lastActivity?.isCancelled &&
                    !hasFiveMinutesPassed(product?.lastActivity?.timestamp) &&
                    product?.lastActivity?.isWait
                    ? product?.lastActivity?.id
                    : product.id,
                  product?.action,
                  (product?.lastActivity &&
                    !product?.lastActivity?.isCancelled &&
                    !hasFiveMinutesPassed(product?.lastActivity?.timestamp) &&
                    product?.lastActivity?.isWait) ??
                    false,
                  !Boolean(product?.lastActivity)
                );
              }}
              className={`${
                ((product?.lastActivity &&
                  !product?.lastActivity?.isCancelled &&
                  hasFiveMinutesPassed(product?.lastActivity?.timestamp)) ||
                  (product?.lastActivity &&
                    !product?.lastActivity?.isCancelled &&
                    !product?.lastActivity?.isWait)) &&
                "bg-[#929292] pointer-events-none"
              } transition-all duration-300 ease-in-out text-base hover:text-black hover:bg-[#FFB769] cursor-pointer text-[#FFB769] px-1 justify-center items-center flex border-2 _font-bold uppercase border-[#FFB769]`}
            >
              {(!product?.lastActivity ||
                (product?.lastActivity &&
                  product?.lastActivity?.isCancelled)) &&
                (product?.action?.name !== "BUYING" ? "Buy" : "Sell")}
              {product?.lastActivity &&
                !product?.lastActivity?.isCancelled &&
                !hasFiveMinutesPassed(product?.lastActivity?.timestamp) &&
                product?.lastActivity?.isWait &&
                "X"}
              {((product?.lastActivity &&
                !product?.lastActivity?.isCancelled &&
                hasFiveMinutesPassed(product?.lastActivity?.timestamp)) ||
                (product?.lastActivity &&
                  !product?.lastActivity?.isCancelled &&
                  !product?.lastActivity?.isWait)) &&
                "X"}
            </button>
          )}
        </div>
      </div>
      <div
        className={`text-xs flex flex-row bg-gradient-to-b ${
          product?.action?.name === "BUYING"
            ? "from-green-900 via-green-700 to-green-500"
            : "from-red-900 via-red-700 to-red-500"
        } px-2 py-0.5 justify-center items-center md:space-x-0 space-x-2`}
      >
        <div className="w-1/2 flex flex-col">
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase">Quantity:</span>
            <span className="font-semibold">{product?.quantity}</span>
          </div>
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase">Delivery:</span>
            <span className="font-semibold">{product?.delivery?.name}</span>
          </div>
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase">Origin:</span>
            <span className="font-semibold">{product?.origin?.name}</span>
          </div>
        </div>

        <div className="w-1/2 flex flex-col">
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase">Contract:</span>
            <span className="font-semibold">{product?.contract?.name}</span>
          </div>
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase">Payment:</span>
            <span className="font-semibold">{product?.payment?.name}</span>
          </div>
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase">Price:</span>
            <span className="font-semibold">{product?.price} USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TIMEZONES = [
  {
    label: "HKT",
    name: "Asia/Hong_Kong",
  },
  {
    label: "EST",
    name: "America/New_York",
  },
  {
    label: "GST",
    name: "Asia/Dubai",
  },
];

export default function PromotionBar(props) {
  const { session, setSession, changePushProductChange } = useContext(UserData);
  const [productsList, setProductsList] = useState([]);
  const fetchProducts = async () => {
    let url = session.personal?.id
      ? `api/promotedproducts/${session.personal?.id}`
      : "api/promotedproducts";
    await axios
      .get(CONSTANT.server + url)
      .then((responce) => {
        setProductsList(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (session.isLoaded) {
      fetchProducts();
    }
  }, [session]);

  const formatTimeDate = (timeZone, label) => {
    let now = new Date(
      new Date().toLocaleString("en-US", {
        timeZone,
      })
    );
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    let formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    let monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let month = monthNames[now.getMonth()];
    let day = now.getDate();

    let formattedTimeDate = `${formattedHours}:${
      minutes < 10 ? "0" : ""
    }${minutes} ${ampm} ${label} ${month} ${day}`;

    return formattedTimeDate;
  };

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // All config done
  // Implementation starts

  let EMPTY_MODAL = {
    isOpen: false,
    content: "",
    onYes: () => {},
    isCancel: false,
  };

  const [modal, setModal] = useState(EMPTY_MODAL);

  const hasFiveMinutesPassed = (timestamp) => {
    let fiveMinutesInMillis = 5 * 60 * 1000;
    let currentTimeInMillis = Date.now();
    let targetTimeInMillis = new Date(timestamp).getTime();
    return currentTimeInMillis - targetTimeInMillis >= fiveMinutesInMillis;
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
          changePushProductChange();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function startTimerAndFetchProducts() {
    const timer = setTimeout(() => {
      fetchProducts();
      changePushProductChange();
    }, 5 * 60 * 1000);
  }

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
          changePushProductChange();
          startTimerAndFetchProducts();
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

  const toSendAlong = {
    handleInteraction: handleInteraction,
    hasFiveMinutesPassed: hasFiveMinutesPassed,
    session: session,
  };

  return (
    <>
      {" "}
      <Modal
        isOpen={modal.isOpen}
        onClose={() => {
          setModal(EMPTY_MODAL);
        }}
        text={modal.content}
        onYes={modal.onYes}
        isCancel={modal.isCancel}
      />
      <div
        className={`${props?.className} max-h-[100px] h-full overflow-hidden w-full transition-all duration-300 ease-in-out`}
      >
        <div className="max-h-[100px] h-full flex flex-row bg-black p-1">
          <div className="mr-1 border-2 px-2 border-[#6E6162] flex flex-col items-end justify-center bg-[#464646] text-white">
            <span className="text-2xl _font-bold">Stankevicius</span>
            {/* <span className="uppercase text-xs">11:03 am hkt sep 18</span> */}
            <span className="uppercase text-xs transition-all ease-in-out duration-1000">
              {formatTimeDate(
                TIMEZONES[counter]?.name,
                TIMEZONES[counter]?.label
              )}
            </span>
            <span className="uppercase text-xs">trade quotes</span>
          </div>
          <div className="scrolling-container w-full">
            <div
              className={`scrolling-content w-full space-x-0.5 ${
                isMobileOnly ? "fast-up" : ""
              }`}
            >
              {productsList?.map((product, one) => {
                return (
                  <ProductCard product={product} key={one} {...toSendAlong} />
                );
              })}
            </div>
          </div>
          {/* {productsList?.map((product, one) => {
            return <ProductCard product={product} key={one} {...toSendAlong} />;
          })} */}
        </div>
      </div>
    </>
  );
}
