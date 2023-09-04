import axios from "axios";
import React, { useEffect, useState } from "react";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isPossiblePhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import {
  CONSTANT,
  capitalizeFirstLetter,
  resetMessage,
  setMessage,
} from "../../CONSTANT";
import InputBox from "../../components/InputBox";

const ProfileForm = (props) => {
  const navigate = useNavigate();

  const update = async (e) => {
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
                .put(CONSTANT.server + `authentication/user/${payload?.id}`, {
                  email: payload?.email,
                  fullName: payload?.fullName,
                  password: payload?.password,
                  companyName: payload?.companyName,
                  companyURL: payload?.companyURL,
                  offer: Boolean(payload?.offer),
                  countryCode:
                    formatPhoneNumberIntl(value)?.split(" ")[0] ?? "",
                  phoneNumber:
                    formatPhoneNumber(value)?.split(" ").join("") ?? "",
                })
                .then((responce) => {
                  let res = responce.data;
                  if (res.message) {
                    // setMessage(getErrorMessage(res.message), "red-500");
                    setMessage(res.message, "red-500");
                  } else {
                    setMessage(
                      "Account updated.",
                      "green-500"
                    );
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
    e.target.innerHTML = "Save";
  };

  const init__payload = {
    email: "",
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
  useEffect(() => {
    setPayload({
      ...props?.data,
      password: "",
    });
    setValue(
      formatPhoneNumberIntl(
        `${props?.data?.countryCode}${props?.data?.phoneNumber}`
      )
    );
  }, [props]);
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex mb-5">
        <span className="text-lg text-center _font-bold leading-tight tracking-tight text-black md:text-2xl">
          Profile settings
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div className="space-y-2 md:space-y-3 w-full">
          <div className="flex md:flex-row md:space-x-2 space-x-0 md:space-y-0 space-y-2 flex-col w-full">
            <InputBox
              placeholder={"Name"}
              value={payload.fullName}
              onChange={changePayload}
              name="fullName"
              className="md:w-1/3 w-full"
            />
            <InputBox
              placeholder={"Email"}
              type="email"
              value={payload.email}
              onChange={changePayload}
              name="email"
              className="md:w-1/3 w-full"
            />{" "}
            <PhoneInput
              international
              value={value}
              onChange={setValue}
              placeholder="Phone Number"
              className="md:w-1/3 w-full __PhoneInputInput p-3 text-sm text-gray-900 border-2 border-gray-300  hover:bg-gray-50 outline-none"
            />
          </div>
          <div className="flex md:flex-row md:space-x-2 space-x-0 md:space-y-0 space-y-2 flex-col w-full">
            <InputBox
              placeholder={"Company Name"}
              value={payload.companyName}
              onChange={changePayload}
              name="companyName"
              className="md:w-1/3 w-full"
            />
            <InputBox
              placeholder={"Company URL"}
              value={payload.companyURL}
              onChange={changePayload}
              name="companyURL"
              className="md:w-1/3 w-full"
            />
            <div className="md:w-1/3 w-full"></div>
          </div>
          <div className="flex md:flex-row md:space-x-2 space-x-0 md:space-y-0 space-y-2 flex-col w-full">
            <InputBox
              placeholder={"Password"}
              type="password"
              value={payload.password}
              onChange={changePayload}
              name="password"
              className="md:w-1/3 w-full"
            />
            <div className="md:w-1/3 w-full"></div>
            <div className="md:w-1/3 w-full"></div>
          </div>

          <div className="pt-5">
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
          </div>

          <div className="mt-2"></div>
          {/* Buttons */}
          <div className="pt-5 flex justify-end space-x-4">
            <button
              className="bg-black w-[7rem] border border-black text-white px-4 py-2"
              onClick={update}
            >
              Save
            </button>
            <button
              className="bg-white text-black border border-black w-[7rem] px-4 py-2"
              onClick={props?.onCancel}
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

export default ProfileForm;
