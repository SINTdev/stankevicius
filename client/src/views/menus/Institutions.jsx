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

const TypeATableTR = ({ c, i, o, tm }) => {
  return (
    <tr className="bg-white hover:bg-black hover:text-white border-b border-[#4472c4]">
      <th
        scope="row"
        className="px-2 py-2.5 text-left font-medium whitespace-nowrap dark:text-white"
      >
        {c}
      </th>
      <td className="px-2 py-2.5 _font-bold">{i}</td>
      <td className="px-2 py-2.5">{o}</td>
      <td className="px-2 py-2.5">{tm}</td>
    </tr>
  );
};

export default function Institutions() {
  return (
    <div className="flex flex-col">
      <div className="mb-3 w-full text-left text-5xl _font-bold leading-tight tracking-tight text-black">
        Market moving business
      </div>
      <div className="w-full text-left text-xl _font-bold leading-relaxed tracking-normal text-black">
        We help institutions to access large quantity of various product supply.
        We use our network to tap into global markets and source various
        products and commodities at reasonable cost with extensive supervision
        efforts on due diligence against the business counter-parties and fraud
        intentions.
      </div>
      <div className="py-3"></div>{" "}
      <div className="flex flex-col my-3">
        <img src="/assets/institutional.png" />
      </div>
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        Access to global markets
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We have been operating in commodity trading business since 2016. We use
        technology and science data to understand trade market and be able to
        extract and separate genuine business trades from misconducts.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We use machine learning to identify worthy trades in our interactive
        platform, and we provide privileged client consulting services for a
        complete trade management from beginning till the end, including
        procurement, due diligence, negotiations, sales, logistics and
        operations.
      </div>
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left text-4xl leading-tight tracking-tight text-black">
        How we help institutions to acquire market share in global markets
        locally
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We work with international trading houses and emerging market
        governments. We help foreign institutions to enter new markets through
        infrastructure development and trade projects organized by government.
        We have established global network for trade and development projects
        including Europe, US, South America, Africa, The Middle East, Asia
        Pacific and China.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        As part of our global market strategy, we note foreign institutions
        before entering new markets to do proper due diligence on the
        counter-parties to measure possible risks. At times, we notice that due
        to attractive opportunities, companies tend to forget risk management
        and may end up losing capital. We advice and guide professional clients
        how to navigate and manoeuvre in global markets, especially in the
        emerging markets.
      </div>
      <div className="py-3"></div>
      <div className="border-t-2 border-[#4472c4] py-2">
        {" "}
        <span className="flex flex-row items-center space-x-1 mb-1">
          <span className="_font-bold text-lg tracking-tight">
            Regions we have an edge in
          </span>
          <span className="text-lg tracking-tight">Trading</span>
        </span>
        <div className="overflow-auto">
          <table className="w-full text-sm text-black">
            <thead className="text-sm text-left text-[#4472c4]">
              <tr className="border-b border-black">
                <th
                  scope="col"
                  className="bg-white sticky left-0 pl-2 pr-2 py-2.5"
                >
                  Country/Region
                </th>
                <th scope="col" className="pl-2 py-2.5 border-l border-black">
                  The Edge
                </th>
              </tr>
            </thead>
            <tbody className="text-left whitespace-nowrap">
              <tr className="bg-white border-b border-black">
                <td className="pr-2 pl-2 py-2.5 bg-white sticky left-0">
                  United Arab Emirates
                </td>
                <td className="pl-2 py-2.5 border-l border-black">
                  Market entry strategy and guidance, government relations.
                </td>
              </tr>
              <tr className="bg-white border-b border-black">
                <td className="pr-2 pl-2 py-2.5 bg-white sticky left-0">
                  Bahrain
                </td>
                <td className="pl-2 py-2.5 border-l border-black">
                  Market entry strategy and guidance, government relations.
                </td>
              </tr>
              <tr className="bg-white border-b border-black">
                <td className="pr-2 pl-2 py-2.5 bg-white sticky left-0">
                  Saudi Arabia
                </td>
                <td className="pl-2 py-2.5 border-l border-black">
                  Market entry strategy and guidance, investor relations,
                  government.
                </td>
              </tr>
              <tr className="bg-white border-b border-black">
                <td className="pr-2 pl-2 py-2.5 bg-white sticky left-0">
                  Kazakhstan
                </td>
                <td className="pl-2 py-2.5 border-l border-black">
                  Large product and commodity supplier base, government
                  relations.
                </td>
              </tr>
              <tr className="bg-white border-b border-black">
                <td className="pr-2 pl-2 py-2.5 bg-white sticky left-0">
                  China
                </td>
                <td className="pl-2 py-2.5 border-l border-black">
                  Large product supplier base, market entry strategy.
                </td>
              </tr>
              <tr className="bg-white border-b border-black">
                <td className="pr-2 pl-2 py-2.5 bg-white sticky left-0">
                  Indonesia
                </td>
                <td className="pl-2 py-2.5 border-l border-black">
                  Investor relations, market entry strategy, commodity supply.
                </td>
              </tr>
              <tr className="bg-white border-b border-black">
                <td className="pr-2 pl-2 py-2.5 bg-white sticky left-0">
                  United States
                </td>
                <td className="pl-2 py-2.5 border-l border-black">
                  Large buyer pool, investor relations.
                </td>
              </tr>
              <tr className="bg-white border-b-2 border-[#4472c4]">
                <td className="pr-2 pl-2 py-2.5 bg-white sticky left-0">
                  Africa
                </td>
                <td className="pl-2 py-2.5 border-l border-black">
                  Strong government relations, large trading network.
                </td>
              </tr>
            </tbody>
          </table>
        </div>{" "}
        <ol class="list-decimal marker:text-xs text-sm pl-4 pt-4">
          <li>
            “Country/Region” is the defined area of our strong position in terms
            of network and connections.
          </li>
          <li>
            “The Edge” is the unique value that region provides and we have
            access to.
          </li>
        </ol>
      </div>
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        Building global relationships
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We have spent years to establish international network of global traders
        and various trading organizations and governments. In international
        trade sector relationships are the key focus to strategize for. Managing
        global relations is about increasing your reach not just to suppliers
        and clients but also capital.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We advice and guide corporate clients on various international ventures
        whether its international trade, project development or fund raising
        from private equity and public markets. We work with multiple
        international companies worldwide subcontracting and reselling
        government projects between world’s key regions.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We provide access and market entry to the most difficult to enter and
        most private sectors in the global markets. Our business reach within
        global trade is extensive and we help clients to maximize their benefits
        and extract as much value as possible from our ventures together.
      </div>
      <div className="py-3"></div>{" "}
      
      <div className="bg-[#F4F4F4] px-4 py-10 flex md:flex-row flex-col-reverse md:space-x-4 space-x-0 justify-center">
        <div className="flex flex-col space-y-6 md:w-3/5 w-full">
          <div className="mt-3 w-full text-left mb-2 text-2xl _font-bold leading-tight tracking-tight text-black">
            Constantly learning system
          </div>
          <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
            Our interactive trade platform is a constantly learning system. It
            keeps collecting new data and learns from it. Our vision is to
            develop an advanced global trade platform to facilitate global trade
            and capture the best opportunities in the market. We have started
            developing our system in 2020 when we saw a significantly volatile
            action movement in trade sector.
          </div>{" "}
          <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
            We know and understand that global trade powers global economy, yet
            if we could make the trading processes simpler and more efficient,
            and if we could just slightly impact world’s global trade market, we
            are sure that global economy would perform more efficiently than
            ever before.
          </div>{" "}
        </div>
        <div className="flex flex-col md:w-2/5 w-full md:mt-16 my-10">
          <div className="-translate-x-2 w-full text-left font-extralight text-4xl md:text-7xl leading-tight text-[#0460a9]">
            1st
          </div>

          <div className="w-full text-left leading-relaxed tracking-wide text-base text-black">
            <span className="mr-1.5 _font-bold text-left leading-relaxed tracking-wide text-base text-black">
              Stankevicius International is aiming to be the first
            </span>
            trade management consulting company to build the most innovative
            technology that enhances trade business on the global scale.
          </div>
        </div>
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
