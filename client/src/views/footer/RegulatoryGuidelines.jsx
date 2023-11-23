import React, { useState, useEffect } from "react";
import Accordion from "../../components/Accordion";

export default function RegulatoryGuidelines(props) {
  return (
    <div className="max-w-screen-xl p-0 md:p-4 md:mx-auto mx-2">
      <div
        className="mt-10 flex justify-center items-center flex-col"
        id="main_form_div"
      >
        <div className="w-full">
          <div className="w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
            Novartis Privacy Hub
          </div>

          <div className="py-5"></div>
          <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
            Welcome to the Novartis Privacy Hub.
          </div>
          <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
            On this site you can read our privacy notices, get in contact with
            us, and learn about our approach and commitment to data privacy.
          </div>

          <div className="py-2"></div>
          <div className="py-2"></div>
          <Accordion
            items={[
              {
                title: "Our approach and commitment to data privacy",
                content: <span>Testing</span>,
              },
              {
                title: "Our approach and commitment to data privacy",
                content: <span>Testing</span>,
              },
              {
                title: "Our approach and commitment to data privacy",
                content: <span>Testing</span>,
              },
              {
                title: "Our approach and commitment to data privacy",
                content: <span>Testing</span>,
              },
              {
                title: "Our approach and commitment to data privacy",
                content: <span>Testing</span>,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
