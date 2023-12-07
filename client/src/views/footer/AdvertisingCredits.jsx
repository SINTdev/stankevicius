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
            Advertising Credits
          </div>

          <div className="py-5"></div>
          <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
            Users can use Advertising Credits on Stankevicius International GO
            trading platform to promote their businesses, and increase
            visibility and engagement rate for the trades. Advertising Credits
            are provided by Stankevicius International Business Services
            Limited. Read{" "}
            <Link
              className="text-sky-700 underline cursor-pointer"
              to="/footer/advertising_credits"
            >
              Terms of Use and Purchase Policy of Advertising Credits
            </Link>{" "}
            before purchasing. Read{" "}
            <Link
              className="text-sky-700 underline cursor-pointer"
              to="/footer/advertising_credits"
            >
              Advertising Liabilities, Guidelines and Policy
            </Link>{" "}
            before promoting your trades.
          </div>
          <div className="py-2"></div>
          <div className="py-2"></div>
          <Accordion
            mode="learn"
            items={[
              {
                title: "How to buy Advertising Credits?",
                content: (
                  <span>
                    <ul className="my-2 pl-10 w-full list-decimal text-left leading-relaxed tracking-wide text-base text-black">
                      <li>User has to be logged in</li>
                      <li>Go to Account Client menu and select Credit.</li>
                      <li>
                        You will see your current Advertising Credit balance.
                      </li>
                      <li>Click on to Buy Advertising Credits</li>
                      <li>Add number of credits you want to buy</li>
                      <li>Add your card information</li>
                      <li>
                        Agree to{" "}
                        <Link
                          className="text-sky-700 underline cursor-pointer"
                          to="/footer/advertising_credits"
                        >
                          Terms of Use and Purchase Policy of Advertising
                          Credits
                        </Link>
                        .
                      </li>
                      <li>Click Purchase Now</li>
                      <li>
                        Advertising Credits will be added to your account
                        immediately.
                      </li>
                      <li>
                        If you occur an error while purchasing the credits,
                        please contact support.
                      </li>
                    </ul>
                  </span>
                ),
              },
              {
                title: "What are Advertising Credits used for?",
                content: (
                  <span>
                    Advertising Credits allow users to:
                    <ul className="my-2 pl-10 w-full list-decimal text-left leading-relaxed tracking-wide text-base text-black">
                      <li>
                        Promote their company name with a <a href="#">link</a>{" "}
                        inside active trade
                      </li>
                      <li>Promote the trade on Trade Quotes bar</li>
                      <li>
                        Promote the trade email for all users who have
                        subscribed to promotional material
                      </li>
                      <li>
                        Publish content in the News section of this platform.
                        Read{" "}
                        <Link
                          className="text-sky-700 underline cursor-pointer"
                          to="/footer/partner_content"
                        >
                          Partner Content
                        </Link>{" "}
                        for more information.
                      </li>
                    </ul>
                  </span>
                ),
              },
              {
                title: "How to use Advertising Credits?",
                content: (
                  <span>
                    When user is adding a new trade, under Add New Trade page,
                    in the end of the page there is a Promotion section. Users
                    can select different types of promotions for that particular
                    trade.
                    <div className="py-2"></div>
                    Additionally, in the News section, users can choose to
                    Publish New Release to promote personal business content.
                    <div className="py-2"></div>
                    To perform any promotion related activities, users have to
                    use Advertising Credits.
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
