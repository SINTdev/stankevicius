import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import UserData from "../contexts/UserData";
import Navbar from "../components/Navbar";
import { checkLoginFromNonLogin, CONSTANT } from "../CONSTANT";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import AccountMenu from "../components/AccountMenu";
import ModalHandler from "./ModalHandler";
import axios from "axios";
import SearchMenu from "../components/SearchMenu";
import InfoModal from "../components/InfoModal";
export default function Layout(props) {
  let navigate = useNavigate();
  // ------------------
  // SESSION - END
  // ------------------
  let __init_session = {
    personal: {
      email: "",
      fullName: "",
      countryCode: "",
      phoneNumber: "",
      companyName: "",
      companyURL: "",
      is_staff: false,
      offer: false,
      is2FA: false,
    },
    isLoggedIn: false,
    isLoaded: false,
  };
  const [session, setSession] = useState(__init_session);

  useEffect(() => {
    updateSessionData();
  }, []);

  const updateSessionData = () => {
    let sessionData = JSON.parse(sessionStorage.getItem("loggedin"));
    if (sessionData) {
      setSession({
        ...__init_session,
        personal: sessionData.data,
        isLoggedIn: true,
        isLoaded: true,
      });
    } else {
      setSession({
        ...session,
        isLoaded: true,
      });
    }
  };

  // ------------------
  // SESSION - END
  // ------------------
  // useEffect(() => {
  //   if (checkLoginFromNonLogin()) {
  //     navigate("/login");
  //   }
  // }, [session]);

  const logout = async () => {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("refresh_token");
    sessionStorage.removeItem("loggedin");
    setSession({
      ...session,
      personal: __init_session.personal,
      isLoggedIn: false,
    });
    props?.setIsAccountMenuOpen(false);
    navigate("/");
  };

  const INIT_MODAL = {
    profile: false,
    security: false,
    category: false,
    otp: false,
  };
  const [globalModals, setGlobalModals] = useState(INIT_MODAL);

  const configureModal = (name, val = true) => {
    setGlobalModals({
      ...globalModals,
      [name]: val,
    });
  };

  const resetGlobalModal = () => {
    setGlobalModals(INIT_MODAL);
  };

  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    await axios
      .post(CONSTANT.server + "api/options", {})
      .then((responce) => {
        setCategories(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [pushProductChange, setPushProductChange] = useState(false);

  const changePushProductChange = () => {
    setPushProductChange(true);
    setTimeout(() => {
      setPushProductChange(false);
    }, 1000);
  };

  let __INIT__STATIC__MESSAGE__ = {
    show: false,
    message: "",
    heading: "",
    isInfo: true,
    onAgree: () => {},
  };
  const [staticMessage, setStaticMessage] = useState(__INIT__STATIC__MESSAGE__);

  const resetStaticMessage = () => {
    setStaticMessage(__INIT__STATIC__MESSAGE__);
  };

  const value = {
    session,
    setSession,
    updateSessionData,
    configureModal,
    globalModals,
    fetchCategories,
    categories,
    changePushProductChange,
    pushProductChange,
    staticMessage,
    setStaticMessage,
    resetStaticMessage,
  };

  const location = useLocation();

  const resetPopups = () => {
    props?.setIsMenuOpen(false);
    props?.setIsAccountMenuOpen(false);
    let searchParams = new URLSearchParams(location.search);
    let footerSearch = searchParams.get("footerSearch");
    let query = searchParams.get("query");
    if (footerSearch && query) {
      props?.setIsSearchOpen(true);
    } else {
      props?.setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    let searchParams = new URLSearchParams(location.search);
    let footerSearch = searchParams.get("footerSearch");
    let query = searchParams.get("query");
    if (footerSearch && query) {
      props?.setIsSearchOpen(true);
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname === "/") {
      resetPopups();
    }
    if (props?.menu && props?.novideo) {
      let scrollTarget = 0; // 5rem * 16px per rem
      window.scrollTo({
        top: scrollTarget,
        behavior: "instant",
      });
    } else if (props?.menu) {
      let scrollTarget = 25 * 16; // 5rem * 16px per rem
      window.scrollTo({
        top: scrollTarget,
        behavior: "instant",
      });
    }
  }, [location.pathname]);

  return (
    <>
      <UserData.Provider value={value}>
        <InfoModal {...staticMessage} onClose={resetStaticMessage} />
        <ModalHandler
          config={globalModals}
          setter={configureModal}
          reset={resetGlobalModal}
          session={session}
          updateSessionData={updateSessionData}
          fetchCategories={fetchCategories}
        />
        <Navbar
          isLoggedIn={session.isLoggedIn}
          __init_session={__init_session}
          setSession={setSession}
          updateSessionData={updateSessionData}
          session={session}
          resetPopups={resetPopups}
          {...props}
        />
        <div
          className={`${props?.menu ? "mx-0" : "mx-4 lg:mx-10"} ${
            !props?.novideo && "mt-24"
          }`}
        >
          {props.children}
        </div>
        {props?.isMenuOpen && <Menu setIsMenuOpen={props?.setIsMenuOpen} />}
        {props?.isAccountMenuOpen && session?.isLoggedIn && (
          <AccountMenu
            setIsAccountMenuOpen={props?.setIsAccountMenuOpen}
            session={session}
            logout={logout}
            setter={configureModal}
          />
        )}
        {/* {props?.isSearchOpen && <SearchMenu />} */}
        <SearchMenu
          isSearchOpen={props?.isSearchOpen}
          setIsSearchOpen={props?.setIsSearchOpen}
          location={location}
        />
        {!props?.isMenuOpen && <Footer />}
      </UserData.Provider>
    </>
  );
}
