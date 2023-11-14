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

export default function PublishNewRelease(props) {
  const { session, setSession, setStaticMessage } = useContext(UserData);
  const { id: id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const focusParam = params.get("focus");

    if (focusParam === "update") {
      const mainFormDiv = document.getElementById("main_form_div");
      if (mainFormDiv) {
        const marginFromTop = 4 * 16; // 20rem in pixels (assuming 1rem = 16px)
        const targetPosition =
          mainFormDiv.getBoundingClientRect().top +
          window.scrollY -
          marginFromTop;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  }, []);

  useEffect(() => {
    smoothScrollDown();
  }, []);

  const init__payload = {
    title: "",
    category: session?.personal?.is_staff ? "company" : "industry",
    author: "",
    thumbnail: null,
    content: "",
    accept1: false,
    accept2: false,
  };
  const [payload, setPayload] = useState(init__payload);
  const changePayload = (e) => {
    if (e.target.name === "thumbnail") {
      setPayload({
        ...payload,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setPayload({
        ...payload,
        [e.target.name]: e.target.value,
      });
    }
  };

  const fetchNews = async () => {
    await axios
      .get(CONSTANT.server + `api/newsreleases/${id}/${session?.personal?.id}`)
      .then((responce) => {
        if (responce?.data?.message) {
          navigate("/");
        }
        setPayload({
          ...responce?.data,
          accept1: true,
          accept2: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (id && session?.isLoaded && session?.isLoggedIn) {
      fetchNews();
    }
  }, [id, session]);

  useEffect(() => {
    if (checkLoginFromNonLogin()) {
      navigate("/");
    }
  }, [session]);

  const addNews = async (e) => {
    e.target.style.pointerEvents = "none";
    e.target.innerHTML =
      '<div class="spinner-border custom-spin" role="status"><span class="visually-hidden">Loading...</span></div>';
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("title", payload.title);
      formData.append("category", payload.category);
      formData.append("author", payload.author);
      if (!props?.edit && payload.thumbnail) {
        formData.append("thumbnail", payload.thumbnail);
      }
      if (
        props?.edit &&
        payload.thumbnail &&
        !(typeof payload.thumbnail === "string")
      ) {
        formData.append("thumbnail", payload.thumbnail);
      }
      formData.append("content", payload.content);
      formData.append("user", session?.personal?.id);

      try {
        if (!props?.edit) {
          const response = await axios.post(
            CONSTANT.server + "api/newsreleases",
            formData
          );
          if (response?.data?.message) {
            setMessage(response?.data?.message, "red-500");
          } else {
            setPayload(init__payload);
            setMessage(
              "News added successfully. You will be now redirected to the news page...",
              "green-500"
            );
            setTimeout(() => {
              navigate("/news");
            }, 4000);
          }
        } else {
          const response = await axios.put(
            CONSTANT.server + `api/newsreleases/${payload?.id}`,
            formData
          );
          if (response?.data?.message) {
            setMessage(response?.data?.message, "red-500");
          } else {
            setPayload(init__payload);
            setMessage(
              "News updated successfully. You will be now redirected to the news page...",
              "green-500"
            );
            setTimeout(() => {
              navigate("/news");
            }, 4000);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    e.target.style.pointerEvents = "unset";
    e.target.innerHTML = `${
      !props?.edit ? "Publish to Industry Insights" : "Update Release"
    }`;
  };

  let EMPTY_MODAL = {
    isOpen: false,
    content: "",
    onYes: () => {},
    isCancel: false,
    customAgree: "",
  };

  const [modal, setModal] = useState(EMPTY_MODAL);

  const validate = () => {
    resetMessage();
    if (!payload.title) {
      setMessage("Please enter a title.", "red-500");
      return false;
    }
    if (session?.personal?.is_staff && !payload.category) {
      setMessage("Please select a category.", "red-500");
      return false;
    }
    if (
      session?.personal?.is_staff &&
      payload.category === "industry" &&
      !payload.author
    ) {
      setMessage("Please enter an author.", "red-500");
      return false;
    }
    if (
      session?.personal?.is_staff &&
      payload.category === "featured" &&
      !payload.thumbnail
    ) {
      setMessage("Please add a photo.", "red-500");
      return false;
    }
    if (!payload.content) {
      setMessage("Please add new publication content.", "red-500");
      return false;
    }
    return true;
  };

  if (props?.isMenuOpen) {
    return <Menu />;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-0 md:p-4">
      <Modal
        isOpen={modal.isOpen}
        onClose={() => {
          setModal(EMPTY_MODAL);
        }}
        text={modal.content}
        onYes={modal.onYes}
        isCancel={modal.isCancel}
        customAgree={modal.customAgree}
      />
      <DashboardOptions name={""} />
      <TP id="my-tooltip" className="max-w-sm md:max-w-md z-20" />
      <div
        className="mt-10 flex justify-center items-center flex-col"
        id="main_form_div"
      >
        <div className="w-full">
          <div className="w-full text-left mb-2  text-4xl _font-bold leading-tight tracking-tight text-black">
            {!props?.edit ? "Publish new" : "Update"} release
          </div>
          <div className="w-full text-left  mb-3 text-xl _font-bold leading-tight tracking-tight text-black">
            What is the title of your news release?
          </div>
          <div className="w-full flex flex-col md:flex-row">
            <InputBox
              placeholder={"News title"}
              value={payload.title}
              onChange={changePayload}
              name="title"
              className="my-1 md:w-full md:mx-1"
            />
          </div>
          {session?.personal?.is_staff && (
            <div className="w-full flex flex-col md:flex-row">
              <InputBox
                placeholder={"News Category"}
                value={payload.category}
                onChange={changePayload}
                name="category"
                select={true}
                options={[
                  {
                    id: "industry",
                    name: "Industry Insights (Partner Content)",
                  },
                  {
                    id: "company",
                    name: "Stankevicius Company News",
                  },
                  {
                    id: "featured",
                    name: "Featured News",
                  },
                ]}
                className="my-1 md:w-[calc(25%-8px)] md:mx-1"
              />{" "}
              {payload?.category === "industry" && (
                <InputBox
                  placeholder={"Author"}
                  value={payload.author}
                  onChange={changePayload}
                  name="author"
                  type="text"
                  className="my-1 md:w-[calc(25%-8px)] md:mx-1"
                />
              )}
              {payload?.category === "featured" && (
                <div className="flex items-center justify-center w-full my-1 md:w-[calc(25%-8px)] md:mx-1">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col overflow-hidden h-12 items-center justify-center w-full border-dashed border-2 border-gray-300 hover:bg-gray-50 outline-none cursor-pointer"
                  >
                    <div className="flex flex-row items-center justify-center space-x-3">
                      {payload.thumbnail ? (
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {props?.edit
                            ? payload?.thumbnail?.name || payload?.thumbnail
                            : payload?.thumbnail?.name}
                        </p>
                      ) : (
                        <>
                          <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            <span className="">Upload photo</span>
                          </p>
                        </>
                      )}
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      accept="image/*" // Accept only image files
                      name="thumbnail"
                      className="hidden"
                      onChange={changePayload}
                    />
                  </label>
                </div>
              )}
            </div>
          )}
          <span className="mt-8 block"></span>
          <div className="w-full text-left  mb-3 text-xl _font-bold leading-tight tracking-tight text-black">
            New publication
          </div>
          <div className="w-full flex flex-col md:flex-row">
            <TextEditor onChange={changePayload} content={payload?.content} />
          </div>
          {!props?.edit && (
            <div className="mt-5 w-full flex flex-col">
              <div className="flex items-center __CHECK_REG__ space-x-2">
                <span className="flex items-center">
                  <input
                    id="one-accept"
                    type="checkbox"
                    checked={payload.accept1}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setStaticMessage({
                          show: true,
                          message: (
                            <div>
                              To help explain things as clearly as possible,
                              we’ve added examples, explanatory videos, and
                              definitions for key terms. And if you have any
                              questions about this Privacy Policy, you can
                              contact us. When you’re not signed in to a Google
                              Account, we store the information we collect with
                              unique identifiers tied to the browser,
                              application, or device you’re using. This allows
                              us to do things like maintain your preferences
                              across browsing sessions, such as your preferred
                              language or whether to show you more relevant
                              search results or ads based on your activity.
                            </div>
                          ),
                          isInfo: false,
                          heading: "Partner Policy",
                          onAgree: () => {
                            setPayload({
                              ...payload,
                              accept1: true,
                            });
                          },
                        });
                      } else {
                        setPayload({
                          ...payload,
                          accept1: e.target.checked,
                        });
                      }
                    }}
                    className="cursor-pointer text-black bg-white border-gray-300 hover:bg-gray-50 focus:ring-0 dark:focus:ring-0 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  />
                </span>
                <label
                  htmlFor="one-accept"
                  className="tracking-normal text-gray-500 text-xl font-medium"
                  // __NEWS__LABEL__
                >
                  Accept Partner Content Terms & Conditions and Partner Content
                  Guidelines
                </label>
              </div>
              <div className="flex items-center __CHECK_REG__ space-x-2">
                <span className="flex items-center">
                  <input
                    id="two-accept"
                    type="checkbox"
                    checked={payload.accept2}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setStaticMessage({
                          show: true,
                          message: (
                            <div>
                              To help explain things as clearly as possible,
                              we’ve added examples, explanatory videos, and
                              definitions for key terms. And if you have any
                              questions about this Privacy Policy, you can
                              contact us. When you’re not signed in to a Google
                              Account, we store the information we collect with
                              unique identifiers tied to the browser,
                              application, or device you’re using. This allows
                              us to do things like maintain your preferences
                              across browsing sessions, such as your preferred
                              language or whether to show you more relevant
                              search results or ads based on your activity.
                            </div>
                          ),
                          isInfo: false,
                          heading: "Publishing Fee",
                          onAgree: () => {
                            setPayload({
                              ...payload,
                              accept2: true,
                            });
                          },
                        });
                      } else {
                        setPayload({
                          ...payload,
                          accept2: e.target.checked,
                        });
                      }
                    }}
                    className="cursor-pointer text-black bg-white border-gray-300 hover:bg-gray-50 focus:ring-0 dark:focus:ring-0 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  />
                </span>
                <label
                  htmlFor="two-accept"
                  className="tracking-normal text-gray-500 text-xl font-medium"
                  // __NEWS__LABEL__
                >
                  Accept the publishing fee
                </label>
              </div>
            </div>
          )}
          <div className="mt-5 flex flex-row justify-start items-center space-x-2">
            <button
              onClick={(e) => {
                if (props?.edit) {
                  addNews(e);
                } else {
                  setModal({
                    ...modal,
                    isOpen: true,
                    content: `To publish this news release will cost 20
                  Advertising Credits which will be
                  automatically deducted from your account.`,
                    onYes: (e) => {
                      addNews(e);
                      setModal(EMPTY_MODAL);
                    },
                    customAgree: "Confirm and Publish",
                  });
                }
              }}
              disabled={!payload?.accept1 || !payload?.accept2}
              className={`${
                !payload?.accept1 || !payload?.accept2
                  ? "pointer-events-none opacity-50"
                  : ""
              } w-fit text-white border border-black bg-black text-sm px-5 py-2.5 text-center`}
            >
              {!props?.edit ? "Publish to Industry Insights" : "Update Release"}
            </button>
            <span
              onClick={() => {
                navigate(-1);
              }}
              className="cursor-pointer w-fit text-black border border-black bg-transparent text-sm px-5 py-2.5 text-center"
            >
              Cancel
            </span>
          </div>
          <div
            className="mt-10 text-left"
            id="error"
            style={{ display: "none" }}
          ></div>
          <div className="mt-5">
            <p className="my-3 leading-relaxed tracking-tight text-base text-black">
              Note that Stankevicius International and Stankevicius
              International Business Services do not take responsibility for
              promoted content. Read{" "}
              <span
                className="text-sky-700 underline cursor-pointer"
                onClick={() => {
                  setStaticMessage({
                    show: true,
                    heading: "Partner Content Guidelines",
                    message: (
                      <div>
                        You can use our services in a variety of ways to manage
                        your privacy.<div className="py-2"></div> For example,
                        you can sign up for a Google Account if you want to
                        create and manage content like emails and photos, or see
                        more relevant search results.
                        <div className="py-2"></div> And you can use many Google
                        services when you’re signed out or without creating an
                        account at all, like searching on Google or watching
                        YouTube videos. You can also choose to browse the web in
                        a private mode, like Chrome Incognito mode. And across
                        our services, you can adjust your privacy settings to
                        control what we collect and how your information is
                        used. <div className="py-2"></div>To help explain things
                        as clearly as possible, we’ve added examples,
                        explanatory videos, and definitions for key terms. And
                        if you have any questions about this Privacy Policy, you
                        can contact us. When you’re not signed in to a Google
                        Account, we store the information we collect with unique
                        identifiers tied to the browser, application, or device
                        you’re using. This allows us to do things like maintain
                        your preferences across browsing sessions, such as your
                        preferred language or whether to show you more relevant
                        search results or ads based on your activity.
                      </div>
                    ),
                    isInfo: true,
                    onAgree: () => {},
                  });
                }}
              >
                Partner Content Guidelines
              </span>{" "}
              before publishing. Paid publications which do not follow
              guidelines will be deleted without notice and no refund will be
              provided.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
