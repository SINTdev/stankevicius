import React from "react";
import { Link } from "react-router-dom";

const ReferenceItem = ({ label }) => {
  return (
    <div className="cursor-pointer w-fit items-center _font-bold text-left leading-normal tracking-normal text-lg text-black">
      {label}{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-4 h-4 ml-2 inline transition-all duration-300 ease-in-out text-black relative -top-[2px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
    </div>
  );
};

const ReferenceLink = ({ label, to }) => {
  return (
    <Link to={to || "#"} className="inline-block">
      <div className="border-b-2 hover:border-transparent border-black cursor-pointer w-fit flex items-center _font-bold leading-normal tracking-normal text-base text-black">
        {label}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 ml-1 transition-all duration-300 ease-in-out text-black relative top-[0px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </div>
    </Link>
  );
};

export default function SourcingProcurement() {
  return (
    <div className="flex flex-col">
      <div className="mb-3 w-full text-left text-5xl _font-bold leading-tight tracking-tight text-black">
        Approaching markets with authority
      </div>
      <div className="w-full text-left text-xl _font-bold leading-relaxed tracking-normal text-black">
        We use our global network of traders and global suppliers to assist
        clients in accessing products and commodities at the best possible rate.
        Our insider trading network is well established and we have options to
        source and procure various of products from global markets.
      </div>
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        Product variety and accessibility
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We have been trading various products and heavy commodities since 2016.
        Our group has been in the industry for nearly a decade managing
        international trade clients, supervising contracts and providing due
        diligence checks. We have been long enough in the market to analyze,
        learn and understand the importance of genuine supply source.
      </div>{" "}
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Over the years we have been protecting clients against fraud and
        misconduct, however during this time we have also discovered the
        promising side of the supply chain business. We are now able to provide
        a wide inventory of various products and commodities through our
        internal network. Additionally, we have also developed an{" "}
        <ReferenceLink label={"Interactive Trade Platform"} /> to help buyers,
        sellers and regular traders navigate the global market trade business.
      </div>
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left text-4xl leading-tight tracking-tight text-black">
        Negotiating is in our business DNA
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Pricing is perhaps the most important element of the entire trade deal
        and not because of the spending value but because of the indications as
        different pricing can reveal whether the trade is genuine or not.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We assist clients in negotiation process against their counter-parties,
        traders and involved brokers. At times we may also enter and negotiate
        against end producers and manufacturers, shipping and logistics vendors,
        and inspection agents. We tend to negotiate between all the stakeholders
        that are involved in the business.
      </div>
      <div className="py-3"></div>
      <div className="bg-[#F4F4F4] px-4 py-5">
        <div className="mt-3 w-full text-left mb-2 text-2xl _font-bold leading-tight tracking-tight text-black">
          Providing access to global market inventory
        </div>
        <div className="flex md:flex-row flex-col-reverse md:space-x-4 space-x-0 justify-center">
          <div className="flex flex-col space-y-6 w-full md:w-3/5">
            <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
              We have developed a perpetual platform to provide access to global
              market inventory of various products and commodities. By
              automating the process of calling for buy and sell requests, we
              believe Stankevicius International can improve general trading
              environment on a global scale.
            </div>{" "}
            <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
              As a private trade consulting firm, we have strong relations and
              network around the world which are only accessible to private
              clients. However, with the help of technology and data science, we
              have released an open interactive trade platform to enable buy and
              sell interactions between buying and selling parties, and also
              brokers.
            </div>{" "}
            <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
              At the same time, even though most of the features are available
              to public, we have kept the business confidentiality to the
              highest level where we intercept the trading activities by
              ourselves and we supervise each trade request unless:
            </div>
            <ul class="list-[square] pl-6 marker:text-2xl space-y-3 mb-3">
              <li>
                Trade has been promoted publicly including promoter’s contact
                details and third party web addresses.
              </li>
              <li>
                We decide to open a direct communication between all interactive
                parties without our involvement.
              </li>
            </ul>{" "}
            <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
              International trade markets are huge of opportunities, and as
              professional trading house, we emphasize that our trading platform
              will disrupt trade technologies and become the market leading
              solution.
            </div>{" "}
            <div className="py-5"></div>{" "}
          </div>
          <div className="flex flex-col w-full md:w-2/5 md:mt-16 my-10">
            <div className="w-full text-left font-extralight text-4xl md:text-7xl leading-tight text-[#0460a9]">
              <img
                src="https://www.reporting.novartis.com/2022/_assets/gallery/sdg-8.svg"
                className="h-[100px] w-[100px]"
              />
            </div>
            <div className="py-3"></div>{" "}
            <div className="w-full text-left leading-relaxed tracking-wide text-base text-black">
              UN SDG 8 goal is to: Promote sustained, inclusive and sustainable
              economic growth, full and productive employment and decent work
              for all.
            </div>
            <div className="py-3"></div>{" "}
            <div className="w-full _font-bold text-left leading-relaxed tracking-wide text-base text-black">
              Stankevicius Group is actively contributing to UN Sustainable
              Development Goal impact program.
            </div>
          </div>
        </div>
      </div>
      <div className="py-3"></div>{" "}
      <div className="flex flex-col my-3">
        <img src="/assets/sourcing.png" />
      </div>
      <div className="py-3"></div>{" "}
      <div className="bg-[#F4F4F4] px-6 py-4 flex flex-col justify-center">
        <div className="py-5 w-full text-left text-3xl _font-bold leading-tight tracking-tight text-black">
          Related links and disclosures
        </div>
        <div className="flex flex-col space-y-5">
          <ReferenceItem label={"Trading Policy"} />
          <ReferenceItem label={"Safety Trading Regulatory Policy"} />
          <ReferenceItem label={"Trading Risks"} />
          <ReferenceItem
            label={"Terms of Use and Purchase Policy of Advertising Credits"}
          />
          <ReferenceItem
            label={"Advertising Liabilities, Guidelines and Policy"}
          />
        </div>
        <div className="py-5"></div>{" "}
      </div>
    </div>
  );
}
