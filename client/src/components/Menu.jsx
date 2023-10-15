import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import { RENDER_MENU } from "../MENUS";

const Menu = () => {
  const newMenuItems = [
    {
      link: "About",
      subLinks: [
        {
          link: "Introduction",
        },
        {
          link: "Our Company",
        },
        {
          link: "CEO's Letter",
        },
      ],
    },
    {
      link: "Private Clients",
      subLinks: [
        {
          link: "Small Business",
        },
        {
          link: "Institutions",
        },
      ],
    },
    {
      link: "International Trade Consulting",
      subLinks: [
        {
          link: "Sourcing and Procurement",
        },
        {
          link: "Production and Manufacturing",
        },
        {
          link: "Shipping and Logistics",
        },
        {
          link: "Inspection and Quality Checks",
        },
      ],
    },
    {
      link: "Contracting and Due Diligence",
      subLinks: [
        {
          link: "Business Audit",
        },
        {
          link: "Business Counterparty Due Diligence",
        },
        {
          link: "Professional Contracting",
        },
      ],
    },
    {
      link: "News & Insights",
      subLinks: [
        {
          link: "Company News",
        },
        {
          link: "Industry Insights",
        },
      ],
    },
  ];

  const [menuItems, setMenuItems] = useState(newMenuItems);

  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedSubLink, setSelectedSubLink] = useState(null);
  const [hoveredSubLink, setHoveredSubLink] = useState(null);

  const handleItemHover = (index) => {
    setHoveredItem(index);
    setSelectedSubLink(null);
    setHoveredSubLink(null);
  };

  const handleSubLinkClick = (subLinkIndex) => {
    setSelectedSubLink(subLinkIndex);
  };

  const handleSubLinkHover = (subLinkIndex) => {
    setHoveredSubLink(subLinkIndex);
  };

  return (
    <div className="fixed top-0 left-0 bg-white w-screen h-screen z-10">
      <div className="max-w-screen-xl mx-auto  h-full p-2 justify-center hidden md:flex">
        <div className="flex w-screen h-screen absolute top-0 left-0 -z-10">
          <div className="flex-1 w-1/2 h-full bg-white"></div>
          <div className="flex-1 h-full bg-[#F1F1F1]"></div>
        </div>
        <div className="w-1/2 h-full pt-20 flex">
          <div className="w-1/2">
            <div className="space-y-2 w-full pb-5 border-b-2">
              {menuItems.map((menuItem, index) => (
                <p
                  key={index}
                  className={`font-bold cursor-pointer px-5 py-2 border-l-2 border-l-transparent ${
                    hoveredItem === index
                      ? "hover:bg-[#F1F1F1] hover:border-l-[#221f1f] "
                      : ""
                  }`}
                  onMouseEnter={() => handleItemHover(index)}
                >
                  {menuItem.link}
                </p>
              ))}
            </div>
            <div className="space-y-2 w-full pt-5">
              {menuItems.map((menuItem, index) => (
                <p
                  key={index}
                  className={`cursor-pointer px-5 py-1 ${
                    hoveredItem === index ? "hover:font-bold" : ""
                  }`}
                  onMouseEnter={() => handleItemHover(index)}
                  onClick={() => handleSubLinkClick(index)}
                >
                  {menuItem.link}
                </p>
              ))}
            </div>
          </div>
          <div className="w-1/2">
            {hoveredItem !== null &&
              menuItems[hoveredItem].subLinks.map((subLink, index) => (
                <div
                  key={index}
                  className={`text-sm border-l-2 border-l-transparent ${
                    (selectedSubLink === null && hoveredSubLink === index) ||
                    selectedSubLink === index
                      ? "font-bold bg-[#F1F1F1] border-l-[#221f1f]"
                      : ""
                  } cursor-pointer px-5 py-2`}
                  onClick={() => handleSubLinkClick(index)}
                  onMouseEnter={() => handleSubLinkHover(index)}
                  onMouseLeave={() => setHoveredSubLink(null)}
                >
                  {subLink.link}
                </div>
              ))}
          </div>
        </div>
        <div className="w-1/2 h-full bg-[#F1F1F1] pt-20 pl-10 overflow-scroll">
          {/* {selectedSubLink !== null &&
            renderShowUp(menuItems[hoveredItem]?.subLinks[selectedSubLink])}
          {hoveredSubLink !== null &&
            selectedSubLink === null &&
            renderShowUp(menuItems[hoveredItem]?.subLinks[hoveredSubLink])} */}
          {selectedSubLink !== null && (
            <RENDER_MENU
              menu={menuItems[hoveredItem]?.subLinks[selectedSubLink]?.link}
            />
          )}
          {hoveredSubLink !== null && selectedSubLink === null && (
            <RENDER_MENU
              menu={menuItems[hoveredItem]?.subLinks[hoveredSubLink]?.link}
            />
          )}
        </div>
      </div>

      <MobileMenu />
    </div>
  );
};

export default Menu;
