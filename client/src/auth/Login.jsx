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

const Login = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (checkLoginFromLogin()) {
      navigate("/");
    }
  }, []);
  const login = async (e) => {
    e.target.style.pointerEvents = "none";
    e.target.innerHTML =
      '<div className="spinner-border custom-spin" role="status"><span className="visually-hidden">Loading...</span></div>';
    e.preventDefault();
    resetMessage();
    if (
      payload.email !== "" &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(payload.email)
    ) {
      if (payload.password !== "") {
        await axios
          .post(CONSTANT.server + "authentication/validate", payload)
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
          Log In
        </span>
        <span className="text-center mt-2">
          Please enter your email to log in.
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div className="space-y-2 md:space-y-3 w-full md:w-3/5">
          <InputBox
            placeholder={"Email"}
            type="email"
            value={payload.email}
            onChange={changePayload}
            name="email"
          />
          <InputBox
            placeholder={"Password"}
            type="password"
            value={payload.password}
            onChange={changePayload}
            name="password"
          />
          <div className="mt-2"></div>
          <button
            onClick={login}
            className="w-full text-white tracking-wider bg-black text-sm px-5 py-2.5 text-center"
          >
            Log In
          </button>
          <div className="flex flex-row justify-between">
            <Link to="#" className="text-xs underline font-medium">
              Forgot Password
            </Link>
            <span className="text-xs">
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
