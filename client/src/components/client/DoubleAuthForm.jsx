import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  CONSTANT,
  setMessage,
  resetMessage,
  checkLoginFromLogin,
  capitalizeFirstLetter,
} from "../../CONSTANT";
import InputBox from "../../components/InputBox";
import codes from "country-calling-code";
import PhoneInput, {
  isPossiblePhoneNumber,
  formatPhoneNumber,
  formatPhoneNumberIntl,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";

const DoubleAuthForm = (props) => {
  const navigate = useNavigate();

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
      if (payload.password !== "" && payload.password.length >= 8) {
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
        <span className="text-base text-center _font-bold leading-tight tracking-tight text-black md:text-lg">
          Security settings
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div className="space-y-2 md:space-y-3 w-full">
          <span className="text-base text-center _font-bold leading-tight tracking-tight text-black md:text-lg">
            [Setup double authentication, Google]
          </span>
          {/* <div className="pt-5">
            <div className="text-left md:text-sm _font-bold leading-tight tracking-tight text-black">
              Subscribe to offers and promotions
            </div>
            <div className="mt-2 flex md:flex-row md:space-x-2 space-x-0 md:space-y-0 space-y-2 flex-col w-full">
              <InputBox
                placeholder={"Select [Yes/No]"}
                value={payload?.offer}
                onChange={changePayload}
                name="offer"
                select={true}
                options={[
                  {
                    id: true,
                    name: "Yes",
                  },
                  {
                    id: false,
                    name: "No",
                  },
                ]}
                className="md:w-1/3 w-full"
              />
              <div className="md:w-1/3 w-full"></div>
              <div className="md:w-1/3 w-full"></div>
            </div>
          </div> */}
          <div className="mt-2"></div>
          {/* Buttons */}
          <div className="pt-5 flex justify-end space-x-4">
            <button
              className="bg-black w-[7rem] border border-black text-white px-4 py-2"
              onClick={() => {}}
            >
              Save
            </button>
            <button
              className="bg-white text-black border border-black w-[7rem] px-4 py-2"
              onClick={() => {}}
            >
              Cancel
            </button>
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

export default DoubleAuthForm;
