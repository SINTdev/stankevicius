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
              src="/assets/international trade consulting bg.jpg"
            />
            <div className="flex flex-col space-y-5 bg-[#0460a9] relative md:absolute md:bottom-[3rem] md:left-[19rem] md:w-[30%] text-white py-8 px-6">
              <Link
                to={"#"}
                className="cursor-pointer flex flex-row items-center w-fit text-left text-xl md:text-2xl lg:text-3xl xl:text-4xl _font-bold tracking-normal text-white"
              >
                International Trade Consulting
              </Link>
              <div className="w-full text-left tracking-normal text-base text-white">
                Managing clients’ global business
              </div>
            </div>
          </div>
        </Fold>
      </Fold>
      <Fold className="bg-white px-2">
        <Fold inside className="">
          <div className="py-5 w-full text-left text-xl leading-normal tracking-tight text-black">
            We provide complete solutions for international trade business. We
            know how to navigate challenges in global markets and how to tackle
            obstacles in daily operations.
          </div>
          <div className="py-10 flex flex-col space-y-5">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
              {[
                {
                  thumbnail_url: "/assets/sourcing procurement.jpg",
                  title: "Sourcing and Procurement",
                  to: "/menu/sourcing_procurement",
                  content: `We use our global network of traders and
                  global suppliers to assist clients in
                  accessing products and commodities at the
                  best possible rate.`,
                },
                {
                  thumbnail_url: "/assets/production and manufacturing.jpg",
                  title: "Production and Manufacturing",
                  to: "/menu/production_manufacturing",
                  content: `We help clients to locate international
                  producers and manufacturers for clients’
                  customized needs. Everything from textile to
                  electronics, pharmaceuticals, housing,
                  vehicles, space and beyond.`,
                },
                {
                  thumbnail_url: "/assets/shipping logistics.jpg",
                  title: "Shipping and Logistics",
                  to: "/menu/shipping_logistics",
                  content: `As a long-term trading consultant over the
                  years we have established strong
                  relationships with private logistics companies.
                  We help clients to negotiate the best logistics
                  rate for international shipments during all
                  times.`,
                },
                {
                  thumbnail_url: "/assets/inspection.jpg",
                  title: "Inspection and Quality Checks",
                  to: "/menu/inspection_quality",
                  content: `When dealing in international trade, we
                  support clients with security
                  supervision and safety protocols. We
                  assist in organizing product and
                  shipment inspections with certified
                  inspection agencies.`,
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
              About Stankevicius International
            </div>
            <div className="py-3"></div>
            <div className="my-5 grid md:grid-cols-3 grid-cols-1 gap-4">
              {[
                {
                  title: "Introduction",
                  content: `Vigilance helps safeguard against
                  fraudulent activities, reinforcing the need for
                  ethical and transparent dealings in the
                  global marketplace to prevent financial
                  losses and legal entanglements.`,
                },
                {
                  title: "Our company",
                  content: `We use technology and data to address some
                  of the most challenging business matters in
                  international trade. Worldwide, we have
                  helped clients to protect $10.0 bn in capital
                  against international trade fraud since 2016.`,
                },
                {
                  title: "CEO’s Letter",
                  content: `As we look to the future as a technology
                  driven trade consulting firm our dedication to
                  innovation and excellence will drive us
                  forward.`,
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
