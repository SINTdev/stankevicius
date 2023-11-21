import React, { useState } from "react";

const MobileMenu = (props) => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);
  const [activeSubLinkIndex, setActiveSubLinkIndex] = useState(null);

  const menuItems = [
    {
      link: "About",
      subLinks: [
        {
          link: "Introduction",
          to: "/menu/introduction",
        },
        {
          link: "Our Company",
          to: "/menu/our_company",
        },
        {
          link: "CEO's Letter",
          to: "/menu/ceo_letter",
        },
      ],
    },
    {
      link: "Private Clients",
      subLinks: [
        {
          link: "Small Business",
          to: "/menu/small_business",
        },
        {
          link: "Institutions",
          to: "/menu/institutions",
        },
      ],
    },
    {
      link: "International Trade Consulting",
      subLinks: [
        {
          link: "Sourcing and Procurement",
          to: "/menu/sourcing_procurement",
        },
        {
          link: "Production and Manufacturing",
          to: "/menu/production_manufacturing",
        },
        {
          link: "Shipping and Logistics",
          to: "/menu/shipping_logistics",
        },
        {
          link: "Inspection and Quality Checks",
          to: "/menu/inspection_quality",
        },
      ],
    },
    {
      link: "Contracting and Due Diligence",
      subLinks: [
        {
          link: "Business Audit",
          to: "/menu/business_audit",
        },
        {
          link: "Business Counterparty Due Diligence",
          to: "/menu/counterparty_due_diligence",
        },
        {
          link: "Professional Contracting",
          to: "/menu/professional_contracting",
        },
      ],
    },
    {
      link: "News & Insights",
      subLinks: [
        {
          link: "Stankevicius News",
          to: "/menu/stankevicius_news",
        },
        {
          link: "Industry Insights (Partner Content)",
          to: "/menu/industry_insights",
        },
      ],
    },
  ];

  const handleLinkClick = (index) => {
    if (activeLinkIndex === index) {
      setActiveLinkIndex(null);
    } else {
      setActiveLinkIndex(index);
    }
  };

  const handleSubLinkClick = (index) => {
    if (activeSubLinkIndex === index) {
      setActiveSubLinkIndex(null);
    } else {
      setActiveSubLinkIndex(index);
    }
  };

  return (
    <div className="w-full md:hidden py-5 space-y-3 mt-20 px-4">
      {menuItems?.map((item, index) => {
        return (
          <div key={index} className="w-full">
            <div
              className="flex items-center justify-between font-bold text-black mb-2 cursor-pointer"
              onClick={() => handleLinkClick(index)}
            >
              <p>{item.link}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            {activeLinkIndex === index && (
              <div className="space-y-1">
                <ul className="text-sm font-medium space-y-1 underline">
                  {item?.subLinks?.map((subLink, subIndex) => {
                    return (
                      <li key={subIndex} className="">
                        <div
                          className="flex items-center justify-between cursor-pointer"
                          onClick={() => handleSubLinkClick(subIndex)}
                        >
                          <span
                            onClick={() => {
                              props?.navigate(subLink.to);
                              props?.setIsMenuOpen(false);
                            }}
                            className="hover:underline"
                          >
                            {subLink.link}
                          </span>
                          {subLink.subLinks && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          )}
                        </div>
                        {activeSubLinkIndex === subIndex &&
                          subLink.subLinks && (
                            <ul className="ml-4 text-sm font-medium space-y-1 underline">
                              {subLink.subLinks.map(
                                (nestedSubLink, nestedSubIndex) => (
                                  <li key={nestedSubIndex}>
                                    <a href="#" className="hover:underline">
                                      {nestedSubLink}
                                    </a>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        );
      })}
      {/* <div className="w-full">
        <div
          className="flex items-center justify-between font-bold text-black mb-2 cursor-pointer"
          onClick={null}
        >
          <p>Register</p>
        </div>
      </div> */}
    </div>
  );
};

export default MobileMenu;
