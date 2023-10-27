import React from "react";
import Fold from "../../components/menus/Fold";
import InfoCard from "../../components/menus/InfoCard";
import PictureCard from "../../components/menus/PictureCard";
import { Link } from "react-router-dom";

export default function CompanyNews() {
  return (
    <div className="w-full flex flex-col space-y-8 md:p-0 px-2">
      <Fold className="bg-[#F1F1F1]">
        <Fold inside>
          <div className="py-10 flex flex-col space-y-5">
            <div className="w-full text-left mb-2 md:pl-1 text-4xl _font-bold leading-tight tracking-tight text-black">
              Latest news
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
              <InfoCard />
              <InfoCard />
              <InfoCard />
            </div>
            <button
              onClick={null}
              className="transition-all duration-300 ease-in-out cursor-pointer w-fit text-black border-2 border-black hover:bg-black hover:text-white bg-transparent text-sm px-8 font-bold py-2.5 text-center"
            >
              All news
            </button>
          </div>
        </Fold>
      </Fold>
      <Fold className="bg-white">
        <Fold inside className="bg-[#F1F1F1]">
          <div className="py-10 px-6 flex flex-col space-y-5">
            <div className="w-full text-left mb-2 md:pl-1 text-3xl _font-bold leading-tight tracking-tight text-black">
              Novartis provides support to Palestinian victims.
            </div>
            <button
              onClick={null}
              className="transition-all duration-300 ease-in-out cursor-pointer w-fit text-black border-2 border-black hover:bg-black hover:text-white bg-transparent text-sm px-8 font-bold py-2.5 text-center"
            >
              Read more
            </button>
          </div>
        </Fold>
      </Fold>
      <Fold className="bg-white">
        <Fold inside>
          <div className="py-10 flex flex-col space-y-5">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <PictureCard src="https://www.novartis.com/sites/novartis_com/files/styles/cards_50_50/public/2023-01/novartis-in-society-2022-card.jpg.webp?itok=0O-3hqia" />
              <PictureCard src="https://www.novartis.com/sites/novartis_com/files/styles/cards_50_50/public/2023-01/novartis-in-society-2022-card.jpg.webp?itok=0O-3hqia" />
            </div>
          </div>
        </Fold>
      </Fold>
      <Fold className="bg-[#F1F1F1]">
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
      </Fold>
      <Fold className="">
        <Fold>
          <div className="min-h-[30rem] relative">
            <img
              className="md:block hidden"
              src="https://www.novartis.com/sites/novartis_com/files/styles/banner_image_1920/public/2023-01/desk-newsroon-novartis-news-ig-li.jpg.webp?itok=RQc1k8Rm"
            />
            <div className="flex flex-col space-y-5 bg-[#0460a9] relative md:absolute md:bottom-[3rem] md:left-[19rem] md:w-[30%] text-white py-8 px-6">
              <Link
                to={"#"}
                className="cursor-pointer flex flex-row items-center w-fit text-left text-4xl _font-bold tracking-normal text-white"
              >
                #NovartisNews{" "}
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
                Tweets from the Media Relations team
              </div>
              <Link
                to={"#"}
                className="group transition-all flex flex-row items-center duration-300 ease-in-out cursor-pointer w-fit text-white border-2 border-white hover:bg-white hover:text-black bg-transparent text-sm px-8 font-bold py-2.5 text-center"
              >
                Follow @NovartisNews{" "}
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
  );
}
