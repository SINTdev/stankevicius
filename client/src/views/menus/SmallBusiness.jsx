import React from "react";
import { Link } from "react-router-dom";

const ReferenceItem = ({ label }) => {
  return (
    <div className="cursor-pointer w-fit flex flex-row items-center _font-bold text-left leading-normal tracking-normal text-lg text-black">
      {label}{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-4 h-4 ml-2 transition-all duration-300 ease-in-out text-black relative top-[1px]"
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
      <td className="px-2 py-2.5">{i}</td>
      <td className="px-2 py-2.5">{o}</td>
      <td className="px-2 py-2.5">{tm}</td>
    </tr>
  );
};

export default function SmallBusiness() {
  return (
    <div className="flex flex-col">
      <div className="mb-3 w-full text-left text-5xl _font-bold leading-tight tracking-tight text-black">
        Build trust with transparency
      </div>
      <div className="w-full text-left text-xl _font-bold leading-relaxed tracking-normal text-black">
        We aim to increase access to various products and commodities for
        clients around the world, following high standard product quality. We
        help small businesses to navigate complex international trade markets by
        providing professional advice and market entry guidance. We also offer
        wide variety of product options.
      </div>
      <div className="py-3"></div>{" "}
      <div className="flex flex-col my-3">
        <img src="/assets/small_business.png" />
      </div>
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        Access to products
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Our business produces large amount of data, not only from research and
        development but also from our network partners and platform users.
        Clients have a direct access to products available in our system
        including pricing and all relevant trade details. Clients can also add
        their own inventory to our system to increase visibility of their
        products and opportunity to sell.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Our new interactive platform provides speedy, up to date product
        information and trade deal options available in global markets. We use
        machine learning algorithms to identify new patterns and get
        recommendations on the most genuine trades.
      </div>
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left text-4xl leading-tight tracking-tight text-black">
        Our approach to trading
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        The process of getting a trade deal through can be complex, requiring
        evaluation of multiple parties from both transactional counter-parties.
        To reduce the workload, we provide clients with pre-arranged and
        pre-selected trade options for specific mainstream products. Clients can
        view <ReferenceLink label={"Live Product Inventory"} /> and available
        trades on our interactive trade platform.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        As a part of our organization of pre-arranged trade deals, we are
        committed to further improving business transparency. Based on the
        latest data available as of October 28, 2023, Stankevicius International
        represents various commodity and product suppliers from Kazakhstan.
      </div>
      <div className="py-3"></div>
      <div className="flex flex-col space-y-3 overflow-auto overflow-auto">
        <span className="_font-bold text-lg tracking-tight">
          We have access to mainstream market trending commodities and products
        </span>
        <table className="w-full text-sm text-black">
          <thead className="text-sm text-right text-gray-900 uppercase whitespace-nowrap">
            <tr className="border-b-2 border-[#4472c4]">
              {/* <th scope="col" className="w-[70%] px-2 py-2.5 text-left">
                Commodity
              </th> */}
              <th
                scope="col"
                className="px-2 py-2.5 text-[#4472c4] _font-bold text-left font-medium whitespace-nowrap dark:text-white"
              >
                Commodity
              </th>
              <th scope="col" className="px-2 py-2.5 _font-bold">
                Industry
              </th>
              <th scope="col" className="px-2 py-2.5 _font-bold">
                Origin
              </th>
              <th scope="col" className="px-2 py-2.5 _font-bold">
                Target Market
              </th>
            </tr>
          </thead>
          <tbody className="text-right whitespace-nowrap">
            <TypeATableTR
              c="Mineral Fertilizers"
              i="Agriculture"
              o="Kazakhstan"
              tm="Global"
            />
            <TypeATableTR
              c="Urea N-46"
              i="Agriculture"
              o="Turkmenistan"
              tm="Global"
            />
            <TypeATableTR
              c="Amonia Nitrite"
              i="Agriculture"
              o="Kazakhstan"
              tm="CIS/GCC"
            />
            <TypeATableTR
              c="Amonia Sulfate"
              i="Agriculture"
              o="Kazakhstan"
              tm="CIS/GCC"
            />
            <tr className="bg-white border-b-2 border-[#4472c4]">
              <th
                scope="row"
                className="px-2 py-2.5 uppercase text-[#4472c4] _font-bold text-left font-medium whitespace-nowrap dark:text-white"
              >
                Product
              </th>
              <td className="px-2 py-2.5 _font-bold"></td>
              <td className="px-2 py-2.5"></td>
              <td className="px-2 py-2.5"></td>
            </tr>{" "}
            <TypeATableTR
              c="Lubricants"
              i="Various"
              o="Kazakhstan"
              tm="Europe/Africa"
            />
            <TypeATableTR
              c="Diesel Generators"
              i="Various"
              o="Kazakhstan"
              tm="GCC/Africa"
            />
            <TypeATableTR
              c="EV Charging Infrastructure"
              i="Various"
              o="Kazakhstan"
              tm="Europe/GCC/Africa"
            />
          </tbody>
        </table>
        <ol class="list-decimal marker:text-xs text-sm pl-4 pt-2">
          <li>“Commodity” reflects to the name of the heavy commodity.</li>
          <li>“Product” reflects to an actual physical or liquid product.</li>
          <li>
            Industry is where the particular commodity or product is being used
            in.
          </li>
          <li>
            Origin is the country where the commodity or product is made in.
          </li>
          <li>
            These above mentioned commodities and products are supplied by
            eligible and vetted suppliers that have a target market for specific
            countries and regions.
          </li>
        </ol>
      </div>{" "}
      <div className="py-3"></div>
      {/* <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        Access to medicines
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Our business produces enormous amounts of data, not only from research
        and development but also from production, distribution and marketing. We
        are taking advantage of this resource to improve productivity and spur
        innovation
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Our Generative Chemistry project, for example, helps scientists at the
        Novartis Institutes for Biomedical Research (NIBR) speed up the
        discovery of new high-value medicines. The process for researching and
        developing new medicines is complex, requiring the evaluation of
        hundreds of thousands of candidate compounds before a project reaches
        the clinical trial stage. We use machine learning algorithms to identify
        new patterns and suggest molecules to synthesize in the lab.
      </div>{" "}
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left text-4xl leading-tight tracking-tight text-black">
        Our approach
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Our Generative Chemistry project, for example, helps scientists at the
        Novartis Institutes for Biomedical Research (NIBR) speed up the
        discovery of new high-value medicines. The process for researching and
        developing new medicines is complex, requiring the evaluation of
        hundreds of thousands of candidate compounds before a project reaches
        the clinical trial stage. We use{" "}
        <ReferenceLink label={"Machine Learning"} /> algorithms to identify new
        patterns and suggest molecules to synthesize in the lab.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        As part of our public pledge to the{" "}
        <ReferenceLink
          label={"UN's Equal Pay International Coalition (EPIC)"}
        />
        , we are also committed to further improving pay equity and
        transparency. Based on the latest data available as of December 31,
        2021, Novartis has a global mean pay gap of +3.1% and a global median
        pay gap of –3.0%, compared with +3.3% and –2.3%, respectively, in the
        prior year. While we acknowledge this percentage is influenced by
        worldwide workforce demographics, our global mean pay gap is
        significantly ahead of the Bloomberg benchmark of +19% mean for the same
        period.
      </div> */}
      {/* <div className="flex flex-col space-y-3 overflow-auto overflow-auto">
        <span className="_font-bold text-lg tracking-tight">
          Access to healthcare performance indicators
        </span>
        <table className="w-full text-sm text-black">
          <thead className="text-sm text-right text-gray-900 uppercase">
            <tr className="border-b-2 border-[#4472c4]">
              <th scope="col" className="w-[70%] px-2 py-2.5 text-left"></th>
              <th scope="col" className="px-2 py-2.5 _font-bold">
                2022
              </th>
              <th scope="col" className="px-2 py-2.5 font-light">
                2021
              </th>
              <th scope="col" className="px-2 py-2.5 font-light">
                2020
              </th>
            </tr>
          </thead>
          <tbody className="text-right whitespace-nowrap">
            <tr className="bg-white hover:bg-black hover:text-white border-b border-[#4472c4]">
              <th
                scope="row"
                className="px-2 py-2.5 text-left font-medium whitespace-nowrap dark:text-white"
              >
                Headcount 1
              </th>
              <td className="px-2 py-2.5 _font-bold">105 533</td>
              <td className="px-2 py-2.5">105 533</td>
              <td className="px-2 py-2.5">105 533</td>
            </tr>
            <tr className="bg-white hover:bg-black hover:text-white border-b border-[#4472c4]">
              <th
                scope="row"
                className="px-2 py-2.5 text-left font-medium whitespace-nowrap dark:text-white"
              >
                Full-time equivalent positions 1
              </th>
              <td className="px-2 py-2.5 _font-bold">105 533</td>
              <td className="px-2 py-2.5">105 533</td>
              <td className="px-2 py-2.5">105 533</td>
            </tr>
            <tr className="bg-white hover:bg-black hover:text-white border-b border-[#4472c4]">
              <th
                scope="row"
                className="px-2 py-2.5 text-left font-medium whitespace-nowrap dark:text-white"
              >
                Percentage turnover: voluntary / overall
              </th>
              <td className="px-2 py-2.5 _font-bold">105 533</td>
              <td className="px-2 py-2.5">105 533</td>
              <td className="px-2 py-2.5">105 533</td>
            </tr>
            <tr className="bg-white border-b border-[#4472c4]">
              <th
                scope="row"
                className="px-2 py-2.5 text-[#4472c4] _font-bold text-left font-medium whitespace-nowrap dark:text-white"
              >
                Health and safety
              </th>
              <td className="px-2 py-2.5 _font-bold"></td>
              <td className="px-2 py-2.5"></td>
              <td className="px-2 py-2.5"></td>
            </tr>{" "}
            <tr className="bg-white hover:bg-black hover:text-white border-b border-[#4472c4]">
              <th
                scope="row"
                className="px-2 py-2.5 text-left font-medium whitespace-nowrap dark:text-white"
              >
                Headcount 1
              </th>
              <td className="px-2 py-2.5 _font-bold">105 533</td>
              <td className="px-2 py-2.5">105 533</td>
              <td className="px-2 py-2.5">105 533</td>
            </tr>
            <tr className="bg-white hover:bg-black hover:text-white border-b border-[#4472c4]">
              <th
                scope="row"
                className="px-2 py-2.5 text-left font-medium whitespace-nowrap dark:text-white"
              >
                Full-time equivalent positions 1
              </th>
              <td className="px-2 py-2.5 _font-bold">105 533</td>
              <td className="px-2 py-2.5">105 533</td>
              <td className="px-2 py-2.5">105 533</td>
            </tr>
            <tr className="bg-white hover:bg-black hover:text-white border-b border-[#4472c4]">
              <th
                scope="row"
                className="px-2 py-2.5 text-left font-medium whitespace-nowrap dark:text-white"
              >
                Percentage turnover: voluntary / overall
              </th>
              <td className="px-2 py-2.5 _font-bold">105 533</td>
              <td className="px-2 py-2.5">105 533</td>
              <td className="px-2 py-2.5">105 533</td>
            </tr>
          </tbody>
        </table>
        <ol class="list-decimal marker:text-xs text-sm pl-4 pt-2">
          <li>
            “Headcount” reflects the total number of employees in payroll
            systems. “Full-time equivalent positions” adjusts headcount for
            employees working less than 100%.
          </li>
          <li>
            Since 2022, Novartis reports training hours for internal employees
            only
          </li>
          <li>
            Management defined by Global Job Level Architecture and Novartis Top
            Leaders
          </li>
          <li>Generally non-management employees</li>
          <li>
            Data include all work-related injuries and illnesses, whether
            leading to lost time or not.
          </li>
        </ol>
      </div>
      <div className="py-3"></div> */}
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        How we help small businesses navigate global markets
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Executing international trade contracts for a local business might
        require to work differently. We reorganize local companies and bring
        international business perspective in a new light. We ask questions
        together with clients and solve complex international logistic,
        warehousing and customs issues.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We recognize that international trade processes bring considerable
        uncertainty for many small sized businesses. To manage the process, we
        put in place six basic principles:
      </div>
      <div className="py-3"></div>
      <ul class="list-[square] pl-6 marker:text-2xl space-y-3 mb-3">
        <li>
          <span className="_font-bold">Standard due diligence:</span> before
          processing the business, we must first understand the counter-party we
          would be dealing with.
        </li>
        <li>
          <span className="_font-bold">Pricing:</span> how far fetched is the
          price? Is the price average market price, above market price, under
          market price or way under market price.
        </li>
        <li>
          <span className="_font-bold">
            Understanding payment terms against delivery terms:
          </span>{" "}
          is the payment method acceptable in the first place and is the
          counter-party eligible and trusted enough for such payment method, and
          what would be the risks of delivery against that payment method, and
          vice versa.
        </li>
        <li>
          <span className="_font-bold">Fairness in decision-making:</span>{" "}
          understanding the common sense in a way how both parties see the deal
          flow.
        </li>
        <li>
          <span className="_font-bold">Legal involvement:</span> how legal
          matters are being perceived in the trade deal and how much legal
          ground do both parties include in the trade contract.
        </li>
        <li>
          <span className="_font-bold">Risk vs reward:</span> what are the
          potential risks of the trade and is it worth it or does it sound too
          good to be true.
        </li>
      </ul>{" "}
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We advice clients to look into trade offers from different angles and
        perspectives, and judge information accordingly in comparison to
        available global data.
      </div>{" "}
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        Building data is our digital backbone
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We rely on data accumulated over the years of trading. Our interactive
        platform is constantly collecting new data of trade deals. The more data
        we have the more accurately we can select the most genuine trade deals
        available to the market.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We have access to vast trade information not available to the public,
        and using this information we help clients to navigate markets and
        provide knowledge to better understand the variety of elements of global
        trade.
      </div>
      <div className="py-3"></div>
      <div className="border-t-2 border-[#4472c4] py-2">
        <div className="flex flex-col space-y-3 overflow-auto">
          <span className="flex flex-row items-center space-x-1">
            <span className="_font-bold text-lg tracking-tight">
              How do we read
            </span>
            <span className="text-lg tracking-tight">Pricing Data</span>
          </span>
          <table className="w-full text-sm text-black">
            <thead className="text-sm text-left text-[#4472c4]">
              <tr className="border-b border-black">
                <th scope="col" className="pl-2 py-2.5">
                  Trade Offers
                </th>
                <th scope="col" className="pl-2 py-2.5 border-l border-black">
                  Reading
                </th>
              </tr>
            </thead>
            <tbody className="text-left whitespace-nowrap">
              <tr className="bg-white border-b border-black">
                <td className="pl-2 py-2.5">Under market price</td>
                <td className="pl-2 py-2.5 border-l border-black">
                  Reasonable but to what extent? Large quantity order? Payment
                  term influence?
                </td>
              </tr>
              <tr className="bg-white border-b border-black">
                <td className="pl-2 py-2.5">Heavily discounted price</td>
                <td className="pl-2 py-2.5 border-l border-black">
                  Possible phishing scenario, trying to hook on low price.
                  Requires more clarity.
                </td>
              </tr>
              <tr className="bg-white border-b border-black">
                <td className="pl-2 py-2.5">Over market price</td>
                <td className="pl-2 py-2.5 border-l border-black">
                  Actually low supply or pretending?
                </td>
              </tr>
              <tr className="bg-white border-b-2 border-[#4472c4]">
                <td className="pl-2 py-2.5">Avg. market price</td>
                <td className="pl-2 py-2.5 border-l border-black">
                  Reasonable if logistics make sense.
                </td>
              </tr>
            </tbody>
          </table>
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
