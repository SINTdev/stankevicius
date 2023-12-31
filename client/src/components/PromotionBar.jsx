import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CONSTANT } from "../CONSTANT";
import InfiniteLooper from "../components/InfiniteLooper";
import Modal from "../components/Modal";
import PromotionCard from "../components/skeleton/PromotionCard";
import UserData from "../contexts/UserData";

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

const ProductCard = ({
  product,
  handleInteraction,
  hasMinutesPassed,
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
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  }
  return (
    <div className="mr-0.5 h-[92px] inline-block  min-w-[25rem] w-full border-2 border-[#6E6162] text-white flex-col">
      <div className="flex flex-row px-2 pr-1 py-1 justify-between w-full h-[28px]">
        <div className="w-3/6 uppercase flex items-center text-[calc(1rem-2px)] _font-bold text-[#FFB769] backface-visibility-visible">
          {truncateString(product?.name, 19)}
        </div>
        <div className="w-3/6 md:m-0 ml-3 flex flex-row justify-between">
          <div className="flex flex-col _font-bold uppercase text-[0.6rem] leading-none justify-center">
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
                    !hasMinutesPassed(product?.lastActivity?.timestamp) &&
                    product?.lastActivity?.isWait
                    ? product?.lastActivity?.id
                    : product.id,
                  product?.action,
                  (product?.lastActivity &&
                    !product?.lastActivity?.isCancelled &&
                    !hasMinutesPassed(product?.lastActivity?.timestamp) &&
                    product?.lastActivity?.isWait) ??
                    false,
                  !Boolean(product?.lastActivity)
                );
              }}
              className={`${
                ((product?.lastActivity &&
                  !product?.lastActivity?.isCancelled &&
                  hasMinutesPassed(product?.lastActivity?.timestamp)) ||
                  (product?.lastActivity &&
                    !product?.lastActivity?.isCancelled &&
                    !product?.lastActivity?.isWait)) &&
                "bg-[#929292] pointer-events-none"
              } transition-all duration-300 ease-in-out text-[calc(1rem-2px)] hover:text-black hover:bg-[#FFB769] cursor-pointer text-[#FFB769] px-1 justify-center items-center flex border-2 _font-bold uppercase border-[#FFB769]`}
            >
              {(!product?.lastActivity ||
                (product?.lastActivity &&
                  product?.lastActivity?.isCancelled)) &&
                (product?.action?.name !== "BUYING" ? "Buy" : "Sell")}
              {product?.lastActivity &&
                !product?.lastActivity?.isCancelled &&
                !hasMinutesPassed(product?.lastActivity?.timestamp) &&
                product?.lastActivity?.isWait && (
                  <CountdownComponent
                    lastActivity={product?.lastActivity}
                    hasMinutesPassed={hasMinutesPassed}
                  />
                )}
              {((product?.lastActivity &&
                !product?.lastActivity?.isCancelled &&
                hasMinutesPassed(product?.lastActivity?.timestamp)) ||
                (product?.lastActivity &&
                  !product?.lastActivity?.isCancelled &&
                  !product?.lastActivity?.isWait)) &&
                "Cancel"}
            </button>
          )}
          {session?.isLoggedIn &&
            product?.by?.id.toString() === session?.personal?.id.toString() && (
              <button
                className={` transition-all duration-300 ease-in-out text-[calc(1rem-2px)] hover:text-black hover:bg-[#FFB769] cursor-pointer text-[#FFB769] px-1 justify-center items-center flex border-2 _font-bold uppercase border-[#FFB769]`}
              >
                {product?.action?.name !== "BUYING" ? "Buy" : "Sell"}
              </button>
            )}
        </div>
      </div>
      <div
        className={`text-[0.78rem] flex flex-row bg-gradient-to-b ${
          product?.action?.name === "BUYING"
            ? "from-green-900 via-green-700 to-green-500"
            : "from-red-900 via-red-700 to-red-500"
        } px-2 py-0.5 h-[60px] items-center justify-center`}
      >
        <div className="w-1/2 flex flex-col">
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase backface-visibility-visible">
              Quantity:
            </span>
            <span className="font-medium tracking-tight backface-visibility-visible">
              {product?.quantity} {product?.measurement?.name}
            </span>
          </div>
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase backface-visibility-visible">
              Delivery:
            </span>
            <span className="font-medium tracking-tight backface-visibility-visible">
              {product?.delivery?.name}
            </span>
          </div>
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase backface-visibility-visible">
              Origin:
            </span>
            <span className="font-medium tracking-tight backface-visibility-visible">
              {product?.origin?.name}
            </span>
          </div>
        </div>

        <div className="w-1/2 flex flex-col">
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase backface-visibility-visible">
              Contract:
            </span>
            <span className="font-medium tracking-tight backface-visibility-visible">
              {product?.contract?.name}
            </span>
          </div>
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase backface-visibility-visible">
              Payment:
            </span>
            <span className="font-medium tracking-tight backface-visibility-visible">
              {product?.payment?.name}
            </span>
          </div>
          <div className="whitespace-nowrap items-center flex flex-row space-x-1">
            <span className="_font-bold uppercase backface-visibility-visible">
              Price:
            </span>
            <span className="font-medium tracking-tight backface-visibility-visible">
              {product?.price} USD
            </span>
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
        setTimeout(() => {
          setProductsList(responce.data);
          setLoadN(false);
        }, 1000);
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

  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => (prevCounter + 1) % 3);
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);

  const texts = [
    ...TIMEZONES.map((tz) => {
      return formatTimeDate(tz?.name, tz?.label);
    }),
  ]; // Replace with your array of strings
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("fade-in-left");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("fade-out-right");

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setAnimationClass("fade-in-left");
      }, 500); // Adjust the animation duration (e.g., 500ms) as needed
    }, 4000); // Change text every 4 seconds

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

  const hasMinutesPassed = (timestamp) => {
    let fiveMinutesInMillis = 2 * 60 * 1000;
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
    hasMinutesPassed: hasMinutesPassed,
    session: session,
  };

  const [loadN, setLoadN] = useState(true);

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
          <div className="mr-1 border-2 px-2 border-[#6E6162] flex flex-col items-end justify-center bg-gradient-to-b from-gray-700 via-gray-600 to-gray-400 text-white">
            <span className="text-2xl _font-bold">Stankevicius</span>
            {/* <span className="uppercase text-xs">11:03 am hkt sep 18</span> */}
            {/* <span className="uppercase text-xs transition-all ease-in-out duration-1000">
              {formatTimeDate(
                TIMEZONES[counter]?.name,
                TIMEZONES[counter]?.label
              )}
            </span> */}
            <span
              className={`uppercase text-xs ${
                animationClass === "fade-out-right"
                  ? "opacity-0"
                  : "opacity-100"
              } ${animationClass}`}
            >
              {texts[currentIndex]}
            </span>

            <span className="uppercase text-xs time-animation">
              trade quotes
            </span>
          </div>
          {/* <div className="scrolling-container w-full flex flex-row">
            <div
              className={`scrolling-content space-x-0.5 ${
                isMobileOnly ? "fast-up" : ""
              }`}
            >
              {productsList?.map((product, one) => {
                return (
                  <ProductCard product={product} key={one} {...toSendAlong} />
                );
              })}
            </div>
          </div> */}
          {/* {productsList?.map((product, one) => {
            return <ProductCard product={product} key={one} {...toSendAlong} />;
          })} */}
          {loadN && (
            <InfiniteLooper speed={13} direction="left">
              {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                <PromotionCard />
              ))}
            </InfiniteLooper>
          )}
          {productsList?.length > 0 && (
            <InfiniteLooper speed={13} direction="left">
              {productsList?.map((product, one) => {
                return (
                  <ProductCard product={product} key={one} {...toSendAlong} />
                );
              })}
            </InfiniteLooper>
          )}
        </div>
      </div>
    </>
  );
}
