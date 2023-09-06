import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  CONSTANT,
  setMessage,
  resetMessage,
  checkLoginFromLogin,
} from "../CONSTANT";
import InputBox from "../components/InputBox";

const VerifyOTP = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (checkLoginFromLogin()) {
      navigate("/");
    }
  }, []);

  const init__payload = {
    code: "",
  };
  const [payload, setPayload] = useState(init__payload);
  const changePayload = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };
  const verify = async (e) => {
    e.target.style.pointerEvents = "none";
    e.target.innerHTML =
      '<div className="spinner-border custom-spin" role="status"><span className="visually-hidden">Loading...</span></div>';
    e.preventDefault();
    resetMessage();
    if (props?.email !== "") {
      await axios
        .post(CONSTANT.server + `authentication/verify2fa`, {
          email: props?.email,
          code: payload.code,
        })
        .then((responce) => {
          let res = responce.data;
          if (res.message) {
            setMessage(res.message, "red-500");
          } else {
            sessionStorage.setItem(
              "loggedin",
              JSON.stringify({
                data: res,
              })
            );
            props?.setModalSetting({
              login: false,
              register: false,
            });
            props?.updateSessionData();
            // setMessage("Password resetted successfully.", "green-500");
            // setPayload(init__payload);
            // props?.onClose();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setMessage("Invalid login.", "red-500");
    }
    e.target.style.pointerEvents = "unset";
    e.target.innerHTML = "Verify";
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
          2FA Authentication
        </span>
        <span className="text-center mt-2">
          Please enter code from your Google authenticator.
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div className="space-y-2 md:space-y-3 w-full md:w-3/5">
          <InputBox
            placeholder={"6 Digits Code"}
            type="text"
            value={payload.code}
            onChange={changePayload}
            name="code"
          />
          <div className="mt-2"></div>
          <button
            onClick={verify}
            className="w-full text-white tracking-wider bg-black text-sm px-5 py-2.5 text-center"
          >
            Verify
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

export default VerifyOTP;
