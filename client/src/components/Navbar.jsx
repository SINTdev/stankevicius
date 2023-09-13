import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ModalWrapper from "./ModalWrapper";
import Login from "./../auth/Login";
import Register from "./../auth/Register";
import { useParams } from "react-router-dom";
import Reset from "../auth/Reset";
import Verify from "../auth/Verify";

export default function Navbar(props) {
  let navigate = useNavigate();
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);
  const { token: token, emailToken: emailToken } = useParams();

  const [openReset, setOpenReset] = useState(false);
  const [openVerify, setOpenVerify] = useState(false);

  useEffect(() => {
    if (token) {
      setOpenReset(true);
    }
  }, [token]);

  useEffect(() => {
    if (emailToken) {
      setOpenVerify(true);
    }
  }, [emailToken]);

  const __INIT__ = {
    login: false,
    register: false,
  };

  const [modalSetting, setModalSetting] = useState(__INIT__);
  return (
    <div className="">
      <ModalWrapper
        isOpen={openVerify}
        onClose={() => {
          setOpenVerify(false);
          setModalSetting({
            ...modalSetting,
            login: true,
          });
        }}
      >
        <Verify
          emailToken={emailToken}
          setOpenVerify={setOpenVerify}
          onClose={() => {
            setOpenVerify(false);
            setModalSetting({
              ...modalSetting,
              login: true,
            });
          }}
        />
      </ModalWrapper>
      <ModalWrapper
        isOpen={openReset}
        onClose={() => {
          setOpenReset(false);
          setModalSetting({
            ...modalSetting,
            login: true,
          });
        }}
      >
        <Reset
          token={token}
          setOpenReset={setOpenReset}
          onClose={() => {
            setOpenReset(false);
            setModalSetting({
              ...modalSetting,
              login: true,
            });
          }}
        />
      </ModalWrapper>
      {!props?.isLoggedIn && (
        <>
          <ModalWrapper
            isOpen={modalSetting.login}
            onClose={() => {
              setModalSetting(__INIT__);
            }}
          >
            <Login
              setModalSetting={setModalSetting}
              updateSessionData={props?.updateSessionData}
            />
          </ModalWrapper>
          <ModalWrapper
            isOpen={modalSetting.register}
            onClose={() => {
              setModalSetting(__INIT__);
            }}
          >
            <Register
              setModalSetting={setModalSetting}
              updateSessionData={props?.updateSessionData}
            />
          </ModalWrapper>
        </>
      )}
      <nav className="fixed min-h-[4.5rem] flex items-center w-full bg-white border-gray-200 shadow-lg z-30">
        <div className="max-w-screen-xl w-full flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img
              src="/assets/logo.png"
              className="h-5 mr-3 ml-2"
              alt="Stankevicius Logo"
            />
          </Link>
          <span className="flex justify-center items-center">
            {props?.isLoggedIn ? (
              <li
                className={`md:hidden relative h-full flex items-center cursor-pointer mr-1`}
                onClick={() => {
                  // navigate(
                  //   `/${
                  //     props?.session?.personal?.is_staff
                  //       ? "corporate"
                  //       : "client"
                  //   }`
                  // );
                  props.setIsAccountMenuOpen(!props.isAccountMenuOpen);
                  props.setIsMenuOpen(false);
                }}
              >
                <span
                  className={`${
                    props.isAccountMenuOpen && ""
                  } absolute -translate-x-2 min-h-[4.5rem] w-[calc(100%+20px)] h-full -z-10`}
                ></span>
                <span className="select-none text-sm mr-1">
                  Account |{" "}
                  <span className="font-bold">
                    {props?.session?.personal?.is_staff
                      ? "Corporate"
                      : "Client"}
                  </span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 330 330"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-[9px] h-[9px] ${
                    props?.isAccountMenuOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                </svg>
              </li>
            ) : (
              <>
                <span
                  onClick={() => {
                    setModalSetting({
                      ...modalSetting,
                      login: true,
                      register: false,
                    });
                  }}
                  className={`md:hidden transition-all duration-300 ease-in-out ${
                    modalSetting.login && "bg-gray-100"
                  } hover:bg-gray-100 px-3 h-full relative flex items-center space-x-1 cursor-pointer`}
                >
                  <span className="cursor-pointer text-sm">
                    Login/Create Account
                  </span>
                </span>
              </>
            )}
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500  md:hidden"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => {
                setIsNavbarOpen(!isNavbarOpen);
                props.setIsMenuOpen(!props.isMenuOpen);
                props.setIsAccountMenuOpen(false);
              }}
            >
              <span className="sr-only">Open main menu</span>
              {isNavbarOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    d="M20 20L4 4.00003M20 4L4.00002 20"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </span>
          <div
            className={`${
              isNavbarOpen ? "" : " hidden"
            } w-full hidden md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="h-[4.5rem] font-medium flex flex-col p-4 md:p-0 mt-4 border items-center  space-y-4 md:space-y-0 border-gray-100  bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-transparent 0 text-sm">
              <li className="flex items-center space-x-1 cursor-pointer mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>

                <span className="">Search</span>
              </li>

              {props?.isLoggedIn ? (
                <li
                  className={`transition-all duration-300 ease-in-out ${
                    props.isAccountMenuOpen && "bg-gray-100"
                  } hover:bg-gray-100 px-3 h-full relative flex items-center space-x-1 cursor-pointer`}
                  onClick={() => {
                    // navigate(
                    //   `/${
                    //     props?.session?.personal?.is_staff
                    //       ? "corporate"
                    //       : "client"
                    //   }`
                    // );
                    props.setIsAccountMenuOpen(!props.isAccountMenuOpen);
                    props.setIsMenuOpen(false);
                  }}
                >
                  <span className="select-none mr-1">
                    Account |{" "}
                    <span className="font-bold">
                      {props?.session?.personal?.is_staff
                        ? "Corporate"
                        : "Client"}
                    </span>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 330 330"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-[9px] h-[9px] ${
                      props?.isAccountMenuOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                  </svg>
                </li>
              ) : (
                <>
                  <span
                    onClick={() => {
                      setModalSetting({
                        ...modalSetting,
                        login: true,
                        register: false,
                      });
                    }}
                    className={`transition-all duration-300 ease-in-out ${
                      modalSetting.login && "bg-gray-100"
                    } hover:bg-gray-100 px-3 h-full relative flex items-center space-x-1 cursor-pointer`}
                  >
                    <li className="cursor-pointer">Login/Create Account</li>
                  </span>
                </>
              )}
              <li
                className={`transition-all duration-300 ease-in-out ${
                  props.isMenuOpen && "bg-gray-100"
                } hover:bg-gray-100 px-3 h-full flex items-center space-x-1 cursor-pointer`}
                onClick={() => {
                  props.setIsMenuOpen(!props.isMenuOpen);
                  props.setIsAccountMenuOpen(false);
                }}
              >
                {props?.isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      d="M20 20L4 4.00003M20 4L4.00002 20"
                      stroke="#000000"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}

                <span className="select-none">Menu</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="background_stripe"></div>
    </div>
  );
}
