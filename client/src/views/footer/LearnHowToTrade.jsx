import React, { useState, useEffect, useRef } from "react";
import Accordion from "../../components/Accordion";
import Fold from "../../components/menus/Fold";
import { getPageMargins } from "../../CONSTANT";
import SavingOptions from "../../components/SavingOptions";
import { Link } from "react-router-dom";

export default function LearnHowToTrade(props) {
  const component = useRef();
  return (
    <div className="max-w-screen-xl md:mx-auto mx-2 p-0 md:p-4">
      <div
        className="mt-10 flex justify-center items-center flex-col"
        id="main_form_div"
        ref={component}
      >
        <style>{getPageMargins()}</style>
        <div className="w-full">
          <div className="w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
            Learn how to trade
          </div>

          <div className="py-5"></div>
          <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
            Stankevicius International GO trading platform is designed to bring
            global trade market together and increase business engagement and
            lead generation for value businesses that have authentic business
            operations, access to global supply chains and capability to execute
            trade deals internationally.
          </div>
          <div className="py-2"></div>
          <div className="py-2"></div>
          <Accordion
            mode="learn"
            items={[
              {
                title: "How to add new trade?",
                content: (
                  <span>
                    <ul className="my-2 pl-10 w-full list-decimal text-left leading-relaxed tracking-wide text-base text-black">
                      <li>User has to be logged in</li>
                      <li>Go to Acount Client menu and select Add New Trade</li>
                      <li>Fill up product and trade overview information</li>
                      <li>
                        Select limited listing validity for how long should your
                        trade be available in the platform (7-30 days)
                      </li>
                      <li>
                        Select Promotion if you wish to promote your trade or
                        your business. For more information about promotions
                        read{" "}
                        <Link
                          className="text-sky-700 underline cursor-pointer"
                          to="/footer/advertising_credits"
                        >
                          Advertising Credits
                        </Link>
                        .
                      </li>
                    </ul>
                  </span>
                ),
              },
              {
                title: "Engaging in the trade to sell",
                content: (
                  <span>
                    If you see others requesting to buy a specific product or in
                    otherwords, you see a buying trade, that means an
                    opportunity to sell, and if you have an offer for that trade
                    you can click SELL. A popup will appear to confirm your SELL
                    order. Confirm the popup, and our team from Stankevicius
                    International will engage with you.
                  </span>
                ),
              },
              {
                title: "Engaging in the trade to buy",
                content: (
                  <span>
                    If you see others proposing to sell a specific product or in
                    otherwords, you see a selling trade, that means an
                    opportunity to buy, and if you have such requirement for
                    that trade you can click BUY. A popup will appear to confirm
                    your BUY order. Confirm the popup, and our team from
                    Stankevicius International will engage with you.
                  </span>
                ),
              },
              {
                title: "How to get more visibility for your company?",
                content: (
                  <span>
                    When you are adding a new trade, you have an option to
                    promote your company within the trade. In the Add New Trade,
                    under Promotion section, select Yes to Promote Your Company
                    question. This is a setting that will promote your company
                    name with your company website. Make sure to fill up your
                    complete profile before running this promotion, otherwise
                    your company promotion will not be visible.
                  </span>
                ),
              },
              {
                title: "How to get more visibility for your trade?",
                content: (
                  <span>
                    When you are adding a new trade, you have an option to
                    promote your trade in the Trade Quote bar. In the Add New
                    Trade, under Promotion section, select Yes to Promote on
                    Trade Quote bar. This is a setting that will promote your
                    trade throughout the entire Stankevicius International
                    platform.
                  </span>
                ),
              },
              {
                title: "How to get more engagement for your trade?",
                content: (
                  <span>
                    When you are adding a new trade, you have an option to
                    promote your trade to subscribed users. In the Add New
                    Trade, under Promotion section, select Yes to Promote to
                    Subscribed Users. This is a setting that will promote your
                    trade with your full profile details including your personal
                    contact information and company information. Make sure to
                    fill up your complete your profile before running this
                    promotion for exposure maximum benefit.
                  </span>
                ),
              },
              {
                title: "How to engage in trade safely?",
                content: (
                  <span>
                    We encourage all users to initiate all trades through our
                    Stankevicius International GO trading platform and avoid
                    contacting third party companies directly by yourself. We
                    provide advertising option for users to promote their
                    company information and contacts for due diligence purposes
                    so that business counter-party would have certain knowledge
                    and understanding about the business that is running the
                    trade. However, we highly recommend to initiate all BUY and
                    SELL requests through Stankevicius International GO trading
                    platform only to avoid risk. Before trading and engaging
                    with third party companies, please visit{" "}
                    <Link
                      className="text-sky-700 underline cursor-pointer"
                      to="/footer/regulatory_guidelines"
                    >
                      Regulatory Guidelines
                    </Link>{" "}
                    to learn more about trading safety, risks, liabilities and
                    our trading policies.
                  </span>
                ),
              },
            ]}
          />
          <div className="py-2"></div>
          <Fold className="bg-white">
            <Fold inside className="bg-[#F1F1F1] py-6 px-5">
              <div className="flex flex-col">
                <div className="w-full text-left text-2xl _font-bold leading-tight tracking-tight text-black">
                  Open Source Science
                </div>
                <div className="mt-4 w-full text-left text-md leading-tight tracking-tight text-black">
                  Novartis is pioneering new open-source informatics tools for
                  drug discovery. Learn more about these Open Source Science
                  projects and get involved on GitHub.
                </div>
                <div className="py-2"></div>
                <button
                  onClick={null}
                  className="transition-all duration-300 ease-in-out cursor-pointer w-fit text-black border-2 border-black hover:bg-black hover:text-white bg-transparent text-sm px-8 font-bold py-2.5 text-center"
                >
                  Learn more
                </button>
              </div>
            </Fold>
          </Fold>
        </div>
      </div>
      <SavingOptions
        className="mt-10"
        desc="Example desc"
        title="Learn How to Trade"
        component={component}
      />
    </div>
  );
}
