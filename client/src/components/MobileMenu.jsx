import React, { useState } from "react";

const MobileMenu = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);
  const [activeSubLinkIndex, setActiveSubLinkIndex] = useState(null);

  const menuItems = [
    {
      link: "About",
      subLinks: [
        {
          link: "Board of Directors",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
        {
          link: "Executive Committee",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
        { link: "Strategy" },
        {
          link: "Products",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
        {
          link: "Innovative Medicines",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
        {
          link: "Therapeutic",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
        {
          link: "Partners",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
        {
          link: "Suppliers",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
      ],
    },
    {
      link: "Patients and Caregivers ",
      subLinks: [
        {
          link: "Innovative Medicines",
        },
        {
          link: "Therapeutic",
        },
        {
          link: "Partners",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
        {
          link: "Suppliers",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
      ],
    },
    {
      link: "Healthcare Professionals ",
      subLinks: [
        {
          link: "Partners",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
        {
          link: "Suppliers",
        },
      ],
    },
    {
      link: "ESG ",
      subLinks: [
        {
          link: "Executive Committee",
        },

        {
          link: "Partners",
        },
        {
          link: "Suppliers",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
      ],
    },
    {
      link: "Investors ",
      subLinks: [
        {
          link: "Board of Directors",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
        {
          link: "Executive Committee",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
        { link: "Strategy" },
        {
          link: "Products",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
        {
          link: "Innovative Medicines",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
        {
          link: "Therapeutic",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
        {
          link: "Partners",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
        {
          link: "Suppliers",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
      ],
    },
    {
      link: "News",
      subLinks: [
        {
          link: "Board of Directors",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },

        {
          link: "Partners",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
        {
          link: "Suppliers",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
      ],
    },
    {
      link: "Careers",
      subLinks: [
        {
          link: "Board of Directors",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
        {
          link: "Executive Committee",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
        { link: "Strategy" },
        {
          link: "Products",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
        {
          link: "Innovative Medicines",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
        {
          link: "Therapeutic",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
        {
          link: "Partners",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
        },
        {
          link: "Suppliers",
          subLinks: ["Joerg Reinhardt", "Joerg Reinhardt "],
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
                          <a href="#" className="hover:underline">
                            {subLink.link}
                          </a>
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
    </div>
  );
};

export default MobileMenu;
