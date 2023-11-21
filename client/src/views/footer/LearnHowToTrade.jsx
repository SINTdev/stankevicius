import React, { useState, useEffect } from "react";
import Accordion from "../../components/Accordion";

export default function LearnHowToTrade(props) {
  return (
    <div className="max-w-screen-xl mx-auto p-0 md:p-4">
      <div
        className="mt-10 flex justify-center items-center flex-col"
        id="main_form_div"
      >
        <div className="w-full">
          <div className="w-full text-left text-4xl _font-bold leading-tight tracking-tight text-black">
            Open Source
          </div>

          <div className="py-5"></div>
          <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
            Novartis uses the open-source Drupal content management framework
            for many key websites, including our flagship global site
            Novartis.com, main country sites, portals for healthcare
            professionals, and certain product and disease awareness sites.
          </div>
          <div className="py-1"></div>
          <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
            Drupal is a powerful and flexible platform which gives Novartis the
            foundations for great audience-focused digital experiences covering
            company information, campaigns, tools and services. Our commitment
            to Drupal and the open-source community began in 2014 when corporate
            websites began migrating to Drupal 7.
          </div>
          <div className="py-1"></div>
          <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
            In October 2021 Novartis.com relaunched on Drupal 9, joining pilot
            sites including Novartis Foundation and Novartis Campus on the
            platform. The Drupal 9 upgrades also included a fresh new design
            system, audience-first navigation, content improvements and a
            renewed commitment to accessibility. In the months following country
            corporate sites and generics division site Sandoz.com also migrated
            to Drupal 9.
          </div>
          <div className="py-1"></div>
          <div className="my-3 w-full text-left leading-relaxed tracking-wide text-base text-black">
            The corporate web portfolio was upgraded to Drupal 10 in September
            2023. Novartis continues to be an active supporter of the Drupal
            open-source community including sponsorship of DrupalCon Lille in
            October 2023.
          </div>

          <div className="py-2"></div>
          <div className="py-2"></div>
          <Accordion
            items={[
              {
                title: "Web Team",
                content: <span>Testing</span>,
              },
              {
                title: "Developers",
                content: <span>Testing</span>,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
