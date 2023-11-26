import React from "react";

const ReferenceItem = ({ label }) => {
  return (
    <div className="cursor-pointer w-fit items-center _font-bold text-left leading-normal tracking-normal text-lg text-black">
      {label}
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
    <a href={to || "#"} target="_blank" className="w-fit flex">
      <div className="cursor-pointer underline hover:no-underline w-fit items-center _font-bold leading-normal tracking-normal text-base text-black">
        <span className="">{label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="inline w-4 h-4 ml-1 transition-all duration-300 ease-in-out text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </div>
    </a>
  );
};

export default function BusinessAudit() {
  return (
    <div className="flex flex-col">
      <div className="mb-3 w-full text-left text-4xl md:text-6xl _font-bold leading-tight tracking-tight text-black">
        Understanding the motive of transactions
      </div>
      <div className="w-full text-left text-xl _font-bold leading-relaxed tracking-normal text-black">
        Comprehending transaction motives is crucial in international trade.
        Companies can resort to deceit, misconduct, and financial theft,
        emphasizing the importance of thorough due diligence. Vigilance helps
        safeguard against fraudulent activities, reinforcing the need for
        ethical and transparent dealings in the global marketplace to prevent
        financial losses and legal entanglements.
      </div>
      <div className="py-4"></div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Companies engaged in global commerce may conceal other ulterior
        intentions, such as evading taxes, smuggling, or engaging in illicit
        activities. Unraveling these hidden agendas requires diligent due
        diligence, as such actions can have serious legal and reputational
        consequences, emphasizing the importance of transparent and ethical
        business practices in international trade.
      </div>
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
        Preparing business audit for the first-time
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        For a company focusing on growth and doing business internationally, and
        transacting for goods or services, a business audit might be the
        farthest thing from management’s mind. Eventually, however, many
        companies get to the point where very often deals get stuck.
      </div>
      <div className="py-3"></div>
      <div className="mb-3 w-full text-left font-extralight text-3xl italic leading-tight text-[#0460a9]">
        The biggest issues come along when there are deposits in place and the
        transactional party becomes worried and second guesses if the decision
        making was correct to believe the counter-party being able to supply or
        provide certain products or services.
      </div>
      <div className="py-3"></div>{" "}
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        At this point, the money is already lost and taking legal action in
        international business, in most cases, is not worth the cost and time,
        because it is very expensive and frustrating.
      </div>
      <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
        Business audits are designed to prevent such scenarios in the early
        stage of the deal before transactions take place. These are the
        considerations to look after before signing a contract or transacting:
      </div>
      <div className="py-3"></div>{" "}
      <div className="bg-[#F4F4F4] overflow-auto px-4 py-10 flex flex-row space-x-4 justify-center">
        <div className="flex flex-col space-y-6 w-3/5">
          <div className="mt-3 w-full text-left mb-2 text-2xl _font-bold leading-tight tracking-tight text-black">
            Considerations to look after before signing a contract or
            transacting
          </div>
          <ul class="list-[square] pl-6 marker:text-2xl space-y-3 mb-3">
            <li>
              <span className="_font-bold">
                Understanding the introducing party
              </span>
              : Very often intermediary companies that do introductions lack
              experience and knowledge. Before proceeding with intermediary
              recommendations, it is important to have an understanding of the
              quality of execution and the level of judgment of the intermediary
              company.
            </li>
            <li>
              <span className="_font-bold">
                Engaging in party’s confirmation
              </span>
              : It is very likely that introductory parties may refer large
              enterprises and even government references or semi-government
              entities as partners who are vouching and supporting them or even
              recommending. Engaging in such confirmation directly with
              mentioned parties is one step closer to the truth.
            </li>
            <li>
              <span className="_font-bold">
                Extensive check on the transacting counter-party
              </span>
              : After the background check of introductory companies, a deep
              dive into the transactional counter-party takes place. At this
              stage, it is not required to ask for any material from the company
              itself. Of course, if they can provide any additional material
              such as a company profile or any supportive documents of their
              business, it would be helpful. However, most of the information is
              available in global databases, so it’s not required to show the
              judgmental side to the counter-party to avoid relationship damage.
            </li>
            <li>
              <span className="_font-bold">Documentation due diligence</span>:
              Once the business moves forward to the point of document sharing
              and contract signing, extreme precaution is required. Any
              documentation shared by the counter-party must be thoroughly
              checked and vetted by professionals. Everything from QR codes to
              signatures and stamps, including company’s addresses and company’s
              representation is questioned.
            </li>
            <li>
              <span className="_font-bold">
                Finding logical connection and reasoning
              </span>
              : When dealing with international companies, we are also dealing
              with different cultures and different models of thought and
              mindset. For instance, in Europe and the US, it is very common to
              sell a product when you have a product in possession, but in the
              Middle East and Africa, it is very common to get the payment first
              and then search for the product. In reality, the purchasing party
              is looking for trust and reliability, assuming the counter-party
              is genuine and does possess the product or is able to provide the
              service that they actually offer on paper. The connection between
              the paper offering and reality aspects in many cases do not match.
              That is one of the parts which requires thorough investigation.
            </li>
            <div className="py-1"></div>
            <span className="">
              Additionally, story telling is something to look at and analyze
              especially when counter-party keeps mentioning other large
              enterprises and try to link themselves with those enterprises.
              There is always a reason and logic behind everything. Fraud is
              under high alert.
            </span>
            <li>
              <span className="_font-bold">
                Know the indicators of potential risks
              </span>
              : When analyzing and doing due diligence about the counter-party,
              a business audit opens new questions that you should ask the
              counter-party. Based on their reaction and answers, you can easily
              understand how genuine the company is and if what they are saying
              is true. During a business audit, a lot of new information can
              come up which was not shared from the beginning. Business audit
              points out the risks and uncertainty.
            </li>
            <li>
              <span className="_font-bold">
                Be mindful and take into consideration any questions that may
                arise from the business audit
              </span>
              : Some information that is discovered during the business audit
              may sound weird or not accurate, but don’t rush, and think if
              there could be something related to it. Business audit is not done
              for digging dirt on the counter-party but rather uncovering the
              maximum amount of information about the counter-party that may be
              useful and beneficial for the transactional party to know before
              engaging in transactional business.
            </li>
            <li>
              <span className="_font-bold">
                Determine whether the counter-party owns what they say before
                signing the final contract
              </span>
              : Business audit can reveal the information which was unexpected
              to find. Many companies may not even realize or simply won’t be
              able to separate the truth from deceit, but with professional
              help, we ensure clients to provide them with the most important
              and accurate data on the counter-party.
            </li>
          </ul>
          <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
            Running a background check on the counter-party is not it, but also
            diving deep on the contracting itself including checking terms and
            conditions is part of the business audit. Finding all the possible
            loopholes in the business deal is what business audit is designed
            for.
          </div>{" "}
          <span className="my-3 text-left leading-relaxed tracking-wide text-base text-black">
            <span className="w-fit">See our full material on </span>
            <ReferenceLink
              label={
                "Investigative Business Audit Against Fraud and Intentional Deceit"
              }
              to="https://www.corporate.stankeviciusgroup.com/assets/company-material/Business-Audit-Stankevicius.pdf"
            />
          </span>
        </div>
        <div className="flex flex-col w-2/5 mt-16">
          <div className="w-full text-left font-extralight text-2xl md:text-4xl leading-tight text-[#0460a9]">
            8 considerations
          </div>
          <div className="w-full flex flex-row items-center _font-bold text-left leading-relaxed tracking-wide text-base text-black">
            when working on transactional deals internationally
          </div>
        </div>
      </div>
      <div className="py-3"></div>{" "}
      <div className="flex flex-col my-3">
        <img src="/assets/business_audit.png" />
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
