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

const CheckoutCredit = (props) => {
  const navigate = useNavigate();

  const init__payload = {
    amount: 1,
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

  useEffect(() => {
    if (props?.resp?.status === "success") {
      updateCredits(parseInt(props?.resp?.value));
    } else if (props?.resp?.status === "cancel") {
      setMessage("Payment cancelled.", "red-500");
    }
  }, []);

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
          setMessage(
            "Payment successful. Credits added to account.",
            "green-500"
          );
          sessionStorage.setItem(
            "loggedin",
            JSON.stringify({
              data: res,
            })
          );
          props?.updateSessionData();
          setTimeout(() => {
            navigate("/client/credit");
          }, 1000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getFormLink = async (e) => {
    e.target.style.pointerEvents = "none";
    e.target.innerHTML =
      '<div className="spinner-border custom-spin" role="status"><span className="visually-hidden">Loading...</span></div>';
    e.preventDefault();
    resetMessage();
    if (payload?.amount) {
      await axios
        .post(CONSTANT.server + `api/checkoutsession`, {
          amount: payload?.amount,
          client: CONSTANT.client,
          email: props?.email,
          user_identifier: props?.user_identifier,
        })
        .then((responce) => {
          let res = responce.data;
          console.log(res);
          if (res.message) {
            setMessage(res.message, "red-500");
          } else {
            window.location.href = res?.url;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setMessage("Invalid amount.", "red-500");
    }
    e.target.style.pointerEvents = "unset";
    e.target.innerHTML = "Checkout";
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
          Buy Credits
        </span>
        <span className="text-center mt-2">Enter amount of credits.</span>
      </div>
      <div className="flex justify-center items-center">
        <div className="space-y-2 md:space-y-3 w-full md:w-3/5">
          <InputBox
            placeholder={"1"}
            type="number"
            value={payload.amount}
            onChange={changePayload}
            name="amount"
          />
          <div className="mt-2"></div>
          <button
            onClick={getFormLink}
            className="w-full text-white tracking-wider bg-black text-sm px-5 py-2.5 text-center"
          >
            Checkout
          </button>
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
