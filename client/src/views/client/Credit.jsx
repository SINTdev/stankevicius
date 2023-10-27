import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  CONSTANT,
  USER_DASHBOARD_MENU,
  setMessage,
  smoothScrollDown,
} from "../../CONSTANT";
import InputBox from "../../components/InputBox";
import Modal from "../../components/Modal";
import UserData from "../../contexts/UserData";
import DashboardOptions from "../../components/client/DashboardOptions";
import ModalWrapper from "../../components/ModalWrapper";
import ProfileForm from "../../components/client/ProfileForm";
import InvoiceCard from "../../components/client/InvoiceCard";
import ModalHandler from "../../layout/ModalHandler";
import CheckoutCredit from "../../components/client/CheckoutCredit";

export default function Credit(props) {
  const { session, setSession, updateSessionData, setStaticMessage } =
    useContext(UserData);
  const location = useLocation();

  const [modal, setModal] = useState(true);
  const [filter, setFilter] = useState("buy");

  useEffect(() => {
    smoothScrollDown();
  }, []);

  const [isBuy, setIsBuy] = useState(false);
  const [resp, setResp] = useState({
    status: "",
    value: "",
    amount: 0,
  });

  useEffect(() => {
    smoothScrollDown();

    // Extract query parameters from the URL
    let searchParams = new URLSearchParams(location.search);
    let entryParam = searchParams.get("entry");
    let amountParam = searchParams.get("amount");
    let cancelledParam = searchParams.get("cancelled");

    if (entryParam && amountParam) {
      setIsBuy(true);
      setResp({
        status: "success",
        value: entryParam,
        amount: amountParam,
      });
    } else if (cancelledParam) {
      setIsBuy(true);
      setResp({
        status: "cancel",
        value: cancelledParam,
        amount: 0,
      });
    }
  }, [location]);

  const [records, setRecords] = useState([]);

  const getRecords = async () => {
    await axios
      .get(CONSTANT.server + `api/credits/${session?.personal?.id}`)
      .then((responce) => {
        setRecords(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (session.isLoggedIn && session.isLoaded) {
      getRecords();
    }
  }, [session]);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-0 md:p-4">
        <DashboardOptions name={session?.personal?.fullName} />
        <ModalWrapper
          isOpen={isBuy}
          onClose={() => {
            setIsBuy(false);
          }}
        >
          <CheckoutCredit
            email={session?.personal?.email}
            user_identifier={session?.personal?.id}
            resp={resp}
            setStaticMessage={setStaticMessage}
            onClose={() => {
              setIsBuy(false);
              setResp({
                status: "",
                value: "",
                amount: 0,
              });
              getRecords();
            }}
            updateSessionData={updateSessionData}
          />
        </ModalWrapper>
        {/* Content down */}
        {/* Desktop View Category Filter */}
        <div className="hidden py-2 border-t border-b border-gray-300 lg:flex items-center justify-start space-x-2 font-bold mt-7 mb-3 overflow-x-auto">
          {[
            {
              id: "buy",
              name: "Buy Credit",
            },
            {
              id: "history",
              name: "Purchase History",
            },
          ].map((category, one) => {
            return (
              <p
                className={`${
                  filter === category.id && "bg-gray-200"
                } py-2 px-3 hover:bg-gray-200 text-[18px] transition-all duration-300 ease-in-out cursor-pointer`}
                onClick={() => {
                  setFilter(category.id);
                }}
              >
                {category.name}
              </p>
            );
          })}
        </div>

        <InputBox
          placeholder={"Products"}
          className="lg:hidden mt-3"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          name="products"
          select={true}
          removeDefaultFirst={true}
          options={[
            {
              id: "buy",
              name: "Buy Credit",
            },
            {
              id: "history",
              name: "Purchase History",
            },
          ]}
        />

        <div className="mt-2">
          {filter === "buy" && (
            <div className="flex flex-col space-y-10">
              <span className="text-lg _font-bold">
                Your current Advertising Credit is: {session?.personal?.credits}
              </span>
              <span className="flex flex-row space-x-2 items-center">
                <button
                  onClick={() => {
                    setIsBuy(true);
                  }}
                  className="w-fit text-white border border-black bg-black text-sm px-5 py-2.5 text-center"
                >
                  Buy Advertising Credits
                </button>
              </span>

              <div className="flex flex-col space-y-4 w-full md:max-w-[65%]">
                <span>
                  *Note the price of 1 Advertising Credit is equivalent to 1
                  U.S. Dollar. You can buy Advertising Credits with your credit
                  card. To buy Advertising Credits against invoice please
                  contact support.
                </span>
                <div className="w-full text-left text-lg _font-bold leading-tight tracking-tight text-black">
                  What can you do with Advertising Credits?
                </div>
                <span>
                  You can promote your company’s website within your trade,
                  promote your trade on Trade Quote bar, and promote your trade
                  to all subscribers. By promoting your trade you get exposed to
                  more visibility and it increase your chances to connect to the
                  business counter-party
                </span>
                <span>
                  Advertising Credits are provided by Stankevicius International
                  Business Services Limited. Read{" "}
                  <span
                    className="text-indigo-700 cursor-pointer"
                    onClick={() => {
                      setStaticMessage({
                        show: true,
                        message: (
                          <div>
                            You can use our services in a variety of ways to
                            manage your privacy.<div className="py-2"></div> For
                            example, you can sign up for a Google Account if you
                            want to create and manage content like emails and
                            photos, or see more relevant search results.
                            <div className="py-2"></div> And you can use many
                            Google services when you’re signed out or without
                            creating an account at all, like searching on Google
                            or watching YouTube videos. You can also choose to
                            browse the web in a private mode, like Chrome
                            Incognito mode. And across our services, you can
                            adjust your privacy settings to control what we
                            collect and how your information is used.{" "}
                            <div className="py-2"></div>To help explain things
                            as clearly as possible, we’ve added examples,
                            explanatory videos, and definitions for key terms.
                            And if you have any questions about this Privacy
                            Policy, you can contact us. When you’re not signed
                            in to a Google Account, we store the information we
                            collect with unique identifiers tied to the browser,
                            application, or device you’re using. This allows us
                            to do things like maintain your preferences across
                            browsing sessions, such as your preferred language
                            or whether to show you more relevant search results
                            or ads based on your activity.
                          </div>
                        ),
                        isInfo: true,
                        onAgree: () => {},
                      });
                    }}
                  >
                    Terms of Use and Purchase Policy of Advertising Credits
                  </span>{" "}
                  before purchasing. Read{" "}
                  <span
                    className="text-indigo-700 cursor-pointer"
                    onClick={() => {
                      setStaticMessage({
                        show: true,
                        message: (
                          <div>
                            You can use our services in a variety of ways to
                            manage your privacy.<div className="py-2"></div> For
                            example, you can sign up for a Google Account if you
                            want to create and manage content like emails and
                            photos, or see more relevant search results.
                            <div className="py-2"></div> And you can use many
                            Google services when you’re signed out or without
                            creating an account at all, like searching on Google
                            or watching YouTube videos. You can also choose to
                            browse the web in a private mode, like Chrome
                            Incognito mode. And across our services, you can
                            adjust your privacy settings to control what we
                            collect and how your information is used.{" "}
                            <div className="py-2"></div>To help explain things
                            as clearly as possible, we’ve added examples,
                            explanatory videos, and definitions for key terms.
                            And if you have any questions about this Privacy
                            Policy, you can contact us. When you’re not signed
                            in to a Google Account, we store the information we
                            collect with unique identifiers tied to the browser,
                            application, or device you’re using. This allows us
                            to do things like maintain your preferences across
                            browsing sessions, such as your preferred language
                            or whether to show you more relevant search results
                            or ads based on your activity.
                          </div>
                        ),
                        isInfo: true,
                        onAgree: () => {},
                      });
                    }}
                  >
                    Advertising Liabilities, Guidelines and Policy
                  </span>{" "}
                  before promoting your trades.
                </span>
              </div>
            </div>
          )}
          {filter === "history" && (
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5">
              {records?.map((record, index) => {
                return <InvoiceCard key={index} data={record} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
