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

const Reset = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (checkLoginFromLogin()) {
      navigate("/");
    }
  }, []);

  const init__payload = {
    password: "",
    c_password: "",
  };
  const [payload, setPayload] = useState(init__payload);
  const changePayload = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };
  const reset = async (e) => {
    e.target.style.pointerEvents = "none";
    e.target.innerHTML =
      '<div className="spinner-border custom-spin" role="status"><span className="visually-hidden">Loading...</span></div>';
    e.preventDefault();
    resetMessage();
    if (payload.password !== "" && payload.password === payload.c_password) {
      if (payload.password.length >= 8) {
        await axios
          .put(CONSTANT.server + "authentication/reset", {
            token: props?.token,
            password: payload.password,
          })
          .then((responce) => {
            let res = responce.data;
            if (res.message) {
              setMessage(res.message, "red-500");
              props?.setOpenReset(false);
              navigate("/");
            } else {
              setMessage("Password resetted successfully.", "green-500");
              setPayload(init__payload);
              props?.onClose();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setMessage(
          "Password should be equal or greater than 8 characters..",
          "red-500"
        );
      }
    } else {
      setMessage("Please enter valid password.", "red-500");
    }
    e.target.style.pointerEvents = "unset";
    e.target.innerHTML = "Reset";
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
          Change Password
        </span>
        <span className="text-center mt-2">Please enter your password.</span>
      </div>
      <div className="flex justify-center items-center">
        <div className="space-y-2 md:space-y-3 w-full md:w-3/5">
          <InputBox
            placeholder={"Password"}
            type="password"
            value={payload.password}
            onChange={changePayload}
            name="password"
          />
          <InputBox
            placeholder={"Confirm Password"}
            type="password"
            value={payload.c_password}
            onChange={changePayload}
            name="c_password"
          />
          <div className="mt-2"></div>
          <button
            onClick={reset}
            className="w-full text-white tracking-wider bg-black text-sm px-5 py-2.5 text-center"
          >
            Reset
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

export default Reset;
