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

export default function SourcingProcurement() {
  return (
    <div className="flex flex-col">
      <div className="mb-3 w-full text-left text-5xl _font-bold leading-tight tracking-tight text-black">
        Flexible logistics in complex international markets
      </div>
      <div className="w-full text-left text-xl _font-bold leading-relaxed tracking-normal text-black">
        As a long-term trading consultant over the years we have established
        strong relationships with private logistics companies. Very often
        logistics cost tend to increase due to various geo-political and various
        natural events which may last for many months affecting product
        deliveries. We help clients to negotiate the best logistics rate for
        international shipments during all times.
      </div>
      <div className="py-6"></div>
      <div className="flex flex-col space-y-3 overflow-auto">
        <span className="_font-bold text-lg tracking-tight">
          People performance indicators
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
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        Changes to our organizational model
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Executing on our strategy as a focused medicines company requires us to
        work differently. We reorganized our company to create a more agile and
        simpler organization that is aligned with our focused strategy and will
        support innovation, growth and productivity. Regrettably, our
        Transforming for Growth initiative also entails job losses as we reshape
        our company to focus on our core Innovative Medicines business.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We recognize that these changes cause considerable uncertainty for many
        of our employees. To manage the process, we put in place six basic
        principles:
      </div>
      <div className="py-3"></div>
      <ul class="list-[square] pl-6 marker:text-2xl space-y-3 mb-3">
        <li>
          <span className="_font-bold">Fairness in decision-making:</span> all
          decisions were taken in line with our Code of Ethics and Values and
          Behaviors.
        </li>
        <li>
          <span className="_font-bold">Fairness in decision-making:</span> where
          units were merged, we ensured proper balance in terms of both
          organizational structure and opportunities for leadership positions.
        </li>
        <li>
          <span className="_font-bold">Fairness in decision-making:</span>{" "}
          throughout the process, we worked to ensure equal opportunities for
          all employees to maintain our commitment to diversity, equity and
          inclusion.
        </li>
        <li>
          <span className="_font-bold">Fairness in decision-making:</span> those
          affected by the changes had access to various support programs to help
          them transition to new roles, either within or outside Novartis.
        </li>
      </ul>{" "}
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Our business produces enormous amounts of data, not only from research
        and development but also from production, distribution and marketing. We
        are taking advantage of this resource to improve productivity and spur
        innovation
      </div>{" "}
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Our business produces enormous amounts of data, not only from research
        and development but also from production, distribution and marketing. We
        are taking advantage of this resource to improve productivity and spur
        innovation
      </div>
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        Investing in our culture
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Our Generative Chemistry project, for example, helps scientists at the
        Novartis Institutes for Biomedical Research (NIBR) speed up the
        discovery of new high-value medicines. The process for researching and
        developing new medicines is complex, requiring the evaluation of
        hundreds of thousands of candidate compounds before a project reaches
        the clinical trial stage. We use machine learning algorithms to identify
        new patterns and suggest molecules to synthesize in the lab.
      </div>
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left text-4xl leading-tight tracking-tight text-black">
        Diversity, equity and inclusion (DEI)
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
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Our business produces enormous amounts of data, not only from research
        and development but also from production, distribution and marketing. We
        are taking advantage of this resource to improve productivity and spur
        innovation
      </div>
      <div className="py-6"></div>
      <div className="flex flex-col space-y-3 overflow-auto">
        <span className="_font-bold text-lg tracking-tight">
          Diversity, equity and inclusion (DEI) performance indicators
        </span>
        <table className="w-full text-sm text-black">
          <thead className="text-sm text-right text-gray-900 uppercase">
            <tr className="border-b-2 border-[#4472c4]">
              <th scope="col" className="w-[70%] pl-6 py-2.5 text-left"></th>
              <th scope="col" className="pl-6 py-2.5 _font-bold">
                2022
              </th>
              <th scope="col" className="pl-6 py-2.5 font-light">
                2021
              </th>
              <th scope="col" className="pl-6 py-2.5 font-light">
                2020
              </th>
            </tr>
          </thead>
          <tbody className="text-right whitespace-nowrap">
            <tr className="bg-white border-b border-[#4472c4]">
              <th
                scope="row"
                className="pl-2 py-2.5 text-[#4472c4] text-left font-medium whitespace-nowrap dark:text-white"
              >
                Gender representation (% female / % male) 1
              </th>
              <td className="pl-6 py-2.5 _font-bold"></td>
              <td className="pl-6 py-2.5"></td>
              <td className="pl-6 py-2.5"></td>
            </tr>
            <tr className="bg-white hover:bg-black hover:text-white border-b border-[#4472c4]">
              <th
                scope="row"
                className="pl-6 py-2.5 text-left font-medium whitespace-nowrap dark:text-white"
              >
                Headcount 1
              </th>
              <td className="pl-6 py-2.5 _font-bold">105 533</td>
              <td className="pl-6 py-2.5">105 533</td>
              <td className="pl-6 py-2.5">105 533</td>
            </tr>
            <tr className="bg-white hover:bg-black hover:text-white border-b border-[#4472c4]">
              <th
                scope="row"
                className="pl-6 py-2.5 text-left font-medium whitespace-nowrap dark:text-white"
              >
                Full-time equivalent positions 1
              </th>
              <td className="pl-6 py-2.5 _font-bold">105 533</td>
              <td className="pl-6 py-2.5">105 533</td>
              <td className="pl-6 py-2.5">105 533</td>
            </tr>
            <tr className="bg-white hover:bg-black hover:text-white border-b border-[#4472c4]">
              <th
                scope="row"
                className="pl-6 py-2.5 text-left font-medium whitespace-nowrap dark:text-white"
              >
                Percentage turnover: voluntary / overall
              </th>
              <td className="pl-6 py-2.5 _font-bold">105 533</td>
              <td className="pl-6 py-2.5">105 533</td>
              <td className="pl-6 py-2.5">105 533</td>
            </tr>{" "}
            <tr className="bg-white hover:bg-black hover:text-white border-b border-[#4472c4]">
              <th
                scope="row"
                className="pl-6 py-2.5 text-left font-medium whitespace-nowrap dark:text-white"
              >
                Headcount 1
              </th>
              <td className="pl-6 py-2.5 _font-bold">105 533</td>
              <td className="pl-6 py-2.5">105 533</td>
              <td className="pl-6 py-2.5">105 533</td>
            </tr>
            <tr className="bg-white hover:bg-black hover:text-white border-b border-[#4472c4]">
              <th
                scope="row"
                className="pl-6 py-2.5 text-left font-medium whitespace-nowrap dark:text-white"
              >
                Full-time equivalent positions 1
              </th>
              <td className="pl-6 py-2.5 _font-bold">105 533</td>
              <td className="pl-6 py-2.5">105 533</td>
              <td className="pl-6 py-2.5">105 533</td>
            </tr>
            <tr className="bg-white hover:bg-black hover:text-white border-b border-[#4472c4]">
              <th
                scope="row"
                className="pl-6 py-2.5 text-left font-medium whitespace-nowrap dark:text-white"
              >
                Percentage turnover: voluntary / overall
              </th>
              <td className="pl-6 py-2.5 _font-bold">105 533</td>
              <td className="pl-6 py-2.5">105 533</td>
              <td className="pl-6 py-2.5">105 533</td>
            </tr>
          </tbody>
        </table>
        <ol class="list-decimal marker:text-xs text-sm pl-6 pt-2">
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
      <div className="py-3"></div>
      <div className="border-t-2 border-[#4472c4] py-2">
        <div className="flex flex-col space-y-3 overflow-auto">
          <span className="flex flex-row items-center space-x-1">
            <span className="_font-bold text-lg tracking-tight">
              Progress against ESG targets
            </span>
            <span className="text-lg tracking-tight">People</span>
          </span>
          <table className="w-full text-sm text-black">
            <thead className="text-sm text-left text-[#4472c4]">
              <tr className="border-b border-black">
                <th scope="col" className="pl-2 py-2.5">
                  Target
                </th>
                <th scope="col" className="pl-2 py-2.5 border-l border-black">
                  Progress
                </th>
              </tr>
            </thead>
            <tbody className="text-left whitespace-nowrap">
              <tr className="bg-white border-b border-black">
                <td className="pl-2 py-2.5">
                  Close the gender pay gap by 2023
                </td>
                <td className="pl-2 py-2.5 border-l border-black">
                  On track: +3.1% mean pay gap as of Dec. 31, 2021
                </td>
              </tr>
              <tr className="bg-white border-b border-black">
                <td className="pl-2 py-2.5">
                  Close the gender pay gap by 2023
                </td>
                <td className="pl-2 py-2.5 border-l border-black">
                  On track: +3.1% mean pay gap as of Dec. 31, 2021
                </td>
              </tr>
              <tr className="bg-white border-b border-black">
                <td className="pl-2 py-2.5">
                  Close the gender pay gap by 2023
                </td>
                <td className="pl-2 py-2.5 border-l border-black">
                  On track: +3.1% mean pay gap as of Dec. 31, 2021
                </td>
              </tr>
              <tr className="bg-white border-b-2 border-[#4472c4]">
                <td className="pl-2 py-2.5">
                  Close the gender pay gap by{" "}
                  <span className="_font-bold">2023</span>
                </td>
                <td className="pl-2 py-2.5 border-l border-black">
                  On track: 47% of employees with pay transparency to external
                  benchmarks
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        Building a data and digital backbone
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
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Our business produces enormous amounts of data, not only from research
        and development but also from production, distribution and marketing. We
        are taking advantage of this resource to improve productivity and spur
        innovation
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Our business produces enormous amounts of data, not only from research
        and development but also from production, distribution and marketing. We
        are taking advantage of this resource to improve productivity and spur
        innovation
      </div>
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        Engaging patients and healthcare professionals
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
      <div className="mb-3 w-full text-left font-extralight text-3xl italic leading-tight text-[#0460a9]">
        More than 250 specialist data scientists are embedded within NIBR
        project teams to help optimize and accelerate key aspects of our
        research
      </div>
      <div className="py-3"></div>{" "}
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        At the same time, our Next Generation Engagement program uses a mix of
        data analysis, behavioral insights and communications technology to
        achieve the most effective mix of face-to-face and digital
        communications for healthcare professionals in key markets. For example,
        we personalized 36% of touchpoints with healthcare professionals for
        Cosentyx in the US. This personalized approach has led to increased
        customer engagement and supported sales growth.
      </div>
      <div className="py-3"></div>{" "}
      <div className="bg-[#F4F4F4] px-4 py-5">
        <div className="mt-3 w-full text-left mb-2 text-2xl _font-bold leading-tight tracking-tight text-black">
          Providing a safe and secure working environment
        </div>
        <div className="flex flex-row space-x-4 justify-center">
          <div className="flex flex-col space-y-6 w-3/5">
            <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
              Our commitment to occupational health and safety is built into our
              Code of Ethics. In addition, we have strict health and safety
              controls across our sites that go beyond legal requirements:
            </div>
            <ul class="list-[square] pl-6 marker:text-2xl space-y-3 mb-3">
              <li>
                At all our sites, we conduct regular audits to assess compliance
                with regulations and internal controls.
              </li>
              <li>
                At all our sites, we conduct regular audits to assess compliance
                with regulations and internal controls.
              </li>
              <li>
                At all our sites, we conduct regular audits to assess compliance
                with regulations and internal controls.
              </li>
            </ul>{" "}
            <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
              At the same time, our Next Generation Engagement program uses a
              mix of data analysis, behavioral insights and communications
              technology to achieve the most effective mix of face-to-face and
              digital communications for healthcare professionals in key
              markets.
            </div>{" "}
            <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
              At the same time, our Next Generation Engagement program uses a
              mix of data analysis, behavioral insights and communications
              technology to achieve the most effective mix of face-to-face.
            </div>
            <div className="py-5"></div>{" "}
          </div>
          <div className="flex flex-col w-2/5 mt-16">
            <div className="w-full text-left font-extralight text-4xl md:text-7xl leading-tight text-[#0460a9]">
              <img
                src="https://www.reporting.novartis.com/2022/_assets/gallery/sdg-8.svg"
                className="h-[100px] w-[100px]"
              />
            </div>
            <div className="py-3"></div>{" "}
            <div className="w-full text-left leading-relaxed tracking-wide text-base text-black">
              UN SDG target 8.8 reads: Protect labor rights and promote safe and
              secure working environments for all workers, including migrant
              workers, in particular women migrants, and those in precarious
              employment.
            </div>
            <div className="py-3"></div>{" "}
            <div className="w-full _font-bold text-left leading-relaxed tracking-wide text-base text-black">
              Please see "
              <span className="border-b-2 cursor-pointer border-black hover:border-transparent">
                Measuring our impact
              </span>
              " for more information on our impact on the SDGs
            </div>
          </div>
        </div>
      </div>
      <div className="py-3"></div>{" "}
      <div className="flex flex-col my-3">
        <img src="https://www.reporting.novartis.com/2022/_assets/gallery/51-working-environment.jpg" />
      </div>
      <div className="py-3"></div>{" "}
      <div className="bg-[#F4F4F4] px-6 py-4 flex flex-col justify-center">
        <div className="py-5 w-full text-left text-3xl _font-bold leading-tight tracking-tight text-black">
          Related links and disclosures
        </div>
        <div className="flex flex-col space-y-5">
          <ReferenceItem label={"Data Privacy Policy"} />
          <ReferenceItem label={"Novartis Privacy Hub"} />
          <ReferenceItem label={"Position on Regulatory Data Protection"} />
          <ReferenceItem
            label={"Our Commitment to Ethical and Responsible Use of AI"}
          />
        </div>
        <div className="py-5"></div>{" "}
      </div>
    </div>
  );
}
