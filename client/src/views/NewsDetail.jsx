import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  CONSTANT,
  setMessage,
  resetMessage,
  checkLoginFromNonLogin,
  smoothScrollDown,
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

  const fetchNews = async () => {
    await axios
      .get(CONSTANT.server + `api/newsreleases/${slug}/-1`)
      .then((responce) => {
        if (responce?.data?.message) {
          navigate(-1);
        }
        setPayload({
          ...responce?.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (slug && session?.isLoaded && session?.isLoggedIn) {
      fetchNews();
    }
  }, [slug, session]);

  useEffect(() => {
    if (checkLoginFromNonLogin()) {
      navigate("/");
    }
  }, [session]);

  if (props?.isMenuOpen) {
    return <Menu />;
  }

  const formatDate = (date) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(date).toLocaleDateString("en-GB", options);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-0 md:p-4">
      <div
        className="mt-10 flex justify-center items-center flex-col"
        id="main_form_div"
      >
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
    </div>
  );
}
