import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  CONSTANT,
  CORPORATE_DASHBOARD_MENU,
  USER_DASHBOARD_MENU,
  smoothScrollDown,
} from "../CONSTANT";
import InputBox from "../components/InputBox";
import Modal from "../components/Modal";
import UserData from "../contexts/UserData";
import DashboardOptions from "../components/client/DashboardOptions";
import { takeActionOnProduct } from "../ACTIONS";
import ModalWrapper from "../components/ModalWrapper";
import CategoryManagement from "../components/corporate/CategoryManagement";

const DropdownButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      {isOpen && (
        <div
          className="w-screen h-screen top-0 left-0 z-10 fixed"
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>
      )}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`${props?.className} flex flex-row items-center justify-center text-[16px] uppercase font-semibold bg-[#221f1f] text-white min-w-[8rem] py-2`}
      >
        {props?.label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 330 330"
          strokeWidth={1.5}
          className={`ml-2 w-[9px] h-[9px] fill-white ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
        </svg>
      </button>

      <div className="absolute opacity-100 z-20">
        {isOpen &&
          props?.options?.map((one, index) => {
            if (one?.hide) {
              return null;
            }
            if (one?.type === "link") {
              return (
                <Link
                  to={one?.click}
                  className={`border m-0 border-black border-t-0 flex flex-row items-center justify-center text-[13px] uppercase font-semibold bg-[#D5D5D5] hover:bg-[#929292] transition-all duration-150 ease-in-out text-white min-w-[8rem] py-1.5`}
                >
                  {one?.label}
                </Link>
              );
            }
            return (
              <button
                onClick={() => {
                  one?.click();
                }}
                className={`border m-0 border-black border-t-0 flex flex-row items-center justify-center text-[13px] uppercase font-semibold bg-[#D5D5D5] hover:bg-[#929292] transition-all duration-150 ease-in-out text-white min-w-[8rem] py-1.5`}
              >
                {one?.label}
              </button>
            );
          })}
      </div>
    </div>
  );
};

const RenderCard = ({ item, index, formatDate, session }) => {
  // const [showText, setShowText] = useState(false);
  return (
    <>
      {" "}
      <Link
        className="group cursor-pointer flex flex-row justify-center items-center w-full border-b-2 border-gray-200 py-5"
        key={index}
        to={`/news/${item?.slug}`}
      >
        {item?.category === "featured" && (
          <div className="mr-10">
            <img className="h-[10rem]" src={item?.thumbnail_url} />
          </div>
        )}
        <div className="w-full">
          <div className="flex flex-row justify-between items-end w-full">
            <span className="text-xs tracking-normal font-thin text-gray-500">
              {item?.category === "industry"
                ? "Industry Insights (Partner Content)"
                : item?.category === "company"
                ? "Stankevicius News"
                : "Featured News"}{" "}
              / {formatDate(item?.timestamp)}
            </span>
            {(session?.personal?.is_staff ||
              parseInt(item?.user?.id) === parseInt(session?.personal?.id)) && (
              <span>
                <DropdownButton
                  label="Action"
                  className="bg-black"
                  options={[
                    {
                      label: "Edit",
                      hide: false,
                      type: "link",
                      click: `/editNews/${item?.slug}`,
                    },
                    {
                      label: "Delete",
                      type: "button",
                      click: () => {
                        setModal({
                          ...modal,
                          isOpen: true,
                          content: `You confirm that you want to delete
                 this release now.`,
                          onYes: () => {
                            deleteNews(item?.slug);
                            setModal(EMPTY_MODAL);
                          },
                        });
                      },
                    },
                  ]}
                />
              </span>
            )}
          </div>
          <div className="group-hover:underline mt-2 _font-bold text-2xl tracking-normal w-full">
            {item?.title}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: item?.content }}
            className={`mt-2 line-clamp-2 cursor-pointer leading-6 tracking-normal text-base text-gray-600`}
          ></div>
        </div>
      </Link>
    </>
  );
};

