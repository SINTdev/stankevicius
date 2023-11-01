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

const TypeATableTR = ({ o, t, th }) => {
  return (
    <tr className="bg-white group hover:bg-black hover:text-white border-b border-[#4472c4]">
      <td className="px-2 py-2.5">{o}</td>
      <td className="px-2 py-2.5">{t}</td>
      <td className="px-2 py-2.5">{th}</td>
    </tr>
  );
};

export default function SourcingProcurement() {
  return (
    <div className="flex flex-col">
      <div className="mb-3 w-full text-left text-5xl _font-bold leading-tight tracking-tight text-black">
        Safety and security protocols first
      </div>
      <div className="w-full text-left text-xl _font-bold leading-relaxed tracking-normal text-black">
        When dealing in international trade, we support clients with security
        supervision and safety protocols. We assist in organizing product and
        shipment inspections with certified inspection agencies. Inspections
        take an important role in the overall trade business as inspections
        reveal the real details about the product and its’ features.
      </div>
      <div className="py-6"></div>
      <div className="flex flex-col space-y-3">
        <span className="_font-bold text-lg tracking-tight">
          Few of the most reputable inspection agencies we work with
        </span>
        <div className="overflow-auto">
          <table className="w-full text-sm text-black">
            <thead className="text-sm text-left text-gray-900">
              <tr className="border-b-2 border-[#4472c4]">
                <th scope="col" className="px-2 py-2.5 _font-bold">
                  Inspection Agency
                </th>
                <th scope="col" className="px-2 py-2.5 font-bold">
                  Services Offered
                </th>
                <th scope="col" className="px-2 py-2.5 font-bold">
                  Industries Served
                </th>
              </tr>
            </thead>
            <tbody className="text-left whitespace-nowrap">
              <TypeATableTR
                o="TÜV Rheinland"
                t="Quality control, testing, and
certification services"
                th="Various, including automotive, manufacturing,
and consumer goods"
              />
              <TypeATableTR
                o="Bureau Veritas"
                t="Inspection, testing, and
certification services
"
                th="Diverse industries, including energy, consumer
products, and food safety"
              />
              <TypeATableTR
                o="SGS"
                t="Inspection, testing, certification,
and verification"
                th="Broad range, including agriculture, automotive,
and electronics"
              />
              <TypeATableTR
                o="Intertek"
                t="Inspection, testing, and
certification services
"
                th="Multiple sectors, such as chemicals, textiles, and
food"
              />
              <TypeATableTR
                o="DEKRA"
                t="Quality assurance, safety, and
certification services"
                th="Automotive, industrial, and electrical sectors"
              />
              <TypeATableTR
                o="Eurofins"
                t="Testing and laboratory services "
                th="Food and beverage, environmental, and
pharmaceuticals
"
              />
              <TypeATableTR
                o="Lloyds Register"
                t="Inspection, classification, and
certification services"
                th="Shipping, marine, and offshore industries"
              />
              <TypeATableTR
                o="UL (Underwriters
Laboratories)"
                t="Testing, inspection, and
              certification"
                th="Various, including electrical and electronics,
              healthcare, and sustainability"
              />
            </tbody>
          </table>
        </div>
        <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
          Note that local inspection agencies may also be reliable and should
          not be overlooked, especially if they have specific expertise in your
          region or industry. When working with foreign markets in Asia, local
          inspection agencies might be more preferable than globally known ones.
        </div>
      </div>
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        How we help clients to conduct inspection checks on their products
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Here's a step-by-step guide on how we assist clients to arrange and
        manage product inspections in foreign markets:
      </div>
      <ul class="list-[square] pl-6 marker:text-2xl space-y-3 mb-3">
        <li>
          <span class="_font-bold">Understand Client Requirements:</span> We
          begin by having a detailed discussion with clients to understand their
          specific requirements, quality standards, and expectations for the
          inspection process. This step is crucial to tailor assistance to
          clients’ needs.
        </li>
        <li>
          <span className="_font-bold">
            Select an Inspection Agency or Team:
          </span>{" "}
          Based on the client's requirements and the nature of the products, we
          recommend a reliable inspection agency or establish an in-house
          quality control team. We ensure that the chosen agency or team is
          well-equipped to handle the inspection.
        </li>
        <li>
          <span className="_font-bold">Inspection Plan Development:</span> We
          collaborate with the client and the selected inspection agency or team
          to create a comprehensive inspection plan. The plan should include
          details like the scope of inspection, inspection stages, criteria, and
          quality standards to be followed.
        </li>
        <li>
          <span className="_font-bold">Schedule Inspections:</span> We
          coordinate with the client to schedule inspections at the relevant
          stages of production or shipment, ensuring that the inspection
          schedule aligns with the production timeline and shipping
          arrangements.
        </li>
        <li>
          <span className="_font-bold">Cost Estimates and Budgeting:</span>{" "}
          Provide the client with a clear breakdown of the costs associated with
          inspection services, including agency fees, travel expenses, and other
          related costs.
        </li>
        <li>
          <span className="_font-bold">Documentation and Agreements:</span> We
          prepare and review the necessary documentation, including agreements
          with the inspection agency or team. Ensure that roles and
          responsibilities are clearly defined, and there is a mutual
          understanding of the inspection process.
        </li>
        <li>
          <span className="_font-bold">Logistics and Coordination:</span> We
          organize the logistics for inspections, including transportation and
          accommodation arrangements if the inspections are conducted at the
          production facility. Ensure that the inspection agency or team has
          access to all the required information and resources.
        </li>
        <li>
          <span className="_font-bold">On-Site Inspection:</span> If possible,
          we coordinate client's representatives with the inspection team to be
          present during inspections. Encourage open communication between the
          client and the inspection agency to address any concerns promptly.
        </li>
        <li>
          <span className="_font-bold">Reporting and Feedback:</span> Once we
          receive comprehensive inspection reports from the agency, we review
          these reports with the client, highlighting any issues, deviations, or
          corrective actions that may be required.
        </li>
        <li>
          <span className="_font-bold">Client Communication:</span> We
          facilitate communication between the inspection agency and the client,
          ensuring that the client is well-informed about the progress of
          inspections, any quality issues, and the outcomes of the inspection.
        </li>
        <li>
          <span className="_font-bold">Quality Improvement:</span> We work
          together with the client to develop strategies for quality
          improvement, should any issues be identified during inspections. We
          encourage corrective actions and preventive measures to enhance
          product quality.
        </li>
        <li>
          <span className="_font-bold">Continuous Monitoring:</span> We continue
          to monitor and support client's quality control efforts, especially if
          inspections are part of an ongoing process. We recommend continuous
          improvement and ensure that the inspection process remains effective.
        </li>
        <li>
          <span className="_font-bold">Documentation and Record Keeping:</span>{" "}
          We maintain records of all communications, agreements, inspection
          reports, and other relevant documentation. These records are essential
          for traceability and reference.
        </li>
      </ul>{" "}
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        By assisting clients through the inspection process, we not only ensure
        the quality of their products but also build trust and strengthen
        relationships as a reliable partner. We support our clients in
        navigating the complexities of inspection checks that contribute to
        clients success in delivering high-quality goods to the market.
      </div>{" "}
      <div className="py-3"></div>{" "}
      <div className="bg-[#F4F4F4] px-4 py-5">
        <div className="mt-3 w-full text-left mb-2 text-2xl _font-bold leading-tight tracking-tight text-black">
          Providing a safe and secure business environment
        </div>
        <div className="flex flex-row space-x-4 justify-center">
          <div className="flex flex-col space-y-6 w-3/5">
            <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
              Our mission is to increase safety, reduce risks, and provide more
              transparency for international trade markets. We utilize
              technology and data science to automate certain processes that
              help us to filter genuine business against misconduct
            </div>
            <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
              Ultimately, our goal is to become the enabler for buyers and
              sellers to successfully facilitate trade business with
              professional manner following global standards of trade business
              conduct.
            </div>{" "}
            <div className="py-5"></div>{" "}
          </div>
          <div className="flex flex-col w-2/5 mt-16">
            <div className="w-full text-left font-extralight text-4xl md:text-7xl leading-tight text-[#0460a9]">
              <img
                src="/assets/Sustainable_Development_Goal_17.png"
                className="h-[100px] w-[100px]"
              />
            </div>
            <div className="py-3"></div>{" "}
            <div className="w-full text-left leading-relaxed tracking-wide text-base text-black">
              UN SDG 17 goal is to: Strengthen the means of implementation and
              revitalize the global partnership for sustainable development,
              also to keep developing multi-stakeholder partnerships to
              facilitate knowledge exchange, expertise, technology, and
              financial resources is recognized as critical to overall success
              of the SDGs.
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
        <img src="/assets/inspection.png" />
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
