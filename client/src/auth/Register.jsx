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

  const register = async (e) => {
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
                })
                .then((responce) => {
                  let res = responce.data;
                  if (res.message) {
                    setMessage(getErrorMessage(res.message), "red-500");
                    // setMessage(res.message, "red-500");
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
              setMessage("Please enter valid number.", "red-500");
            }
          } else {
            setMessage("Please enter valid number.", "red-500");
          }
        } else {
          setMessage("Please fill all fields.", "red-500");
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
          <PhoneInput
            international
            value={value}
            onChange={setValue}
            placeholder="Phone Number"
            className="__PhoneInputInput p-3 text-sm text-gray-900 border-2 border-gray-300  hover:bg-gray-50 outline-none"
          />
          {/* <InputBox
            placeholder={"Select country code"}
            value={payload.countryCode}
            onChange={changePayload}
            name="countryCode"
            select={true}
            options={codes.map((a) => {
              return {
                id: a.countryCodes[0],
                name: a.country,
              };
            })}
          />
          <InputBox
            placeholder={"Phone Number"}
            value={payload.phoneNumber}
            onChange={changePayload}
            name="phoneNumber"
            type="number"
          /> */}
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
          <div className="mt-2"></div>
          <button
            onClick={register}
            className="w-full text-white tracking-wider bg-black text-sm px-5 py-2.5 text-center"
          >
            Create Account
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