export default function News(props) {
  let navigate = useNavigate();
  const { session, setSession } = useContext(UserData);

  const fetchNews = async () => {
    await axios
      .get(CONSTANT.server + `api/allreleasenews`)
      .then((responce) => {
        setNewsList(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteNews = async (id) => {
    await axios
      .delete(
        CONSTANT.server + `api/newsreleases/${id}/${session.personal?.id}`
      )
      .then((responce) => {
        fetchNews();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (session.isLoaded && session?.isLoggedIn) {
      fetchNews();
    }
  }, [session]);

  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(100);

  const [newsList, setNewsList] = useState([]);

  let EMPTY_MODAL = {
    isOpen: false,
    content: "",
    onYes: () => {},
    isCancel: false,
  };

  const [modal, setModal] = useState(EMPTY_MODAL);

  // Utils

  const [showData, setShowData] = useState(newsList || []);

  useEffect(() => {
    setShowData(
      newsList
        .filter((item, index) => {
          if (!filter) return true;
          if (filter === "industry") {
            return item?.category === "industry";
          }
          if (filter === "company") {
            return item?.category === "company";
          }
          if (filter === "featured") {
            return item?.category === "featured";
          }
          if (filter === "my") {
            return parseInt(item?.user?.id) === parseInt(session?.personal?.id);
          }
          return true;
        })
        .filter((product, index) => {
          if (!search) return true;
          return (
            product?.author.toLowerCase().includes(search.toLowerCase()) ||
            product?.content.toLowerCase().includes(search.toLowerCase()) ||
            product?.title.toLowerCase().includes(search.toLowerCase())
          );
        })
        .slice(0, show)
    );
  }, [filter, search, newsList, show]);

  const formatDate = (date) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(date).toLocaleDateString("en-GB", options);
  };

  // const renderCard = (item, index) => {
  //   const [showText, setShowText] = useState(false);
  //   return (
  //     <div
  //       className="flex flex-row justify-center items-center w-full border-b-2 border-gray-200 py-5"
  //       key={index}
  //     >
  //       {item?.category === "featured" && (
  //         <div className="mr-10">
  //           <img className="h-[10rem]" src={item?.thumbnail_url} />
  //         </div>
  //       )}
  //       <div className="w-full">
  //         <div className="flex flex-row justify-between items-end w-full">
  //           <span className="text-xs tracking-normal font-thin text-gray-500">
  //             {item?.category === "industry"
  //               ? "Industry Insights (Partner Content)"
  //               : item?.category === "company"
  //               ? "Stankevicius News"
  //               : "Featured News"}{" "}
  //             / {formatDate(item?.timestamp)}
  //           </span>
  //           {(session?.personal?.is_staff ||
  //             parseInt(item?.user?.id) === parseInt(session?.personal?.id)) && (
  //             <span>
  //               <DropdownButton
  //                 label="Action"
  //                 className="bg-black"
  //                 options={[
  //                   {
  //                     label: "Edit",
  //                     hide: false,
  //                     type: "link",
  //                     click: `/editNews/${item?.slug}`,
  //                   },
  //                   {
  //                     label: "Delete",
  //                     type: "button",
  //                     click: () => {
  //                       setModal({
  //                         ...modal,
  //                         isOpen: true,
  //                         content: `You confirm that you want to delete
  //                     this release now.`,
  //                         onYes: () => {
  //                           deleteNews(item?.slug);
  //                           setModal(EMPTY_MODAL);
  //                         },
  //                       });
  //                     },
  //                   },
  //                 ]}
  //               />
  //             </span>
  //           )}
  //         </div>
  //         <div className="mt-2 _font-bold text-2xl tracking-normal w-full">
  //           {item?.title}
  //         </div>
  //         <div
  //           dangerouslySetInnerHTML={{ __html: item?.content }}
  //           onClick={() => {
  //             setShowData(!showData);
  //           }}
  //           className={`${
  //             showData ? "" : "line-clamp-2"
  //           } mt-2 __TEXTEDITOR__ text-base text-gray-700 tracking-normal`}
  //         ></div>
  //       </div>
  //     </div>
  //   );
  // };

  const renderBox = (item, index) => {
    return (
      <Link
        className="flex flex-col w-full border border-gray-200 hover:border-gray-400 cursor-pointer"
        key={index}
        to={`/news/${item?.slug}`}
      >
        {item?.category === "featured" && (
          <div className="">
            <img className="w-full" src={item?.thumbnail_url} />
          </div>
        )}
        <div className="w-full px-4 py-5">
          <div className="flex flex-col space-y-3 w-full">
            <span className="text-xs tracking-normal font-thin text-gray-500">
              {item?.category === "industry"
                ? "Industry Insights (Partner Content)"
                : item?.category === "company"
                ? "Stankevicius News"
                : "Featured News"}{" "}
              / {formatDate(item?.timestamp)}
            </span>
            {(session?.personal?.is_staff ||
              parseInt(item?.user?.id) === parseInt(session?.personal?.id)) && (
              <span>
                <DropdownButton
                  label="Action"
                  className="bg-black text-xs"
                  options={[
                    {
                      label: "Edit",
                      hide: false,
                      type: "link",
                      click: `/editNews/${item?.slug}`,
                    },
                    {
                      label: "Delete",
                      type: "button",
                      click: () => {
                        setModal({
                          ...modal,
                          isOpen: true,
                          content: `You confirm that you want to delete
                        this release now.`,
                          onYes: () => {
                            deleteNews(item?.slug);
                            setModal(EMPTY_MODAL);
                          },
                        });
                      },
                    },
                  ]}
                />
              </span>
            )}
          </div>
          <div className="mt-2 _font-bold text-xl tracking-normal w-full">
            {item?.title}
          </div>
          <div className="pb-5"></div>
          {/* <div
            dangerouslySetInnerHTML={{ __html: item?.content }}
            className="mt-2 __TEXTEDITOR__ line-clamp-2 text-base text-gray-700 tracking-normal"
          ></div> */}
        </div>
      </Link>
    );
  };

  //   Modal
  const [modalWrap, setModalWrap] = useState(false);

  useEffect(() => {
    setModalWrap(props?.category);
  }, [props]);

  const [isView, setIsView] = useState({
    id: null,
    show: false,
  });

  useEffect(() => {
    smoothScrollDown();
  }, []);

  const [isGrid, setIsGrid] = useState(false);

  return (
    <div>
      <Modal
        isOpen={modal.isOpen}
        onClose={() => {
          setModal(EMPTY_MODAL);
        }}
        text={modal.content}
        onYes={modal.onYes}
        isCancel={modal.isCancel}
      />
      {/* Home Page */}
      <div className="max-w-screen-xl mx-auto p-0 md:p-4">
        <DashboardOptions name={session?.personal?.fullName} />
        {/* Search Bar */}
        <div className="flex flex-wrap md:flex-nowrap justify-between space-y-3 md:space-y-0 md:space-x-2">
          <input
            type="search"
            className="block w-full rounded-none p-3 focus:border-black text-sm text-gray-900 border-2 border-gray-300  hover:bg-gray-50 outline-none"
            placeholder="Search News Archive"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        {/* Desktop View Category Filter */}
        <div className="overflow-auto hidden py-2 border-t border-b border-gray-300 lg:flex items-center justify-start space-x-0 md:space-x-2 font-bold mt-7 mb-3">
          {[
            {
              id: "",
              name: "All",
            },
            {
              id: "industry",
              name: "Industry Insights (Partner content)",
            },
            {
              id: "company",
              name: "Stankevicius News",
            },
            {
              id: "featured",
              name: "Featured News",
            },
            {
              id: "my",
              name: "My News",
            },
          ].map((category, one) => {
            return (
              <p
                className={`${
                  filter === category.id && "bg-gray-200"
                } py-2 px-3 hover:bg-gray-200 text-[18px] whitespace-nowrap transition-all duration-300 ease-in-out cursor-pointer`}
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
              id: "",
              name: "All",
            },
            {
              id: "industry",
              name: "Industry Insights (Partner content)",
            },
            {
              id: "company",
              name: "Stankevicius News",
            },
            {
              id: "featured",
              name: "Featured News",
            },
            {
              id: "my",
              name: "My News",
            },
          ]}
        />

        <div className="flex flex-row justify-between">
          <p className="tracking-tight font-thin text-gray-500">
            Showing {showData?.length} results
          </p>
          <span className="flex flex-row-reverse">
            <p
              className={`py-2 select-none px-5 w-fit flex flex-row items-center justify-center hover:bg-gray-200 text-[15px]  transition-all duration-300 ease-in-out cursor-pointer`}
              onClick={() => {
                setIsGrid(!isGrid);
              }}
            >
              {isGrid ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="ml-4 w-6 h-6 scale-75 cursor-pointer"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 0h16v7H0V0zm2 2v3h12V2H2zM0 9h16v7H0V9zm2 2v3h12v-3H2z"
                      fill-rule="evenodd"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="currentColor"
                    className="ml-2 w-6 h-6 scale-90 translate-y-[1.5px] cursor-pointer"
                    viewBox="0 0 24 24"
                  >
                    <defs></defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-59.000000, -240.000000)"
                        fill="#000000"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M16.65,98 L21.9,98 L21.9,93 L16.65,93 L16.65,98 Z M14.55,100 L24,100 L24,91 L14.55,91 L14.55,100 Z M5.1,98 L10.35,98 L10.35,93 L5.1,93 L5.1,98 Z M3,100 L12.45,100 L12.45,91 L3,91 L3,100 Z M16.65,87 L21.9,87 L21.9,82 L16.65,82 L16.65,87 Z M14.55,89 L24,89 L24,80 L14.55,80 L14.55,89 Z M5.1,87 L10.35,87 L10.35,82 L5.1,82 L5.1,87 Z M3,89 L12.45,89 L12.45,80 L3,80 L3,89 Z"
                            id="grid_system-[#1520]"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </>
              )}
              <span className="ml-1">SHOW {!isGrid ? "GRID" : "LIST"}</span>
            </p>
            <p
              className={`py-2 px-3 hover:bg-gray-200 flex flex-row items-center justify-center text-[15px] uppercase whitespace-nowrap transition-all duration-300 ease-in-out cursor-pointer`}
              onClick={() => {
                navigate("/publishNewRelease");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="mr-2 w-6 h-6 scale-75 cursor-pointer"
              >
                <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
              </svg>
              Publish New Release
            </p>
          </span>
        </div>

        {!isGrid && (
          <div className="my-5">
            {showData.map((item, index) => {
              return (
                <>
                  <div
                    className={`${
                      index !== 0 ? "mt-7" : ""
                    } w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black`}
                  >
                    {item?.label}
                  </div>
                  {item?.news?.map((one, in2) => {
                    return (
                      <RenderCard
                        item={one}
                        index={`${index}${in2}`}
                        formatDate={formatDate}
                        session={session}
                      />
                    );
                  })}
                </>
              );
            })}
          </div>
        )}

        {isGrid && (
          <div className="my-5">
            {showData.map((item, index) => {
              return (
                <>
                  <div
                    className={`${
                      index !== 0 ? "mt-7" : ""
                    } w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black`}
                  >
                    {item?.label}
                  </div>
                  <div className="my-5 grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-5">
                    {item?.news?.map((one, in2) => {
                      return renderBox(one, `${index}${in2}`);
                    })}
                  </div>
                  <div className="py-5"></div>
                </>
              );
            })}
          </div>
        )}

        {newsList.length > show && (
          <div className="flex flex-row items-center justify-center">
            <button
              onClick={() => {
                setShow((old) => {
                  return old + 10;
                });
              }}
              className="uppercase font-semibold bg-[#221f1f] text-white min-w-[8rem] py-2"
            >
              Load More
            </button>
          </div>
        )}

        {/* footer */}
      </div>
    </div>
  );
}
