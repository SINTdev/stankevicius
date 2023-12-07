import React, { useState, useEffect, useRef } from "react";
import Accordion from "../../components/Accordion";
import SavingOptions from "../../components/SavingOptions";
import { getPageMargins } from "../../CONSTANT";

export default function RegulatoryGuidelines(props) {
  const component = useRef();
  return (
    <div className="max-w-screen-xl p-0 md:p-4 md:mx-auto mx-2">
      <div
        className="mt-10 flex justify-center items-center flex-col"
        id="main_form_div"
        ref={component}
      >
        <style>{getPageMargins()}</style>
        <div className="w-full">
          <div className="w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
            Regulatory Guidelines
          </div>
          <div className="py-5"></div>
          <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
            On this site you can read our regulatory guidelines, and learn about
            our policies. It is important you understand the risks and
            liabilities for your own security before engaging in international
            trade via Stankevicius web platform.
          </div>

          <div className="py-2"></div>
          <div className="py-2"></div>
          <Accordion
            items={[
              {
                title: "Trading Policy",
                content: (
                  <span>
                    Whether you are buying or selling products or even if you
                    are a trader, we ask to use Stankevicius International GO
                    trading platform in appropriate manner, avoiding any
                    fraudulent or illegal transactions, avoiding any uncertain
                    or unconcontrolled trades, avoiding any long chain broker
                    trades that you are not a mandate of, and avoid any
                    engagement or activity that is not a proper and decent and
                    is misleading. Our trading policy falls for all users to
                    respect standard protocols of international market and act
                    fair and reasonable in trade business.{" "}
                  </span>
                ),
              },
              {
                title: "Safety Trading Regulatory Policy",
                content: (
                  <span>
                    Our safety trading regulatory protocol encourages all users
                    to use buy and sell platform features. This way you will be
                    in contact with Stankevicius International directly and
                    Stankevicius International will review your trades and your
                    business counterparty’s background. Promoted trades that
                    include third party company names with links to third party
                    company websites considered to be unregulated and are not
                    supervised by Stankevicius International. If you contact
                    third party company outside Stankevicius International GO
                    trading platform, you bare risk of getting engaged in
                    fraudulent activities, and may end up losing capital.
                    <span className="block py-2" />
                    If promoted trades include third party company websites, it
                    is useful to check them and have your own due diligence done
                    but is not recommended to engage in direct business by
                    yourself. All trading activities should be engaged through
                    our platform for maximum security both on buyer and seller
                    sides.
                  </span>
                ),
              },
              {
                title: "Trading Risks",
                content: (
                  <span>
                    Note that Stankevicius International GO trading platform is
                    an open public platform where anyone can register and submit
                    trades. While we monitor majority of the submitted trades,
                    we cannot guarantee that all submitted trades are genuine.
                    <span className="block py-3" />
                    <h1 className="_font-bold text-black text-md m-0 p-0">
                      How to identify legitimate trades?
                    </h1>
                    <span className="block py-1" />A legitimate trade would be
                    traded by Stankevicius International with a tag on the trade
                    identifying the trading company’s name. For example the
                    trades submitted by Stankevicius International have a
                    company mark which confirms that the trade is verified by
                    our firm.
                    <span className="block py-3" />
                    <h1 className="_font-bold text-black text-md m-0 p-0">
                      Promoted trades
                    </h1>
                    <span className="block py-1" />
                    Other firms can promote their company name tags on trades by
                    advertising. However, always note that when visiting third
                    party websites there are risks as promotions are available
                    to all platform users and we cannot guarantee complete
                    supervision of every single trade.
                    <span className="block py-3" />
                    <h1 className="_font-bold text-black text-md m-0 p-0">
                      How we handle risk?
                    </h1>
                    <span className="block py-1" />
                    If the trade is promoted by third party company you always
                    have a choice to contact the company directly through their
                    own website or initiate the trade through Stankevicius
                    International. If you initiate your trade through us, we
                    will make sure to prioritize security and do due diligence
                    on your behalf. Some users may contact third party companies
                    directly to avoid commission fees and other business service
                    fees, however in such cases the user will take full
                    liability on his own action if trade would go wrong. It is
                    recommended to initiate your trade action of buying or
                    selling through the platform directly. Promoted company name
                    tags on the trades are for single reason only to get
                    familiarity with the seller, and be able to run your own due
                    diligence in the meantime. Please note again, that all
                    buying and selling actions should be done through the
                    platform only to maximize security.
                    <span className="block py-3" />
                    <h1 className="_font-bold text-black text-md m-0 p-0">
                      Liabilities and guarantees
                    </h1>
                    <span className="block py-1" />
                    Any and all trades are not guaranteed by Stankevicius
                    International, and Stankevicius International takes no
                    liabilities of any and all outcomes of any and all trades
                    listed on the platform. Stankevicius International GO
                    trading platform only provides market data but does not
                    guarantee or insure any transactions. Stankevicius
                    International may only provide consulting services to
                    clients who choose to consult for professional advice.
                    <span className="block py-1" />
                  </span>
                ),
              },
              {
                title:
                  "Partner Content Terms & Conditions and Partner Content Guidelines",
                content: (
                  <span>
                    Partner Content is relates to news publishing on
                    Stankevicius International GO trading platform. Users can
                    publish business news related content which can be
                    promotional. Content can include various company
                    announcements, promotions, marketing material, CEO
                    interviews, standard company press releases and various
                    other business formats. Partner Content should not include
                    heavy underpricing nor heavy overpricing. Partner Content
                    should not include schemes, fake and hyped news, fraudulent
                    intentional news, news with an advantage scheme angle.
                    Partner Content Guidelines strictly forbid to publish any
                    inappropriate content, disturbing content, misleading
                    content, not truthful. Any suspicious content not following
                    Partner Content Terms & Conditions and Partner Content
                    Guidelines, will be removed without a notice without a
                    refund.
                  </span>
                ),
              },
              {
                title:
                  "Terms of Use and Purchase Policy of Advertising Credits",
                content: (
                  <span>
                    Advertising credits are used for promotions inside the
                    platform including company promotions, trade promotions and
                    news publishing. Afer purchase, advertising credits cannot
                    be resold or exchanged. Users can use advertising credits 1)
                    to promote their company in their trades, 2) to promote
                    their trades on Trade Quotes bar, 3) to publish promotional
                    news about their business.
                    <span className="block py-2" />
                    You can purchase Advertising Credits directly with your
                    credit/debit card on our platform. We do not store your card
                    information, and payments are secure. We use Shopify
                    services to perform card transactions.
                  </span>
                ),
              },
              {
                title: "Advertising Liabilities, Guidelines and Policy",
                content: (
                  <span>
                    When advertising on Stankevicius International GO trading
                    platform you acknowledge and agree to take full
                    responsibility of your own promoted content whether a
                    website, news article and even trade itself. You as content
                    publisher are responsible for your own content.
                    <span className="block py-2" />
                    You should not advertise irresponsible content that leads
                    any fraudulent or illegal activities. We monitor advertised
                    content and if we think your content is not fit, your
                    content will be removed immediately and you will not be
                    refunded.
                    <span className="block py-2" />
                    You should not promote 1) empty, unprofessional company
                    websites, 2) confusing content such as heavily underpriced
                    or overpriced trades, 3) any information that is not true,
                    fake news, hyped news, leveraged news.
                  </span>
                ),
              },
            ]}
          />
        </div>
      </div>
      <SavingOptions
        className="mt-10"
        desc="Example desc"
        title="Regulatory Guidelines"
        component={component}
      />
    </div>
  );
}
