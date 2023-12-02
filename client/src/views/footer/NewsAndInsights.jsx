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
              src="/assets/news bg.jpg"
            />
            <div className="flex flex-col space-y-5 bg-[#0460a9] relative md:absolute md:bottom-[3rem] md:left-[19rem] md:w-[30%] text-white py-8 px-6">
              <Link
                to={"#"}
                className="cursor-pointer flex flex-row items-center w-fit text-left text-xl md:text-2xl lg:text-3xl xl:text-4xl _font-bold tracking-normal text-white"
              >
                News & Insights
              </Link>
              <div className="w-full text-left tracking-normal text-base text-white">
                Discover the latest news in the industry
              </div>
            </div>
          </div>
        </Fold>
      </Fold>
      <Fold className="bg-white px-2">
        <Fold inside className="">
          <div className="py-5 w-full text-left text-xl leading-normal tracking-tight text-black">
            Find the latest Stankevicius company news and industry insights from
            the world.
          </div>
          <div className="py-10 flex flex-col space-y-5">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
              {[
                {
                  thumbnail_url: "/assets/stankevicius news.jpg",
                  title: "Stankevicius News",
                  to: "/menu/stankevicius_news",
                  content: `Discover all recent company news
                  published by Stankevicius.`,
                },
                {
                  thumbnail_url: "/assets/partner content.jpg",
                  to: "/menu/industry_insights",
                  title: "Industry Insights (Partner Content)",
                  content: `Explore industry insights through our partner
                  content program.`,
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
              <div className="w-full text-left mb-2 md:pr-4 text-4xl _font-bold leading-tight tracking-tight text-black">
                Our vision is to become the most valued and trusted, tech
                enhanced trade consulting company in the world
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img src={"/assets/tech_bg2.jpg"} className="w-full" />
            </div>
          </div>
          <div className="py-3"></div>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="py-3"></div>
          <div>
            <div className="w-full text-left mb-2 md:pl-1 text-4xl _font-bold leading-tight tracking-tight text-black">
              About Stankevicius International
            </div>
            <div className="py-3"></div>
            <div className="my-5 grid md:grid-cols-3 grid-cols-1 gap-4">
              {[
                {
                  title: "Introduction",
                  to: "/menu/introduction",
                  content: `Vigilance helps safeguard against
                  fraudulent activities, reinforcing the need for
                  ethical and transparent dealings in the
                  global marketplace to prevent financial
                  losses and legal entanglements.`,
                },
                {
                  title: "Our company",
                  to: "/menu/our_company",
                  content: `We use technology and data to address some
                  of the most challenging business matters in
                  international trade. Worldwide, we have
                  helped clients to protect $10.0 bn in capital
                  against international trade fraud since 2016.`,
                },
                {
                  title: "CEO’s Letter",
                  to: "/menu/ceo_letter",
                  content: `As we look to the future as a technology
                  driven trade consulting firm our dedication to
                  innovation and excellence will drive us
                  forward.`,
                },
              ].map((item, one) => {
                return (
                  <PictureCard
                    item={{
                      ...item,
                      thumbnail_url: "",
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
              More from Stankevicius
            </div>
            <div className="py-3"></div>
            <div className="my-5 grid md:grid-cols-3 grid-cols-1 gap-4">
              {[
                {
                  title: "PR and Advertising",
                  to: "https://stankeviciusmgm.com",
                  external: true,
                  content: `We use media and advertising to
                  build brands, names and
                  influence in global markets.`,
                },
                {
                  title: "Alternative Investment Banking",
                  to: "https://stankevicius.com",
                  external: true,
                  content: `Our financial services arm
                  provides private equity solutions
                  and brokerage in public markets.`,
                },
                {
                  title: "Stankevicius Group",
                  to: "https://stankeviciusgroup.com",
                  external: true,
                  content: `Stankevicius Group is a mainstream industry
                  professional service provider and business
                  broker. Learn more what we do and how we
                  can help you.`,
                },
              ].map((item, one) => {
                return (
                  <PictureCard
                    item={{
                      ...item,
                      thumbnail_url: "",
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
