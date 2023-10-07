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
import VerifyOTP from "./VerifyOTP";

const Login = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (checkLoginFromLogin()) {
      navigate("/");
    }
  }, []);

  const [isReset, setIsReset] = useState(false);
  const [is2FA, setIs2FA] = useState(false);

  const reset = async (e) => {
    e.target.style.pointerEvents = "none";
    e.target.innerHTML =
      '<div className="spinner-border custom-spin" role="status"><span className="visually-hidden">Loading...</span></div>';
    e.preventDefault();
    resetMessage();
    if (
      payload.email !== "" &&
      /^\w+([\.-]?\w+)*@[\w-]+(\.\w+)+$/.test(payload.email)
    ) {
      await axios
        .post(CONSTANT.server + "authentication/reset", {
          identifier: payload.email,
          client_url: CONSTANT.client,
        })
        .then((responce) => {
          let res = responce.data;
          if (res.message) {
            setMessage(res.message, "red-500");
          } else {
            setMessage(
              "Please check your email. Click on the reset link to change your password.",
              "green-500"
            );
            setPayload(init__payload);
            return;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setMessage("Please enter valid email.", "red-500");
    }
    e.target.style.pointerEvents = "unset";
    e.target.innerHTML = "Reset";
  };

  const login = async (e) => {
    e.target.style.pointerEvents = "none";
    e.target.innerHTML =
      '<div className="spinner-border custom-spin" role="status"><span className="visually-hidden">Loading...</span></div>';
    e.preventDefault();
    resetMessage();
    if (
      payload.email !== "" &&
      /^\w+([\.-]?\w+)*@[\w-]+(\.\w+)+$/.test(payload.email)
    ) {
      if (payload.password !== "") {
        await axios
          .post(CONSTANT.server + "authentication/validate", payload)
          .then((responce) => {
            let res = responce.data;
            if (res.message) {
              setMessage(res.message, "red-500");
            } else if (res?.is2FA) {
              setIs2FA(true);
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
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setMessage("Please enter password.", "red-500");
      }
    } else {
      setMessage("Please enter valid email.", "red-500");
    }
    e.target.style.pointerEvents = "unset";
    e.target.innerHTML = "Log In";
  };

  const init__payload = {
    email: "",
    password: "",
  };
  const [payload, setPayload] = useState(init__payload);
  const changePayload = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  if (is2FA) {
    return (
      <VerifyOTP
        email={payload.email}
        setModalSetting={props?.setModalSetting}
        updateSessionData={props?.updateSessionData}
      />
    );
  }

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
          {!isReset ? "Log In" : "Reset"}
        </span>
        <span className="text-center mt-2">
          {!isReset
            ? "Please enter your email to log in."
            : "Please enter your email to receive reset link."}
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div className="space-y-2 md:space-y-3 w-full md:w-full lg:w-[70%] xl:w-3/5">
          <InputBox
            placeholder={"Email"}
            type="email"
            value={payload.email}
            onChange={changePayload}
            name="email"
          />
          {!isReset && (
            <InputBox
              placeholder={"Password"}
              type="password"
              value={payload.password}
              onChange={changePayload}
              name="password"
            />
          )}
          <div className="mt-2"></div>
          <button
            onClick={!isReset ? login : reset}
            className="w-full text-white tracking-wider bg-black text-sm px-5 py-2.5 text-center"
          >
            {!isReset ? "Log In" : "Reset"}
          </button>
          <div className="flex flex-nowrap space-x-3 flex-row justify-between">
            <span
              role="button"
              onClick={() => {
                setIsReset(!isReset);
              }}
              className="text-xs whitespace-nowrap underline font-medium"
            >
              {!isReset ? "Forgot Password" : "Back to Login"}.
            </span>
            <span className="text-xs whitespace-nowrap">
              Don't have an account?{" "}
              <span
                onClick={() => {
                  props?.setModalSetting({
                    login: false,
                    register: true,
                  });
                }}
                className="text-xs underline font-medium cursor-pointer"
              >
                Create one.
              </span>
            </span>
          </div>
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

export default Login;
