import React from "react";

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

export default function BusinessAudit() {
  return (
    <div className="flex flex-col">
      <div className="mb-3 w-full text-left md:text-6xl text-4xl  _font-bold leading-tight tracking-tight text-black">
        Secure paperwork means secure business
      </div>
      <div className="w-full text-left text-xl _font-bold leading-relaxed tracking-normal text-black">
        Secure and professional contracts are the bedrock of international
        trade, providing the framework for smooth and trustworthy transactions
        across borders. They offer essential clarity by defining the roles,
        responsibilities, and obligations of each party involved. These
        contracts establish clear terms, including pricing, delivery schedules,
        and quality standards, which mitigate misunderstandings and disputes.
      </div>
      <div className="py-4"></div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We help clients to manage risks through contracting including various
        business terms, such as currency fluctuations and delivery delays, by
        setting out agreed-upon contingencies and dispute resolution mechanisms.
        In the intricate world of global commerce, secure and professional
        contracts foster confidence, bolstering the integrity of international
        trade, and facilitating prosperous business relationships on a global
        scale.
      </div>
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        8 essential factors to pay attention to when signing a contract
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        When signing a contract for international trade, it's essential to be
        thorough and attentive to various aspects to ensure a smooth and
        successful transaction. Here are eight essential factors to pay
        attention to:
      </div>
      <ul class="list-[square] pl-6 marker:text-2xl space-y-3 mb-3">
        <li>
          <span className="_font-bold">Incoterms and Shipping Terms:</span>{" "}
          Clearly define the Incoterms (e.g., FOB, CIF) and shipping terms to
          understand the division of responsibilities and costs related to
          shipping, insurance, and delivery.
        </li>
        <li>
          <span className="_font-bold">Payment Terms and Currency:</span>{" "}
          Understand the agreed-upon currency for transactions and payment
          terms. Be aware of the timeline for payments, including down payments,
          milestones, and final payments.
        </li>
        <li>
          <span className="_font-bold">Quality Standards and Inspection:</span>{" "}
          Clearly specify quality standards and inspection procedures, including
          who will perform inspections, when they will occur, and the criteria
          for accepting or rejecting goods.
        </li>
        <li>
          <span className="_font-bold">Tariffs and Trade Regulations:</span>{" "}
          Ensure the contract complies with international trade laws and
          regulations, including import/export requirements, tariffs, and any
          applicable trade sanctions.
        </li>
        <li>
          <span className="_font-bold">
            Legal Jurisdiction and Governing Law:
          </span>{" "}
          Determine the legal jurisdiction that will govern the contract and the
          applicable governing law for dispute resolution.
        </li>
        <li>
          <span className="_font-bold">Dispute Resolution Mechanisms:</span>{" "}
          Define the mechanisms for resolving disputes, such as arbitration,
          mediation, or litigation. Ensure that the contract outlines a clear
          and fair process for resolving disagreements.
        </li>
        <li>
          <span className="_font-bold">Force Majeure Clause:</span> Include a
          force majeure clause that outlines the conditions under which either
          party can be excused from performing their obligations due to
          unforeseen and uncontrollable events.
        </li>
        <li>
          <span className="_font-bold">Insurance and Risk Mitigation:</span>{" "}
          Consider insurance coverage and risk mitigation strategies to protect
          against unforeseen events, such as shipping losses or damage.
        </li>
      </ul>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        By carefully attending to these eight key factors, you can help secure
        the integrity of your international trade contract, minimize risks, and
        establish a strong foundation for a successful business transaction.
      </div>
      <div className="py-3"></div>{" "}
      <div className="flex flex-col my-3">
        <img src="/assets/contracting_bg.jpg" />
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
