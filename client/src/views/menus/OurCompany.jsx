import React from "react";

const ListCard = (props) => {
  return (
    <div className="">
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        {props?.a}
      </div>
      {props?.b?.map((a) => {
        return (
          <div className="w-full text-left leading-relaxed tracking-wide text-base text-black">
            {a}
          </div>
        );
      })}
    </div>
  );
};

export default function OurCompany() {
  return (
    <div className="flex flex-col">
      <div className="mb-3 w-full text-left md:text-6xl text-4xl  _font-bold leading-tight tracking-tight text-black">
        Our company
      </div>
      <div className="w-full text-left text-xl _font-bold leading-relaxed tracking-normal text-black">
        Stankevicius International is one of the world’s most innovative trade
        consulting companies. We use technology and data to address some of the
        most challenging business matters in international trade. Worldwide, we
        have helped clients to protect $10.0 bn in capital against international
        trade fraud since 2016.
      </div>
      <div className="py-4"></div>
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        Our purpose
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Our purpose is to reimagine general trading and improve the process of
        exercising business in international trade sector. We use our customized
        technology to filter and process data for simplifying complexities of
        the trading world. We aim to discover the value within the noisy trade
        market.
      </div>
      <div className="py-4"></div>
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        Our vision
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Our vision is to become the most valued and trusted international trade
        consulting company in the world.
      </div>
      <div className="py-4"></div>
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        Our company
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Stankevicius International is a trade consulting division under
        Stankevicius Group with the focus on providing business services to
        clients including sourcing and procurement, production and
        manufacturing, shipping and logistics, inspection and quality checks,
        business auditing, business counter-party due diligence and professional
        contracting.
      </div>

      <div className="py-4"></div>
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        Our Values and Behaviors underpin our culture
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        We encourage our people to be{" "}
        <span className="_font-bold">inspired</span>,{" "}
        <span className="_font-bold">curious</span> and{" "}
        <span className="_font-bold">unbossed</span> and to act always with{" "}
        <span className="_font-bold">integrity</span>.
      </div>
      <div className="py-3"></div>
      <div className="flex flex-row">
        <div className="block h-1 w-full border-b border-[#4472c4]"></div>
        <div className="block h-1 w-[5rem] border-b border-transparent"></div>
        <div className="block h-1 w-full border-b border-[#4472c4]"></div>
      </div>
      <div className="py-3"></div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <ListCard
          a="Inspired"
          b={["Engage our people", "Strive for patients", "Live our purpose"]}
        />
        <ListCard a="Curious" b={["Learn", "Be open", "Be self-aware"]} />
        <ListCard
          a="Unbossed"
          b={["Create clarity", "Serve others", "Own your actions"]}
        />
        <ListCard
          a="Integrity"
          b={["Be honest", "Have courage", "Do what is right"]}
        />
      </div>
      <div className="py-4"></div>
      <img src="/assets/ceo_bg.png" className="md:w-[80%] w-full" />
      <span className="text-xs mt-1 tracking-tight">
        Nicemode Charles, a Novartis researcher in Cambridge, Massachusetts, US
      </span>
    </div>
  );
}
