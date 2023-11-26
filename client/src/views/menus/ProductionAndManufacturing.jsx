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

const TypeATableTR = ({ o, t, th }) => {
  return (
    <tr className="bg-white group hover:bg-black hover:text-white border-b border-[#4472c4]">
      <td className="w-[60%] sticky bg-white group-hover:bg-black left-0 px-2 py-2.5 _font-bold">{o}</td>
      <td className="px-2 py-2.5">{t}</td>
      <td className="px-2 py-2.5">{th}</td>
    </tr>
  );
};

export default function SourcingProcurement() {
  return (
    <div className="flex flex-col">
      <div className="mb-3 w-full text-left text-5xl _font-bold leading-tight tracking-tight text-black">
        Developing new products at the leading facilities
      </div>
      <div className="w-full text-left text-xl _font-bold leading-relaxed tracking-normal text-black">
        We help clients to locate international producers and manufacturers for
        clients’ customized needs. We have an extensive network of producers and
        manufacturers in Europe, US, Middle East and Asia. Everything from
        textile to electronics, pharmaceuticals, housing, vehicles, space and
        beyond.
      </div>
      <div className="py-6"></div>
      <div className="flex flex-col space-y-3">
        <span className="_font-bold text-lg tracking-tight">
          Thinking of creating a new product? Get to know this information about
          production and manufacturing before you start
        </span>
        <div className="overflow-auto">
          <table className="w-full text-sm text-black">
            <thead className="text-sm text-left text-gray-900">
              <tr className="border-b-2 border-[#4472c4]">
                <th scope="col" className="bg-white sticky left-0 h-fit px-2 py-2.5 _font-bold">
                  Aspect
                </th>
                <th scope="col" className="px-2 py-2.5 _font-bold">
                  Production
                </th>
                <th scope="col" className="px-2 py-2.5 _font-bold">
                  Manufacturing
                </th>
              </tr>
            </thead>
            <tbody className="text-left whitespace-nowrap">
              <TypeATableTR
                o="Definition"
                t="The process of creating goods or services."
                th="The process of converting raw materials into finished products on a large scale."
              />
              <TypeATableTR
                o="Scale"
                t="Can be small or large scale."
                th="Typically large-scale operations."
              />
              <TypeATableTR
                o="Customization"
                t="Limited customization in some cases."
                th="Often allows for product customization."
              />
              <TypeATableTR
                o="Efficiency"
                t="May vary in efficiency based on the process."
                th="Focus on efficiency and lean production methods."
              />
              <TypeATableTR
                o="Automation"
                t="May involve manual labor and
              limited automation."
                th="Utilizes automation and robotics for efficiency."
              />
              <TypeATableTR
                o="Lead Time"
                t="Lead times can be longer,
              especially for custom items."
                th="Generally shorter lead times, especially for
              standard products."
              />
              <TypeATableTR
                o="Quality Control"
                t="Quality control can be more
              variable."
                th="Strict quality control measures are common."
              />
              <TypeATableTR
                o="Cost
              Management"
                t="Costs may be less predictable and
              may vary."
                th="Emphasizes cost control and cost reduction."
              />
              <TypeATableTR
                o="Inventory
              Management"
                t="May have higher inventory levels."
                th="Often uses Just-In-Time (JIT) inventory
              management."
              />
              <TypeATableTR
                o="Sustainability"
                t="Sustainability practices can vary
              widely."
                th="Increasing emphasis on sustainable manufacturing
              practices."
              />
              <TypeATableTR
                o="Flexibility"
                t="Limited flexibility in many cases."
                th="Can adapt to changing production needs more
              easily."
              />
              <TypeATableTR
                o="Regulations"
                t="Subject to relevant industry
              regulations."
                th="Subject to industry regulations and compliance
              requirements."
              />
            </tbody>
          </table>
        </div>
        <ol class="list-decimal marker:text-xs text-sm pl-4 pt-2">
          <li>
            This is a comparison table of differences between production and
            manufacturing. You can use this table to think about your product
            development strategy.
          </li>
        </ol>
      </div>
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        Where we can give you our advice
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Deciding when to choose production and manufacturing for a product
        depends on various factors, including the nature of the product, market
        demand, cost considerations, and your business goals. Here are some
        scenarios when choosing production and manufacturing makes sense:
      </div>
      <div className="py-3"></div>
      <ul class="list-[square] pl-6 marker:text-2xl space-y-3 mb-3">
        <li>
          <span class="_font-bold">Mass Production:</span> When you anticipate a
          high and consistent demand for a product, mass production is often the
          most cost-effective approach. This is suitable for items with a broad
          consumer base, such as consumer electronics, automotive components, or
          fast-moving consumer goods.
        </li>
        <li>
          <span class="_font-bold">Economies of Scale:</span> Production and
          manufacturing are ideal when economies of scale can be realized. The
          per-unit cost decreases as production volumes increase, making it
          cost-efficient for large quantities.
        </li>
        <li>
          <span class="_font-bold">Product Complexity:</span> For products that
          require precision, multiple components, or intricate assembly,
          manufacturing can provide the necessary expertise and machinery for
          high-quality production.
        </li>
        <li>
          <span class="_font-bold">Consistent Quality:</span> Manufacturing
          processes can be tightly controlled to maintain consistent product
          quality. This is important for industries where quality is a critical
          factor, such as pharmaceuticals, aerospace, and medical devices.
        </li>
        <li>
          <span class="_font-bold">Customization:</span> Even in a manufacturing
          context, some products can be customized to a certain extent, allowing
          for variations to meet specific customer demands while still
          benefiting from mass production cost advantages.
        </li>
        <li>
          <span class="_font-bold">Regulatory Compliance:</span> Products
          subject to strict regulatory and compliance requirements often benefit
          from manufacturing, as these facilities are typically equipped to meet
          and document compliance standards.
        </li>
        <li>
          <span class="_font-bold">Supply Chain Integration:</span> If your
          business model integrates manufacturing with other aspects of the
          supply chain, such as distribution and retail, in-house production can
          lead to streamlined operations and better control over the supply
          chain.
        </li>
        <li>
          <span class="_font-bold">Competitive Pricing:</span> To compete on
          price in a competitive market, manufacturing can be the most effective
          way to keep costs low and offer competitive pricing to customers.
        </li>
        <li>
          <span class="_font-bold">Market Entry:</span> When entering a new
          market or launching a new product, manufacturing can help meet initial
          demand and scale up production as needed.
        </li>
        <li>
          <span class="_font-bold">Long-Term Strategic Goals:</span> If your
          long-term strategic goals involve establishing your brand as a
          manufacturer and gaining a competitive edge through innovation and
          process optimization, investing in production facilities can be a
          strategic choice.
        </li>
        <li>
          <span class="_font-bold">Unique Expertise:</span> If your product
          requires unique expertise or proprietary manufacturing methods, it may
          be more practical to maintain control of the production process rather
          than relying on third-party manufacturers.
        </li>
        <li>
          <span class="_font-bold">Innovative Manufacturing Technologies:</span>{" "}
          When innovative manufacturing technologies, such as 3D printing or
          advanced automation, can be leveraged to improve efficiency and reduce
          costs.
        </li>
      </ul>{" "}
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        On the other hand, there are scenarios where you might opt for
        alternatives to traditional production and manufacturing, such as
        outsourcing, contract manufacturing, or 3D printing, when:
      </div>{" "}
      <ul class="list-[square] pl-6 marker:text-2xl space-y-3 mb-3">
        <li>
          <span class="_font-bold">Low Initial Demand:</span> If demand is
          uncertain or initially low, it may be more cost-effective to utilize
          alternatives until demand stabilizes.
        </li>
        <li>
          <span class="_font-bold">High Customization:</span> For highly
          customized or one-of-a-kind products, methods like 3D printing or
          artisanal production might be more suitable.
        </li>
      </ul>{" "}
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Ultimately, the decision to choose production and manufacturing should
        align with your product strategy, business goals, and the unique
        characteristics of the product and market. It's often wise to conduct a
        thorough cost-benefit analysis and assess the scalability and risk
        factors associated with each approach before making a decision.
      </div>
      <div className="py-3"></div>{" "}
      <div className="bg-[#F4F4F4] px-4 py-5">
        <div className="mt-3 w-full text-left mb-2 text-2xl _font-bold leading-tight tracking-tight text-black">
          How at Stankevicius International we help clients to manage business
          in global trade
        </div>
        <div className="flex md:flex-row flex-col md:space-x-4 space-x-0 justify-center">
          <div className="flex flex-col space-y-6 w-full md:w-3/5">
            <div className=""></div>{" "}
            <ul class="list-[square] pl-6 marker:text-2xl space-y-3 mb-3">
              <li>
                <span className="_font-bold">Sourcing Raw Materials:</span> We
                have an extensive network and we can help clients find reliable
                sources for raw materials at competitive prices. This is crucial
                for manufacturing client as it can impact production costs.
              </li>
              <li>
                <span className="_font-bold">Supplier Selection:</span> We can
                identify suitable suppliers and manufacturers based on specific
                requirements, quality standards, and production capabilities,
                helping clients choose the best partners for their projects.
              </li>
              <li>
                <span className="_font-bold">Quality Control:</span> We can
                conduct quality control inspections throughout the manufacturing
                process to ensure that products meet the required standards and
                specifications.
              </li>
              <li>
                <span className="_font-bold">Negotiating Contracts:</span> We
                can negotiate contracts on behalf of clients, ensuring favorable
                terms and conditions, including pricing, delivery schedules, and
                payment terms.
              </li>
              <li>
                <span className="_font-bold">Logistics and Shipping:</span> We
                can manage logistics and shipping arrangements, facilitating the
                movement of goods from suppliers to clients. This can include
                customs clearance, documentation, and transportation logistics.
              </li>
              <li>
                <span className="_font-bold">Market Insights:</span> We can
                provide market insights and trends, helping clients make
                informed decisions about production volume and product
                variations to meet market demand.
              </li>
              <li>
                <span className="_font-bold">Cost Efficiency:</span> We may help
                clients achieve cost savings through bulk purchasing, optimizing
                the supply chain, and leveraging their industry expertise.
              </li>
              <li>
                <span className="_font-bold">Risk Mitigation:</span> We can help
                manage risks related to supply chain disruptions, quality
                issues, and market volatility by diversifying suppliers and
                implementing risk mitigation strategies.
              </li>
              <li>
                <span className="_font-bold">Compliance and Regulations:</span>{" "}
                We assist clients in navigating regulatory and compliance
                requirements related to international trade, ensuring that
                products meet all necessary standards and certifications.
              </li>
              <li>
                <span className="_font-bold">Market Entry Support:</span> For
                clients looking to enter new markets, we can provide market
                entry strategies and assistance in adapting products to local
                preferences.
              </li>
              <li>
                <span className="_font-bold">Cost Analysis:</span> We can
                conduct cost-benefit analysis to determine the most
                cost-effective production and sourcing strategies for clients'
                specific needs.
              </li>
              <li>
                <span className="_font-bold">*Efficiency and Scalability:</span>{" "}
                We can recommend process improvements and help clients scale up
                their production capabilities efficiently as demand grows.
              </li>
            </ul>{" "}
            <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
              We act as intermediaries that bridge the gap between
              manufacturers, suppliers, and clients, offering a range of
              services that facilitate and optimize the production and
              manufacturing process. They can help clients reduce costs, manage
              risks, and ensure product quality, ultimately contributing to the
              success of their manufacturing endeavors.
            </div>{" "}
            <div className="py-5"></div>{" "}
          </div>
          <div className="flex flex-col w-full md:w-2/5 mt-0 md:mt-16">
            <div className="w-full text-left font-extralight text-4xl md:text-7xl leading-tight text-[#0460a9]">
              <img src="/assets/sdg9.png" className="h-[100px] w-[100px]" />
            </div>
            <div className="py-3"></div>{" "}
            <div className="w-full text-left leading-relaxed tracking-wide text-base text-black">
              UN SDG 9 goal is to: Build resilient infrastructure, promote
              inclusive and sustainable industrialization, and foster
              innovation.
            </div>
            <div className="py-3"></div>{" "}
            <div className="w-full _font-bold text-left leading-relaxed tracking-wide text-base text-black">
              Stankevicius Group is actively contributing to UN Sustainable
              Development Goal impact program.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
