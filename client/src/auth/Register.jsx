import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  CONSTANT,
  setMessage,
  resetMessage,
  checkLoginFromLogin,
  capitalizeFirstLetter,
} from "../CONSTANT";
import InputBox from "../components/InputBox";
import codes from "country-calling-code";
import PhoneInput, {
  isPossiblePhoneNumber,
  formatPhoneNumber,
  formatPhoneNumberIntl,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Register = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (checkLoginFromLogin()) {
      navigate("/");
    }
  }, []);

  const preValidate = () => {
    resetMessage();
    if (
      payload.email !== "" &&
      /^\w+([\.-]?\w+)*@[\w-]+(\.\w+)+$/.test(payload.email)
    ) {
      if (payload.password !== "") {
        if (payload.password.length >= 8) {
          if (payload.fullName !== "") {
            return true;
          } else {
            setMessage("Please enter your full name.", "red-500");
          }
        } else {
          setMessage(
            "Please make sure your entered password is at least 8 characters long.",
            "red-500"
          );
        }
      } else {
        setMessage("Please enter password.", "red-500");
      }
    } else {
      setMessage("Please enter valid email.", "red-500");
    }
    return false;
  };

  const register = async (e) => {
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
        if (payload.password.length >= 8) {
          if (payload.fullName !== "") {
            if (value !== "") {
              if (isPossiblePhoneNumber(value)) {
                await axios
                  .post(CONSTANT.server + "authentication/user", {
                    ...payload,
                    countryCode:
                      formatPhoneNumberIntl(value)?.split(" ")[0] ?? "",
                    phoneNumber:
                      formatPhoneNumber(value)?.split(" ").join("") ?? "",
                    client_url: CONSTANT.client,
                  })
                  .then((responce) => {
                    let res = responce.data;
                    if (res.message) {
                      setMessage(getErrorMessage(res.message), "red-500");
                      // setMessage(res.message, "red-500");
                    } else {
                      setPayload(init__payload);
                      setMessage(
                        "Account created, please verify your email. Check mail.",
                        "green-500"
                      );
                      // sessionStorage.setItem(
                      //   "loggedin",
                      //   JSON.stringify({
                      //     data: res,
                      //   })
                      // );
                      setTimeout(() => {
                        props?.setModalSetting({
                          login: false,
                          register: false,
                        });
                      }, 5000);
                      // props?.updateSessionData();
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              } else {
                setMessage("Please enter valid number.", "red-500");
              }
            } else {
              setMessage("Please enter valid number.", "red-500");
            }
          } else {
            setMessage("Please fill all fields.", "red-500");
          }
        } else {
          setMessage(
            "Please make sure your entered password is at least 8 characters long.",
            "red-500"
          );
        }
      } else {
        setMessage("Please enter password.", "red-500");
      }
    } else {
      setMessage("Please enter valid email.", "red-500");
    }
    e.target.style.pointerEvents = "unset";
    e.target.innerHTML = "Create Account";
  };

  const init__payload = {
    email: "",
    username: "",
    fullName: "",
    countryCode: "",
    phoneNumber: "",
    password: "",
    companyName: "",
    companyURL: "",
    offer: false,
  };

  const [payload, setPayload] = useState(init__payload);
  const changePayload = (e) => {
    setPayload({
      ...payload,
      [e.target.name]:
        e.target.name === "companyURL" && payload.companyURL.length === 0
          ? `https://${e.target.value}`
          : e.target.value,
    });
  };

  const getErrorMessage = (message) => {
    let toReturn = "";
    for (const key in message) {
      toReturn += `[${capitalizeFirstLetter(key.split("_").join(" "))}]: ${
        message[key][0]
      }\n`;
    }
    return toReturn;
  };

  const [value, setValue] = useState("");

  const [page, setPage] = useState(0);

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
          Create an account
        </span>
        <span className="text-center mt-2">
          Please create an account to log in.
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div className="space-y-2 md:space-y-3 w-full md:w-3/5">
          {/* {page === 0 && (
            <div className="space-y-2 md:space-y-3">
              <InputBox
                placeholder={"Name"}
                value={payload.fullName}
                onChange={changePayload}
                name="fullName"
              />
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
            </div>
          )} */}

          <div
            className={`space-y-2 md:space-y-3 transition-all duration-300 ease-in-out page0-animated-div ${
              page === 0 ? "" : "leave_div"
            }`}
          >
            <InputBox
              placeholder={"Name"}
              value={payload.fullName}
              onChange={changePayload}
              name="fullName"
            />
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
          </div>

          <div
            className={`space-y-2 md:space-y-3 delay-1000 transition-all duration-300 ease-in-out page1-animated-div ${
              page === 1 ? "come_div" : ""
            }`}
          >
            <PhoneInput
              international
              value={value}
              onChange={setValue}
              placeholder="Phone Number"
              className="__PhoneInputInput p-3 text-sm text-gray-900 border-2 border-gray-300  hover:bg-gray-50 outline-none"
            />
            <InputBox
              placeholder={"Company Name"}
              value={payload.companyName}
              onChange={changePayload}
              name="companyName"
            />
            <InputBox
              placeholder={"Company URL"}
              value={payload.companyURL}
              onChange={changePayload}
              name="companyURL"
            />
            <div className="flex items-center __CHECK_REG__ space-x-2">
              <span className="flex items-center">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  checked={payload.offer}
                  onChange={(e) => {
                    setPayload({
                      ...payload,
                      offer: e.target.checked,
                    });
                  }}
                  className="cursor-pointer text-black bg-white border-gray-300 hover:bg-gray-50 focus:ring-0 dark:focus:ring-0 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                />
              </span>
              <label
                htmlFor="link-checkbox"
                className="tracking-normal text-gray-500 text-sm font-medium"
              >
                Stankevicius may send me offers and promotions.
              </label>
            </div>
            <div className="flex items-center __CHECK_REG__ space-x-2">
              <label
                htmlFor="privacy-checkbox"
                className="tracking-normal text-gray-500 text-sm font-medium"
              >
                By submitting my information, I agree to the{" "}
                <a href="#" className="text-black underline cursor-pointer">
                  Privacy Policy
                </a>
                {" and "}
                <a href="#" className="text-black underline cursor-pointer">
                  Terms of Service
                </a>
                .
              </label>
            </div>
          </div>
          <div className="mt-2"></div>
          <button
            onClick={
              page <= 0
                ? () => {
                    if (preValidate()) {
                      setPage((old) => {
                        return old + 1;
                      });
                    }
                  }
                : register
            }
            className={`w-full flex flex-row items-center justify-center text-white tracking-wider bg-black text-sm px-5 py-2.5 text-center`}
          >
            {page <= 0 ? "Next" : "Create Account"}
            {page <= 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                className="w-4 h-4 ml-2 stroke-white"
              >
                <g id="Right-2" data-name="Right">
                  <polygon
                    points="17.5 5.999 16.793 6.706 22.086 11.999 1 11.999 1 12.999 22.086 12.999 16.792 18.294 17.499 19.001 24 12.499 17.5 5.999"
                    style={{
                      fill: "white",
                    }}
                  />
                </g>
              </svg>
            )}
          </button>
          <div className="flex flex-row justify-between">
            <span className="text-xs">
              Already have an account?{" "}
              <span
                onClick={() => {
                  props?.setModalSetting({
                    login: true,
                    register: false,
                  });
                }}
                className="text-xs underline font-medium cursor-pointer"
              >
                Login.
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

export default Register;
