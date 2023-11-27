import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  CONSTANT,
  setMessage,
  resetMessage,
  checkLoginFromNonLogin,
  smoothScrollDown,
  getPageMargins,
} from "../CONSTANT";
import InputBox from "../components/InputBox";

import { Tooltip as TP } from "react-tooltip";
import Tooltip from "../components/Tooltip";
import axios from "axios";
import UserData from "../contexts/UserData";
import Menu from "../components/Menu";
import DashboardOptions from "../components/client/DashboardOptions";
import TextEditor from "../components/TextEditor";
import Modal from "../components/Modal";
import SavingOptions from "../components/SavingOptions";

export default function NewsDetail(props) {
  const { session, setSession, setStaticMessage } = useContext(UserData);
  const { slug: slug } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    smoothScrollDown();
  }, []);

  const init__payload = {
    title: "",
    content: "",
    timestamp: "",
    category: "",
    user: "",
    author: "",
  };
  const [payload, setPayload] = useState(init__payload);

  const component = useRef();

  const fetchNews = async () => {
    await axios
      .get(CONSTANT.server + `api/newsreleases/${slug}/-1`)
      .then((responce) => {
        if (responce?.data?.message) {
          navigate(-1);
        }
        setTimeout(() => {
          setPayload({
            ...responce?.data,
          });
          setLoadN(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (checkLoginFromNonLogin()) {
      navigate("/");
    }
  }, [session]);
  useEffect(() => {
    if (slug) {
      fetchNews();
    }
  }, [slug, session]);

  const formatDate = (date) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(date).toLocaleDateString("en-GB", options);
  };

  const [loadN, setLoadN] = useState(true);

  const LOADER = () => {
    return (
      <div
        className="mt-10 flex justify-center items-center flex-col"
        id="main_form_div"
      >
        <div className="w-full">
          <div className="w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
            <span class="mt-2 mb-2 animate-pulse block w-full h-8 bg-gray-200 rounded-full dark:bg-gray-700"></span>
            <span class="mt-2 mb-2 animate-pulse block w-1/2 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></span>
          </div>
          <span className="mt-4 block text-sm tracking-normal font-thin text-gray-500">
            <span class="animate-pulse mt-2 mr-2 inline-block w-20 h-3 bg-gray-200 rounded-full dark:bg-gray-700"></span>
            /
            <span class="animate-pulse mt-2 ml-2 inline-block w-20 h-3 bg-gray-200 rounded-full dark:bg-gray-700"></span>
          </span>
          <span className="block text-sm tracking-normal font-thin text-gray-500">
            Published by{" "}
            <span className="text-black">
              <span class="animate-pulse translate-y-0.5 inline-block w-20 h-3 bg-gray-200 rounded-full dark:bg-gray-700"></span>
            </span>
          </span>
          <div className="py-2"></div>
          <div
            className={`mt-2 leading-6 tracking-normal text-base text-gray-600`}
          >
            <span class="animate-pulse inline-block w-full h-3 bg-gray-200 rounded-full dark:bg-gray-700"></span>
            <span class="animate-pulse inline-block w-full h-3 bg-gray-200 rounded-full dark:bg-gray-700"></span>
            <span class="animate-pulse inline-block w-full h-3 bg-gray-200 rounded-full dark:bg-gray-700"></span>
            <span class="animate-pulse inline-block w-full h-3 bg-gray-200 rounded-full dark:bg-gray-700"></span>
            <span class="animate-pulse inline-block w-full h-3 bg-gray-200 rounded-full dark:bg-gray-700"></span>
          </div>
        </div>
      </div>
    );
  };

  if (props?.isMenuOpen) {
    return <Menu />;
  }
  return (
    <div className="max-w-screen-xl mx-auto p-0 md:p-4">
      {loadN ? (
        <LOADER />
      ) : (
        <div
          className="mt-10 flex justify-center items-center flex-col"
          id="main_form_div"
          ref={component}
        >
          <style>{getPageMargins()}</style>
          <div className="w-full">
            <div className="w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
              {payload?.title}
            </div>
            <span className="mt-4 block text-sm tracking-normal font-thin text-gray-500">
              {payload?.category === "industry"
                ? "Industry Insights (Partner Content)"
                : payload?.category === "company"
                ? "Stankevicius News"
                : "Featured News"}{" "}
              / {formatDate(payload?.timestamp)}
            </span>
            <span className="block text-sm tracking-normal font-thin text-gray-500">
              Published by{" "}
              <span className="text-black">
                {payload?.category === "industry"
                  ? payload?.author || payload?.user?.fullName
                  : payload?.category === "company"
                  ? "Admin" || payload?.user?.fullName
                  : payload?.user?.fullName}
              </span>
            </span>
            <div className="py-2"></div>
            <div
              dangerouslySetInnerHTML={{ __html: payload?.content }}
              className={`mt-2 leading-6 tracking-normal text-base text-gray-600`}
            ></div>
          </div>
        </div>
      )}
      <SavingOptions
        className="mt-10"
        desc="Example desc"
        title={payload?.title}
        component={component}
      />
    </div>
  );
}
