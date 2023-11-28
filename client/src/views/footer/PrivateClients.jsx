import React from "react";
import Fold from "../../components/menus/Fold";
import { Link } from "react-router-dom";
import PictureCard from "../../components/menus/PictureCard";

export default function PrivateClients() {
  return (
    <div className="w-full flex flex-col space-y-8 md:p-0">
      <Fold className="pt-[4.5rem]">
        <Fold>
          <div className="md:min-h-[30rem] relative">
            <img className="block max-h-[30rem] w-full" src="/assets/private clients bg.jpg" />
            <div className="flex flex-col space-y-5 bg-[#0460a9] relative md:absolute md:bottom-[3rem] md:left-[19rem] md:w-[30%] text-white py-8 px-6">
              <Link
                to={"#"}
                className="cursor-pointer flex flex-row items-center w-fit text-left text-xl md:text-2xl lg:text-3xl xl:text-4xl _font-bold tracking-normal text-white"
              >
                Private Clients
              </Link>
              <div className="w-full text-left tracking-normal text-base text-white">
                Who we serve and how
              </div>
            </div>
          </div>
        </Fold>
      </Fold>
      {/* <Fold className="bg-[#F1F1F1]">
        <Fold inside>
          <div className="py-10 flex flex-col space-y-5">
            <div className="w-full text-left mb-2 md:pl-1 text-4xl _font-bold leading-tight tracking-tight text-black">
              Industry Insights (Partner Content)
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
              {payload?.latest?.map((item, one) => {
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
      </Fold> */}
      <Fold className="bg-white px-2">
        <Fold inside className="">
          <div className="py-5 w-full text-left text-xl leading-normal tracking-tight text-black">
            Our mission is to reimagine product trading to make trade business
            processes easier and smoother. We use data and technology to address
            some of the industry’s most challenging trade matters. We work with
            diversified client base to deliver them quality solutions.
          </div>
          <div className="py-10 flex flex-col space-y-5">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
              {[
                {
                  thumbnail_url:
                    "/assets/small business.png",
                  title: "Small Business",
                  content: `We help small businesses to navigate
                    complex international trade markets by
                    providing professional advice and market
                    entry guidance.`,
                },
                {
                  thumbnail_url:
                    "/assets/institutions.png",
                  title: "Institutions",
                  content: `We help institutions to access large quantity of
                    various product supply. We use our network to
                    tap into global markets and source various
                    products and commodities.`,
                },
                {
                  thumbnail_url:
                    "/assets/our company.jpg",
                  title: "Our Company",
                  content: `We use technology and data to address
                    some of the most challenging business
                    matters in international trade.`,
                },
              ].map((item, one) => {
                return (
                  <PictureCard item={item} index={one} onClick={() => {}} />
                );
              })}
            </div>
          </div>
          <div className="flex md:flex-row w-full flex-col items-center">
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="w-full text-left mb-2 md:pl-1 text-4xl _font-bold leading-tight tracking-tight text-black">
                Our vision is to become the most valued and trusted medicines
                company in the world
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img
                src={
                  "https://www.novartis.com/sites/novartiscom/files/styles/cards_1_3/public/2021-10/scientist-portrait.jpg.webp?itok=5GbsAFrM"
                }
                className="w-full"
              />
            </div>
          </div>
          <div className="py-3"></div>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="py-3"></div>
          <div>
            <div className="w-full text-left mb-2 md:pl-1 text-4xl _font-bold leading-tight tracking-tight text-black">
              Supporting units
            </div>
            <div className="py-3"></div>
            <div className="my-5 grid md:grid-cols-3 grid-cols-1 gap-4">
              {[1, 2, 3].map((item, one) => {
                return (
                  <PictureCard
                    item={{
                      thumbnail_url: "",
                      title: "Strategy",
                      content:
                        "Our strategy is to build a leading, focused medicines company powered by advanced therapy platforms and data science.",
                    }}
                    nopicture={true}
                    index={one}
                    onClick={() => {}}
                  />
                );
              })}
            </div>
          </div>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="py-3"></div>
          <div>
            <div className="w-full text-left mb-2 md:pl-1 text-4xl _font-bold leading-tight tracking-tight text-black">
              Novartis companies
            </div>
            <div className="py-3"></div>
            <div className="my-5 grid md:grid-cols-3 grid-cols-1 gap-4">
              {[1, 2, 3].map((item, one) => {
                return (
                  <PictureCard
                    item={{
                      thumbnail_url: "",
                      title: "Strategy",
                      content:
                        "Our strategy is to build a leading, focused medicines company powered by advanced therapy platforms and data science.",
                    }}
                    nopicture={true}
                    index={one}
                    onClick={() => {}}
                  />
                );
              })}
            </div>
          </div>
        </Fold>
      </Fold>
      {/* <Fold className="bg-white">
        <Fold inside>
          <div className="w-full text-left mb-2 md:pl-1 text-4xl _font-bold leading-tight tracking-tight text-black">
            Featured news
          </div>
          <div className="py-10 flex flex-col space-y-5">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              {payload?.featured?.map((item, one) => {
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
      </Fold> */}
      {/* <Fold className="bg-[#F1F1F1]">
    <Fold inside>
      <div className="py-10 flex flex-col space-y-5">
        <div className="w-full text-left mb-2 md:pl-1 text-4xl _font-bold leading-tight tracking-tight text-black">
          Humanitarian response
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard nodate />
          <InfoCard nodate />
          <InfoCard nodate />
        </div>
        <button
          onClick={null}
          className="transition-all duration-300 ease-in-out cursor-pointer w-fit text-black border-2 border-black hover:bg-black hover:text-white bg-transparent text-sm px-8 font-bold py-2.5 text-center"
        >
          More statements
        </button>
      </div>
    </Fold>
  </Fold>
  <Fold className="bg-white">
    <Fold inside>
      <div className="py-10 flex flex-col space-y-5">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <PictureCard src="https://www.novartis.com/sites/novartis_com/files/styles/cards_50_50/public/2021-10/contacts.jpg.webp?itok=zoU_VG-t" />
          <PictureCard src="https://www.novartis.com/sites/novartis_com/files/styles/cards_50_50/public/2021-10/contacts.jpg.webp?itok=zoU_VG-t" />
        </div>
      </div>
    </Fold>
  </Fold> */}
    </div>
  );
}
