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
import codes from "country-calling-code";

const Register = () => {
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
        if (
          payload.fullName !== "" &&
          payload.countryCode !== "" &&
          payload.phoneNumber !== ""
        ) {
          await axios
            .post(CONSTANT.server + "authentication/user", payload)
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
                navigate("/");
              }
            })
            .catch((error) => {
              console.log(error);
            });
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
    e.target.innerHTML = "Register";
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
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white border-2 border-black md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Link to="/">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-black md:text-2xl">
                Novartis
              </h1>
            </Link>
            <div className="space-y-4 md:space-y-6">
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
              <InputBox
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

              <button
                onClick={register}
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register
              </button>
              <div
                className="my-10"
                id="error"
                style={{ display: "none" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
