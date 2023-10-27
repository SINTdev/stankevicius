import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  CONSTANT,
  setMessage,
  resetMessage,
  checkLoginFromLogin,
} from "../../CONSTANT";
import InputBox from "../../components/InputBox";
import PaymentForm from "../../components/PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(CONSTANT.STRIPE_PUBLISHABLE_KEY);

const CheckoutCredit = (props) => {
  const navigate = useNavigate();

  const init__payload = {
    amount: 1,
    paymentMethod: null,
    accept: false,
  };
  const [payload, setPayload] = useState(init__payload);
  const changePayload = (e) => {
    if (parseInt(e.target.value) < 1) {
      return;
    }
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  // useEffect(() => {
  //   if (props?.resp?.status === "success") {
  //     updateCredits(parseInt(props?.resp?.value));
  //   } else if (props?.resp?.status === "cancel") {
  //     setMessage("Payment cancelled.", "red-500");
  //   }
  // }, []);

  const updateCredits = async (id) => {
    resetMessage();
    await axios
      .put(CONSTANT.server + `api/credits`, {
        id: id,
      })
      .then((responce) => {
        let res = responce.data;
        if (res.message) {
          setMessage(res.message, "red-500");
        } else {
          //   setMessage(
          //     "Payment successful. Credits added to account.",
          //     "green-500"
          //   );
          sessionStorage.setItem(
            "loggedin",
            JSON.stringify({
              data: res,
            })
          );
          props?.updateSessionData();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let __INIT__PURCHASED__ = {
    status: false,
    amount: 0,
  };
  const [purchased, setPurchased] = useState(__INIT__PURCHASED__);

  const getFormLink = async (e) => {
    e.target.style.pointerEvents = "none";
    e.target.innerHTML =
      '<div className="spinner-border custom-spin" role="status"><span className="visually-hidden">Loading...</span></div>';
    e.preventDefault();
    resetMessage();
    if (payload?.amount) {
      if (payload?.paymentMethod) {
        await axios
          .post(CONSTANT.server + `api/checkoutsession`, {
            amount: payload?.amount,
            client: CONSTANT.client,
            email: props?.email,
            user_identifier: props?.user_identifier,
            payment_method: payload?.paymentMethod,
          })
          .then((responce) => {
            let res = responce.data;
            console.log(res);
            if (res?.isSuccess) {
              updateCredits(parseInt(res?.entry));
              setPurchased({
                status: true,
                amount: payload?.amount,
              });
              setTimeout(() => {
                setPurchased(__INIT__PURCHASED__);
              }, 5000);
            } else {
              setMessage(res.message, "red-500");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setMessage("Invalid payment information.", "red-500");
      }
    } else {
      setMessage("Invalid amount.", "red-500");
    }
    e.target.style.pointerEvents = "unset";
    e.target.innerHTML = "Purchase Now";
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex mb-5">
        <img
          src="/assets/logo.png"
          className="h-6 mr-3"
          alt="Stankevicius Logo"
        />
      </div>

      <div className="flex flex-col">
        <span className="text-xl text-center _font-bold leading-tight tracking-tight text-black md:text-2xl">
          {purchased?.status
            ? `${purchased?.amount} Credits Purchased`
            : "Buy Advertising Credits"}
        </span>
        <span className="text-center mt-2">
          {purchased?.status
            ? "Payment successful. Credits added to account."
            : "Enter amount of credits."}
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div className="space-y-2 md:space-y-3 w-full md:w-3/5">
          {!purchased?.status ? (
            <>
              <InputBox
                placeholder={"1"}
                type="number"
                value={payload.amount}
                onChange={changePayload}
                name="amount"
              />
              <Elements stripe={stripePromise}>
                <PaymentForm changePayload={changePayload} />
              </Elements>
              <div className="flex items-center __CHECK_REG__ space-x-2">
                <span className="flex items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    checked={payload.accept}
                    onChange={(e) => {
                      if (e.target.checked) {
                        props?.setStaticMessage({
                          show: true,
                          message: (
                            <div>
                              You can use our services in a variety of ways to
                              manage your privacy.<div className="py-2"></div>{" "}
                              For example, you can sign up for a Google Account
                              if you want to create and manage content like
                              emails and photos, or see more relevant search
                              results.
                              <div className="py-2"></div> And you can use many
                              Google services when you’re signed out or without
                              creating an account at all, like searching on
                              Google or watching YouTube videos. You can also
                              choose to browse the web in a private mode, like
                              Chrome Incognito mode. And across our services,
                              you can adjust your privacy settings to control
                              what we collect and how your information is used.{" "}
                              <div className="py-2"></div>To help explain things
                              as clearly as possible, we’ve added examples,
                              explanatory videos, and definitions for key terms.
                              And if you have any questions about this Privacy
                              Policy, you can contact us. When you’re not signed
                              in to a Google Account, we store the information
                              we collect with unique identifiers tied to the
                              browser, application, or device you’re using. This
                              allows us to do things like maintain your
                              preferences across browsing sessions, such as your
                              preferred language or whether to show you more
                              relevant search results or ads based on your
                              activity.
                            </div>
                          ),
                          isInfo: false,
                          onAgree: () => {
                            setPayload({
                              ...payload,
                              accept: true,
                            });
                          },
                        });
                      } else {
                        setPayload({
                          ...payload,
                          accept: e.target.checked,
                        });
                      }
                    }}
                    className="cursor-pointer text-black bg-white border-gray-300 hover:bg-gray-50 focus:ring-0 dark:focus:ring-0 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  />
                </span>
                <label
                  htmlFor="link-checkbox"
                  className="tracking-normal __CHECK_REG__LABEL__ text-gray-500 font-medium"
                >
                  Agree to Terms of Use and Purchase Policy of Advertising
                  Credits.
                </label>
              </div>
              <div className="mt-2"></div>{" "}
              <button
                onClick={getFormLink}
                disabled={!payload?.paymentMethod || !payload?.accept}
                className={`${
                  (!payload?.paymentMethod || !payload?.accept) && "opacity-50"
                } w-full text-white tracking-wider bg-black text-sm px-5 py-2.5 text-center`}
              >
                Purchase Now
              </button>
            </>
          ) : (
            <button
              onClick={props?.onClose}
              className="w-full text-white tracking-wider bg-black text-sm px-5 py-2.5 text-center"
            >
              Ok
            </button>
          )}

          <div className="mt-2"></div>
          <div
            id="error"
            className="text-sm text-center"
            style={{ display: "none" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCredit;
