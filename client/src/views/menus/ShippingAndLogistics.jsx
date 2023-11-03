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
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        Ways we assist clients in dealing with shipping and logistics
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        The complexities of global commerce, from customs regulations to supply
        chain intricacies, can be daunting. We assist to facilitate the seamless
        movement of goods between buyers and sellers across international
        borders.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We have extensive knowledge of the global logistics landscape, including
        an in-depth understanding of customs procedures, shipping routes, and
        documentation requirements. This expertise is invaluable for buyers who
        might be less familiar with the intricacies of international trade.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We also help clients identify reliable and cost-effective shipping
        solutions. We leverage our global network of logistics providers and
        shipping carriers to negotiate favorable terms for our clients. This
        often results in cost savings and ensures that goods are transported in
        a timely and secure manner.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        By partnering with Stankevicius International, clients gain access to a
        broader new business opportunity network. As we established
        relationships with various buyers and sellers across regions, we are
        able to connect our new clients to our existing network.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We also help clients to navigate the complexities of international trade
        by offering insights into market demand, pricing strategies, and
        shipping preferences.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We also excel at optimizing supply chain efficiency by assisting clients
        in managing inventory, reducing lead times, and avoiding costly delays.
        Through our understanding of the global supply chain ecosystem, we help
        clients to ensure that products are delivered as efficiently as
        possible.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Nevertheless, the coordination and documentation associated with
        international shipping can be overwhelming. Stankevicius International
        plays an instrumental role in this regard. We oversee the preparation of
        all necessary documents, such as bills of lading, commercial invoices,
        and customs declarations. This not only ensures compliance with
        international regulations but also minimizes the risk of
        shipping-related complications.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        By leveraging our expertise, networks, and negotiation skills, we
        contribute to the success of both buyers and sellers in the global
        marketplace. We enable the seamless flow of goods, reduce costs,
        minimize risks, and enhance the overall efficiency of international
        trade. Thus, our in international commerce remains pivotal and continues
        to evolve to meet the ever-changing demands of the global market.
      </div>
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        Engaging vendors through our interactive trade platform
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Our interactive trade platform is designed for multi purpose use within
        global trade related activities. It is likely that you may end up
        engaging with third party supplier companies through our trading
        platform that also provide shipping and logistics. Our goal is to bring
        complete capabilities that fall under the execution of general trading.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We recommend clients using our trading platform to contact us directly
        for data and pricing comparisons. While the public information is
        submitted freely in our platform, we may not be able to monitor all
        listed trade activities, especially the promoted ones.
      </div>{" "}
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
