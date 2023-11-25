import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import UserData from "../contexts/UserData";
import Menu from "../components/Menu";
import PAGES from "./../assets/pages.json";

export default function PagesSearch(props) {
  const { session, setSession, setStaticMessage } = useContext(UserData);
  const { slug: slug } = useParams();
  let navigate = useNavigate();
  let location = useLocation();
  const __INIT__ = {
    yes: false,
    query: "",
  };
  const [footer, setFooter] = useState(__INIT__);

  useEffect(() => {
    let searchParams = new URLSearchParams(location.search);
    let footerSearch = searchParams.get("footerSearch");
    let query = searchParams.get("query");
    if (footerSearch && query) {
      setFooter({
        yes: true,
        query: query,
      });
    }
    return () => {
      setFooter(__INIT__);
    };
  }, [location]);

  const RenderCard = ({ item, index, navigate }) => {
    return (
      <>
        <div
          className="group cursor-pointer flex flex-col md:flex-row justify-center items-center w-full border-b-2 border-gray-200 py-5"
          key={index}
          onClick={(e) => {
            e.preventDefault();
            navigate(`${item?.location}`);
          }}
        >
          <div className="w-full">
            <div className="flex flex-row items-center w-full">
              <span className="capitalize text-xs tracking-normal font-thin text-gray-500">
                {item?.type}
              </span>
              {item?.parentTitle && (
                <>
                  <svg
                    class="rtl:rotate-180 w-2 h-2 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="text-xs tracking-normal font-thin text-gray-500">
                    {item?.parentTitle}
                  </span>
                </>
              )}
            </div>
            <div className="group-hover:underline mt-2 _font-bold text-2xl tracking-normal w-full">
              {item?.title}
            </div>
            <div
              className={`mt-2 line-clamp-2 cursor-pointer leading-6 tracking-normal text-base text-gray-600`}
            >
              {item?.description || "This is example description."}
            </div>
          </div>
        </div>
      </>
    );
  };

  if (props?.isMenuOpen) {
    return <Menu />;
  }
  return (
    <div className="max-w-screen-xl mx-auto p-0 md:p-4">
      <div className="mt-24 flex justify-center items-center flex-col">
        <div className="w-full">
          <div className="w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
            Search Pages
          </div>
          <div className="mt-5">
            <div className="flex flex-wrap md:flex-nowrap justify-between space-y-3 md:space-y-0 md:space-x-2">
              <input
                type="search"
                className={`delay-the-search block w-full rounded-none p-3 focus:border-black text-sm text-gray-900 border-2 border-gray-300  hover:bg-gray-50 outline-none`}
                placeholder="Search Pages"
                value={footer.query}
                onChange={(e) => {
                  setFooter({
                    ...footer,
                    query: e.target.value,
                  });
                }}
              />
            </div>
            <div className="flex flex-col w-full">
              {footer.query !== "" &&
                PAGES.filter((a, b) => {
                  return (
                    a?.title
                      ?.toLowerCase()
                      ?.includes(footer?.query?.toLowerCase()) ||
                    a?.description
                      ?.toLowerCase()
                      ?.includes(footer?.query?.toLowerCase()) ||
                    a?.parentTitle
                      ?.toLowerCase()
                      ?.includes(footer?.query?.toLowerCase()) ||
                    a?.location
                      ?.toLowerCase()
                      ?.includes(footer?.query?.toLowerCase()) ||
                    a?.keywords
                      ?.join(",")
                      ?.toLowerCase()
                      .includes(footer?.query?.toLowerCase()) ||
                    a?.type
                      ?.toLowerCase()
                      ?.includes(footer?.query?.toLowerCase())
                  );
                }).map((a, b) => {
                  return (
                    <RenderCard
                      item={a}
                      index={b}
                      navigate={navigate}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
