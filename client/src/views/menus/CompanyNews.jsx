import React, { useState, useEffect, useContext } from "react";
import Fold from "../../components/menus/Fold";
import InfoCard from "../../components/menus/InfoCard";
import PictureCard from "../../components/menus/PictureCard";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CONSTANT } from "../../CONSTANT";
import UserData from "../../contexts/UserData";
import ModalWrapper from "../../components/ModalWrapper";
import Login from "../../auth/Login";
import NewsBox from "../../components/skeleton/NewsBox";
export default function CompanyNews() {
  const { session, updateSessionData } = useContext(UserData);
  let navigate = useNavigate();
  const [payload, setPayload] = useState({
    latest: [],
    featured: [],
  });

  const fetchNews = async () => {
    await axios
      .post(CONSTANT.server + `api/fetchnewsrelease`, {
        category: "company",
      })
      .then((responce) => {
        setTimeout(() => {
          setPayload(responce?.data);
          setLoadN(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);
  let __INIT__ = {
    login: false,
  };
  const [login, setLogin] = useState(__INIT__);

  const [loadN, setLoadN] = useState(true);

  return (
    <>
      <ModalWrapper
        isOpen={login.login}
        onClose={() => {
          setLogin(__INIT__);
        }}
      >
        <Login
          setModalSetting={setLogin}
          updateSessionData={updateSessionData}
        />
      </ModalWrapper>
      <div className="w-full flex flex-col space-y-8 md:p-0 px-2">
        <Fold className="bg-[#F1F1F1]">
          <Fold inside>
            <div className="py-10 flex flex-col space-y-5">
              <div className="w-full text-left mb-2 md:pl-1 text-4xl _font-bold leading-tight tracking-tight text-black">
                Stankevicius Company News
              </div>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                {loadN && [1, 2, 3].map((index) => <NewsBox />)}
                {!loadN &&
                  payload?.latest?.map((item, one) => {
                    return (
                      <InfoCard
                        item={item}
                        index={one}
                        onClick={() => {
                          if (session?.isLoaded && session?.isLoggedIn) {
                            navigate(`/news/${item?.slug}`);
                          } else {
                            setLogin({
                              login: true,
                            });
                          }
                        }}
                      />
                    );
                  })}
              </div>
              <button
                onClick={() => {
                  if (session?.isLoaded && session?.isLoggedIn) {
                    navigate("/news");
                  } else {
                    setLogin({
                      login: true,
                    });
                  }
                }}
                className="transition-all duration-300 ease-in-out cursor-pointer w-fit text-black border-2 border-black hover:bg-black hover:text-white bg-transparent text-sm px-8 font-bold py-2.5 text-center"
              >
                All news
              </button>
            </div>
          </Fold>
        </Fold>

        <Fold className="bg-white">
          <Fold inside>
            <div className="w-full text-left mb-2 md:pl-1 text-4xl _font-bold leading-tight tracking-tight text-black">
              Featured news
            </div>
            <div className="py-10 flex flex-col space-y-5">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {loadN && [1, 2].map((index) => <NewsBox isPicture={true} />)}
                {!loadN &&
                  payload?.featured?.map((item, one) => {
                    return (
                      <PictureCard
                        item={item}
                        index={one}
                        onClick={() => {
                          if (session?.isLoaded && session?.isLoggedIn) {
                            navigate(`/news/${item?.slug}`);
                          } else {
                            setLogin({
                              login: true,
                            });
                          }
                        }}
                      />
                    );
                  })}
              </div>
            </div>
          </Fold>
        </Fold>
        <Fold className="">
          <Fold>
            <div className="min-h-[30rem] relative">
              <img className="md:block hidden" src="/assets/news_bg.png" />
              <div className="flex flex-col space-y-5 bg-[#0460a9] relative md:absolute md:bottom-[3rem] md:left-[19rem] md:w-[30%] text-white py-8 px-6">
                <Link
                  to={"#"}
                  className="cursor-pointer flex flex-row items-center w-fit text-left text-xl md:text-2xl lg:text-3xl xl:text-4xl _font-bold tracking-normal text-white"
                >
                  @stankeviciusmgm{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 ml-2 text-white relative top-[1px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </Link>
                <div className="w-full text-left tracking-normal text-base text-white">
                  Get more insights from Stankevicius Media Relations
                </div>
                <Link
                  to={"#"}
                  className="group transition-all flex flex-row items-center duration-300 ease-in-out cursor-pointer w-fit text-white border-2 border-white hover:bg-white hover:text-black bg-transparent text-sm px-8 font-bold py-2.5 text-center"
                >
                  Follow Stankevicius on LinkedIn{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-3.5 h-3.5 ml-2 transition-all duration-300 ease-in-out text-white group-hover:text-black relative top-[1px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </Fold>
        </Fold>
      </div>
    </>
  );
}
