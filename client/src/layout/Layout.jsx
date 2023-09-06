import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserData from "../contexts/UserData";
import Navbar from "../components/Navbar";
import { checkLoginFromNonLogin } from "../CONSTANT";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import AccountMenu from "../components/AccountMenu";
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

  const value = { session, setSession, updateSessionData };

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
  };

  return (
    <>
      <UserData.Provider value={value}>
        <Navbar
          isLoggedIn={session.isLoggedIn}
          __init_session={__init_session}
          setSession={setSession}
          updateSessionData={updateSessionData}
          session={session}
          {...props}
        />
        <div className="mx-4 lg:mx-10 mt-24">{props.children}</div>
        {props?.isMenuOpen && <Menu />}
        {props?.isAccountMenuOpen && session?.isLoggedIn && (
          <AccountMenu
            setIsAccountMenuOpen={props?.setIsAccountMenuOpen}
            session={session}
            logout={logout}
          />
        )}
        {!props?.isMenuOpen && !props?.isAccountMenuOpen && <Footer />}
      </UserData.Provider>
    </>
  );
}
