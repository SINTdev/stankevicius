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
                content: <span>Testing</span>,
              },
              {
                title: "Safety Trading Regulatory Policy",
                content: <span>Testing</span>,
              },
              {
                title: "Trading Risks",
                content: <span>Testing</span>,
              },
              {
                title:
                  "Terms of Use and Purchase Policy of Advertising Credits",
                content: <span>Testing</span>,
              },
              {
                title: "Advertising Liabilities, Guidelines and Policy",
                content: <span>Testing</span>,
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
