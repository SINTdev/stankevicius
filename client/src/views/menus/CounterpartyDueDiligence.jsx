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

export default function BusinessAudit() {
  return (
    <div className="flex flex-col">
      <div className="mb-3 w-full text-left text-6xl _font-bold leading-tight tracking-tight text-black">
        Validating background checks on your business counter-party
      </div>
      <div className="w-full text-left text-xl _font-bold leading-relaxed tracking-normal text-black">
        Business counter-party due diligence is the process of thoroughly
        investigating the background, financial stability, and integrity of
        potential partners, clients, or suppliers. It helps mitigate risks, such
        as fraud, financial instability, or unethical practices, ensuring
        informed and secure business decisions in today's complex global
        business landscape.
      </div>
      <div className="py-4"></div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Business counter-party due diligence is essential to protect companies
        from risks and potential harm. It safeguards against fraud, financial
        losses, and reputational damage. By thoroughly assessing the integrity,
        financial health, and background of partners or clients, businesses make
        informed decisions, fostering trust and security in their operations.
      </div>
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        How we help clients to run due diligence on their business
        counterparties
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We have the expertise and resources to conduct thorough investigations,
        ensuring a comprehensive assessment of financial stability, legal
        compliance, and reputation. Our independence from the transaction
        minimizes conflicts of interest, guaranteeing unbiased, objective
        results.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We also have access to extensive databases and global networks, enabling
        us to uncover hidden risks and potential red flags that may elude an
        in-house team.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        This level of expertise, impartiality, and access to resources
        significantly enhances the reliability and depth of the due diligence
        process, ultimately safeguarding your business interests.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Business counter-party due diligence is a part of{" "}
        <ReferenceLink label={"Business Audit"} /> but it can also be performed
        separately upon client request.
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
