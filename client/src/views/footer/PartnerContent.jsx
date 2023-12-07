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
            Partner Content
          </div>

          <div className="py-5"></div>
          <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
            Users can publish business news material on Stankevicius
            International GO trading platform to promote their business,
            increase brand awareness and gain new leads. Users can publish
            different types of business related content such as company news,
            partnership announcements, new product releases, marketing
            materials, CEO interviews, and other extensive variety of
            promotional business material.
          </div>
          <div className="py-2"></div>
          <div className="py-2"></div>
          <Accordion
            mode="learn"
            items={[
              {
                title: "How to publish news?",
                content: (
                  <span>
                    <ul className="my-2 pl-10 w-full list-decimal text-left leading-relaxed tracking-wide text-base text-black">
                      <li>User has to be logged in</li>
                      <li>Go to Account Client menu and select News</li>
                      <li>Find and click on Publish New Release</li>
                      <li>Write the title of the news release</li>
                      <li>Write the publication</li>
                      <li>
                        Accept{" "}
                        <Link
                          className="text-sky-700 underline cursor-pointer"
                          to="/footer/partner_content"
                        >
                          Partner Content Terms & Conditions and Partner Content
                          Guidelines
                        </Link>
                      </li>
                      <li>
                        Accept the publishing fee. Read{" "}
                        <Link
                          className="text-sky-700 underline cursor-pointer"
                          to="/footer/advertising_credits"
                        >
                          Advertising Credits
                        </Link>{" "}
                        for more information.
                      </li>
                      <li>Click Publish to Industry Insights</li>
                      <li>
                        Your news publication will immediately get published
                        under Indistry Insights.
                      </li>
                    </ul>
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
