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
              src="/assets/company.jpg"
            />
            <div className="flex flex-col space-y-5 bg-[#0460a9] relative md:absolute md:bottom-[3rem] md:left-[19rem] md:w-[30%] text-white py-8 px-6">
              <Link
                to={"#"}
                className="cursor-pointer flex flex-row items-center w-fit text-left text-xl md:text-2xl lg:text-3xl xl:text-4xl _font-bold tracking-normal text-white"
              >
                About Stankevicius International
              </Link>
              <div className="w-full text-left tracking-normal text-base text-white">
                Learn about our company and values
              </div>
            </div>
          </div>
        </Fold>
      </Fold>
      <Fold className="bg-white px-2">
        <Fold inside className="">
          <div className="py-5 w-full text-left text-xl leading-normal tracking-tight text-black">
            Learn more about our accomplishments, purpose, vision and values.
          </div>
          <div className="py-10 flex flex-col space-y-5">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
              {[
                {
                  thumbnail_url: "/assets/intro.jpg",
                  title: "Introduction",
                  to: "/menu/introduction",
                  content: `Vigilance helps safeguard against
                  fraudulent activities, reinforcing the need for
                  ethical and transparent dealings in the
                  global marketplace to prevent financial
                  losses and legal entanglements.`,
                },
                {
                  thumbnail_url: "/assets/comp.jpg",
                  title: "Our Company",
                  to: "/menu/our_company",
                  content: `We use technology and data to address some
                  of the most challenging business matters in
                  international trade. Worldwide, we have
                  helped clients to protect $10.0 bn in capital
                  against international trade fraud since 2016.`,
                },
                {
                  thumbnail_url: "/assets/ceo.jpg",
                  title: "CEO’s Letter",
                  to: "/menu/ceo_letter",
                  content: `As we look to the future as a technology
                  driven trade consulting firm our dedication to
                  innovation and excellence will drive us
                  forward.`,
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
                Our vision is to become the most
valued and trusted, tech enhanced
trade consulting company in the
world
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img
                src={
                  "/assets/tech_bg2.jpg"
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
              Our business
            </div>
            <div className="py-3"></div>
            <div className="my-5 grid md:grid-cols-3 grid-cols-1 gap-4">
              {[
                {
                  title: "Private Clients",
                  content: `Our mission is to reimagine
                product trading to make trade
                business processes easier
                and smoother. We use data
                and technology to address
                some of the industry’s most
                challenging trade matters.`,
                },
                {
                  title: "International Trade Consulting",
                  content: `We provide complete
                  solutions for international
                  trade business. We know
                  how to navigate challenges
                  in global markets and how to
                  tackle obstacles in daily
                  operations.`,
                },
                {
                  title: "Contracting and Due Diligence",
                  content: `We help clients to increase
                  security when engaging in
                  international business with
                  foreign companies.`,
                },
              ].map((item, one) => {
                return (
                  <PictureCard
                    item={{
                      thumbnail_url: "",
                      title: item?.title,
                      content: item?.content,
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
                  content: `We use media and advertising to
                  build brands, names and
                  influence in global markets.`,
                },
                {
                  title: "Alternative Investment Banking",
                  content: `Our financial services arm
                  provides private equity solutions
                  and brokerage in public markets.`,
                },
                {
                  title: "Stankevicius Group",
                  content: `Stankevicius Group is a mainstream industry
                  professional service provider and business
                  broker. Learn more what we do and how we
                  can help you.`,
                },
              ].map((item, one) => {
                return (
                  <PictureCard
                    item={{
                      thumbnail_url: "",
                      title: item?.title,
                      content: item?.content,
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
