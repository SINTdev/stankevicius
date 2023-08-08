import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalWrapper from "./ModalWrapper";
import Login from "./../auth/Login";
import Register from "./../auth/Register";

export default function Navbar(props) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  const logout = async () => {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("refresh_token");
    sessionStorage.removeItem("loggedin");
    props?.setSession({
      ...props?.session,
      personal: props?.__init_session.personal,
      isLoggedIn: false,
    });
  };

  const __INIT__ = {
    login: false,
    register: false,
  };

  const [modalSetting, setModalSetting] = useState(__INIT__);

  return (
    <div className="">
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
      <nav className="relative min-h-[4.5rem] flex items-center w-full bg-white border-gray-200 shadow-lg z-30">
        <div className="max-w-screen-xl w-full flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img
              src="/assets/logo.png"
              className="h-6 mr-3"
              alt="Stankevicius Logo"
            />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Stankevicius
            </span> */}
          </Link>
          <span className="flex justify-center items-center space-x-4">
            {/* {props?.isLoggedIn ? (
              <span className="cursor-pointer" onClick={logout}>
                Logout
              </span>
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
                >
                  Login
                </span>
              </>
            )} */}
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500  md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => {
                setIsNavbarOpen(!isNavbarOpen);
                props.setIsMenuOpen(!props.isMenuOpen);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </span>
          <div
            className={`${
              isNavbarOpen ? "" : " hidden"
            } w-full hidden md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border items-center  space-y-4 md:space-y-0 border-gray-100  bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white 0 text-sm">
              <li className="flex items-center space-x-1 cursor-pointer">
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
                <li className="cursor-pointer" onClick={logout}>
                  Logout
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
                  >
                    <li className="cursor-pointer">Login</li>
                  </span>
                  <span
                    onClick={() => {
                      setModalSetting({
                        ...modalSetting,
                        register: true,
                        login: false,
                      });
                    }}
                  >
                    <li className="cursor-pointer">Register</li>
                  </span>
                </>
              )}

              <li
                className="flex items-center space-x-1 cursor-pointer"
                onClick={() => props.setIsMenuOpen(!props.isMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <span className="">Menu</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="background_stripe"></div>
    </div>
  );
}
