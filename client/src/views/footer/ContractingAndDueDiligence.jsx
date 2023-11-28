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
            <img
              className="block max-h-[30rem] w-full"
              src="/assets/contracting bg.jpg"
            />
            <div className="flex flex-col space-y-5 bg-[#0460a9] relative md:absolute md:bottom-[3rem] md:left-[19rem] md:w-[30%] text-white py-8 px-6">
              <Link
                to={"#"}
                className="cursor-pointer flex flex-row items-center w-fit text-left text-xl md:text-2xl lg:text-3xl xl:text-4xl _font-bold tracking-normal text-white"
              >
                Contracting and Due Diligence
              </Link>
              <div className="w-full text-left tracking-normal text-base text-white">
                We protect clients and their interest
              </div>
            </div>
          </div>
        </Fold>
      </Fold>
      <Fold className="bg-white px-2">
        <Fold inside className="">
          <div className="py-5 w-full text-left text-xl leading-normal tracking-tight text-black">
            We help clients to increase security when engaging in international
            business with foreign companies.
          </div>
          <div className="py-10 flex flex-col space-y-5">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
              {[
                {
                  thumbnail_url: "/assets/audit.png",
                  title: "Business Audit",
                  content: `Vigilance helps safeguard against
                  fraudulent activities, reinforcing the need for
                  ethical and transparent dealings in the
                  global marketplace to prevent financial
                  losses and legal entanglements.`,
                },
                {
                  thumbnail_url: "/assets/business due diligence.jpg",
                  title: "Business Counterparty Due Diligence",
                  content: `Business counter-party due diligence is the
                  process of thoroughly investigating the
                  background, financial stability, and integrity of
                  potential partners, clients, or suppliers.`,
                },
                {
                  thumbnail_url: "/assets/prof contracting.jpg",
                  title: "Professional Contracting",
                  content: `Secure and professional contracts are the
                  bedrock of international trade, providing the
                  framework for smooth and trustworthy
                  transactions across borders.`,
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
    </div>
  );
}
